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

// class Carrousel {
//     target;
//     targetStyle;
//     targetSize;
//     position = 0;
//     padding = 15;

//     constructor(target) {
//         this.target = target;
//         console.log(target);
//         this.targetStyle = getComputedStyle(this.target);
//         this.targetSize = this.targetStyle.width;
//     }

// }

function carrousselMove(target, actualPosition) {
    let targetStyle = getComputedStyle(target);
    let targetSize = parseFloat(targetStyle.width.slice(0, targetStyle.width.length - 2));
    console.log(actualPosition + ':' + targetSize + `:` + target.offsetWidth)
    // actualPosition = -targetSize - 45;

    // if ((actualPosition * (- 1)) > targetSize) {
    //     // console.log(actualPosition)
    // }

    target.style.transform = `translateX(${actualPosition}px)`; /* TODO: Criar um método para saber a quantidade de itens no carrossel e com base nisso, definir uma posição mínima e máxima */
}