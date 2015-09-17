'use strict';

var library = require('./library.js');
var shelves = require('./shelves.js');
var books = require('./books.js');


books.bookModule.makeBook("Gillian Flynn", "Gone Girl", "Mystery");
books.bookModule.makeBook("Mark Z. Danielewski", "House of Leaves", "Ergodic");

/** @namespace shelves.shelfModule */
books.bookModule.makeBook("Stephen King", "It", "Horror");
shelves.shelfModule.buildShelf("Horror");
shelves.shelfModule.deleteShelf("Horror");
shelves.shelfModule.buildShelf("Mystery");
shelves.shelfModule.deleteShelf("Mystery");
shelves.shelfModule.buildShelf("Ergodic");
shelves.shelfModule.deleteShelf("Ergodic");
shelves.shelfModule.addBook("Stephen King", "It", "Horror");shelves.shelfModule.removeBook("Stephen King", "It", "Horror");
shelves.shelfModule.addBook("Gillian Flynn", "Gone Girl", "Mystery");
shelves.shelfModule.removeBook("Gillian Flynn", "Gone Girl", "Mystery");
shelves.shelfModule.addBook("Mark Z. Danielewski", "House of Leaves", "Ergodic");
shelves.shelfModule.removeBook("Mark Z. Danielewski", "House of Leaves", "Ergodic");


