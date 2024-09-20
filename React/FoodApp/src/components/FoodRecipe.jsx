import { useEffect, useState } from "react";
import styles from "./foodRecipe.module.css";
import Ingredients from "./Ingredients";

export default function FoodRecipe({
  foodId,
  recipe,
  setRecipe,
  isLoading,
  setIsLoading,
}) {
  // const [isLoading, setIsLoading] = useState(true);

  console.log(recipe);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "4b98a20e6f044e7e8ffec8877128f01d";

  useEffect(() => {
    async function fetchRecipe() {
      setIsLoading(true);
      const response = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await response.json();
      console.log(data);
      setRecipe(data);
      setIsLoading(false);
      const id = "top";

      document.querySelector(`#${id}`).scrollIntoView();

      console.log(recipe.analyzedInstructions[0].steps);
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

        {/* <ul className={styles.instructionList}>
          {recipe.analyzedInstructions[0].steps.map((st) => (
            <li className={styles.instructionItem}>{st.step}</li>
          ))}
        </ul> */}

        {isLoading
          ? "Loading...."
          : console.log(
              recipe.analyzedInstructions[0].steps.map((st) => st.step)
            )}
      </div>
    </div>
  );
}
