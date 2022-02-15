const env = process.env.NOD_ENV || "development";
const config = require("../../knexfile")[env];
const knex = require("knex")(config);

module.exports = knex;