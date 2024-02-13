const btnAlterarTema = document.getElementById("botao-alterar-tema"); 
const body = document.querySelector("body");
const imgBtn = document.querySelector(".imagem-botao")

btnAlterarTema.addEventListener('click' , () => { // Adiciona um evento de "escuta" no botao e quando houver um "click" executa um bloco de codigo
    const darkModeOn = body.classList.contains("modo-escuro"); // Armazena true ou false por meio do "contains" (se contem determinada coisa = true / se nao = false)

    body.classList.toggle("modo-escuro")
    
    if(darkModeOn == true) { // Se o valor de darkModeOn for true, tira o modo escuro e troca o tema do site

        imgBtn.setAttribute("src" , "img/sun.png")
        
    } else { //  Se nao, ativa o modo escuro

        imgBtn.setAttribute("src", "img/moon.png")
    }

});