function soma(a,b){
    return a + b;
}

const soma2 = (a,b) => {
    return a + b;
} 


console.log(soma2(1,2)); 


async function concatenar(string1, string2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processou requisição!");
            const string3 = string1 + string2;
            resolve(string3);
        }, 1000);
    });
}

async function executor(){

    await concatenar("Hello", "World").then((res) => {
        console.log(res);
    })

    return 'Sucesso!'

}


executor()