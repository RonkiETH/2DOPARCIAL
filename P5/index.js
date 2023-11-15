document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const formGroups = document.querySelectorAll(".form_group");
    const selects = document.querySelectorAll(".select");
    const inputsRadio = document.querySelectorAll(".input_radio");
    const notaFinalValor = document.querySelector(".nota_p");
    let notaFinal = 0.0;

    function calcularNotaFinal() {
        notaFinal = 0.0;
        formGroups.forEach((formGroup, index) => {
            const select = selects[index];
            const nota = parseFloat(select.options[select.selectedIndex].value);

            notaFinal += nota;

            const textarea = formGroup.querySelector(".textarea");

            if(nota === 0) {
                textarea.style.backgroundColor = "pink";
            } else if (nota === 0.5) {
                textarea.style.backgroundColor = "yellow";
            } else if (nota === 1) {
                textarea.style.backgroundColor = "green";
            }

            if(notaFinal < 4) {
                notaFinalValor.style.backgroundColor = "pink";
            } else if (notaFinal >= 4 && notaFinal < 7) {
                notaFinalValor.style.backgroundColor = "yellow";
            } else if (notaFinal >= 7) {
                notaFinalValor.style.backgroundColor = "green";
            }

            notaFinalValor.textContent = notaFinal;
        })
    }

    selects.forEach((select) => {
        select.addEventListener('change', calcularNotaFinal);
    })

    inputsRadio.forEach((inputRadio) => {
        inputRadio.addEventListener("change", () => {
            if(inputRadio.value == "one_column") {
                form.classList.add("one_column")
            } else if(inputRadio.value == "two_column") {
                form.classList.remove("one_column")
            }
        })
    })
})