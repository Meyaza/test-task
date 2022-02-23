import React from 'react';
import BlogItem from '../blog-item/blog-item';
import './blog-static.css'

const BlogStatic = () => {
    return (
        <div className='blog-static'>
            <div className='head'>
                <p>What's New?</p>
            </div>
            <div className='blog'>
                <BlogItem 
                    href='https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b' 
                    image = '/static/image/desktop/img1.png'
                    p = 'Instagram FAQ — All You Need To Know'
                />
                <BlogItem 
                    href='https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63'
                    image = '/static/image/desktop/img2.png'
                    p = 'DMEXCO 2019 — Meet Combin in Cologne'
                />
                <BlogItem 
                    href='https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7'
                    image = '/static/image/desktop/img3.png'
                    p = 'Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1'
                />
            </div>
        </div>
    );
};

export default BlogStatic;