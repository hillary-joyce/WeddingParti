const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Subdocuments
const calendarDates = new Schema({
  start: {type: Date},
  end: {type: Date},
  title: {type: String}
});

const photoGallery = new Schema({
  url: {type: String},
  description: {type: String},
  tags: {type: String}
});

const taskManager = new Schema({
  projectName: {type: String, required: true},
  taskItems: {type: Array}
});


const weddingSchema = new Schema({
  weddingName: {type: String, required: true},
  password: {type: String, required: true, minlength: 7},
  users: {type: Array},
  weddingDate: {type: Date, default: Date.now},
  bride: {type: String},
  email: {type: String},
  partner: {type: String},
  venue: {type: String},
  calendarDates: [calendarDates],
  photoGallery: [photoGallery],
  taskManager: [taskManager]
})

const Wedding = mongoose.model("Wedding", weddingSchema);

module.exports = Wedding;
