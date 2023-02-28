setColors(`header`, false, false, `0px 1px 5px`);

centralize(document.getElementById(`music-search`));

let albumCpos = 0;

document.getElementById(`album-c-before`).addEventListener(`click`, () => {
    albumCpos += 200 + 15;
    carrousselMove(document.getElementById(`album-c`), albumCpos)
});

document.getElementById(`album-c-next`).addEventListener(`click`, () => {
    albumCpos -= 200 + 15;
    carrousselMove(document.getElementById(`album-c`), albumCpos)
});