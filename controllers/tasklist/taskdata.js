const TaskModelData = require("../../models/taskMode");

const TaskData = {
  async getAllTaskData(req, res, next) {
    const getAllTaskData = await TaskModelData.find();
    res.status(200).json({ msg: "All data", getAllTaskData: getAllTaskData });
  },
  async addTask(req, res, next) {
    // console.log('Req', req)
    try {
      const createTaskResponse = await TaskModelData.create(req.body);
      return res.status(200).json({ msg: "sucess", createTaskResponse });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({ error: error.message });
    }
  },
  async getSingleTask(req, res, next) {
    const { id: taskId } = req.params;
    console.log("TaskId", taskId);
    try {
      const SingleTaskData = await TaskModelData.findOne({ _id: taskId });
      if (!SingleTaskData) {
        return res.status(401).json({ error: "NO task with this id" });
      }
      return res.status(200).json({ data: SingleTaskData });
    } catch (error) {
      return res.status(500).json({ msg: "somethingb went wromng" });
    }
  },

  async deleteTask(req, res, next) {
    const { id: taskId } = req.params;
    try {
      const deleteTaskData = await TaskModelData.findOneAndDelete({
        _id: taskId,
      });
      if (!deleteTaskData) {
        return res.status(401).json({ error: "NO task with this id" });
      }
      return res.status(200).json({ msg: "sucess", deleteTaskData });
    } catch (error) {
      return res.status(500).json({ msg: "somethingb went wromng" });
    }
  },

  async updateTask(req, res, next) {
    const { id: taskId } = req.params;
    try {
      const updateTaskResponse = await TaskModelData.findByIdAndUpdate(
        { _id: taskId },
        req.body
      );
      if (!updateTaskResponse) {
        return res.status(401).json({ error: "NO task with this id" });
      }
      return res.status(200).json({ msg: "sucess", updateTaskResponse });
    } catch (error) {
      return res.status(500).json({ msg: "somethingb went wromng" });
    }
  },
};
module.exports = TaskData;
