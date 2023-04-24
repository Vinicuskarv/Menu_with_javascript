var ids = 1;
var nome = window.document.getElementById('campoNameInfo')
var email = window.document.getElementById('campoEmailInfo')
var botao = window.document.getElementById('ButtonLogin')
botao.addEventListener('click',clicar_botao)

function clic(id){
   document.getElementById('avo'+id).outerHTML = '';
}

function clicar_botao(){
    var elemento_bisavo = document.getElementById('containerRegistration');
    var elemento_avo = document.createElement('table');
    var elemento_pai = document.createElement('tr');
    var elemento_mae = document.createElement('tr');
    var elemento_filha1 = document.createElement('th');
    var elemento_filha2 = document.createElement('th');
    var elemento_filho = document.createElement('td');
    var elemento_filho2 = document.createElement('td');
    var elemento_filho3 = document.createElement('td');
    var botao_apaga = document.createElement('input');
    var texto = document.createTextNode(nome.value);
    var texto2 = document.createTextNode(email.value);

    //ADD ATTRIBUTE
    elemento_avo.setAttribute("id","avo"+ids);
    elemento_avo.setAttribute("class","table")

    botao_apaga.setAttribute("class","buttonApagar");
    botao_apaga.setAttribute("type","button");
    botao_apaga.setAttribute("value","Apagar");
    botao_apaga.setAttribute("onclick","clic("+ids+")");

    elemento_filha2.setAttribute("colspan","2")


    elemento_filho.appendChild(texto);
    elemento_filho2.appendChild(texto2);
    elemento_filho3.appendChild(botao_apaga);

    elemento_filha1.innerHTML="Name";
    elemento_filha2.innerHTML="E-mail";

    elemento_bisavo.appendChild(elemento_avo);
    elemento_avo.appendChild(elemento_mae);
    elemento_avo.appendChild(elemento_pai);

    elemento_mae.appendChild(elemento_filha1);
    elemento_mae.appendChild(elemento_filha2);


    elemento_pai.appendChild(elemento_filho);
    elemento_pai.appendChild(elemento_filho2);
    elemento_pai.appendChild(elemento_filho3);

    ids++;

    nome.value="";
    email.value="";
}