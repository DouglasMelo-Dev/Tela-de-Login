// INICIO - PEGA O CLICK NO ICONE E DEIXA VISIVEL OU INVISIVEL A SENHA

let btn = document.querySelector("#verSenha");
let btnConfirm = document.querySelector("#verConfirmSenha");

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;

/* LETs de mensagens de erros: */

let msgError = document.querySelector('#msg__erro');
let msgSuccess = document.querySelector('#msg__sucesso');

/* INICIO Aqui faz o teste se estao preenchidos com o minimo exigido e se as senhas batem */


nome.addEventListener('keyup', () => {
    if(nome.value.length <= 3){
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres';
        nome.setAttribute('style', 'border-color: red')
        validNome = false;
    }else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true;
    }
});

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 5){
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuário *Insira no mínimo 5 caracteres';
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false;
    }else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true;
    }
});

senha.addEventListener('keyup', () => {
    if(senha.value.length < 6){
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha * Insira no mínimo 6 caracteres';
        senha.setAttribute('style', 'border-color: red');
        validSenha = false;

    }else{
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: green');
        validSenha = true;
    }
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red');
        labelConfirmSenha.innerHTML = 'Confirmar Senha *Senha não confere';
        confirmSenha.setAttribute('style', 'border-color: red');
        validConfirmSenha = false;

    }else{
        labelConfirmSenha.setAttribute('style', 'color: green');
        labelConfirmSenha.innerHTML = "Confirmar Senha"
        confirmSenha.setAttribute('style', 'border-color: green');
        validConfirmSenha = true;
    }
})

/* FIM do Aqui faz o teste se estao preenchidos com o minimo exigido e se as senhas batem */



// Primeiro Function - inicio

function cadastrar(){

    if(validNome && validUsuario && validConfirmSenha && validSenha){
        // LOCALSTORAGE, se todos os campos derem certo ai ele segue abaixo para gravar no storage

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        );

        localStorage.setItem('listaUser', JSON.stringify(listaUser));


        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = 'Cadastrando Usuário...';
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = '';


        setTimeout(() =>{
            // esse link abaixo faz voltar para a tela de login quando conclui o cadastro! top. E esse setTimeout faz demorar alguns segundos antes de ir para a tela de login. Tipo um timer.
            window.location.href = 'http://127.0.0.1:5500/index.html'
        }, 3000)
        // esse link abaixo faz voltar para a tela de login quando conclui o cadastro! top
       
         
    }else{
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Preencha todos os campos corretamente antes de cadastrar';
        msgSuccess.innerHTML = '';
        msgSuccess.setAttribute('style', 'display: none')
    }


}



btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');

    if( inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
});

// Agora fazendo o do confirm senha



btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmSenha');

    if( inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
});

// FINAL - PEGA O CLICK NO ICONE E DEIXA VISIVEL OU INVISIVEL A SENHA


