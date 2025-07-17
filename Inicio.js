function pegarUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios_road")) || {};
}

function salvarUsuarios(usuarios) {
    localStorage.setItem("usuarios_road", JSON.stringify(usuarios));
}

function registrarUsuarios() {
    const nome = document.getElementById("registrar-nome").value.trim();
    const senha = document.getElementById("registrar-senha").value;
    const mensagem = document.getElementById("mensagem-registro");

    const usuarios = pegarUsuarios();

    if (!nome || !senha) {
        mensagem.textContent = "Preencha todos os campos, por favor :)";
        return;
    }

    if (usuarios[nome]) {
        mensagem.textContent = "Esse nome não é seu >:(";
        return;
    }

    usuarios[nome] = {
        senha: senha,
        personagem: {
            nome: nome,
            cena_atual : "Inicio",
            titulos : [],
            inventario : [],
            habilidades : [],
            magias : [],
            dinheiro : 0,
            ultimaDesc : "",
            cabou : false,
            cabou2 : false,
            suaVez : false,
            combateState: {
                ativo: false,
                ordem: [],
                indice: 0
            },
            attributes: {
                Vigor: 1,
                Força: 1,
                Destreza: 1, 
                Agilidade: 1,
                Carisma: 1, 
                Magia: 1, 
                Percepção: 1,
                Psicológico : 1
            },
            estado : {
                Vida : 12,
                Determinacao : 12, 
                Mana : 0, 
                Modificadores : []
            },
            inimigoAtual : {},
            inimigoAtual2 : {},
            inimigoAtual3 : {},
            inimigoAtual4 : {},
            inimigoAtual5 : {},
            inimigoAtual6 : {},
            aliadoAtual1 : {},
            aliadoAtual2 : {},
            aliadoAtual3 : {},
            aliadoAtual4 : {},
            aliadoAtual5 : {},
            progressoNPCs : {
                "conheceuAlice" : false,
                "parouBriga" : false,
                "venceuOscar" : false,
                "roubouRaffael" : false,
                "conheceuHeitor" : false,
                "economizou" : false,
                "conheceuPaula" : false,
                "conheceuJulia" : false,
                "conheceuN" : false,
                "conheceuAkane" : false,
                "conheceuVitor" : false,
                "conheceuJoão" : false,
                "conheceuYuri" : false,
                "conheceuLilian" : false,
                "conheceuCarla" : false,
                "conheceuHugo" : false,
                "conheceuMariana" : false,
            },
            estadoNPCs : {
                Alice : {
                    nome : "Alice", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Poção de Cura (x2)"],
                    habilidades : [],
                    magias : ["Bola de Fogo"],
                    dinheiro : 0,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 1, 
                        Agilidade: 1,
                        Carisma: 4, 
                        Magia: 4, 
                        Percepção: 4,
                        Psicológico : 4
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 36, 
                        Mana : 80, 
                        Modificadores : []
                    },
                }, 
                Oscar : {
                    nome : "Oscar", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Machado"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 5,
                    attributes: {
                        Vigor: 2,
                        Força: 2,
                        Destreza: 2, 
                        Agilidade: 2,
                        Carisma: 1, 
                        Magia: 1, 
                        Percepção: 1,
                        Psicológico : 2
                    },
                    estado : {
                        Vida : 24,
                        Determinacao : 24, 
                        Mana : 0, 
                        Modificadores : []
                    },
                }, 
                Heitor : {
                    nome : "Heitor", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Espada", "Machado"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 25,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 1, 
                        Agilidade: 1,
                        Carisma: 3, 
                        Magia: 1, 
                        Percepção: 1,
                        Psicológico : 1
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 12, 
                        Mana : 0, 
                        Modificadores : []
                    },
                }, 
                Lilian : {
                    nome : "Lilian", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Lança", "Poção de Cura (x4)"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 0,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 2, 
                        Agilidade: 1,
                        Carisma: 1, 
                        Magia: 2, 
                        Percepção: 1,
                        Psicológico : 1
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 12, 
                        Mana : 30, 
                        Modificadores : []
                    },
                }, 
                Raffael : {
                    nome : "Raffael", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Lança", "Poção de Cura"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 0,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 1, 
                        Agilidade: 1,
                        Carisma: 1, 
                        Magia: 3, 
                        Percepção: 1,
                        Psicológico : 1
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 12, 
                        Mana : 80, 
                        Modificadores : []
                    },
                }, 
                Paula : {
                    nome : "Paula", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Espada", "Poção de Cura"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 0,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 1, 
                        Agilidade: 4,
                        Carisma: 1, 
                        Magia: 1, 
                        Percepção: 1,
                        Psicológico : 1
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 12, 
                        Mana : 0, 
                        Modificadores : []
                    },
                }, 
                Julia : {
                    nome : "Julia", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Espada", "Poção de Cura (x3)"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 0,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 1, 
                        Agilidade: 1,
                        Carisma: 4, 
                        Magia: 1, 
                        Percepção: 1,
                        Psicológico : 4
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 48, 
                        Mana : 0, 
                        Modificadores : []
                    },
                }, 
                Carla : {
                    nome : "Carla", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : [],
                    habilidades : [],
                    magias : ["Bola de Fogo"],
                    dinheiro : 0,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 1, 
                        Agilidade: 2,
                        Carisma: 1, 
                        Magia: 1, 
                        Percepção: 4,
                        Psicológico : 3
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 36, 
                        Mana : 0, 
                        Modificadores : []
                    },
                }, 
                N0name : {
                    nome : "N", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Machado"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 5,
                    attributes: {
                        Vigor: 7,
                        Força: 3,
                        Destreza: 1, 
                        Agilidade: 1,
                        Carisma: 1, 
                        Magia: 1, 
                        Percepção: 1,
                        Psicológico : 1
                    },
                    estado : {
                        Vida : 84,
                        Determinacao : 12, 
                        Mana : 0, 
                        Modificadores : []
                    },
                }, 
                Hugo : {
                    nome : "Hugo", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Arco", "Flecha (x30)"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 0,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 4, 
                        Agilidade: 1,
                        Carisma: 1, 
                        Magia: 1, 
                        Percepção: 2,
                        Psicológico : 2
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 24, 
                        Mana : 0, 
                        Modificadores : []
                    },
                }, 
                Mariana : {
                    nome : "Mariana", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Arco", "Flecha (x30)", "Poção de Cura (x5)"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 0,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 1, 
                        Agilidade: 1,
                        Carisma: 1, 
                        Magia: 2, 
                        Percepção: 2,
                        Psicológico : 1
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 12, 
                        Mana : 30, 
                        Modificadores : []
                    },
                }, 
                Akane : {
                    nome : "Akane", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Espada"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 5,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 2, 
                        Agilidade: 1,
                        Carisma: 1, 
                        Magia: 2, 
                        Percepção: 2,
                        Psicológico : 2
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 24, 
                        Mana : 30, 
                        Modificadores : []
                    },
                }, 
                Yuri : {
                    nome : "Yuri", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Machado", "Poção de Cura (x3)"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 0,
                    attributes: {
                        Vigor: 3,
                        Força: 2,
                        Destreza: 2, 
                        Agilidade: 1,
                        Carisma: 1, 
                        Magia: 1, 
                        Percepção: 2,
                        Psicológico : 1
                    },
                    estado : {
                        Vida : 36,
                        Determinacao : 12, 
                        Mana : 0, 
                        Modificadores : []
                    },
                }, 
                João : {
                    nome : "João", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Lança"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 30,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 1, 
                        Agilidade: 2,
                        Carisma: 2, 
                        Magia: 1, 
                        Percepção: 1,
                        Psicológico : 1
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 12, 
                        Mana : 0, 
                        Modificadores : []
                    },
                }, 
                Vitor : {
                    nome : "Vitor", 
                    loot : ["Nada"], 
                    titulos : [],
                    inventario : ["Espada"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 5,
                    attributes: {
                        Vigor: 1,
                        Força: 1,
                        Destreza: 3, 
                        Agilidade: 2,
                        Carisma: 1, 
                        Magia: 1, 
                        Percepção: 2,
                        Psicológico : 1
                    },
                    estado : {
                        Vida : 12,
                        Determinacao : 12, 
                        Mana : 0, 
                        Modificadores : []
                    },
                }, 
            },
            posBatalha : ""
        }
    };

    salvarUsuarios(usuarios);
    mensagem.style.color = "#00FF00";
    mensagem.textContent = "Registro realizado com sucesso :D";
}

