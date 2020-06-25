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
        resp.marko(
            require('../views/books/list/list.marko'),
            {
                books: [
                    { 
                        id: 1,
                        title: 'Fundamentos do Node'
                    },
                    { 
                        id: 2,
                        title: 'Node Avançado'
                    }
                ]
            }
        );
    });
};