/*
* Title: Uptime Monitoring Application
* Description: A RESTFul API  to monitor up or down time of user    defined links.
 * Author: Md. Tanin Rahman
 * Date: 05/10/2024
 * 
*/

// Dependencies
const http = require('http');
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require('./helpers/environments');
const data = require('./lib/data');

// App Object - Module Scaffolding
const app = {};

// Create a Data
// data.create("test", "newFile", { name: "Tanin Rahman", position: "Software Developer" }, function (err) {
//   if (!err) {
//     console.log("Data created successfully.");
//   } else {
//     console.log("Error creating data.", err);
//   }
// })

// Read Data
// data.read("test", "newFile", function (err, data) {
//   if (!err && data) {
//     console.log("Data read successfully.", data);
//   } else {
//     console.log("Error reading data.", err);
//   }
// })

// Update Data
// data.update("test", "newFile", { name: "Justin Bieber", position: "Singer" }, function (err) {
//   if (!err) {
//     console.log("Data updated successfully.");
//   } else {
//     console.log("Error updating data.", err);
//   }
// })

// Delete File
data.delete("test", "newFile", function (err) {
  if (!err) {
    console.log("Data deleted successfully.");
  } else {
    console.log("Error deleting data.", err);
  }
})

// Create Server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`Server is running on port ${environment.port}`);
  });
}

// Handle Request Response
app.handleReqRes = handleReqRes;

app.createServer();