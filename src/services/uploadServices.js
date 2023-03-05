const path = require("path");

const handleUploadFile = async (files) => {
  let imageUpload = files;
  if (Array.isArray(imageUpload)) {
    let responseData = {
      totalSuccess: 0,
      imgSuccess: [],
    };
    try {
      for (let index = 0; index < imageUpload.length; index++) {
        let uploadPath = path.join(
          __dirname +
            "/../public/images/upload/" +
            Date.now() +
            "_" +
            imageUpload[index].name
        );
        await imageUpload[index].mv(uploadPath);
        ++responseData.totalSuccess;
        responseData.imgSuccess.push({
          imgName: imageUpload[index].name,
          imgPath: Date.now() + "_" + imageUpload[index].name,
        });
      }
      return {
        status: 200,
        message: "upload files success",
        data: responseData,
      };
    } catch (err) {
      return {
        status: 400,
        message: err,
      };
    }
  } else {
    let uploadPath = path.join(
      __dirname +
        "/../public/images/upload/" +
        Date.now() +
        "_" +
        imageUpload.name
    );
    try {
      await imageUpload.mv(uploadPath);
      return {
        status: 200,
        message: "upload file success",
        data: {
          totalSuccess: 1,
          imgSuccess: [
            {
              image: imageUpload.name,
              path: Date.now() + "_" + imageUpload.name,
            },
          ],
        },
      };
    } catch (err) {
      return {
        status: 400,
        message: err,
      };
    }
  }
};
module.exports = {
  handleUploadFile,
};
