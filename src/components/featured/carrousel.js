import React from 'react';
import Slider from "react-slick";

import slider_one  from '../../resources/images/slide_one.jpg'
import slider_two  from '../../resources/images/slide_two.jpg'
import slider_three  from '../../resources/images/slide_three.jpg'

const Carrousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };

    return (
        <div className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }} 
            >
            <Slider {...settings}>
                <div>
                    <div className="carrousel_image"
                        style={{
                            background: `url(${slider_one})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                        
                    </div>
                </div>

                <div>
                    <div className="carrousel_image"
                        style={{
                            background: `url(${slider_two})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                        
                    </div>
                </div>

                <div>
                    <div className="carrousel_image"
                        style={{
                            background: `url(${slider_three})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;