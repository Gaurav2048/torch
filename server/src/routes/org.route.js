const express = require("express");
const auth = require("../middlewares/auth");
const { createWorkType, getOrg } = require("../controllers/org.controller");

const router = express.Router();

router.post("/:orgId/worktype", createWorkType);
router.get("/:orgId", getOrg);

module.exports = router;
