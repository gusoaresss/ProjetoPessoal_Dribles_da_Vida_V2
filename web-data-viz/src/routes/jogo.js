var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.get("/listar",function(req, res){
jogoController.listar(req, res);
})

router.post("/cadastrar",function(req, res) {
    jogoController.cadastrar(req, res);
});

router.get("/total", (req, res) => {
    jogoController.totalJogos(res);
});

router.get("/vitorias", (req, res) => {
    jogoController.totalVitorias(res);
});

router.get("/derrotas", (req, res) => {
    jogoController.totalDerrotas(res);
});


module.exports = router;
