// 'use strict';

$(document).ready(function () {

var horrorBooks = [],
    mysteryBooks = [],
    sciFiBooks = [];

function horror(books) {
  horrorBooks = [];
  _.forEach(books, function(books) {
    if (books.shelf === "horror" && books.aorr === "onshelf") {
    var newHb = horrorBooks.push('<input type="submit" id="itSk" value="Remove" onclick="' + books.idNum +  '.removeBook()"> ' + books.title + ' by ' + books.author);
    }
  });
    $("#hb").html(horrorBooks);
}

function mystery(books) {
  mysteryBooks = [];
  _.forEach(books, function(books) {
    if (books.shelf === "mystery" && books.aorr === "onshelf") {
      var newMb = mysteryBooks.push('<input type="submit" id="mb" value="Remove" onclick="' + books.idNum + '.removeBook()"> ' + books.title + ' by ' + books.author);
    }
  });
  $("#mb").html(mysteryBooks);
}

function sciFi(books) {
  sciFiBooks = [];
  _.forEach(books, function(books) {
    if (books.shelf === "scifi" && books.aorr === "onshelf") {
      var newSf = sciFiBooks.push('<input type="submit" id="sfb" value="Remove" onclick="' + books.idNum + '.removeBook()"> ' + books.title + ' by ' + books.author);
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
      var newrmvB = removedBooks.push('<input type="submit" id="rdTh" value="Add" onclick="' + books.idNum + '.addBook()"> ' + books.title +  ' by ' + books.author + " (" + books.shelf + ")" + '<br>');
    }
  });
  $("#allremoved").html(removedBooks);
};

bookAorr(books);

});




