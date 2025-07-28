const { use } = require("passport");
const pool = require("../config/db");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

async function createUser(username, email, password) {
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const { rows } = await pool.query(
    `INSERT INTO users (username,email,password_hash) VALUES ($1,$2,$3) RETURNING id, username, email, created_at`,
    [username, email, passwordHash]
  );

  return rows[0];
}

async function findUserByEmail(email) {
  const { rows } = await pool.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);

  return rows[0];
}

async function getAllUsers() {
  const { rows } = await pool.query(`SELECT * FROM users`);
  return ({ id, username, email, created_at } = rows);
}

module.exports = {
  createUser,
  findUserByEmail,
  getAllUsers,
};
