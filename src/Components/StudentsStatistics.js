import React, { useEffect, useState } from 'react';
const StudentsStatistics = () => {
    
    const [studentscount,setStudentscount]=useState([]);
    useEffect(()=>{
         fetch("http://localhost:5000/studentstatistics")
         .then(res=>res.json())
         .then(data=>setStudentscount(data))
    },[])
     return (
          <div class="third_full_page  container-fluid bg-light my-5" id="all_class">
            <br/>
            <div class="main_text text-center mt-5 mb-5 ">

                <h1 data-aos="fade-up" data-aos-offset="100" class="fw-bolder "><span class="text-primary blockquote-footer ">Student</span><span class="my_own_color "> Statistics</span></h1>
                <p data-aos="fade-up" data-aos-offset="200" class="text-muted ">Class wise Students</p>
            </div>
            <div class="row g-4 m-3 " id="student_class">
                
                {
                    studentscount.map(singlClass=>
                        <div data-aos="fade-up" data-aos-offset="200" class="col-md-4 col-sm-6 text-center my-3 ">
                    <h1 class="text-primary fw-bold ">{singlClass.totalStudents}</h1>
                    <h4 class=" text-muted "><span class="class_name_bold ">Class-{singlClass.class}</span></h4>
                    <p class="text-muted ">Total student's {singlClass.totalStudents} in class-6. <br/>Boye's {singlClass.boyes} & Girl's {singlClass.girls}</p>
                </div>
                        )
                }
                
                <div data-aos="fade-up" data-aos-offset="200" class="col-md-4 col-sm-6 text-center my-3 ">
                    <h1 class="text-primary fw-bold ">00</h1>
                    <h3 class=" text-muted class_name_bold ">class-11</h3>
                    <p class="text-muted ">Up comming.. <br/>Boye's 00 & Girl's 00</p>
                </div>

            </div>
        </div>
     );
};
export default StudentsStatistics;