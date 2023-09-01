const butDarkMode = document.querySelector(".dark-mode-button");
	
if (localStorage.getItem('darkMode') === 'dark') {
	butDarkMode.classList.add("dark-mode-button--active");
	document.body.classList.add("dark");
}

// Ночная тема по системным настройкам
// Медиазапрос на проверку темной темы
// if (window.matchMedia && window.matchMedia("(prefers-color-sсheme: dark)").matches ) {
// 		butDarkMode.classList.add("dark-mode-button--active");
// 		document.body.classList.add("dark");
// }

// Включение ночного режима по кнопке
butDarkMode.onclick = function () {
	butDarkMode.classList.toggle("dark-mode-button--active");
	const isDark = document.body.classList.toggle('dark'); 
	// toggle используем для добавления или удаления класса dark. Метод toggle также возвращает true или faulse
	// После добавления класса на нужно понять на уровне скрипта добавился он или удалилися

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} 
	else {
		localStorage.setItem('darkMode', 'light')
	}
}