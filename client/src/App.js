import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import { Container, Divider, Grid } from "@material-ui/core";
import VideoUpload from "./components/VideoUpload";
import ConvertOptions from "./components/ConvertOptions";
import ConvertButton from "./components/ConvertButton";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: false,
      uploadedfile: "",
      formatvalue: "",
    };
  }

  uploadHandler = (event) => {
    let file = event.target.value; 
    file = file.replace(/.*[\/\\]/, ''); 
    this.setState({ uploadedfile: file, button: true });
  };

  changeHandler = (event) => {
    const value = event.target.value;
    this.setState({
      formatvalue: value,
    });
  };

  render() {
    const style = {
      divider: {
        margin: 20,
        padding: 5,
      },
    };
    return (
      <div className="App">
        <AppBar />
        <Container align="center">
          <Grid item xs={6}>
            <Divider style={style.divider} variant="middle" />
          </Grid>
        </Container>
        <Container align="center" maxWidth="lg">
          <VideoUpload
            button={this.state.button}
            uploadedfile={this.state.uploadedfile}
            uploadHandler={this.uploadHandler}
          />
          <Grid item xs={6}>
            <Divider style={style.divider} variant="middle" />
          </Grid>
          <ConvertOptions
            formatvalue={this.state.formatvalue}
            changeHandler={this.changeHandler}
          />
          <Grid item xs={6}>
            <Divider style={style.divider} variant="middle" />
          </Grid>
          <ConvertButton
            formatvalue={this.state.formatvalue}
            uploadbtn={this.state.button}
            convertbutton={this.state.convertbutton}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
