const enlace = document.getElementById('continue_button_final');

    enlace.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        localStorage.setItem('level', '1');
        const href = 'https://universidad.audifarma.com.co/eva/mod/audiverso/view.php?id=14882'; // URL de la página a la que deseas navegar
        window.location.href = href; // Realiza la navegación a la página especificada
   });