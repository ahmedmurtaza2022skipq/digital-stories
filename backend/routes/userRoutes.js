const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.get("/refresh", authController.refresh);
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// Protect all routes after this middleware
router.use(authController.protect);

router.post("/logout", authController.logout);
router.patch("/updateMyPassword", authController.updatePassword);
// router.get("/me", userController.getMe, userController.getUser);
router.get("/num-users", userController.getNumUsers);
router.patch("/updateMe", userController.updateMe);
router.delete("/deleteMe", userController.deleteMe);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
