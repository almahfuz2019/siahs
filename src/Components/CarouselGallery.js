import React, { useEffect, useState } from 'react';

const CarouselGallery = () => {
  const [carouselgallery,setCarouselgallery]=useState([]);
    useEffect(()=>{
         fetch("http://localhost:5000/carouselgallery")
         .then(res=>res.json())
         .then(data=>setCarouselgallery(data))
    },[])
     return (
          <div>
          <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.ibb.co/PTp4vR8/New-Project1.png" class="d-block w-100" alt="..."/>
    </div>
    {
      carouselgallery.map(singleItem=>
        <div class="carousel-item">
        <img src={singleItem.image} class="d-block w-100" alt="..."/>
      </div>
        )
    }
   
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='text-center my-3'>
<button className=' btn read_more_btn px-4 py-2 text-white '>More Images</button> 
</div>
          </div>
     );
};

export default CarouselGallery;