'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('servants', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      positionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'positions',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      regionalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'regionals',
          key: 'id'
        }
      },
      functionalEmail: {
        type: Sequelize.STRING,
        allowNull: true
      },
      loadWorkload: {
        type: Sequelize.STRING,
        allowNull: false
      },
      officialAct: {
        type: Sequelize.STRING,
        allowNull: true
      },
      initialDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      finalDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('servants');
  }
};

