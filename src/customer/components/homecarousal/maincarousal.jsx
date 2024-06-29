import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import homepagedata from './maincrausaldata';


const items = homepagedata.map((item)=>
    <img src={item.image} className='carousel-pointer' role='presentation' alt=""/>)


function Slidingpage ()
{
    return (<div>
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
        </div>);
}

export default Slidingpage;
