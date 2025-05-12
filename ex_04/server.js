const express = require("express");
const app = express();

const config = {
    port: 4242,
    hostname: "localhost",
    env: "development",
};

app.get("/", (req, res) => {
    res.send("42");
});

app.get("/name/", (req, res) => {
    res.send("Hello unknown");
});

app.get("/name/:name", (req, res) => {
    const name = req.params.name;

    res.send("Hello " + name);
});

app.listen(config.port, config.hostname, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});
