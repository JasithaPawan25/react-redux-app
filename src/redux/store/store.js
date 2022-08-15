import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers";
import { createStore } from "@reduxjs/toolkit";

// const store  = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store =configureStore({
    reducer: reducers // this is combined reducer
})


export default store
