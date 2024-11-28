// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.boxShadow = "0 8px 10px rgba(0, 0, 0, 0.4)";
        });

        button.addEventListener('mouseout', () => {
            button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
        });
    });

    console.log("Halaman telah dimuat dan animasi telah diterapkan.");
});
