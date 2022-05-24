import express, { Application } from "express"
import cors from "cors"

const app: Application = express()
const PORT = process.env.PORT ||3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
const TaxRoute = require("./routes/tax.route")

app.use("", TaxRoute)

app.listen(PORT ,() =>{
    console.log(`App running on port ${PORT}`)
})
