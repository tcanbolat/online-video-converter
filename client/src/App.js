import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import { Container } from "@material-ui/core";
import VideoUpload from "./components/VideoUpload";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      button: false,
      uploadedfile: ""
    };
  }

  render() {
    return (
      <div className="App">
        <AppBar />
        <Container align="center" maxWidth="lg">
          <h2>hello it is, {this.state.date}</h2>
          <VideoUpload button={this.state.button} uploadedfile={this.state.uploadedfile}/>
        </Container>
      </div>
    );
  }
}

// function App() {

// }

export default App;
