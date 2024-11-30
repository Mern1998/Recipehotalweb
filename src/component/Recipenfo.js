import React, { useState } from "react";
import {  useParams } from "react-router-dom";
const Recipenfo = () => {
  const { mealid } = useParams();
  const [paragraphs,setParagraph]=useState()
  console.log(mealid);
  const getParamapi = async () => {
    const getinfo = await fetch(
      `https:www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const jsonIfo = await getinfo.json();
    console.log(jsonIfo.meals[0]);
    setParagraph(jsonIfo.meals[0])
  };
  if(paragraphs !== ""){
    getParamapi()
  }

  return (
   <div>
     {
      !paragraphs ? "data not found":
      <div className="msg">
      <img src={paragraphs.strMealThumb} alt="img2"/>
      <div className="info">
        <h1>
          Recipe detail
        </h1>
        <button>{paragraphs.strMeal}</button>
        <h3>Instruction</h3>
        <p>{paragraphs.strInstructions}</p>
      </div>
    </div>
    }
   </div>
    
  )
 
};

export default Recipenfo;
