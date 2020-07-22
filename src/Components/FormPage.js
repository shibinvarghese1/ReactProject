import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Login.css";
import "./MainPage";
import MainPage from "./MainPage";
import ReactDOM from "react-dom";

class FormPage extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      LogEmail: "",
      LogPassword: "",
      FirstName: "none",
      Surname: "none",
      Gender: "none",
      Regemail: "none",
      Regpassword: "none",
      Age: 0,
      Mobno: 0,
      About: "none",
      file: null,
      postdata: [],
      setLoginState: false,
      redirect: false,
    };
  }

  SetReginputs = (e) => {
    //console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  SetLoginputs = (e) => {
    //console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    //this.setState({ setLoginState: e.target.value });
  };
  setLoginDetails = (e) => {
    this._isMounted = true;
    e.preventDefault();
    var data = {
      LogEmail: this.state.LogEmail,
      LogPassword: this.state.LogPassword,
    };

    axios.post("http://localhost/api/api.php", data).then((response) => {
      this.state.setLoginState = response.data["StateSet"];
      this.setState({ postdata: response.data });
      //console.log(this.state.postdata.FirstName);
      if (this.state.LogEmail != "" && this.state.LogPassword != "") {
        ReactDOM.render(
          <MainPage LogEmail={this.state.LogEmail} />,
          document.getElementById("root")
        );
      }

      // }
    });

    //console.log(this.state.postdata);
    //if (this.state.postdata != true) {

    //}

    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path={"/"} render={(props) => <MainPage />} />
    //   </Switch>
    // </BrowserRouter>;
  };

  componentWillUnmount() {
    this._isMounted = false;
  }
  setRegistrationDetails = (e) => {
    e.preventDefault();
    // console.log(e.target.name);

    var dat = {
      FirstName: this.state.FirstName,
      Surname: this.state.Surname,
      Gender: this.state.Gender.toLocaleLowerCase(),
      Regemail: this.state.Regemail,
      Regpassword: this.state.Regpassword,
      Age: this.state.Age,
      Mobno: this.state.Mobno,
      About: this.state.About,
      file: this.state.file,
    };
    if (dat.Regemail != "none") {
      axios.post("http://localhost/api/api.php", dat).then((response) => {
        alert("Registration Successful");
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container h-100">
          <div className="CentreText">
            <label className="TitleText">Find Your Partner..</label>
          </div>
          <div className="RegisterText">
            <label className="Textbold">Login</label>
          </div>
          <Form
            inline
            className="form-group row h-100 justify-content-center align-items-center"
          >
            <div>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">
                  Email
                </Label>
                <Input
                  type="email"
                  onChange={this.SetLoginputs}
                  name="LogEmail"
                  id="LogEmail"
                  placeholder="something@idk.cool"
                />
              </FormGroup>
            </div>
            <div>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">
                  Password
                </Label>
                <Input
                  type="password"
                  onChange={this.SetLoginputs}
                  name="LogPassword"
                  id="LogPassword"
                  placeholder="don't tell!"
                />
              </FormGroup>
            </div>

            <Button onClick={this.setLoginDetails} className="btn-warning">
              Login
            </Button>
          </Form>
        </div>

        <div>
          <div className="container h-100">
            <div className="RegisterText">
              <label className="Textbold">Register</label>
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
                      onChange={this.SetReginputs}
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
                      onChange={this.SetReginputs}
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
                      onChange={this.SetReginputs}
                      name="Gender"
                      id="Gender"
                      placeholder="Gender"
                      className="mr-sm-2"
                    />
                  </FormGroup>
                </div>
                <div className="SpaceAndMargin">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0 row">
                    <Label for="exampleEmail" className="mr-sm-2">
                      Email
                    </Label>
                    <Input
                      type="email"
                      onChange={this.SetReginputs}
                      name="Regemail"
                      id="Regemail"
                      placeholder="Enter Your Email Addr"
                      className="mr-sm-2 col-md-offset-2"
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
                      onChange={this.SetReginputs}
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
                      onChange={this.SetReginputs}
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
                      onChange={this.SetReginputs}
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
                      onChange={this.SetReginputs}
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
                      onChange={this.SetReginputs}
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
                    Register
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPage;
