function main() {
	let nomeHeroi = "Hero"
	let xpHeroi = 0
	
	let classes = ["Ferro", "Bronze", "Prata", "Prata", "Prata", "Ouro", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
	let classe = classes[0]
	for (let it = 0; it < xpHeroi && it <= 10000; it += 1000) {
		classe = classes.shift()
	}
	console.log("O Herói de nome %s está no nível de %s", nomeHeroi, classe)
}

main()