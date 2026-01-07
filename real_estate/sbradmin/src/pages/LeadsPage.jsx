import React from 'react';
import config from '../config';

const LeadsPage = () => {
    const [leads, setLeads] = React.useState([]);

    React.useEffect(() => {
        const fetchLeads = async () => {
            const token = localStorage.getItem('sbr_admin_token');
            try {
                const response = await fetch(`${config.API_URL}/api/leads`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    setLeads(data);
                }
            } catch (error) {
                console.error('Error fetching leads:', error);
            }
        };
        fetchLeads();
    }, []);

    // Analytics Calculations
    const totalLeads = leads.length;

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const recentLeads = leads.filter(l => new Date(l.createdAt) > oneWeekAgo).length;

    const StatsCard = ({ title, value, subtitle }) => (
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</span>
            <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', lineHeight: 1 }}>{value}</span>
            {subtitle && <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>{subtitle}</span>}
        </div>
    );

    return (
        <div>
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <h1>Leads & Inquiries</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>Potential clients from the main website form.</p>
            </div>

            {/* Analytics Dashboard */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
            }}>
                <StatsCard title="Total Leads" value={totalLeads} subtitle="All time inquiries" />
                <StatsCard title="New (7 Days)" value={recentLeads} subtitle={`${recentLeads > 0 ? '+' : ''}${recentLeads} this week`} />
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                            <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Name</th>
                            <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Phone Number</th>
                            <th style={{ padding: '1rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map(lead => (
                            <tr key={lead.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                <td style={{ padding: '1rem' }}>{lead.name}</td>
                                <td style={{ padding: '1rem' }}>{lead.phone}</td>
                                <td style={{ padding: '1rem', color: 'var(--color-text-muted)' }}>
                                    {new Date(lead.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeadsPage;
