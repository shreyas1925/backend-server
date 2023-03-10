const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.post("/addContent",userController.addContent);

router.post("/addFields/:contentId",userController.addFields);

router.patch("/updateContent/:contentId",userController.updateContent);

router.get("/getContents",userController.getContents);

router.put("/updateContentField/:contentId",userController.updateContentField);

router.delete("/deleteContentField/:contentId",userController.deleteContentField)

router.get("/getContentCount",userController.getContentCount)

router.get("/getFieldCount/:contentId",userController.getFieldCount)

router.get("/getContentEntries/:contentId",userController.getContentEntries)

router.post("/addContentEntries/:contentId",userController.addContentEntries)

router.put("/updateContentEntries/:contentId",userController.updateContentEntries)

router.get("/getFields/:contentId",userController.getFields)

router.get('/contents/:id', userController.getContent);  

router.delete("/deleteEntries/:contentId",userController.deleteContent)

router.delete("/deleteContent/:contentId",userController.deleteContentByID)

module.exports = {userRouter:router};


