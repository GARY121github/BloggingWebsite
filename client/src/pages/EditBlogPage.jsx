import React, { useState, useEffect } from 'react'
import EditForm from '../components/EditForm'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const EditBlogPage = () => {
    
    const { id } = useParams();
    const navigate = useNavigate('');

    const [blog, setBlog] = useState({});

    const fetchBlog = async () => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`);
        setBlog({ image: res.data.data.image, title: res.data.data.title, description: res.data.data.description });
    }

    useEffect(() => {
        fetchBlog();
    }, []);
    return (
        <div className="mt-[3rem] mb-3 p-9 h-full">
            <EditForm
                image={blog.image}
                description={blog.description}
                title={blog.title}
            />
        </div>
    )
}

export default EditBlogPage