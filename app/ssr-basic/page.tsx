'use client'
import React, { useEffect, useState } from 'react';

async function getPosts() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data1 = await data.json();
    return data1;
}

export default function Page() {
    const [posts, setPosts] = useState<any[]>([]);
    useEffect(() => {
        async function fetchData() {
            const allPosts = await getPosts();
            setPosts(allPosts);
        }
        fetchData();
    }, []);
    return (
        <div>
            <h1 style={{ fontSize: 'larger' }}>Danh sách bài viết</h1>
            <ul>
                {posts.map((item: any) => (
                    <li key={item.id}>
                        <h1 style={{ fontSize: 'larger' }}>{item.title}</h1>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
