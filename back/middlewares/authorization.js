import jwt from "jsonwebtoken";
import HttpError from "http-errors";

const { JWT_SECRET } = process.env;

// const EXCLUDE = [
//   'POST:/people/sign-in'
// ]

const authorization = async (req, res, next) => {
  try {
    const { authorization = '' } = req.headers;

    let personId;
    try {
      const d = jwt.verify(authorization.replace('Bearer ', ''), JWT_SECRET)
      personId = d.personId;
    } catch (e) {
      //
    }

    if (!personId) {
      throw HttpError(401);
    }
    req.personId = personId;
    next();
  } catch (e) {
    next(e);
  }
}

export default authorization;
