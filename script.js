let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassaword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefgijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

sizePassaword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassaword.innerHTML = this.value;
}

function generetePassword() {
    let pas = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pas += charset.charAt(Math.floor(Math.random() * n));

    }


    containerPassword.classList.remove("hide");
    password.innerHTML = pas;
    novaSenha = pas;
}

function copyPassword() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}



