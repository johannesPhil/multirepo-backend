const pool = require("./config/db");
(async () => {
  try {
    const test = await pool.query("SELECT NOW()");
    console.log("✅ Database connection successful:", test.rows[0].now);
    process.exit(0);
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
})();
