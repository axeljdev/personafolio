const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read } = require("../../../controllers/projectAction");
const { addComment } = require("../../../controllers/commentAction");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a comment
router.post("/:id/comments", addComment);

/* ************************************************************************* */

module.exports = router;