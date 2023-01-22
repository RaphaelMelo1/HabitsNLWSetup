//alert("Hello World!")
//variável let, conseguimos retribuir o valor para mudarmos depois, ex:
//let BoasVindas = "Eae galera!"
//BoasVindas = "Eae galera! Tranquilo?"
//variável const *não* conseguimos mudar o  valor, será apenas um

//para criarmos um objeto: const celular = {
//  cor: 'preto',
//  ligar: function(){}
//TODA PROPRIEDADE QUE RECEBER UMA FUNCTION É CONSIDERADA UM MÉTODO OU UMA FUNCIONALIDE
//abrimos com par de chaves
//celular.cor (preto)
//celular.ligar() (executa a função)

/*const dividir = function(numero1, numero2){
  dividindo = numero2 / numero1
  return dividindo
}
let numero1 = 10
let numero2 = 100
console.log(numero1)
console.log(numero2)
console.log(`A divisão de 100 por 10 é igual a ${dividir(numero1, numero2)}`)*/
//const celular = {
//cor: "preto",
// ligar: function () {
//  const mensagem = "Fazendo chamada..."
//  alert(mensagem)
//},
//}
//celular.ligar() //Eu devo colocar esses parênteses na frente toda hora que for uma função, e nesse caso é uma função.
//DOM, nossos elementos HTML se transformam num objeto JavaScript
//document.body.style.backgroundColor = 'black'
//rodando isso que colocamos acima, conseguimos mudar a cor do background do body do nosso documento html pelo JavaScript
//document.querySelector("input").click()
//quando rodamos isso acima, o querySelector procurará o primeiro input que ver e dará um click nele.
//Tudo antes do ponto é um objeto, e depois do ponto vem a ação de clicar.
//CONSEGUIMOS TAMBÉM PEGAR A CLASSE DE CADA ELEMENTO EM QUALQUER PÁGINA, POR EXEMPLO, UM ELEMENTO a, DE LINK, CONSEGUIMOS FAZER O CONSOLE CLICAR LÁ PRA GENTE ATRAVÉS DE CÓDIGO
//document.querySelector('.nomedaclasse a).click()
//funciona igual no CSS, um ponto, nome da classe e nome do elemento.
//assim conseguimos selecionar o que queremos que faça.
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

/*const data = {
  sleep: ["01-16", "01-17"],
  study: ["01-16", "01-17", "01-18", "01-21", "01-20", "01-19"],
  food: ["01-16", "01-18", "01-19"],
}*/


const button = document.querySelector('header button')
button.addEventListener('click', add)
form.addEventListener('change', save)
function save(){
   /*o localStorage é um objeo que guarda informações na memória do browser. Quando eu fechar minha página e abrir novamente, ele vai trazer minhas informações do localStorage, que ele guardou.
   Para guardarmos, fazemos: Precisamos dar um nome a uma chave com um valor.
   
   Quando colocamos por exemplo um console.log aqui, com algo escrito dentro, de cara ele não aparecerá no console do navegador até que haja uma mudança, e quando ouver, será executado conforme o que criamos ali acima ('change', save)*/
   localStorage.setItem(/*agora colocamos o  nome que quisermos da chave em string*/'HabitsNLWSetup', JSON.stringify(nlwSetup.data))/*pronto, com isso salvamos qualquer dado adicionado ali e conseguimos ver no console quando acessarmos localStorage, ficará salvo lá com o nome da chave*/
}
function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  /*agora usamos uma condicional para avisarmos que o dia já existe.*/
  if(dayExists){ /*esse 'if' usamos agora para algo boolean, quando estiver true esse 'if' ativará.*/
    alert("O dia já foi adicionado!")
    return
  }
  nlwSetup.addDay(today)
}
/*variável com nome button procurando no documento um elemento button que está dentro do header.*/

/*aqui, ele vai prestar atenção e ficar ouvindo o  evento, que no caso é o evento de quando clicamos('click').*/
/*e o add, é uma função com nome de add para quando o button 'ouvir' o 'click', acabar executando a função.*/
const data = JSON.parse(localStorage.getItem('HabitsNLWSetup')) ||  {}
/*A primeira vez que abrirmos o app, isso não existirá, pois não clicamos em nada para salvar, então dará um erro. As duas barras "||" é uma operação do JavaScript que significa 'ou', isso OU isso, que no caso ali depois abrimos um objeto vazio, enão como não existirá o primeiro código, o objeto vazio existirá e conseguirá rodar.*/
nlwSetup.setData(data)
nlwSetup.load()