// "use strict";

// let options = {};
// if (process.env.NODE_ENV === "production") {
//    options.schema = process.env.SCHEMA; // define your schema in options object
// }

// module.exports = {
//    async up(queryInterface, Sequelize) {
//       await queryInterface.createTable(
//          "Spots",
//          {
//             id: {
//                allowNull: false,
//                autoIncrement: true,
//                primaryKey: true,
//                type: Sequelize.INTEGER,
//             },
//             ownerId: {
//                type: Sequelize.INTEGER,
//                allowNull: false,
//                references: {
//                   model: "Users",
//                },
//                onDelete: "CASCADE",
//             },
//             address: {
//                type: Sequelize.STRING,
//                allowNull: false,
//             },
//             city: {
//                type: Sequelize.STRING,
//                allowNull: false,
//             },
//             state: {
//                type: Sequelize.STRING,
//                allowNull: false,
//             },
//             country: {
//                type: Sequelize.STRING,
//                allowNull: false,
//             },
//             lat: {
//                type: Sequelize.FLOAT,
//                allowNull: false,
//             },
//             lng: {
//                type: Sequelize.FLOAT,
//                allowNull: false,
//             },
//             name: {
//                type: Sequelize.STRING,
//                allowNull: false,
//             },
//             description: {
//                type: Sequelize.TEXT,
//                allowNull: false,
//             },
//             price: {
//                type: Sequelize.FLOAT,
//                allowNull: false,
//             },
//             createdAt: {
//                allowNull: false,
//                type: Sequelize.DATE,
//                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
//             },
//             updatedAt: {
//                allowNull: false,
//                type: Sequelize.DATE,
//                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
//             },
//          },
//          options
//       );
//    },
//    async down(queryInterface, Sequelize) {
//       options.tableName = "Spots";
//       return queryInterface.dropTable(options);
//    },
// };


"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Spots",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        spotId: {
          type: Sequelize.INTEGER,
        },
        ownerId: {
          type: Sequelize.INTEGER,
        },
        address: {
          type: Sequelize.STRING,
        },
        city: {
          type: Sequelize.STRING,
        },
        state: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
        },
        lat: {
          type: Sequelize.DECIMAL,
        },
        lng: {
          type: Sequelize.DECIMAL,
        },
        name: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.TEXT,
        },
        price: {
          type: Sequelize.DECIMAL,
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

  /**
   * Add altering commands here.
   *
   * Example:
   * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
   */

  async down(queryInterface, Sequelize) {
    options.tableName = "Spots";
    return queryInterface.dropTable(options);

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
