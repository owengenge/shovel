import express from "express";
import cors from "cors";
import sessionsRouter from "./routes/sessions.js";
import actionsRouter from "./routes/actions.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/sessions", sessionsRouter);
app.use("/actions", actionsRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
