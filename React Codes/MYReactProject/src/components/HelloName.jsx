function HelloName(props) {
  console.log(props);
  // Here afte the props is printed two times for the single invocation is because the app is running in the strict mode
  return (
    <h3>
      Hello {props.name} from {props["src"]}
    </h3>
  );
}

// props is the same as parameter in the js function
// using props we can get the input and hence that input will be used
// the props is js object
// Hence to access the element is same as of js object using. operator

export default HelloName;
