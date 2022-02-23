import React from 'react';
import './blog-cover.css';
import './media.css';

const BlogCover = ({image = ''}) => {
    return (
        <div className='blog-cover' style={{ backgroundImage: `url(${image})` }}>
        </div>
    );
};

export default BlogCover;