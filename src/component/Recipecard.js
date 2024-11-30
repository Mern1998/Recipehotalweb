import React from "react";
import { NavLink } from "react-router-dom";

const Recipecard = ({ details }) => {
  console.log(details);
  return (
    <div className="meals">
      {!details
        ? "Data Not Found"
        : details.map((curItem) => {
            return (
              <div className="mealImg">
                <img src={curItem.strMealThumb} alt="ll" />
                <p>{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default Recipecard;
