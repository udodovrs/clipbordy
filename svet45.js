import clipboard from "clipboardy";

const getRandomItem = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

//-----OZON 4-5*
const arrGreeteng = [
  "Добрый день!",
  "Здравствуйте!",
  "Приветствуем Вас!",
  "Добро пожаловать в наш магазин!",
  "Здравствуйте, Спасибо, что вы нашли время оценить товар!",
  "Добрый день! Спасибо, остальным покупателям будет полезен ваш отзыв",
  "Благодарим за Ваш отзыв!",
  "Спасибо за высокую оценку!",
];

const arrGratitude = [
   "Благодарим Вас за выбор нашего товара. У вас отличный вкус! В нашем ассортименте вы всегда найдете вещи по своим шикарным размерам. В преддверии Нового года, обратите внимание на вещи для корпоративов, например 179372288 Платье трапеция вечернее нарядное а силуэт Омелия. Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Мы признательны Вам за доверие к нашим товарам. В нашем ассортименте представлены модные модели одежды, которые очень красят прекрасных женщин с особенной фигурой! Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Спасибо за высокую оценку и обратную связь! Вы делаете нас лучше! Заходите к нам почаще и радуйся себя шикарными обновками, мы работаем для Вас! Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Спасибо за Ваш положительный отзыв! Пусть наша одежда всегда дарит Вам только радость! В холодный сезон позаботьтесь о сохранении тепла и выбирайте теплые модные брючки или куртки, которые не дадут замерзнуть в промозглое время года! Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Спасибо за ваше внимание к нашим товарам! Наша миссия – обеспечить женщин с аппетитными формами достойной модной одеждой по хорошим ценам! А в преддверии праздников, еще и помочь им выглядеть блистательно на корпоративах и семейных торжествах. Поэтому, присмотритесь к очень удачной модели платья – 145110118 Платье вечернее больших размеров. Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Спасибо, что выбираете нас! Очень важно чтобы не только женщины размера XS могли одеваться стильно и удобно, но, чтобы все прекрасные дамы, вне зависимости от бирки на одежде выглядели модно и чувствовали себя уверенно. Поэтому, загляните в наш магазин еще раз и выберете себе обновку в радость! Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Благодарим, что Вы нашли время оценить товар. Мы рады делать стильными женщин размера плюс сайз так как искренне верим, что красота женщины не в размере её одежды! Обратите, пожалуйста, и на другие наши товары, у нас вы всегда найдете модные и качественные вещи по вашей фигуре. Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Благодарим Вас за положительный отзыв! Может, вас порадуют и другие наши товары, например 156477607 Брючный костюм тройка больших размеров oversize Есения, идеальный выбор для офиса и праздничного выхода! Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Мы рады работать для Вас! Наша одежда – подчеркивает то, на чём нужно сделать акцент и скрывает то, что вы бы хотели скрыть! Добавляйте наш магазин в Любимые бренды и у вас всегда будет возможность купить одежду нужного размера без мучительных поисков! Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Спасибо, что выбрали нашу продукцию! Она была создана, чтобы украшать ваши шикарные формы. У нас регулярно появляются модные, стильные новинки нужных размеров. Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Спасибо за ваш отзыв! Наш магазин ориентирован на женщин с исключительными запросами и потребностями. И мы рады будем помочь вам выглядеть стильно и модно в любой ситуации. Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Спасибо, что оставили положительный отзыв! Мы понимаем, что именно хотят женщины с аппетитными формами от одежды и всегда готовы вам помочь выглядеть ярко и модно. Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Благодарим Вас за приятный отзыв! Нас всегда очень радует, когда благодаря нашей одежде в мире становится на одну счастливую женщину больше! Заходите к нам еще и радуйте себя качественной стильной одеждой по ВАШИМ параметрам! Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё.",
   "Спасибо, что нашли время и уделили внимание нашему товару! Надеемся, что наша одежда будет доставлять вам положительные эмоции весь срок своей службы на благо вашей красоты и комфорта! Напоминаем, что актуальная размерная сетка всегда представлена в фото товара, ориентируйтесь на неё."
];

const arrGoodbye = [ 
  "Будем рады снова видеть Вас в числе наших покупателей!",
  "Всегда рады видеть Вас снова!",
  "Наслаждайтесь покупками!",
  "Будем рады видеть Вас снова!",
  "Удачных Вам покупок",
];

setInterval(() => {
  const text =
    getRandomItem(arrGreeteng) +
    " " +
    getRandomItem(arrGratitude) +
    " " +
    getRandomItem(arrGoodbye);

  clipboard.write(text);
}, 1500);
