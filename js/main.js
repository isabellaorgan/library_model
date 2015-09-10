var library = require('./library.js');

library.addshelf("Horror");
library.addshelf("Mystery");
library.addshelf("Ergodic");

library.shelves[0].addBook("Stephen King", "It");
library.shelves[1].addBook("Gillian Flynn", "Gone Girl");
library.shelves[3].addBook("Mark Z. Danielewski", "House of Leaves");

library.libraryContent();

library.shelves[0].removeBook(0);
library.removeShelf(1);

library.libraryContent();
