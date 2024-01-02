import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
import express from "express";

const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',(req, res) => {
  res.sendFile(__dirname + "/index.html");
});
var name="";
const merabody=(req,res,next) => {
  console.log(req.body);
  name = req.body.street;
  next();
};
app.use(merabody);
app.post('/submit',(req,res) => {
res.send(`<p>${name}</p>`)
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
