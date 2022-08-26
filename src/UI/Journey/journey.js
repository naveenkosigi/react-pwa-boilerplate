import className from './journey.module.css';
import HorizontalNonLinearStepper from '../Stepper/stepper';
import React, { useState } from 'react';
import { useJourney } from './use-journey';
import NPFormBuilder from '../Form/NPFormBuilder';

export const Journey = React.memo((props) => {


    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const {nextStepperContent,preSave,stepperTitles} = props.config; 

    const [onChangeStep,journeyDeepClone] = useJourney({
      ...props,
      setActiveStep,
      setCompleted,
      activeStep,
      stepperSize: stepperTitles.length - 1,
      onCompletion:preSave
    });

    console.log(journeyDeepClone);

    function onFormSubmit(data={}) {
        onChangeStep(activeStep + 1,true,data);
    }

    
    return (
      <section
        className={`${className["journey-section"]} d-flex justify-content-between`}
      >
        <div className={`${className["form-container"]}`}>
            <NPFormBuilder config={nextStepperContent(activeStep)} onSubmit={onFormSubmit} overRideData={journeyDeepClone[activeStep]}/>
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

