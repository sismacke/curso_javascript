function concatenar(string1, string2){

    let string3 = string1 + string2;
    
    aviso();
    return string3;
}

function aviso(){
    console.log("Acabou o processo!");
}




console.log(concatenar("Hello", "World"));