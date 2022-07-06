// Gestão de notas por aluno e escola
// Criar uma classe que represente as materias (id, nome materia, nota)
// Criar uma classe aluno (id, nome, idade)
// Criar uma classe semestre que vincula um aluno a varias materias (id, aluno, materias, semestre)

// Criar uma classe escola que tenha todos os semestres/aluno
// Como regra de negócio da classe semestre, deverá calcular a média das notas das matérias
// Como regra de negócio da classe escola, deverá filtrar todos os alunos que tiveram a média maior que 80

// Imprimir na tela os nomes dos alunos que obtiveram uma média maior que 80

class Materia {
    id;
    nome;
    nota;
    constructor (nomeMateria, notaMateria){
        this.nome = nomeMateria;
        this.nota = notaMateria;
        this.id = new Date().getTime();
    }
}

class Aluno {
    id;
    nome;
    idade;
    constructor (nomeAluno, idadeAluno) {
        this.nome = nomeAluno;
        this.idade = idadeAluno;
        this.id = new Date().getTime();
    }
}

class Semestre {
    id;
    aluno;
    materias;
    semestre;
    constructor (alunoSemestre, materiasSemestre, semestreSemestre) {
        this.aluno = alunoSemestre;
        this.materias = materiasSemestre || [];
        this.semestre = semestreSemestre;
        this.id = new Date().getTime();
    }

    calcularMedia ( ){
        var soma = 0;
        this.materias.forEach(
            function(materia, index){
                soma = soma + materia.nota;
            }
        )
        return soma / this.materias.length;
    }
}
class Escola {
    semestres;
    constructor (semestreEscola) {
        this.semestres = semestreEscola || [];
    }
    filtrarAluno () {
        var resultadoFiltro = this.semestres.filter(
            function(semestre, index) {
                if (semestre.calcularMedia() > 80) {
                    return true;
                }
                return false;
            }
        )
        return resultadoFiltro;
    }
 }

 function teste () {
    const portugues1 = new Materia ("Português", 60);
    const matematica1 = new Materia ("Matemática", 50);
    const historia1 = new Materia ("Historia", 80);
    const portugues2 = new Materia ("Português", 90);
    const matematica2 = new Materia ("Matemática", 92);
    const historia2 = new Materia ("História", 80);
    
    const angel = new Aluno ("Angel", 18);
    const eduardo = new Aluno ("Eduardo", 29);
    const wanderson = new Aluno ("Wanderson", 32);
    const listaMateriasAngel = [portugues1, matematica1, historia1];
    const listaMateriasEduardo = [portugues2, matematica2, historia2];

    const semestreAngel = new Semestre (angel, listaMateriasAngel, "semestre1");
    const semestreEduardo = new Semestre (eduardo, listaMateriasEduardo, "semestre1");
    const semestreWanderson = new Semestre (wanderson);

    const escola = new Escola([semestreAngel, semestreEduardo, semestreWanderson]);

    const acima80 = escola.filtrarAluno();
    const nomesAlunos = acima80.map(
        function(item, index) {
            return item.aluno.nome;
        }
    )

    console.log(nomesAlunos);
 }

 teste();