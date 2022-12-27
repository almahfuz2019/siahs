import React, { useEffect, useState } from 'react';
const Banner = () => {
    const [aboutschool,setAboutschool]=useState([]);
    useEffect(()=>{
         fetch("http://localhost:5000/aboutschool")
         .then(res=>res.json())
         .then(data=>setAboutschool(data))
    },[])
     return (
          <>
          
<div class="card text-white  text-center full_first_page text-center ">
  <img src="https://i.ibb.co/PTp4vR8/New-Project1.png" class="card-img  h-100" alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title">SHAISTANGANJ ISLAMI ACADEMY & HIGH SCHOOL</h1>
    <p class="card-text">Post Office : Shaistaganj(3301), Upozilla : Habiganj Sadar, District : Habiganj <br/>EIIN No : 129450, School Code : 1784, MPO Code : 1205111203</p>
    <div class="i  mb-3"><a class="icons" href="https://www.facebook.com/groups/853515681398192/?ref=share"> <i class=" fab fa-facebook-f p-2"></i></a>
                        <a class="icons" href="mailto:siahs2010@gmail.com"> <i class="fas fa-envelope p-2"></i></a>
                        <a class="icons" href="tel:01787878743"> <i class=" fas fa-mobile-alt p-2 "></i></a> </div>
                        <button data-aos="fade-up" data-aos-offset="100" class="read_more_btn text-white btn-danger btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Read More</button> {/* Modal */}
                <div class="modal fade text-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-center" id="exampleModalLabel">SHAISTANGANJ ISLAMI ACADEMY & HIGH SCHOOL</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-dark ">
                            
                               {
                                aboutschool.map(about=><p className='text-justify border border-0'> 
                                {about.aboutSchool}
                                   </p>)
                               }                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div>
                        </div>
                    </div>
                </div>
  </div>
</div>






                


          
          </>
     );
};
export default Banner;