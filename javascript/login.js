// Visibilidade da senha:


let btn = document.querySelector(".fa-eye");

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');

    if( inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
});

// Fim visibilidade da senha.


 

function entrar(){
    let usuario = document.querySelector("#usuario");
    let userLabel = document.querySelector("#userLabel");

    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');

    let msgErro = document.querySelector('#msg__erro');
    let listaUser = [];

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){

            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }

    })

    if(usuario.value == userValid.user && senha.value == userValid.senha){
        window.location.href = 'http://127.0.0.1:5500/logado.html'

        

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token);

      
        
    }else{
        userLabel.setAttribute('style', 'color: red');
        usuario.setAttribute('style', 'border-color: red');
        senhaLabel.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');

        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = 'Usuário ou senha incorretos';

        // para voltar para o primeiro campo:

        usuario.focus()
    }

}