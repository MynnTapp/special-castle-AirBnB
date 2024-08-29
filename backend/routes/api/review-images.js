const express = require("express");
const { ReviewImage, Review } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

const router = express.Router();

// Deletes a Review Image
router.delete("/:imageId", requireAuth, async (req, res, next) => {
   const id = parseInt(req.params.imageId);
   const { user: currUser } = req;

   if (isNaN(id)) return next();

   const reviewImage = await ReviewImage.unscoped().findByPk(id);

   if (!reviewImage)
      return res
         .status(404)
         .json({ message: "Review Image couldn't be found" });

   const review = await reviewImage.getReview();

   const { userId } = review.dataValues;

   if (userId !== currUser.id)
      return res.status(403).json({ message: "Forbidden" });

   reviewImage.destroy();
   return res.json({ message: "Successfully deleted" });
});

module.exports = router;
