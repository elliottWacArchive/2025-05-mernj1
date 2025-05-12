const fs = require("fs");

function create(name) {
    fs.writeFile(name, "", (error) => {
        if (error) {
            console.log(`Create "${name}" : KO`);
        } else {
            console.log(`Create "${name}" : OK`);
        }
    });
}

function read(name) {
    fs.readFile(name, "utf8", (error, data) => {
        if (error) {
            console.log(`Read "${name}" : KO`);
        } else {
            console.log(data);
        }
    });
}

function update(name, content) {
    fs.writeFile(name, content, (error) => {
        if (error) {
            console.log(`Update "${name}" : KO`);
        } else {
            console.log(`Update "${name}" : OK`);
        }
    });
}

function deleteFile(name) {
    fs.unlink(name, (error) => {
        if (error) {
            console.log(`Delete "${name}" : KO`);
        } else {
            console.log(`Delete "${name}" : OK`);
        }
    });
}

module.exports = {
    create,
    read,
    update,
    delete: deleteFile,
};
