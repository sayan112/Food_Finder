import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
 import { Splide,SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

const Popular = () => {
  useEffect(() => {
    getPopular();
  }, []);

  const [popular, setpopular] = useState([]);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if(check)
    {
     setpopular(JSON.parse(check));
    }
    else{
 const api = await fetch(
   `https://api.spoonacular.com/recipes/random?apiKey=dab2bf4d50944c13a9543d07f9ea1155&number=19`
 );

 const data = await api.json();
 localStorage.setItem("popular",JSON.stringify(data.recipes));
 console.log(data);
 setpopular(data.recipes);

    }
   
  };
 return (
   <div className="wrapper">
     <h3>Popular All around 🎉</h3>
     <Splide  options={{
      perPage:4,
      arrows:false,
      pagination:false,
      drag:"free",
      gap: "5rem",
     }} >
       {popular.map((recipe) => {
         return (
           <SplideSlide>
             <div className="card" id={recipe.id}>
               <p> {recipe.title}</p>
               <img src={recipe.image} alt="📷" />
             </div>
           </SplideSlide>
         );
       })}
     </Splide>
   </div>
 );
};



export default Popular;
