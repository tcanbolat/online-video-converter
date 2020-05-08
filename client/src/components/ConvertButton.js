import React from "react";
import { Button } from "@material-ui/core";

export default function ConvertButton(props) {
  return (
    <div>
      <Button
        style={{ width: "20%", margin: 20 }}
        disabled={props.convertbutton}
        variant="contained"
        color="primary"
      >
        Convert Video
      </Button>
    </div>
  );
}
