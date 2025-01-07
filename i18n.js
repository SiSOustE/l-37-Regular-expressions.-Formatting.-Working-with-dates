'use strict'
// Настройка i18next
import ru from "../data/ru.js";
import en from "../data/en.js";
import { updateLanguage } from "./upDtLng.js";
import { handleFormSubmission } from "./form.js";

i18next.init({
    lng: 'ru',
    resources: {
        ru,
        en
    }
}, function (err, t) {
    updateLanguage();
});

// Переключение языка
const languageToggle = document.getElementById('language-toggle')
languageToggle.addEventListener('click', function () {
    const newLang = i18next.language === 'ru' ? 'en' : 'ru';
    i18next.changeLanguage(newLang, () => {
        updateLanguage();
    });
});

// Обработка отправки формы
const registrationForm = document.getElementById('registrationForm')
registrationForm.addEventListener('submit', handleFormSubmission);