const router = require("express").Router();

const AutoController = require("../../controllers/AutoController");
 // get all records (read) 
router.route("/api/auto")
.get(AutoController.findAll)
// get one record with id  (read)
router.route("/api/auto/:id")
.get(AutoController.findOne)
//  post json file to database (create)
router.route("/api/auto")
.post(AutoController.create)
//  delete record from database by id  (delete)
router.route("/api/auto/:id")
.delete(AutoController.remove)
// update record in database by id (update)
router.route("/api/auto")
.patch(AutoController.update)

module.exports = router;




