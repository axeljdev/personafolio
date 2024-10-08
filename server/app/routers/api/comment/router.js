const express = require("express");

const router = express.Router();

// Import comment-related actions
const {
  browseComments,
  editComment,
  deleteComment,
} = require("../../../controllers/commentAction");

// Route to add a comment

// Route to browse comments
router.get("/", browseComments);

// Route to update a comment
router.put("/:id", editComment);

// Route to delete a comment
router.delete("/:id", deleteComment);

module.exports = router;
