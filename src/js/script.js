let dicas = [
  {
    titulo: "💧 | Beber mais água:",
    texto: "Beber água é fundamental porque ela é o componente principal do corpo, essencial para a sobrevivência e o bom funcionamento celular. A água regula a temperatura corporal (através da transpiração), transporta nutrientes e oxigênio para as células, e é crucial para a digestão, a absorção de vitaminas e a eliminação de toxinas (pela urina e fezes). A hidratação adequada mantém as articulações lubrificadas, a pele saudável e o cérebro funcionando com foco e energia. Sem água suficiente, todas as funções vitais são comprometidas."
  },
  {
    titulo: "🍎 | Comer frutas:",
    texto: "Comer frutas é crucial por serem fontes naturais e concentradas de vitaminas, minerais, antioxidantes e fitonutrientes, essenciais para a proteção celular e o fortalecimento do sistema imunológico. Elas também fornecem fibras, que regulam o intestino e auxiliam na saciedade, e açúcares naturais acompanhados de água, promovendo energia rápida e hidratação. O consumo regular de frutas ajuda a prevenir doenças crônicas e contribui para um coração saudável."
  },
  {
    titulo: "❌ | Evitar comidas industrializadas:",
    texto: "Evitar produtos industrializados (ultraprocessados) é crucial porque eles são densos em calorias, mas pobres em nutrientes, sendo excessivamente ricos em sódio, açúcares, gorduras não saudáveis e aditivos químicos. Essa composição desbalanceada aumenta significativamente o risco de obesidade, diabetes e doenças cardiovasculares. Ao desregular o metabolismo e o sistema de saciedade, priorizar alimentos frescos protege a saúde e assegura uma nutrição de qualidade."
  },
  {
    titulo: "🥗 | Comer verduras e legumes:",
    texto: "Comer verduras e legumes é vital porque são as principais fontes de vitaminas, minerais e antioxidantes, fortalecendo o sistema imunológico e a saúde geral. O alto teor de fibras melhora o funcionamento intestinal e a digestão. Além disso, por serem pouco calóricos, promovem a saciedade e reduzem o risco de doenças crônicas. Eles fornecem a base nutricional para a vitalidade e a prevenção."
  },
  {
    titulo: "🕑 | Refeições no horário certo:",
    texto: "Fazer refeições em horários fixos é crucial para sincronizar o ritmo circadiano (relógio biológico) do corpo, otimizando o metabolismo e a digestão. Essa regularidade estabiliza a glicose no sangue, prevenindo quedas de energia e picos, além de regular os hormônios da fome, o que auxilia no controle de peso. Em suma, comer no horário certo garante eficiência metabólica e bem-estar constante."
  }
];


let posicao = 0;


function mostrarDica() {
  document.getElementById("tituloDica").innerText = dicas[posicao].titulo;
  document.getElementById("textoDica").innerText = dicas[posicao].texto;
  document.getElementById("imgDica").innerText = dicas[posicao].texto;
}


function proximaDica() {
  posicao = posicao + 1;
  if (posicao >= dicas.length) {
    posicao = 0;
  }
  mostrarDica();
}


function anteriorDica() {
  posicao = posicao - 1; 
  if (posicao < 0) {
    posicao = dicas.length - 1;
  }

  mostrarDica();
}