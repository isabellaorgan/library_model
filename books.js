'use strict';

var bookModule = (function () {
  return {
    makeBook: function(author, title, genre) {
      console.log("The book " + title + "has been added to the library.");
      return bookModule;
    }
  };
})();

exports.bookModule = bookModule;
