console.log("This is used to parse the JSON file");

let str = `{
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
}`;

const json1 = JSON.parse(str);

console.log(json1);

console.log(json1["employees"][0].firstName)
console.log(json1.employees[0])

for (let i in json1.employees){
  console.log(json1.employees[i].firstName + " " + json1.employees[i].lastName);
}
