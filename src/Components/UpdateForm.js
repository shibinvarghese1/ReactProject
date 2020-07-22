import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Login.css";
class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: null,
      Surname: null,
      Gender: null,
      Regemail: null,
      Regpassword: null,
      Age: null,
      Mobno: null,
      About: null,
      file: null,
    };
  }
  SetUpdateinputs = (e) => {
    //console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  setRegistrationDetails = (e) => {
    var dat = {
      FirstName: this.state.FirstName,
      Surname: this.state.Surname,
      Gender: this.state.Gender.toLocaleLowerCase(),
      email: this.props.LogEmail,
      Regpassword: this.state.Regpassword,
      Age: this.state.Age,
      Mobno: this.state.Mobno,
      About: this.state.About,
      file: this.state.file,
      UpdateRecord: true,
    };
    axios.post("http://localhost/api/api.php", dat).then((response) => {
      alert("Updated Successfully");
    });
  };

  render() {
    return (
      <div>
        <div className="container h-100">
          <div className="RegisterText">
            <label className="Textbold">Update</label>
            <Form
              inline
              className="form-group h-100 justify-content-center align-items-center"
            >
              <div className="SpaceAndMargin">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 row">
                  <Label for="FirstName" className="mr-sm-2">
                    FirstName
                  </Label>
                  <Input
                    type="text"
                    onChange={this.SetUpdateinputs}
                    name="FirstName"
                    id="FirstName"
                    placeholder="First Name"
                    className="mr-sm-2"
                  />
                </FormGroup>
              </div>
              <div className="SpaceAndMargin">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 row">
                  <Label for="Surname" className="mr-sm-2">
                    Surname
                  </Label>
                  <Input
                    type="text"
                    onChange={this.SetUpdateinputs}
                    name="Surname"
                    id="Surname"
                    placeholder="Surname"
                    className="mr-sm-2"
                  />
                </FormGroup>
              </div>
              <div className="SpaceAndMargin">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 row">
                  <Label for="Gender" className="mr-sm-2">
                    Gender
                  </Label>
                  <Input
                    type="text"
                    onChange={this.SetUpdateinputs}
                    name="Gender"
                    id="Gender"
                    placeholder="Gender"
                    className="mr-sm-2"
                  />
                </FormGroup>
              </div>

              <div className="SpaceAndMargin">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 row">
                  <Label for="examplePassword" className="mr-sm-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    onChange={this.SetUpdateinputs}
                    name="Regpassword"
                    id="Regpassword"
                    placeholder="password"
                    className="mr-sm-2 col-md-offset-2"
                  />
                </FormGroup>
              </div>
              <div className="SpaceAndMargin">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 row">
                  <Label for="Age" className="mr-sm-2">
                    Age
                  </Label>
                  <Input
                    type="number"
                    onChange={this.SetUpdateinputs}
                    name="Age"
                    id="Age"
                    placeholder="Age"
                    className="mr-sm-2 col-md-offset-2"
                  />
                </FormGroup>
              </div>
              <div className="SpaceAndMargin">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 row">
                  <Label for="MobNo" className="mr-sm-2">
                    MobNo
                  </Label>
                  <Input
                    type="number"
                    onChange={this.SetUpdateinputs}
                    name="Mobno"
                    id="Mobno"
                    placeholder="Mobile Number"
                    className="mr-sm-2 col-md-offset-2"
                  />
                </FormGroup>
              </div>
              <div className="SpaceAndMargin">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 row">
                  <Label for="About" className="mr-sm-2">
                    Text Area
                  </Label>
                  <Input
                    type="textarea"
                    onChange={this.SetUpdateinputs}
                    name="About"
                    id="About"
                    className="mr-sm-2 col-md-offset-2"
                  />
                </FormGroup>
              </div>
              <div className="SpaceAndMargin">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 row">
                  <Label for="Img" className="mr-sm-2 col-md-offset-2">
                    File
                  </Label>
                  <Input
                    type="file"
                    onChange={this.SetUpdateinputs}
                    name="file"
                    id="file"
                    className="mr-sm-2"
                  />
                </FormGroup>
              </div>
              <div className="SpaceAndMargin">
                <Button
                  onClick={this.setRegistrationDetails}
                  className="btn-danger"
                >
                  Update
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateForm;
