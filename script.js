let numeroSecreto = Math.floor(Math.random() * 100)+ 1;
		console.log(numeroSecreto)

		function adivinhar() {
			let palpite = parseInt(document.getElementById("palpite").value);
			let resultado = document.getElementById("resultado");

			if ( palpite === numeroSecreto ){
				resultado.innerText = "Parabens! Você acertou!";
			} else if ( palpite < numeroSecreto){
				resultado.innerText = "Tente um numero maior.";
			} else {
				resultado.innerText = "Tente um numero menor.";
			}
		}