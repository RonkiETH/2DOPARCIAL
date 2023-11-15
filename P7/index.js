document.addEventListener("DOMContentLoaded", function() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const resultadoDiv = document.getElementById("resultado");

    function actualizarResultado() {
        const num1 = parseInt(input1.value) || 0;
        const num2 = parseInt(input2.value) || 0;
        const suma = num1 + num2;

        resultadoDiv.textContent = `Suma: ${suma}`;

        if (suma > 90) {
            resultadoDiv.style.backgroundColor = "green";
        } else if (suma > 50 && suma <= 90) {
            resultadoDiv.style.backgroundColor = "yellow";
        } else {
            resultadoDiv.style.backgroundColor = "red";
        }
    }

    input1.addEventListener("input", actualizarResultado);
    input2.addEventListener("input", actualizarResultado);

    actualizarResultado();
});