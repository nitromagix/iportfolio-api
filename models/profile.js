const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  photo: {
    type: String,
    default: "/images/tv-test-pattern-146649_960_720-1502262587.png",
  },
  introduction: {
    type: String,
    default: "Welcome to YOUR portfolio site!",
  },
  description: {
    type: String,
    default: "Use this site to tell your unique story. All sections are customizable!",
  },
  about: {
    type: String,
    default: "I like to sleep",
  },
  interests: {
    type: String,
    default: "I like computers",
  },
  goals: {
    type: String,
    default: "I want more cats and dogs",
  },
  education: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Education",
    },
  ],
  experience: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Experience",
    },
  ],
  portfolio: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});

// profileSchema.methods.showEstablished = function () {
//   return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
// };

module.exports = mongoose.model("Profile", profileSchema);
