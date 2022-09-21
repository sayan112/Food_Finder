import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipie = () => {
     let params= useParams();
      const[details,setDetails]=useState({});

      console.log(params);
     
     const fetchDetails= async ()=>{
        const data = await fetch(
          `https://api.spoonacular.com/recipes/716429/information?apiKey=7099546be1664ce38344d9547f46d46b&includeNutrition=false`
        );
         const detaildata= await data.json();
         console.log(detaildata);
          setDetails(detaildata);
     }
       useEffect(() => {
         fetchDetails();
       }, [params.recipiename]);

  return (
    <>
      <div>Recipie</div>
      <p>{details.title} </p>
    
    </>
  );
}

export default Recipie