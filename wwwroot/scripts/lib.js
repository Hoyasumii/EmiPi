var currentTheme = [];

function setTheme(coolorsUrl) {

    coolorsUrl = coolorsUrl.split(`/`);
    coolorsUrl = coolorsUrl[coolorsUrl.length - 1].toUpperCase().split(`-`);

    coolorsUrl = coolorsUrl.map(item => item = `#${item}`);

    return coolorsUrl;
}

console.log(currentTheme);

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

/* define (selectedItem, parent, background = true, additionalParameters = "") */

function defineBackground(selectedItem, parent) {

    // console.log(currentTheme);

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

// function defineShadow(selectedItem, parent, additionalParameters) {

// }

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
/* 
function setShadows(selectedItem, xDirection, yDirection, blur, className = true) {

    let selection = (className) ? document.getElementsByClassName(selectedItem) : document.getElementById(selectedItem);




    // Ele vai pegar o backgroundColor do pai e vai pegar a cor anterior dele na palheta
} // 1px 1px 5px */

// let x = setTheme(`dark-theme`);
// console.log(`oi`)



currentTheme = setTheme(`https://coolors.co/palette/0a0a0a-141414-1f1f1f-292929-333333-3d3d3d-474747-525252`);

setColors("main-container", false);
setColors("button");