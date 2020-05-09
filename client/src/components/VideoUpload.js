import React from "react";
import { TextField, Grid } from "@material-ui/core";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";

export default function VideoUpload(props) {
  return (
    <div>
      <Grid>
        <input type="file" name="file" id="file" className="inputfile" onChange={props.uploadHandler}/>
        <label htmlFor="file">
          <PersonalVideoIcon /> Upload a Video
        </label>
      </Grid>
      <Grid>
        {/* <TextField disabled variant="outlined" value={props.uploadedfile.name} /> */}
      </Grid>
    </div>
  );
}
