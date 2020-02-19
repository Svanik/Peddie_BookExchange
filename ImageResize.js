const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "7fY7FODdcI",
  password: "8Nq9eWvZDS",
  database: "7fY7FODdcI",
  port:3306
});
/**
  The imagePath and outputImagePath must be changed to the server's path.
*/

const imagePath = 'D:/MyProfile/Documents/Programming/Peddie Book Exchange/SystemMaintenance/TestImage';
const outputImagePath = 'D:/MyProfile/Documents/Programming/Peddie Book Exchange/SystemMaintenance/OutputImage';

/**
  We will need naming convention for pictures which are uploaded and will be stored in the server
  The ImageResize function will get the name(from the convention above) of the picture and resize it
  and save it in the outputImagePath.
  The function will return the Path for the resized picture.

  KP & Ellen
*/
function ImageResize(fileName) {
  sharp(path.join(imagePath, fileName))
    .resize(512,512)
    .toFile(path.join(outputImagePath, fileName))
    .then(() => {
      //fs.writeFileSyne('cat1.jpg', data);
    });
    return path.join(outputImagePath, fileName);
}

ImageResize('dog1.jpg');
