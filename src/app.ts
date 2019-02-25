import express, { Request, Response } from "express"

// Create Express server
const app = express();

app.set("port", 3000)

app.get('/', (req: Request, res: Response) => {
  res.send('hello')
})

// listen
app.listen(3000, () => {
  console.log('app is running at port: 3000')
})