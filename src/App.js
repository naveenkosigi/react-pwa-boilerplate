import  DemoJourney  from './pages/demoJourney';
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
  defaultValues: {
    email: "foobar@example.com",
    number: "12",
    date:''
  },
  validationSchema: validationSchema,
  fieldTypes:[
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
      label:'Date of Birth'
    },
    { 
      type:'textarea',
      id:'description',
      name:'description',
      label:'description',
      multiline:true,
      rows:2
    }
  ]
};

function App() {
  return (
    <div>
          <DemoJourney />
    </div>
  );
}

export default App;
