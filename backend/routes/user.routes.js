import express from "express"
import protectRoute from "../middleware/protectRoute.js";
import {getUsersForSide} from "../controllers/user.controller.js"

const router=  express.Router();

router.get("/",protectRoute,getUsersForSide);

export default router