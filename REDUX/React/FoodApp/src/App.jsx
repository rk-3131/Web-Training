import { useState } from "react";
import Input from "./components/Input";
import FoodData from "./components/FoodData";
import Header from "./components/Header";
import FoodAndRecipe from "./components/FoodAndRecipe";
import InnerContainer from "./components/InnerContainer";
import FoodRecipe from "./components/FoodRecipe";

//   vegetarian: true,
//   vegan: false,
//   glutenFree: false,
//   dairyFree: false,
//   veryHealthy: false,
//   cheap: false,
//   veryPopular: false,
//   sustainable: false,
//   lowFodmap: false,
//   weightWatcherSmartPoints: 11,
//   gaps: "no",
//   preparationMinutes: null,
//   cookingMinutes: null,
//   aggregateLikes: 1,
//   healthScore: 58,
//   creditsText: "foodista.com",
//   sourceName: "foodista.com",
//   pricePerServing: 387.46,
//   extendedIngredients: [
//     {
//       id: 1019,
//       aisle: "Cheese",
//       image: "feta.png",
//       consistency: "SOLID",
//       name: "feta cheese",
//       nameClean: "feta cheese",
//       original: "1/2 cup feta cheese",
//       originalName: "feta cheese",
//       amount: 0.5,
//       unit: "cup",
//       meta: [],
//       measures: {
//         us: {
//           amount: 0.5,
//           unitShort: "cups",
//           unitLong: "cups",
//         },
//         metric: {
//           amount: 75,
//           unitShort: "g",
//           unitLong: "grams",
//         },
//       },
//     },
//     {
//       id: 10018413,
//       aisle: "Bakery/Bread",
//       image: "pita-bread.jpg",
//       consistency: "SOLID",
//       name: "flatout flatbread",
//       nameClean: "flatbread",
//       original: "1 Flatout flatbread*",
//       originalName: "Flatout flatbread",
//       amount: 1,
//       unit: "",
//       meta: [],
//       measures: {
//         us: {
//           amount: 1,
//           unitShort: "",
//           unitLong: "",
//         },
//         metric: {
//           amount: 1,
//           unitShort: "",
//           unitLong: "",
//         },
//       },
//     },
//     {
//       id: 11215,
//       aisle: "Produce",
//       image: "garlic.png",
//       consistency: "SOLID",
//       name: "garlic",
//       nameClean: "garlic",
//       original: "2 cloves garlic",
//       originalName: "garlic",
//       amount: 2,
//       unit: "cloves",
//       meta: [],
//       measures: {
//         us: {
//           amount: 2,
//           unitShort: "cloves",
//           unitLong: "cloves",
//         },
//         metric: {
//           amount: 2,
//           unitShort: "cloves",
//           unitLong: "cloves",
//         },
//       },
//     },
//     {
//       id: 10011821,
//       aisle: "Produce",
//       image: "bell-pepper-orange.png",
//       consistency: "SOLID",
//       name: "orange pepper",
//       nameClean: "orange pepper",
//       original: "1/2 cup orange pepper, sliced",
//       originalName: "orange pepper, sliced",
//       amount: 0.5,
//       unit: "cup",
//       meta: ["sliced"],
//       measures: {
//         us: {
//           amount: 0.5,
//           unitShort: "cups",
//           unitLong: "cups",
//         },
//         metric: {
//           amount: 74.5,
//           unitShort: "g",
//           unitLong: "grams",
//         },
//       },
//     },
//     {
//       id: 10011282,
//       aisle: "Produce",
//       image: "red-onion.png",
//       consistency: "SOLID",
//       name: "onion",
//       nameClean: "red onion",
//       original: "1/4 cup red onion, sliced",
//       originalName: "red onion, sliced",
//       amount: 0.25,
//       unit: "cup",
//       meta: ["red", "sliced"],
//       measures: {
//         us: {
//           amount: 0.25,
//           unitShort: "cups",
//           unitLong: "cups",
//         },
//         metric: {
//           amount: 40,
//           unitShort: "g",
//           unitLong: "grams",
//         },
//       },
//     },
//     {
//       id: 11821,
//       aisle: "Produce",
//       image: "red-pepper.jpg",
//       consistency: "SOLID",
//       name: "bell pepper",
//       nameClean: "red pepper",
//       original: "1/2 cup red pepper, sliced",
//       originalName: "red pepper, sliced",
//       amount: 0.5,
//       unit: "cup",
//       meta: ["red", "sliced"],
//       measures: {
//         us: {
//           amount: 0.5,
//           unitShort: "cups",
//           unitLong: "cups",
//         },
//         metric: {
//           amount: 74.5,
//           unitShort: "g",
//           unitLong: "grams",
//         },
//       },
//     },
//     {
//       id: 10011457,
//       aisle: "Produce",
//       image: "spinach.jpg",
//       consistency: "SOLID",
//       name: "spinach leaves",
//       nameClean: "spinach",
//       original: "1 cup spinach leaves, raw, torn",
//       originalName: "spinach leaves, raw, torn",
//       amount: 1,
//       unit: "cup",
//       meta: ["raw"],
//       measures: {
//         us: {
//           amount: 1,
//           unitShort: "cup",
//           unitLong: "cup",
//         },
//         metric: {
//           amount: 30,
//           unitShort: "g",
//           unitLong: "grams",
//         },
//       },
//     },
//     {
//       id: 11529,
//       aisle: "Produce",
//       image: "tomato.png",
//       consistency: "SOLID",
//       name: "tomato",
//       nameClean: "tomato",
//       original: "1/2 tomato, sliced",
//       originalName: "tomato, sliced",
//       amount: 0.5,
//       unit: "",
//       meta: ["sliced"],
//       measures: {
//         us: {
//           amount: 0.5,
//           unitShort: "",
//           unitLong: "",
//         },
//         metric: {
//           amount: 0.5,
//           unitShort: "",
//           unitLong: "",
//         },
//       },
//     },
//   ],
//   id: 658615,
//   title: "Roasted Peppers, Spinach & Feta Pizza",
//   readyInMinutes: 45,
//   servings: 1,
//   sourceUrl:
//     "http://www.foodista.com/recipe/LWCPWJ2L/roasted-peppers-spinach-feta-pizza",
//   image: "https://img.spoonacular.com/recipes/658615-556x370.jpg",
//   imageType: "jpg",
//   summary:
//     'Roasted Peppers, Spinach & Feta Pizzan is a <b>lacto ovo vegetarian</b> main course. This recipe makes 1 servings with <b>390 calories</b>, <b>18g of protein</b>, and <b>17g of fat</b> each. For <b>$3.87 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. 1 person were impressed by this recipe. Head to the store and pick up bell pepper, flatout flatbread, tomato, and a few other things to make it today. It is brought to you by Foodista. Only a few people really liked this Mediterranean dish. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 83%</b>. This score is super. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/spinach-and-feta-chicken-burgers-aka-spanakopita-burgers-with-grilled-halloumi-roasted-red-peppers-and-a-spinach-and-feta-sauce-611532">Spinach and Feta Chicken Burgers (aka Spanakopita Burgers) with Grilled Halloumi, Roasted Red Peppers and a Spinach and Feta Sauce</a>, <a href="https://spoonacular.com/recipes/spinach-and-feta-chicken-burgers-aka-spanakopita-burgers-with-grilled-halloumi-roasted-red-peppers-and-a-spinach-and-feta-sauce-1238573">Spinach and Feta Chicken Burgers (aka Spanakopita Burgers) with Grilled Halloumi, Roasted Red Peppers and a Spinach and Feta Sauce</a>, and <a href="https://spoonacular.com/recipes/spinach-and-feta-chicken-burgers-aka-spanakopita-burgers-with-grilled-halloumi-roasted-red-peppers-and-a-spinach-and-feta-sauce-1195743">Spinach and Feta Chicken Burgers (aka Spanakopita Burgers) with Grilled Halloumi, Roasted Red Peppers and a Spinach and Feta Sauce</a>.',
//   cuisines: ["Mediterranean", "Italian", "European"],
//   dishTypes: ["lunch", "main course", "main dish", "dinner"],
//   diets: ["lacto ovo vegetarian"],
//   occasions: [],
//   instructions:
//     "<ol><li>Toss peppers, tomatoes, onions and garlic with olive oil and spread on a baking sheet. Roast at 400 degrees for 20 minutes.</li><li>Place flatbread on baking sheet. Layer peppers, tomatoes, onions and spinach on flatbread. Sprinkle with feta. Bake for 10 minutes at 400 degrees.</li><li>Turn oven to broil and cook on low for 2-3 minutes or until flatbread edges begin to brown.</li></ol>",
//   analyzedInstructions: [
//     {
//       name: "",
//       steps: [
//         {
//           number: 1,
//           step: "Toss peppers, tomatoes, onions and garlic with olive oil and spread on a baking sheet. Roast at 400 degrees for 20 minutes.",
//           ingredients: [
//             {
//               id: 4053,
//               name: "olive oil",
//               localizedName: "olive oil",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
//             },
//             {
//               id: 11529,
//               name: "tomato",
//               localizedName: "tomato",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
//             },
//             {
//               id: 10111333,
//               name: "peppers",
//               localizedName: "peppers",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/green-pepper.jpg",
//             },
//             {
//               id: 11215,
//               name: "garlic",
//               localizedName: "garlic",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
//             },
//             {
//               id: 11282,
//               name: "onion",
//               localizedName: "onion",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
//             },
//             {
//               id: 0,
//               name: "spread",
//               localizedName: "spread",
//               image: "",
//             },
//           ],
//           equipment: [
//             {
//               id: 404727,
//               name: "baking sheet",
//               localizedName: "baking sheet",
//               image:
//                 "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg",
//             },
//           ],
//           length: {
//             number: 20,
//             unit: "minutes",
//           },
//         },
//         {
//           number: 2,
//           step: "Place flatbread on baking sheet.",
//           ingredients: [
//             {
//               id: 10018413,
//               name: "flatbread",
//               localizedName: "flatbread",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/pita-bread.jpg",
//             },
//           ],
//           equipment: [
//             {
//               id: 404727,
//               name: "baking sheet",
//               localizedName: "baking sheet",
//               image:
//                 "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg",
//             },
//           ],
//         },
//         {
//           number: 3,
//           step: "Layer peppers, tomatoes, onions and spinach on flatbread.",
//           ingredients: [
//             {
//               id: 10018413,
//               name: "flatbread",
//               localizedName: "flatbread",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/pita-bread.jpg",
//             },
//             {
//               id: 11529,
//               name: "tomato",
//               localizedName: "tomato",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
//             },
//             {
//               id: 10111333,
//               name: "peppers",
//               localizedName: "peppers",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/green-pepper.jpg",
//             },
//             {
//               id: 10011457,
//               name: "spinach",
//               localizedName: "spinach",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg",
//             },
//             {
//               id: 11282,
//               name: "onion",
//               localizedName: "onion",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
//             },
//           ],
//           equipment: [],
//         },
//         {
//           number: 4,
//           step: "Sprinkle with feta.",
//           ingredients: [
//             {
//               id: 1019,
//               name: "feta cheese",
//               localizedName: "feta cheese",
//               image: "https://spoonacular.com/cdn/ingredients_100x100/feta.png",
//             },
//           ],
//           equipment: [],
//         },
//         {
//           number: 5,
//           step: "Bake for 10 minutes at 400 degrees.Turn oven to broil and cook on low for 2-3 minutes or until flatbread edges begin to brown.",
//           ingredients: [
//             {
//               id: 10018413,
//               name: "flatbread",
//               localizedName: "flatbread",
//               image:
//                 "https://spoonacular.com/cdn/ingredients_100x100/pita-bread.jpg",
//             },
//           ],
//           equipment: [
//             {
//               id: 404784,
//               name: "oven",
//               localizedName: "oven",
//               image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
//             },
//           ],
//           length: {
//             number: 13,
//             unit: "minutes",
//           },
//         },
//       ],
//     },
//   ],
//   originalId: null,
//   spoonacularScore: 86.30245208740234,
//   spoonacularSourceUrl:
//     "https://spoonacular.com/roasted-peppers-spinach-feta-pizza-658615",
// };

