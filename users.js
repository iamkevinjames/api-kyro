const express = require('express');
const route = express.Router();

const data = {
  firstName: "Vladimir",
  lastName: "Putin",
  emailAddress: "vladmirputin@gmail.com",
};

route.get("/getData", (req, res) => {
  res.send(data);
});

route.post("/postData", (req, res) => {
  data.firstName = req.body.firstName;
  data.lastName = req.body.lastName;
  data.emailAddress = req.body.emailAddress;
  console.log(req.body);
  res.send("User Data updated successfully!");
});

route.use('/api/user',(req,res,next) => {
    console.log(req.url, req.method)
    next();
})

module.exports = route;
