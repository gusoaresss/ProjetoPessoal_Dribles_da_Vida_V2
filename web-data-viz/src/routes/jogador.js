var express = require("express");
var router = express.Router();

var jogadorController = require("../controllers/jogadorController");

router.get("/listar",function (req, res){
    jogadorController.listar(req, res);
})
router.post("/cadastrar", function (req, res){
    jogadorController.cadastrar(req, res);
});
router.get("/listarTreino", function (req, res){
    jogadorController.listarTreino(req, res);
});
router.get("/total", function (req, res){
    jogadorController.totalJogadores(req, res);
});


module.exports = router;
