import styles from "./foodAndRecipe.module.css";

export default function FoodAndRecipe({ children }) {
  return <div className={styles.container}>{children}</div>;
}
