import { createSlice } from "@reduxjs/toolkit";

const journeySlice = createSlice({
    name : 'journey',
    initialState : {},
    reducers : {
        saveStepData(state,action){
            const {step,data} = action.payload;
            state[step] = data;
        }
    }
});

export const {saveStepData} = journeySlice.actions;
export default journeySlice.reducer;