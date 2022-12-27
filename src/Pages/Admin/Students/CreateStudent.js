import React, { useState } from 'react';
import UseClass from '../../../Hooks/UseClass';
const CreateStudent = () => {
     const {classes}=UseClass();
     const[selectGender,setSelectGender]=useState();
     const [selectClass,setSelectClass]=useState();
     const handleStudent=(event)=>{
          event.preventDefault();
          const name=event.target.name.value;
          const fathersName=event.target.fathersName.value;
          const mothersName=event.target.mothersName.value;
          const dateOfBirth=event.target.dateOfBirth.value;
          const phone=event.target.phone.value;
          const address=event.target.address.value;
          const classRoll=event.target.classRoll.value;
          const gender=selectGender;
          const studentClass=selectClass;
          // console.log(selectGender);
          const studentData={name,fathersName,mothersName,dateOfBirth,phone,address,classRoll,gender,studentClass};
          fetch('http://localhost:5000/student',{
       method: 'POST', // or 'PUT'
       headers:{
          'Content-Type':'application/json',
       },
       body: JSON.stringify(studentData),
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
          <div>
           <h2 className='fw-semibold text-center'>Add student</h2>
     <form className='bg-light p-5 mt-5' onSubmit={handleStudent}>
    <input placeholder='name' type="text" name="name" class="form-control mb-3" />
    <input placeholder="father's name" type="text" name="fathersName" class="form-control mb-3" />
    <input placeholder="mother's name" type="text" name="mothersName" class="form-control mb-3" />
    <input placeholder='Date of birth (22-12-2022)' type="date" name="dateOfBirth" class="form-control mb-3" />
    <select onChange={e=>setSelectGender(e.target.value)} class="form-select form-select mb-3" aria-label=".form-select-lg example">
  <option selected>Select Gender</option>
  <option >Male</option>
  <option >Femail</option>
  <option >Others</option>
</select>
    <input placeholder='phone' type="text" name="phone" class="form-control mb-3" />
    <input placeholder="address" type="text" name="address" class="form-control mb-3" />
    <input placeholder='unique ID' type="text" name="classRoll" class="form-control mb-3" />
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
          </div>
     );
};
export default CreateStudent;