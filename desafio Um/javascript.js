
const resulTotal = function () {
    let quilo = document.getElementById("km").value;
    let litro = document.getElementById("lt").value;
    let total = quilo / litro
    document.getElementById("resultado").textContent = "O consumo médio do seu veículo é de: " + total

    let gasolina = document.getElementById('ga').value;
    let alcol = document.getElementById('al').value;
    let comparacao = alcol / gasolina;
    document.getElementById("comparaçao").textContent = "A relação entre o preço do litro do álcool e da gasolina é de: " + comparacao;


}

const resulCompa = function(){

    var gasolina = document.getElementById('ga').value;
    var alcol = document.getElementById('al').value;

    if (alcol < gasolina) {
        document.getElementById("vantajoso").textContent = "Considerando a relação de preços, é mais vantajoso abastecer com álcool!"+alcol;
    } else if (alcol ==  gasolina) {
        document.getElementById("vantajoso").textContent = "Considerando a semelhança dos preços nenhum e vantajoso!."+gasolina;
    } else {
        document.getElementById("vantajoso").textContent = "Considerando a relação de preços, é mais vantajoso abastecer com a gasolina!"+gasolina;
    }
    
}