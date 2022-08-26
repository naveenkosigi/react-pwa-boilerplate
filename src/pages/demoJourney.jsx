import { Journey } from "../UI/Journey/journey";
import * as yup from "yup";


export default function DemoJourney() {

  const journeyConfig = {
    name : 'Demo Journey',
    stepperTitles : [
      "Business Entity Details",
      "Personal Details",
      "Account Details",
      "Additional Info"
    ],
    nextStepperContent,
    preSave
  };

  return <Journey config={journeyConfig} />;
}

function nextStepperContent(stepCount) {
  if (stepCount === 0) {

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
      mode:'edit',
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

    return config;

    return (
      <div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="text"
            name="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1" name="multiselect" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            required
          ></textarea>
        </div>
      </div>
    );
  } 
  return {
    mode:'view',
    defaultValues:{},
    content:(
      <div>{stepCount}</div>
    )
  };
}

function preSave(data) {
  console.log("called child method",data);
}
