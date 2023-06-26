var express = require("express");
var router = express.Router();
var baseController = require("../models/players");

router.post("/add-player", async (req, res) => {
  data = req.body;
  baseController.create(data, (err, playerResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: playerResponse,
    });
  });
});

router.post("/update-player", (req, res) => {
  let data = req.body;
  baseController.findOneAndUpdate(
    { _id: req.body._id },
    data,
    (err, updatedPlayer) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedPlayer,
      });
    }
  );
});

router.post("/find-player", (req, res) => {
  baseController.find({ _id: req.body._id }, (err, playerDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: playerDetails,
    });
  });
});

router.post("/delete-player", (req, res) => {
  baseController.findOneAndRemove(
    { _id: req.body._id },
    (err, deletedPlayer) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedPlayer,
      });
    }
  );
});

router.get("/find-all-players", (req, res) => {
  baseController.find({}, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

router.get("/get-indian-players", (req, res) => {
  baseController.find({ Country: "India" }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

router.get("/get-non-indian-players", (req, res) => {
  baseController.find(
    { Country: { $ne: "India" } },
    (err, allPlayersDetails) => {
      if (err) {
        return res.send({ response: err });
      }
      res.json({
        response: allPlayersDetails,
      });
    }
  );
});

router.get("/get-grater-than-200-runs-players", (req, res) => {
  baseController.find({ Runs: { $gt: 200 } }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});
router.get("/get-less-than-100-runs-players", (req, res) => {
  baseController.find({ Runs: { $lt: 100 } }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

router.get("/get-grater-than-25-avg-players", (req, res) => {
  baseController.find({ Avg: { $gt: 25 } }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

module.exports = router;
