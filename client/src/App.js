import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import { Container, Divider, Grid, TableFooter } from "@material-ui/core";
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
      convertbutton: true,
    };
  }

  uploadHandler = () => {
    this.setState({ uploadedfile: "uploading...", button: true });
  };

  changeHandler = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      formatvalue: value,
    });
    if (this.state.button === true && this.state.formatvalue != "") {
      this.setState({ convertbutton: false });
    }
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
          <ConvertButton convertbutton={this.state.convertbutton} />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
