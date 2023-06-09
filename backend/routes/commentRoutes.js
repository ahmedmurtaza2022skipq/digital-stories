const express = require("express");
const commentController = require("./../controllers/commentController");
const authController = require("./../controllers/authController");

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.post("/", commentController.createComment);
router.get("/:id", commentController.getCommentsByPostId);
module.exports = router;
