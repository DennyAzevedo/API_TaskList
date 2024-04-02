'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.createTable('tasks', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            task: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            check: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        })
    },

    async down(queryInterface) {
        return await queryInterface.dropTable('tasks')
    },
}
