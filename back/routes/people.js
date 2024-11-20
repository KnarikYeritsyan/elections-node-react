import express from "express";
import PeopleController from "../controllers/PeopleController";

const router = express.Router();

router.post('/sign-in', PeopleController.signIn);

export default router;
