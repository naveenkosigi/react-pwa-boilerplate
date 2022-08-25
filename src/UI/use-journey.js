import React from "react";
import { useDispatch } from "react-redux";
import { saveStepData } from "../store/slices/journeySlice";

export const useJourney = (props) => {

    const {setActiveStep,setCompleted,activeStep,stepperSize} = props;

    const dispatch = useDispatch();
    
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

            //update to redux sync and then mark as completed using event
            dispatch(saveStepData({ step, data }));
            
            setCompleted((state) => ({ ...state, [activeStep]: true }));
          }
        }
        else{
            setCompleted((state) => ({ ...state, [activeStep]: true }));

            console.log("Completed");

            //do some operation
        } 
        
    }

    return [onChangeStep];
}
