// 'use strict';

$(document).ready(function () {

var horrorBooks = [];
var mysteryBooks = [];
var sciFiBooks = [];

function horror(books) {
  horrorBooks = [];
  var newHb = $.map(books, function(books) {
    if (books.shelf === "horror" && books.aorr === "onshelf") {
  horrorBooks.push('<input type="submit" id="' + books.idNum + '" value="Remove" onclick="' + books.idNum +  '.removeBook()"> ' + books.title + ' by ' + books.author);
    }
  });
  $("#hb").html(horrorBooks);
}

function mystery(books) {
  mysteryBooks = [];
  var newMb = $.map(books, function(books) {
    if (books.shelf === "mystery" && books.aorr === "onshelf") {
    mysteryBooks.push('<input type="submit" value="Remove" onclick="' + books.idNum + '.removeBook()"> ' + books.title + ' by ' + books.author);
    }
  });
  $("#mb").html(mysteryBooks);
}

function sciFi(books) {
  sciFiBooks = [];
  var newSf = $.map(books, function(books) {
    if (books.shelf === "scifi" && books.aorr === "onshelf") {
    sciFiBooks.push('<input type="submit" value="Remove" onclick="' + books.idNum + '.removeBook()"> ' + books.title + ' by ' + books.author);
    }
  });
  $("#sfb").html(sciFiBooks);
}

horror(books);
mystery(books);
sciFi(books);
bookAorr(books);

});



