import { configureStore } from "@reduxjs/toolkit";
import journeyReducer from "./slices/journeySlice";

export const JOURNEY_STATE_KEY = 'journey';

const store = configureStore({
    reducer:{
        [JOURNEY_STATE_KEY] : journeyReducer
    }
})

export default store;

