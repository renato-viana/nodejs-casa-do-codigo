const BookDao = require('../infra/book-dao');
const db = require('../../config/database');
const bookDao = new BookDao(db);

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
    bookDao
      .list()
      .then((books) =>
        resp.marko(require('../views/books/list/list.marko'), {
          books,
        })
      )
      .catch((error) => console.log(error));
  });

  app.get('/livros/form', (_req, resp) => {
    resp.marko(require('../views/books/form/form.marko'));
  });

  app.post('/livros', (req, resp) => {
    console.log(req.body);

    bookDao
      .add(req.body)
      .then(resp.redirect('/livros'))
      .catch((error) => console.log(error));
  });
};
