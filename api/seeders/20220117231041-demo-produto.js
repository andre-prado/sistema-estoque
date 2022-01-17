'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [{
      nome: 'Tramontina Vancouver 20582720 Panela de Pressão com Revestimento Interno e Externo de Antiaderente Starflon Max, 20 cm e 4,5 L, Vermelho (Red Aluminium)',
      descricao: 'Corpo de alumínio com espessura de 3,2 mm que proporciona cozimento rápido e uniforme.',
      quantidade: 5,
      preco: 10.50,
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
