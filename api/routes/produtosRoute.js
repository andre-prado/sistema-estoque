const { Router } = require('express');
const ProdutosController = require('../controllers/ProdutosController');

const router = Router();

router.get('/produtos', ProdutosController.getAll);
router.get('/produtos/:id', ProdutosController.getOne);
router.post('/produtos', ProdutosController.create);
router.put('/produtos/:id', ProdutosController.update);
router.delete('/produtos/:id', ProdutosController.delete);


module.exports = router;