import React from "react";
export const useJourney = (props) => {

    const {preSave ,setActiveStep,setCompleted,activeStep} = props;
    
    const onNext = (event) => {
        event.preventDefault();
        if(preSave) preSave(event);

        //handle dispatch after transform
        console.log(props);
        setActiveStep((step) => step + 1);
        setCompleted((state) => ({...state,[activeStep] : true}));
    }
    
    return [onNext];
}
