document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('eye-image');
    const text = document.getElementById('text');
    let isDefaultText = true; // Estado para controlar o texto

    image.addEventListener('click', function() {
        if (isDefaultText) {
            text.textContent = 'R$ 5.000,00';
            isDefaultText = false;
            image.src = 'IMG/eye-open.png';
        } else {
            text.textContent = 'R$ -----';
            isDefaultText = true;
            image.src = 'IMG/eye-closed.png';
        }
    });
});