'use strict'
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');

const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const emailError = document.getElementById('email-error');

usernameInput.addEventListener('blur', () => {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,15}$/; // Пример: от 3 до 15 символов
    if (!usernameRegex.test(usernameInput.value)) {
        usernameError.textContent = 'Имя пользователя должно состоять из 3-15 букв, цифр или символов _ и -';
        usernameInput.classList.add('input-error');
    } else {
        usernameError.textContent = '';
        usernameInput.classList.remove('input-error');
    }
});

passwordInput.addEventListener('blur', () => {
    const passwordRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/; // Пример: минимум 8 символов, хотя бы 1 буква и 1 цифра
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'Пароль должен содержать минимум 8 символов, включая буквы и цифры';
        passwordInput.classList.add('input-error');
    } else {
        passwordError.textContent = '';
        passwordInput.classList.remove('input-error');
    }
});

emailInput.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простой проверочный шаблон для электронной почты
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Введите корректный адрес электронной почты';
        emailInput.classList.add('input-error');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('input-error');
    }
});