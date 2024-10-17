import React from 'react';
import Slidingpage from '../components/homecarousal/maincarousal';
import Homesectionpart2carousal from '../components/homesectionpart2carousal/homesectionpart2carousal';
import Part2data from '../components/homesectionpart2/part2data';
import Men_jens from '../components/homesectionpart2/Men_jens';
import Men_kurta from '../components/homesectionpart2/Men_kurta';
import Women_dress from '../components/homesectionpart2/Women_dress';
import Women_top from '../components/homesectionpart2/Women_top';

const Homepage = () => {
  return (
    <div>
      <Slidingpage />

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <Homesectionpart2carousal data={Women_top} sectionname={"Women's Tops"}/>
        <Homesectionpart2carousal data={Part2data} sectionname={"Men's shirt"}/>
        <Homesectionpart2carousal data={Men_kurta} sectionname={"Men's kurta"}/>
        <Homesectionpart2carousal data={Women_dress} sectionname={"Women's Dress"}/>
        <Homesectionpart2carousal data={Men_jens} sectionname={"Men's Jens"}/>
      </div>
    </div>
  )
}

export default Homepage;
