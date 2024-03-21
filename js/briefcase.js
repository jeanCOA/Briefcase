const cardContainer = document.getElementById('cardContainer');

// Datos de ejemplo para las cards
const cardData = [
  { imageSrc: '../img/DOMjavascript.webp', description: 'Project-1', skills: [{ iconSrc: '../img/my-sql-48.png', link: '' }, ], link: 'https://www.example.com/page1' },
  { imageSrc: '../img/DOMjavascript.webp', description: 'Project-2', skills: [{ iconSrc: '../img/my-sql-48.png', link: 'https://www.example.com/icono3' },], link: 'https://www.example.com/page2' },
  { imageSrc: '../img/DOMjavascript.webp', description: 'Project-3', skills: [{ iconSrc: 'icono6.png', link: 'https://www.example.com/icono6' }], link: 'https://www.example.com/page3' },
  { imageSrc: '../img/DOMjavascript.webp', description: 'Project-4', skills: [{ iconSrc: 'icono6.png', link: 'https://www.example.com/icono6' }], link: 'https://www.example.com/page3' },
  { imageSrc: '../img/DOMjavascript.webp', description: 'Project-5', skills: [{ iconSrc: 'icono6.png', link: 'https://www.example.com/icono6' }], link: 'https://www.example.com/page3' },
  { imageSrc: '../img/DOMjavascript.webp', description: 'Project-6', skills: [{ iconSrc: 'icono6.png', link: 'https://www.example.com/icono6' }], link: 'https://www.example.com/page3' },
  { imageSrc: '../img/DOMjavascript.webp', description: 'Project-7', skills: [{ iconSrc: 'icono6.png', link: 'https://www.example.com/icono6' }], link: 'https://www.example.com/page3' },
  { imageSrc: '../img/DOMjavascript.webp', description: 'Project-8', skills: [{ iconSrc: 'icono6.png', link: 'https://www.example.com/icono6' }], link: 'https://www.example.com/page3' }
];

// Función para crear las cards
function createCards() {
  cardData.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('card');

    const link = document.createElement('a'); // Crear el enlace para la imagen de la tarjeta
    link.href = data.link; // Establecer el enlace para la imagen de la tarjeta
    link.target = "_blank"; // Abrir en una nueva pestaña

    const image = document.createElement('img');
    image.src = data.imageSrc;

    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = data.description;

    const skills = document.createElement('div');
    skills.classList.add('skills');
    data.skills.forEach(skill => {
      const iconLink = document.createElement('a'); // Crear el enlace para el icono
      iconLink.href = skill.link; // Establecer el enlace para el icono
      iconLink.target = "_blank"; // Abrir en una nueva pestaña

      const icon = document.createElement('img');
      icon.src = skill.iconSrc;
      iconLink.appendChild(icon); // Agregar el icono al enlace
      skills.appendChild(iconLink); // Agregar el enlace con el icono al contenedor de habilidades
    });

    description.appendChild(skills);
    link.appendChild(image); // Agregar la imagen al enlace de la tarjeta
    card.appendChild(link); // Agregar el enlace de la tarjeta al contenedor de la tarjeta
    card.appendChild(description); // Agregar la descripción al contenedor de la tarjeta
    cardContainer.appendChild(card); // Agregar la tarjeta al contenedor principal
  });
}

// Llamar a la función para crear las tarjetas cuando la página se cargue
window.onload = createCards;
