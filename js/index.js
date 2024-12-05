const images = [
    {
        preview: './img/1 (1).jpg',
        original: './img/1.jpg',
        description: 'фото1',
    },
    {
        preview: './img/2 (1).jpg',
        original: './img/2.jpg',
        description: 'фото2',
    },
    {
        preview: './img/3(1).jpg',
        original: './img/3.jpg',
        description: 'фото3',
    },
    {
        preview: './img/4(1).jpg',
        original: './img/4.jpg',
        description: 'фото4',
    },
    {
        preview: './img/5(1).jpg',
        original: './img/5.jpg',
        description: 'фото5',
    },
    {
        preview: './img/6(1).jpg',
        original: './img/6.jpg',
        description: 'фото6',
    },
    {
        preview: './img/7(1).jpg',
        original: './img/7.jpg',
        description: 'фото7',
    },
    {
        preview: './img/8(1).jpg',
        original: './img/8.jpg',
        description: 'фото8',
    },
    {
        preview: './img/9(1).jpg',
        original: './img/9.jpg',
        description: 'фото9',
    }
];

// Отримуємо елемент галереї
const gallery = document.querySelector('.gallery');

// Створюємо HTML розмітку
images.forEach(image => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery-item');

    listItem.innerHTML = `
        <a href="${image.original}" data-lightbox="mygallery">
            <img src="${image.preview}" alt="${image.description}">
        </a>
    `;

    gallery.appendChild(listItem);
});

// Делегування події на ul.gallery
gallery.addEventListener('click', function(event) {
    // Перевірка, чи клікнули на зображення
    if (event.target.tagName === 'IMG') {
        // Отримуємо велике посилання на зображення
        const originalImageLink = event.target.parentElement.href;
        console.log('Велике зображення:', originalImageLink);
    }
});
