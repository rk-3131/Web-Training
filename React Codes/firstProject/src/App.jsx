import Hello from "./components/Hello.jsx";
// The components declared in the file are here importted
import Header from "./components/Header.jsx";
import HelloName from "./components/HelloName.jsx";
import DestructuredHelloName from "./components/DestructuredHelloName.jsx";
import ObjectAsProps from "./components/ObjectAsProps.jsx";
import ArrayAsProps from "./components/ArrayAsProps.jsx";
import ArrayOfObjects from "./components/ArrayOfObjects.jsx";
import ArrayOfObjects2 from "./components/ArrayOfObjects2.jsx";
import ArrayOfObjects3 from "./components/ArrayOfObjects3.jsx";
import ConditionalComponent from "./components/ConditionalComponent.jsx";
import ConditionalComponentFruits from "./components/ConditionalComponentFruits.jsx";
import ButtonClickEvent from "./components/ButtonClickEvent.jsx";
import StateInReact from "./components/StateInReact.jsx";

function App() {
  const info = {
    name: "Radhakrushna Mahadik",
    city: "Pune",
    age: 22,
    email: "mahdikrs512@gmail.com",
  };

  const marks = [1, 2, 3, 4, 5];

  let cars = [
    {
      color: "purple",
      type: "minivan",
      registration: new Date("2017-01-03"),
      capacity: 7,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
  ];

  const fruits = [
    { name: "Apple", price: 10, prop: "value", available: true },
    { name: "Mango", price: 12, prop: "value", available: true },
    { name: "PineApple", price: 25, prop: "value", available: false },
    { name: "Banana", price: 57, prop: "value", available: true },
    { name: "Orange", price: 45, prop: "value", available: false },
    { name: "Coconut", price: 100, prop: "value", available: true },
    { name: "Papaya", price: 85, prop: "value", available: false },
  ];

  return (
    <div className="App">
      <Header />
      <Hello />
      {/* This is the line where component is being used */}
      {/* we reuse the code and hence after using this code we can have reuse the component as many times as we want */}
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      {/* But here my name is being repeated many times and hence we need a way to reuse the component such that they can be modified dynamically */}

      <HelloName name="Radhakrushna" src="Computer" />
      <HelloName name="Piyush" src="Computer" />
      <HelloName name="Saurabh" src="Computer" />
      <HelloName name="Avi" src="Computer" />
      {/* while passing props as arguments the key and the value has to be given there */}

      <DestructuredHelloName
        name="Radhakrushna"
        position="Computer"
        msg="Hello using destructurring"
      />
      <DestructuredHelloName
        name="Piyush"
        position="Computer"
        msg="Hello using destructurring"
      />
      <DestructuredHelloName
        name="Saurabh"
        position="Computer"
        msg="Hello using destructurring"
      />
      <DestructuredHelloName
        name="Avi"
        position="Computer"
        msg="Hello using destructurring"
      />

      <h1>This will be for the object as props</h1>
      <ObjectAsProps info={info} />

      <h1>This is used to pass the array as props</h1>
      <ArrayAsProps marksArray={marks} />

      <h1>This is for the array of objects</h1>
      <ArrayOfObjects cars={cars} />

      <h1>This is for the array of objects 2</h1>
      <ArrayOfObjects2 arr={fruits} />

      <h1>This is for the array of objects</h1>
      <ArrayOfObjects3 fruitsArray={fruits} carsArray={cars} />

      <h1>The value below will change based on the conditions</h1>
      <ConditionalComponent />

      <h1>Now the fruits will be displayed based on certain conditions</h1>
      <ConditionalComponentFruits arr={fruits} />

      <h1>Now the event will occur if we click the button given below</h1>
      <ButtonClickEvent />

      <h1>Here we will see the concept of the State in React</h1>
      <StateInReact/>
    </div>
  );
}

export default App;
