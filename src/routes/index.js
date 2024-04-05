const express = require("express");
const { register, login, uploadPicture, userAccount, updateAccountState, logout, refreshToken, adminRegister, loginAdmin, userCheckToken } = require("../controllers/account.controller");
const { userRequired, adminRequired } = require("../middlewares/auth.middleware");
const router = express.Router();
router.post("/user/register",register)
router.post("/admin/adminRegister",adminRegister)
router.post("/user/logout", userRequired, logout),
router.post("/user/refreshToken", refreshToken) 
router.post("/admin/loginAdmin", loginAdmin)
router.post("/user/login",login),

router.post("/user/register", register).post("/user/login", login);
router.post("/user/uploadPicture",userRequired, uploadPicture);
router.get("/user/accounts", adminRequired, userAccount);
router.put("/user/update-state", adminRequired,updateAccountState);

router.post("/user/check", userRequired, userCheckToken);


module.exports = router;