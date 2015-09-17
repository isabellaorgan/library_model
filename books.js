'use strict';

var bookModule = (function () {
  return {
    makeBook: function (author, title) {
      console.log("The book " + title + " by " + author + " has been added to the library.");
      return bookModule;
    }
  };
})();

exports.bookModule = bookModule;
