const express = require("express");
const recursive = require("recursive-readdir-sync");
const db = require("./models/index.js");
const dotenv = require("dotenv");
const jwt = require("jwt-simple");

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());



  app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, x-auth, Content-Length, X-Requested-With');
    res.send(200);
  })
  app.use('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'x-auth, content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
  
  next();
});
app.use("/api", async (req, res, next) => {
  try {
   
    if (!req.headers["x-auth"]) return res.sendStatus(401);

    const login = jwt.decode(
      req.headers["x-auth"],
      process.env.SECRET_KEY
    ).login;

    const user = await db.User.findAll({
      where: { login: login },
    });
  
    if (user.length === 0) {
 
      return res.sendStatus(401);
    }
    res.locals.login = login
    next();
  } catch (e) {
    
    res.sendStatus(401);
  }
});

recursive("./routes").forEach(async (file) => {
  const route = await import(`./${file}`);
  app.use("/", route.default);
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
