import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";

export default function VideoUpload(props) {
  return (
    <div>
      <Grid>
        <Button
          style={{ width: "50%", margin: 20 }}
          disabled={props.button}
          variant="contained"
          color="primary"
          startIcon={<PersonalVideoIcon />}
        >
          Upload a Video
        </Button>
      </Grid>
      <Grid>
        <TextField
          disabled
          variant="outlined"
          defaultValue={props.uploadedfile}
        />
      </Grid>
    </div>
  );
}
