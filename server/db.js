const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "0602",
    host: "localhost",
    post: 5432,
    database: "befriends"
});

module.exports = pool;