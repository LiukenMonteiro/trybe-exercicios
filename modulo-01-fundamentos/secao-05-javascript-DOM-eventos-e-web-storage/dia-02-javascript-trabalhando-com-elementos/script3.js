const pai = document.getElementById("pai");
const todosOsFilhos = pai.childNodes;

for (let index = todosOsFilhos.length-1; index >= 0; index -=1){
    const filhoAtual = todosOsFilhos[index];
    if(filhoAtual.id !== "elementoOndeVoceEsta"){
        filhoAtual.remove();
    }
}

const segundoEUltimoFilhoDoFilho = document.getElementById("segundoEUltimoFilhoDoFilho");
segundoEUltimoFilhoDoFilho.remove();