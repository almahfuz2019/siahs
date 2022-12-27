import React, { useEffect, useState } from 'react';
const StudentsCount = () => {
    const [studentscount,setStudentsCount]=useState([]);
    useEffect(()=>{
         fetch("http://localhost:5000/totalstudentscount")
         .then(res=>res.json())
         .then(data=>setStudentsCount(data))
    },[])

     return (
          <div className='text-center p-3 bg-light '>
              
                {
                  studentscount.map(studentcount=>
                    <div data-aos="fade-up" data-aos-offset="200" class="row mt-2" id="total_students">
                    <div class="col-md-4 col-sm-6 ">
                    <h1 data-aos="fade-up" data-aos-offset="200" class="my_own_color fw-bold ">{studentcount.presentstudent}</h1>
                    <p data-aos="fade-up" data-aos-offset="200" class="class_name_bold text-muted ">Present student </p>
                </div>

                <div class="col-md-4 col-sm-6 ">
                    <h1 data-aos="fade-up" data-aos-offset="200" class="my_own_color fw-bold ">{studentcount.totalstudent}</h1>
                    <p data-aos="fade-up" data-aos-offset="200" class="class_name_bold text-muted ">Total student</p>
                </div>
                <div class="col-md-4 col-sm-6 ">
                    <h1 data-aos="fade-up" data-aos-offset="200" class="my_own_color fw-bold ">{studentcount.graduatstudente}</h1>
                    <p data-aos="fade-up" data-aos-offset="200" class="class_name_bold text-muted ">Graduate </p>
                </div>
            </div>
                    )  
                }
                </div>
               
               
     );
};
export default StudentsCount;