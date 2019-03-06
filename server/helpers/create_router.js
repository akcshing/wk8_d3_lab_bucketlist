const express = require("express");

const createRouter = function () {
  const router = express.Router();

    router.get('/', (req, res) => {
      res.sendFile("index.html");
    });





  return router;
};


module.exports = createRouter;
