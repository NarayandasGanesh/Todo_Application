const express  = require("express")
const cors = require("cors");



const { TaskRouter } = require("./routes/routes")
const { connection } = require("./Config/db")
const app = express()
app.use(cors());
const PORT = 8080

app.use(express.json())
app.use("/", TaskRouter)

app.get("/", (req,res) => {
    res.send("Welcome")
})

app.listen(PORT, async() =>{
    try {
        await connection
        console.log("Connected to Database")
    } catch (error) {
        console.log(error) 
    }
    console.log(`Server is Running on ${PORT} Port`)
})