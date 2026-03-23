const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()

app.use(cors())
app.use(express.json())

/* ✅ PostgreSQL connection */
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "codenex",
    password: "karthi1432",
    port: 5432
})

/* ✅ Test route */
app.get("/", (req, res) => {
    res.send("Backend Running 🚀")
})

/* ✅ Get contest state */
app.get("/contest/state", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM contest_state ORDER BY id DESC LIMIT 1"
        )

        if (result.rows.length === 0) {
            return res.json({
                active_round: 0,
                is_active: false
            })
        }

        res.json(result.rows[0])
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server error" })
    }
})

/* ✅ Start round */
app.post("/contest/start-round", async (req, res) => {
    try {
        const { round } = req.body

        await pool.query(
            "INSERT INTO contest_state(active_round,is_active) VALUES($1,$2)",
            [round, true]
        )

        res.json({ success: true })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server error" })
    }
})

/* ✅ End round */
app.post("/contest/end-round", async (req, res) => {
    try {
        await pool.query(
            "INSERT INTO contest_state(active_round,is_active) VALUES($1,$2)",
            [0, false]
        )

        res.json({ success: true })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server error" })
    }
})

app.listen(5000, () => {
    console.log("✅ Server running on http://localhost:5000")
})