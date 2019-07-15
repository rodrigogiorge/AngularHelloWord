angular.module("meuModulo")
    .controller("indexController", function ($scope) {

        $scope.titulo = "Home Angular JS";
        $scope.alunos = [
            { nome: "Suelen", email: "suelenchatinha@gmail.com", nota1: 90, nota2: 80, nota3: 85 },
            { nome: "Rodrigo", email: "drigo@gmail.com", nota1: 80, nota2: 70, nota3: 80 },
            { nome: "Kurt", email: "kurt@gmail.com", nota1: 60, nota2: 50, nota3: 35 },
            { nome: "Rafael", email: "rafa@gmail.com", nota1: 55, nota2: 75, nota3: 45 },
            { nome: "Ricardo", email: "cado@gmail.com", nota1: 85, nota2: 35, nota3: 35 }
        ];

        var init = function () {
            $scope.alunos.forEach(function (aluno) {
                aluno.media = media(aluno);
            });
            limpaForm();
        };
        var media = function (Aluno) {
            var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3)) / 3;
            return media.toFixed(2);
        }

        $scope.abreAddAluno = function () {
            $scope.editando = false;
            limpaForm();
        }
        $scope.addAluno = function (Aluno) {
            Aluno.media = media(Aluno);
            $scope.alunos.push(Aluno);
            $('.modal').modal().close;
            limpaForm();
        }

        $scope.editando = false;
        var alunoEditar;
        $scope.editarAluno = function (Aluno) {
            $scope.editando = true;
            angular.copy(Aluno, $scope.Aluno);
            alunoEditar = Aluno;
        }

        $scope.salvarAluno = function (Aluno) {
            alunoEditar.nome = Aluno.nome;
            alunoEditar.email = Aluno.email;
            alunoEditar.nota1 = Aluno.nota1;
            alunoEditar.nota2 = Aluno.nota2;
            alunoEditar.nota3 = Aluno.nota3;
            alunoEditar.media = media(Aluno);
            $('.modal').modal().close;
        };

        $scope.deletarAluno = function (Aluno) {
            for (var index in $scope.alunos) {
                var aux = $scope.alunos[index];
                if (aux === Aluno) {
                    $scope.alunos.splice(index, 1);
                }
            }
        };

        var limpaForm = function () {
            $scope.Aluno = { nome: "", email: "", nota1: '', nota2: '', nota3: '', media: '' }
        };

        init();

    })

    .controller("contatoController", function ($scope) {
        $scope.titulo = "Contato Angular JS";
    })