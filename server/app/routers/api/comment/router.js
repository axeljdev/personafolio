const express = require("express");

const router = express.Router();

// Import comment-related actions
const { addComment, browseComments } = require("../../../controllers/commentAction");

// Route to add a comment
router.post("/:id/comments", addComment);

// Route to browse comments
router.get("/", browseComments);

module.exports = router;