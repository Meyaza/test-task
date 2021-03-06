import React, { useEffect, useState } from 'react';
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';
import './media.css'
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
    const [sliders, setSliders] = useState([])
    const [isSlideLoading, setIsSlideLoading] = useState(false);
    const fetchData = async () => {
        setIsSlideLoading(true);
        await fetch('feedback_data.json')
        .then(response => response.json())
        .then(json => setSliders(json))
        setIsSlideLoading(false);
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='bg-head'>
            {isSlideLoading
            ?   
            <div className='slide-content'>
                <div className='slide-text'>
                    <p>
                        Идет загрузка....
                    </p>
                    <p className='slide-name'>
                        Идет загрузка...
                    </p>
                </div>
                <div className='slide-avatar'/>    
            </div>
            :
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation = {
                    {
                        nextEl : '.rightArrow',
                        prevEl : '.leftArrow'
                    }
                }
            >
                {sliders.map (slide => 
                        <SwiperSlide key = {slide.name}>
                            <div className='slide-content'>
                               <div className='slide-text'>
                                    <p>
                                       {slide.text}
                                    </p>
                                    <div className='user'>
                                        <p className='slide-name'>
                                        {slide.name},
                                        </p>
                                        <p className='slide-instagram'>
                                        {slide.instagram_username} 
                                        </p>

                                    </div>
                               </div>
                               <div className='slide-avatar'/>
                           </div>
                        </SwiperSlide>
            )}
            </Swiper>
            }
            <div className='navigation'>
                <div className='leftArrow'> <div className='swiper-button-prev'></div> </div>
                <div className='rightArrow'> <div className='swiper-button-next'> </div></div> 
            </div>
        </div>    
    );
};

export default Slider;