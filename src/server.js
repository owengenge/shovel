import express from "express";
import cors from "cors";
import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();
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
        res.json(sessions.map(s => ({
            ...s,
            sessionId: s.id,
            players: JSON.parse(s.players)
        })));
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch sessions" });
    }
});

// Post a new session
app.post("/sessions", async (req, res) => {
    try {
        const { sessionId, players, ...rest } = req.body;
        const newSession = await prisma.session.create({
            data: {
                id: sessionId,
                ...rest,
                date: new Date(rest.date),
                players: JSON.stringify(players)
            }
        });
        res.json({ ...newSession, sessionId: newSession.id, players: JSON.parse(newSession.players) });
    } catch (error) {
        res.status(500).json({ error: "Failed to create session" });
    }
});

// Delete session by id along with all actions tied to that session
app.delete("/sessions/:id", async (req, res) => {
    try {
        await prisma.action.deleteMany({ where: { sessionId: req.params.id } });
        await prisma.session.delete({ where: { id: req.params.id } });
        res.json({ message: "Session deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete session" });
    }
});

// Get all actions
app.get("/actions", async (req, res) => {
    try {
        const actions = await prisma.action.findMany();
        res.json(actions.map(a => ({
            ...a,
            actionId: a.id,
            player: JSON.parse(a.player)
        })));
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch actions" });
    }
});

// Post a new action
app.post("/actions", async (req, res) => {
    try {
        const { actionId, player, ...rest } = req.body;
        const newAction = await prisma.action.create({
            data: {
                id: actionId,
                ...rest,
                player: JSON.stringify(player)
            }
        });
        res.json({ ...newAction, actionId: newAction.id, player: JSON.parse(newAction.player) });
    } catch (error) {
        res.status(500).json({ error: "Failed to create action" });
    }
});

// Delete action by id
app.delete("/actions/:id", async (req, res) => {
    try {
        await prisma.action.delete({ where: { id: req.params.id } });
        res.json({ message: "Action deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete action" });
    }
});
