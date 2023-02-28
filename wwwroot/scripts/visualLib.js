var currentTheme = [];

function setTheme(coolorsUrl) {

    coolorsUrl = coolorsUrl.split(`/`);
    coolorsUrl = coolorsUrl[coolorsUrl.length - 1].toUpperCase().split(`-`);

    coolorsUrl = coolorsUrl.map(item => item = `#${item}`);

    return coolorsUrl;
}

function HEX2RGB(hexCode) {
    hexCode = hexCode.slice(1);

    let [red, green, blue] = [0, 0, 0];

    switch (hexCode.length) {
        case 3:
            red = hexCode[0];
            green = hexCode[1];
            blue = hexCode[2];
            break;
        case 6:
            red = hexCode.slice(0, 2);
            green = hexCode.slice(2, 4);
            blue = hexCode.slice(4, 6);
            break;
        default:
            return null;
    }

    let value = `rgb(${parseInt(red, 16)}, ${parseInt(green, 16)}, ${parseInt(blue, 16)})`;
    return value;
}

function defineBackground(selectedItem, parent) {

    let parentStyle = getComputedStyle(parent);

    if (parentStyle.backgroundColor == undefined || parentStyle.backgroundColor == "" || parentStyle.backgroundColor == null || parentStyle.backgroundColor == "rgba(0, 0, 0, 0)") {
        if (selectedItem.id == `main-container`) {
            selectedItem.style.backgroundColor = currentTheme[1];
        }
        else {
            let grandfather = parent.parentElement;
            let grandfatherStyle = getComputedStyle(grandfather);

            for (let index = 0; index < currentTheme.length; index++) {
                if (grandfatherStyle.backgroundColor == HEX2RGB(currentTheme[index])) {
                    selectedItem.style.backgroundColor = currentTheme[index + 1];
                    break;
                }
            }
        }
    }
    else {
        for (let index = 0; index < currentTheme.length; index++) {
            if (parentStyle.backgroundColor == HEX2RGB(currentTheme[index])) {
                selectedItem.style.backgroundColor = currentTheme[index + 1];
                break;
            }
        }
    }
}

function defineShadow(selectedItem, parent, additionalParameters) {

    let parentStyle = getComputedStyle(parent);

    if (parentStyle.backgroundColor == undefined || parentStyle.backgroundColor == "" || parentStyle.backgroundColor == null || parentStyle.backgroundColor == "rgba(0, 0, 0, 0)") {

        let grandfather = parent.parentElement;
        parentStyle = getComputedStyle(grandfather);

    }

    for (let index = 0; index < currentTheme.length; index++) {
        if (parentStyle.backgroundColor == HEX2RGB(currentTheme[index])) {
            selectedItem.style.setProperty(`box-shadow`, `${additionalParameters} ${currentTheme[index - 1]}`)
        }
    }
}

function setColors (selectedItem, className = true, background = true, additionalParameters = "") {

    let selection = (className) ? document.getElementsByClassName(selectedItem) : document.getElementById(selectedItem);
    
    if (className && selection.length > 0) {
        for (let index = 0; index < selection.length; index++) {
            let parentElement = selection[index].parentElement;

            if (background) {
                defineBackground(selection[index], parentElement);
            }
            else {
                defineShadow(selection[index], parentElement, additionalParameters);
            }

        }
    }

    else if (!className && selection != null) {
        let parentElement = selection.parentElement;
        
        if (background) {
            defineBackground(selection, parentElement);
        }
        else {
            defineShadow(selection, parentElement, additionalParameters);
        }
    }
}

function centralize(element) {
    // vou dar o position absolute no filho e no pai, o position relative
    let parent = element.parentElement;

    let elementStyle = getComputedStyle(element);
    let parentStyle = getComputedStyle(parent);

    parent.style.position = `relative`;
    element.style.position = `absolute`;

    console.log(parentStyle.width);

    element.style.left = `${(parentStyle.width.slice(0, parentStyle.width.length - 2) / 2) - (elementStyle.width.slice(0, elementStyle.width.length - 2) / 2)}px`;

    // console.log(parent);
    console.log(`${(parentStyle.width.slice(0, parentStyle.width.length - 2) / 2) - (elementStyle.width.slice(0, elementStyle.width.length - 2) / 2)}px`);
}

currentTheme = setTheme(`https://coolors.co/palette/0a0a0a-141414-1f1f1f-292929-333333-3d3d3d-474747-525252`);

// let visibilityPassword = document.getElementById(`visibility-password`);
// .addEventListener(`click`, function () {
    
// });

// Base Components
setColors("main-container", false);
setColors("container");
setColors(`form`);
setColors(`form`, true, false, `1px 1px 5px`);
setColors(`card`);
setColors(`card`, true, false, `1px 1px 5px`)

// Components
setColors("button");
setColors(`button`, true, false, `1px 1px 5px`);
setColors(`form-container`);
setColors(`form-container`, true, false, `1px 1px 5px`);
setColors(`form-label`);
setColors(`form-checkbox`);
setColors(`form-checkbox`, true, false, `1px 1px 5px`);
setColors(`search-container`);
setColors(`search-container`, true, false, `1px 1px 5px`);
setColors(`search-button`);

// TODO: Criar um método de auto-ajuste do espaçamento conforme a mudança do tamanho da tela
// Dava pra eu criar um array de elementos que estão usando centralize, aí sempre que fosse fazer essa mudança, ele rodaria o centralize nessas funções