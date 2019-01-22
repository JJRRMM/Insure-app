const router = require("express").Router();

const ProfileController = require("../../controllers/ProfileController.js");
const StudentController = require("../../controllers/StudentController.js")
 // get all records (read) 
router.route("/api/profile")
.get(ProfileController.findAll)
// get one record with id  (read)
router.route("/api/profile/:id")
.get(ProfileController.findOne)
//  post json file to database (create)
router.route("/api/profile")
.post(ProfileController.create)
//  delete record from database by id  (delete)
router.route("/api/profile/:id")
.delete(ProfileController.remove)
// update record in database by id (update)
router.route("/api/update")
.patch(ProfileController.update)
// student controller get all students 
router.route("/")
.get(StudentController.getAllStudents)
// student controller get a single student 
// router.route("/:id")
// .get(studentController.getSingleStudent)

module.exports = router;




