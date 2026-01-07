import React, { useState, useEffect } from 'react';
import { FaCloudUploadAlt, FaSave } from 'react-icons/fa';

import config from '../config';

const AddPropertyPage = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('Villa');
    const [description, setDescription] = useState('');
    // const [price, setPrice] = useState(''); // Removed price
    const [status, setStatus] = useState('For Sale');
    const [files, setFiles] = useState([]); // Store actual file objects
    const [previews, setPreviews] = useState([]); // Store preview URLs
    const [properties, setProperties] = useState([]);

    // Fetch properties on mount
    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const response = await fetch(`${config.API_URL}/api/properties`);
            const data = await response.json();
            if (Array.isArray(data)) {
                setProperties(data);
            }
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this property?')) return;

        const token = localStorage.getItem('sbr_admin_token');
        try {
            const response = await fetch(`${config.API_URL}/api/properties/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                alert('Property deleted successfully');
                fetchProperties(); // Refresh list
            } else {
                alert('Failed to delete property');
            }
        } catch (error) {
            console.error('Error deleting property:', error);
            alert('Server error');
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setFiles(prev => [...prev, ...selectedFiles]);

            const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
            setPreviews(prev => [...prev, ...newPreviews]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('sbr_admin_token');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('location', location);
        formData.append('type', type);
        formData.append('description', description);
        // formData.append('price', price); // Removed price
        formData.append('status', status);
        files.forEach(file => {
            formData.append('images', file);
        });

        try {
            const response = await fetch(`${config.API_URL}/api/properties`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData,
            });

            if (response.ok) {
                alert('Property added successfully!');
                // Reset form
                setTitle('');
                setLocation('');
                setDescription('');
                setType('Villa');
                setStatus('For Sale');
                setFiles([]);
                setPreviews([]);
                fetchProperties(); // Refresh list
            } else {
                alert('Failed to add property.');
            }
        } catch (error) {
            console.error('Error adding property:', error);
            alert('Server error.');
        }
    };

    return (
        <div>
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <h1>Manage Properties</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>Add new listings or manage existing ones.</p>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Add New Property</h2>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>

                    {/* Media Upload Section */}
                    <div className="media-upload" style={{
                        border: '2px dashed var(--color-border)',
                        padding: '2rem',
                        textAlign: 'center',
                        borderRadius: 'var(--radius-md)',
                        position: 'relative',
                        background: 'rgba(255,255,255,0.01)',
                    }}>
                        <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            accept="image/*,video/*"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                opacity: 0,
                                cursor: 'pointer'
                            }}
                        />
                        <FaCloudUploadAlt size={48} style={{ marginBottom: '1rem', color: 'var(--color-primary)' }} />
                        <h3 style={{ marginBottom: '0.5rem' }}>Upload Images & Videos</h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                            Click or Drag files here
                        </p>

                        {/* Previews */}
                        {previews.length > 0 && (
                            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {previews.map((src, idx) => (
                                    <img key={idx} src={src} alt="Preview" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Basic Info */}
                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Property Title</label>
                        <input
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ex: Ethereal Heights"
                            style={{ fontSize: '1.1rem' }}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Type</label>
                        <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="Villa">Villa</option>
                            <option value="Mansion">Mansion</option>
                            <option value="Penthouse">Penthouse</option>
                            <option value="Estate">Estate</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Location</label>
                        <input name="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Ex: Beverly Hills, CA" />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>Description & Info</label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={5}
                            placeholder="Describe the property details, amenities, and unique features..."
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <button type="button" className="btn-secondary" style={{
                            padding: '0.75rem 1.5rem',
                            color: 'var(--color-text)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '6px'
                        }}>Cancel</button>

                        <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaSave /> Save Property
                        </button>
                    </div>

                </form>
            </div >

            {/* Existing Properties List */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Existing Properties</h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {properties.map(property => (
                        <div key={property.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1rem',
                            border: '1px solid var(--color-border)',
                            borderRadius: '8px',
                            background: 'rgba(255,255,255,0.02)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {property.images && property.images[0] && (
                                    <img src={property.images[0]} alt={property.title} style={{
                                        width: '60px',
                                        height: '60px',
                                        objectFit: 'cover',
                                        borderRadius: '4px'
                                    }} />
                                )}
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{property.title}</h3>
                                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{property.location}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDelete(property.id)}
                                style={{
                                    background: '#ff4444',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    {properties.length === 0 && (
                        <p style={{ color: 'var(--color-text-muted)', textAlign: 'center' }}>No properties found.</p>
                    )}
                </div>
            </div>
        </div >
    );
};

export default AddPropertyPage;
