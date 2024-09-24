import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import userRouter from "./routes/user/index.js"
import adminRouter from "./routes/admin/index.js"

// CONFIG
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false }))
dotenv.config()

// ROUTES
app.use('/user', userRouter)
app.use('/admin', adminRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
  console.log(`Listening on PORT ${PORT}`)
})
export default app
