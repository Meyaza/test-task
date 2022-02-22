import React from 'react';
import BlogCover from '../blog-cover/blog-cover';
import './blog-static.css'
const BlogStatic = () => {
    return (
        <div>
        <div className='head'>
          <p>What's New?</p>
        </div>
        <div className='blog'>
            <div className='blog-item'>
            <a href="https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b" target="_blank" rel="noreferrer">
                <BlogCover image='/static/image/desktop/img1.png' />
                <div className='blog-text'>
                <p>Instagram FAQ —  <br/> All You Need To Know</p>
                 </div>
            </a>
            </div>
            
            <div className='blog-item blog-item2'>
            <a href="https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63" target="_blank" rel="noreferrer">
                <BlogCover image='/static/image/desktop/img2.png' />
                <div className='blog-text'>
                <p>DMEXCO 2019 — Meet Combin in Cologne</p>
                 </div>
            </a>
            </div>
            <div className='blog-item'>
            <a href="https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7" target="_blank" rel="noreferrer">
            <BlogCover image='/static/image/desktop/img3.png' />
                <div className='blog-text'>
                <p>Limits Display, New User Preview, <br/> New Filters, and Many More <br/> Features — All about Combin 2.1</p>
                 </div>
            </a>
            </div>
        </div>
        </div>
    );
};

export default BlogStatic;