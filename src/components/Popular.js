import React from "react";
import { useEffect, useState } from "react";
 import { Splide,SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
 import { Link } from "react-router-dom";

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
   `https://api.spoonacular.com/recipes/random?apiKey=7099546be1664ce38344d9547f46d46b&number=19`
 );

 const data = await api.json();
 localStorage.setItem("popular",JSON.stringify(data.recipes));
 console.log(data);
 setpopular(data.recipes);

    }
   
  };
 return (
   <div className="wrapper">
     <h3 className="txt">Popular All around 😋</h3>
     <Splide  options={{
      perPage:4,
      arrows:false,
      pagination:false,
      drag:"free",
      gap: "5rem",
     }} >
       {popular.map((recipe) => {
         return (
           <SplideSlide key={recipe.id}>
             <Link to={"/recipie/" + recipe.id}>
               <div className="card" id={recipe.id}>
                 <p> {recipe.title}</p>
                 <img src={recipe.image} alt="📷" />
               </div>
             </Link>
           </SplideSlide>
         );
       })}
     </Splide>
   </div>
 );
};



export default Popular;
