class ContaBancaria{
    constructor(numeroConta, nomeTitular, saldo, idade){
        this.numeroConta = numeroConta
        this.nomeTitular = nomeTitular
        this.saldo = saldo
        this.idade = idade
    }

    get pegarIdade(){
        return this.idade
    }

    set atualizarIdade(novaIdade){
        this.novaIdade = novaIdade
    }

    consultar(){
        console.log(`Conta: ${this.numeroConta} - Titular: ${this.nomeTitular} - saldo: R$${this.saldo} 
            - idade ${this.idade} `)       
    }

    sacar(valor){
        try{
            const newValue = this.saldo - valor

            if(newValue <= 0){
                throw "Saldo Insuficiente"
            }
        }
        catch(error){
            console.log(error)
        }
    }

    depositar(valor){
        this.saldo = this.saldo + valor
    }
}

let contaBancaria1 = new ContaBancaria("123", "Flavia Rangel", 0, 15)

console.log(contaBancaria1.consultar())

const valor = 15.5
console.log(`sacando R$${valor}`)
contaBancaria1.sacar(valor)

console.log(contaBancaria1.consultar())

const value = contaBancaria1.pegarIdade

console.log(`Idade: ${value}`)

contaBancaria1.atualizarIdade = 3

console.log(contaBancaria1.consultar())

let contaBancaria2 = new ContaBancaria("456", "Luisa Barros", 0)

console.log(contaBancaria2.consultar())

const contas = Array(contaBancaria1, contaBancaria2)

console.log(contas)

console.log(JSON.stringify(contas))
