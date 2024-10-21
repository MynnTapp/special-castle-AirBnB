"use strict";
const { SpotImage } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
   options.schema = process.env.SCHEMA; // define your schema in options object
   options.validate = true;
}

module.exports = {
   async up(queryInterface, Sequelize) {
      /**
       * Add seed commands here.
       *
       * Example:
       * await queryInterface.bulkInsert('People', [{
       *   name: 'John Doe',
       *   isBetaMember: false
       * }], {});
       */
      await SpotImage.bulkCreate(
         [
            {
               spotId: 1,
               url: "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=",
               preview: true,
            },
            {
               spotId: 1,
               url: "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=",
               preview: false,
            },
            {
               spotId: 1,
               url: "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=",
               preview: false,
            },
            {
               spotId: 1,
               url: "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=",
               preview: false,
            },
            {
               spotId: 1,
               url: "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=",
               preview: false,
            },
            {
               spotId: 2,
               url: "https://www.travelandleisure.com/thmb/UvM2xJbeXQT6x3gLkapyM0mTJSM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/winchester-new-ROOM1016-2ce0d52ad0724d60b6885654132402b8.jpg",
               preview: true,
            },
            {
               spotId: 2,
               url: "https://www.travelandleisure.com/thmb/UvM2xJbeXQT6x3gLkapyM0mTJSM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/winchester-new-ROOM1016-2ce0d52ad0724d60b6885654132402b8.jpg",
               preview: false,
            },
            {
               spotId: 2,
               url: "https://www.travelandleisure.com/thmb/UvM2xJbeXQT6x3gLkapyM0mTJSM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/winchester-new-ROOM1016-2ce0d52ad0724d60b6885654132402b8.jpg",
               preview: false,
            },
            {
               spotId: 2,
               url: "https://www.travelandleisure.com/thmb/UvM2xJbeXQT6x3gLkapyM0mTJSM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/winchester-new-ROOM1016-2ce0d52ad0724d60b6885654132402b8.jpg",
               preview: false,
            },
            {
               spotId: 2,
               url: "https://www.travelandleisure.com/thmb/UvM2xJbeXQT6x3gLkapyM0mTJSM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/winchester-new-ROOM1016-2ce0d52ad0724d60b6885654132402b8.jpg",
               preview: false,
            },
            {
               spotId: 3,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Concords-Colonial-Inn.jpg",
               preview: true,
            },
            {
               spotId: 3,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Concords-Colonial-Inn.jpg",
               preview: false,
            },
            {
               spotId: 3,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Concords-Colonial-Inn.jpg",
               preview: false,
            },
            {
               spotId: 3,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Concords-Colonial-Inn.jpg",
               preview: false,
            },
            {
               spotId: 3,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Concords-Colonial-Inn.jpg",
               preview: false,
            },
            {
               spotId: 4,
               url: "https://www.historichotels.org/images/uploads/Inspiration/2023_Haunted/600x600_Omni_Homestead_Resort_Haunted_.png",
               preview: true,
            },
            {
               spotId: 4,
               url: "https://www.historichotels.org/images/uploads/Inspiration/2023_Haunted/600x600_Omni_Homestead_Resort_Haunted_.png",
               preview: false,
            },
            {
               spotId: 4,
               url: "https://www.historichotels.org/images/uploads/Inspiration/2023_Haunted/600x600_Omni_Homestead_Resort_Haunted_.png",
               preview: false,
            },
            {
               spotId: 4,
               url: "https://www.historichotels.org/images/uploads/Inspiration/2023_Haunted/600x600_Omni_Homestead_Resort_Haunted_.png",
               preview: false,
            },
            {
               spotId: 4,
               url: "https://www.historichotels.org/images/uploads/Inspiration/2023_Haunted/600x600_Omni_Homestead_Resort_Haunted_.png",
               preview: false,
            },
            {
               spotId: 5,
               url: "https://www.historichotels.org/images/uploads/Inspiration/2023_Haunted/600x600-The-Maryland-Inn-at-Twilight.jpg",
               preview: true,
            },
            {
               spotId: 5,
               url: "https://www.historichotels.org/images/uploads/Inspiration/2023_Haunted/600x600-The-Maryland-Inn-at-Twilight.jpg",
               preview: false,
            },
            {
               spotId: 5,
               url: "https://www.historichotels.org/images/uploads/Inspiration/2023_Haunted/600x600-The-Maryland-Inn-at-Twilight.jpg",
               preview: false,
            },
            {
               spotId: 5,
               url: "https://www.historichotels.org/images/uploads/Inspiration/2023_Haunted/600x600-The-Maryland-Inn-at-Twilight.jpg",
               preview: false,
            },
            {
               spotId: 5,
               url: "https://www.historichotels.org/images/uploads/Inspiration/2023_Haunted/600x600-The-Maryland-Inn-at-Twilight.jpg",
               preview: false,
            },
            {
               spotId: 6,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Red-Lion-Inn.jpg",
               preview: true,
            },
            {
               spotId: 6,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Red-Lion-Inn.jpg",
               preview: false,
            },
            {
               spotId: 6,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Red-Lion-Inn.jpg",
               preview: false,
            },
            {
               spotId: 6,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Red-Lion-Inn.jpg",
               preview: false,
            },
            {
               spotId: 6,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Red-Lion-Inn.jpg",
               preview: false,
            },
            {
               spotId: 7,
               url: "https://phgcdn.com/images/uploads/ABESM/masthead/Image-of-Sayre-Mansion-Exterior-The-Sayre-Mansion-Bethlehem-Pennsylvania.png",
               preview: true,
            },
            {
               spotId: 7,
               url: "https://phgcdn.com/images/uploads/ABESM/masthead/Image-of-Sayre-Mansion-Exterior-The-Sayre-Mansion-Bethlehem-Pennsylvania.png",
               preview: false,
            },
            {
               spotId: 7,
               url: "https://phgcdn.com/images/uploads/ABESM/masthead/Image-of-Sayre-Mansion-Exterior-The-Sayre-Mansion-Bethlehem-Pennsylvania.png",
               preview: false,
            },
            {
               spotId: 7,
               url: "https://phgcdn.com/images/uploads/ABESM/masthead/Image-of-Sayre-Mansion-Exterior-The-Sayre-Mansion-Bethlehem-Pennsylvania.png",
               preview: false,
            },
            {
               spotId: 7,
               url: "https://phgcdn.com/images/uploads/ABESM/masthead/Image-of-Sayre-Mansion-Exterior-The-Sayre-Mansion-Bethlehem-Pennsylvania.png",
               preview: false,
            },
            {
               spotId: 8,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Hanover-Inn-Dartmouth.jpg",
               preview: true,
            },
            {
               spotId: 8,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Hanover-Inn-Dartmouth.jpg",
               preview: false,
            },
            {
               spotId: 8,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Hanover-Inn-Dartmouth.jpg",
               preview: false,
            },
            {
               spotId: 8,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Hanover-Inn-Dartmouth.jpg",
               preview: false,
            },
            {
               spotId: 8,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Hanover-Inn-Dartmouth.jpg",
               preview: false,
            },
            {
               spotId: 9,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Omni-Parker-House.jpg",
               preview: true,
            },
            {
               spotId: 9,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Omni-Parker-House.jpg",
               preview: false,
            },
            {
               spotId: 9,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Omni-Parker-House.jpg",
               preview: false,
            },
            {
               spotId: 9,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Omni-Parker-House.jpg",
               preview: false,
            },
            {
               spotId: 9,
               url: "https://www.historichotels.org/images/uploads/hhapush/Haunted/Omni-Parker-House.jpg",
               preview: false,
            },
         ],
         options
      );
   },

   async down(queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
      options.tableName = "SpotImages";
      return queryInterface.bulkDelete(options, {}, {});
   },
};
