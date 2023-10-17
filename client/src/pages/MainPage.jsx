import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Card from '../components/Card';
import Footer from '../components/Footer';
import axios from 'axios';

const MainPage = () => {
    // const data = [
    //     {
    //         id: 1,
    //         Author: "John Doe",
    //         Topic: "Travel",
    //         Description: "Explore the enchanting city of Venice, known for its intricate canals, historic architecture, and rich cultural heritage. Get lost in the labyrinth of narrow streets and indulge in the delicious Italian cuisine.",
    //         Image: "https://images.unsplash.com/photo-1696530944705-59a53bfb0dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",

    //     },
    //     {
    //         id: 2,
    //         Author: "Jane Smith",
    //         Topic: "Health and Wellness",
    //         Description: "Discover the benefits of mindfulness meditation in reducing stress and improving mental well-being. Learn simple techniques to incorporate mindfulness into your daily routine.",
    //         Image: "https://images.unsplash.com/photo-1696448442843-f1fd43dcb758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",

    //     },
    //     {
    //         id: 3,
    //         Author: "Alex Johnson",
    //         Topic: "Technology",
    //         Description: "The future of autonomous vehicles is here! Dive into the world of self-driving cars and explore how they are reshaping transportation and our daily lives.",
    //         Image: "https://images.unsplash.com/photo-1696085709531-81fba5dbcffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",

    //     },
    //     {
    //         id: 4,
    //         Author: "Emily Davis",
    //         Topic: "Food and Cooking",
    //         Description: "Indulge in the world of gourmet chocolate desserts. From rich truffles to decadent cakes, we'll guide you through making these exquisite treats at home.",
    //         Image: "https://images.unsplash.com/photo-1696280787336-5abad24b7df8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",

    //     },
    //     {
    //         id: 5,
    //         Author: "Michael Brown",
    //         Topic: "Home Improvement",
    //         Description: "Transform your backyard into a cozy oasis with these landscaping tips and ideas. Create a serene outdoor space that's perfect for relaxation and entertaining.",
    //         Image: "https://images.unsplash.com/photo-1696280787336-5abad24b7df8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    //     }
    // ];

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await axios.get('http://localhost:3000/blog/blogs');
        // const res = await axios.get('/blog/blogs/');
        console.log(res);
        setData(res.data.data);
    }
    useEffect(() => {
        fetchData();
    }, []);



    const allCards = data.map(
        (blog) =>
            <Card
                key={blog._id}
                id={blog._id}
                // author={blog.Author}
                topic={blog.title}
                desc={blog.description}
                img={blog.image}
            />
    )
    return (
        <>
            {/* <Navbar /> */}
            <div className="mt-[4.4rem] mb-3">
                <Slider />
                <div className="mt-5 p-3">
                    <h1 className="text-black text-5xl font-bold text-center">TRENDING TOPICS</h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                    {allCards}
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default MainPage