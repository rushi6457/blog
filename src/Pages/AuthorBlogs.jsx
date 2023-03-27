import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AuthorBlogs = () => {
    let [data,setData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/blog/allblogs`)
        .then((res) =>setData(res.data))
    },[])

    // let a = data.filter((el) =>el.author._id)
    // console.log(a);
    return (
        <div>
            
        </div>
    );
}

export default AuthorBlogs;
