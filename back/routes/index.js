import express from "express";
import people from "./people";
import candidates from "./candidates";

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ status: 'ok' });
});

router.use('/people', people);
router.use('/candidates', candidates);

export default router;
