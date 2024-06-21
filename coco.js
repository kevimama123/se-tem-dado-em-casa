var nome = document.querySelector("#nome")
var ler_defesa = parseInt(nivel.value)
nome.addEventListener("change",lerNome)




function lerNome() {
    var nome = document.getElementById("nome");
    var nivel = document.getElementById("nivel");

    if (nivel.value <= 4) {
        nome.value += "{iniciante}";
    } else if (nivel.value >= 5) {
        nome.value += "{veterano}";
    }
}
function ler_defesa() {
    var agilidade = document.getElementById("agilidade");
    var armadura = document.getElementById("armadura");
	var defesa = document.getElementById("defesa");

	if (defesa.value) {
		
        agilidade.value+armadura.value == defesa;
        
}

// Rolagem De Dados //

// function RolarD6()(

//     const NumeroDado = document.getElementById("D6T").value;
//     const Dado6R = document.getElementById("D6resultado");
//     const Dado6I = document.getElementById("D6Image");
//     const value = [];
//     const Images = [];


//     for(let i = 0; i < NumeroDado; i++){
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//     }

//     console.log(values);
// )