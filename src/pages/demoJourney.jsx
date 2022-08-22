import { Journey } from "../UI/journey";

export default function DemoJourney() {
  return <Journey nextStepperContent={nextStepperContent} preSave={preSave}/>;
}

function nextStepperContent(stepCount) {
  if (stepCount === 0) {
    return (
      <div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1" required>
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
            required
          ></textarea>
        </div>
      </div>
    );
  }
  return <div>{stepCount}</div>;
}

function preSave(step){
  console.log("called child method");
}