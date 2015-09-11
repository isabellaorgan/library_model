'use strict';

var shelf = require('./shelves');

var libraryModule = (function () {
  return {
    addShelf: function(genreName) {
      return libraryModule[genreName.name] = genreName;
      console.log("Add " + genreName + " shelf to library.");
    }


    removeShelf: function(genreName) {
      delete libraryModule[genreName.name]
      console.log("Remove " + genreName + " from library.");
    }
  };
})();



exports.libraryModule = libraryModule();
