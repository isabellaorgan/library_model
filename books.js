'use strict';

var Book = function(title, author, shelf, aorr, idNum) {
  this.title = title;
  this.author = author;
  this.shelf = shelf;
  this.aorr = aorr;
  this.idNum = idNum;
  this.removeBook = function() {
    this.aorr = "removed";
    console.log(this.title + " " + this.aorr);
    
  };
  this.addBook = function() {
    this.aorr = "onshelf";
    console.log(this.title + " " + this.aorr);

  };
};

var itSk = new Book("It", "Stephen King", "horror", "onshelf", "itSk");
var rdTh = new Book("Red Dragon", "Thomas Harris", "horror", "removed", "rdTh");
var wwCb = new Book("WeaveWorld", "Clive Barker", "horror", "onshelf", "wwCb");

var ggGf = new Book("Gone Girl", "Gillian Flynn", "mystery", "removed", "ggGf");
var dtSl = new Book("The Girl With the Dragon Tattoo", "Stieg Larssen", "mystery", "onshelf", "dtSl");
var mfDh = new Book("The Maltese Falcon", "Dashiell Hammett", "mystery", "onshelf", "mfDh");

var tmAw = new Book("The Martian", "Andy Weir", "scifi", "onshelf", "tmAw");
var cbaCfb = new Book("Code Breakers: Alpha", "Colin F. Barnes", "scifi", "onshelf", "cbaCfb");
var dFh = new Book("Dune", "Frank Herbert", "scifi", "removed", "dFh");

var books = [itSk, rdTh, wwCb, ggGf, dtSl, mfDh, tmAw, cbaCfb, dFh];
