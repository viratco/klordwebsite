import React, { useState } from 'react';
import './ContactFormSection.css';
import config from '../config';

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${config.API_URL}/api/leads`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you for your interest! We will contact you shortly.');
                setFormData({ name: '', phone: '' });
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Server error. Please try again.');
        }
    };

    return (
        <section id="contact" className="contact-form-section">
            <div className="container contact-container">
                <div className="contact-content">
                    <h2 className="contact-title">Schedule a Private Consultation</h2>
                    <p className="contact-subtitle">
                        Begin your journey to exceptional living.
                        Connect with our team to explore exclusive opportunities.
                    </p>

                    <form className="contact-form glass-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+1 (555) 000-0000"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Get Access
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
