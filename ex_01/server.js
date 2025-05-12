const express = require("express");
const app = express();

const config = {
    port: 4242,
    hostname: "localhost",
    env: "development",
};

app.listen(config.port, config.hostname, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});
