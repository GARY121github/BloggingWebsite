import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const BlogPage = () => {
    const { id } = useParams();
    const navigate = useNavigate('');

    const [blog, setBlog] = useState({});

    const fetchBlog = async () => {
        console.log(id);
        const res = await axios.get(`http://localhost:3000/blog/${id}`);
        setBlog({ image: res.data.data.image, title: res.data.data.title, description: res.data.data.description });
        console.log(res);
    }

    useEffect(() => {
        fetchBlog();
    }, []);

    return (
        <div className="mt-[3.7rem] mb-2 p-3">
            <img src={blog.image} alt="image" className="rounded-xl w-3/6 mx-auto" />
            <div className="w-3/6 mx-auto item-center">
                <h1 className="text-5xl font-black mt-2 text-center">{blog.title}</h1>
                <p className="text-2xl mt-2 text-center">{blog.description}</p>

                <div className="p-2">
                    <button className="text-white p-1 bg-red-600 text-xl w-20 rounded hover:bg-red-700" >Delete</button>
                    <button
                        className="text-white p-1 ml-2 bg-green-600 text-xl w-20 rounded hover:bg-green-700"
                        onClick={() => { navigate(`/blog/${id}/edit`) }}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;