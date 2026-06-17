import { Router } from "express";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const router = Router();
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// GET /actions — returns all actions with player parsed from JSON
router.get("/", async (req, res) => {
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

// POST /actions — creates a new action, serializing player to JSON
router.post("/", async (req, res) => {
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

// DELETE /actions/:id — deletes a single action by ID
router.delete("/:id", async (req, res) => {
    try {
        await prisma.action.delete({ where: { id: req.params.id } });
        res.json({ message: "Action deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete action" });
    }
});

export default router;
