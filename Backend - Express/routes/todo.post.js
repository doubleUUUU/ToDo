const express = require("express");
const { uuid } = require("uuid");
const db = require("../models/index.js");
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.post(
  "/api/todo",
  body("name").isLength({ min: 3 }).custom((value) => {
    if (!value.trim().length) {
      return false
    }
    return true
  }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send("The task length must be more than 2 characters and not contain only spaces");
    }
    try {
      const newTodo = db.ToDo.build({
        name: req.body.name,
        owner: res.locals.login,
      });
      await newTodo.save();

      res.send(newTodo);
    } catch (e) {
      res.status(500).send("Something went wrong");
    }
  }
);

module.exports = router;
