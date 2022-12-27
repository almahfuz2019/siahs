import React, { useEffect, useState } from 'react';
const Principal = () => {
    const [principal,setPrincipal]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/principal")
          .then(res=>res.json())
          .then(data=>setPrincipal(data))
     },[])
     return (
          <div class="text-center my-5">
            {
               principal.map(principalSingleItem=>
                <div class="text-muted">
                <img data-aos="fade-up" data-aos-offset="200" class="img-fluid principal_img shadow rounded-circle" src={principalSingleItem.image} alt=""/>
                <h4 data-aos="fade-up" data-aos-offset="200" class="demo mt-3 fw-bold ">{principalSingleItem.name}</h4>
                <p data-aos="fade-up" class="text-muted">principal</p>
                <p data-aos="fade-up" data-aos-offset="200" class="principal_space my-3 text-center"><i class="fa fa-quote-left p-2"></i> {principalSingleItem.quote}<i class="fa fa-quote-right p-2"></i>
                </p>
                <h5 data-aos="fade-up" data-aos-offset="100" class="mb-3 ">
                    <a class="icons" href="https://www.facebook.com/groups/853515681398192/?ref=share"> <i class=" fab fa-facebook-f p-2 "></i></a>
                    <a class="icons" href="mailto:siahs2010@gmail.com"> <i class="fas fa-envelope p-2"></i></a>
                    <a class="icons " href="tel:01787878743"> <i class=" fas fa-mobile-alt p-2 "></i></a>
                </h5>
            </div>)
          }
        <hr className='border border-2 border-dark' />
      </div>
     );
};
export default Principal;