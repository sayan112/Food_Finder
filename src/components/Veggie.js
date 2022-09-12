import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

const Veggie = () => {

    useEffect(() => {
      vegdish();
    }, []);

    const [veg, setveg] = useState([]);

    const vegdish = async () => {
      const check = localStorage.getItem("veg");
      if (check) {
        setveg(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=dab2bf4d50944c13a9543d07f9ea1155&number=19&tags=vegetarian`
        );

        const data = await api.json();
        localStorage.setItem("veg", JSON.stringify(data.recipes));
        console.log(data);
        setveg(data.recipes);
      }
    };
  return (
    <div className="wrapper">
      <h3> All veg dishes around 🎉</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veg.map((recipe) => {
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
}

export default Veggie
