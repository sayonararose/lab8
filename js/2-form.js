//Зберігання даних форми
const formData = { email: "", message: "" };
const form = document.querySelector('.feedback-form');

// Завантажуємо дані із локального сховища при завантаженні сторінки
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
    const data = JSON.parse(savedData);
    formData.email = data.email || "";
    formData.message = data.message || "";
    form.email.value = formData.email;
    form.message.value = formData.message;
}

// Відстежуємо зміни у формах 
form.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Обробляємо відправлення форми
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
        alert('Будь ласка, заповніть усі поля');
        return;
    }

    console.log('Відправлені дані:', formData);

    // Очищуємо локальне сховище та об'єкт formData
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();  // Очищуємо поля форми
});
