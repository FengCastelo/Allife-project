const formulariocadastro = document.querySelector("#formcadastro");// Seleciona o elemento FORM com o ID 'formcadastro' (se existir)
const formulariologin = document.querySelector("#formlogin");// Seleciona o elemento FORM com o ID 'formlogin' (se existir)
const pageprincipal = "pagina_dieta.html";// Definindo a URL
//--------------------------------------FORMULARIO DO CADASTRO-----------------------------------------------------------------------------
if(formulariocadastro){// Checa se o formulário de cadastro existe nesta página (previne erro se estiver na página de login)
    formulariocadastro.addEventListener('submit', function(event){// Adiciona um 'escutador' para o evento de submissão do formulário
        event.preventDefault();// 1. IMPEDE O ENVIO PADRÃO DO FORMULÁRIO

        const validado = validacao();// Chama a função que checa todos os campos e guarda o resultado (true/false)

        if(validado){// Se 'validado' for true (todos os testes passaram)

            alert("CADASTRO REALIZADO COM SUCESSO!") // Mensagem de sucesso

            window.location.replace(pageprincipal);// Redireciona para a página principal

        }else{
            alert("ERRO: PREENCHA TODOS OS CAMPOS!")// Mensagem de erro genérica (se a validação falhou)
        }
    });
}
function validacao(){
    let valido = true;// Variável de controle: assume que o formulário é válido inicialmente

    // Chama todas as funções de validação de campo para obter o resultado booleano (true/false)
    const emailResultado = emailOK();
    const nomeResultado = nomeOK();
    const sobrenomeResultado = sobrenomeOK();
    const telefoneResultado = telefoneOK();
    const senhaResultado = senhaOK();
    const senha1Resultado = senha1OK();

    // Se qualquer um dos resultados for FALSE (invalido/vazio), 'valido' se torna false
    if(!emailResultado || !nomeResultado || !sobrenomeResultado || !telefoneResultado || !senhaResultado || !senha1Resultado){
        valido = false;
    }

    // Pega os valores literais das senhas para comparação
    const senhaum = document.getElementById('senha').value;
    const senhadois = document.getElementById('senha1').value;
    
    // Checa se as senhas são diferentes E se o formulário ainda é considerado válido
    if(senhaum !== senhadois && valido){
        alert("Erro: senhas diferentes");
        valido = false;
    }

    // Se, após todas as checagens, o formulário for válido...
    if(valido){
        // Pega os valores dos campos para salvamento
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;

        // Salva os dados do usuário no localStorage para simular o banco de dados e usar no login
        localStorage.setItem('nomeUsuarioCadastrado', nome);
        localStorage.setItem('sobrenomeUsuarioCadastrado', sobrenome);
        localStorage.setItem('emailUsuarioCadastrado', email);
        localStorage.setItem('senhaUsuarioCadastrado', senha);
    }

    return valido;  // Retorna o resultado final (true ou false) para o event listener

}


// --- Funções Auxiliares de Validação de Campo ---
function emailOK(){
    const valor = document.getElementById('email').value;// Pega o valor do campo com ID 'email'
    
    if (valor.trim() === "") {// Checa se o campo está vazio (após remover espaços)
        return false;
    }

    // Checa se o valor contém '@' e '.' (validação de formato básica)
    if (!valor.includes('@') || !valor.includes('.')) {
        alert("Erro: Formato de E-mail inválido.");
        return false;
    }
    return true;// Se passar, retorna true
}

function sobrenomeOK() {
    const valor = document.getElementById('sobrenome').value;
    if (valor.trim() === "") {
        return false;
    }
    return true;
}

function nomeOK() {
    const valor = document.getElementById('nome').value;
    if (valor.trim() === "") {
        return false;
    }
    return true;
}


function telefoneOK() {
    const valor = document.getElementById('telefone').value;
    if (valor.trim() === "") {
        return false;
    }
    return true;
}

function senhaOK() {
    const valor = document.getElementById('senha').value;
    if (valor.trim() === "") {
        return false;
    }
    return true;
}

function senha1OK() {
    const valor = document.getElementById('senha1').value;
    if (valor.trim() === "") {
        return false;
    }
    return true;
}

// (Funções similares nomeOK, sobrenomeOK, telefoneOK, senhaOK, senha1OK)
// Todas checam se o valor do campo está vazio e retornam false se estiverem.

//--------------------------------------FORMULARIO DO LOGIN-----------------------------------------------------------------------------


if(formulariologin){// Checa se o formulário de login existe nesta página
    formulariologin.addEventListener('submit', function(event){
        event.preventDefault();// Impede o envio padrão

        const validado2 = validacao2();// Chama a função de autenticação

        if(validado2){// Se o login for válido (retornar true)

            window.location.replace(pageprincipal);// Redireciona para a página principal

        }
    });
}
function validacao2(){
    let valido2 = true;

    // Pega os dados digitados
    const emailDigitado = document.getElementById('emaillogin').value;
    const senhaDigitada = document.getElementById('senhalogin').value;

    // Checa se os campos de login estão preenchidos e com formato básico
    const emailResultado2 = emailloginOK();
    const senhaResultado2 = senhaloginOK();

    // Pega os dados salvos no localStorage
    const nomeCadastrado = localStorage.getItem('nomeUsuarioCadastrado');
    const sobrenomeCadastrado = localStorage.getItem('sobrenomeUsuarioCadastrado');
    const emailCadastrado = localStorage.getItem('emailUsuarioCadastrado');
    const senhaCadastrada =localStorage.getItem('senhaUsuarioCadastrado');

    // Se os campos de login não passarem na validação de vazio/formato
    if(!emailResultado2 || !senhaResultado2){
        valido2 = false;
    }

    // Checa se o email digitado BATE com o email salvo E se a senha digitada BATE com a senha salva
    if(emailDigitado === emailCadastrado && senhaDigitada === senhaCadastrada){
        alert(`Login realizado com sucesso! Bem-vindo, ${nomeCadastrado} ${sobrenomeCadastrado}.`);

    }else{
        valido2 = false;
        alert("Erro: Email ou senha incorretos.");
    }

    return valido2;// Retorna o resultado final (true para sucesso, false para falha)

}

    // (Funções auxiliares senhaloginOK e emailloginOK)
    // Checam se os campos de login estão vazios e o formato do e-mail de login.

function senhaloginOK() {
    const valor = document.getElementById('senhalogin').value;
    if (valor.trim() === "") {
        return false;
    }
    return true;
}

function emailloginOK() {
    const valor = document.getElementById('emaillogin').value;
    
    if (valor.trim() === "") {
        return false;
    }

    if (!valor.includes('@') || !valor.includes('.')) {
        alert("Erro: Formato de E-mail inválido.");
        return false;
    }
    return true;
}