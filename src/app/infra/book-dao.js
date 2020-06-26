class BookDao {
  constructor(db) {
    this._db = db;
  }

  list() {
    return new Promise((resolve, reject) => {
      this._db.all('SELECT * FROM livros', (error, results) => {
        if (error) return reject('Não foi possível listar os livros!');

        return resolve(results);
      });
    });
  }

  add(book) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `
        INSERT INTO LIVROS (
                titulo,
                preco,
                descricao
            ) values (?, ?, ?)
        `,
        [book.titulo, book.preco, book.descricao],
        function (err) {
          if (err) {
            console.log(err);
            return reject('Não foi possível adicionar o livro!');
          }

          resolve();
        }
      );
    });
  }
}

module.exports = BookDao;
