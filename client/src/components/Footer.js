import React from "react";
import {} from "@material-ui/core";

export default function Footer() {
  return (
    <div align="center" className="footer">
      <p>
        <a
          href="https://github.com/tcanbolat/online-video-converter"
          target="_"
        >
          Source Code
        </a>{" "}
        / @tcanbolat
      </p>
      <div>{new Date().toLocaleString()}</div>
    </div>
  );
}
