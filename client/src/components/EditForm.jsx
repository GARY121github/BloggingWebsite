import axios from 'axios';
import React, { useRef } from 'react'
import { BsPlusCircleDotted, BsImageFill } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom';
const EditForm = (props) => {
    const { id } = useParams();
    const image = useRef();
    const title = useRef();
    const description = useRef();
    const navigate = useNavigate();

    const editBlog = async (data) => {
        const res = await axios.patch(`http://localhost:3000/blog/${id}/edit`, data);
        if (res.data.success) {
            navigate(`/blog/${id}`);
        }
    }

    const onSubmitHandler = () => {
        editBlog({ image: image.current.value, title: title.current.value, description: description.current.value })
    }
    return (
        <>
            <div className="p-2 flex flex-col justify-items-center w-3/5 m-auto">
                <div className="flex items-center p-3 ml-4">
                    <BsImageFill className="text-3xl self-center" />
                    <input type="text" ref={image} defaultValue={props.image} placeholder="Image url.." className='border-zinc-950 border-dotted text-xl ml-3 outline-none w-5/6 ' />
                </div>
                <div className="flex items-center p-3">
                    <BsPlusCircleDotted className="text-6xl self-center" />
                    <input type="text" ref={title} defaultValue={props.title} placeholder="Title" className='border-zinc-950 border-dotted text-6xl ml-3 outline-none w-5/6 ' />
                </div>
                <div className="flex items-center p-3 ml-4">
                    <BsPlusCircleDotted className="text-3xl self-start mt-[0.27rem]" />
                    <textarea rows="12" ref={description} defaultValue={props.description} type="text" placeholder="tell us your story...." className='resize-y border-zinc-950 border-dotted text-3xl ml-3 outline-none w-5/6 '></textarea>
                </div>
                <button onClick={onSubmitHandler} className="bg-green-500 rounded-md p-2 w-1/6 text-xl font-bold hover:bg-green-600 text-white">Edt Blog</button>
            </div>

        </>
    )
}

export default EditForm