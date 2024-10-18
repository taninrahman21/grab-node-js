/*
 * Title: Environments
 * Description: Handle environment related all things.
 * Author: Md. Tanin Rahman
 * Date: 05/10/2024
 * 
*/

// Dependencies


// Module Scaffolding
const environments = {};

environments.staging = {
  port: 3000,
  envName: 'staging'
};

environments.production = {
  port: 5000,
  envName: 'production'
};

// Determine which environment is to be used
const currentEnv = typeof (process.env.NODE_ENV === 'string') ? process.env.NODE_ENV : "staging";


const environmentToExport = typeof (environments[currentEnv]) === 'object' ? environments[currentEnv] : environments.staging;

// Export the environment

module.exports = environmentToExport;