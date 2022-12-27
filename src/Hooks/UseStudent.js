import { useEffect, useState } from "react";
 const UseStudent = () => {
     const [students,setStudents]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/student")
          .then(res=>res.json())
          .then(data=>setStudents(data))
     },[])
     const handleStudentDelete=id=>{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               console.log("deleting user with id",id);
               const url=`http://localhost:5000/student/${id}`;
               fetch(url,{
                    method:'DELETE'
               })
               .then(res=>res.json())
               .then(data=>{
                    console.log("deleted",data);
                    if(data.deletedCount>0){
                         const remaining=students.filter(singleStudent=>singleStudent._id !==id);
                         setStudents(remaining)
                    }
               })
          }
     }        
     return {students,handleStudentDelete};    
};
export default UseStudent;
