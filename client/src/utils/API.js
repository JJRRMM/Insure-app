

import axios from "axios";

export default {
  // Get Resume
  getResume: function() {
    return axios.get("/api/resume");
  },
  // Gets the skills 
  getSkills: function() {

    return axios.get("/api/skillSet");
  },
  // get profiles
  getProfile: function() {
    return axios.get("/api/profile/");
  },
  deleteProfile: function(id) {
    return axios.delete("/api/profile/" + id);
  },
  saveProfile: function(profileData) {
    return axios.post("/api/profile", profileData);
  },  
    // get automobile
  getAuto: function() {
    return axios.get("/api/auto");
  }
};
