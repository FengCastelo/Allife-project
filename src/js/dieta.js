
// ABRIR/FECHAR JANELA DE SELECAO DE ALIMENTOS ------------------------------------------------------------------------------------
//variavel do botao de adicionar alimento
const add_alimento = document.getElementById('add_alimento');
//variavel da janela de seleçao de alimentod a "caixa_add"
const caixa_add = document.getElementById('caixa_add');
//variavel do modal (O fundo preto que fica de fundo da janela)
const modal = document.getElementById('modal');
// variavel
const botao_fechar = document.getElementById('botao_fechar')

// Funcao que ao ser chamada adiciona a classe "Abrir_fechar_janela" e "modal_ativo"
// Basicamente, o elemento no html está escondido, e quando essas classes são adicionadas eles surgem
// A função toogke faz isso, se ja tiver a classe ele remove, se nao tiver ele adiciona
function abrir_fechar_selecao () {
    caixa_add.classList.toggle("abrir_fechar_janela");
    modal.classList.toggle("modal_ativo");
};

//agora basta associar a função abrir/fechar ao botao de abrir e o de fechar
add_alimento.addEventListener('click', abrir_fechar_selecao);
botao_fechar.addEventListener('click', abrir_fechar_selecao);
// ABRIR/FECHAR JANELA DE SELECAO DE ALIMENTOS ------------------------------------------------------------------------------------

// FUNÇÃO DE ADICIONAR OS ALIMENTOS NA DIETA------------------------------------------------------------------------------------------------
// Hora de programar a parte de adicionar alimentos

//variavel do containe onde será colocado os alimentos do cafe da manha
const local_registro_cafe = document.getElementById('registro_cafe');
//variavel do containe onde será colocado os alimentos do almoco
const local_registro_almoco = document.getElementById('registro_almoco');
//variavel do containe onde será colocado os alimentos da janta
const local_registro_janta = document.getElementById('registro_janta');

//Eu usei um template que vou editar mais tarde, então essa é a variavel dele
//De uma olhada na tag <template> no codigo e pesquise um pouco
const template_registro_alimento = document.getElementById('template');

//Variavel da janela de alimentos, quando declarei não me toquei que ja existia antes kkkk
const janela_selecao = document.getElementById('caixa_selecao');

//variavel do botao de confirmar alimento
const botato_confirmar_alimento = document.getElementById('confirmar_alimento');

// Recebendo o botão de remover para que eu possa programar a remoção do alimento
// Nesse caso como o template no html é ignorado pelo navegador eu preciso acessar ele para encontrar o botao
const conteudo_template = template_registro_alimento.content
const botao_remover = conteudo_template.getElementById('botao_remover');

//recebendo as checkbox da janela de selecao
const checkbox_manha = document.getElementById('checkbox_manha')
const checkbox_almoco = document.getElementById('checkbox_almoco')
const checkbox_janta = document.getElementById('checkbox_janta')

//no html eu adicionei um id aos alimentos adicionados na dieta

//Para que não haja alimentos repetidos em cada refeição, eu criei a seguinte função
function verificar_ID (area_refeicao,id_alimento){

    //Transformando o id do dataset que é só um número em "id-1" por exemplo
    // poderia ser qualquer coisa nesse 'id-' contanto que seja o mesmo que eu adicionar no alimento depois
    const alimento_id = 'id-' + id_alimento;

    //A funão querySelector encontra elementos no site e só busca classes se houver . no inicio.
    //Na linha seguinte registro o id como uma classe somando ao '.' no inicio
    //para procurar por 'id-1' preciso adicionar no querySelector '.id-1'
    const trasformar_classe = '.' + alimento_id

    //Aqui ele busca dentro da area da refeicao o id do alimento
    const encontrar_alimento = area_refeicao.querySelector(trasformar_classe);
    
    //Por padrão, se ele encontrar algo, retorna true, executando o if
    //Se não encontrar, retorna false, executando else
    //O if tem essa propriedade verificadora muito util 
    if (encontrar_alimento){
        return 'existe';
    } else {
        return alimento_id;
    }

    //Depois dessa verificação, se retornar existe nada acontece
    // Mas se não existir ele retorna o id para que seja criado
};

//Fazendo uma função que encontra onde está os alimentos:
function encontrar_data (botao_clicado) {
         //registrar o local clicado
         //A função "Closest" adiciona a caixa em que o elemento está inserido
         //Exemplo:  <div> <p class="p1">OI</p> <button>BOTAO</button> </div>
        //Apos pressionar o botao, se eu quiser acessar o "p1" eu primeiro
        // acesso a div em que os dois estão e depois busco por "p1"
        
        //Voltando para o container em que eles estão, o container pai
          const alimento_clicado = botao_clicado.target.closest('.alimento_selecao');
          //agora com o pai do botao selecionado, eu "navego" até o elemento que contem os dataset
          const data = alimento_clicado.querySelector('#data_alimento')
          return data;
}

            //Essa função substitui as informações dos alimentos no template para o cliente
