// backend/routes/index.js
const express = require("express");
const router = express.Router();

const apiRouter = require("./api");
router.use("/api", apiRouter);

// Static Routes
// Serve React build files in production
if (process.env.NODE_ENV === "production") {
   const path = require("path");

   router.get("/", (req, res) => {
      res.cookie("XSRF-Token", req.csrfToken());
      return res.sendFile(
         path.resolve(__dirname, "../../frontend", "dist", "index.html")
      );
   });

   // Serve the static assets in the frontend's build folder
   router.use(express.static(path.resolve("../frontend/dist")));

   // Serve the frontend's index.html file at all other routes NOT starting with /api
   router.get(/^(?!\/?api).*/, (req, res) => {
      res.cookie("XSRF-Token", req.csrfToken());
      return res.sendFile(
         path.resolve(__dirname, "../../frontend", "dist", "index.html")
      );
   });
} else {
   // Add a XSRF-Token cookie in development
   router.get("/api/csrf/restore", (req, res) => {
      const csrfToken = req.csrfToken();
      res.cookie("XSRF-Token", csrfToken);
      res.status(200).json({
         "XSRF-Token": csrfToken,
      });
   });
}

module.exports = router;
