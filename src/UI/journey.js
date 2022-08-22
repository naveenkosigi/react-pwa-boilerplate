import className from './journey.module.css';
import HorizontalNonLinearStepper from './stepper';
import React, { useState } from 'react';
import { useJourney } from './use-journey';

export const Journey = React.memo((props) => {

    const [stepperIndex,setStepperIndex] = useState(0);
    const [onNext] = useJourney(props);

    const {nextStepperContent} = props; 

    function onSubmit(event){
        event.preventDefault();
        onNext("some data validation");
        
        setStepperIndex((stepperIndex) => stepperIndex + 1);
    }

    return (
        <section className={`${className['journey-section']} d-flex justify-content-between`}>
            <div className={`${className['form-container']}`}>
                <form onSubmit={onSubmit}>
                {nextStepperContent(stepperIndex)}
                <button type="submit" class="btn btn-primary">Submit</button>&nbsp;
                <button type="button" class="btn btn-danger">Reset</button>
                </form>
            </div>
            <div className={`${className['stepper-container']}`}>
                <HorizontalNonLinearStepper  contentCallBack={setStepperIndex} currentIndex={stepperIndex}/>
            </div>
        </section>
    )
});

