import React, { useEffect, useState } from 'react';
const TeachersInfo = () => {
    const [ourteachersinformation,setOurteachersinformation]=useState([]);
    useEffect(()=>{
         fetch("http://localhost:5000/ourteachersinfo")
         .then(res=>res.json())
         .then(data=>setOurteachersinformation(data))
    },[])
     return (
          <>
           <hr className='border border-2 border-dark mt-5' />
            <div class="container " id="teacher_section_link">
            
            <h1 data-aos="fade-up" data-aos-offset="100" class="fw-bolder text-center mt-5 mb-5 "><span class="text-primary blockquote-footer">Our Teacher's</span><span class="my_own_color "> Information</span></h1>
            <div class="row g-5 ">
                {
                    ourteachersinformation.map(singleTeacher=>
    <div class="col-md-4 text-center">
    <div class="row ">
    <div class="col-md-6 col-6 ">
    <div class="row gx-4 ">
     <div class="col-md-12">                                           <img data-aos="fade-up" data-aos-offset="100" class="gardiuan_comment img-fluid shadow " src={singleTeacher.about.image} alt=" "/>
     </div>
    <p></p>
    </div>
    </div>
    <div data-aos="fade-up" data-aos-offset="200" class="col-md-6 col-6">
    <h5 class="demo fw-bolder">{singleTeacher.about.name}</h5>
    <p class="text-muted "> {singleTeacher.about.qualification} <br/> Head Master</p>
     <div class="col-md-12 text-muted ">
    <a class="icons" href="https://www.facebook.com/groups/853515681398192/?ref=share"> <i class=" fab fa-facebook-f p-1  "></i></a>                                                            <a class="icons" href="mailto:siahs2010@gmail.com"> <i class="fas fa-envelope p-1"></i></a>                                                            <a class="icons" href="tel:01787878743"> <i class=" fas fa-mobile-alt p-1 "></i></a>                                                                   {/* <!-- model start -->
                                                                   <!-- Button trigger modal --> */}
<a data-bs-toggle="modal" data-bs-target="#example2fs" class="icons" href="tel:01787878743"> <i class="fas fa-user-graduate p-1 "></i></a>
                                                                  {/* <!-- Modal --> */}                                                               <div class="modal fade modal-dialog-scrollable  p-3" id="example2fs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title text-center" id="exampleModalLabel ">{singleTeacher.about.name}</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<img class="img-fluid gardiuan_comment img-fluid shadow " src={singleTeacher.about.image} alt=""/>
<br/>
<br/>
<div class="main_text text-center container mt- mb-2 ">
<h3 class="fw-bolder"><span class="text-primary">Abou</span><span class="my_own_color">t me</span></h3>
</div>
<br/>
{/* <!-- table --> */}
<table class="table table-dark table-hover h6 text-start">
<tbody>
<tr>
<th scope="row">Name
</th>
<td>
<p className='fw-bold'> {singleTeacher.about.name}</p>
</td>
</tr>
<tr>
<th scope=" row ">DATE OF JOINING</th>
<th>
<p className='fw-bold'>{singleTeacher.about.dateofjoining}</p>
</th>
</tr>
<tr>
<th scope="row ">QUALIFICATION</th>
<td>
<p className='fw-bold'> {singleTeacher.about.qualification}</p>
</td>
</tr>
<tr>
<th scope="row ">EXPERIENCE</th>
<td>
<p className='fw-bold'>{singleTeacher.about.experience} YEARS</p>
</td>
</tr>
<tr>
<th scope="row ">INTEREST</th>
<td>
<p className='fw-bold'>{singleTeacher.about.interst}</p>
</td>
</tr>
<tr>
<th scope="row ">Sbuject</th>
<td>
<p className='fw-bold'>{singleTeacher.about.subject}</p>
</td>
</tr>
<tr>
<th scope="row ">Phone</th>
<td>
<p className='fw-bold'>{singleTeacher.phone}</p>
</td>
</tr>
<tr>
<th scope="row ">Email</th>
<td>
<p className='fw-bold'>{singleTeacher.about.email}</p>
</td>
</tr>
</tbody>
 </table>
<h5>
<a class="icons" href="https://www.facebook.com/groups/853515681398192/?ref=share"> <i class=" fab fa-facebook-f p- "></i></a>
<a class="icons" href="mailto:siahs2010@gmail.com"> <i class="fas fa-envelope p-1"></i></a>
<a class="icons" href="tel:01787878743"> <i class=" fas fa-mobile-alt p-1 "></i></a>
</h5>
</div>
</div>
</div>
</div>                                                         
{/* <!-- model end --> */}
</div>
</div>
</div>
</div>
)
}
            </div>
        </div>
</>
     );
};
export default TeachersInfo;