import React, { useEffect, useState } from 'react';
import './slider.css';
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';



const Slider = () => {

    const [sliders, setSliders] = useState([])
    const [isSlideLoading, setIsSlideLoading] = useState(false);
    
    const swiper = useSwiper();
    
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
             <div className='slide-avatar'>
             </div>
         </div>
             
                :<Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation = {
                    {
                        nextEl : '.right',
                        prevEl : '.left'
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
                                   <p className='slide-name'>
                                       {slide.name}
                                   </p>
                               </div>
                               <div className='slide-avatar'>
                               </div>
                           </div>
                           </SwiperSlide>
            )}
            {
                
             
            }
          </Swiper> 
            
}
  <div className='navigation'>
                <div className='left'> <div className='swiper-button-prev'></div> </div>
                <div className='right'> <div className='swiper-button-next'> </div></div>
               
                
            </div>
        </div>
  

          
        
    );
};

export default Slider;