import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import config from '../config';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
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

    return (
        <div className="blog-page">
            <Navbar />

            <div className="container">
                <header className="blog-header">
                    <h1>Journal & Insights</h1>
                    <p>Curated articles on luxury living, architectural design, and real estate market trends.</p>
                </header>

                <div className="blog-grid">
                    {posts.map(post => (
                        <Link to={`/blog/${post.id}`} key={post.id} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="blog-image-container">
                                <img src={post.image || 'https://via.placeholder.com/400x300'} alt={post.title} className="blog-image" />
                                <span className="blog-category">{post.category}</span>
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{post.date}</span>
                                <h2 className="blog-title">{post.title}</h2>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="read-more">
                                    Read Article
                                    <svg className="read-more-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {posts.length === 0 && (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem' }}>
                            <h3 style={{ color: 'var(--color-text-muted)' }}>No articles published yet.</h3>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogPage;
