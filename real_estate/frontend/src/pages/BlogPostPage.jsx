import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import config from '../config';
import './BlogPostPage.css';

const BlogPostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchPost = async () => {
            try {
                const response = await fetch(`${config.API_URL}/api/posts/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="blog-post-page">
                <Navbar />
                <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
                    <h1>Loading...</h1>
                </div>
                <Footer />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="blog-post-page">
                <Navbar />
                <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
                    <h1>Article Not Found</h1>
                    <Link to="/blog" className="back-link">Return to Journal</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <Navbar />

            <article className="blog-article">
                <div className="article-header">
                    <div className="article-meta">
                        <span className="article-category">{post.category}</span>
                        <span className="article-date">{post.date}</span>
                    </div>
                    <h1 className="article-title">{post.title}</h1>
                </div>

                <div className="article-image-container">
                    <img src={post.image || 'https://via.placeholder.com/1200x600'} alt={post.title} className="article-hero-image" />
                </div>

                <div className="article-container">
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div className="article-footer">
                        <Link to="/blog" className="back-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Back to Journal
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPostPage;
