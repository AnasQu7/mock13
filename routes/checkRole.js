const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  return res.send({role : "admin"})
});
module.exports = router;
