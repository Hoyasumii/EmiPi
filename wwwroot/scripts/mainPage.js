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

// A ideia é: Navegar pelos .nav-container e se o href de algum a for igual ao nome do arquivo da página, adicionar a class material-symbols-outlined e o data-value deles, atribuindo-os ao innerText