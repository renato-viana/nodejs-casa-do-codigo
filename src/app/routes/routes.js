const BookDao = require('../infra/book-dao');
const db = require('../../config/database');

module.exports = (app) => {
  app.get('/', (req, resp) => {
    resp.send(
      `
            <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do Código </h1>
                    </body> 
                </html>
            `
    );
  });

  app.get('/livros', (req, resp) => {
    const bookDao = new BookDao(db);

    bookDao
      .list()
      .then((books) =>
        resp.marko(
            require('../views/books/list/list.marko'), 
            {
                books
            }
        ))
      .catch((error) => console.log(error));
  });
};
