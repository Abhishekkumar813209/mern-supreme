import express from "express";
const router = express.Router();
import singleUpload from "../middlewares/multer.js";

import { 
        getAllCourse,
         createCourse ,
         getCourseLectures ,
         addLecture
       } from "../controllers/courseController.js";
import { isAuthenticated,authorizeAdmin } from "../middlewares/auth.js";

//Get All Courses without lectures
router.route("/courses").get(getAllCourse);


//Create new Course only admin
router.route("/createcourse").post(isAuthenticated,authorizeAdmin,singleUpload,createCourse);

// Add lectures , Delete Lectures , Get Course details
router
    .route("/course/:id")
    .get(isAuthenticated,getCourseLectures)
    .post(isAuthenticated,authorizeAdmin,singleUpload,addLecture)
    // .delete(isAuthenticated,authorizeAdmin,deleteCourse);

export default router;