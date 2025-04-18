let mongoose = require("mongoose");

let userEnquirySchema = mongoose.Schema({
  name: {
    required: true,  // Corrected property
    type: String      // Use String instead of "string"
  },
  email: {
    required: true,   // Corrected property
    type: String,     // Use String instead of "string"
    unique: true      // Unique constraint
  },
  phone: {
    required: true,   // Corrected property
    type: String,     // Use String instead of "string"
    unique: true      // Unique constraint
  },
  message: {
    required: true,   // Corrected property
    type: String      // Use String instead of "string"
  }
});

let enquiryModel = mongoose.model("enquiry", userEnquirySchema);

module.exports = enquiryModel;
