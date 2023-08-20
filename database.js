const Pool = require('pg').Pool

const POSTGRES_HOST = "localhost";
const POSTGRES_DB = "riddles";
const POSTGRES_PASSWORD = "test";
const POSTGRES_PORT = 5432;
const POSTGRES_USER = "test";


const Client = new Pool ({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: 5432
})

module.exports = Client ;