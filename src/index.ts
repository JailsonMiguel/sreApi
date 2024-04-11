import { app } from "./app";
import express from "express";

const port: number = 3330;

app.use(express.json());
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
