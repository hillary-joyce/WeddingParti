const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");
const weddingController = require("../../controllers/weddingController");
const chatController = require("../../controllers/chatController");
const photoGalleryController = require("../../controllers/photoGalleryController");

router.route("/")
  .post(weddingController.create);

router.route("/:id")
  .get(weddingController.findById);

router.route("/:weddingId/photos")
  .get(photoGalleryController.findAll)
  .post(photoGalleryController.create)
  .delete(photoGalleryController.remove);

router.route("/:weddingId/calendar")
  .get(calendarController.findAll)
  .post(calendarController.create)
  .delete(calendarController.remove);

router.route("/:weddingId/chat")
  .get(chatController.findAll)
  .post(chatController.create);

module.exports = router;
