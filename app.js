//todo: hacer el front de la calculadora
const process = require("process");

const {argv} = process;
const sumar = require("./sumar")

function calculadora(comando, a,b) {
    switch (comando) {
        case "sumar":
            return sumar(a,b)
            break;
        case "restar":
    
            break;
        case "multiplicar":
    
            break;
        case "dividir":
            break;
    
        default:
            return "comando no válido"
    }
}


console.log(calculadora(argv[2],+argv[3],+argv[4]));