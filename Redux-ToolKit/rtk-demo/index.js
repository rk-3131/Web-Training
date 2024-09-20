const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { icecreamActions } = require("./features/icecream/icecreamSlice");
const { fetchUsers } = require("./features/users/userSlice");

console.log("Initial state", store.getState());

const unSubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(20));

// store.dispatch(icecreamActions.buyItem());
// store.dispatch(icecreamActions.buyItem());
// store.dispatch(icecreamActions.buyItem());
// store.dispatch(icecreamActions.buyItem());
// store.dispatch(icecreamActions.buyItem());
// store.dispatch(icecreamActions.buyItem());
// store.dispatch(icecreamActions.restock(100));
// unSubscribe();
