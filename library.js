'use strict';

var shelf = require('./shelves.js');

var libraryModule = (function() {
  return {
    addShelf: function(genreName) {
      console.log("Add " + genreName + " shelf to library.");
      return libraryModule;
    },
    removeShelf: function(genreName) {
      delete libraryModule[genreName.name];
      console.log("Remove " + genreName + " shelf from library.");
    }
  };
})();

exports.libraryModule = libraryModule;
