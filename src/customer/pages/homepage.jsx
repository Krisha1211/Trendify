import React from 'react';
import Slidingpage from '../components/homecarousal/maincarousal';
import Homesectionpart2carousal from '../components/homesectionpart2carousal/homesectionpart2carousal';

import useProductsByCategory from '../components/homesectionpart2/category';

const Homepage = () => {
  
  const womenDresses = useProductsByCategory("women_dress"); // Array for Women's Dresses
  const menJens = useProductsByCategory("men_jeans");        // Array for Men's Jeans
  const shirt = useProductsByCategory("shirt");             // Array for Shirts
  const top = useProductsByCategory("top");              // Array for Shoes
  const Mens_kurta = useProductsByCategory("mens_kurta");  // Array for Accessories


  return (
    <div>
      <Slidingpage />
      

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <Homesectionpart2carousal data={womenDresses} sectionname="Women's Dresses" />
            <Homesectionpart2carousal data={menJens} sectionname="Men's Jeans" />
            <Homesectionpart2carousal data={shirt} sectionname="Men's Shirt" />
            <Homesectionpart2carousal data={top} sectionname="Womens's Top" />
            <Homesectionpart2carousal data={Mens_kurta} sectionname="Men's Kurta" />
      </div>
    </div>
  )
}

export default Homepage;
