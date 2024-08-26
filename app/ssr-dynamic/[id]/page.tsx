import React from 'react'
import axios from 'axios';
async function getPosts(id:any){
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.data)
}
export default async function page(Props:any) {
    const posts=await getPosts(Props.params.id);
  return (
    <div>
       <h2 className=''>Chi tiết bài viết</h2>
       <p style={{ fontSize: 'larger' }}>{posts.title}</p>
       <div>{posts.body}</div>
    </div>
  )
}