const express = require("express");
const app = express();
var myMERN_module = require("./myMERN_module.js");

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

app.get("/file/:name", (req, res) => {
    const name = req.params.name;
    myMERN_module.read(name);
    res.send("read");
});

app.post("/file/:name", (req, res) => {
    const name = req.params.name;
    myMERN_module.create(name);
    res.send("create");
});

app.put("/file/:name/:content", (req, res) => {
    const name = req.params.name;
    const content = req.params.content;
    myMERN_module.update(name, content);
    res.send("update");
});

app.delete("/file/:name", (req, res) => {
    const name = req.params.name;
    myMERN_module.delete(name);
    res.send("delete");
});

app.listen(config.port, config.hostname, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});
