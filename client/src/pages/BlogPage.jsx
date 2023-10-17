import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DeleteModal from '../components/DeleteModal';


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
            <div className="grid grid-cols-3 gap-1">
                <div className="bg-black text-white p-4 col-span-2 space-y-2 ">
                    <img src={blog.image} className="rounded-xl w-full" />
                    <h1 className="text-white font-bold text-3xl">{blog.title}</h1>
                    <p className="text-white">{blog.description}</p>
                    <p className="text-white">{blog.description}</p>
                    <p className="text-white">{blog.description}</p>
                    <p className="text-white">{blog.description}</p>
                    <p className="text-white">{blog.description}</p>
                </div>
                <div className="bg-black static text-white p-2 space-y-2">
                    <div className="bg-black p-2 space-x-2 flex">
                        <button onClick={() => { navigate(`/blog/${id}/edit`) }} className="bg-green-700 p-2 w-[4.5rem] text-lg rounded-lg hover:bg-green-800">Edit</button>
                        <DeleteModal id={id} />
                    </div>
                    <div className="bg-black p-2 space-x-2">
                        <form>
                            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                    <label htmlFor="comment" className="sr-only">
                                        Your comment
                                    </label>
                                    <textarea
                                        id="comment"
                                        rows={4}
                                        className="w-full outline-none px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                        placeholder="Write a comment..."
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                                    >
                                        Post comment
                                    </button>
                                    <div className="flex pl-0 space-x-1 sm:pl-2">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 12 20"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                                />
                                            </svg>
                                            <span className="sr-only">Attach file</span>
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 16 20"
                                            >
                                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                            </svg>
                                            <span className="sr-only">Set location</span>
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 18"
                                            >
                                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                            </svg>
                                            <span className="sr-only">Upload image</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                            Remember, contributions to this topic should follow our{" "}
                            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
                                Community Guidelines
                            </a>
                            .
                        </p>
                    </div>
                    <div className="bg-black p-2 space-x-2">
                        <h1 className="text-white bg-slate-700 rounded text-2xl">Nice Blog</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;