import React from "react";
export const useJourney = (props) => {

    const {setActiveStep,setCompleted,activeStep} = props;
    
    const onChangeStep = (step,isCompleted = true) => {

        console.log(props);
        setActiveStep(step);
        if(isCompleted){
            setCompleted((state) => ({...state,[activeStep] : true}));
        }
    }

    const onNext = (event) => {

    }
    
    return [onChangeStep];
}
