import React from "react";
export const useJourney = (props) => {

    const {setActiveStep,setCompleted,activeStep,stepperSize} = props;
    
    const onChangeStep = (step,isCompleted = true,event) => {

        if (step <= stepperSize) {
          setActiveStep(step);
          if (isCompleted) {
            console.log(event);
            //update to redux sync and then mark as completed using event

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
