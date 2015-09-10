var Shelf = require('./shelves');

var library = {
  shelves: [],

  addShelf: function(genre) {
    this.shelves.push(new Shelf(genre));

    console.log("Add '" + category + "' shelf to library.");
  },

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
