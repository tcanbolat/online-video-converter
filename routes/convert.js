const router = require("express").Router();

router.post("/convert", (req, res) => {
    console.log(req.body);
    console.log(req.files.file);
    const file = req.files.file;
    file.mv("../tmp/" + file.name,  (err) => {
        // if (err) return res.json(err);
        console.log("File Uploaded successfully");
      });
        res.json();
});

module.exports = router;
