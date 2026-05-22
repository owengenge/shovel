import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/test", (req, res) => {
    res.json({ message: "Server is working" });
});

// Get all sessions
app.get("/sessions", async (req, res) => {
    try {
        const sessions = await prisma.session.findMany();
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch sessions" });
    }
});

// Post a new session to sessions
app.post("/sessions", async (req, res) => {
    try {
        const newSession = await prisma.session.create({ data: req.body });
        res.json(newSession);
    } catch (error) {
        res.status(500).json({ error: "Failed to create session" });
    }
});

// Get all actions
app.get("/actions", async (req, res) => {
    try {
        const actions = await prisma.action.findMany();
        res.json(actions);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch actions" });
    }
});

// Post a new action to actions
app.post("/actions", async (req, res) => {
    try {
        const newAction = await prisma.action.create({ data: req.body });
        res.json(newAction);
    } catch (error) {
        res.status(500).json({ error: "Failed to create action" });
    }
});

// Delete action with :id
app.delete("/actions/:id", async (req, res) => {
    try {
        await prisma.action.delete({ where: { id: req.params.id } });
        res.json({ message: "Action deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete action" });
    }
});




