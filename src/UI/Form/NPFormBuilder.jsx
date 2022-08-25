import { useFormik } from "formik";
import { useContext } from "react"
import FormContext from "./formContext"
import NPTextField from "./Input-Fields/NPTextField";

const NPFormBuilder = (props) => {
    const formContext = useContext(FormContext);
    const formikObj=useFormik(props.config);

    formContext.formik = formikObj;
    
    const formContent = props.fields.map(config => constructForm(config,formikObj));

    return (
      //   <FormContext.Provider value={formContext}>
      //     <form onSubmit={onSubmit}>{formContent}</form>
      //   </FormContext.Provider>
      <form onSubmit={onSubmit}>{formContent}</form>
    );
}

export default NPFormBuilder;

function onSubmit(){
    console.log("submitted");
}

function constructForm(config,formik){
    const {type,name} = config;

    switch(type){
        case 'number':
        case 'email' : 
            return(
                <NPTextField
                    error={formik.touched[name] && Boolean(formik.errors[name])}
                    helperText={formik.touched[name] && formik.errors[name]}
                    {...config}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            )
        case 'date' :
            return(
                <NPTextField
                    error={formik.touched[name] && Boolean(formik.errors[name])}
                    helperText={formik.touched[name] && formik.errors[name]}
                    {...config}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            )    
    }
}