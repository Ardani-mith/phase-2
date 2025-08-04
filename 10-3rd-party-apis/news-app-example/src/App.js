import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const BASE_URL = 'https://newsapi.org/v2/everything?q=tesla&from=2025-06-30&sortBy=publishedAt&apiKey=bd3c0228c5c2435fa3c032d1fff06d73';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(BASE_URL);
      setPosts(response.data.articles);
    } catch (err) {
      setError('Failed to fetch news articles. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchPostDetails = async (article) => {
    setSelectedPost(article);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      fetchPosts();
      return;
    }
    
    const filteredPosts = posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setLoading(false);
    setPosts(filteredPosts);
  };

  const handlePostClick = (article) => {
    fetchPostDetails(article);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app">
      <header>
        <h1>SUNIB NEWS</h1>
        <p className="subtitle">Explorer The Latest Sunib news from here</p>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search news articles..."
          />
          <button type="submit">Search</button>
          {searchQuery && (
            <button type="button" onClick={() => {
              setSearchQuery('');
              fetchPosts();
            }}>
              Clear
            </button>
          )}
        </form>
      </header>

      <main>
        {selectedPost ? (
          <div className="post-details">
            <button onClick={handleBack} className="back-button">
              ← Back to News
            </button>
            <article className="selected-post">
              <h2>{selectedPost.title}</h2>
              <div className="post-meta">
                <p className="author">
                  Author: {selectedPost.author}
                </p>
                <p className="source">
                  Source: {selectedPost.source?.name}
                </p>
                <p className="published">
                  Published: {new Date(selectedPost.publishedAt).toLocaleDateString()}
                </p>
              </div>
              {selectedPost.urlToImage && (
                <img 
                  src={selectedPost.urlToImage} 
                  alt={selectedPost.title}
                  className="article-image"
                />
              )}
              <p className="post-description">{selectedPost.description}</p>
              <p className="post-content">{selectedPost.content}</p>
              <a 
                href={selectedPost.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="read-full-article"
              >
                Read Full Article →
              </a>
            </article>
          </div>
        ) : (
          <div className="posts-grid">
            {posts.map((post, index) => (
              <article
                key={`${post.url}-${index}`}
                className="post-card"
                onClick={() => handlePostClick(post)}
              >
                {post.urlToImage && (
                  <img 
                    src={post.urlToImage} 
                    alt={post.title}
                    className="card-image"
                  />
                )}
                <div className="card-content">
                  <h3>{post.title}</h3>
                  <p className="card-description">
                    {post.description ? post.description.substring(0, 150) + '...' : 'No description available'}
                  </p>
                  <p className="card-meta">
                    <span className="source">{post.source?.name}</span>
                    <span className="date">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  </p>
                  <button className="read-more">Read More →</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App; 