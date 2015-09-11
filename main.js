'use strict';

var library = require('./library.js');
var shelves = require('./shelves.js');
var books = require('./books.js');

books.bookModule.makeBook("Stephen King", "It", "Horror");
books.bookModule.makeBook("Gillian Flynn", "Gone Girl", "Mystery");
books.bookModule.makeBook("Mark Z. Danielewski", "House of Leaves", "Ergodic");

shelves.shelfModule.buildShelf("Horror");
shelves.shelfModule.deleteShelf("Horror");
shelves.shelfModule.addBook("Stephen King", "It", "Horror");
shelves.shelf.Module.removeBook("Stephen King", "It", "Horror");

library.libraryModule.addShelf("Horror");
library.libraryModule.removeShelf("Horror");
