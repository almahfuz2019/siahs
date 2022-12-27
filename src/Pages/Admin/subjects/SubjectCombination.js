import React, { useState } from 'react';
import UseClass from '../../../Hooks/UseClass';
import UseSubject from '../../../Hooks/UseSubject';
const SubjectCombination = () => {
     const {classes}=UseClass();
     const {sebjects}=UseSubject();
     const[selectSubject,setSelectSubject]=useState();
     const [selectClass,setSelectClass]=useState();
     const handleSubjectCombain=(event)=>{
          event.preventDefault();
          const studentSubject=selectSubject;
          const studentClass=selectClass;
          // console.log(selectGender);
          const subjectCombine={studentClass,studentSubject};
          fetch('http://localhost:5000/subject-combaination',{
       method: 'POST', // or 'PUT'
       headers:{
          'Content-Type':'application/json',
       },
       body: JSON.stringify(subjectCombine),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log('Success:',  data);
       alert("users added success"); 
        //  event.target.reset();
       })
       .catch((error) => {
         console.error('Error:', error);
       });
          }
     return (
          <>
 <form className='bg-light p-5 mt-5' onSubmit={handleSubjectCombain}>
    <select onChange={e=>setSelectSubject(e.target.value)} class="form-select form-select mb-3" aria-label=".form-select-lg example">
  <option selected>Select Gender</option>
  {
          sebjects.map(singleSubjectShow=>
               <option>{singleSubjectShow.subject}</option>
               )
     }
</select>
    <select onChange={e=>setSelectClass(e.target.value)} class="form-select mb-3" aria-label="Default select example">
         <option selected>Select Class</option>
     {
          classes.map(singleClassShow=>
               <option>{singleClassShow.getClass}</option>
               )
     }
</select>
  <input type="submit" class="btn btn-primary" value="submit"/>
</form> 
          </>
     );
};
export default SubjectCombination;