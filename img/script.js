// ==========================================
// AULA WEB113 - JAVASCRIPT E INTERATIVIDADE
// ==========================================

// Passo 1: Mensagem de boas-vindas ao carregar a página
alert("Bem-vindo(a) ao meu portfólio interativo!");

// Passo 2: Função do botão "Quem sou eu?"
function apresentacao() {
    alert("Olá! Sou estudante de Desenvolvimento Web e estou aprendendo JavaScript.");
}

// Passo 3: Função para alterar o título dinamicamente com prompt
function alterarTagTitulo() {
    let nomeUsuario = prompt("Digite o seu nome para personalizar o portfólio:");
    if (nomeUsuario) {
        document.getElementById("titulo-principal").innerHTML = "Portfólio de " + nomeUsuario;
    }
}

// Passo 4: Função para destacar a seção "Sobre Mim" mudando estilos via DOM
function destacarSobre() {
    let secaoSobre = document.getElementById("sobre");
    secaoSobre.style.backgroundColor = "#FFF3CD";
    secaoSobre.style.border = "2px solid #FFC107";
    secaoSobre.style.borderRadius = "10px";
}

// Passo 5: Contador de cliques interativo
let cliques = 0;
function contarClique() {
    cliques = cliques + 1;
    document.getElementById("contador").innerHTML = cliques;
}

// Desafio Extra: Modo Escuro (Dark Mode)
let modoDarkAtivo = false;
function modoEscuro() {
    if (!modoDarkAtivo) {
        // Ativar modo escuro
        document.body.style.backgroundColor = "#080808";
        document.body.style.color = "#090808";
        
        // Seleciona todos os cards e escurece o fundo deles
        let cards = document.querySelectorAll(".card");
        cards.forEach(function(card) {
            card.style.backgroundColor = "#16213e";
            card.style.color = "#ffffff";
            card.style.borderColor = "#0f3460";
        });
        modoDarkAtivo = true;
    } else {
        // Voltar ao modo normal (recarrega a página ou desfaz)
        location.reload(); 
    }
}