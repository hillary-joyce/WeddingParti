import axios from "axios";

export default {
  //WEDDING routes
  //create new wedding
    createWedding: function() {
      return axios.get("/api/weddings")
    },
  //get one wedding
    getWedding: function() {
      return axios.post("/api/weddings" + id)
    },
  //CALENDAR
  //get wedding dates
    getCalendarDates: function() {
      return axios.get("/api/weddings/" + weddingId + "/calendar")
    },
  //Add wedding date
    addCalendarDates: function() {
      return axios.post("/api/weddings/" + weddingId + "/calendar")
    },
  //remove a calendar date
    removeCalendarDates: function() {
      return axios.delete("/api/weddings/" + weddingId + "/calendar/" + calendarId)
    },
  //PHOTO GALLERY
  //get photos
    getPhotos: function() {
      return axios.get("/api/weddings/" + weddingId + "/photos")
    },
  //Add new photo
    addPhotos: function() {
      return axios.post("/api/weddings/" + weddingId + "/photos")
    },
  //remove one photo
    removePhotos: function() {
      return axios.delete("/api/weddings/" + weddingId + "/photos/" + photoId)
    },
  //CHAT
  //Get all chat messages
    getChat: function() {
      return axios.get("/api/weddings/" + weddingId +"/chat")
    },
  //Add new chat message
    addChat: function() {
      return axios.post("/api/weddings/" + weddingId + "/chat" )
    },
  //TASK MANAGER
  //Find all projects
    findProjects: function(){
      return axios.get("/api/weddings/" + weddingId + "/projects")
    },
  //Add new project
    addProject: function(){
      return axios.post("/api/weddings/" + weddingId + "/projects")
    },
  //Find all tasks
    findTasks: function() {
      return axios.get("/api/weddings/" + weddingId + "/projects/" + projectId)
    },
  //Add new task
    addTask: function() {
      return axios.post("/api/weddings/" + weddingId + "/projects/" + projectId)
    },
  //remove task
    removeTask: function() {
      return axios.delete("/api/weddings/" + weddingId + "/projects/" + projectId)
    }
};
