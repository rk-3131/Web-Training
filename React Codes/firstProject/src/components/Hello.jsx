// jsx in the combination of html and js
// we can combine both the js and html and hence we can use it for the code implementation

const myNameFunction = () => {
  return "Radhakrushna Mahadik";
};
// This is the js code which is declaration of the function

function Hello() {
  return (
    <h1>This is the Hello from components folder by {myNameFunction()}</h1>
    // Here in the above line inside of the {} the js variables can be used and hence they can be used in code
  );
}

export default Hello;

// This is the file create in the folder called components in source folder
// Here will be the components
// This component is nothing but the simple js function which is used to get the result
// After the components is being done typing we should export it
// and hence it will be accessed in the App.jsx file
