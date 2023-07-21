
const express = require("express");
const users = require('./users.json');

const app = express();
const PORT = 5500;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h2>It's Working!</h2>");
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/user/:id", (req, res) => {

    let responseUser = null;

    users.forEach(user => {
        if (req.params.id == user.id) {
            responseUser = user;
        }
    });

    if (responseUser) {
        res.end(JSON.stringify(responseUser));
    } else {
        res.status(404).send({});
    }

});

app.post("/user", (req, res) => {
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});