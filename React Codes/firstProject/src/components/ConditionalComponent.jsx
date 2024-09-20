import IfFalseComponent from "./IfFalseComponent";
import IfTrueComponent from "./IfTrueComponent";

export default function ConditionalComponent() {
  let tfValue = true;

  //   if (tfValue) {
  //     return <IfTrueComponent />;
  //   } else {
  //     return <IfFalseComponent />;
  //   }
  // Even though above method of returning the value out of the code is good
  // still the function should not return the answers more than once in a given function
  // Hence to make sure that the function will return the ans only once we can return answers using element variables

  //   let elReturn;

  //   if (tfValue) {
  //     elReturn = <IfTrueComponent />;
  //   } else {
  //     elReturn = <IfFalseComponent />;
  //   }
  // Above line of code again can be again implemented by using the concept of ternary operator

  return tfValue ? <IfTrueComponent /> : <IfFalseComponent />;
}
