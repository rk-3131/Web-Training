import { useEffect, useState } from "react";
import styles from "./foodRecipe.module.css";
import Ingredients from "./Ingredients";
import RecipeDetails from "../Utils/RecipeDetail";
import { useDispatch, useSelector } from "react-redux";
import { setFoodItem } from "../redux/actions/foodActions";
import { setFoodId } from "../redux/actions/foodActions";

export default function FoodRecipe({ isLoading, setIsLoading }) {
  const dispatch = useDispatch();
  const foodId = useSelector((state) => state.food.foodId);
  console.log("In the recipe", foodId);
  const URL = `https://api.spoonacular.com/recipes/`;
  const apiKey = "/information?apiKey=4b98a20e6f044e7e8ffec8877128f01d";

  const recipe = useSelector((state) => state.food.recipe);
  console.log(recipe);
  useEffect(() => {
    async function fetchRecipe() {
      setIsLoading(true);

      const response = await fetch(`${URL}${foodId}${apiKey}`);
      const data = await response.json();
      console.log(data);
      dispatch(setFoodItem(data));
      setIsLoading(false);

      const id = "top";
      document.querySelector(`#${id}`).scrollIntoView();
    }
    fetchRecipe();
  }, [foodId]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 id="top">Recipe</h1>
        <img src={recipe.image} alt="" />
      </div>
      <div className={styles.info}>
        <span>
          <p>{recipe.glutenFree ? "🏋️‍♀️Free Of Gluton" : "Gluttoned"}</p>
        </span>
        <span>
          <p>Health-Score: {recipe.healthScore}</p>
        </span>
        <span>
          <p>Price-Per-Serving: ${recipe.pricePerServing}</p>
        </span>
        <span>
          <p>Time Required ⏰{recipe.readyInMinutes} Mins</p>
        </span>
        <span>
          <p>Servings {recipe.servings}</p>
        </span>
      </div>
      <div className={styles.ingr}>
        {isLoading
          ? "Loading...."
          : recipe.extendedIngredients.map((el) => <Ingredients el={el} />)}
      </div>
      <div className={styles.instruction}>
        <h3 className={styles.instructionHeading}>Instructions</h3>
        {isLoading ? (
          "Loading...."
        ) : (
          <ul>
            {recipe.analyzedInstructions[0].steps.map((st) => (
              <li>{st.step}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
