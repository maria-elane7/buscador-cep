let cepInput = document.querySelector("#cep");
let enderecoInput = document.querySelector("#endereco");
let bairroInput = document.querySelector("#bairro");
let cidadeInput = document.querySelector("#cidade");
let estadoInput = document.querySelector("#estado");

function limparInput(){
    enderecoInput.value = "";
    bairroInput.value = "";
    cidadeInput.value = "";
    estadoInput.value = "";
}

function renderCep(json){
    enderecoInput.value = json.logradouro;
    bairroInput.value = json.bairro;
    cidadeInput.value = json.localidade;
    estadoInput.value = json.uf;
}

function cepValido(cep){
    return cep.length === 8 && /^[0-9]+$/.test(cep);
}

async function pesquisarCep(){
    
    let cep = cepInput.value;
    let api = `https://viacep.com.br/ws/${cep}/json/`;

    limparInput();

    if(!cepValido(cep)){
        enderecoInput.value = "CEP inválido";
        return;
    }

  try {
     let dados = await fetch(api);
    let json = await dados.json();

    if(json.erro){
        enderecoInput.value = "CEP não encontrado";
        return;
    }

    renderCep(json);


  } catch (error) {
    enderecoInput.value = "Erro ao buscar endereço";
  }

   
}

cepInput.addEventListener("focusout",pesquisarCep);