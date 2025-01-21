import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Homesectionpart2 from '../homesectionpart2/homesectionpart2';
import { Button } from '@headlessui/react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const Homesectionpart2carousal = ({data,sectionname}) => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = data.map((item) => (
    <Homesectionpart2 key={item.id} product={item}/>
  ));

  const slideLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideRight = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className="relative px-4 lg:px-8">
   <h2 className="text-2xl font-extrabold text-gray-800 py-4 px-0 " 
    style={{ textAlign: 'left', marginLeft: '0' }} 
    >{sectionname}</h2>
      <div className="relative p-5 border-2 border-black">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
        />

        <Button
          onClick={slideLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-1/2 bg-gray-500 text-white"
          style={{ width: '25px', height: '50px' }}
          aria-label="previous"
        >
          <KeyboardArrowLeft />
        </Button>

        <Button
          onClick={slideRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 bg-gray-500 text-white"
          style={{ width: '25px', height: '50px' }}
          aria-label="next"
        >
          <KeyboardArrowRight />
        </Button>
      </div>
    </div>
   
  );
};

export default Homesectionpart2carousal;
