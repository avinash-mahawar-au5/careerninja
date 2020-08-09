const express = require("express");
const Battle = require("../models/Battles");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    Battle.find({}).then((result) => {
      res.status(200).json({ code: 200, response: result });
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/count", async (req, res) => {
  try {
    Battle.count().then((result) => {
      res.status(200).json({ code: 200, response: result });
    });
  } catch (error) {
    console.log(error);
  }
});
router.post("/search", async (req, res) => {
  try {
    const query1 = req.query;
    Battle.find({})
      .where(query1)
      .then((result) => {
        res.status(200).json({ code: 200, response: result });
      });
  } catch (error) {
    console.log(error);
  }
});
router.get("/list", async (req, res) => {
  try {
    const list = [];
    Battle.find({})
      .select("location")
      .exec()
      .then((result) => {
        result.forEach((e) => list.push(e.location));
        res.status(200).json({ code: 200, response: list });
      });
  } catch (error) {
    console.log(error);
  }
});
router.get("/filter", async (req, res) => {
  try {
    Battle.find({})
      .select("location")
      .exec()
      .then((result) => {
        res.status(200).json({ code: 200, response: result });
      });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
