/*
 * Title: Sample Handler
 * Description: Sample Handler Route
 * Author: Md. Tanin Rahman
 * Date: 05/10/2024
 * 
*/

// Module Scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  callback(200, {
    message: 'This is a Sample route response'
  })
}

// Exporting the Handler
module.exports = handler;