import className from './journey.module.css';
import HorizontalNonLinearStepper from './stepper';
import React, { useState } from 'react';
import { useJourney } from './use-journey';

export const Journey = React.memo((props) => {


    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const {nextStepperContent,preSave,stepperTitles} = props.config; 

    const [onChangeStep] = useJourney({
      ...props,
      setActiveStep,
      setCompleted,
      activeStep,
      stepperSize: stepperTitles.length - 1
    });

    function onFormSubmit(event) {
        event.preventDefault();

        onChangeStep(activeStep + 1,true,event);
    }

    
    return (
      <section
        className={`${className["journey-section"]} d-flex justify-content-between`}
      >
        <div className={`${className["form-container"]}`}>
          <form onSubmit={onFormSubmit}>
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
            onChangeStep = {onChangeStep}
            steps={stepperTitles}
          />
        </div>
      </section>
    );
});