function usar_template (area_refeicao, data_alimento, resultado_verificar_id){
                //Com o .content.cloneNode(True) eu copio toda as tags dentro do template
                const preparar_template = template_registro_alimento.content.cloneNode(true);
                //E então, eu seleciono o local onde está o elemento a ser trocado
                //E uso o text content para muda-lo
                //O conteudo a ser inserido eu tiro do resultado da função encontrar_data e seleciono com o data set
                //Se no html tem o "data-nome" para selecionar ele eu uso "dataset.nome"
                preparar_template.querySelector('.TemplateNome').textContent = data_alimento.dataset.nome;
                preparar_template.querySelector('.TemplateGord').textContent = data_alimento.dataset.gord;
                preparar_template.querySelector('.TemplateCarb').textContent = data_alimento.dataset.carb;
                preparar_template.querySelector('.TemplateProt').textContent = data_alimento.dataset.prot;

                //Essa linha adiciona o id que vem da função verificar id quando o alimento não existe
                preparar_template.querySelector('.alimento_registrado').classList.add(resultado_verificar_id);
                //adicionando o template preparado no registro cafe
                area_refeicao.appendChild(preparar_template);

}

//E por fim a função de adicionar os alimentos
janela_selecao.addEventListener('click', function(alvo_clicado){

        // Se janela de selecao for clicada e o elemento for um botao ("confirmar_alimento" é a classe do botao)
        if (alvo_clicado.target.classList.contains('confirmar_alimento')) {
            
            //verifico se a caixa de adicionar na refeicao cafe da manha essta selecionada
            if (checkbox_manha.checked) {
                //encontro o local onde está os dados
                const local_data = encontrar_data(alvo_clicado)
            
            //Chamamoa função de verificação e atribuimos o resultado a uma variavel conveninente
            let resultado_verificar_id = verificar_ID(local_registro_cafe, local_data.dataset.id);
            //Se a verificação retornar a existencia do elemento, ele não faz nada
            if( resultado_verificar_id === 'existe') {
                //se existir ela retorna o id, e adiciona o alimento na página.
            } else {
                //editando o template
                usar_template(local_registro_cafe, local_data, resultado_verificar_id);
            };
            }

            //Eu so copiei e colei o mesmo código para cada função
            //copia da função de adicionar alimento se o almoco foi clicadp
             if (checkbox_almoco.checked) {
                const local_data = encontrar_data(alvo_clicado)
            
            //Chamamos a função de verificação e atribuimos o resultado a uma variavel conveninente
            let resultado_verificar_id = verificar_ID(local_registro_almoco, local_data.dataset.id);
            //Se a verificação retornar a existencia do elemento, ele executa a mensagem de erro
            if( resultado_verificar_id === 'existe') {
                //se nao, ele adiciona o template na página.
            } else {
                //editando o template
                usar_template(local_registro_almoco, local_data, resultado_verificar_id);
            };
            }
            //copia da função de adicionar alimento se a janta foi clicada
             if (checkbox_janta.checked) {
                const local_data = encontrar_data(alvo_clicado)
            
            //Chamamos a função de verificação e atribuimos o resultado a uma variavel conveninente
            let resultado_verificar_id = verificar_ID(local_registro_janta, local_data.dataset.id);
            //Se a verificação retornar a existencia do elemento, ele executa a mensagem de erro
            if( resultado_verificar_id === 'existe') {
                //se nao, ele adiciona o template na página.
            } else {
                //editando o template
                usar_template(local_registro_janta, local_data, resultado_verificar_id);
            };
            }
            
            
        }
          
});
// FUNÇÃO DE ADICIONAR OS ALIMENTOS NA DIETA-------------------------------------------------------------------------------------------
//Configurando agora o botão de remover o alimento.
local_registro_cafe.addEventListener('click', function(alvo_clicado) {

        //verificando se o click é um botao.
    if (alvo_clicado.target.classList.contains('botao_remover')){
        
        //Selecionando os arquivos para excluir por meio da mesma lógica de ir atrás do pai
    const alimento_registrado = alvo_clicado.target.closest('.alimento_registrado');
    alimento_registrado.remove()
    }
}) 

//Copia do botao de remover para o almoco
local_registro_almoco.addEventListener('click', function(alvo_clicado) {

        //verificando se o click é um botao.
    if (alvo_clicado.target.classList.contains('botao_remover')){
        
        //Selecionando os arquivos para excluir
    const alimento_registrado = alvo_clicado.target.closest('.alimento_registrado');
    alimento_registrado.remove()
    }
}) 

//copia do botao de remover para a janta
local_registro_janta.addEventListener('click', function(alvo_clicado) {

        //verificando se o click é um botao.
    if (alvo_clicado.target.classList.contains('botao_remover')){
        
        //Selecionando os arquivos para excluir
    const alimento_registrado = alvo_clicado.target.closest('.alimento_registrado');
    alimento_registrado.remove()
    }
}) 



