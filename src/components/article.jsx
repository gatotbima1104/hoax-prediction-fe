import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const Articles = () => {
    const splideRef = useRef(null);
  
    useEffect(() => {
      if (splideRef.current) {
        const splide = new Splide(splideRef.current, {
          type: 'loop',
          drag: 'free',
          focus: 'center',
          perPage: 3,
          autoScroll: {
            speed: 1,
          },
        });
  
        splide.mount();
      }
    }, []);
  
    return (
      <div ref={splideRef} className="splide">
        {/* Add your images or content inside the Splide container */}
        {/* For example, you can add image elements */}
        
        {/* <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" /> */}
      </div>
    );
  };
  
  export default Articles;
  