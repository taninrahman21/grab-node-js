/*
 * Title: Handle Request and Response Function
 * Description: Handle Req and Response Function.
 * Author: Md. Tanin Rahman
 * Date: 05/10/2024
 * 
*/

// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');


// Module Scaffolding
const handler = {};

// Function to handle
handler.handleReqRes = (req, res) => {

  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryObject = parsedUrl.query;
  const headerObject = req.headers;

  const decoder = new StringDecoder('utf8');
  let realData = "";

  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryObject,
    headerObject
  };

  const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  })

  
  req.on("end", () => {
    realData += decoder.end();

    chosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof (statusCode) === 'number' ? statusCode : 500;
      payload = typeof (payload) === 'object' ? payload : {};

      const payloadString = JSON.stringify(payload);

      res.writeHead(statusCode);
      res.end(payloadString);
    });

    console.log(realData);

    // response handle
    res.end("Hello World!");
  })

  // console.log(headerObject);

}

module.exports = handler;