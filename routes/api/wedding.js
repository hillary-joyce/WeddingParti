const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");
const weddingController = require("../../controllers/weddingController");
const photoGalleryController = require("../../controllers/photoGalleryController");
const taskManagerController = require("../../controllers/taskManagerController");

//WEDDINGS
//Add new Wedding
router.route("/")
  .post(weddingController.create);

//Find one wedding by ID
router.route("/:userEmail")
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


//TASK MANAGER
//Find all projects, add new project
router.route("/:weddingId/projects")
  .get(taskManagerController.findAllProjects)
  .post(taskManagerController.createProject);

//find all tasks, add new task,
router.route("/:weddingId/projects/:projectId")
  .get(taskManagerController.findAllTasks)
  .post(taskManagerController.createTask);

//remove a task by id
router.route("/:weddingId/projects/:projectId/:taskId")
  .delete(taskManagerController.removeTask);

module.exports = router;
