const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const projectRouter = require("./project/router");
const commentRouter = require("./comment/router");

router.use("/projects", projectRouter);
router.use("/comments", commentRouter); // Assuming comments are related to projects

/* ************************************************************************* */

module.exports = router;