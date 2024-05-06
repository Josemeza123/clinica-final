import { pool } from "../db.js";

export const getProductos = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM productos ORDER BY stock asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProducto = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM productos WHERE id=?", [
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
