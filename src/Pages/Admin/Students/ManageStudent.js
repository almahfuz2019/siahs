import React from 'react';
import { Link } from 'react-router-dom';
import UseStudent from '../../../Hooks/UseStudent';
const ManageStudent = () => {
     const {students,handleStudentDelete}=UseStudent();
     
     return (
          <div>
          <table class="table table-hover">
     <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Student Name</th>
      <th scope="col">Roll No</th>
      <th scope="col">Date of Birth</th>
      <th scope="col">Class</th>
      <th scope="col">Reg Date</th>
      <th scope="col">State</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
     {    students.map(singleStudent=>
          <tr>
      <th scope="row">{1}</th>
      <td>{singleStudent.name}</td>
      <td>{singleStudent.classRoll}</td>
      <td>{singleStudent.dateOfBirth}</td>
      <td>{singleStudent.studentClass}</td>
      <td>22-10-2022</td>
      <td>Active</td>
      <td> 
          <Link className='me-2 text-decoration-none rounded-pil' >update</Link>
          <button onClick={()=>handleStudentDelete(singleStudent._id)}>d</button></td>
    </tr>
    )
     }
    
  </tbody>
</table>
          </div>
     );
};
export default ManageStudent;