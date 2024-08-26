'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function getData() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.data)
}
export default function Page() {
    const [posts, setPosts] = useState<any[]>([]);
    const fetchData = async () => {
        const data = await getData();
        setPosts(data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleRefresh = () => {  
     fetchData();   
    }
    return (
        <div>
            <button onClick={handleRefresh}>Refresh</button>
            <h2 style={{ fontSize: 'larger' }}>Danh sách Bài viết vs Refresh</h2>
            <ul>
                {posts.map((item: any) => (
                    <li key={item.id}>
                        <h3 style={{ fontSize: 'larger' }}>{item.title}</h3>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
