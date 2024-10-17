import React from 'react';

const AddressCard = ({ address }) => {
  console.log("data of address ", address); // Logging address data outside of JSX

  if (!address) {
    return <div>Loading...</div>; // Handle case where address is not yet available
  }

  // Destructure address object
  const { firstName, lastName, streetAddress, city, state, zipcode, mobileNo } = address;

  return (
    <div>
      <div className='space-y-2'>
        <p className='font-semibold'>{firstName} {lastName}</p>
        <p>{state} {streetAddress}, {zipcode}</p>
      </div>
      <div className='space-y-1'>
        <p className='font-semibold'>Phone number</p>
        <p>{mobileNo}</p>
      </div>
    </div>
  );
}

export default AddressCard;
