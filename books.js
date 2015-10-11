//'use strict';

var Book = function(title, author, shelf, aorr, idNum) {
  this.title = title;
  this.author = author;
  this.shelf = shelf;
  this.aorr = aorr;
  this.idNum = idNum;
  this.removeBook = function() {
    this.aorr = "removed";
    console.log(this.title + " " + this.aorr);
    bookAorr(books);
  };
  this.addBook = function() {
    this.aorr = "onshelf";
    console.log(this.title + " " + this.aorr);
    // bookAorr(books);
  };
};

var itSk = new Book("It", "Stephen King", "horror", "onshelf", "itSk");
var rdTh = new Book("Red Dragon", "Thomas Harris", 'horror', 'removed', 'rdTh');
var wwCb= new Book("WeaveWorld", "Clive Barker", "horror", 'onshelf', 'wwCb');

// var goneGirl = new Book("Gone Girl", "Gillian Flynn", "mystery", "removed");
// var dragonTattoo = new Book("The Girl With the Dragon Tattoo", "Stieg Larssen", "mystery", "onshelf");
// var goneGirl = new Book("The Maltese Falcon", "Dashiell Hammett", "mystery", "onshelf");

// var theMartian = new Book("The Martian", "Andy Weir", "scifi", "onshelf");
// var theMartian = new Book("The Martian", "Andy Weir", "scifi", "onshelf");
// var theMartian = new Book("The Martian", "Andy Weir", "scifi", "removed");

var books = [itSk, rdTh, wwCb];
