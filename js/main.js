const btnDarkMode = document.querySelector(".dark-mode-btn");

// Проверка темной темы по приоритетам

// 1. Проверка темной темы на уровне системных настроек
// window.matchMedia - проверяем есть ли возможность делать запросы к windows
// window.matchMedia("(prefers-color-scheme: dark").matches - запрос к windows на наличие темной темы

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
}


// Проверка темнойтемы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove('dark');
}



// Если меняются системные настройки (если автоматически в течении дня система
// переключается с одной темы на другую) - меняем  тему

window
    .matchMedia("(prefers-color-scheme: dark")
    .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? "dark" : "light";  
        
        // alert("Theme had been changed!!!");

        if (newColorScheme === 'dark') {
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'dark');
        } else {
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', 'light');
        }
})

    
// Включение ночного режима по кнопке
btnDarkMode.onclick = () => {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    
    // Определяем, какой режим включен
    const isDark = document.body.classList.toggle("dark");

    // Сохраняем режим в localStorage
    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');

    }
}


const projectsAll = document.querySelector('main .projects');

// Заполняем все проекты из базы (projects.js)
projects.forEach((item) => {
    // console.log(item.id + " " + item.title + " " + item.img);
    // console.log("-----");
    projectsAll.innerHTML += `<li class="project" onclick="projectDetails(${item.id})">
            <a href="./project-page.html">
                <img src="./img/projects/${item.img}" alt="Project img" class="project__img">
                <h3 class="project__title">${item.title}</h3>
            </a>
        </li`;
});


// Сохраняем 'id' выбранного проекта, для последующего использования в "подробно"
function projectDetails(id) {
     
    localStorage.setItem('projectId', id);
 }