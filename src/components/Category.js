 

 import React from 'react'
 import  {FaPizzaSlice,FaHamburger} from "react-icons/fa";
 import {GiNoodles,GiChopsticks,GiCakeSlice} from "react-icons/gi"
 const Category = () => {
   return (
     <div className="categorydiv">
       <div>
         <FaPizzaSlice className="fa" />
         <h4>Italian</h4>
       </div>
       <div>
         <FaHamburger className="fa" />
         <h4>American</h4>
       </div>
       <div>
         <GiNoodles className="fa" />
         <h4>chinese</h4>
       </div>
       <div>
         <GiChopsticks className="fa" />
         <h4>Thai Food</h4>
       </div>
     </div>
   );
 }
 
 export default Category
 