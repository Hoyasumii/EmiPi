function redirect(targetPage) {
    window.location = `./wwwroot/pages/${targetPage}.html`;
}

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