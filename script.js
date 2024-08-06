;const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está no último minuto de uma final de campeonato, e seu time acaba de ganhar um escanteio. Qual a sua decisão?",
        alternativas: [
            {
                texto: "Cruzar a bola na área e tentar o cabeceio.",
                afirmacao: "Decidiu ir para o tudo ou nada e tentou marcar o gol da vitória."
            },
            {
                texto: "Passar a bola para o companheiro mais próximo para garantir a posse.",
                afirmacao: "Preferiu manter o controle e assegurar o empate, evitando o contra-ataque adversário."
            }
        ]
    },
    {
        enunciado: "Durante o treino, o técnico pede que você foque em uma habilidade específica. O que você escolhe?",
        alternativas: [
            {
                texto: "Treinar finalizações para melhorar sua precisão no gol.",
                afirmacao: "Focou em melhorar suas habilidades de finalização e agora é um artilheiro confiável."
            },
            {
                texto: "Aprimorar sua resistência física para suportar o ritmo intenso do jogo.",
                afirmacao: "Trabalhou na sua resistência, permitindo que jogue em alto nível durante os 90 minutos."
            }
        ]
    },
    {
        enunciado: "Seu time está perdendo e o técnico faz uma substituição estratégica. Qual o seu papel agora?",
        alternativas: [
            {
                texto: "Assumir uma postura mais ofensiva e pressionar o adversário.",
                afirmacao: "Você assumiu um papel ofensivo, criando chances e motivando a equipe a buscar o empate."
            },
            {
                texto: "Ajudar a defesa a fechar os espaços e evitar mais gols.",
                afirmacao: "Você recuou para ajudar na defesa, estabilizando o time e evitando uma derrota maior."
            }
        ]
    },
    {
        enunciado: "No vestiário, seu capitão pede uma sugestão para melhorar a dinâmica da equipe. O que você sugere?",
        alternativas: [
            {
                texto: "Fortalecer a comunicação em campo para evitar erros de posicionamento.",
                afirmacao: "Sugestão aceitada! A comunicação melhorou, e a equipe se organizou melhor em campo."
            },
            {
                texto: "Treinar jogadas ensaiadas para surpreender o adversário.",
                afirmacao: "Jogadas ensaiadas viraram a marca registrada da equipe, pegando os adversários de surpresa."
            }
        ]
    },
    {
        enunciado: "Você acaba de ser convocado para a seleção nacional. Como vai se preparar?",
        alternativas: [
            {
                texto: "Estudar vídeos dos adversários para identificar fraquezas.",
                afirmacao: "Estudou intensamente os adversários e se destacou no torneio, ajudando seu país a avançar."
            },
            {
                texto: "Focar na integração com os novos companheiros de equipe.",
                afirmacao: "Criou uma ótima conexão com os novos colegas, formando uma equipe coesa e difícil de bater."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Ao final da temporada...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
