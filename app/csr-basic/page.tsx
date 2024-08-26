"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
      {users.map((item: any) => (
        <li>{item.name}</li> 
      ))}
      </ul>
    </div>
  );
}
