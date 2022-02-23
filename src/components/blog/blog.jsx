import React from 'react';
import BlogDynamic from '../blog-dynamic/blog-dynamic';
import BlogStatic from '../blog-static/blog-static';
import './blog.css'

const Blog = () => {
    return (
        <div className='section-1'>
          <BlogStatic/>
          <BlogDynamic/>
      </div>
    );
};

export default Blog;