import React, { useEffect, useState } from 'react';
const Events = () => {
  const [events,setEvents]=useState([]);
  useEffect(()=>{
       fetch("http://localhost:5000/events")
       .then(res=>res.json())
       .then(data=>setEvents(data))
  },[])
     return (
          <>
          <h1 className='fw-bold text-center'>Events</h1>
             <div class="row row-cols-1 row-cols-md-3 g-4 container-fluid mb-5">
              {
                events.map(event=>
                  <div class="col">
    <div class="card h-100">
      <img src={event.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{event.title}</h5>
        <p class="card-text">{event.description}... <span className='text-primary'>read more</span></p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{event.date}</small>
      </div>
    </div>
  </div>
                  )
              }
 
</div>  
<hr className='border border-2 border-dark mt-4' />
          </>
     );
};
export default Events;