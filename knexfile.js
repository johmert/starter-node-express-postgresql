const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://hejwbcuf:tgH-NJhL3dGCdHdNTwqr9MS9S9VWLgce@kashin.db.elephantsql.com/hejwbcuf",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
