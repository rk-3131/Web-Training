export default function ObjectAsProps({ info }) {
  return (
    // <h3>
    //   Name is {props.info.name} email is {props.info.email} city is{" "}
    //   {props.info.city} and age is {props.info.age}
    // </h3>

    // if the props object is not destructured then it can be accessed just like the way it is mentioned in the above method

    <div>
      <h3>
        Name is {info.name} email is {info.email} city is {info.city} and age is{" "}
        {info.age}
      </h3>
    </div>

    // but we can destructure the info object and can access the properties of the object directly
  );
}
