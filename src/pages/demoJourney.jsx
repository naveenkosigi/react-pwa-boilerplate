import { Journey } from "../UI/journey";

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
  } else if (stepCount == 1) {
    return (
      <div>
        <h2>Contact Us</h2>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="first">First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                id="first"
                required
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="last">Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                id="last"
                required
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="company">Company</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                id="company"
                required
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                placeholder="phone"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="email"
                required
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  else if(stepCount === 2){
    return(
      <div>
        <label for="contact-preference">When is the best time of day to reach you?</label>
    <div class="radio">
      <label>
        <input type="radio" name="contact-preference" id="contact-preference" value="am" required/>Morning
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="contact-preference" id="contact-preference" value="pm" required/>Evening
      </label>
    </div>

    <label for="newsletter">Would you like to recieve our email newsletter?</label>
    <div class="checkbox">

      <label>
        <input type="checkbox" value="Sure!" id="newsletter"/> Sure!
      </label>
    </div>

      </div>
    )
  }
  return <div>{stepCount}</div>;
}

function preSave(data) {
  console.log("called child method",data);
}
