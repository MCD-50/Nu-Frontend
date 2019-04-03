const express = require("express");
const serverStatic = require("serve-static");
const port = process.env.PORT || 10002;
const app = express();

app.use(serverStatic(__dirname));
app.listen(port);
app.get("*", (req, res) => res.sendFile(require("path").join(__dirname, "./index.html")));

console.log("Frontend listening on...", port);

