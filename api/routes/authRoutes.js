// import express from "express";
// import {
//   registerController,
//   testController,
//   loginController,
// } from "../controllers/authControllers.js";
// import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
// const router = express.Router();
// router.post("/register", registerController);
// router.post("/login", loginController);
// // router.get("/test", requireSignIn, isAdmin, testController);
// // router.get("/user-auth", requireSignIn, (req, res) => {
// //     res.status(200).send({ ok: true });
// //   });
// export default router;
const express = require("express");
const {
  registerController,
  loginController,
  verifyController,
  userDetailsController,
  permissionController,
  profileController,
} = require("../controllers/authControllers");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/verify/:token", verifyController);
router.get("/getUserDetails", userDetailsController)
router.post("/permission", permissionController)
router.get("/profile/:name",profileController)
module.exports = router;
