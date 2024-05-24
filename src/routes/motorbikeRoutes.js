import express from "express";
import { validateMotorbikeName } from "../middleware/validators.js";
import { getMotorbikeData } from "../controllers/motorbikeController.js";

// We will create a router object
const router = express.Router();

// We will create a route for the motorbike data based on the manufacturer name
router.get("/:manufacturer", validateMotorbikeName, getMotorbikeData)

// We will export the router
export default router;
