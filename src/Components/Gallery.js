import React, { useEffect, useState } from 'react';
const Gallery = () => {
     const [galleryimages,setGalleryimages]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/gallery")
          .then(res=>res.json())
          .then(data=>setGalleryimages(data))
     },[])
     return (
          <>
             <div class="container"> <br/>
        <div class="logoo my-4">
            <a class="text-light fw-bold text-center" href="">
                <h1 class="fw-bold"><span class="text-primary blockquote-footer">Gall</span><span class="my_own_color">ery</span>
                </h1>
            </a>
        </div>
        <br/>
        <div class="row g-3">
          {
               galleryimages.map(singleImg=>
                    <div class="col-lg-4 col-md-4">
                <div class="zoom-eff"> 
                <img src={singleImg.image} class="w-100 gallery_img shadow-1-strong rounded mb-4 img-fluid zoom-effect" alt="" />
                </div>
            </div>
                    )
          }
            
           
        </div>
    </div>    
          </>
     );
};
export default Gallery;