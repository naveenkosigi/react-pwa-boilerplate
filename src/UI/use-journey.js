export const useJourney = (props) => {

    const {preSave} = props;
    const { stepperType } = props;

    const onNext = (data) => {
        if(preSave) preSave(data);

        //handle dispatch after transform
        console.log(data);
    }

    return [onNext];
}