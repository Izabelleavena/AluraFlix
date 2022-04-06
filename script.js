function adicionarFilme(){
    var inputFilmes = document.getElementById ('filme').value;
    if(inputFilmes.endsWith(".jpg")) {
        listaFilmesNaTela(inputFilmes);
    } else{
       alert ('endereço de filme inválido');
    }
        document.getElementById ('filme').value = "";
        document.getElementById ('inputNomeFilme').value = "";
}

function listaFilmesNaTela (filme) {
    var nomeFilmes = document.getElementById ('inputNomeFilme').value;
    var elementoFilmeFavorito = "<div>" + "<img src=" + filme + ">" + "<h3>" + nomeFilmes + "</h3>" + "</div>" ;
    var listaFilmes = document.getElementById ("filmes");
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilmeFavorito;
    document.getElementById ('filme').value = "";
    document.getElementById ('inputNomeFilme').value = "";
}