import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

// export default function HorizontalNonLinearStepper(props) {

//   const {contentCallBack , currentIndex} = props;   
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState({});

//   React.useEffect(() => {
//     setActiveStep(currentIndex);
//     handleComplete();
//   },[currentIndex]);

//   React.useEffect(() => {

//   },[activeStep])

//   const totalSteps = () => {
//     return steps.length;
//   };

//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };

//   const isLastStep = () => {
//     return activeStep === totalSteps() - 1;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const handleNext = () => {
//     const newActiveStep =
//       isLastStep() && !allStepsCompleted()
//         ? // It's the last step, but not all steps have been completed,
//           // find the first step that has been completed
//           steps.findIndex((step, i) => !(i in completed))
//         : activeStep + 1;
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStep = (step) => () => {
//     if(completed[activeStep]){
//         setActiveStep(step);
//         contentCallBack(step);    
//     }
//   };

//   const handleComplete = () => {
//     if(activeStep === 0) return;
//     const newCompleted = completed;
//     newCompleted[activeStep - 1] = true;
//     setCompleted(newCompleted);
//     handleNext();
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
//         {steps.map((label, index) => (
//           <Step key={label} completed={completed[index]}>
//             <StepButton color="inherit" onClick={handleStep(index)}>
//               {label}
//             </StepButton>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>
//   );
// }

export default function HorizontalNonLinearStepper(props) {

    const { activeStep ,completed} = props;   


    const totalSteps = () => {
      return steps.length;
    };
  
    const completedSteps = () => {
      return Object.keys(completed).length;
    };
  
    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };
  
    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };
  
    const handleNext = () => {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
    };
  
    const handleBack = () => {
      //setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStep = (step) => () => {
      if(completed[activeStep]){
          //setActiveStep(step);
         //contentCallBack(step);    
      }
    };
  
    const handleComplete = () => {
      if(activeStep === 0) return;
      const newCompleted = completed;
      newCompleted[activeStep - 1] = true;
      //setCompleted(newCompleted);
      handleNext();
    };
  
    const handleReset = () => {
      //setActiveStep(0);
      //setCompleted({});
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }