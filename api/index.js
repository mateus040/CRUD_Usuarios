import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors()) // Evitando conflitos localmente

app.use("/", userRoutes) // Pega a rota userRoutes

app.listen(8800)