// const pizzaArray = [
//   {
//     id: 658615,
//     title: "Roasted Peppers, Spinach & Feta Pizza",
//     image: "https://img.spoonacular.com/recipes/658615-312x231.jpg",
//     imageType: "jpg",
//   },
//   {
//     id: 658920,
//     title: "Rustic Grilled Peaches Pizza",
//     image: "https://img.spoonacular.com/recipes/658920-312x231.jpg",
//     imageType: "jpg",
//   },
//   {
//     id: 656329,
//     title: "Pizza bites with pumpkin",
//     image: "https://img.spoonacular.com/recipes/656329-312x231.jpg",
//     imageType: "jpg",
//   },
//   {
//     id: 680975,
//     title: "BLT Pizza",
//     image: "https://img.spoonacular.com/recipes/680975-312x231.jpg",
//     imageType: "jpg",
//   },
//   {
//     id: 716300,
//     title: "Plantain Pizza",
//     image: "https://img.spoonacular.com/recipes/716300-312x231.jpg",
//     imageType: "jpg",
//   },
//   {
//     id: 665769,
//     title: "Zucchini Pizza Boats",
//     image: "https://img.spoonacular.com/recipes/665769-312x231.jpg",
//     imageType: "jpg",
//   },
//   {
//     id: 655698,
//     title: "Pepperoni Pizza Muffins",
//     image: "https://img.spoonacular.com/recipes/655698-312x231.jpg",
//     imageType: "jpg",
//   },
//   {
//     id: 641893,
//     title: "Easy Cheesy Pizza Casserole",
//     image: "https://img.spoonacular.com/recipes/641893-312x231.jpg",
//     imageType: "jpg",
//   },
//   {
//     id: 654523,
//     title: "Paneer & Fig Pizza",
//     image: "https://img.spoonacular.com/recipes/654523-312x231.jpg",
//     imageType: "jpg",
//   },
//   {
//     id: 655847,
//     title: "Pesto Veggie Pizza",
//     image: "https://img.spoonacular.com/recipes/655847-312x231.jpg",
//     imageType: "jpg",
//   },
// ];
function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App">
      <Header />
      <Input />
      <FoodAndRecipe>
        <InnerContainer>
          <FoodData isLoading={isLoading} setIsLoading={setIsLoading} />
        </InnerContainer>
        <InnerContainer>
          <FoodRecipe isLoading={isLoading} setIsLoading={setIsLoading} />
        </InnerContainer>
      </FoodAndRecipe>
    </div>
  );
}

export default App;
