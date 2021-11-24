const express = require("express");
const db = require("../models/index.js");
const bcrypt = require("bcrypt");
const jwt = require("jwt-simple");
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.post(
  "/registration",
  body("login").isLength({ min: 3 }),
  body("password").isLength({ min: 3 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .send("Length of password and login must be more than 3");
    }
    try {
      if (!req.body.login || !req.body.password) {
        res.status(422).send("Invalid fields in request");
        return;
      }
      const newUser = {};
      newUser.login = req.body.login;
      const hash = await bcrypt.hash(req.body.password, 10);
      newUser.password = hash;

      const existingUser = await db.User.findOne({
        where: {
          login: newUser.login,
        },
      });
      console.log(existingUser)
      if (existingUser)
        throw new Error("User with the same name already exists");
      const user = await db.User.create(newUser);
      res.send(user);
      // try {

      // } catch (e) {
      //   res.status(500).send("This user already exists");
      // }
    } catch (e) {
      console.log(">>>>>>>>>>>>>>>>>>>", e);
      res.status(500).send(e.message);
    }
  }
);

module.exports = router;
