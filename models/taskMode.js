const Mongoose = require("mongoose");
const TaskSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  comppleted: {
    type: Boolean,
    default: false,
  }
});


module.exports=Mongoose.model('TempTask', TaskSchema);