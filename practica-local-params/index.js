let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const nombre = document.querySelector(".name");
    const password = document.querySelector(".password");
    const submit = document.querySelector(".submit")
    const form = document.querySelector(".form")

    

    function registerUser(username, contraseña) {
        const user = {
            username,
            contraseña
        }
        usuarios.push(user)
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    function handleRegistration(e) {
        e.preventDefault();
        const username = nombre.value;
        const contraseña = password.value;

        registerUser(username, contraseña)
    }
    form.addEventListener("submit", handleRegistration)




