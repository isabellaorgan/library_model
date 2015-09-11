'use strict';

var book = require('./books.js');

var shelfModule = (function () {
  return {
    buildShelf: function(genreName) {
      return shelfModule[genreName];
    },
    deleteShelf: function(genreName) {
      delete shelfModule[genreName];
      console.log("The " + genreName + " shelf has been removed from the library.");
    },
    addBook: function(author, title, genre) {
      console.log("The book " + title + " has been shelved.");
      return title;
    },
    removeBook: function(author, title, genre) {
      console.log("The book " + title + " has been removed from the shelf.");
      delete [book.bookTitle];
    }
  };
})();

exports.shelvesModule = shelfModule;
