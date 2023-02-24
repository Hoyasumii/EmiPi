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
            console.log(`rodou`);
            return null;
    }

    let value = `rgb(${parseInt(red, 16)}, ${parseInt(green, 16)}, ${parseInt(blue, 16)})`;
    return value;
}

function setColors(className) {
    let classItem = document.getElementsByClassName(className);
    
    for (let index = 0; index < classItem.length; index++) {
        let parentElement = classItem[index].parentElement;

        for (let secondIndex = 0; secondIndex <= 7; secondIndex++) {
            let bodyProperty = getComputedStyle(document.body).getPropertyValue(`--black-${secondIndex}`).toString().trim();

            if (getComputedStyle(document.getElementById(parentElement.id)).backgroundColor == HEX2RGB(bodyProperty)) {
                classItem[index].style.setProperty(`background-color`,  getComputedStyle(document.body).getPropertyValue(`--black-${secondIndex + 1}`));
                classItem[index].style.setProperty(`box-shadow`, `1px 1px 5px ${getComputedStyle(document.body).getPropertyValue(`--black-${secondIndex - 1}`)}`);
                break;
                
            }
        }
    }
}

function loadCSS() {
    let path = window.location.pathname;
    let filename = path.split(`/`).pop();

    let loadCSS = document.createElement(`link`);
    loadCSS.rel = `stylesheet`;
    loadCSS.type = `text/css`;
    loadCSS.href = `./wwwroot/style/${(filename != ``) ? filename : "index"}.css`;
    console.log(`${(filename != ``) ? filename : "index"}.css`);
    document.getElementsByTagName(`head`)[0].appendChild(loadCSS);

    console.log(loadCSS);
}

setColors(`container`);
setColors(`button`);