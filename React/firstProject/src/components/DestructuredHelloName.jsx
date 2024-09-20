const DestructuredHelloName = ({ name, position, msg }) => {
  // One major thing to note about the props is that they are immutable
  // i.e the value of the props cannot be changed once they come here

  // here we will get the object in the form of props
  // just like in destructuring in js we can destructure the props

  //   const { name, msg, position } = props;
  //   this is all aplicable if we take the props as input
  // we can even destructure the props while taking the input and hence there only we can make it easy to access the elements in the react
  // here the values inside the props which are name msg and position are now destructured
  // hence we can have the code such that name msg and position can directly be accessed without using name of the object and . operator

  return (
    <h3>
      {msg}, {name} it looks you are at {position}
    </h3>
  );
};

export default DestructuredHelloName;
