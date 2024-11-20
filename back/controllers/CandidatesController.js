import Candidates from "../models/Candidates";
import People from "../models/People";
import HttpError from "http-errors";


class CandidatesController {
  static list = async (req, res, next) => {
    try {

      const candidates = await Candidates.getAll();

      res.json({
        status: 'ok',
        candidates
      })

    } catch (e) {
      next(e);
    }
  }
  static vote = async (req, res, next) => {
    try {
      const { personId } = req;
      const { id } = req.body;
      // console.log(People.isVoted(id))
      if (await People.isVoted(personId)) {
        throw HttpError(403, 'You are already voted');
      }

      await People.setVoted(personId);
      await Candidates.addVote(id);

      // await Promise.all([
      //   People.setVoted(personId),
      //   Candidates.addVote(id)
      // ]);


      res.json({
        status: 'ok',
      })

    } catch (e) {
      next(e);
    }
  }
}

export default CandidatesController;
