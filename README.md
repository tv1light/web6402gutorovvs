**ФИО:** Гуторов Владислав Сергеевич  
**Научный руководитель:** Минаев Евгений Юрьевич  
**Тема научной работы:** Разработка информационной технологии определения пространственного положения БПЛА по изображениям земной поверхности.
> Делай как надо, как не надо не делай

Д. Стетхем

---
# Лабораторная работа 2

Задание на программирование: разработать многостраничный web-сайт на произвольно выбранную тему
с использованием технологий HTML и CSS, загрузить проект в репозиторий.

1. Количество страниц – от 3 до 5.
2. Требования к HTML:  
   2.1. Использование блочных и строчных элементов.  
   2.2. Ссылки – от 1 шт.  
   2.3. Картинки – от 1 шт.  
   2.4. Таблица – от 1 шт.  
3.	Требование к CSS:  
   3.1. Отдельный подключаемый файл.  
   3.2.	Обязательное использование как минимум 3 видов селекторов.  
   3.3.	Использование цвета.  
   3.4.	Использование различных видов выравнивания в таблице (по левому/правому краю и по центру).
4.	Запрещено использовать JS, Bootstrap и любые другие библиотеки и фреймворки, всё реализовать самостоятельно.

# Лабораторная работа 4

# Проект: Сайт рецептов коктейлей

## Описание проекта
Данный проект представляет собой веб-сайт, на котором можно ознакомиться с рецептами популярных коктейлей. Пользователь может просматривать рецепты, загружать дополнительные рецепты с сервера, а также добавлять свои собственные рецепты через специальную форму.

---

## Основные функции
1. **Просмотр рецептов коктейлей:**
   - Главная страница содержит карточки коктейлей с краткой информацией и ссылками на полные описания.
2. **Загрузка дополнительных рецептов:**
   - Кнопка "Загрузить коктейли" позволяет получить новые рецепты из mock-сервера.
3. **Добавление нового коктейля:**
   - Кнопка "Добавить коктейль" ведет на страницу, где можно заполнить форму для добавления нового рецепта (отправляется POST-запрос на сервер).
4. **Интерактивный дизайн:**
   - Сайт адаптирован для удобного использования и имеет анимации, улучшенные визуальные элементы.

---

## Технологии
- **HTML:** Структура сайта.
- **CSS:** Стилизация страниц, включая анимации и адаптивный дизайн.
- **JavaScript:**
   - Работа с DOM для динамического отображения коктейлей.
   - Обработка событий.
   - Асинхронные запросы к mock-серверу.
- **Mock JSON Server:** Для эмуляции API и работы с данными коктейлей.

---

## Установка и запуск
1. **Клонируйте репозиторий:**
   ```bash
   git clone <URL_репозитория>
   ```

2. **Установите зависимости:**
   Убедитесь, что установлен Node.js, и выполните:
   ```bash
   npm install -g json-server
   ```

3. **Запустите mock-сервер:**
   ```bash
   json-server --watch path/to/cocktails.json --port 8000
   ```

4. **Откройте сайт:**
   Откройте файл `index.html` в браузере.

---

## Структура проекта
```
├── index.html          # Главная страница
├── pages/              # Подробные страницы коктейлей и форма добавления
│   ├── add-cocktail.html
│   ├── long-island.html
│   ├── margarita.html
│   ├── mai-tai.html
│   └── penicillin.html
├── styles/             # Стили
│   ├── styles.css
│   └── cocktail.css
├── scripts/            # Скрипты (если вынесены отдельно)
├── resources/          # Изображения и другие ресурсы
└── cocktails.json      # Файл mock-данных
```

---

## Пример данных (cocktails.json)
```json
{
  "cocktails": [
    {
      "id": 1,
      "name": "Long Island Iced Tea",
      "ingredients": ["Vodka", "Rum", "Gin", "Tequila", "Triple Sec", "Lemon Juice", "Coke"],
      "description": "A refreshing mix of multiple spirits with a tangy flavor."
    },
    {
      "id": 2,
      "name": "Margarita",
      "ingredients": ["Tequila", "Triple Sec", "Lime Juice", "Salt"],
      "description": "A classic tequila-based cocktail with a tangy, salty rim."
    }
  ]
}
```

---


