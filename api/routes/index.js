const express = require('express');
const produtos = require('./produtosRoute');

module.exports = app => {
    app.use(express.json());
    app.use(produtos);
}

