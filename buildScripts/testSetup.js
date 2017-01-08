/**
 * Created by rbaryla on 08.01.2017.
 */

// Register babel to transpile before our test run.
require('babel-register')();

// Disable webpack futures that Mocha dosen't understand.
require.extensions['.css'] = function () {

};
