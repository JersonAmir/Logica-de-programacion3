document.addEventListener('DOMContentLoaded', function() {
    let input = prompt("Introduce un número para calcular su factorial:");
    let number = parseInt(input);

    while (isNaN(number)) {
        alert("Error: Debes ingresar un número válido.");
        input = prompt("Introduce un número para calcular su factorial:");
        number = parseInt(input);
    }

    const result = factorial(number);
    const outputDiv = document.getElementById('result');
    outputDiv.innerHTML = `El factorial de ${number} es: ${result}`;

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
});