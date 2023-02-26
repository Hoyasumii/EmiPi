let backgroundPallete = ["#0A0A0A", "#141414", "#1F1F1F", "#292929", "#333", "#3D3D3D", "#474747", "#525252"];

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

function defineBackground(selectedItem, parentStyle) {
    if (parentStyle.backgroundColor == undefined || parentStyle.backgroundColor == "" || parentStyle.backgroundColor == null || parentStyle.backgroundColor == "rgba(0, 0, 0, 0)") {
        selectedItem.style.backgroundColor = backgroundPallete[1];
    }
    else {
        for (let secondIndex = 0; secondIndex < backgroundPallete.length; secondIndex++) {
            if (parentStyle.backgroundColor == HEX2RGB(backgroundPallete[secondIndex])) {
                selectedItem.style.backgroundColor = backgroundPallete[secondIndex + 1];
                break;
            }
        }
    }
}

function setColors(selectedItem, className = true) {

    let selection = (className) ? document.getElementsByClassName(selectedItem) : document.getElementById(selectedItem);
    
    if (className && selection.length > 0) {
        for (let index = 0; index < selection.length; index++) {
            let parentElement = selection[index].parentElement;
            let parentStyle = getComputedStyle(parentElement);
            
            defineBackground(selection[index], parentStyle);
        }
    }

    else if (!className && selection != null) {
        let parentElement = selection.parentElement;
        let parentStyle = getComputedStyle(parentElement);

        defineBackground(selection, parentStyle);
    }

}

function setShadows(selectedItem, xDirection, yDirection, blur, className = true) {} /* 1px 1px 5px */

setColors("main-container", false);
setColors("container");
setColors("button");