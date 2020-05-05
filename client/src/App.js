import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import { Container } from "@material-ui/core";
import VideoUpload from "./components/VideoUpload";
import ConvertOptions from "./components/ConvertOptions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      button: false,
      uploadedfile: "",
      formatvalue: "",
    };
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      formatvalue: value,
    })
    console.log(value);
  };


  render() {
    return (
      <div className="App">
        <AppBar />
        <Container align="center" maxWidth="lg">
          <h2>hello it is, {this.state.date}</h2>
          <VideoUpload
            button={this.state.button}
            uploadedfile={this.state.uploadedfile}
          />
          <ConvertOptions 
          formatvalue={this.state.formatvalue}
          handleChange={this.handleChange}
          />
        </Container>
      </div>
    );
  }
}

export default App;
