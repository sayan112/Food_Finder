import React, { useEffect, useState } from 'react'
 import styled from 'styled-components'
import { motion } from 'framer-motion'
 import { Link,useParams } from 'react-router-dom'
const Cuisine = () => {
   const [ Cuisine,setCuisine]=useState([]);
   let params=useParams();

   const getCuisine =async(nameofcuisine)=>{

     const Apidata = await fetch(
       `https://api.spoonacular.com/recipes/complexSearch?apiKey=7099546be1664ce38344d9547f46d46b&cuisine=${nameofcuisine}`
     );
      const recipes=await Apidata.json();
      console.log(recipes);
       setCuisine(recipes.results);
       console.log(recipes.results);
   }
    useEffect(()=>{
       getCuisine(params.type);
       console.log(params.type);

    },[params.type]);
  return <Grid>
   {
         
Cuisine.map((recipe)=>{
   return (
     <Card>
       <img src={recipe.image} />,<h4>{recipe.title}</h4>
     </Card>
   );
})
   }

  </Grid>;
}


 const Grid= styled.div`
 display: grid;
 grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
  grid-gap: 3rem;

 `

  const Card = styled.div`
    img {
      width: 100%;
      border-radius: 2rem;
    }
    a {
      text-decoration: none;
    }
    h4 {
      text-align: center;
      padding: 1rem;
      font-size: 1.2rem;
      color: #551a8b;
     
    }
  `;

export default Cuisine
