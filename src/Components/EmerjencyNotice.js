import React, { useEffect, useState } from 'react';
const EmerjencyNotice = () => {
     const [marquee,setMarquee]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/marquee")
          .then(res=>res.json())
          .then(data=>setMarquee(data))
     },[])
     return (
          <div className='my_own-bg_color'>
          {
               marquee.map(singleMarquee=> <marquee class="my_own-bg_color text-white fw-semibold" behavior="" direction=""> "{singleMarquee.notice}"</marquee>)
          }
               
          </div>
     );
};
export default EmerjencyNotice;