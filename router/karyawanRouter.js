const express = require("express");
const router = express.Router();
const { karyawanController } = require("../controller");

router.get("/get", karyawanController.getData);
router.post("/add", karyawanController.postData);
router.patch("/edit/:id", karyawanController.patchData);
router.delete("/delete/:id", karyawanController.deleteData);

module.exports = router;
