import { useEffect, useState } from "react";
 const UseSubject = () => {
     const [sebjects,setSubjects]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/subject")
          .then(res=>res.json())
          .then(data=>setSubjects(data))
     },[])
     const handlesubjectDelete=id=>{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               console.log("deleting user with id",id);
               const url=`http://localhost:5000/subject/${id}`;
               fetch(url,{
                    method:'DELETE'
               })
               .then(res=>res.json())
               .then(data=>{
                    console.log("deleted",data);
                    if(data.deletedCount>0){
                         const remaining=sebjects.filter(sub=>sub._id !==id);
                         setSubjects(remaining)
                    }
               })
          }
     }
     
    
     return {sebjects,handlesubjectDelete};
     
};

export default UseSubject;