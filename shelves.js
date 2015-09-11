'use strict';

var Book = require('./books');

function Shelf(genre) {
  this.shelfGenre = genre;
  this.book = [];
}

Shelf.prototype.addBook = function(author, title) {
  this.book.push(new Book(author, title));

  console.log("'" + title + "' by " + author);
  console.log("This book was added to '" + this.shelfName + "' shelf.");
};

Shelf.prototype.removeBook = function(remove) {
  var removeBook = this.book.splice(remove, 1);

  console.log("'" + removeBook[0].bookTitle + "' by " + removeBook[0].authorName);
  console.log("This book was removed from'" + this.shelfName + "' shelf.");
};

Shelf.prototype.shelfContent = function() {
  console.log(this.shelfName + "");

  for (var i = 0; i < this.book.length; i++) {
    console.log("'" + this.book[i].bookTitle + "' by " + this.book[i].authorName);
  }
};

exports.shelvesModule = shelves;
