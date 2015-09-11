'use strict';

var library = require('./library.js');
var shelves = require('./shelves.js');
var books = require('./books.js');

book.bookModule.makeBook("Stephen King", "It", "Horror");
book.bookModule.makeBook("Gillian Flynn", "Gone Girl", "Mystery");
book.bookModule.makeBook("Mark Z. Danielewski", "House of Leaves", "Ergodic");

shelf.shelfModule.makeShelf("Horror");
shelf.shelfModule.deleteShelf("Horror");
shelf.shelfModule.addBook("Stephen King", "It", "Horror");
shelf.shelf.Module.removeBook("Stephen King", "It", "Horror");

library.libraryModule.addShelf("Horror");
library.libraryModule.removeShelf("Horror");
