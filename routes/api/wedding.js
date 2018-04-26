const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");
const weddingController = require("../../controllers/weddingController");
const chatController = require("../../controllers/chatController");
const photoGalleryController = require("../../controllers/photoGalleryController");
const taskManagerController = require("../../controllers/taskManagerController");

//WEDDINGS
//Add new Wedding
router.route("/")
  .post(weddingController.create);

//Find one wedding by ID
router.route("/:id")
  .get(weddingController.findById);

//PHOTO GALLERY
//Get all photos, add new photo
router.route("/:weddingId/photos")
  .get(photoGalleryController.findAll)
  .post(photoGalleryController.create)

//Remove a photo
router.route("/:weddingId/photos/:photoId")
  .delete(photoGalleryController.remove);

//CALENDAR
//Get all calendar dates
//Add a new calendar date
router.route("/:weddingId/calendar")
  .get(calendarController.findAll)
  .post(calendarController.create)

//Remove a calendar date
router.route("/:weddingId/calendar/:calendarId")
  .delete(calendarController.remove);

//CHAT
// //Find All Chat messages, add new chat message
// router.route("/:weddingId/chat")
//   .get(chatController.findAll)
//   .post(chatController.create);

//TASK MANAGER
//Find all projects, add new project
router.route("/:weddingId/projects")
  .get(taskManagerController.findAllProjects)
  .post(taskManagerController.createProject);

//find all tasks, remove task, add new task,
router.route("/:weddingId/projects/:projectId")
  .get(taskManagerController.findAllTasks)
  .delete(taskManagerController.removeTask)
  .post(taskManagerController.createTask);

module.exports = router;
