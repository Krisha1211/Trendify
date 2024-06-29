import React from 'react';
import Slidingpage from '../components/homecarousal/maincarousal';
import Homesectionpart2carousal from '../components/homesectionpart2carousal/homesectionpart2carousal';
import Part2data from '../components/homesectionpart2/part2data';

const Homepage = () => {
  return (
    <div>
      <Slidingpage />

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <Homesectionpart2carousal data={Part2data} sectionname={"Men's shirt"}/>
        <Homesectionpart2carousal data={Part2data} sectionname={"Men's shirt"}/>
        <Homesectionpart2carousal data={Part2data} sectionname={"Men's shirt"}/>
        <Homesectionpart2carousal data={Part2data} sectionname={"Men's shirt"}/>
        <Homesectionpart2carousal data={Part2data} sectionname={"Men's shirt"}/>
      </div>
    </div>
  )
}

export default Homepage;
