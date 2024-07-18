const AbstractRepository = require("./AbstractRepository");

class ProjectRepository extends AbstractRepository {
  constructor() {
    super({ table: "project" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
    return rows[0];
  }
}

module.exports = ProjectRepository;