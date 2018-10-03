const router = require("express").Router();

const ProfileController = require("../../controllers/ProfileController");
 // get all records (read) 
router.route("/api/profile")
.get(ProfileController.findAll)
// get one record with id  (read)
router.route("/api/profile/:id")
.get(ProfileController.findOne)
//  post json file to database (create)
router.route("/api/profile")
.post(ProfileController.create)
//  delete record from database by id 
router.route("/api/profile/:id")
.delete(ProfileController.remove)
// update record in database by id
router.route("/api/update")
.patch(ProfileController.update)

module.exports = router;




