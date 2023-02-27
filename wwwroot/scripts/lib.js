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

function defineBackground(selectedItem, parent) {

    let parentStyle = getComputedStyle(parent);

    if (parentStyle.backgroundColor == undefined || parentStyle.backgroundColor == "" || parentStyle.backgroundColor == null || parentStyle.backgroundColor == "rgba(0, 0, 0, 0)") {
        if (selectedItem.id == `main-container`) {
            selectedItem.style.backgroundColor = backgroundPallete[1];
        }
        else {
            let grandfather = parent.parentElement;
            let grandfatherStyle = getComputedStyle(grandfather);

            for (let index = 0; index < backgroundPallete.length; index++) {
                if (grandfatherStyle.backgroundColor == HEX2RGB(backgroundPallete[index])) {
                    selectedItem.style.backgroundColor = backgroundPallete[index + 1];
                    break;
                }
            }
        }
        
    }
    else {
        for (let index = 0; index < backgroundPallete.length; index++) {
            if (parentStyle.backgroundColor == HEX2RGB(backgroundPallete[index])) {
                selectedItem.style.backgroundColor = backgroundPallete[index + 1];
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
            
            defineBackground(selection[index], parentElement);
        }
    }

    else if (!className && selection != null) {
        let parentElement = selection.parentElement;

        defineBackground(selection, parentElement);
    }

}

function setShadows(selectedItem, xDirection, yDirection, blur, className = true) {

    // Ele vai pegar o backgroundColor do pai e vai pegar a cor anterior dele na palheta
} /* 1px 1px 5px */

setColors("main-container", false);
setColors("button");