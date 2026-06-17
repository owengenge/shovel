import { Router } from "express";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const router = Router();
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// GET /sessions — returns all sessions with players parsed from JSON
router.get("/", async (req, res) => {
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

// POST /sessions — creates a new session, serializing players to JSON
router.post("/", async (req, res) => {
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

// DELETE /sessions/:id — deletes a session and all its associated actions
router.delete("/:id", async (req, res) => {
    try {
        await prisma.action.deleteMany({ where: { sessionId: req.params.id } });
        await prisma.session.delete({ where: { id: req.params.id } });
        res.json({ message: "Session deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete session" });
    }
});

export default router;
