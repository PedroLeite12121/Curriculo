const section = document.getElementById('contatosText');

function menu() {
    if (section.style.maxHeight > "0px") { // checa se a section possui um valor diferente de 0 pra altura máxima / checa se está vísivel
        section.style.maxHeight = "0px"; // dá um valor de 0 pra altura máxima / esconde o texto
    } else {
        section.style.maxHeight = section.scrollHeight + "px";  // se a section não estiver com um valor máximo de altura (= 0, invisível), torna ela vísivel tornando seu valor para o valor padrão do conteúdo (+ "px" simplesmente adiciona px ao número da scrollheight) 
    }
}

//junção de tudo isso + propriedade de transition no css cria uma animação de aumento de altura
