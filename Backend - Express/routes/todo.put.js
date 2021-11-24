const express = require("express");
const db = require("../models/index.js");
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.put(
  "/api/todo/:uuid",
  body("name").custom((value) => {
    if (!value.trim().length || value.length < 3) {
      return false;
    }
    return true;
  }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .send(
          "The task length must be more than 2 characters and not contain only spaces"
        );
    }
    try {
      const editedTodo = await db.ToDo.update(
        {
          name: req.body.name,
          done: req.body.done,
        },
        {
          where: {
            uuid: req.params.uuid,
            owner: res.locals.login,
          },
        }
      );
      res.send(editedTodo);
    } catch (e) {
      res.status(500).send("Something went wrong");
    }
  }
);

module.exports = router;
