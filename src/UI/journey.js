import className from './journey.module.css';
import HorizontalNonLinearStepper from './stepper';
import React, { useState } from 'react';
import { useJourney } from './use-journey';

export const Journey = React.memo((props) => {


    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const {nextStepperContent} = props; 

    const [onNext] = useJourney({...props,setActiveStep,setCompleted,activeStep});

    
    return (
      <section
        className={`${className["journey-section"]} d-flex justify-content-between`}
      >
        <div className={`${className["form-container"]}`}>
          <form onSubmit={onNext}>
            {nextStepperContent(activeStep)}
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            &nbsp;
            <button type="button" class="btn btn-danger">
              Reset
            </button>
          </form>
        </div>
        <div className={`${className["stepper-container"]}`}>
          <HorizontalNonLinearStepper
            activeStep={activeStep}
            completed={completed}
          />
        </div>
      </section>
    );
});

