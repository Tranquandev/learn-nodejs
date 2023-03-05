const {
  handleUploadSingleFile,
  handleUploadmutipleFiles,
  handleUploadFile,
} = require("../services/uploadServices");

const uploadFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({
      status: 400,
      message: "No file were uploaded",
    });
  }
  const response = await handleUploadFile(req.files.image);
  res.status(response.status).json(response);
};
module.exports = {
  uploadFile,
};
