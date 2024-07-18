const tables = require("../../database/tables");

const browseComments = async (req, res, next) => {
  try {
    const comments = await tables.comment.readAll();
    res.json(comments);
  } catch (err) {
    next(err);
  }
};

const addComment = async (req, res, next) => {
  try {
    const { text, userId } = req.body;
    const { id: projectId } = req.params;
    const result = await tables.comment.create({ text, userId, projectId });

    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const editComment = async (req, res, next) => {
  try {
    const { text } = req.body;
    const { id } = req.params;
    const result = await tables.comment.update(id, { text });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    await tables.comment.delete(id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addComment,
  browseComments,
  editComment,
  deleteComment,
};
