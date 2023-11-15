document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const formGroups = document.querySelectorAll(".form_group");
    const formGroupsCheckbox = document.querySelectorAll(".form_group-checkox");
    const inputsRadio = document.querySelectorAll(".input_radio");

    formGroups.forEach((formGroup) => {
        formGroup.addEventListener("change", (event) => {
            const clickedCheckbox = event.target;

            if (clickedCheckbox.type === "checkbox" && clickedCheckbox.checked) {
                const checkboxes = formGroup.querySelectorAll(".checkbox");
                checkboxes.forEach((checkbox) => {
                    if (checkbox !== clickedCheckbox) {
                        checkbox.checked = false;
                    }
                });
            }
        });
    });

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