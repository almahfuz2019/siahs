import React from 'react';
import { Link } from 'react-router-dom';
import UseClass from '../../../Hooks/UseClass';
const ManageClass = () => {
     const {classes,handleClassDelete}=UseClass();
     return(
     <div>
          <table class="table table-hover">
     <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Class Name</th>
      <th scope="col">Creation Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
     {    classes.map(singleclass=>
          <tr>
      <th scope="row">{1}</th>
      <td>{singleclass.getClass}</td>
      <td>22-10-2022</td>
      <td> 
          <Link className='me-2 text-decoration-none rounded-pil' >update</Link><button onClick={()=>handleClassDelete(singleclass._id)}>d</button></td>
    </tr>
    )
     }
    
  </tbody>
</table>
          </div>
     );
};
export default ManageClass;