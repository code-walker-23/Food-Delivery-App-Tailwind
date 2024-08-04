import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
      console.log("action.payload", action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      // state.items.pop();
    },
    clearCart: (state) => {
      // state = []; this is local variable if made changes here it will not reflect in the original state
      // state.items = []; this is correct way to clear the cart
      // console.log("state", state);it will not show properly we have to use current state
      // console.log("current state before ", current(state));
      // state = [];// it will show some error
      // console.log("current state after ", current(state));
      // console.log("current state after ", current(state));both will show the same state because we make the changes in local state variable it does not reflect in the original state
      // state.items = []; // original will empty the cart after this execution only.This will mutate the original state
      // state.items.length = 0; it is same as above
     return{ items : []};// original state will empty originalstate = [] it is asme as above two code because whatever it return replaces the original state so it becomes empty
    },
  },
});
console.log("CartSlice", cartSlice);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

/* Behind the scenes 

it will create an cartSlice object: 
{

  actions: {addToCart: ƒ, removeFromCart: ƒ, clearCart: ƒ},
  caseReducers: {addToCart: ƒ, removeFromCart: ƒ, clearCart: ƒ},
  extraReducers: undefined,
  name: "cart",
  reducer: ƒ (state, action),
  type: "Slice"

}

here is reducers not single reducer that we have in appStore file Because for whole application we have one big reducer in appStore.

Inside the big reducer we have multiple small reducers(cartReducer(inside this cartReducer we have multiple reducers))

In slice , there are multiple small reducers

But you are exporting a single reducer from cartSlice file cartSlice.reducer;
At the end of the day the reducer is combination of small reducers




*/

/* 

In older version of redux , it say we can not mutate the state directly, we have to create a new state and return it.

But in redux toolkit, we can mutate the state directly or we have to mutate the state directly.

Redux tool kit : 

  state.items.push(action.payload); // we have to muatate the state directly
  console.log("action.payload",action.payload);

  const newState = [..state]; // we have to create a new state and return it and returning was mandatory in older version of redux (Vanilla Redux) but in redux toolkit it is not mandatory.
  newState.items.push(action.payload);
  return newState; 


  Behind the scenes :
  Redux toolkit is using immer library behind the scenes.
  Immer library is a library that helps us to mutate the state directly.
  Working of immer : 
  1. Immer will create a copy of the state
  2. It will apply the changes to the copy of the state
  3. It will return the copy of the state
  4. It will not mutate the original state.

  It will find the difference between the original state and the mutated state and create a new state and return 


  **Immer** is a JavaScript library that makes working with immutable data structures easier and more intuitive. It is particularly useful in scenarios where you need to manage state in applications, such as in Redux reducers or React state updates.

### Key Features of Immer

1. **Simplicity with Immutability**:
   Immer allows you to work with mutable data structures while maintaining immutability behind the scenes. This means you can use standard JavaScript operations like `push`, `splice`, and `set` to modify state, and Immer will handle producing a new immutable state.

2. **Draft State**:
   Immer uses a concept called a "draft state," which is a proxy that you can mutate directly. When you make changes to the draft, Immer produces a new immutable state reflecting those changes.

3. **Ease of Use**:
   Immer simplifies state management by allowing you to write more straightforward and readable code without manually handling immutability concerns.

### How Immer Works

Here’s a basic overview of how Immer works:

1. **Create a Draft**: You start by creating a draft of your state, which you can modify freely.

2. **Apply Changes**: You apply your changes to the draft.

3. **Produce New State**: Immer produces a new immutable state based on the changes applied to the draft.

### Example Usage

Here’s a simple example demonstrating how to use Immer to manage state in a Redux reducer:

1. **Install Immer**

   First, you need to install Immer:

   ```bash
   npm install immer
   ```

2. **Using Immer in a Redux Reducer**

   Suppose you have a Redux reducer for managing a list of items:

   ```javascript
   // import produce from Immer
   import produce from 'immer';

   // Initial state
   const initialState = {
     items: []
   };

   // Reducer function
   const itemsReducer = (state = initialState, action) => {
     switch (action.type) {
       case 'ADD_ITEM':
         // Use Immer's produce function to create a new state
         return produce(state, draft => {
           draft.items.push(action.payload);
         });

       case 'REMOVE_ITEM':
         return produce(state, draft => {
           draft.items = draft.items.filter(item => item !== action.payload);
         });

       default:
         return state;
     }
   };

   export default itemsReducer;
   ```

In this example:

- **`produce`**: The `produce` function from Immer is used to handle state changes. It takes the current state and a function where you modify a draft of the state.
- **Draft State**: Inside the `produce` function, you work with a draft state that you can mutate directly. Immer takes care of creating a new immutable state based on your changes.

### Use Cases

- **State Management Libraries**: Immer is often used with Redux or MobX to simplify immutable state updates.
- **React State Updates**: Immer can be used directly in React state updates for a more intuitive approach to managing immutability.

### Conclusion

Immer is a powerful tool for managing immutable state in a more natural and less error-prone way. It abstracts away the complexities of immutability and allows you to focus on writing cleaner and more maintainable code. Whether you're using it with Redux, MobX, or in standalone state management scenarios, Immer can simplify your state management tasks significantly.



Redux play with data layer of the application.
It take care of the data layer of the application.

*/
