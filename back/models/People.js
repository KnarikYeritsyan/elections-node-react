import db from "../services/db";

class People {

  static getByPassport = async (passport = '') => {
    const [rows] = await db.execute('SELECT * FROM people where passport = ?', [passport]);

    return rows[0];
  }

  static isVoted = async (id) => {
    const [rows] = await db.execute('SELECT id FROM people where id = ? AND voted is not null', [id]);

    return !!rows[0];
  }

  static setVoted = async (id) => {
    const res = await db.execute(`UPDATE people set voted = now() WHERE id = ?`, [id]);
    console.log(res)
    return res;
  }
}

export default People
