import axios from "axios";

export default {
  //WEDDING routes
  //create new wedding
    createWedding: function(weddingData) {
      return axios.post("/api/weddings", weddingData)
    },
  //get one wedding
    getWedding: function(id) {
      return axios.get("/api/weddings/" + id)
    },
  //CALENDAR
  //get wedding dates
    getCalendarDates: function(weddingId) {
      return axios.get("/api/weddings/" + weddingId + "/calendar")
    },
  //Add wedding date
    addCalendarDates: function(weddingId, dateData) {
      return axios.post("/api/weddings/" + weddingId + "/calendar", dateData)
    },
  //remove a calendar date
    removeCalendarDates: function(weddingId, calendarId) {
      return axios.delete("/api/weddings/" + weddingId + "/calendar/" + calendarId)
    },
  //PHOTO GALLERY
  //get photos
    getPhotos: function(weddingId) {
      return axios.get("/api/weddings/" + weddingId + "/photos")
    },
  //Add new photo
    addPhotos: function(weddingId, imageData) {
      return axios.post("/api/weddings/" + weddingId + "/photos", imageData)
    },
  //remove one photo
    removePhotos: function(weddingId, photoId) {
      return axios.delete("/api/weddings/" + weddingId + "/photos/" + photoId)
    },
  //CHAT
  //Get all chat messages
    getChat: function(weddingId) {
      return axios.get("/api/weddings/" + weddingId +"/chat")
    },
  //Add new chat message
    addChat: function(weddingId) {
      return axios.post("/api/weddings/" + weddingId + "/chat" )
    },
  //TASK MANAGER
  //Find all projects
    findProjects: function(weddingId){
      return axios.get("/api/weddings/" + weddingId + "/projects")
    },
  //Add new project
    addProject: function(weddingId){
      return axios.post("/api/weddings/" + weddingId + "/projects")
    },
  //Find all tasks
    findTasks: function(weddingId, projectId) {
      return axios.get("/api/weddings/" + weddingId + "/projects/" + projectId)
    },
  //Add new task
    addTask: function(weddingId, projectId) {
      return axios.post("/api/weddings/" + weddingId + "/projects/" + projectId)
    },
  //remove task
    removeTask: function(weddingId, projectId) {
      return axios.delete("/api/weddings/" + weddingId + "/projects/" + projectId)
    }
};
