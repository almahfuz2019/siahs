import React, { useEffect, useState } from 'react';
const Notice = () => {
     const [notice,setNotice]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/notice")
          .then(res=>res.json())
          .then(data=>setNotice(data))
     },[])
     return (
          <section class="container my-5">
          <h1 class="text-center my-5"><span class="text-primary fw-bolder blockquote-footer">Res</span><span class="my_own_color fw-bolder">ult</span></h1>
          <div class="row gx-5 gy-4 full_notic">
               {
                    notice.map(singleNotice=>
                         <>
               <div class="col-2">
                  <img class="img-fluid" src="https://mbgc.gov.bd/assets/images/notice.gif" alt=""/>
              </div>
              <div class="col-10 my-auto">
                  <h3 class="text-primary fw-bold">{singleNotice.title} ...</h3>
                  <p class="text-muted ">Published: Tue, Sep 21, 2021 1:55 PM || {singleNotice.date}</p>
  
              </div>
                         </>
                         )
               }
              
          </div>
      </section>
  

     );
};
export default Notice;