import { useSelector, useDispatch } from "react-redux";
import styles from "./foodItems.module.css";
import { setFoodId } from "../redux/actions/foodActions";

export function FoodItems(props) {
  console.log(props);
  const item = props.item;
  const dispatch = useDispatch();
  return (
    <div key={item.id} className={styles.container}>
      <h1 className={styles.heading}>{item.title}</h1>
      <img className={styles.image} src={item.image} alt="Food Image" />
      <button
        onClick={() => {
          console.log(item.id);
          dispatch(setFoodId(item.id));
        }}
        className={styles.btn}
      >
        Recipe😋
      </button>
    </div>
  );
}
