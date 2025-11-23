var express = require("express");
var router = express.Router();

var treinoController = require("../controllers/treinoController");

router.get("/listar", treinoController.listar);
router.post("/cadastrar", treinoController.cadastrar);

router.get("/total", treinoController.listar);


module.exports = router;
