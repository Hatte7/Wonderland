function pegarUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios_road")) || {};
}

function salvarUsuarios(usuarios) {
    localStorage.setItem("usuarios_road", JSON.stringify(usuarios));
}

function salvarAgora(){
    const usuarios = pegarUsuarios();
    localStorage.setItem("usuarios_road", JSON.stringify(usuarios));
    alert("Salvo! :)");
}

function getUsuarioAtivo() {
    const nome = localStorage.getItem("usuario_ativo_road");
    if (!nome) {
        return null;
    }

    const usuarios = pegarUsuarios();
    const usuarioCompleto = usuarios[nome];

    if (!usuarioCompleto) {
        return null;
    }

    return {
        nome: nome,
        personagem: usuarioCompleto.personagem,
    };
}

function resetar(){
    const nome = localStorage.getItem("usuario_ativo_road");
    const usuarios = pegarUsuarios();
    usuarios[nome].personagem = {
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
                    inventario : ["Espada"],
                    habilidades : [],
                    magias : [],
                    dinheiro : 10,
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
    salvarUsuarios(usuarios);
    window.location.href = "Inicio.html";
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

function atualizarStatusTela(personagem) {
    document.getElementById("personagem-atual").textContent = personagem.nome + "\n\n";
    document.getElementById("titulos").textContent = "Títulos: " + "\n" + personagem.titulos.join(", \n") + "\n";
    document.getElementById("inventario").textContent = "Inventário: " + "\n" + personagem.inventario.join(", \n") + "\n";
    document.getElementById("habilidades").textContent = "Habilidades: " + "\n" + personagem.habilidades.join(", \n") + "\n";
    document.getElementById("magias").textContent = "Magias: " + "\n" + personagem.magias.join(", \n") + "\n";
    document.getElementById("dinheiro").textContent = "Dinheiro: " + "\n" + personagem.dinheiro + "\n";

    const a = personagem.attributes;
    document.getElementById("Vigor").textContent = `Vigor: ${a.Vigor}` + "\n";
    document.getElementById("Força").textContent = `Força: ${a.Força}` + "\n";
    document.getElementById("Destreza").textContent = `Destreza: ${a.Destreza}` + "\n";
    document.getElementById("Agilidade").textContent = `Agilidade: ${a.Agilidade}` + "\n";
    document.getElementById("Carisma").textContent = `Carisma: ${a.Carisma}` + "\n";
    document.getElementById("Magia").textContent = `Magia: ${a.Magia}` + "\n";
    document.getElementById("Percepção").textContent = `Percepção: ${a.Percepção}` + "\n";
    document.getElementById("Psicológico").textContent = `Psicológico: ${a.Psicológico}` + "\n";

    const e = personagem.estado;
    document.getElementById("Vida").textContent = `Vida: ${e.Vida}` + "\n";
    document.getElementById("Determinacao").textContent = `Determinação: ${e.Determinacao}` + "\n";
    document.getElementById("Mana").textContent = `Mana: ${e.Mana}` + "\n";
    document.getElementById("Modificadores").textContent = `Modificadores: \n ${e.Modificadores.join(", ")}` + "\n";

    const aliados = [
        personagem.aliadoAtual1,
        personagem.aliadoAtual2,
        personagem.aliadoAtual3,
        personagem.aliadoAtual4,
        personagem.aliadoAtual5
    ];

    for (let i = 0; i < 5; i++) {
        const aliado = aliados[i];
        const aliadoElement = document.getElementById(`aliado${i + 1}-status`);
        
        if (aliado && Object.keys(aliado).length > 0) {
            const aStatus = aliado.estado;
            aliadoElement.style.display = 'block';
            aliadoElement.textContent = `${aliado.nome} | Vida: ${aStatus.Vida} | Determinação: ${aStatus.Determinacao} | Mana: ${aStatus.Mana} | Modificadores: ${aStatus.Modificadores.join(", ")}`;
        } else {
            aliadoElement.style.display = 'none';
            aliadoElement.textContent = '';
        }
    }
}

let vez1 = true;
let lala = "";
let descricaoBatalha = "";
let turnoAcumulado = 0;
let contador = 0;
let batalhaFinalizada = 0;
let batalhadorPadrao = {}
let generico1 = {
    nome: "Pessoa Genérica com Espada",
    titulos : [],
    inventario : ["Espada"],
    habilidades : [],
    magias : [],
    dinheiro : 0,
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
}
let generico2 = {
    nome: "Pessoa Genérica com Lança",
    titulos : [],
    inventario : ["Lança"],
    habilidades : [],
    magias : [],
    dinheiro : 0,
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
}
let generico3 = {
    nome: "Pessoa Genérica com Machado",
    titulos : [],
    inventario : ["Machado"],
    habilidades : [],
    magias : [],
    dinheiro : 0,
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
}
let generico4 = {
    nome: "Pessoa Genérica",
    titulos : [],
    inventario : [],
    habilidades : [],
    magias : [],
    dinheiro : 0,
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
}
let generico5 = {
    nome: "Pessoa Genérica que sabe Bola de Fogo",
    titulos : [],
    inventario : [],
    habilidades : [],
    magias : ["Bola de Fogo"],
    dinheiro : 0,
    attributes: {
        Vigor: 1,
        Força: 1,
        Destreza: 1, 
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
}
let generico6 = {
    nome: "Pessoa Genérica com Arco",
    titulos : [],
    inventario : ["Arco"],
    habilidades : [],
    magias : [],
    dinheiro : 0,
    attributes: {
        Vigor: 1,
        Força: 1,
        Destreza: 1, 
        Agilidade: 1,
        Carisma: 1, 
        Magia: 1, 
        Percepção: 2,
        Psicológico : 1
    },
    estado : {
        Vida : 12,
        Determinacao : 12, 
        Mana : 30, 
        Modificadores : []
    },
}

const ACOES = {
    "soco" : function (player, inimigo) {
        if (player.estado.Determinacao <= 2){
            descricaoBatalha += "A determinação de " + player.nome + " acabou \n";
        }
        else{
            const acertoPlayer = player.attributes.Força + Math.floor(Math.random() * 6) + 8;
            const danoPlayer = player.attributes.Força * 2 + Math.floor(Math.random() * 6) + 1;
            const esquivaInimigo = inimigo.attributes.Percepção * 3 + Math.floor(Math.random() * 6) + 1;
            if (acertoPlayer >= esquivaInimigo){
                descricaoBatalha += player.nome + " acertou o soco em " + inimigo.nome + "\n";
                inimigo.estado.Vida = inimigo.estado.Vida - danoPlayer;
                inimigo.estado.Determinacao = inimigo.estado.Determinacao - 1;
            }
            else {
                descricaoBatalha += player.nome + " errou o soco em " + inimigo.nome + "\n";
                player.estado.Determinacao = player.estado.Determinacao - 2;
            }
        }
    },
    "espada" : function (player, inimigo) {
        if (player.estado.Determinacao <= 2){
            descricaoBatalha += "A determinação de " + player.nome + " acabou \n";
        }
        else{
            const acertoPlayer = player.attributes.Destreza * 3 + Math.floor(Math.random() * 6) + 1;
            const danoPlayer = player.attributes.Força + Math.floor(Math.random() * 6) + 6;
            const esquivaInimigo = inimigo.attributes.Percepção * 3 + Math.floor(Math.random() * 6) + 1;
            if (acertoPlayer >= esquivaInimigo){
                descricaoBatalha += player.nome + " corta " + inimigo.nome + " com a espada" + "\n";
                inimigo.estado.Vida = inimigo.estado.Vida - danoPlayer;
                inimigo.estado.Determinacao = inimigo.estado.Determinacao - 1;
            }
            else {
                descricaoBatalha += player.nome + " errou o corte em " + inimigo.nome + "\n";
                player.estado.Determinacao = player.estado.Determinacao - 2;
            }
        }
    },
    "lança" : function (player, inimigo) {
        if (player.estado.Determinacao <= 2){
            descricaoBatalha += "A determinação de " + player.nome + " acabou \n";
        }
        else{
            const acertoPlayer = player.attributes.Destreza + Math.floor(Math.random() * 6) + 6;
            const danoPlayer = player.attributes.Força + Math.floor(Math.random() * 6) * 3 + 1;
            const esquivaInimigo = inimigo.attributes.Percepção * 3 + Math.floor(Math.random() * 6) + 1;
            if (acertoPlayer >= esquivaInimigo){
                descricaoBatalha += player.nome + " perfura " + inimigo.nome + " com a lança" + "\n";
                inimigo.estado.Vida = inimigo.estado.Vida - danoPlayer;
                inimigo.estado.Determinacao = inimigo.estado.Determinacao - 1;
            }
            else {
                descricaoBatalha += player.nome + " errou a estocada em " + inimigo.nome + "\n";
                player.estado.Determinacao = player.estado.Determinacao - 2;
            }
        }
    },
    "machado" : function (player, inimigo) {
        if (player.estado.Determinacao <= 2){
            descricaoBatalha += "A determinação de " + player.nome + " acabou \n";
        }
        else{
            const acertoPlayer = player.attributes.Destreza + Math.floor(Math.random() * 6) * 3 + 1;
            const danoPlayer = player.attributes.Força * 3 + Math.floor(Math.random() * 6) + 1;
            const esquivaInimigo = inimigo.attributes.Percepção * 3 + Math.floor(Math.random() * 6) + 1;
            if (acertoPlayer >= esquivaInimigo){
                descricaoBatalha += player.nome + " acertou a machadada em " + inimigo.nome + "\n";
                inimigo.estado.Vida = inimigo.estado.Vida - danoPlayer;
                inimigo.estado.Determinacao = inimigo.estado.Determinacao - 1;
            }
            else {
                descricaoBatalha += player.nome + " errou a machadada em " + inimigo.nome + "\n";
                player.estado.Determinacao = player.estado.Determinacao - 2;
            }
        }
    },
    "bola de fogo" : function (player, inimigo) {
        if (player.estado.Determinacao <= 2){
            descricaoBatalha += "A determinação de " + player.nome + " acabou \n";
        }
        else if (player.estado.Mana <= 0){
            descricaoBatalha += "A mana de " + player.nome + " acabou";
        }
        else{
            const acertoPlayer = player.attributes.Percepção + Math.floor(Math.random() * 6) + 6;
            const danoPlayer = player.attributes.Magia * 3 + Math.floor(Math.random() * 6) + 1;
            const esquivaInimigo = inimigo.attributes.Agilidade * 3 + Math.floor(Math.random() * 6) + 1;
            if (acertoPlayer >= esquivaInimigo){
                descricaoBatalha += player.nome + " acertou a bola de fogo em " + inimigo.nome + "\n";
                inimigo.estado.Vida = inimigo.estado.Vida - danoPlayer;
                inimigo.estado.Determinacao = inimigo.estado.Determinacao - 1;
            }
            else {
                descricaoBatalha += player.nome + " errou a bola de fogo em " + inimigo.nome + "\n";
                player.estado.Determinacao = player.estado.Determinacao - 2;
            }
            player.estado.Mana = player.estado.Mana - 2;
        }
    },
    "pistola" : function (player, inimigo) {
        if (player.estado.Determinacao <= 2){
            descricaoBatalha += "A determinação de " + player.nome + " acabou \n";
        }
        else{
            const acertoPlayer = player.attributes.Destreza * 3 + Math.floor(Math.random() * 6) + 1;
            const danoPlayer = 11 + Math.floor(Math.random() * 6) + 1;
            const esquivaInimigo = inimigo.attributes.Percepção * 3 + Math.floor(Math.random() * 6) + 1;
            if (acertoPlayer >= esquivaInimigo){
                descricaoBatalha += player.nome + " acertou o tiro em " + inimigo.nome + "\n";
                inimigo.estado.Vida = inimigo.estado.Vida - danoPlayer;
                inimigo.estado.Determinacao = inimigo.estado.Determinacao - 1;
            }
            else {
                descricaoBatalha += player.nome + " errou o tiro em " + inimigo.nome + "\n";
                player.estado.Determinacao = player.estado.Determinacao - 2;
            }
        }
    },
    "poção de cura" : function (player, inimigo) {
        if (player.estado.Determinacao <= 2){
            descricaoBatalha += "A determinação de " + player.nome + " acabou \n";
            return;
        }

        const inventario = player.inventario;
        const itemRegex = /^Poção de Cura(?: \(x(\d+)\))?$/;
        const itemIndex = inventario.findIndex(i => itemRegex.test(i));

        if (itemIndex === -1) {
            descricaoBatalha += player.nome + " não tem mais Poções de Cura.\n";
            return;
        }
        
        const cura = Math.floor(Math.random() * 6) + 1;
        inimigo.estado.Vida += cura;
        if (inimigo.estado.Vida > inimigo.attributes.Vigor * 12){
            inimigo.estado.Vida = inimigo.attributes.Vigor * 12;
        }
        descricaoBatalha += player.nome + " usou uma poção de cura.\n";

        const itemString = inventario[itemIndex];
        const match = itemString.match(itemRegex);
        const currentQuantity = match[1] ? parseInt(match[1], 10) : 1;

        if (currentQuantity > 2) {
            inventario[itemIndex] = `Poção de Cura (x${currentQuantity - 1})`;
        } else if (currentQuantity === 2) {
            inventario[itemIndex] = "Poção de Cura";
        } else {
            inventario.splice(itemIndex, 1);
        }
    },
    "arco" : function (player, inimigo) {
        if (player.estado.Determinacao <= 2){
            descricaoBatalha += "A determinação de " + player.nome + " acabou \n";
            return;
        }

        const inventario = player.inventario;
        const itemRegex = /^Flecha(?: \(x(\d+)\))?$/;
        const itemIndex = inventario.findIndex(i => itemRegex.test(i));

        if (itemIndex === -1){
            descricaoBatalha += "As flechas de " + player.nome + " acabaram";
            return;
        }
        
        const acertoPlayer = player.attributes.Destreza + Math.floor(Math.random() * 6) + 6;
        const danoPlayer = player.attributes.Destreza * 3 + Math.floor(Math.random() * 6) + 1;
        const esquivaInimigo = inimigo.attributes.Percepção * 3 + Math.floor(Math.random() * 6) + 1;
        
        if (acertoPlayer >= esquivaInimigo){
            descricaoBatalha += player.nome + " acertou a flecha em " + inimigo.nome + "\n";
            inimigo.estado.Vida = inimigo.estado.Vida - danoPlayer;
            inimigo.estado.Determinacao = inimigo.estado.Determinacao - 1;

            const itemString = inventario[itemIndex];
            const match = itemString.match(itemRegex);
            const currentQuantity = match[1] ? parseInt(match[1], 10) : 1;

            if (currentQuantity > 2) {
                inventario[itemIndex] = `Flecha (x${currentQuantity - 1})`;
            } else if (currentQuantity === 2) {
                inventario[itemIndex] = "Flecha";
            } else {
                inventario.splice(itemIndex, 1);
            }
        }
        else {
            descricaoBatalha += player.nome + " errou a flecha em " + inimigo.nome + "\n";
            player.estado.Determinacao = player.estado.Determinacao - 2;
            const itemString = inventario[itemIndex];
            const match = itemString.match(itemRegex);
            const currentQuantity = match[1] ? parseInt(match[1], 10) : 1;

            if (currentQuantity > 2) {
                inventario[itemIndex] = `Flecha (x${currentQuantity - 1})`;
            } else if (currentQuantity === 2) {
                inventario[itemIndex] = "Flecha";
            } else {
                inventario.splice(itemIndex, 1);
            }
        }
    },
}

function acaoNPC(inimigo){
    const acoesNPC = ["soco", ...inimigo.inventario, ...inimigo.magias, ...inimigo.habilidades];
    let c = 0;
    let x = acoesNPC[Math.ceil((Math.floor(Math.random() * ((acoesNPC.length - 1) * 10))) / 10)];
    while (c == 0){
        c = 1;
        let x = acoesNPC[Math.ceil((Math.floor(Math.random() * ((acoesNPC.length - 1) * 10))) / 10)];
        if (x == "poção de cura" && inimigo.estado.Vida == inimigo.attributes.Vigor){
            c = 0;
        }
        if (x == "bola de fogo" && inimigo.estado.Mana <= 0){
            c = 0;
        }
    }
    return x;
}

function salvarProgressoCombate() {
    setarCombate(combatePlayer, combatePlayer.aliadoAtual1, combatePlayer.aliadoAtual2, combatePlayer.aliadoAtual3, combatePlayer.aliadoAtual4, combatePlayer.aliadoAtual5, combatePlayer.inimigoAtual, combatePlayer.inimigoAtual2, combatePlayer.inimigoAtual3, combatePlayer.inimigoAtual4, combatePlayer.inimigoAtual5, combatePlayer.inimigoAtual6, combatePlayer.posBatalha);
    const usuario = getUsuarioAtivo();
    if (!usuario) return;

    const usuarios = pegarUsuarios();

    usuarios[usuario.nome].personagem.ultimaDesc = document.getElementById("descricao").textContent;

    usuarios[usuario.nome].personagem.combateState = {
        ativo: batalhaEmGrupoAtiva,
        ordem: ordemDeTurno.map(c => c.nome),
        indice: indiceTurno
    };

    salvarUsuarios(usuarios);
}

let combatePlayer = {};
let combateAliados = [];
let combateInimigos = [];
let todosOsCombatentes = [];
let ordemDeTurno = [];
let indiceTurno = 0;
let batalhaEmGrupoAtiva = false;

function combateGrupo(acao, alvoAcao) {
    const isEmpty = obj => !obj || Object.keys(obj).length === 0;

    if (combatePlayer.cabou2 == true && combatePlayer.estado.Vida <= 0) {
        resetar();
        return;
    }
    if (combatePlayer.cabou2 == true){
        if (acao.toLowerCase() === 'continue') {
            const proxima = combatePlayer.posBatalha;
            combatePlayer.posBatalha = "";
            combatePlayer.cabou2 = false;
            combatePlayer.cabou = false;
            setarCombate(combatePlayer, combatePlayer.aliadoAtual1, combatePlayer.aliadoAtual2, combatePlayer.aliadoAtual3, combatePlayer.aliadoAtual4, combatePlayer.aliadoAtual5, {}, {}, {}, {}, {}, {}, proxima);
            limparAliadosMortos();
            batalhaEmGrupoAtiva = false;
            proximaCena(proxima);
        } else {
            document.getElementById("descricao").textContent += "\n\nDigite 'continue' para prosseguir.";
        }
        return;
    }

    if (acao === "inicioBatalha" && combatePlayer.suaVez == true){
        const alvoObj = todosOsCombatentes.find(c => c && c.nome.toLowerCase() === alvoAcao.toLowerCase());

        if (alvoObj && alvoObj.estado.Vida > 0) {
            ACOES[acao.toLowerCase()](combatePlayer, alvoObj);
            if (combatePlayer.estado.Determinacao < combatePlayer.attributes.Psicológico * 12) {
                 combatePlayer.estado.Determinacao++;
            }
        } else {
            alert(`Alvo '${alvoAcao}' inválido ou já derrotado!\n`);
            return;
        }
        
        indiceTurno++;
        return processarTurno();
    }
    else if (acao === "inicioBatalha") {
        batalhaEmGrupoAtiva = true;
        indiceTurno = 0;
        combatePlayer.cabou = false;
        descricaoBatalha = "Combate Iniciado!\n";

        todosOsCombatentes = [combatePlayer, ...combateAliados, ...combateInimigos].filter(c => !isEmpty(c));
        
        todosOsCombatentes.forEach(c => {
            if (!c.estado) c.estado = { Vida: 0 };
            if (!c.attributes) c.attributes = { Agilidade: 1 };
        });

        ordemDeTurno = [];
        let acumuladores = todosOsCombatentes.filter(c => c.estado.Vida > 0).map(c => ({ combatente: c, agiAcumulada: 0 }));
        if (acumuladores.length > 0) {
            const maxAgi = Math.max(...acumuladores.map(item => item.combatente.attributes.Agilidade), 1);
            while (ordemDeTurno.length < 100) { 
                for (const item of acumuladores) {
                    if (item.combatente.estado.Vida > 0) {
                        item.agiAcumulada += item.combatente.attributes.Agilidade;
                        if (item.agiAcumulada >= maxAgi) {
                            ordemDeTurno.push(item.combatente);
                            item.agiAcumulada -= maxAgi;
                        }
                    }
                }
                if (ordemDeTurno.length === 0 && acumuladores.length > 0) break;
            }
        }
        salvarProgressoCombate();
        return processarTurno();
    }

    if (acao !== "inicioBatalha") {
        const alvoObj = todosOsCombatentes.find(c => c && c.nome.toLowerCase() === alvoAcao.toLowerCase());

        if (alvoObj && alvoObj.estado.Vida > 0) {
            ACOES[acao.toLowerCase()](combatePlayer, alvoObj);
            if (combatePlayer.estado.Determinacao < combatePlayer.attributes.Psicológico * 12) {
                 combatePlayer.estado.Determinacao++;
            }
        } else {
            alert(`Alvo '${alvoAcao}' inválido ou já derrotado!\n`);
            return;
        }
        
        indiceTurno++;
        return processarTurno();
    }
}

function processarTurno() {
    const isEmpty = obj => !obj || Object.keys(obj).length === 0;

    let loopSeguranca = 0;
    while (loopSeguranca < 100) {
        loopSeguranca++;

        const aliadosVivos = [combatePlayer, ...combateAliados].filter(c => !isEmpty(c) && c.estado.Vida > 0);
        let inimigosVivos = combateInimigos.filter(c => !isEmpty(c) && c.estado.Vida > 0);

        if (combatePlayer.estado.Vida <= 0) {
            descricaoBatalha += "\nGame Over.\n";
            document.getElementById("descricao").textContent += descricaoBatalha;
            document.getElementById("opcoes").textContent = "Continuar";
            combatePlayer.cabou = true;
            combatePlayer.ultimaDesc = document.getElementById("descricao").textContent;
            setarCombate(combatePlayer, combatePlayer.aliadoAtual1, combatePlayer.aliadoAtual2, combatePlayer.aliadoAtual3, combatePlayer.aliadoAtual4, combatePlayer.aliadoAtual5, combatePlayer.inimigoAtual, combatePlayer.inimigoAtual2, combatePlayer.inimigoAtual3, combatePlayer.inimigoAtual4, combatePlayer.inimigoAtual5, combatePlayer.inimigoAtual6, combatePlayer.posBatalha);
            return;
        }

        if (inimigosVivos.length === 0) {
            descricaoBatalha += "\nVocê venceu!\n";
            salvarProgressoCombate();
            combateInimigos.forEach(inimigo => {
                if (!isEmpty(inimigo)) {
                    if (inimigo.dinheiro > 0) {
                        combatePlayer.dinheiro += inimigo.dinheiro;
                        descricaoBatalha += `${inimigo.nome} tinha ${inimigo.dinheiro} de dinheiro.\n`;
                    }

                    if (inimigo.loot && inimigo.loot.length > 0) {
                        const roleta = Math.floor(Math.random() * inimigo.loot.length);
                        const itemDropado = inimigo.loot[roleta];

                        if (itemDropado !== "Nada") {
                            descricaoBatalha += `${inimigo.nome} deixou um espólio: ${itemDropado}\n`;
                            adicionarAcao("inventario", itemDropado, 1);
                        } else {
                            descricaoBatalha += `${inimigo.nome} não deixou nenhum espólio.\n`;
                        }
                    } else {
                         descricaoBatalha += `${inimigo.nome} não deixou nenhum espólio.\n`;
                    }
                }
            });

            document.getElementById("descricao").textContent += descricaoBatalha;
            descricaoBatalha = "";
            
            document.getElementById("opcoes").textContent = "Continuar";
            combatePlayer.cabou = true;
            batalhaEmGrupoAtiva = true; 
            salvarProgressoCombate();
            atualizarStatusTela(combatePlayer);
            return;
        }
        
        if (indiceTurno >= ordemDeTurno.length) {
            indiceTurno = 0;
        }

        const personagemAtual = ordemDeTurno[indiceTurno];

        if (personagemAtual.estado.Vida <= 0) {
            indiceTurno++;
            continue;
        }

        if (personagemAtual.nome === combatePlayer.nome) {
            combatePlayer.suaVez = true;
            descricaoBatalha += `\nÉ a sua vez, ${combatePlayer.nome}!\n`;
            document.getElementById("descricao").textContent += descricaoBatalha;
            descricaoBatalha = "";
            const opcoesAtaque = ["Soco", ...combatePlayer.inventario, ...combatePlayer.magias, ...combatePlayer.habilidades];
            combateAliados = [
                combatePlayer.aliadoAtual1, combatePlayer.aliadoAtual2, combatePlayer.aliadoAtual3, combatePlayer.aliadoAtual4, combatePlayer.aliadoAtual5
            ].filter(a => a && Object.keys(a).length > 0);
            combateInimigos = [
                combatePlayer.inimigoAtual, combatePlayer.inimigoAtual2, combatePlayer.inimigoAtual3, combatePlayer.inimigoAtual4, combatePlayer.inimigoAtual5, combatePlayer.inimigoAtual6
            ].filter(e => e && Object.keys(e).length > 0);
            document.getElementById("opcoes").textContent = `${opcoesAtaque.join(" | ")}`;
            document.getElementById("opcoes").textContent += " \n \n ";
            lala = "";
            if (combateAliados != []){
                lala = " | ";
            }
            inimigosVivos = combateInimigos.filter(inimigo => inimigo.estado && inimigo.estado.Vida > 0);
            document.getElementById("opcoes").textContent += combatePlayer.nome + lala + combateAliados.map(str => str.nome).join(" | ") + " ||VS|| " + inimigosVivos.map(str => str.nome).join(" | ");
            salvarProgressoCombate();
            atualizarStatusTela(combatePlayer);
            return;
        }

        descricaoBatalha += `\nVez de: ${personagemAtual.nome}.\n`;
        const isAlly = aliadosVivos.some(a => a.nome === personagemAtual.nome);
        const alvosPotenciais = isAlly ? inimigosVivos : aliadosVivos;
        
        let alvo = null;
        if (alvosPotenciais.length > 0) {
            alvo = alvosPotenciais.sort((a, b) => a.estado.Vida - b.estado.Vida)[0];
        }

        if (alvo) {
            const acaoNPCEscolhida = acaoNPC(personagemAtual).toLowerCase();
            ACOES[acaoNPCEscolhida](personagemAtual, alvo);
            if (personagemAtual.estado.Determinacao < personagemAtual.attributes.Psicológico * 12) {
                personagemAtual.estado.Determinacao++;
            }
        }

        document.getElementById("descricao").textContent += descricaoBatalha;
        descricaoBatalha = "";
        const opcoesAtaque = ["Soco", ...combatePlayer.inventario, ...combatePlayer.magias, ...combatePlayer.habilidades];
        combateAliados = [
            combatePlayer.aliadoAtual1, combatePlayer.aliadoAtual2, combatePlayer.aliadoAtual3, combatePlayer.aliadoAtual4, combatePlayer.aliadoAtual5
        ].filter(a => a && Object.keys(a).length > 0);
        combateInimigos = [
            combatePlayer.inimigoAtual, combatePlayer.inimigoAtual2, combatePlayer.inimigoAtual3, combatePlayer.inimigoAtual4, combatePlayer.inimigoAtual5, combatePlayer.inimigoAtual6
        ].filter(e => e && Object.keys(e).length > 0);
        document.getElementById("opcoes").textContent = `${opcoesAtaque.join(" | ")}`;
        document.getElementById("opcoes").textContent += " \n \n ";
        lala = "";
        if (combateAliados != []){
            lala = " | ";
        }
        inimigosVivos = combateInimigos.filter(inimigo => inimigo.estado && inimigo.estado.Vida > 0);
        document.getElementById("opcoes").textContent += combatePlayer.nome + lala + combateAliados.map(str => str.nome).join(" | ") + " ||VS|| " + inimigosVivos.map(str => str.nome).join(" | ");
        salvarProgressoCombate();
        atualizarStatusTela(combatePlayer);
        
        indiceTurno++;
    }
}


const inimigos = {
    template : {
        nome : "Template", 
        loot : [], 
        titulos : [],
        inventario : [],
        habilidades : [],
        magias : [],
        dinheiro : 0,
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
    }, 
    esqueleto : {
        nome : "Esqueleto", 
        loot : ["Nada"], 
        titulos : [],
        inventario : [],
        habilidades : [],
        magias : [],
        dinheiro : 5,
        attributes: {
            Vigor: 1,
            Força: 1,
            Destreza: 1, 
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
    slime : {
        nome : "Slime", 
        loot : ["Núcleo de Slime"], 
        titulos : [],
        inventario : [],
        habilidades : [],
        magias : [],
        dinheiro : 0,
        attributes: {
            Vigor: 3,
            Força: 1,
            Destreza: 2, 
            Agilidade: 1,
            Carisma: 1, 
            Magia: 1, 
            Percepção: 1,
            Psicológico : 2
        },
        estado : {
            Vida : 36,
            Determinacao : 24, 
            Mana : 0, 
            Modificadores : []
        },
    }, 
}

const cenas = {

    Combate: {
        titulo: "Combate",
        descricao: "",
        opcoes: ["Soco", ...getUsuarioAtivo().personagem.inventario, ...getUsuarioAtivo().personagem.magias, ...getUsuarioAtivo().personagem.habilidades],
        palco : function(){

        },
        acoes: {
            lista : [],
            
        },
        frases: {
            lista : [],

        },
    },

    Template: {
        titulo: "Template",
        descricao: "em andamento",
        opcoes: ["opcao1", "opcao2", "opcao3", "opcao4"],
        palco : function(){

        },
        acoes: {
            lista : [],
            
        },
        frases: {
            lista : [],

        },
    },

    Tutorial: {
        titulo: "Capítulo 1 - Convite",
        descricao: "Um email chega para você! É um convite anônimo para participar de um jogo chamado 'Wonderland'! \n \n Para realizar ações, digite a ação desejada. \n Algumas opções de ações podem ser observadas abaixo de 'Ações'.",
        opcoes: ["Aceitar"],
        palco : function(){

        },
        acoes: {
            lista : ["aceitar"],
            "aceitar": function() {
                if (getUsuarioAtivo().personagem.attributes.Carisma >= 2){
                    salario(5);
                }
                if (getUsuarioAtivo().personagem.attributes.Carisma >= 5){
                    salario(30);
                } 
                proximaCena("Tutorial2");
            }
        },
        frases: {
            lista : [],

        },
    },

    Tutorial2: {
        titulo: "Capítulo 1 - Bem Vindos a Wonderland!",
        descricao: "Após aceitar o convite, você misteriosamente se encontra em um hall de hotel. \n Porém, você não é o único. Várias outras pessoas também estão em seu entorno e também parecem estar confusas. \n De repente, um coelho vestindo um terno e uma cartola aparece dizendo: \n \n Coelho: Olá meus queridos jogadores e bem vindos a Wonderland!! \n Coelho: Aqui, você jogarão uma série de jogos valendo suas vidas! \n Coelho: Quem entendeu, diga 'Entendi'! \n \n Para falar, digite sua frase entre aspas simples. \n 'Exemplo' \n Algumas frases podem ser observadas abaixo de 'Ações'. As frases estarão entre aspas simples ('Desse jeito').",
        opcoes: ["'Entendi'"],
        palco : function(){
            if (getUsuarioAtivo().personagem.attributes.Carisma >= 2){
                document.getElementById("logDivino").textContent += "A Deusa Rainha achou você bonito. \n A Deusa Rainha te patrocina com 5$. \n \n";
            }
            if (getUsuarioAtivo().personagem.attributes.Carisma >= 5){
                document.getElementById("logDivino").textContent += "Os Deuses Gêmeos acaharam você lindo. \n Os Deuses Gêmeos te patrocinam com 30$. \n \n";
            } 
        },
        acoes: {
            lista : [],
            
        },
        frases: {
            lista : ["entendi"],
            "entendi" : function() {
                if (getUsuarioAtivo().personagem.attributes.Psicológico >= 3){
                    salario(5);
                }
                if (getUsuarioAtivo().personagem.attributes.Psicológico >= 9){
                    salario(30);
                }
                proximaCena("Tutorial3");
            }
        },
    },

    Tutorial3: {
        titulo: "Capítulo 1 - Bem Vindos a Wonderland!",
        descricao: "Muitos responderam como o coelho pediu, porém algumas pessoas estavam inconformadas com a situação. \n \n Pessoa Aleatória: Ei, corta essa! Por que nós devemos jogar esse seu joguinho?? \n \n Ouvindo isso, o coelho libera uma aura avassaladora, deixando todos calados. \n A pressão foi tão grande que muitos cairam de joelhos (incluindo você), mas alguns poucos ficaram de pé. \n \n Coelho: Olha só... Parece que temos alguns indivíduos formidáveis dessa vez... \n Coelho: Enfim, vocês não tem escolha. Quem estiver pronto, entre por aquela porta. \n \n O coelho aponta para uma porta no final do hall.",
        opcoes: ["Entrar"],
        palco : function(){
            if (getUsuarioAtivo().personagem.attributes.Psicológico >= 3){
                document.getElementById("descricao").textContent = "Muitos responderam como o coelho pediu, porém algumas pessoas estavam inconformadas com a situação. \n \n Pessoa Aleatória: Ei, corta essa! Por que nós devemos jogar esse seu joguinho?? \n \n Ouvindo isso, o coelho libera uma aura avassaladora, deixando todos calados. \n A pressão foi tão grande que muitos cairam de joelhos, mas alguns poucos fiacaram de pé. \n Você também resiste essa intimidação e se mantém firme e forte frente ao Coelho. \n \n Coelho: Olha só... Parece que temos alguns indivíduos formidáveis dessa vez... \n Coelho: Enfim, vocês não tem escolha. Quem estiver pronto, entre por aquela porta. \n \n O coelho aponta para uma porta no final do hall.";
                document.getElementById("logDivino").textContent += "O Deus Rei fica impressionado com sua Determinação. \n O Deus Rei te patrocina com 5$. \n \n";
            }
            if (getUsuarioAtivo().personagem.attributes.Psicológico >= 9){
                document.getElementById("descricao").textContent = "Muitos responderam como o coelho pediu, porém algumas pessoas estavam inconformadas com a situação. \n \n Pessoa Aleatória: Ei, corta essa! Por que nós devemos jogar esse seu joguinho?? \n \n Ouvindo isso, o coelho tenta liberar uma aura avassaladora... \n Mas você emana uma presença tão grande e poderosa que o Coelho fica com receio de mexer com você. \n Não só o Coelho nota sua presença, como todos os outros participantes também. Todos ficam intimidados. \n \n Coelho: Ehem... Vocês não tem escolha. \n Quem estiver pronto, por favor entre por aquela porta. \n \n O coelho aponta para uma porta no final do hall.";
                document.getElementById("logDivino").textContent += "O Deus Antigo fica impressionado com tamanha Determinação. \n O Deus Antigo te patrocina com 30$. \n \n";
            }
        },
        acoes: {
            lista : ["entrar"],
            "entrar" : function (){
                salario(20);
                proximaCena("Tutorial4");
            }
        },
        frases: {
            lista : [],

        },
    },

    Tutorial4: {
        titulo: "Capítulo 1 - Sala de Preparo",
        descricao: "Ao passarem pela porta, os jogadores encontram uma sala com 3 armas em destaque. \n \n Coelho: A primeira missão de vocês vai ser conseguir 3 núcleos de slime. \n Coelho: Slimes podem ser encontrados ao longo da dungeon atrás da porta \n \n O coelho aponta para uma porta atrás das armas. \n \n Coelho: Para essa missão, todos vocês receberam 20$ para gastar. \n Coelho: Cada arma custa 15$, e se quiserem, podem gastar os 5$ restantes em uma poção de cura no estande no lado direito da sala. \n \n Na sua frente tem uma pilha de espadas, uma pilha de lanças e uma pilha de machados. \n No lado direito da sala, há um estande com poções de cura. \n Há algumas pessoas em choque, outras chorando... Mas algumas já reuniram coragem. \n Você percebe uma garota tentando organizar um grupo para realizar a missão. \n Você também percebe um garoto ameaçador brigando com um garoto tímido.",
        opcoes: ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"],
        palco : function(){
            if (getUsuarioAtivo().personagem.attributes.Percepção >= 2){
                if (vez1 == true){
                    document.getElementById("descricao").textContent += "\n Porém, você percebe que a porta da qual vocês vieram mudou. \n Invetsigando a porta, você descobre que ela guarda uma quarta arma. \n Um arco com 30 flechas. \n Parece que custa 15$ para pegar o arco e as flechas.";
                }
                document.getElementById("opcoes").textContent += " | Pegar o Arco";
                cenas.Tutorial4.acoes.lista.push("pegar o arco");
            }
            if (getUsuarioAtivo().personagem.attributes.Percepção >= 4) {
                if (vez1 == true){
                    document.getElementById("descricao").textContent += "\n Além disso, você também percebe que tem algo escondido no estande. \n Invetsigando, você descobre que há um livro escrito 'Bola de Fogo'. \n Parece que custa 20$ para ler o livro.";
                }
                document.getElementById("opcoes").textContent += " | Ler o Livro";
                cenas.Tutorial4.acoes.lista.push("ler o livro");
            }
            if (getUsuarioAtivo().personagem.attributes.Percepção >= 6) {
                if (vez1 == true){
                    document.getElementById("descricao").textContent += "\n Mas você também percebe uma pistola no canto da sala com o nome 'Ups' gravado nela \n Essa pistola parece estar aí faz muito tempo... \n Você se pergunta como ninguém percebeu ela ali. \n Também custa 15$ para pegar a pistola.";
                }
                document.getElementById("opcoes").textContent += " | Pegar Pistola";
                cenas.Tutorial4.acoes.lista.push("pegar pistola");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["venceuOscar"] == true){
                if (vez1 == true){
                    document.getElementById("descricao").textContent += "\n Oscar está caído no chão, desmaiado. Raffael parece estar feliz.";
                    getUsuarioAtivo().personagem.inimigoAtual = {}
                    document.getElementById("logDivino").textContent += "O Deus Forte se deleita com sua violência. \n O Deus Forte te patrocina com 15$. \n \n";
                    document.getElementById("logDivino").textContent += "A Magia sorri para você. \n \n";
                }
            }
            else if (getUsuarioAtivo().personagem.progressoNPCs["parouBriga"] == false){
                document.getElementById("opcoes").textContent += " | Intervir na Briga";
                cenas.Tutorial4.acoes.lista.push("intervir na briga");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuAlice"] == false){
                document.getElementById("opcoes").textContent += " | Falar com uma garota Louca";
                cenas.Tutorial4.acoes.lista.push("falar com uma garota louca");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuHeitor"] == false){
                document.getElementById("opcoes").textContent += " | Falar com um garoto indeciso";
                cenas.Tutorial4.acoes.lista.push("falar com um garoto indeciso");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuPaula"] == false){
                document.getElementById("opcoes").textContent += " | Falar com uma garota desesperada";
                cenas.Tutorial4.acoes.lista.push("falar com uma garota desesperada");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuJulia"] == false){
                document.getElementById("opcoes").textContent += " | Falar com uma garota organizando o grupo";
                cenas.Tutorial4.acoes.lista.push("falar com uma garota organizando o grupo");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuN"] == false){
                document.getElementById("opcoes").textContent += " | Falar com uma pessoa mascarada";
                cenas.Tutorial4.acoes.lista.push("falar com uma pessoa mascarada");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuAkane"] == false){
                document.getElementById("opcoes").textContent += " | Falar com uma garota asiática";
                cenas.Tutorial4.acoes.lista.push("falar com uma garota asiática");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuVitor"] == false){
                document.getElementById("opcoes").textContent += " | Falar com um garoto sorridente";
                cenas.Tutorial4.acoes.lista.push("falar com um garoto sorridente");
            }
            else{
                if (vez1 == true){
                    document.getElementById("descricao").textContent += "\n Vitor não consegue te matar... Ele vai embora.";
                    getUsuarioAtivo().personagem.inimigoAtual = {}
                    document.getElementById("logDivino").textContent += "O Deus Ceifador sussurra. \n O Deus Ceifador te patrocina com 30$. \n \n";
                }
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuJoão"] == false){
                document.getElementById("opcoes").textContent += " | Falar com um garoto irritado";
                cenas.Tutorial4.acoes.lista.push("falar com um garoto irritado");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuYuri"] == false){
                document.getElementById("opcoes").textContent += " | Falar com uma pessoa ansiosa";
                cenas.Tutorial4.acoes.lista.push("falar com uma pessoa ansiosa");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuLilian"] == false){
                document.getElementById("opcoes").textContent += " | Falar com uma garota calma";
                cenas.Tutorial4.acoes.lista.push("falar com uma garota calma");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuCarla"] == false){
                document.getElementById("opcoes").textContent += " | Falar com uma garota depressiva";
                cenas.Tutorial4.acoes.lista.push("falar com uma garota depressiva");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuHugo"] == false){
                document.getElementById("opcoes").textContent += " | Falar com um garoto aleatório";
                cenas.Tutorial4.acoes.lista.push("falar com um garoto aleatório");
            }
            if (getUsuarioAtivo().personagem.progressoNPCs["conheceuMariana"] == false){
                document.getElementById("opcoes").textContent += " | Falar com uma garota nervosa";
                cenas.Tutorial4.acoes.lista.push("falar com uma garota nervosa");
            }
        },
        acoes: {
            lista : ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"],
            "pegar a espada" : function () {
                if (getUsuarioAtivo().personagem.dinheiro >= 15){
                    document.getElementById("descricao").textContent += "\n Você pegou uma Espada!";
                    adicionarAcao("inventario", "Espada");
                    salario(-15);
                }
                else{
                    alert("Você não tem dinheiro :P");
                }
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "pegar o machado" : function () {
                if (getUsuarioAtivo().personagem.dinheiro >= 15){
                    document.getElementById("descricao").textContent += "\n Você pegou um Machado!";
                    adicionarAcao("inventario", "Machado");
                    salario(-15);
                }
                else{
                    alert("Você não tem dinheiro :P");
                }
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "pegar a lança" : function () {
                if (getUsuarioAtivo().personagem.dinheiro >= 15){
                    document.getElementById("descricao").textContent += "\n Você pegou uma Lança!";
                    adicionarAcao("inventario", "Lança");
                    salario(-15);
                }
                else{
                    alert("Você não tem dinheiro :P");
                }
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "ler o livro" : function () {
                if (getUsuarioAtivo().personagem.dinheiro >= 20){
                    document.getElementById("descricao").textContent += "\n Você aprendeu o feitiço da Bola de Fogo!";
                    adicionarAcao("magias", "Bola de Fogo");
                    salario(-20);
                }
                else{
                    alert("Você não tem dinheiro :P");
                }
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "pegar pistola" : function () {
                if (getUsuarioAtivo().personagem.dinheiro >= 15){
                    document.getElementById("descricao").textContent += "\n Você pegou a Pistola de Ups!";
                    adicionarAcao("inventario", "Pistola");
                    salario(-15);
                }
                else{
                    alert("Você não tem dinheiro :P");
                }
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "comprar poção" : function () {
                if (getUsuarioAtivo().personagem.dinheiro >= 5){
                    document.getElementById("descricao").textContent += "\n Você comprou uma Poção de Cura!";
                    adicionarAcao("inventario", "Poção de Cura", 1); 
                    salario(-5);
                }
                else{
                    alert("Você não tem dinheiro :P");
                }
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "pegar o arco" : function () {
                if (getUsuarioAtivo().personagem.dinheiro >= 15){
                    document.getElementById("descricao").textContent += "\n Você pegou um arco e 30 flechas!";
                    adicionarAcao("inventario", "Arco");
                    adicionarAcao("inventario", "Flecha", 30);
                    salario(-15);
                }
                else{
                    alert("Você não tem dinheiro :P");
                }
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "falar com uma garota louca" : function () {
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                if (getUsuarioAtivo().personagem.attributes.Psicológico >= 9){
                    document.getElementById("descricao").textContent += "\n Você vai falar com uma das pessoas que ficaram em pé durante a sua pressão.";
                }
                else{
                    document.getElementById("descricao").textContent += "\n Você vai falar com uma das pessoas que ficaram em pé durante a pressão do coelho.";
                }
                document.getElementById("descricao").textContent += "\n Ela era uma garota linda. Olhos azuis claros e cabelos loiros longos, como se fosse uma boneca. \n \n Alice: Oi... Parece que estamos presos nesse jogo daquele coelho, certo? \n Alice: Muitos estão em choque ainda... \n Alice: Meu nome é Alice, e o seu? \n Alice: Prazer em te conhecer, " + getUsuarioAtivo().personagem.nome + ". Espero que possamos sair daqui vivos.";
                document.getElementById("opcoes").textContent = "'Vai ficar tudo bem' | 'Eu vou te proteger'";
                cenas.Tutorial4.acoes.lista = [];
                cenas.Tutorial4.frases.lista = [];
                cenas.Tutorial4.frases.lista.push("vai ficar tudo bem");
                cenas.Tutorial4.frases.lista.push("eu vou te proteger");
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "tentar organizar um grupo" : function () {
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                if (getUsuarioAtivo().personagem.attributes.Carisma >= 3){
                    document.getElementById("descricao").textContent += "\n Você consegue juntar algumas pessoas para te ajudar na missão graças a sua eloquência.";
                    setarCombate(getUsuarioAtivo().personagem, generico1, generico4, generico3, getUsuarioAtivo().personagem.aliadoAtual4, getUsuarioAtivo().personagem.aliadoAtual5, getUsuarioAtivo().personagem.inimigoAtual, getUsuarioAtivo().personagem.inimigoAtual2, getUsuarioAtivo().personagem.inimigoAtual3, getUsuarioAtivo().personagem.inimigoAtual4, getUsuarioAtivo().personagem.inimigoAtual5, getUsuarioAtivo().personagem.inimigoAtual6, "");
                    salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                    atualizarStatusTela(getUsuarioAtivo().personagem);
                    document.getElementById("resposta").value = "";
                    window.scrollTo(0, 0);
                }
                else{
                    document.getElementById("descricao").textContent += "\n Você não consegue juntar pessoas para te ajudar na missão, pois a garota que estava organizando um grupo já reuniu a atenção de todos.";
                    atualizarStatusTela(getUsuarioAtivo().personagem);
                    document.getElementById("resposta").value = "";
                    window.scrollTo(0, 0);
                }
            },
            "intervir na briga" : function () {
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                document.getElementById("descricao").textContent += "\n Você se aproxima para entender o motivo da briga. Um rapaz alto, forte, de cabelos vermelhos bagunçados e olhos castanhos estava ameaçando um rapaz baixo, gordinho, de cabelo preto encaracolado e com óculos. \n \n Oscar: Ei, Raffael, anda logo. Me passa teu dinheiro. \n Oscar: Nós dois sabemos que eu vou usar esse dinheiro melhor que você. \n Oscar: Ou você quer ir sozinho para morrer nesse porcaria de missão? \n Raffael: M-Mas Oscar... O dinheiro é meu... \n Oscar: Você tá pedindo para levar um soco, seu merdinha!"; 
                document.getElementById("opcoes").textContent = "'Entregue o dinheiro, Raffael.' | 'Pare com isso, Oscar!'";
                cenas.Tutorial4.acoes.lista = [];
                cenas.Tutorial4.frases.lista = [];
                cenas.Tutorial4.frases.lista.push("entregue o dinheiro, raffael.");
                cenas.Tutorial4.frases.lista.push("pare com isso, oscar!");
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "brigar" : function (){
                progresso("venceuOscar");
                salario(15);
                setarCombate(getUsuarioAtivo().personagem, getUsuarioAtivo().personagem.aliadoAtual1, getUsuarioAtivo().personagem.aliadoAtual2, getUsuarioAtivo().personagem.aliadoAtual3, getUsuarioAtivo().personagem.aliadoAtual4, getUsuarioAtivo().personagem.aliadoAtual5, getUsuarioAtivo().personagem.estadoNPCs.Oscar, getUsuarioAtivo().personagem.inimigoAtual2, getUsuarioAtivo().personagem.inimigoAtual3, getUsuarioAtivo().personagem.inimigoAtual4, getUsuarioAtivo().personagem.inimigoAtual5, getUsuarioAtivo().personagem.inimigoAtual6, "Tutorial4");
                proximaCena("Combate");
            }, 
            "falar com um garoto indeciso" : function () {
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                document.getElementById("descricao").textContent += "\n Você encontra um garoto tentando escolher entre o machado ou a espada. \n Ele tinha cabelos castanhos e olhos verdes... Na verdade, você conhecia ele! \n Seu nome era Heitor, uma streamer bem famoso que você adora! \n \n Heitor: Opa, um fã? Tudo bom, qual seu nome? Prazer, "  + getUsuarioAtivo().personagem.nome + "! \n Heitor: Você acha que pode me dar uma ajudinha? Qual desses você acha que eu devo pegar... A espada ou o machado?";
                document.getElementById("opcoes").textContent = "'Espada' | 'Machado' | 'Economize' | 'Os dois'";
                cenas.Tutorial4.acoes.lista = [];
                cenas.Tutorial4.frases.lista = [];
                cenas.Tutorial4.frases.lista.push("espada");
                cenas.Tutorial4.frases.lista.push("machado");
                cenas.Tutorial4.frases.lista.push("economize");
                cenas.Tutorial4.frases.lista.push("os dois");
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "iniciar a missão" : function (){
                proximaCena("Missão1");
            },
            "falar com uma garota desesperada" :  function () { 
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                document.getElementById("descricao").textContent += "\n Você percebe uma garota entrando em pânico. \n Era uma garota baixinha de longos cabelos pretos e olhos azuis. \n Ela estava realmente tendo uma crise. \n \n Paula: NÓS VAMOS TODOS MORRER!! \n Paula: ESTAMOS PERDIDOS! EU NÃO TENHO COMO SOBREVIVER A ISSO, EU DEFINITIVAMENTE VOU MORRER!";
                document.getElementById("opcoes").textContent = "'Fique calma' | 'Se recomponha!' | 'Eu posso te ajudar'";
                cenas.Tutorial4.acoes.lista = [];
                cenas.Tutorial4.frases.lista = [];
                cenas.Tutorial4.frases.lista.push("fique calma");
                cenas.Tutorial4.frases.lista.push("se recomponha!");
                cenas.Tutorial4.frases.lista.push("eu posso te ajudar");
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "falar com uma garota organizando o grupo" : function (){
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                if (getUsuarioAtivo().personagem.attributes.Psicológico < 2){
                    document.getElementById("descricao").textContent += "\n Você vai falar com a garota organizando o grupo, mas ela está muito ocupada para te dar atenção.";
                    document.getElementById("resposta").value = "";
                    window.scrollTo(0, 0);
                }
                else{
                    progresso("conheceuJulia");
                    document.getElementById("descricao").textContent += "\n Você vai falar com a garota organizando o grupo. \n Ela era alta, bonita e tinha cabelos pretos crespos. \n \n Julia: Oi, meu nome é Julia. Qual o seu? Prazer em te conhecer, " + getUsuarioAtivo().personagem.nome + ". Desculpa, mas nosso grupo já está cheio... Tente procurar mais pessoas. Obrigada. ";
                    document.getElementById("logDivino").textContent += "O Deus Rei te cumprimenta. \n \n";
                    document.getElementById("resposta").value = "";
                    salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                    atualizarStatusTela(getUsuarioAtivo().personagem);
                    document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                    vez1 = false;
                    cenas.Tutorial4.palco();
                    vez1 = true;
                    window.scrollTo(0, 0);
                }
            },
            "falar com uma pessoa mascarada" : function(){
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                progresso("conheceuN");
                document.getElementById("descricao").textContent += "Uma pessoa mascarada encara você. \n Era alguém baixo, magro, com roupas grossas e uma máscara de Halloween. \n \n ???: Você... Estava aqui antes?";
                document.getElementById("logDivino").textContent += "O Juízo não te reconhece. \n \n";
                document.getElementById("resposta").value = "";
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            }, 
            "falar com uma garota asiática" : function(){
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                progresso("Akane");
                document.getElementById("descricao").textContent += "Você encontra uma garota com traços asiáticos. \n Ela era baixa, tinha cabelos pretos curtos e olhos pretos. \n \n Akane: Oi, meu nome é Akane. Quem é você? \n Akane: Olá, "  + getUsuarioAtivo().personagem.nome + ". Essa situação é bastante inesperada... Tenha cuidado.";
                document.getElementById("logDivino").textContent += "A Deusa Noturna te olha com cordialidade. \n A Deusa Noturna te patrocina com 5$ \n \n";
                document.getElementById("resposta").value = "";
                salario(5);
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "falar com um garoto sorridente" : function(){
                document.getElementById("descricao").textContent += "Você encontra um garoto sorrindo. \n Ele era baixo, magro, tinha uma pele pálida, cabelos pretos longos em um rabo de cavalo e olhos pretos. \n Mas de repente, quando ele te avista, ele parte para cima de você... \n Com a intenção de te matar!";
                document.getElementById("opcoes").textContent = "Lutar";
                cenas.Tutorial4.acoes.lista = [];
                cenas.Tutorial4.frases.lista = [];
                cenas.Tutorial4.acoes.lista.push("lutar");
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "lutar" : function (){
                progresso("conheceuVitor");
                salario(30);
                setarCombate(getUsuarioAtivo().personagem, getUsuarioAtivo().personagem.aliadoAtual1, getUsuarioAtivo().personagem.aliadoAtual2, getUsuarioAtivo().personagem.aliadoAtual3, getUsuarioAtivo().personagem.aliadoAtual4, getUsuarioAtivo().personagem.aliadoAtual5, getUsuarioAtivo().personagem.estadoNPCs.Vitor, getUsuarioAtivo().personagem.inimigoAtual2, getUsuarioAtivo().personagem.inimigoAtual3, getUsuarioAtivo().personagem.inimigoAtual4, getUsuarioAtivo().personagem.inimigoAtual5, getUsuarioAtivo().personagem.inimigoAtual6, "Tutorial4");
                proximaCena("Combate");
            }, 
            "falar com um garoto irritado" :  function () { 
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                document.getElementById("descricao").textContent += "\n Você percebe um garoto muito revoltado. \n Ele era forte, tinha cabelo preto bem curto e olhos pretos. \n \n João: Eles acham que podem fazer o que quiserem com nossas vidas?! ELES NÃO PODEM! Eu vou sair daqui vivo, custe o que custar!";
                document.getElementById("opcoes").textContent = "'Eu também!' | 'Você não tem medo?' | 'Seja cauteloso'";
                cenas.Tutorial4.acoes.lista = [];
                cenas.Tutorial4.frases.lista = [];
                cenas.Tutorial4.frases.lista.push("eu também!");
                cenas.Tutorial4.frases.lista.push("você não tem medo?");
                cenas.Tutorial4.frases.lista.push("seja cauteloso");
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "falar com uma pessoa ansiosa" :  function () { 
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                document.getElementById("descricao").textContent += "\n Você percebe uma pessoa agitada. \n Era alguém baixo, magro, com roupas folgadas, cabelo azul curto e olhos pretos. \n \n Yuri: Oi, meu nome é Yuri, qual o seu? " + getUsuarioAtivo().personagem.nome + " heh? Legal.";
                document.getElementById("opcoes").textContent = "'O que você é?' | 'Se acalme' | 'Ta'";
                cenas.Tutorial4.acoes.lista = [];
                cenas.Tutorial4.frases.lista = [];
                cenas.Tutorial4.frases.lista.push("o que você é?");
                cenas.Tutorial4.frases.lista.push("se acalme");
                cenas.Tutorial4.frases.lista.push("ta");
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "falar com uma garota calma" :  function () { 
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                progresso("conheceuLilian");
                document.getElementById("descricao").textContent += "\n Você percebe uma garota tranquila, sentada em um canto. \n Ela tinha cabelos castanhos longos em marias chiquinhas e olhos pretos. \n \n Lilian: Precisa de algo? Seu nome é " + getUsuarioAtivo().personagem.nome + "? Entendi.";
                document.getElementById("logDivino").textContent += "O Deus Alto te olha de cima. \n O Deus Alto te patrocina com uma Lança. \n \n";
                adicionarAcao("inventario", "Lança");
                document.getElementById("resposta").value = "";
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "falar com uma garota depressiva" :  function () { 
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                progresso("conheceuCarla");
                document.getElementById("descricao").textContent += "\n Você percebe uma garota muito triste, sentada em um canto. \n Ela tinha cabelos loiros curtos e olhos castanhos. \n \n Carla: ... Vamos todos morrer. Que droga... Talvez seja melhor assim.";
                document.getElementById("logDivino").textContent += "O Deus Inerte reflete. \n O Deus Inerte deixa cair uma Espada. \n \n";
                adicionarAcao("inventario", "Espada");
                document.getElementById("resposta").value = "";
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "falar com um garoto aleatório" : function () {
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                progresso("conheceuHugo");
                document.getElementById("descricao").textContent += "\n Um garoto randômico te chama. \n Ele era um garoto comum. \n \n Hugo: Com licença, qual seu nome? Meu nome é Hugo, você deixou isso cair, " + getUsuarioAtivo().personagem.nome + "?";
                let hugo1 = Math.floor(Math.random() * 60) + 1;
                document.getElementById("logDivino").textContent += "O Deus Rico joga um dado. \n O Deus Rico te patrocina com " + hugo1 + "$. \n \n";
                salario(hugo1);
                document.getElementById("resposta").value = "";
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "falar com uma garota nervosa" :  function () { 
                if (getUsuarioAtivo().personagem.estado.Determinacao < 5){
                    alert("A determinação de " + getUsuarioAtivo().personagem.nome + " acabou");
                    return;
                }
                document.getElementById("descricao").textContent += "\n Você percebe uma garota inquieta. \n Ela era alta, tinha cabelo trançado e olhos pretos. \n \n Mariana: Ei, você! Sim, você mesmo! Qual seu nome? \n Mariana: Então " + getUsuarioAtivo().personagem.nome + ", eu tô meio nervosa... Aí eu queria saber se você poderia trocar esse livro por 25$. \n Mariana: Eu garanto que ele será útil! ";
                document.getElementById("opcoes").textContent = "'Não'";
                cenas.Tutorial4.acoes.lista = [];
                cenas.Tutorial4.frases.lista = [];
                cenas.Tutorial4.frases.lista.push("não");
                if (getUsuarioAtivo().personagem.dinheiro < 25){
                    document.getElementById("opcoes").textContent = " | 'Sim'";
                    cenas.Tutorial4.frases.lista.push("sim");
                }
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
        },
        frases: {
            lista : [],
            "vai ficar tudo bem" : function (){
                progresso("conheceuAlice");
                document.getElementById("descricao").textContent += "\n 'Vai ficar tudo bem' \n Alice: Sim, vai dar tudo certo. Nós vamos sair daqui vivos. \n Alice: Nós vamos dar um jeito.";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "Wonderland encara você seriamente. \n \n";
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "eu vou te proteger" : function (){
                progresso("conheceuAlice");
                document.getElementById("descricao").textContent += "\n 'Eu vou te proteger' \n Alice: A-Ah, sério? Muito obrigada!";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "Wonderland encara você seriamente. \n \n";
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "entregue o dinheiro, raffael." : function (){
                document.getElementById("descricao").textContent += "\n 'Entregue o dinheiro, Raffael.' \n Raffael: O que? Qual o seu nome? " + getUsuarioAtivo().personagem.nome + "? Desculpa " + getUsuarioAtivo().personagem.nome + ", mas e-esse dinheiro é meu!";
                if (getUsuarioAtivo().personagem.attributes.Agilidade >= 2){
                    document.getElementById("descricao").textContent += "\n \n Raffael tenta fugir de você e do Oscar, mas você é mais rápido e o impede de correr. \n \n Raffael: N-não! Meu dinheiro! Droga... \n Oscar: Valeu " + getUsuarioAtivo().personagem.nome + ", tamo junto!";
                    document.getElementById("logDivino").textContent += "O Deus Veloz admira seus reflexos. \n O Deus Veloz te patrocina com 5$. \n \n";
                    document.getElementById("logDivino").textContent += "A Deusa Virtuosa não te olha nos olhos. \n \n";
                    salario(15);
                    progresso("roubouRaffael");
                }
                else{
                    document.getElementById("descricao").textContent += "\n \n Raffael foge de você e do Oscar. \n \n Oscar: Droga...";
                }
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "pare com isso, oscar!" : function (){
                document.getElementById("descricao").textContent += "\n 'Pare com isso, Oscar!' \n Oscar: Huh? Quem é você? Quer brigar?!";
                document.getElementById("opcoes").textContent = "Brigar";
                cenas.Tutorial4.acoes.lista = [];
                cenas.Tutorial4.frases.lista = [];
                cenas.Tutorial4.acoes.lista.push("brigar");
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "economize" : function (){
                progresso("economizou");
                progresso("conheceuHeitor");
                document.getElementById("descricao").textContent += "\n 'Economize' \n Heitor: Uhm... Você tem razão. \n Heitor: Não sabemos o que vem por aí, ter esses dinheirinhos pode vir a calhar depois.";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "A Deusa Cintilante te olha entediada. \n ";
                if (getUsuarioAtivo().personagem.dinheiro == 0){
                    document.getElementById("logDivino").textContent += "\n ";
                }
                else{
                    document.getElementById("logDivino").textContent += "A Deusa Cintilante te taxa em 5$ \n \n ";
                    salario(-5);
                }
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "espada" : function (){
                progresso("conheceuHeitor");
                document.getElementById("descricao").textContent += "\n 'Espada' \n Heitor: Boa ideia! \n Heitor: Ter duas espadas realmente me soa legal... \n Heitor: Não, três espadas seria melhor ainda!";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "A Deusa Cintilante te olha com empolgação. \n A Deusa Cintilante te patrocina com uma Espada. \n \n";
                adicionarAcao("inventario", "Espada");
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "machado" : function (){
                progresso("conheceuHeitor");
                document.getElementById("descricao").textContent += "\n 'Machado' \n Heitor: Verdade! \n Heitor: Um machado é muito interessante mesmo... \n Heitor: Espera, e se eu usasse dois?";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "A Deusa Cintilante te olha com empolgação. \n A Deusa Cintilante te patrocina com um Machado. \n \n";
                adicionarAcao("inventario", "Machado");
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "os dois" : function (){
                progresso("conheceuHeitor");
                document.getElementById("descricao").textContent += "\n 'Os dois' \n Heitor: VOCÊ É UM GÊNIO! \n Heitor: Um Machado, uma espada... \n Heitor: E UMA LANÇA! Me decidi, vou usar todas as três armas.";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "A Deusa Cintilante te olha admirada. \n A Deusa Cintilante te patrocina com um Arco e 15 Flechas. \n \n";
                adicionarAcao("inventario", "Arco");
                adicionarAcao("inventario", "Flecha", 15);
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "fique calma" : function (){
                progresso("conheceuPaula");
                document.getElementById("descricao").textContent += "\n 'Fique calma' \n Paula: CALMA?! CALMA??!! \n Paula: QUAL SEU NOME?? " + getUsuarioAtivo().personagem.nome + ", NÓS ESTAMOS PRESOS EM UM JOGO MORTAL E VOCÊ QUER QUE EU FIQUE CALMA??! \n \n Paula começa a chorar. ";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "O Deus Recluso te olha com aversão. \n ";
                if (getUsuarioAtivo().personagem.dinheiro == 0){
                    document.getElementById("logDivino").textContent += "\n ";
                }
                else{
                    document.getElementById("logDivino").textContent += "O Deus Recluso te taxa em 5$ \n \n ";
                    salario(-5);
                }
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "se recomponha!" : function (){
                progresso("conheceuPaula");
                document.getElementById("descricao").textContent += "\n 'Se recomponha!' \n Paula: ... Você tem razão... Qual seu nome? \n Paula: " + getUsuarioAtivo().personagem.nome + ", eu sei que se eu não ficar calma, eu posso acabar morrendo... Mas eu estou com tanto medo!! \n \n Paula começa a chorar. ";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "O Deus Recluso te olha com carinho. \n O Deus Recluso te patrocina com um livro. \n \n";
                adicionarAcao("magias", "Bola de Fogo");
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "eu posso te ajudar" : function (){
                progresso("conheceuPaula");
                document.getElementById("descricao").textContent += "\n 'Eu posso te ajudar' \n Paula: Huh? Bem... Qual seu nome? " + getUsuarioAtivo().personagem.nome + ", você é meio suspeito... Eu não confio muito em você. ";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "O Deus Recluso te olha nervoso. \n \n";
                document.getElementById("logDivino").textContent += "O Deus Amigável te acha gentil. \n O Deus Amigávem te patrocina com 5$ \n \n";
                salario(5);
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "eu também!" : function (){
                progresso("conheceuJoão");
                document.getElementById("descricao").textContent += "\n 'Eu também!' \n João: É isso aí! Você tem o espírito. Qual o seu nome?  \n João: Prazer, " + getUsuarioAtivo().personagem.nome + "! Meu nome é João, João Silva! \n Vamos ver quem de nós chega mais longe nesse suposto jogo. ";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "O Deus Ofuscante te olha com rivalidade. \n O Deus Ofuscante te patrocina com três Poções. \n \n";
                adicionarAcao("inventario", "Poção de Cura", 3);
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "você não tem medo?" : function (){
                progresso("conheceuJoão");
                document.getElementById("descricao").textContent += "\n 'Você não tem medo?' \n João: Não posso me dar ao luxo de ter medo. Qual o seu nome?  \n João: Prazer, " + getUsuarioAtivo().personagem.nome + "! Meu nome é João, João Silva! \n Eu vou tirar todos daqui! Nós vamos sair vivos. ";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "O Deus Ofuscante te olha com vontade. \n O Deus Ofuscante te patrocina com três Poções. \n \n";
                adicionarAcao("inventario", "Poção de Cura", 3);
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "seja cauteloso" : function (){
                progresso("conheceuJoão");
                document.getElementById("descricao").textContent += "\n 'Seja cauteloso' \n João: ...É verdade. Qual o seu nome?  \n João: Prazer, " + getUsuarioAtivo().personagem.nome + "! Meu nome é João, João Silva! \n Se eu quiser proteger a todos, primeiro preciso proteger a mim mesmo. ";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "O Deus Ofuscante te olha com companheirismo. \n O Deus Ofuscante te patrocina com três Poções. \n \n";
                adicionarAcao("inventario", "Poção de Cura", 3);
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "o que você é?" : function (){
                progresso("conheceuYuri");
                document.getElementById("descricao").textContent += "\n 'O que você é?' \n Yuri: Segredo! UwU";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "O Deus Balanceado te olha com nojo. \n ";
                if (getUsuarioAtivo().personagem.dinheiro == 0){
                    document.getElementById("logDivino").textContent += "\n ";
                }
                else{
                    document.getElementById("logDivino").textContent += "O Deus Balanceado te taxa em 5$. \n \n";
                    salario(-5);
                }
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "ta" : function (){
                progresso("conheceuYuri");
                document.getElementById("descricao").textContent += "\n 'Ta' \n Yuri: Poxa ;-; ";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "O Deus Balanceado te olha com naturalidade. \n \n";
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "se acalme" : function (){
                progresso("conheceuYuri");
                document.getElementById("descricao").textContent += "\n 'se acalme' \n Yuri: Valeu :) Espero que você sobreviva, " + getUsuarioAtivo().personagem.nome + "!!";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "O Deus Balanceado te olha com alegria. \n O Deus Balanceado te patrocina com 5$ \n \n";
                salario(5);
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "sim" : function (){
                progresso("conheceuMariana");
                document.getElementById("descricao").textContent += "\n 'Sim' \n Mariana: Ótimo!! Muito obrigada! ";
                adicionarAcao("magias", "Bola de Fogo");
                salario(-25);
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "O Deus Amigável te olha com felicidade. \n \n";
                document.getElementById("logDivino").textContent += "A Deusa Benevolente te olha com simpatia. \n A Deusa Benevolente te patrocina com uma Poção. \n \n";
                adicionarAcao("inventario", "Poção de Cura", 1);
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
            "não" : function (){
                progresso("conheceuMariana");
                document.getElementById("descricao").textContent += "\n 'Não' \n Mariana: Nossa... Certo. ";
                cenas.Tutorial4.acoes.lista = ["pegar a espada", "pegar a lança", "pegar o machado", "comprar poção", "iniciar a missão", "tentar organizar um grupo"];
                document.getElementById("logDivino").textContent += "O Deus Amigável te olha chateado. \n \n";
                if (getUsuarioAtivo().personagem.dinheiro == 0){
                    document.getElementById("logDivino").textContent += "\n ";
                }
                else{
                    document.getElementById("logDivino").textContent += " \n O Deus Amigável te taxa em 5$. \n \n";
                    salario(-5);
                }
                document.getElementById("logDivino").textContent += "A Deusa Benevolente te olha intrigada. \n \n";
                adicionarAcao("inventario", "Poção de Cura", 1);
                salvarEstadoPlayer(getUsuarioAtivo().personagem.estado.Vida, getUsuarioAtivo().personagem.estado.Mana, getUsuarioAtivo().personagem.estado.Determinacao - 5);
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                document.getElementById("opcoes").textContent = ["Pegar a Espada", "Pegar a Lança", "Pegar o Machado", "Comprar Poção", "Iniciar a Missão", "Tentar organizar um grupo"].join(" | ");
                vez1 = false;
                cenas.Tutorial4.palco();
                vez1 = true;
                window.scrollTo(0, 0);
            },
        },
    },
    Missão1: {
        titulo: "Capítulo 1 - Dungeon",
        descricao: "Você entra na Dungeon, e o coelho não está mais lá. \n Tudo o que resta são os participantes em sua maioria amedrontados em um lugar escuro, úmido e silencioso. \n Há uma círculo desenhado no chão com um pedestal ao lado. \n Parece que quem colocar os 3 núcleos de slime no pedestal e entrar no círculo será trasportado para algum lugar.",
        opcoes: ["Explorar"],
        palco : function(){
            function contarOcorrencias(array, string) {
                let contador = 0;
                for (let i = 0; i < array.length; i++) {
                    if (array[i].includes(string)) {
                        contador++;
                    }
                }
                return contador;
            }
            let nucleosQTD = contarOcorrencias(getUsuarioAtivo().personagem.inventario, "Núcleo de Slime");
            if (nucleosQTD >= 3){
                cenas.Missão1.acoes.lista.push("sair da dungeon");
                document.getElementById("opcoes").textContent += " | Sair da Dungeon";
            }
        },
        acoes: {
            lista : ["explorar"],
            "explorar" : function (){
                document.getElementById("descricao").textContent += "\n Você encontra monstros!";
                document.getElementById("opcoes").textContent = "Lutar";
                cenas.Missão1.acoes.lista = [];
                cenas.Missão1.frases.lista = [];
                cenas.Missão1.acoes.lista.push("lutar");
                atualizarStatusTela(getUsuarioAtivo().personagem);
                document.getElementById("resposta").value = "";
                window.scrollTo(0, 0);
            },
            "lutar" : function (){
                let inimigosQTD = Math.floor(Math.random() * 3) + 1;
                let inimigoss = [];
                for (let k = 0; k < inimigosQTD; k++){
                    let dd = Math.floor(Math.random() * 2);
                    if (dd == 0){
                        inimigoss.push(JSON.parse(JSON.stringify(inimigos.esqueleto)));
                    }
                    else {
                        inimigoss.push(JSON.parse(JSON.stringify(inimigos.slime)));
                    }
                }
                const nameOccurrences = {};
                inimigoss.forEach(i => {
                    nameOccurrences[i.nome] = (nameOccurrences[i.nome] || 0) + 1;
                });
                cenas.Missão1.acoes.lista = ["explorar"];
                const nameCounters = {};
                inimigoss.forEach(inimigo => {
                    const baseName = inimigo.nome;
                    if (nameOccurrences[baseName] > 1) {
                        nameCounters[baseName] = (nameCounters[baseName] || 0) + 1;
                        inimigo.nome = `${baseName} ${nameCounters[baseName]}`;
                    }
                });

                if (inimigosQTD == 1){
                    setarCombate(getUsuarioAtivo().personagem, getUsuarioAtivo().personagem.aliadoAtual1, getUsuarioAtivo().personagem.aliadoAtual2, getUsuarioAtivo().personagem.aliadoAtual3, getUsuarioAtivo().personagem.aliadoAtual4, getUsuarioAtivo().personagem.aliadoAtual5, inimigoss[0], getUsuarioAtivo().personagem.inimigoAtual2, getUsuarioAtivo().personagem.inimigoAtual3, getUsuarioAtivo().personagem.inimigoAtual4, getUsuarioAtivo().personagem.inimigoAtual5, getUsuarioAtivo().personagem.inimigoAtual6, "Missão1");
                }
                if (inimigosQTD == 2){
                    setarCombate(getUsuarioAtivo().personagem, getUsuarioAtivo().personagem.aliadoAtual1, getUsuarioAtivo().personagem.aliadoAtual2, getUsuarioAtivo().personagem.aliadoAtual3, getUsuarioAtivo().personagem.aliadoAtual4, getUsuarioAtivo().personagem.aliadoAtual5, inimigoss[0], inimigoss[1], getUsuarioAtivo().personagem.inimigoAtual3, getUsuarioAtivo().personagem.inimigoAtual4, getUsuarioAtivo().personagem.inimigoAtual5, getUsuarioAtivo().personagem.inimigoAtual6, "Missão1");
                }
                if (inimigosQTD == 3){
                    setarCombate(getUsuarioAtivo().personagem, getUsuarioAtivo().personagem.aliadoAtual1, getUsuarioAtivo().personagem.aliadoAtual2, getUsuarioAtivo().personagem.aliadoAtual3, getUsuarioAtivo().personagem.aliadoAtual4, getUsuarioAtivo().personagem.aliadoAtual5, inimigoss[0], inimigoss[1], inimigoss[2], getUsuarioAtivo().personagem.inimigoAtual4, getUsuarioAtivo().personagem.inimigoAtual5, getUsuarioAtivo().personagem.inimigoAtual6, "Missão1");
                }
                proximaCena("Combate");
            }, 
            "sair da dungeon" : function (){
                proximaCena("Missão1Concluida");
            },
        },
        frases: {
            lista : [],

        },
    },
    Missão1Concluida: {
        titulo: "Capítulo 2 - EM ANDAMENTO",
        descricao: "Aguarde mais capítulos :)",
        opcoes: ["Aguardar"],
        palco : function(){

        },
        acoes: {
            lista : [],
            
        },
        frases: {
            lista : [],

        },
    },
};

function salvarEstadoPlayer(Vida1, Mana1, Determinacao1){
    const usuario = getUsuarioAtivo();
    const { nome, personagem } = usuario;
    const usuarios = pegarUsuarios();
    usuarios[nome].personagem = personagem;
    usuarios[nome].personagem.estado.Vida = Vida1;
    usuarios[nome].personagem.estado.Determinacao = Determinacao1;
    usuarios[nome].personagem.estado.Mana = Mana1;
    salvarUsuarios(usuarios);
}

function proximaCena(cenita){
    const usuario = getUsuarioAtivo();
    const { nome, personagem } = usuario;
    personagem.cena_atual = cenita;
    const usuarios = pegarUsuarios();
    if (personagem.cena_atual !== "Combate") {
        personagem.combateState = { ativo: false, ordem: [], indice: 0 };
    }
    usuarios[nome].personagem = personagem;
    salvarUsuarios(usuarios);
    exibirCena();
    document.getElementById("resposta").value = "";
    window.scrollTo(0, 0);
}

function setarCombate(player1, ali1, ali2, ali3, ali4, ali5, ini1, ini2, ini3, ini4, ini5, ini6, posBatalha1){
    const usuario = getUsuarioAtivo();
    const { nome, personagem } = usuario;
    const usuarios = pegarUsuarios();
    usuarios[nome].personagem = player1;
    usuarios[nome].personagem.aliadoAtual1 = ali1;
    usuarios[nome].personagem.aliadoAtual2 = ali2;
    usuarios[nome].personagem.aliadoAtual3 = ali3;
    usuarios[nome].personagem.aliadoAtual4 = ali4;
    usuarios[nome].personagem.aliadoAtual5 = ali5;
    usuarios[nome].personagem.inimigoAtual = ini1;
    usuarios[nome].personagem.inimigoAtual2 = ini2;
    usuarios[nome].personagem.inimigoAtual3 = ini3;
    usuarios[nome].personagem.inimigoAtual4 = ini4;
    usuarios[nome].personagem.inimigoAtual5 = ini5;
    usuarios[nome].personagem.inimigoAtual6 = ini6;
    usuarios[nome].personagem.posBatalha = posBatalha1;
    salvarUsuarios(usuarios);
}

function salario(quantia){
    const usuario = getUsuarioAtivo();
    const { nome, personagem } = usuario;
    const usuarios = pegarUsuarios();
    usuarios[nome].personagem = personagem;
    usuarios[nome].personagem.dinheiro += quantia;
    if (usuarios[nome].personagem.dinheiro < 0){
        usuarios[nome].personagem.dinheiro = 0;
    }
    salvarUsuarios(usuarios);
}

function progresso(qual){
    const usuario = getUsuarioAtivo();
    const { nome, personagem } = usuario;
    const usuarios = pegarUsuarios();
    usuarios[nome].personagem = personagem;
    usuarios[nome].personagem.progressoNPCs[qual] = true;
    salvarUsuarios(usuarios);
}

function adicionarAcao(tipo, acao, quantidade = 1){
    const usuario = getUsuarioAtivo();
    if (!usuario) return;

    const { nome, personagem } = usuario;
    const usuarios = pegarUsuarios();
    const inventario = personagem.inventario;

    if (tipo === "inventario") {
        const stackableItems = ["Poção de Cura", "Flecha"];
        if (stackableItems.includes(acao)) {
            const itemRegex = new RegExp(`^${acao}(?: \\(x(\\d+)\\))?$`);
            const itemIndex = inventario.findIndex(i => itemRegex.test(i));

            if (itemIndex !== -1) {
                const itemString = inventario[itemIndex];
                const match = itemString.match(itemRegex);
                const currentQuantity = match[1] ? parseInt(match[1], 10) : 1;
                const newQuantity = currentQuantity + quantidade;
                inventario[itemIndex] = `${acao} (x${newQuantity})`;
            } else {
                if (quantidade > 1) {
                    inventario.push(`${acao} (x${quantidade})`);
                } else {
                    inventario.push(acao);
                }
            }
        } else {
            personagem.inventario.push(acao);
        }
    } else if (tipo === "titulos"){
        personagem.titulos.push(acao);
    } else if (tipo === "habilidades"){
        personagem.habilidades.push(acao);
    } else if (tipo === "magias"){
        personagem.magias.push(acao);
    } else if (tipo === "Modificadores"){
        personagem.Modificadores.push(acao);
    }
    
    usuarios[nome].personagem = personagem;
    salvarUsuarios(usuarios);

    if (batalhaEmGrupoAtiva) {
        combatePlayer = personagem;
    }
}

function limparAliadosMortos() {
    const usuario = getUsuarioAtivo();
    if (!usuario) return [];

    const usuarios = pegarUsuarios();
    const personagem = usuarios[usuario.nome].personagem;

    const aliadosRemovidos = [];
    const slotsAliados = [
        'aliadoAtual1', 'aliadoAtual2', 'aliadoAtual3', 'aliadoAtual4', 'aliadoAtual5'
    ];

    slotsAliados.forEach(slot => {
        const aliado = personagem[slot];

        if (aliado && Object.keys(aliado).length > 0 && aliado.estado && aliado.estado.Vida <= 0) {
            aliadosRemovidos.push(aliado.nome);
            
            personagem[slot] = {}; 
            
        }
    });

    if (aliadosRemovidos.length > 0) {
        salvarUsuarios(usuarios);
    }

}

function exibirCena() {
    const usuario = getUsuarioAtivo();
    if (!usuario) return;
    const personagem = usuario.personagem;
    const cenaAtual = cenas[personagem.cena_atual];

    if (personagem.cena_atual === "Combate" && personagem.cabou == true){
        document.getElementById("resposta").value = "";
        batalhaEmGrupoAtiva = true;
        combatePlayer = personagem;
        document.getElementById("cena").textContent = cenaAtual.titulo;
        document.getElementById("descricao").textContent = personagem.ultimaDesc;
        document.getElementById("opcoes").textContent = "Continuar";
        atualizarStatusTela(personagem)
    }
    else if (personagem.cena_atual === "Combate") {
        combatePlayer = personagem;
        combateAliados = [
            combatePlayer.aliadoAtual1, combatePlayer.aliadoAtual2, combatePlayer.aliadoAtual3, combatePlayer.aliadoAtual4, combatePlayer.aliadoAtual5
        ].filter(a => a && Object.keys(a).length > 0);
        combateInimigos = [
            combatePlayer.inimigoAtual, combatePlayer.inimigoAtual2, combatePlayer.inimigoAtual3, combatePlayer.inimigoAtual4, combatePlayer.inimigoAtual5, combatePlayer.inimigoAtual6
        ].filter(e => e && Object.keys(e).length > 0);

        todosOsCombatentes = [combatePlayer, ...combateAliados, ...combateInimigos].filter(c => c && Object.keys(c).length > 0);

        document.getElementById("cena").textContent = cenaAtual.titulo;
        document.getElementById("descricao").textContent = personagem.ultimaDesc;
        
        const opcoesAtaque = ["Soco", ...combatePlayer.inventario, ...combatePlayer.magias, ...combatePlayer.habilidades];
        document.getElementById("opcoes").textContent = `${opcoesAtaque.join(" | ")}`;
        document.getElementById("opcoes").textContent += " \n \n ";
        lala = "";
        if (combateAliados != []){
            lala = " | ";
        }
        inimigosVivos = combateInimigos.filter(inimigo => inimigo.estado && inimigo.estado.Vida > 0);
        document.getElementById("opcoes").textContent += combatePlayer.nome + lala + combateAliados.map(str => str.nome).join(" | ") + " ||VS|| " + inimigosVivos.map(str => str.nome).join(" | ");

        if (personagem.combateState && personagem.combateState.ativo) {
            batalhaEmGrupoAtiva = true;
            document.getElementById("descricao").textContent = personagem.ultimaDesc;
            
            const ordemDeNomes = personagem.combateState.ordem;
            ordemDeTurno = ordemDeNomes.map(nome => todosOsCombatentes.find(c => c.nome === nome)).filter(Boolean);
            
            indiceTurno = personagem.combateState.indice;
            
            atualizarStatusTela(personagem);
            const personagemAtual = ordemDeTurno[indiceTurno];

            if (personagemAtual && personagemAtual.nome === combatePlayer.nome) {
                combatePlayer.suaVez = true;
            } else {
                processarTurno();
            }

        } else {
            document.getElementById("descricao").textContent = "";
            combateGrupo("inicioBatalha", "");
        }
        window.scrollTo(0, 0);
        
    } else {
        batalhaEmGrupoAtiva = false;
        document.getElementById("cena").textContent = cenaAtual.titulo;
        document.getElementById("descricao").textContent = cenaAtual.descricao;
        document.getElementById("opcoes").textContent = cenaAtual.opcoes.join(" | ");
        document.getElementById("logDivino").textContent = "";
        cenaAtual.palco();
        atualizarStatusTela(personagem);
    }
}

function falar() {
    const resposta2 = document.getElementById("resposta").value.trim();
    const resposta = document.getElementById("resposta").value.trim().toLowerCase();
    const usuario = getUsuarioAtivo();
    if (!usuario) return;
    const { nome, personagem } = usuario;
    const cena = cenas[personagem.cena_atual];

    if (batalhaEmGrupoAtiva) {
        if (resposta.includes('/')) {
            const partes = resposta.split('/');
            const acao = partes[0].trim().toLowerCase();
            const alvo = partes[1].trim();

            const acoesValidas = ["Soco", ...combatePlayer.inventario, ...combatePlayer.magias, ...combatePlayer.habilidades].map(a => a.toLowerCase());
            const alvoValido = todosOsCombatentes.find(c => c.nome.toLowerCase() === alvo.toLowerCase());

            if (!acoesValidas.includes(acao) && acao.includes("poção de cura") == false) {
                alert(`Ação '${acao}' desconhecida.`);
                return;
            }
            if (acao.includes("poção de cura" == true)){
                if (acao != "poção de cura"){
                    alert(`Ação '${acao}' desconhecida.`);
                    return;
                }
            }
            if (!alvoValido) {
                alert(`Alvo '${alvo}' não encontrado na batalha.`);
                return;
            }
            combatePlayer.suaVez = false;
            combateGrupo(acao, alvo);
            window.scrollTo(0, 0);

        } else if (combatePlayer.cabou && resposta.toLowerCase() === 'continuar') {
            combatePlayer.cabou2 = true;
            combateGrupo('continue', '');
        } else {
            alert("Durante o combate, digite sua ação e o alvo separados por '/' \n acao / alvo");
        }
        document.getElementById("resposta").value = "";
        return;
    }
    else{
        if (resposta.includes("'") == true){
            if (cena.frases.lista.includes(resposta.replace(new RegExp("'", 'g'), '').trim()) == true){
                cena.frases[resposta.replace(new RegExp("'", 'g'), '').trim()]();
            }
            else{
                alert("Você não pode falar isso! ;-;");
            }
        }
        else if (cena.acoes.lista.includes(resposta.trim()) == true){
            cena.acoes[resposta.trim()]();
        }
        else{
            alert("Você não pode fazer isso! ;-;");
        }
    }
}

window.onload = exibirCena();
