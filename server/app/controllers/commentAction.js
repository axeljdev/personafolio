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

module.exports = {
  addComment,
  browseComments,
};