const express=require('express');
const TaskData = require('../controllers/insex');
const router=express.Router();


router.route('/').get(TaskData.getAllTaskData).post(TaskData.addTask);
router.route('/:id').get(TaskData.getSingleTask).delete(TaskData.deleteTask).patch(TaskData.updateTask)


module.exports=router;