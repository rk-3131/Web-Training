import FoodItems from "./FoodItems";
import styles from "./foodData.module.css";
export default function FoodData({ food, setFoodId, isLoading, setIsLoading }) {
  return (
    <div className={styles.container}>
      {isLoading
        ? "Loading.."
        : food.map((item) => (
            <FoodItems key={item.id} item={item} setFoodId={setFoodId} />
          ))}
    </div>
  );
}
