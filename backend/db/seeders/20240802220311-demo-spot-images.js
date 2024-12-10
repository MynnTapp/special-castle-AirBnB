"use strict";
const { SpotImage } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
   options.schema = "HauntedBnB"; // define your schema in options object
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
               url: "https://cdn.openart.ai/published/9ohAD2ktCjGkZWAOLxle/le4zwnzr_BIsd_1024.webp",
               preview: true,
            },
            {
               spotId: 1,
               url: "https://town-n-country-living.com/wp-content/uploads/2022/12/Little-Pink-Cottage.jpg",
               preview: false,
            },
            {
               spotId: 1,
               url: "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2023/06/the-pink-house-3.jpg",
               preview: false,
            },
            {
               spotId: 1,
               url: "https://media.gettyimages.com/id/160808926/photo/victorian-house.jpg?s=612x612&w=gi&k=20&c=8ZM_KxhH0fL3bZpT9aZZDovCviZ2KsWVp6ORBC5Ihec=",
               preview: false,
            },
            {
               spotId: 1,
               url: "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=",
               preview: false,
            },
            {
               spotId: 2,
               url: "https://cdn.openart.ai/published/9ohAD2ktCjGkZWAOLxle/ouSstbsp_nj-R_1024.webp",
               preview: true,
            },
            {
               spotId: 2,
               url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgrFiau_yCvGGOtn1FKe_r1oJtjaPyyx2Cw&s",
               preview: false,
            },
            {
               spotId: 2,
               url: "https://i.pinimg.com/236x/de/60/bf/de60bfa6eed6e1f1bdd78fbc39fc66ae.jpg",
               preview: false,
            },
            {
               spotId: 2,
               url: "https://media.kvue.com/assets/KVUE/images/3a7d2b77-d815-44f3-8f1f-202cf4b2079f/3a7d2b77-d815-44f3-8f1f-202cf4b2079f_1140x641.png",
               preview: false,
            },
            {
               spotId: 2,
               url: "https://thumbs.dreamstime.com/z/pink-floral-cute-house-spring-garden-color-scheme-generative-ai-beautiful-fairy-271606203.jpg",
               preview: false,
            },
            {
               spotId: 3,
               url: "https://cdnfiles.hdrcreme.com/24399/medium/Pink-House.jpg?1426829653",
               preview: true,
            },
            {
               spotId: 3,
               url: "https://eastbrookhomes.com/wp-content/uploads/2023/03/484348639-exterior-1024x683.jpg",
               preview: false,
            },
            {
               spotId: 3,
               url: "https://t3.ftcdn.net/jpg/08/82/90/96/360_F_882909679_bEd7AClh8dCXYfzPlXHs8vmh4vzUstB2.jpg",
               preview: false,
            },
            {
               spotId: 3,
               url: "https://i.pinimg.com/originals/bf/d0/d4/bfd0d4e0d12deb11f1889a1650a11ab1.jpg",
               preview: false,
            },
            {
               spotId: 3,
               url: "https://64.media.tumblr.com/38ecdf482ff0629f425dc8deb0ac54d9/0dbc7ba12e10e2f5-77/s640x960/a54671e07a1d118ae4524d6011fb52fe58be642f.jpg",
               preview: false,
            },
            {
               spotId: 4,
               url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVpgz-QAKFpHqmZLsIGTssy51vj_UCSxtNw&s",
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
               url: "https://stpetecatalyst.com/wp-content/uploads/2022/04/02-20256-Gulf-Blvd-2-scaled.jpg",
               preview: false,
            },
            {
               spotId: 5,
               url: "https://admin.onlyinyourstate.com/wp-content/uploads/sites/2/2021/04/Screen-Shot-2021-04-09-at-11.26.14-AM.png",
               preview: true,
            },
            {
               spotId: 5,
               url: "https://savageventures.b-cdn.net/wp-content/uploads/2023/07/beach-bungalow.jpg",
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
               url: "https://sugarsbeach.com/wp-content/uploads/2021/07/Tybee-Island-Georgia-Beach-Cottage-Lets-Flamingle-Exterior.jpeg",
               preview: true,
            },
            {
               spotId: 7,
               url: "https://phgcdn.com/images/uploads/ABESM/masthead/Image-of-Sayre-Mansion-Exterior-The-Sayre-Mansion-Bethlehem-Pennsylvania.png",
               preview: false,
            },
            {
               spotId: 7,
               url: "https://admin.onlyinyourstate.com/wp-content/uploads/sites/2/2021/04/Screen-Shot-2021-04-09-at-11.09.02-AM.png?w=500&quality=50",
               preview: false,
            },
            {
               spotId: 7,
               url: "https://img.freepik.com/premium-photo/charming-pink-castle-home-magical-world-artfully-crafted-by-generative-ai_318002-2949.jpg",
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
               url: "https://www.realestate.com.au/news-image/w_1280,h_720/v1658754232/news-lifestyle-content-assets/wp-content/production/capi_3be7fb23c5bf16ee8ec0803efba76c99_acdc07b49606f1bfd29b0b000d06745f.jpeg?_i=AA",
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
               url: "https://vacasa-units.imgix.net/5568636.jpg",
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
