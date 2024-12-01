const Contato = document.getElementById('Contato');
const tel = document.getElementById('Telefone');
const Form = document.getElementById('Form');
const Editar1 = document.getElementsByTagName('button');
const Contato1 = []
const tel1 = []
let linhas = []
let linhas1 = document.getElementById('TabelaCorpo').getElementsByTagName('tr');

Form.addEventListener("submit", function(e){
    e.preventDefault();
    AdicionarContato();
    contaLinhasTabela(); 
    Contato1.push(Contato.value)
    tel1.push(tel.value)
    Contato.value = ''
    tel.value = ''
})
function AdicionarContato(){
    if (Contato1.includes(Contato.value)){
        alert("Essa  Contato ja foi Inserida!!")
    } else {
    let linha = `<tr>`;
    linha +=`<td id="LinhasConta"></td>`
    linha +=  `<td>${Contato.value}</td>`;
    linha +=  `<td>${tel.value}</td>`;
    //linha += `<td><button style="
    //                background-image: url(./botao-editar.png);
     //               background-size: cover;
     //               width: 19px;
     //               height: 19px;
     //               border: none;
     //               cursor: pointer;" onclick="EditarCampo()"></button>
      //              <button style="
      //              background-image: url(./salve-.png);
      //              background-size: cover;
      //              width: 19px;
       //             height: 19px;
       //             border: none;
          //          cursor: pointer;" onclick="AdicionarLista()"></button></td>`
    linhas += linha;
     document.getElementById('TabelaCorpo').innerHTML = linhas;
}}
function EditarCampo(){
    let telnovo = parseInt(prompt('Digite o Numero de telefone Correto: '));
      document.getElementsByTagName('Telefone1').innerHTML = telnovo  
}

function contaLinhasTabela() {
    let linhas1 = document.getElementById('TabelaCorpo').getElementsByTagName('tr');
    let Contalinha = linhas1.length;
    document.getElementById('LinhasConta').innerHTML = Contalinha;
}
