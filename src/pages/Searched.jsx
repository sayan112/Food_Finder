import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
 import styled from 'styled-components';

const Searched = () => {

     const [searchedrecipies, setSearchedrecipies] = useState([]);
     let params = useParams();

     const getsearchedrecipies = async (nameofrecipie) => {
       const check = localStorage.getItem(nameofrecipie);

       if (check) {
        setSearchedrecipies(JSON.parse(check));
       } else {
         const Apidata = await fetch(
           `https://api.spoonacular.com/recipes/complexSearch?apiKey=7099546be1664ce38344d9547f46d46b&query=${nameofrecipie}`
         );
         console.log(nameofrecipie);

         
         const recipes = await Apidata.json();
         localStorage.setItem(nameofrecipie, JSON.stringify(recipes.results));
         console.log(recipes);
       setSearchedrecipies(recipes.results);
         console.log(recipes.results);
       }
     };
  useEffect(() => {
    getsearchedrecipies(params.search);
    console.log(params.search);
  }, [params.search]);

  return (
        <Grid>
      {searchedrecipies.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <img src={recipe.image} alt="" />,<h4>{recipe.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
  
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

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
export default Searched