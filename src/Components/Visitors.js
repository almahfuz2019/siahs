import React, { useEffect, useState } from 'react';
const Visitors = () => {
    const [visitors,setVisitors]=useState([]);
    useEffect(()=>{
         fetch("http://localhost:5000/visitors")
         .then(res=>res.json())
         .then(data=>setVisitors(data))
    },[])
     return (
          <>
        <div class="container-fluid text-center my-5">
        <hr className='border border-2 border-dark' />
        <br/>
        <h1 data-aos="fade-up" data-aos-offset="200" class="fw-bolder "><span class="text-primary blockquote-footer">Vis</span><span class="my_own_color ">itor</span></h1>
 <div class="row">
                {
                    visitors.map(visitor=>
<div class="col-md-4 col-lg-2 col-sm-6 p-4 text-center ">
<img data-aos="fade-up" data-aos-offset="200" class="gardiuan_comment img-fluid shadow " src="https://i.ibb.co/F0bwH8S/2-1.jpg" alt=" "/>
<p data-aos="fade-up" data-aos-offset="200" class="gardiuan_name my-2 ">{visitor.name}<br/><span class="text-muted ">{visitor.profession}</span></p>
{/* <!-- model satrt -->
<!-- Button trigger modal --> */}
<button data-aos="fade-up" data-aos-offset="200" type="button " class="btn text-center read_more_btn text-light mb-2 " data-bs-toggle="modal" data-bs-target="#staticBackdrop66">          
Read More</button>
    {/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop66" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-scrollable">
<div class="modal-content">
<div class="modal-header">
<p class="gardiuan_name my-2 my-2">Hasan Khan</p>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body"> <img class="gardiuan_comment img-fluid shadow " src="https://i.ibb.co/F0bwH8S/2-1.jpg" alt=" "/>
<p class="gardiuan_name my-2 my-2 ">Hasan Khan<br/><span class="text-muted">Education Minister</span></p>
<hr/> <span class="h4">L</span>{visitor.quote}</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>
 </div>
</div>
</div>
{/* <!-- model end --> */}
</div>
                        )
                }
               </div>
               <hr className='border border-2 border-dark' />
               </div>
          
          </>
     );
};
export default Visitors;