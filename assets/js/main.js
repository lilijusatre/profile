const icons = document.querySelectorAll("#icons");

icons.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
    // Agregamos una clase o modificamos el estilo directamente
    icon.style.transform = 'scale(1.2)';
});
    icon.addEventListener('mouseout', () => {
    // Restauramos la clase o estilo original
    icon.style.transform = 'scale(1)';
  });

});
const icons2 = document.querySelectorAll(".contact-icon");

icons2.forEach((icon)=> {
    icon.addEventListener("mouseover", ()=> {
        icon.style.color = "pink"
    });
    icon.addEventListener('mouseout', () => {
        // Restauramos la clase o estilo original
        icon.style.color = "black";
      });
});
const cards = document.querySelectorAll(".project_card");

cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
    // Agregamos una clase o modificamos el estilo directamente
    card.style.transform = 'scale(1.2)';
});
    card.addEventListener('mouseout', () => {
    // Restauramos la clase o estilo original
    card.style.transform = 'scale(1)';
  });
});