import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Login.css";
import ReactDOM from "react-dom";
import UpdateForm from "./UpdateForm";
class MainPage extends React.Component {
  //   componentWillMount() {
  //     console.warn("Component hidden");
  //   }
  constructor(props) {
    super(props);
    this.state = {
      getData: [],
      Fname: props,
    };
    // console.log(this.props.FirstName);
  }

  componentDidMount() {
    axios.get(`http://localhost/api/api.php`).then((response) => {
      this.setState({ getData: response.data });
    });
  }
  DeleteRecord = (e) => {
    e.preventDefault();
    var dat = {
      emailid: this.props.LogEmail,
    };
    axios.post("http://localhost/api/api.php", dat).then((response) => {
      alert("Record Deleted succesfully");
    });
  };
  UpdateFormMethod = (e) => {
    ReactDOM.render(
      <UpdateForm LogEmail={this.props.LogEmail} />,
      document.getElementById("root")
    );
  };

  render() {
    console.log(this.props.LogEmail);
    return (
      <div>
        <div className="header container">
          <div className="actionLink">
            <div className="TitleAlignment">
              <h1>Still have time to Reconsider</h1>
            </div>
            <div className="ButtAlignment">
              <Button
                onClick={this.DeleteRecord}
                className="MarginButt btn-danger"
              >
                Delete
              </Button>
              <Button
                onClick={this.UpdateFormMethod}
                className="MarginButt btn-warning"
              >
                Update
              </Button>
            </div>
          </div>
        </div>
        <div>
          <table>
            <tbody>
              {this.state.getData.map((itm, k) => (
                <div className="TableFormat">
                  {/* <tr>
                    <td>{itm.img}</td>
                  </tr> */}

                  <tr>
                    <label>FirstName:- </label>
                    <td>
                      <h5>{itm.FirstName} </h5>
                    </td>
                  </tr>

                  <tr>
                    <label>Surname:- </label>
                    <td>{itm.Surname}</td>
                  </tr>
                  <tr>
                    <label>Age:- </label>
                    <td>{itm.Age}</td>
                  </tr>

                  <tr>
                    <label>About:- </label>
                    <td>{itm.about}</td>
                  </tr>
                  <tr>
                    <label>Email:- </label>
                    <td>{itm.email}</td>
                  </tr>
                  <tr>
                    <label>Mobile Number:- </label>
                    <td>{itm.mobNo}</td>
                  </tr>
                  <tr>
                    <label>Gender:- </label>
                    <td>{itm.Gender}</td>
                  </tr>
                </div>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default MainPage;
