import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import BlogItem from '../blog-item/blog-item';
import './blog-dynamic.css'

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
            : 
            <div className='blog-dynamic'>
                {blogs.map (blog => 
                    <div key= {blog.title} className='blog-item__dynamic'>
                        <BlogItem 
                            href= {blog.url}
                            image = '/static/image/desktop/img1.png'
                            p = {blog.title}
                        />
                    </div>
                )}
            </div>
            }
        </div>
    );
};

export default BlogDynamic;