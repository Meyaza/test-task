import React from 'react';
import BlogCover from '../blog-cover/blog-cover';
import './blog-item.css';
import './media.css';

const BlogItem = ({href, image, p}) => {
    return (
        <div className='blog-item'>
            <a href={href} target="_blank" rel="noreferrer">
                <BlogCover image={image} />
                <div className='blog-text'>
                    <p>{p}</p>
                </div>
            </a>
        </div>
    );
};

export default BlogItem;