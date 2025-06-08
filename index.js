const express = require("express");
const cors = require("cors");
const contatoRoutes = require("./Routers/contato");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: ['https://portifolio-nine-phi-92.vercel.app', 'http://localhost:5173/']
}));
app.use(express.json());
app.use("/api/contato", contatoRoutes);


try {
  app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
  });
} catch (err) {
  console.error("Erro ao iniciar servidor:", err);
}
