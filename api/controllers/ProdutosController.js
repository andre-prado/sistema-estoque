const database = require('../models');

class ProdutosController {
    static async getAll(req, res) {
        try {
            const allProducts = await database.Produtos.findAll();
            return res.status(200).json(allProducts);
        } 
        catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static async getOne(req, res) {
        const { id } = req.params;
        try {
            const product = await database.Produtos.findOne({where: {id: id}});
            return res.status(200).json(product);
        } 
        catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static async create(req, res) {
        const newProductInfo = req.body;

        const newProduct = {
            nome: newProductInfo.nome,
            descricao: newProductInfo.descricao,
            quantidade: newProductInfo.quantidade,
            preco: newProductInfo.preco,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        try {
            const product = await database.Produtos.create(newProduct);
            return res.status(201).json(product);
        } 
        catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static async update(req, res) {
        const newProductInfo = req.body;
        const { id } = req.params;

        // somente essas informacoes podem ser editadas no produto
        const productUpdated = {
            nome: newProductInfo.nome,
            descricao: newProductInfo.descricao,
            quantidade: newProductInfo.quantidade,
            updatedAt: new Date()
        }

        try {
            const product = await database.Produtos.update(productUpdated, {where: {id: id}});
            return res.status(204).json(product);
        } 
        catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            const product = await database.Produtos.update(newProductInfo, {where: {id: id}});
            return res.status(204).json(product);
        } 
        catch(err) {
            return res.status(500).json(err.message);
        }
    }


}

module.exports = ProdutosController; 