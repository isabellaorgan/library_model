//'use strict';

$(document).ready(function () {

var removedBooks = [];

var bookAorr = function(books) {
  removedBooks = [];
  _.forEach(books, function(books) {
    if (books.aorr === "removed") {
      removedBooks.push('<input type="button" value="Add" onclick="' + books.idNum + '.addBook()"> ' + books.title +  ' by ' + books.author + " (" + books.shelf + ")" + '<br>');
    }
  });

  // horror(books);
  // mystery(books);
  // sciFi(books);
  
  $(function() {
    $("#removed").html(removedBooks);
  });
};

bookAorr(books);


$("#addHorrorShelf").click(function() {
  $("#horror").show();
  });

$("#removeHorrorShelf").click(function() {
  $("#horror").hide();
  });

$("#addMysteryShelf").click(function() {
  $("#mystery").show();
  });

$("#removeMysteryShelf").click(function() {
  $("#mystery").hide();
  });

$("#addSciFiShelf").click(function() {
  $("#sciFi").show();
  });

$("#removeSciFiShelf").click(function() {
  $("#sciFi").hide();
  });


});
