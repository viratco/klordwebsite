import React, { useState, useEffect } from 'react';
import { FaCloudUploadAlt, FaSave, FaTrash } from 'react-icons/fa';
import config from '../config';

const BlogManagementPage = () => {
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        category: 'Market Trends',
        excerpt: '',
        content: '',
        image: null
    });
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch(`${config.API_URL}/api/posts`);
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData(prev => ({ ...prev, image: file }));
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('sbr_admin_token');

        const data = new FormData();
        data.append('title', formData.title);
        data.append('category', formData.category);
        data.append('excerpt', formData.excerpt);
        data.append('content', formData.content);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            const response = await fetch(`${config.API_URL}/api/posts`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: data
            });

            if (response.ok) {
                alert('Post created successfully!');
                setFormData({
                    title: '',
                    category: 'Market Trends',
                    excerpt: '',
                    content: '',
                    image: null
                });
                setPreview(null);
                fetchPosts();
            } else {
                alert('Failed to create post');
            }
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Server error');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure?')) return;
        const token = localStorage.getItem('sbr_admin_token');

        try {
            const response = await fetch(`${config.API_URL}/api/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                fetchPosts();
            } else {
                alert('Failed to delete post');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div>
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <h1>Manage Blog</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>Create and manage your journal articles.</p>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Write New Article</h2>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>

                    {/* Image Upload */}
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
                            onChange={handleFileChange}
                            accept="image/*"
                            style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer'
                            }}
                        />
                        {preview ? (
                            <img src={preview} alt="Preview" style={{ maxHeight: '200px', borderRadius: '8px', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <FaCloudUploadAlt size={48} style={{ marginBottom: '1rem', color: 'var(--color-primary)' }} />
                                <h3>Upload Cover Image</h3>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Title</label>
                        <input name="title" value={formData.title} onChange={handleInputChange} placeholder="Article Title" required />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" value={formData.category} onChange={handleInputChange}>
                            <option value="Market Trends">Market Trends</option>
                            <option value="Interior Design">Interior Design</option>
                            <option value="Investment">Investment</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Landscape">Landscape</option>
                            <option value="Technology">Technology</option>
                            <option value="Lifestyle">Lifestyle</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Excerpt (Short Summary)</label>
                        <textarea name="excerpt" value={formData.excerpt} onChange={handleInputChange} rows={3} required />
                    </div>

                    <div className="form-group">
                        <label>Content (Full Article - HTML supported)</label>
                        <textarea name="content" value={formData.content} onChange={handleInputChange} rows={10} required />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaSave /> Publish Article
                        </button>
                    </div>

                </form>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Existing Articles</h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {posts.map(post => (
                        <div key={post.id} style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px',
                            background: 'rgba(255,255,255,0.02)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <img src={post.image || 'https://via.placeholder.com/60'} alt={post.title} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{post.title}</h3>
                                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{post.category} • {post.date}</p>
                                </div>
                            </div>
                            <button onClick={() => handleDelete(post.id)} style={{
                                background: '#ff4444', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
                            }}>
                                <FaTrash /> Delete
                            </button>
                        </div>
                    ))}
                    {posts.length === 0 && <p style={{ color: 'var(--color-text-muted)', textAlign: 'center' }}>No articles found.</p>}
                </div>
            </div>
        </div>
    );
};

export default BlogManagementPage;
