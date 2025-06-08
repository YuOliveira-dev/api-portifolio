const express = require("express");
const cors = require("cors");
const contatoRoutes = require("./Routers/contato");
require("dotenv").config();

const app = express();

// Lista de origens permitidas
const allowedOrigins = [
  "http://localhost:5173",
  "https://portifolio-nine-phi-92.vercel.app"
];

// Configuração personalizada do CORS
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // Pré-vetado
  }

  next();
});

app.use(express.json());
app.use("/api/contato", contatoRoutes);

try {
  app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
  });
} catch (err) {
  console.error("Erro ao iniciar servidor:", err);
}