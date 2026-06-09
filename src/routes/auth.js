import { Router } from "express";

const router = Router();

// POST /auth/register — creates a new user account (not yet implemented)
router.post("/register", async (req, res) => {
    res.status(501).json({ message: "Not implemented yet" });
});

// POST /auth/login — authenticates a user and starts a session (not yet implemented)
router.post("/login", async (req, res) => {
    res.status(501).json({ message: "Not implemented yet" });
});

// POST /auth/logout — ends the current user session (not yet implemented)
router.post("/logout", async (req, res) => {
    res.status(501).json({ message: "Not implemented yet" });
});

export default router;
