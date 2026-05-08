function calcularRank(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas
    let nivel = ""

    //rank
    switch (true) {
        case (vitorias <= 10):
            nivel = ferro 
            break
        case (vitorias <= 20):
            nivel = bronze
            break

        case (vitorias <= 50):
        nivel = "prata";
        break;

        case (vitorias <= 80):
        nivel = "ouro";
        break;

        case (vitorias <= 90):
        nivel = "diamante";
        break;
        
        case (vitorias <= 100):
        nivel = "lendario";
        break;
        
        default:
        nivel = "imortal";
    }

    

//resultado
let vitorias = 75
let derrotas = 20

let resultado = calcularRank(vitorias, derrotas)
console.log("O heroi tem saldo de" + resultado.saldoVitorias + "está no nível de" + resultado.nivel )}