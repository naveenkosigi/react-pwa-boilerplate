import logo from './logo.svg';
import { Journey } from './UI/Journey/journey';
import HorizontalNonLinearStepper from './UI/Stepper/stepper';
import  DemoJourney  from './pages/demoJourney';
import NPTextField from './UI/Form/Input-Fields/NPTextField';
import NPFormBuilder from './UI/Form/NPFormBuilder';
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  number: yup
    .number("Enter number")
    .min(8, "Number should be of minimum 8 characters length")
    .required("Number is required")
});

const config={
  initialValues: {
    email: "foobar@example.com",
    number: "12",
    date:''
  },
  validationSchema: validationSchema
};

const fields = [
  {
    type:'email',
    id:'email',
    name:'email',
    label:'email'
  },
  {
    type:'number',
    id:'number',
    name:'number',
    label:'Number'
  },
  {
    type:'date',
    id:'date',
    name:'date',
    helperText:undefined,
    label:'Date of Birth'
  }
]

function App() {
  return (
    <div>
          <DemoJourney />
          <NPFormBuilder config={config} fields={fields}/>
    </div>
  );
}

export default App;
