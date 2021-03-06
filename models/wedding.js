const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Subdocuments
const calendarDates = new Schema({
  start: {type: Date},
  end: {type: Date},
  time: {type: String},
  location: {type: String},
  title: {type: String}
});

const photoGallery = new Schema({
  imgurl: {type: String},
  url: {type: String},
  description: {type: String},
  tags: {type: String}
});

const taskItem = new Schema({
  itemName: {type: String, required: true},
  owner: {type: String}
})

const taskManager = new Schema({
  projectName: {type: String, required: true},
  taskItems: [taskItem]
});



const weddingSchema = new Schema({
  users: {type: Array},
  weddingDate: {type: Date, default: Date.now},
  bride: {type: String},
  partner: {type: String},
  venue: {type: String},
  calendarDates: [calendarDates],
  photoGallery: [photoGallery],
  taskManager: [taskManager]
})

const Wedding = mongoose.model("Wedding", weddingSchema);

module.exports = Wedding;
