/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300'>
                <div className='w-full flex justify-center mb-4'>
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className='rounded-lg object-cover w-full h-48'
                    />
                </div>
                <h2 className='text-2xl font-semibold text-gray-800'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;