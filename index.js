document.addEventListener("DOMContentLoaded", function () {
    const notaFinalValor = document.querySelector(".form__nota-final__valor");
    const preguntas = document.querySelectorAll(".form__group");
    const notaSelects = document.querySelectorAll(".form__notas");

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    let notaFinal = 0.0;

    // Función para calcular la nota final
    function calcularNotaFinal() {
        notaFinal = 0.0;
        preguntas.forEach((pregunta, index) => {
            const notaSelect = notaSelects[index];
            const nota = parseFloat(notaSelect.options[notaSelect.selectedIndex].value);
            notaFinal += nota;

            console.log(`Pregunta ${index + 1} - Nota: ${nota}`);

            // Cambiar el fondo del párrafo según la nota
            const parrafo = pregunta.querySelector(".form__p");
            if (nota === 0) {
                parrafo.style.backgroundColor = "pink";
            } else if (nota === 0.5) {
                parrafo.style.backgroundColor = "yellow";
            } else if (nota === 1) {
                parrafo.style.backgroundColor = "green";
            } else {
                parrafo.style.backgroundColor = "white";
            }
        });

        // Cambiar el fondo de la nota final según la nota final
        if (notaFinal < 4) {
            notaFinalValor.style.backgroundColor = "pink";
        } else if (notaFinal >= 4 && notaFinal < 7) {
            notaFinalValor.style.backgroundColor = "yellow";
        } else {
            notaFinalValor.style.backgroundColor = "green";
        }
      // Actualizar el valor de la nota final
        notaFinalValor.textContent = notaFinal.toFixed(1);
    }

    // Agregar listeners para los selects de notas
    notaSelects.forEach((select) => {
        select.addEventListener("change", calcularNotaFinal);
    });

    // Agregar listeners para los radio buttons de columnas
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            const form = document.querySelector(".form");
            if (this.value === "1 columna") {
                form.classList.add("one_column");
            } else if (this.value === "2 columnas") {
            form.classList.remove("one_column");
            }
        });
    });
    // Calcular la nota final al cargar la página
    calcularNotaFinal();
    console.log(notaFinal);
});

