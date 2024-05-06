import express from "express";
import cors from "cors";

import citasRoutes from "./routes/citas.routes.js";
import pacientesRoutes from "./routes/pacientes.routes.js";
import productosRoutes from "./routes/productos.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(citasRoutes);
app.use(pacientesRoutes);
app.use(productosRoutes);

app.listen(9000);
console.log("Escuchando desde el puerto 9000");
