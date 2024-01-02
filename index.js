import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) =>{ 
    res.sendFile(__dirname + "/public/index.html");
});
var isvalid = false;
const checker =(req,res,next)=>{
if(req.body["password"]=='Hemanth@123'){
isvalid = true;
}
next();
};
app.use(checker);
app.post('/check', (req, res) =>{
if(isvalid){
res.sendFile(__dirname + "/public/secret.html");
}
else{
res.sendFile(__dirname + "public/index.html");
}});
app.listen(port);


