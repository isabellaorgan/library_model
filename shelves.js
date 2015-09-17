'use strict';

var book = require('./books.js');

  var shelfModule = (function () {
  return {
    buildShelf: function (genre) {
      console.log("The " + genre + " shelf has been added to the library shelves.");
      return shelfModule[genre];
    },
    deleteShelf: function (genre) {
      delete shelfModule[genre];
      console.log("The " + genre + " shelf has been removed from the library.");
    },
    addBook: function (author, title, genre) {
      console.log("The book " + title + " by " + author + " has been shelved on the " + genre + " shelf.");
      return title;
    },
    removeBook: function (author, title, genre) {
      console.log("The book " + title + " by " + author + " has been removed from the " + genre + " shelf.");
      delete [book.bookTitle];
    }
  };
})();

exports.shelfModule = shelfModule;
