import express, { Request, Response } from "express"

// Create Express server
const app = express();

app.set("port", 3000);
app.set("view engine", "ejs")

// controller
import * as HomeController from "./controllers/home"

app.get('/', HomeController.index)

// listen
app.listen(3000, () => {
  console.log('app is running at port: 3000')
})