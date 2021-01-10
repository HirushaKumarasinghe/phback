const pg = require("pg");

const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "35.200.250.56",
    database: "postgres",
    password: "erdt",
    port: 5432
});

module.exports = pool;
