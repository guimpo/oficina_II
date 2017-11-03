import express from "express"
const PORT = 3000
const app = express()

app.get("/", (req, res) => res.json({ status: "Rodando" }))
app.listen(PORT, () => console.log(`backend - Port ${PORT}`))