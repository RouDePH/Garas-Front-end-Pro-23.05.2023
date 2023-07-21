
const express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const users = require('./users.json');

// const router = require('express').Router();
// const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = 5500;

app.use(express.json());

// router.use('/api-docs', swaggerUi.serve);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "RouDe's REST API",
          url: "https://logrocket.com",
          email: "sergeygaras2002@gmail.com",
        },
      },
      servers: [
        {
          url: "https://56f6-91-225-162-98.ngrok-free.app/",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

app.get("/", (req, res) => {
    res.send("<h2>It's Working!</h2>");
});


app.get("/users", (req, res) => {
    console.log(req.url);
    res.send(users);
});

app.post("/user", (req, res) => {   

    console.log(req);
    res.send(req.body);
});

app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});


