import { pool } from "../db.js";

export const getPacientes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM productos ORDER BY stock asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
