import express from "express";
import type { Express } from "express";
import agentRouter from "./routes/agent.routes";

const app: Express = express();

app.use(express.json());
app.use("/", agentRouter);

export default app;
