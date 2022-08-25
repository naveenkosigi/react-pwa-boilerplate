import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

export default function HorizontalNonLinearStepper(props) {

    //stepper has external state management, internal not implemented yet
    const { activeStep,completed,onChangeStep,steps} = props;   

    const handleStep = (clickedStep) => () => {
      if(activeStep === clickedStep) return;

      if(clickedStep > activeStep && !!completed[clickedStep] === false){
        return;
      }

      if (!!completed[activeStep] === false) {
        //he has not completed the form show prompt
        if (
          window.confirm(
            "You have not completed this form ! Navigating away will Reset it. Are you sure?"
          ) === true
        ) {
            onChangeStep(clickedStep,false);
        }
      }
      else if(completed[activeStep] === true){
        onChangeStep(clickedStep);
        return;
      }  
      
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