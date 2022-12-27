import React from 'react';
const CreateSubject = () => {
     const handleSubject=(event)=>{
          event.preventDefault();
          const subject=event.target.findSubject.value;
          const subjectData={subject};
          fetch('http://localhost:5000/subject',{
       method: 'POST', // or 'PUT'
       headers:{
          'Content-Type':'application/json',
       },
       body: JSON.stringify(subjectData),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log('Success:',  data);
       alert("users added success"); 
         event.target.reset();
       })
       .catch((error) => {
         console.error('Error:', error);
       });
          }
     return (
     <div>
   <h2 className='fw-semibold text-center'>Create subjec</h2>
     <form className='bg-light p-5 mt-5' onSubmit={handleSubject}>
  <div class="mb-3">
    <label class="form-label">Class Subject</label>
    <input type="text" name="findSubject" class="form-control" />
  </div>
  <input type="submit" class="btn btn-primary" value="submit"/>
</form> 
</div>
     );
};
export default CreateSubject;