// var, const
// numericas, boleanas, strings, array, function, objeto, classes
// + (mais), - (menos), * (vezes), / (divisão)
// if, else
// for / while / filter / forEach

// Posts
// Comentarios
// Usuarios
// Timeline
var incremental = 0;
class Usuario {
    id;
    nome;
    constructor (nomeUsu) {
        this.nome = nomeUsu;
        this.id = new Date().getTime() + incremental;
        incremental++;
    }
}

class Comentario {
    id;
    usuario;
    texto;

    constructor(usuarioComent, textoComent) {
        this.usuario = usuarioComent;
        this.texto = textoComent;
        this.id = new Date().getTime() + incremental;
        incremental++;
    }
}

class Post {
    id;
    usuario;
    texto;
    comentarios;

    constructor(usuarioPost, textoPost, comentariosPost) {
        this.usuario = usuarioPost;
        this.texto = textoPost;
        this.comentarios = comentariosPost || []; 
        this.id = new Date().getTime() + incremental;
        incremental++;
    }

    adicionarComentarioNoPost(comentario) {
        this.comentarios.push(comentario);
    }
}

class Timeline {
    id;
    usuario;
    posts = [];

    constructor(usuariTime) {
        this.usuario = usuariTime;
        this.id = new Date().getTime() + incremental;
        incremental++;
    }

    adicionarPostATimeLine(post) {
        this.posts.push(post);
    }

    filtrarPostPorNomeUsuario(nomeUsuario) {
        return this.posts.filter(
            function(post, index) {
                return post.usuario.nome.toUpperCase() == nomeUsuario.toUpperCase();
            }
        );
    }

    atualizarPost(id, textoAtualizado) {
        this.posts = this.posts.map(
            function(post, index) {
                if (post.id == id) {
                    post.texto = textoAtualizado;
                }

                return post;
            }
        )
    }
}

const wanderson = new Usuario("Wanderson");
const nabia = new Usuario("Nabia");
const angel = new Usuario("Angel");

const postTeste = new Post(wanderson, "Estamos estudando js");
const postNabia = new Post(nabia, "Estou crochetando");

const comentarioTeste = new Comentario(nabia, "Seu Post é muito legal!");
postTeste.adicionarComentarioNoPost(comentarioTeste);

const timelineWanderson = new Timeline(wanderson);
const timelineAngel = new Timeline(angel);

timelineWanderson.adicionarPostATimeLine(postTeste);

timelineAngel.adicionarPostATimeLine(postTeste);
timelineAngel.adicionarPostATimeLine(postNabia);

console.log(timelineAngel);

timelineWanderson.atualizarPost(postNabia.id, "Estou olhando para linha");
timelineAngel.atualizarPost(postNabia.id, "Estou olhando para linha");

const postsFiltrados = timelineAngel.filtrarPostPorNomeUsuario("nabia");

console.log(timelineAngel);
// console.log(postsFiltrados);


