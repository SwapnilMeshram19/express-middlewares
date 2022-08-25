const { json, application } = require("express");
const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(
  morgan(
    "Method-:method URL-:url HTTP_Version-:http-version Status-:status Content_Length-:res[content-length] User_Agent-:user-agent Date-:date  response_time-:response-time"
  )
);


app.get("/", (req, res) => {
 
  return res.status(404).send("morgan application");
});
app.listen(8088, () => {
  console.log("server started");
});
