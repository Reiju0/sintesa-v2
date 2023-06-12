import express from "express";
import Router from "./routes/users.route.js";
import { LogUsers } from "./middleware/logs.js";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middelware
app.use(LogUsers);
//app.method(path, handler);
//use
app.use(Router);

app.listen(port, () => console.log(`server running on ${port} ....`));
