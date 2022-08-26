import { Fragment, useContext, useEffect } from "react";
import FormContext from "./formContext";
import NPTextField from "./Input-Fields/NPTextField";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isEmpty } from "lodash";

const NPFormBuilder = (props) => {

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue
  } = useForm({
    mode:'onChange',
    defaultValues: props.config.defaultValues,
    resolver: yupResolver(props.config.validationSchema)
  });

  const {config,config:{fieldTypes,mode},overRideData} = props;

  useEffect(() => {
    if(!isEmpty(overRideData)){
      overRideFormData(setValue,overRideData);
    }
  },[overRideData]);

  const onSubmit = (data) => {if(props.onSubmit) props.onSubmit();};


  let formContent="";
  if(mode === 'edit'){
    formContent = fieldTypes.map((config) =>
    constructForm(config,control,errors)
    );
  }
  else if(mode === 'view'){
    formContent = config.content;
  }
  

  return (
    //   <FormContext.Provider value={formContext}>
    //     <form onSubmit={onSubmit}>{formContent}</form>
    //   </FormContext.Provider>
    <form onSubmit={handleSubmit(props.onSubmit)}>
        {formContent}

        {mode === 'edit' && <input type="submit" />}
        {mode === 'view' && <button type='button' onClick={onSubmit}>Next</button>}
    </form>
  );
};

export default NPFormBuilder;

function onSubmit() {
  console.log("submitted");
}

function constructForm (config,control,errors) {
    const { type, name } = config;

    switch (type) {
      case "textarea":  
      case "number":
      case "email":
        return (
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value  } }) => (
              <Fragment>
                <NPTextField
                  {...config}
                  error={!!errors[name]}
                  value={value}
                  onChange={onChange}
                  helperText={errors[name]?.message}
                />
              </Fragment>
            )}
          />
        );
    }
  }

  function overRideFormData(setter,data){
    for(let key in data){
      setter(key,data[key]);
    }
  }

