const AbstractRepository = require("./AbstractRepository");

class CommentRepository extends AbstractRepository {
  constructor() {
    super({ table: "comment" });
  }
  
  async readAll() {
    const [rows] = await this.database.query(`
      SELECT comment.*, user.name 
      FROM ${this.table} 
      INNER JOIN user ON comment.user_id = user.id
    `);
    return rows;
  }
  
  async create(comment) {
      const [result] = await this.database.query(
          `INSERT INTO ${this.table} (text, user_id, project_id) VALUES (?, ?, ?)`,
          [comment.text, comment.userId, comment.projectId]
        );
        return { id: result.insertId, ...comment };
    }

  async read(id) {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
    return rows[0];
  }

  async delete(id) {
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }

  async update(id, comment) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET text = ? WHERE id = ?`,
      [comment.text, id]
    );
    return result;
  }
}


module.exports = CommentRepository;