import { useSelector } from "react-redux";
import { FoodItems } from "./FoodItems";
import styles from "./foodData.module.css";
export default function FoodData() {
  const foodData = useSelector((state) => state.food.foodItems);
  console.log("Inside of the foodData", foodData);
  if (foodData.length === 0) return "loading";
  else
    return (
      <div className={styles.container}>
        {foodData.map((item) => (
          <FoodItems key={item.id} item={item} />
        ))}
      </div>
    );
}
