import express from "express";
import CandidatesController from "../controllers/CandidatesController";
import authorization from "../middlewares/authorization";

const router = express.Router();

router.get('/', authorization, CandidatesController.list);
router.post('/vote', authorization, CandidatesController.vote);

export default router;

// axios.get('http://localhost:4000/candidates', {
//   headers: {
//     Authorization: 'Bearer aw43123nk123n123123213'
//   }
// })
//
//
//const {data} = await axios.post('http://localhost:4000/candidates/vote', { id: 5 }, {
//   headers: {
//     Authorization: 'Bearer aw43123nk123n123123213'
//   }
// })
