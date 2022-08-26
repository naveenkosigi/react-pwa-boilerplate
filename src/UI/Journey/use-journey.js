import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JOURNEY_STATE_KEY } from "../../store/index";
import { saveStepData } from "../../store/slices/journeySlice";
import {cloneDeep} from "lodash"

export const useJourney = (props) => {

    const {setActiveStep,setCompleted,activeStep,stepperSize,onCompletion} = props;

    const dispatch = useDispatch();
    const journeyState = useSelector((state) => state[JOURNEY_STATE_KEY]);

    const journeyDeepClone = useMemo(() => {
        return cloneDeep(journeyState);
    },[journeyState]);

    
    const onChangeStep = (step,isCompleted = true,data) => {

        if (step <= stepperSize) {
          setActiveStep(step);
          if (isCompleted) {

            
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

    return [onChangeStep,journeyDeepClone];
}
