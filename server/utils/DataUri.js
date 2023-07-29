const DataUriParser = require("datauri/parser");
const path = require("path");

getDataUri = (file) => {
    const parser = new DataUriParser();

    const extName = path.extname(file.originalname);

    const fileUri=parser.format(extName, file.buffer);

    return fileUri;
}

module.exports = getDataUri;