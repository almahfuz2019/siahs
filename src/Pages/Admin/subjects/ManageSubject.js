import React from 'react';
import { Link } from 'react-router-dom';
import UseSubject from '../../../Hooks/UseSubject';
const ManageSubject = () => {
     const {sebjects,handlesubjectDelete}=UseSubject();
     
     return (
          <div>
          <table class="table table-hover">
     <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Subject Name</th>
      <th scope="col">Creation Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
     {    sebjects.map(singleSubject=>
          <tr>
      <th scope="row">{1}</th>
      <td>{singleSubject.subject}</td>
      <td>22-10-2022</td>
      <td> 
          <Link className='me-2 text-decoration-none rounded-pil' >update</Link><button onClick={()=>handlesubjectDelete(singleSubject._id)}>d</button></td>
    </tr>
    )
     }
    
  </tbody>
</table>
          </div>
     );
};
export default ManageSubject;