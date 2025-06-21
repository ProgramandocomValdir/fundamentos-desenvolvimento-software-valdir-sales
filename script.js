function mostrarMensagem() {
    const mensagem = "Olá, seja bem-vindo(a)! Obrigado por visitar meu site!";
    const div = document.getElementById("mensagem");
    div.textContent = mensagem;
    
    div.scrollIntoView({behavior:
    "smooth"
    });

    setTimeout(function() {
        div.textContent = "";
    }, 5000)
}
