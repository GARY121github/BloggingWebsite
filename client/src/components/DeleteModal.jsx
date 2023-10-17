import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function DeleteModal({ id }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate('');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        const res = await axios.delete(`http://localhost:3000/blog/${id}/delete`);
        closeModal(); // Close the modal after successful deletion
        navigate('/');
    };

    return (
        <div>
            <button onClick={openModal} className="bg-red-700 p-2 w-[4.5rem] text-lg rounded-lg hover:bg-red-800">
                Delete
            </button>


            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur">
                    <div className="relative bg-black p-6 rounded-lg shadow-md">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.293 10l3.646-3.646a1 1 0 10-1.414-1.414L10 8.586 6.354 4.939a1 1 0 10-1.414 1.414L8.586 10l-3.647 3.646a1 1 0 101.414 1.414L10 11.414l3.646 3.646a1 1 0 001.414-1.414L11.414 10z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                            <p className="text-gray-600 mb-4">Are you sure you want to delete this blog post?</p>
                            <div className="flex justify-center">
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-600 hover:bg-red-800 text-white font-semibold px-4 py-2 mr-2"
                                >
                                    Yes, I'm sure
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="bg-gray-200 text-gray-700 font-semibold px-4 py-2 hover:bg-gray-300"
                                >
                                    No, cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DeleteModal;
