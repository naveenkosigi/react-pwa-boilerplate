import { configureStore } from "@reduxjs/toolkit";
import journeyReducer from "./slices/journeySlice";

const store = configureStore({
    reducer:{
        journey : journeyReducer
    }
})

export default store;

