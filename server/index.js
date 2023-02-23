const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a user

app.post("/users", async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (email, password) VALUES($1, $2) RETURNING *", 
        [email, password]
        );
        res.json(newUser.rows[0]);

    }
    catch (err) {
        console.error(err.message);
    }
});

//get all users

app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    }
    catch (err) {
        console.error(err.message);
    }
});

//get a user
app.get("/users/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const user = await pool.query("SELECT * FROM users WHERE u_id = $1", [id]);
        res.json(user.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
    });