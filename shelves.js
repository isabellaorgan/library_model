// 'use strict';

$(document).ready(function () {

var horrorBooks = [],
    mysteryBooks = [],
    sciFiBooks = [];

function horror(books) {
  horrorBooks = [];
  _.forEach(books, function(books) {
    if (books.shelf === "horror" && books.aorr === "onshelf") {
    horrorBooks.push('<input type="button" value="Remove" onclick="' + books.idNum +  '.removeBook()"> ' + books.title + ' by ' + books.author + '<br>');
    }
  });
    $("#hb").html(horrorBooks);
}

function mystery(books) {
  mysteryBooks = [];
  _.forEach(books, function(books) {
    if (books.shelf === "mystery" && books.aorr === "onshelf") {
      mysteryBooks.push('<input type="button" value="Remove" onclick="' + books.idNum + '.removeBook()"> ' + books.title + ' by ' + books.author + '<br>');
    }
  });
  $("#mb").html(mysteryBooks);
}

function sciFi(books) {
  sciFiBooks = [];
  _.forEach(books, function(books) {
    if (books.shelf === "scifi" && books.aorr === "onshelf") {
      sciFiBooks.push('<input type="button" value="Remove" onclick="' + books.idNum + '.removeBook()"> ' + books.title + ' by ' + books.author + '<br>');
    }
  });
  $("#sfb").html(sciFiBooks);
}

horror(books);
mystery(books);
sciFi(books);

var removedBooks = [];

var bookAorr = function(books) {
  removedBooks = [];
  _.forEach(books, function(books) {
    if (books.aorr === "removed") {
      removedBooks.push('<input type="button" value="Add" onclick="' + books.idNum + '.addBook()"> ' + books.title +  ' by ' + books.author + " (" + books.shelf + ")" + '<br>');
    }
  });
  
  $(function() {
    $("#allremoved").html(removedBooks);
  });
};

bookAorr(books);

});


