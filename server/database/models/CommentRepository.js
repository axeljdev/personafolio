const AbstractRepository = require("./AbstractRepository");

class CommentRepository extends AbstractRepository {
  constructor() {
    super({ table: "comment" });
  }

  async create(comment) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (text, user_id, project_id) VALUES (?, ?, ?)`,
      [comment.text, comment.userId, comment.projectId]
    );
    return { id: result.insertId, ...comment };
  }
}

module.exports = CommentRepository;
