import React from 'react'
import "./Recipes.css";
 const Recipes = ({recipe}) => {
    return (
        
        <div className="recipeTile">
        <img className="recipeTile__img" src={recipe["recipe"]["image"]}  />
           <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default Recipes;