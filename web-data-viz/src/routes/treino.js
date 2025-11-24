var express = require("express");
var router = express.Router();

var treinoController = require("../controllers/treinoController");


router.post("/cadastrar", treinoController.cadastrar);

router.post("/cadastrar", function (req, res){
    treinoController.cadastrar(req, res)
})

router.get("/total", function (req, res){
    treinoController.total(req, res)
});


module.exports = router;





