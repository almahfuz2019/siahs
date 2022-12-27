import React from 'react';
const CreateClass = () => {
     const handleClass=(event)=>{
     event.preventDefault();
     const getClass=event.target.findClass.value;
     const classData={getClass};
     fetch('http://localhost:5000/class', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(classData),
})
  .then((res) => res.json())
  .then((data) => {
    console.log('Success:', data);
  alert("users added success"); 
    event.target.reset();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
     }
     return (
     <>
     <h2 className='fw-semibold text-center'>Create Student Class</h2>
     <form className='bg-light p-5 mt-5' onSubmit={handleClass}>
  <div class="mb-3">
    <label class="form-label">Class Name</label>
    <input type="text" name="findClass" class="form-control" />
  </div>
  <input type="submit" class="btn btn-primary" value="submit"/>
</form>   
          </>
     );
};
export default CreateClass;