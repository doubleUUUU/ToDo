const express = require("express");
const db = require("../models/index.js");
const bcrypt = require("bcrypt");
const jwt = require("jwt-simple");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.post(
  "/login",
  body("login").isLength({ min: 3 }),
  body("password").isLength({ min: 3 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send("Length of password and login must be more than 3");
    }
    try {
      if (!req.body.login || !req.body.password) {
        return res.status(422).send("Invalid fields in request");
      }

      const user = await db.User.findOne({
        where: {
          login: req.body.login,
        },
      });
      if (!user) return res.status(404).send("User not found");

      const hash = user.dataValues.password;

      bcrypt.compare(req.body.password, hash, (err, valid) => {
        if (err) return res.status(400).send(err.message);

        if (!valid) return res.status(401).send("Incorrect password");
        const token = jwt.encode(
          { login: req.body.login },
          process.env.SECRET_KEY
        );
        res.send(token);
      });
    } catch (e) {
      res.status(500).send("Something went wrong");
    }
  }
);

module.exports = router;
