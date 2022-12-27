import { useEffect, useState } from "react";
 const UseClass = () => {
     const [classes,setClasses]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/class")
          .then(res=>res.json())
          .then(data=>setClasses(data))
     },[])
     const handleClassDelete=id=>{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               console.log("deleting user with id",id);
               const url=`http://localhost:5000/class/${id}`;
               fetch(url,{
                    method:'DELETE'
               })
               .then(res=>res.json())
               .then(data=>{
                    console.log("deleted",data);
                    if(data.deletedCount>0){
                         const remaining=classes.filter(cla=>cla._id !==id);
                         setClasses(remaining)
                    }
               })
          }
     }
     
    
     return {classes,handleClassDelete};
     
};

export default UseClass;