import styles from "./ingredients.module.css";

export default function Ingredients({ el }) {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.image}
          src={`https://spoonacular.com/cdn/ingredients_100x100/${el.image}`}
          alt=""
        />
      </div>
      <div className={styles.nameAndQuantity}>
        <h2 className={styles.name}>{el.name}</h2>
        <h2 className={styles.quantity}>
          {el.amount} {el.unit}
        </h2>
      </div>
    </div>
  );
}
