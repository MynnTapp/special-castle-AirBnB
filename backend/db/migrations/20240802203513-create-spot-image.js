"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
   options.schema = "HauntedBnB"; // define your schema in options object
}

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable(
         "SpotImages",
         {
            id: {
               allowNull: false,
               autoIncrement: true,
               primaryKey: true,
               type: Sequelize.INTEGER,
            },
            spotId: {
               type: Sequelize.INTEGER,
               allowNull: false,
               references: {
                  model: "Spots",
               },
               onDelete: "CASCADE",
            },
            url: {
               type: Sequelize.STRING,
               allowNull: false,
               unique: false,
            },
            preview: {
               type: Sequelize.BOOLEAN,
               allowNull: false,
               defaultValue: false,
            },
            createdAt: {
               allowNull: false,
               type: Sequelize.DATE,
               defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
            updatedAt: {
               allowNull: false,
               type: Sequelize.DATE,
               defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
         },
         options
      );
   },
   async down(queryInterface, Sequelize) {
      options.tableName = "SpotImages";
      return queryInterface.dropTable(options);
   },
};


