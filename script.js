// Функция для отображения формы логина
function showLoginForm() {
	const loginOverlay = document.getElementById('loginOverlay');
	loginOverlay.style.display = 'flex'; // Сначала показываем оверлей, но без фона и формы
	// Даем браузеру время для отрисовки перед анимацией (важно для правильной работы)
	setTimeout(() => {
		loginOverlay.classList.add('active');
	}, 10);
	document.body.style.overflow = 'hidden'; // предотвращаем прокрутку страницы под оверлеем
}

// Функция для скрытия формы логина
function closeLoginForm() {
	const loginOverlay = document.getElementById('loginOverlay');
	
	// Деактивируем класс активности для запуска анимации скрытия
	loginOverlay.classList.remove('active');
	// Ждм окончание анимации перед полным закрытем окна формы
	setTimeout(() => {
		loginOverlay.style.display = 'none';
		document.body.style.overflow = 'auto'; // возвращаем нормальную прокрутку страницы
	}, 400); // Время должно совпадать с длительностью CSS-перехода 
	
}

// Добавляем обработчик события для кнопки "Войти" в шапке страницы
document.addEventListener('DOMContentLoaded', function() {
	const loginButton = document.querySelector('.head_btn.gray');
	if (loginButton) {
		loginButton.addEventListener('click', showLoginForm);
	}
	
	// Закрытие формы при клине вне области формы
	const loginOverlay = document.getElementById('loginOverlay');
	const loginForm = document.querySelector('.login-form');
	
	if (loginOverlay && loginForm) {
		loginOverlay.addEventListener('click', function(event) {
			if (event.target === loginOverlay) {
				closeLoginForm();
			}
		});
	}
});