/*
 * Title: Not Found Handler
 * Description: Sample Handler Route
 * Author: Md. Tanin Rahman
 * Date: 05/10/2024
 * 
*/

// Module Scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: 'This is a Not Found route response'
  })
}

// Exporting the Handler
module.exports = handler;