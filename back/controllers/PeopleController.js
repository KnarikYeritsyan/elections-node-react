import People from "../models/People";
import HttpError from "http-errors";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

class PeopleController {
  static signIn = async (req, res, next) => {
    try {
      const { passport } = req.body;
      const person = await People.getByPassport(passport);
      if (!person) {
        throw HttpError(404);
      }
      if (person.voted) {
        throw HttpError(403, 'You are already voted');
      }

      const token = jwt.sign({ personId: person.id }, JWT_SECRET, {
        // expiresIn: 60 * 15
      })

      res.json({
        status: 'ok',
        person,
        token,
      })

    } catch (e) {
      next(e);
    }
  }
}

export default PeopleController;
