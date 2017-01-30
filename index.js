var express = require("express"),
    path = require("path"),
    app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, function() {
  console.log("Listening on http://localhost:3000");
});
