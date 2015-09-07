
// ### https://github.com/ddopson/node-segfault-handler ###


// var SegfaultHandler = require( 'segfault-handler' );


var log = console.log;
log(process.versions);
// var app = require( 'app' );
// var BrowserWindow = require( 'browser-window' );

// var on_ready = function() {
//   log( "ready" );
// };

// app.on( 'ready', on_ready );



// log( "ok" );
log('>>>1');
var app = require('app');  // Module to control application life.
log('>>>2');
var BrowserWindow = require('browser-window');  // Module to create native browser window.
log('>>>3');

// Report crashes to our server.
// require('crash-reporter').start();
log('>>>4');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;
log('>>>5');

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

log('>>>6');
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  log('>>>7');
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Open the devtools.
  mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});

log('>>>8');
















