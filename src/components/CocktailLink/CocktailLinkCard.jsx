import React from "react";
import { Link } from "react-router-dom";

const CocktailLinkCard = ({ cocktail }) => {
  return (
    <Link
      to={`/cocktails/${cocktail.idDrink}`}
      className="flex flex-col   bg-cyan-500 items-center justify-center  w-48 h-128 p-  mr-12 mb-12 shadow-2xl shadow-cyan-500 rounded-lg"
    >
      <img src={cocktail.strDrinkThumb + "/preview"} className="rounded-t-lg" />
      <div className="p-5 min-h-28 flex justify-center items-center">
        <h1 className="text-center text-white">{cocktail.strDrink}</h1>
      </div>
     
    </Link>
  );
};

export default CocktailLinkCard;
