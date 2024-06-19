function openmenu() {
    document.getElementById("sidemenu").classList.add("show");
}

function closemenu() {
    document.getElementById("sidemenu").classList.remove("show");
}

// Obtén el modal
let modal = document.getElementById('modal');

// Obtén la imagen dentro del modal y el caption
let modalImg = document.getElementById('modalImg');
let captionText = document.getElementById('caption');

// Obtén todas las imágenes dentro del contenedor
let imgs = document.querySelectorAll('.container img');

// Añade el evento click a cada imagen
imgs.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Obtén el elemento de cierre del modal
let span = document.getElementsByClassName('close')[0];

// Cuando se haga clic en el elemento de cierre, cierra el modal
span.onclick = function() {
    modal.style.display = 'none';
}