
async function buscaEndereco(cep){

    var mensagemErro = document.getElementById('erro');
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    var bairro = document.getElementById('bairro');
    mensagemErro.innerHTML = "";

    try {
        var consultaCEP =  await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro) {
            mensagemErro.innerHTML = '<p> CEP não existente. Tente novamente! </p>';
            // throw Error ('CEP não existente');

        }else{
            cidade.value = consultaCEPConvertida.localidade;
            logradouro.value = consultaCEPConvertida.logradouro;
            estado.value = consultaCEPConvertida.uf;
            bairro.value = consultaCEPConvertida.bairro;
        }
        

        




        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = '<p> CEP inválido. Tente novamente! </p>';
        cidade.value = '';
        logradouro.value = '';
        estado.value = '';
        bairro.value = '';
        console.log(erro);
    }
    
}



var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));














// Várias requisições - uso do Promise.all

// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));

// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));




// Callback hell 
// .then(resposta => resposta.json())
// .then(r => {
//     if (r.erro){
//         throw Error ('Esse CEP não existe!');
//     } else
//     console.log(r)})
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log("Processamento concluído!"));

// console.log(consultaCEP);



 