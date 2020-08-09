const apiRouter = require("express").Router();

apiRouter.use("/battles", require("./Battles"));

module.exports = apiRouter;

