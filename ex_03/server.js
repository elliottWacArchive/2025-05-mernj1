const express = require("express");
const path = require("path");
const app = express();

const config = {
    port: 4242,
    hostname: "localhost",
    env: "development",
};

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(config.port, config.hostname, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});
