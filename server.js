const express = require("express");
const path = require("path");
// const bodyParser = require('body-parser');
const app = express();
const expressFileUpload = require('express-fileupload');
const routes = require("./routes/convert");
const PORT = process.env.PORT || 8080;

app.use(
    expressFileUpload({
      useTempFiles: true,
      tempFileDir: "./tmp/",
    })
  );

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
