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
  "Благодарим Вас за выбор нашего продукта. Попробуйте и другие продукты нашего магазина. Например, идеальная Luxvisage Тушь для ресниц термо ELASTICA THERMO TUBING объем 8 г, артикул 1017553520. Далее, присмотритесь к теням для век и сделайте свой выбор: блеск? - Жидкие тени для век блестящие мерцающие Metal hype, белорусская косметика LUXVISAGE, артикул 916527201. Или нежность в стиле нюд? - Матовые тени для век COLOR MATT, артикул 1042691895. Ну и в завершении образа, нужно подумать о длине ресниц: Тушь для ресниц черная объем и удлинение Perfect Color luxvisage белорусская тушь без комочков, артикул 912133816.",
  "Мы признательны Вам за доверие к нашим продуктам. Среди наших товаров есть не только шикарная декоративная белорусская косметика Luxvisage, но и непревзойденные товары из Арабских Эмиратов бренда Petrova. Оцените сами: Парфюмированный лосьон для тела питательный, крем суфле с маслом увлажняющий, бальзам молочко для тела, артикул 1064773181 (пахнет просто восторг...). Но перед использованием, подготовьте кожу Парфюмированный гель скраб для тела антицеллюлитный женский, ухаживающий гель для душа, ежедневный уход за кожей, артикул 1064791339. Выходя из дома, не забудьте воспользоваться: Парфюмированный дезодорант шариковый от пота и запаха, антиперспирант женский, антиперсперант, артикул 1064741933. Он подарит уверенность на целый день.",
  "Благодарим, что Вы нашли время оценить товар. Среди наших товаров есть не только шикарная декоративная белорусская косметика Luxvisage, но и непревзойденные товары из Арабских Эмиратов бренда Petrova. Оцените сами: профессиональные шампуни: Шампунь для волос профессиональный 400 мл Кератин, артикул 1081198290 или шампунь для всей семьи: Шампунь для волос Против перхоти с мятой и древесным углем 600мл, артикул 1081198536. А для тела рекомендуем Питательный скраб для тела мерцающее золото 500мл, артикул 1089946345 и Гель для душа грейпфрут и арбуз, арабский, артикул 1090008752.",
  "А давайте попробуем что-нибудь новенькое? Например, Тушь для ресниц Fan! VOLUME пышные ресницы с эффектом объема, артикул 1017505443. Идеально дополнит наш эксперимент Тени для век палетка Glam Look Luxvisage тени для глаз, 2 матовых оттенка, 2 перламутровых оттенка для такого разного настроения, артикул 975624543. Ну и куда же без подводки для создания яркого, уверенного взгляда? - Подводка-фломастер для глаз водостойкая, черная, артикул 975595360. Закрепить ВАУ-эффект от вашего макияжа позволит Хайлайтер компактный Moonlight, артикул 1017502658.",
  "Наши рекомендации по идеальному макияжу в стиле Nude включают в себя: подготовку кожи: Крем-корректор тональный MATT CORRECTOR CAMOUFLAGE, артикул 1080255508. Далее - румяна, абсолютно совершенная текстура: Румяна для лица матовые сухие шелковистые SILK DREAM, белорусская косметика LUXVISAGE, артикул 918130320. Стойкие матовые тени, хит 2022-2023 года: Жидкие тени для век, белорусская косметика LUXVISAGE тени для глаз матовые стойкие Matt Tint, артикул 944495599. Ну и завершит шикарный макияж Коричневая тушь белорусская SECRET Секрет роскошных ресниц, объемная удлиняющая, артикул 912695088. Вы великолепны!",
  "Представляем также супер хиты для красивого, стойкого макияжа: Тушь для ресниц черная Smoky eyes накладные ресницы, удлиняющая и разделяющая, распахнутый взгляд Luxvisage, артикул 976530993. Теперь пора задуматься о привлекательности губ! Советуем: Помада для губ матовая стойкая PIN-UP ultra matt, LUXVISAGE белорусская помада, артикул 944464448, а также Карандаш для губ PIN-UP матовый, стойкий, артикул 1063691606. И не забудьте позаботиться о ровности и сиянии кожи, для этого рекомендуем использовать Тональный CC-крем для лица SPF 10, артикул 1041275024. Будьте прекрасны!",
  "Для потрясающего макияжа мы рекомендуем попробовать и другие наши продукты. Например, для стойкого макияжа подойдет Основа под макияж, маскирующая Prime Expert Anti Red, артикул 975860661. Стоит позаботиться и о стойкости теней для век, особенно актуально летом: Основа под тени для век, база под тени для лица, мейкап глаз белорусская косметика для макияжа Luxvisage, артикул: 1003946135. Придаст чарующий объем вашим ресницам знаменитая тушь: Тушь XXL для ресниц черная супер объем, тушь для ресниц белорусская LUXVISAGE объем и длина, артикул 918075428. Ну а идеально дополнит макияж суперстойкая Подводка фломастер для глаз водостойкая, лайнер для макияжа глаз VYNIL LINE waterproof 24H LUXVISAGE матовый, артикул 1042732023",
  "Представляем вашему вниманию пару идей для шикарного макияжа: Синяя тушь для ресниц Perfect Color веер пышных ресниц, luxvisage белорусская цветная тушь, артикул 917899744 для яркого смелого макияжа. Позвольте себе блестеть с нашими тенями: Жидкие тени для глаз с блестками мерцающие, глиттер для век с шиммером Glitter Rock, артикул 974984403. А вот блеск жирной кожи не украшает, поэтому важно использовать матовые средства, например Тональный крем матовый для лица Luxvisage Skin EVOLUTION основа база под макияж, артикул 974996009. Последний штрих: помада? - Помада для губ перламутровая стойкая, белорусская помада LUXVISAGE, артикул 931847160 или блеск? - Блеск тинт для губ с шиммером Glass Shine помада-бальзам для губ глянцевая увлажняющая Luxvisage с блестками и глиттером , артикул: 976526695.",
  "Спасибо, что выбираете нас! Если вы любите стойкий макияж, предпочитаете не заглядывать в зеркало каждые 5 минут, мы советуем: Карандаш для глаз мягкий, стойкий 1063640062. Как же раздражает текущая косметика...но это не про наши товары: Консилер для лица светоотражающий ULTRA HD soft focus 12H, артикул 1080255540. Ну а насладиться едой, напитками и горячими поцелуями позволит Помада для губ матовая супер стойкая MATT TATTOO, белорусская помада LUXVISAGE, артикул 936283149.",
  "Благодарим Вас за выбор нашего продукта! Для потрясающего макияжа мы рекомендуем попробовать и другие наши продукты. Например, идеально фиксирует бровки Гель для бровей прозрачный фиксирующий BROW SUPER FIX 12H (артикул 999137674). Если нужен цвет - тогда используйте Помадка тушь для бровей Brow Bar матовая стойкая, тени для бровей LUXVISAGE белорусская косметика, артикул 912133858. Наш абсолютный хит - Тушь для ресниц черная LUXVISAGE KILLER объем и удлинение, тушь для ресниц белорусская Luxvisage, артикул 912132744",
  "Спасибо за ваше внимание к нашим товарам! Обратите внимание на супер удачные новинки: Пудра матирующая для лица Ultra matt с зеркалом и спонжем, артикул 1040909164, на самые летние товары: Оттеночный гель-тинт для губ LIP TINT, артикул 1042713039 иkb Блеск для увеличения губ, тинт бальзам с шиммером Luxvisage ICON lips glossy volume тон 503 Nude rose глянцевый глиттер, дарящий сексуальный объем вашим губам, артикул 1004186347.",
];

const arrGoodbye = [
  "С наилучшими пожеланиями, Ваш Luan cosmetics",
  "С уважением, команда Luan cosmetics",
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
