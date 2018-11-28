import express from "express";

import teamRoutes from "./app/api/team/route";
import userRoutes from "./app/api/user/route";
const router = express.Router();

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

// mount sample routes at /sample
router.use("/teams", teamRoutes);

router.use("/user", userRoutes);

export default router;
