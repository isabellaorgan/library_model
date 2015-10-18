'use strict';

var Book = function(title, author, shelf, aorr, idNum) {
  this.title = title;
  this.author = author;
  this.shelf = shelf;
  this.aorr = aorr;
  this.idNum = idNum;

};

Book.prototype.removeBook = function() {
  this.aorr = "removed";
  console.log(this.title + " " + this.aorr);
  bookAorr(books);
   // $('#' + this.idNum).parent().toggle();

};

Book.prototype.addBook = function() {
  this.aorr = "onshelf";
  console.log(this.title + " " + this.shelf);
  bookAorr(books);
   // $('#' + this.idNum).parent().toggle();
};
  
var removedBooks = [];

function bookAorr(books) {
  removedBooks = [];
  var newrmvB = $.map(books, function(books) {
    if (books.aorr === "removed") {
    removedBooks.push('<input type="submit" id="' + books.idNum + '" value="Add" onclick="' + books.idNum + '.addBook()"> ' + books.title +  ' by ' + books.author);
    }
  });
  $("#allremoved").html(removedBooks);
}


var itSk = new Book("It", "Stephen King", "horror", "onshelf", "itSk");
var rdTh = new Book("Red Dragon", "Thomas Harris", "horror", "onshelf", "rdTh");
var wwCb = new Book("WeaveWorld", "Clive Barker", "horror", "onshelf", "wwCb");

var ggGf = new Book("Gone Girl", "Gillian Flynn", "mystery", "onshelf", "ggGf");
var dtSl = new Book("The Girl With the Dragon Tattoo", "Stieg Larssen", "mystery", "onshelf", "dtSl");
var mfDh = new Book("The Maltese Falcon", "Dashiell Hammett", "mystery", "onshelf", "mfDh");

var tmAw = new Book("The Martian", "Andy Weir", "scifi", "onshelf", "tmAw");
var cbaCfb = new Book("Code Breakers: Alpha", "Colin F. Barnes", "scifi", "onshelf", "cbaCfb");
var dFh = new Book("Dune", "Frank Herbert", "scifi", "onshelf", "dFh");

var books = [itSk, rdTh, wwCb, ggGf, dtSl, mfDh, tmAw, cbaCfb, dFh];

