/*
* Title: Application Routes
* Description: Application Routes
 * Author: Md. Tanin Rahman
 * Date: 05/10/2024
 * 
*/

// Dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
  "sample": sampleHandler
}

module.exports = routes;