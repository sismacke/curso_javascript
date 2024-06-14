// let cepBuscado;
// console.log("Buscando CEP");
// cepBuscado = buscarCep("13845373");
// console.log("CEP buscado");
// console.log("CEP encontrado: ", cepBuscado);

function buscarCep(parametro) {
    let cep;
    fetch(`http://ws.correios.com.br/ws/cep/find/${parametro}/json`)
        .then(response => response.json())
        .then(data => cep = data.cep)
        .catch(console.error);
    return cep;
}

function fazRequisicao(resolver = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!resolver) {
                throw new Error("Deu erro");
            }
			resolve("Promise resolvida");
        }, 5000);
    });
}

fazRequisicao(false)
    .then(console.log)
    .catch(console.error);