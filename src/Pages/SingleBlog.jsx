import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const [data,setData] = useState([])
    const {id} = useParams()
    console.log(id); 

    useEffect(()=>{
        axios.get(`http://localhost:5000/getsingleblog/${id}`)
        .then((res) =>setData(res.data))
    },[id])
    console.log(data);
    return (
        <div>
            
        </div>
    );
}

export default SingleBlog;
