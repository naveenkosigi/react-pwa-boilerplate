import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { JOURNEY_STATE_KEY } from "../store";
import { saveStepData } from "../store/slices/journeySlice";
import {cloneDeep} from "lodash"

export const useJourney = (props) => {

    const {setActiveStep,setCompleted,activeStep,stepperSize,onCompletion} = props;

    const dispatch = useDispatch();
    const journeyState = useSelector((state) => state[JOURNEY_STATE_KEY]);
    
    const onChangeStep = (step,isCompleted = true,event) => {

        if (step <= stepperSize) {
          setActiveStep(step);
          if (isCompleted) {
            console.log(event);

            const formData = new FormData(event.target);
            let data = {};
            for (var [key, value] of formData.entries()) { 
                data[key] = value;
            }

            //update to redux sync
            dispatch(saveStepData({ step:activeStep, data }));
            
            //mark as completed journey
            setCompleted((state) => ({ ...state, [activeStep]: true }));
          }
        }
        else{
            
            //mark as completed journey
            setCompleted((state) => ({ ...state, [activeStep]: true }));

            console.log("Completed");

            //do some operation after form completion
            if(onCompletion) {
                onCompletion(cloneDeep(journeyState));
            }
        } 
        
    }

    return [onChangeStep];
}
