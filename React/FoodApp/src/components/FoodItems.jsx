import styles from "./foodItems.module.css";

export default function FoodItems({ item, setFoodId }) {
  return (
    <div key={item.id} className={styles.container}>
      <h1 className={styles.heading}>{item.title}</h1>
      <img className={styles.image} src={item.image} alt="Food Image" />
      <button
        onClick={() => {
          console.log(item.id);
          setFoodId(item.id);
        }}
        className={styles.btn}
      >
        Recipe😋
      </button>
    </div>
  );
}
