const express = require("express");
const path = require("path");
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

// Add routes, both API and view
app.use(routes);

// Server static assets if we're in production
if (process.env.NODE_ENV === "production") {
	// Exprees will serve up production assets
	app.use(express.static(path.join(__dirname, "client/build")));

	// Express serve up index.html file if it doesn't recognize route
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
