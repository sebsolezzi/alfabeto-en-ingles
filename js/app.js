const titulo = document.querySelector('.titulo');

document.addEventListener('DOMContentLoaded', () => {

    const botones = document.querySelectorAll('.btn');

    botones.forEach(boton => {
        boton.addEventListener('click', reproducirSonido);
    });
});

/* reproducción de sonido */
function reproducirSonido(e) {

    let letra = e.target.value;

    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", `sounds/${letra}.mp3`);
    etiquetaAudio.play();

    titulo.innerText = `${letra}`;
    titulo.textContent = letra.toUpperCase();

}



