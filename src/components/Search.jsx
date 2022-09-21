import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setinput] = useState("");
  const navigate = useNavigate();

  const submitHandeler = (e) => {
// when submit what is I have written 
    e.preventDefault();    
    navigate("/searched/" + input);
    console.log("hey");
  };
  return (
    <form className="form-style" onSubmit={submitHandeler}>
      <input
        onChange={(e) => {
            // when change change the input value using usestate 
          setinput(e.target.value);
        }}
        type="text"
        value={input}
      />
      <FaSearch />
    </form>
  );
};

export default Search;
