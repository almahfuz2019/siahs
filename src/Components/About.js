import React, { useEffect, useState } from 'react';
import Footer from '../Shired/Footer';
import Navbar from '../Shired/Navbar';
const About = () => {
     const [aboutschool,setAboutschool]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/aboutschool")
          .then(res=>res.json())
          .then(data=>setAboutschool(data))
     },[])
     return (
          <>
          <Navbar/>
            <section>
        <h1 class="text-light fw-bold my-4" href="">
            <h1 class="fw-bolder text-center"><span class="text-primary  blockquote-footer">Ab</span><span class="my_own_color">out</span>
            </h1>
     </h1>
     {
                                aboutschool.map(about=>
                                   <p class="p-5 text-muted"> {about.aboutSchool}</p>
                                   )
                               }
    </section>  
    <Footer/> 
          </>
     );
};
export default About;