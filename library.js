'use strict';

var shelf = require('./shelves');

var libraryModule = (function () {
  return {
    addShelf: function(genreName) {
      return library[genreName.name] = genreName;
      console.log("Add " + genreName + " shelf to library.");
  };


  removeShelf: function(remove) {
    var removeShelf = this.shelves.splice(remove, 1);

    console.log("Remove '" + removeShelf[0].shelfGenre + "' from library.");
  },

  libraryContent: function() {
    console.log("Shelves in library");

    for (var i = 0; i < library.shelves.length; i++) {
      library.shelves[i].shelfContent();
    }
  }
};

exports.libraryModule = library;
