import React from 'react';
import axios from 'axios';
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/nonexistent-url');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}
export default async function Page() {
    let data;
    let errorMessage: string | null = null;

    try {
        data = await fetchData();
    } catch (error: any) {
        errorMessage = 'Do đường dẫn sai nên API sẽ không trả về dữ liệu.';
    }

    return (
        <div>
            <h1>Xử lý Lỗi với SSR</h1>
            {errorMessage ? (
                <p>{errorMessage}</p>
            ) : (
                <ul>
                    {data.map((item: any) => (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.body.substring(0, 100)}...</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
