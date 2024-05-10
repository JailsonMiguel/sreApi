'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('occupations', {
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
      instituteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'institutes',
          key: 'id'
        }
      },
      servantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'servants',
          key: 'id'
        }
      },
      functionEmail: {
        type: Sequelize.STRING,
        allowNull: true
      },
      loadWorkload: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      offcialAct: {
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
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('occupations');
  }
};

