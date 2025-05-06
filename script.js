// Элементы DOM
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Массив цитат на русском
const quotes = [
  { content: "Жизнь — это путешествие, а не пункт назначения.", author: "Ральф Уолдо Эмерсон" },
  { content: "Будь изменением, которое ты хочешь видеть в мире.", author: "Махатма Ганди" },
  { content: "Успех — это способность идти от одной неудачи к другой без потери энтузиазма.", author: "Уинстон Черчилль" },
  { content: "Лучше зажечь свечу, чем проклинать тьму.", author: "Китайская пословица" },
  { content: "Счастье не в том, чтобы иметь все, а в том, чтобы получать удовольствие от того, что имеешь.", author: "Неизвестный автор" },
  { content: "Мечты становятся реальностью, когда мысли превращаются в действия.", author: "Неизвестный автор" },
  { content: "Каждая стена — это дверь.", author: "Ральф Уолдо Эмерсон" },
  { content: "Не бойтесь быть собой, ведь оригинал всегда лучше копии.", author: "Неизвестный автор" },
  { content: "Самое большое путешествие начинается с одного шага.", author: "Лао-цзы" },
  { content: "Время, которое ты любишь тратить, не потеряно.", author: "Марта Грэм" }
];

// Функция для получения случайной цитаты
async function getQuote() {
  try {
    // Показать лоадер, скрыть текст
    loader.style.display = 'block';
    quoteText.style.display = 'none';
    authorText.style.display = 'none';

    // Имитация задержки
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Выбрать случайную цитату
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Скрыть лоадер, показать текст
    loader.style.display = 'none';
    quoteText.style.display = 'block';
    authorText.style.display = 'block';

    // Обновить текст
    quoteText.textContent = randomQuote.content;
    authorText.textContent = `— ${randomQuote.author}`;
  } catch (error) {
    // Скрыть лоадер при ошибке
    loader.style.display = 'none';
    quoteText.style.display = 'block';
    authorText.style.display = 'block';
    quoteText.textContent = 'Ошибка загрузки цитаты';
    authorText.textContent = '';
    console.error('Ошибка:', error);
  }
}

// Загрузить цитату при загрузке страницы
getQuote();

// Загрузить новую цитату при клике на кнопку
newQuoteBtn.addEventListener('click', getQuote);