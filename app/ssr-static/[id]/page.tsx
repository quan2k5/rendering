import React from 'react';
import axios from 'axios';
function getData(id:any) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.data)
}

export default function Page(Props:any) {
  const Ids = ['1', '2', '3'];
    const find=()=>{
        let find=Ids.map((e:any)=>{
            return e==Props.params.id
        })
        if(find){
            return true;
        }
        return false
    }
  if (find()){
    return (
      <div>
        <h1>ID không có</h1>
      </div>
    );
  }
  let post:any;
  getData(Props.params.id)
    .then(data => {
      post = data;
    })
  return (
    <div>
        <div>
          <h1 style={{fontSize:'large'}}>{post.title}</h1>
          <p>{post.body}</p>
        </div>
    </div>
  );
}
