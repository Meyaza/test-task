import React, { useState } from 'react';
import './blog-dynamic.css'
import { IoIosArrowDown } from 'react-icons/io';
import BlogCover from '../blog-cover/blog-cover';

const BlogDynamic = () => {

    const [isBlogShow, setisBlogShow] = useState(false);
    const [blogs, setBlogs] = useState([])
   
    const handleClick = async() => {
        setisBlogShow (!isBlogShow)
        await fetch('blog_posts.json')
        .then(response => response.json())
        .then((json) => {
            json.sort(function(a,b){
                return new Date(b.date) - new Date(a.date); })
        setBlogs(json)
        })
    }
    return (
        <div className='blog-dynamic'>
                        <div onClick = {handleClick} className='read'>
                            <p>Read More </p> 
                            <IoIosArrowDown/>
                        </div>
            {isBlogShow === false
            ? null
            : <div className='blog-dynamic'>
                {blogs.map (blog => 
                     <div className='blog-item__dynamic'>
                     <a href= {blog.url} target="_blank" rel="noreferrer">
                         <div className='blog-text__dynamic'>
                         {blog.title}
                         </div>
                     </a>
                     </div>
                )}
             
            </div>
            
            }
        </div>
    );
};

export default BlogDynamic;