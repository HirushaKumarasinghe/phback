const pg = require("pg");

const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "34.93.57.31",
    database: "postgres",
    password: "erdt",
    port: 5432
});

module.exports = pool;
