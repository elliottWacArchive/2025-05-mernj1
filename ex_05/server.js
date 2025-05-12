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
    res.send("Hello unknown, i dont know your age");
});

app.get("/name/:name", (req, res) => {
    const name = req.params.name;
    const age = req.query.age;

    if (age) {
        message = `Hello ${name}, you have ${age} yo`;
    } else {
        message = `Hello ${name}, i dont know your age`;
    }
    res.send(message);
});

app.listen(config.port, config.hostname, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});
