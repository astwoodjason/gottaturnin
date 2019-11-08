import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Axios from "axios";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      content: [],
      message: ""
    };
  }

  handleChange = event => {
    console.log(event);

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("buttonwasclicked");
    // console.log("disabled", disabled);
    this.setState({
      disabled: true
    });

    Axios.post("https://gottaturnin-backend.herokuapp.com/reviews", this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch(err => {
        console.log("sending error", err);
      });
  };

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Title</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.content}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              className="button"
              varient="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Email Not Sent</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
