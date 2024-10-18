/*
 * Title: Data Management
 * Description: Handle Data Management.
 * Author: Md. Tanin Rahman
 * Date: 05/10/2024
 * 
*/

// Dependencies
const fs = require('fs');
const path = require('path');

// Module Scaffolding
const lib = {};

// Base Directory of the data folder
lib.baseDir = path.join(__dirname, '../.data/');

// Create a file
lib.create = function (dir, file, data, callback) {
  // Open the file for writing
  fs.open(lib.baseDir + dir + '/' + file + ".json", "wx", function (err, fileDescriptor) {
    if (!err && fileDescriptor) {
      // Convert data to string
      const stringData = JSON.stringify(data);
      // Write to file 
      fs.writeFile(fileDescriptor, stringData, function (err) {
        if (!err) {
          fs.close(fileDescriptor, function (err) {
            if (!err) {
              callback(false);
            } else {
              callback("Error closing file");
            }
          });
        } else {
          callback("Error writing to file");
        }
      });
    } else {
      callback("Couldn't create new file, it may already exists!");
    }
  })
}

// Read File
lib.read = function (dir, file, callback) {
  fs.readFile(lib.baseDir + dir + '/' + file + ".json", "utf8", function (err, data) {
    if (!err && data) {
      const parsedData = JSON.parse(data);
      callback(false, parsedData);
    } else {
      callback(err, data);
    }
  });
}

// Update File
lib.update = function (dir, file, data, callback) {
  fs.open(`${lib.baseDir + dir}/${file}.json`, "r+", function (err, fileDescriptor) {
    if (!err && fileDescriptor) {
      const stringData = JSON.stringify(data);
      fs.ftruncate(fileDescriptor, function (err) {
        if (!err) {
          fs.writeFile(fileDescriptor, stringData, function (err) {
            if (!err) {
              fs.close(fileDescriptor, function (err) {
                if (!err) {
                  callback(false);
                } else {
                  callback("Error closing file");
                }
              });
            } else {
              callback("Error writing to file");
            }
          } )
        } else {
          callback("Error truncating file");
        }
      });
    } else {
      callback("Couldn't open the file for updating, it may not exist!");
    }
  })
};

// Delete File
lib.delete = function (dir, file, callback) {
  fs.unlink(`${lib.baseDir + dir}/${file}.json`, function (err) {
    if (!err) {
      callback(false);
    } else {
      callback("Error deleting file");
    }
  });
}

module.exports = lib;

