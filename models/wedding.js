const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarDates = new Schema({
  date: {type: Date, required: true},
  description: {type: String, required: true}
});

const photoGallery = new Schema({
  url: {type: String, required: true},
  description: {type: String},
  tags: {type: String}
});

const chatHistory = new Schema({
  userName: {type: String},
  date: {type: Date, default: Date.now},
  message: {type: String, minlength: 1}
});

const weddingSchema = new Schema({
  weddingName: {type: String, required: true},
  password: {type: String, required: true, minlength: 7},
  users: {type: Array, required: true},
  weddingDate: {type: Date, default: Date.now},
  bride: {type: String},
  calendarDates: [calendarDates],
  photoGallery: [photoGallery],
  chat: [chatHistory]
})

const Wedding = mongoose.model("Wedding", weddingSchema);

module.exports = Wedding;
