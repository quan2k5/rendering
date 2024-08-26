'use client'
import React, { useEffect, useState } from 'react';
export default function Page() {
  const [posts, setPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<any>('');
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);
      })
  }, []);
  useEffect(() => {
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm]);
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Tìm Kiếm Bài viết (CSR)</h1>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id} style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
