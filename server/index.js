const app = require("./app");
const port = process.env.PORT || 5000;
const cloudinary = require("cloudinary").v2;

const connetToDB = require("./db");

connetToDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    throw err;
  });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
