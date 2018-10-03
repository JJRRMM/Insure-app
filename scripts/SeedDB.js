const mongoose = require("mongoose");
const db = require("../models");

// This file empties the SkillSets collection and inserts the skills below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/skillScoredb"
);

const skillSetSeed = [
  {
    skill: "HTML"
  },
  {
    skill: "CSS"
  },
  {
    skill: "CSS Box Model"
  },
  {
    skill: "Bootsrap"
  },
  {
    skill: "Javascript"
  },
  {
    skill: "jquery"
  },
  {
    skill: "ajax"
  },
  {
    skill: "Angular"
  },
  {
    skill: "React"
  },
  {
    skill: "Redux"
  },
  {
    skill: "Vue"
  },
  {
    skill: "Node.js"
  },
  {
    skill: "Python"
  },
  {
    skill: "Django"
  },
  {
    skill: "Ruby"
  },
  {
    skill: "Rails"
  },
  {
    skill: "Ruby on rails"
  },
  {
    skill: "PHP"
  },
  {
    skill: "Mongo"
  },
  {
    skill: "mongoose"
  },
  {
    skill: "mysql"
  },
  {
    skill: "firebase"
  },
  {
    skill: "MS SQL"
  },
  {
    skill: "Oracle"
  },
  {
    skill: "SQL"
  },
  {
    skill: "Java"
  }, 
  {
    skill: "C#"
  },
  {
    skill: "C++"
  },
  {
    skill: "C"
  },
  {
    skill: "ASP.net"
  }
];

db.SkillSet
  .remove({})
  .then(() => db.SkillSet.collection.insertMany(skillSetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
