const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", postsController.getPost);

router.post("/createPost", postsController.createPost);

// router.post("/createPostWithImage", upload.single("file"),postsController.createPostWithImage);

// router.put("/markAsComplete/:id", postsController.markAsComplete);
// router.put("/markAsIncomplete/:id", postsController.markAsIncomplete);

// router.put("/assignUserToTask/:id", postsController.assignUserToTask);
// router.put("/removeUserFromTask/:id", postsController.removeUserFromTask);

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