function entrarUsuarios() {
    const nome = document.getElementById("entrar-nome").value.trim();
    const senha = document.getElementById("entrar-senha").value;
    const mensagem = document.getElementById("mensagem-entrar");

    const usuarios = pegarUsuarios();

    if (!usuarios[nome] || usuarios[nome].senha !== senha) {
        mensagem.textContent = "Usuário ou senha incorretos :(";
        return;
    }

    if (usuarios[nome].personagem.cena_atual == "Inicio"){
        localStorage.setItem("usuario_ativo_road", nome);
        mensagem.style.color = "#00FF00";
        mensagem.textContent = "Login bem-sucedido! Redirecionando... :O";
        setTimeout(() => {
            window.location.href = "Inicio.html"; 
        }, 1500);
    }
    else{
        mensagem.style.color = "#FF0000";
        mensagem.textContent = "Algo deu Errado :(";
    }
}

let pontosDisponiveis = 60;
const pontosSpan = document.getElementById("pontos");
const atributos = document.querySelectorAll(".atributo");

atributos.forEach(atributo => {
    const valorSpan = atributo.querySelector(".valor");
    const btnAdicionar = atributo.querySelector(".adicionar");
    const btnSubtrair = atributo.querySelector(".subtrair");
    const custo = parseInt(atributo.getAttribute("data-custo"));

    btnAdicionar.addEventListener("click", () => {
        if (pontosDisponiveis >= custo) {
            let valorAtual = parseInt(valorSpan.textContent);
            valorSpan.textContent = valorAtual + 1;
            pontosDisponiveis -= custo;
            pontosSpan.textContent = pontosDisponiveis;
        }
    });

    btnSubtrair.addEventListener("click", () => {
        let valorAtual = parseInt(valorSpan.textContent);
        if (valorAtual > 1) {
            valorSpan.textContent = valorAtual - 1;
            pontosDisponiveis += custo;
            pontosSpan.textContent = pontosDisponiveis;
        }
    });
});

const confirmarBtn = document.getElementById("confirmar");
confirmarBtn.addEventListener("click", () => {
    const nome = localStorage.getItem("usuario_ativo_road");
    const usuarios = pegarUsuarios();
    atributos.forEach(atributo => {
        const nome2 = atributo.querySelector("span").textContent.replace(":", "");
        const valor = parseInt(atributo.querySelector(".valor").textContent);
        usuarios[nome].personagem.attributes[nome2] = valor;
    });
    usuarios[nome].personagem.dinheiro = pontosDisponiveis;
    usuarios[nome].personagem.estado.Vida = usuarios[nome].personagem.attributes.Vigor * 12;
    usuarios[nome].personagem.estado.Determinacao = usuarios[nome].personagem.attributes.Psicológico * 12;
    usuarios[nome].personagem.estado.Mana = (usuarios[nome].personagem.attributes.Magia ** 2) * 10 - 10;
    usuarios[nome].personagem.cena_atual = "Tutorial";
    salvarUsuarios(usuarios);
    alert("Personagem criado com sucesso! Redirecionando para a primeira cena...");
    window.location.href = "Cenas.html";
});