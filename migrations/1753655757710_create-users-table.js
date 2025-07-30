/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
module.exports.shorthand = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
module.exports.up = (pgm) => {
  pgm.createTable("users", {
    id: "id",
    username: { type: "text", notNull: true },
    email: { type: "text", notNull: true, unique: true },
    password_hash: { type: "text", notNull: true },
    created_at: { type: "timestamp", default: pgm.func("current_timestamp") },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
module.exports.down = (pgm) => {
  pgm.dropTable("users");
};
