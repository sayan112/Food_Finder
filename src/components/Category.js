import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Category = () => {
  return (
    <div className="categorydiv">
      <NavLink to={"Cuisine/Italian"} className="slink">
        <FaPizzaSlice className="fa" />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"Cuisine/American"} className="slink">
        <FaHamburger className="fa" />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"Cuisine/chinese"} className="slink">
        <GiNoodles className="fa" />
        <h4>chinese</h4>
      </NavLink>
      <NavLink to={"Cuisine/Thai"} className="slink">
        <GiChopsticks className="fa" />
        <h4>Thai Food</h4>
      </NavLink>
    </div>
  );
};

export default Category;
