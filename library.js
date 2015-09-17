'use strict';

var shelf = require('./shelves.js');

var libraryModule;
libraryModule = (function () {
  return {
    addShelf: function (genre) {
      console.log("Add " + genre + " shelf to library.");
      return libraryModule;
    },
    removeShelf: function (genre) {
      delete libraryModule[genre.name];
      console.log("Remove " + genre + " shelf from library.");
    }
  };
})();

exports.libraryModule = libraryModule;
