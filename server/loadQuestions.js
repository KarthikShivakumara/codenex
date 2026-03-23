const { Pool } = require("pg");
const fs = require("fs");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "codenex",
  password: "karthi1432",
  port: 5432,
});

async function load() {

  const raw = fs.readFileSync("./data/questions.json");
  const data = JSON.parse(raw);

  for (let r = 1; r <= 4; r++) {

    const roundKey = "round" + r;
    const arr = data[roundKey];

    for (let i = 0; i < arr.length; i++) {

      await pool.query(
        "INSERT INTO questions(round, question_index, data) VALUES($1,$2,$3)",
        [r, i, arr[i]]
      );

    }
  }

  console.log("✅ Questions inserted successfully");
  process.exit();
}

load();