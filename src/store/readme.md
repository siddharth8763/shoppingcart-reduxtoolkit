- we can organise our store data in small pieces using slices
- createSlice method will take a name, initialState, and reducer fucntions
- reducer functions are used to mutate the states
- reducers are pure functions means it doesn't change the data of the outside function
- reducers take state and action as an argument
- at the first glance the state (which was taken as an arg) will be pointing to the initial state


- in redux we can't mutate the state directly. We do the following thing 
add(){
    return [...state,action.payload]
}
- but by using createSlice we can directly mutate the state. createSlice will do the abovething internally
- at the end we can export the actions and reducer. (advantage of this is we don't have to write separately the action types)

-----------------------------------------------------------------------------
-------------------------------store-----------------------------------------

- configure store is use to configure the store where data of our application will be saved
- inside configure store define a reducer object. import the reducers from slices and name them anything and use it over here
- export the store and wrap the entire component(App.js) with provider tag to access the store state for whole application

------------------------------Dispatching action ----------------------------------------------

- we need to store the product where we clicked in the redux store
- for that we need to dispatch an action. This action will call the reducer in the slice
- To dispatch the action we need useDispatch hook.
- use the useDispatch hook to dispatch the action by passing in the payload.
- Here for an example we are passing the add action inside the use dispatch. this add action takes the product(individual item on the products array)
- So here the selected product will be added to the store whenever we dispatch the add action.

---------------------------------Getting data from the store-----------------------------------
- useSelector hook is used to get data from the store
- pass an call back function on useSelector to access the state data


----------------------------------React Router with React BootStrap-----------------------------
- Wrap entire component with browser router
- use Navbar.Brand as={Link} to={"/home"} like this. This goes for all the sub type of Navbar.

-----------------------------------Async Operations using redux thunk--------------------------
- We can perform async operation on slices. It is advisable to use when the application state reauires on the entire application.
- since we are calling an API on this slice. Example for here initialstate will be object like this
initialState:{
    data:[],
    status:""
}
- this data will store the api call data and this status will be used for api call status like 404...
- in typescript we will use an ENUM to set the status code. Here we will use Object.freeze. So that no body will modify the data of this constant values.
- Before the application has started lets assume our status to be idle.
- Never perform async calls inside the reducer function.
- To perform the async operation use thunk middleware.
- Thunk comes inbuilt with RTK
- thunk returns an async function. 
- thunk syntax . the outer one can take parameters as well
export function fetchXXX(){
    return async function fetchProductThunk(dispatch,getState){
        try{

        }
        catch{

        }
    }
}
- once this thing is done use it inside of the required component. Don't use useState over there since we are getting data from RTk
- remove the async code from there
- Dispatch the thunk action
- Use the useSelector to access the data.
--------------RTK API for thunks--------------------
- createAsyncThunk hook takes a string as name and an async function as parameter
- perform async operations over here and return the json data.
- remove the reducer parameters in the createSlice method.
- Use extraReducers: (builder)=>{} in place of that
- this builder has addCase methods
- add case takes two arguments
- 1st arg states are similar to promise and second a call back function to setState accordingly
- exp builder.addCase(thunkname.pending/fulfilled/rejected,(state,action)=>{
    state.data=action.payload;
    state.status=STATUSES.IDLE
})