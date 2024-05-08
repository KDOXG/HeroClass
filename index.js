function saldoRankeadas(vitorias, derrotas) {
	return vitorias - derrotas;
}

let nomeHeroi = "Hero"
let nivel = 0
let vitorias = 20
let derrotas = 0

let saldo = saldoRankeadas(vitorias, derrotas)

let classes = ["Ferro", "Bronze", "Prata", "Prata", "Prata", "Ouro", "Ouro", "Ouro", "Diamante", "Lendario", "Imortal"]
let classe = classes[0]
for (let it = 0; it < saldo && it <= 100; it += 10) {
	classe = classes.shift()
}

console.log("O Herói tem de saldo de %d está no nível de %s", saldo, classe)