function calcularRank(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas
    let nivel = ""

    //rank
    if (vitorias <= 10) {
        nivel = "ferro"

    } else if (vitorias <= 20) {
        nivel = "bronze"
        
    } else if (vitorias <= 50) {
        nivel = "prata"
        
    } else if (vitorias <= 50) {
        nivel = "ouro"
        
    } else if (vitorias <= 90) {
        nivel = "diamente"
        
    } else if (vitorias <= 100) {
        nivel = "lendario"
        
    } else {
        nivel ="imortal" 
    }
    return{saldoVitorias,nivel}
}

//resultado
let vitorias = 75
let derrotas = 20
//teste
let resultado = calcularRank(vitorias, derrotas)
console.log("O heroi tem saldo de" + resultado.saldoVitorias + "está no nível de" + resultado.nivel )