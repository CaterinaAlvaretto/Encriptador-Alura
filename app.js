


// Obtener texto encriptado 


// Encriptar texto
/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar(texto) {
    const mapeo = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return texto.split('').map(char => mapeo[char] || char).join('');
}


function desencriptar(texto) {
    // Realizamos las sustituciones en el orden inverso a como fueron encriptadas
    // Primero reemplazamos los fragmentos más largos para evitar conflictos

    const mapeoInverso = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return texto.replace(/enter|imes|ai|ober|ufat/g, matched => mapeoInverso[matched]);
}


console.log(encriptar(texto))
// Des encriptar texto

// Mostrar texto 

function validarMinusculas(input) {
    // Elimina cualquier carácter que no sea una letra minúscula
    input.value = input.value.replace(/[^a-z\s]/g, '');
}

let textoDesEncriptado = document.getElementById("maincontent_output_div_text")
textoDesEncriptado.innerHTML = encriptar(texto)

function encriptarTextoIngresado(){
    let texto = document.getElementById("maintext").value;
    document.getElementById("maincontent_output_div_text").innerHTML = encriptar(texto)
}

function desencriptarTextoIgresado(){
    let texto = document.getElementById("maintext").value;
    document.getElementById("maincontent_output_div_text").innerHTML = desencriptar(texto)
}

function copiarTexto() {
    // Obtén el elemento textarea
    const texto = document.getElementById('maincontent_output_div_text').value;
    
    // Usa el API del portapapeles
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles!');
    }).catch(err => {
        alert('Error al copiar: ' + err);
    });
}