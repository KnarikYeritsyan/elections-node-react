import db from "../services/db";

class Candidates {

  static getAll = async () => {
    const [rows] = await db.execute(`
select c.id, c.number, p.id as people_id, p.firstName, p.lastName, p.middleName
    from candidates c
         join people p on c.people_id = p.id
    order by c.number`, []);
    return rows;
  }

  static addVote = async (id) => {
    const res = await db.execute(`UPDATE candidates set votes = votes + 1 WHERE id = ?`, [id]);
    console.log(res)
    return res;
  }
}

export default Candidates
