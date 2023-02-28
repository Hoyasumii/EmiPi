function redirect(targetPage) {
    window.location = `./wwwroot/pages/${targetPage}.html`;
}

/* Oq eu vou pegar é: uma seleção de classes .password-visivility e após isso, vou percorrer esse iterável colocando o seguinte: se o input tiver algum conteúdo, mostrar o botão. Esse botão funcionará como um switch que além de trocar o ícone, ele também, altera o tipo do input[type="password"] para input[type="text"] */

let pvItems = document.getElementsByClassName(`password-visibility`);

for (let index = 0; index < pvItems.length; index++) {
    let element = pvItems[index];
    let parentElement = element.parentElement;

    let passwordInput = parentElement.querySelector(`.form-input[type="password"]`)

    element.addEventListener(`click`, function() {
        element.innerText = (passwordInput.type == `password`) ? `visibility_off` : `visibility`;
        passwordInput.setAttribute(`type`, (passwordInput.type == `password`) ? `text` : `password`);
    });
    
    passwordInput.addEventListener(`keyup`, () => passwordInput.value.length > 0 ? element.style.display = `block` : element.style.display = `none` )

}