import React, { useEffect, useState } from 'react';
import UseClass from '../../../Hooks/UseClass';
import UseStudent from '../../../Hooks/UseStudent';
// import UseSubject from '../../../Hooks/UseSubject';
const AddResult = () => {
     const {students}=UseStudent();
     const {classes}=UseClass();
     const[selectStudent,setSelectStudent]=useState();
     const [selectClass,setSelectClass]=useState();
     const [subjectCom,setSubjectCom]=useState();
     const showStudentClass=selectClass;
     const showStudent=selectStudent;
     console.log(showStudentClass);
     console.log(showStudent);
     useEffect(()=>{
          fetch("http://localhost:5000/subject-combaination")
     .then(res=>res.json())
     .then(data=>setSubjectCom(data))
     },[]);
     // const handlereslutFild=(event)=>{
     //      event.preventDefault();
     //      const subject=event.target.findSubject.value;
     //      console.log(subject);
     // }
     return (
          <div className='bg-light my-5 p-5'>
    <select onChange={e=>setSelectClass(e.target.value)} class="form-select mb-3" aria-label="Default select example">
         <option selected>Select Class</option>
     {
          classes.map(singleClassShow=>
               <option>{singleClassShow.getClass}</option>
          )
     }
</select>
<select onChange={e=>setSelectStudent(e.target.value)} class="form-select mb-3" aria-label="Default select example">
         <option selected>Select student</option>
     {
          students.map(showSingleStudent=>              
          <option>{showSingleStudent.name}</option>
               )
     } 
</select>

{/* <form className='bg-light p-5 mt-5' onSubmit={handlereslutFild} >
{
     subjectCom.map(subs=>      
     <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">{subs.studentSubject}</label>
    <div class="col-sm-10">
      <input type="text" name='findSubject' placeholder="Enter marks out of 100"class="form-control"/>
    </div>
    </div>        
     )
}
<input type="submit" class="btn btn-primary" value="submit"/>
</form>  */}
         </div>
     );
};
export default AddResult;