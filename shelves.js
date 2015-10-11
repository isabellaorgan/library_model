// 'use strict';

$(document).ready(function () {

var horrorBooks = [],
    mysteryBooks = [],
    sciFiBooks = [];

var horror = function(books) {
  horrorBooks = [];
  _.forEach(books, function(books) {
    if (books.shelf === "horror" && books.aorr === "onshelf") {
      horrorBooks.push('<input type="button" value="Remove" onclick="' + books.idNum +  '.removeBook()"> ' + books.title + ' by ' + books.author + '<br>');
    }
  });
$(function() {
  $("#hb").html(horrorBooks);
});
$("#hb").html(horrorBooks);
};

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

});
