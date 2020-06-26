let tableBooks = document.querySelector('#livros');
tableBooks.addEventListener('click', (event) => {
    let elementClicked = event.target;

    if (elementClicked.dataset.type == 'remocao') {
        let bookId = elementClicked.dataset.ref;
        fetch(`http://localhost:3000/livros/${bookId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementClicked.closest(`#livro_${bookId}`);
                tr.remove();

            })
            .catch(erro => console.log(erro));

    }

});