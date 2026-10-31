export interface Guide {
  slug: string;
  title: string;
  eyebrow: string;
  accent: "fashion" | "travel";
  description: string;
  price: string;
  cover: string;
  sideImages: {
    left: string;
    right: string;
  };
  advantages: Array<{
    id: string;
    label: string;
    description: string;
    image: string;
    imageAlt: string;
  }>;
  audiences: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  }>;
  previewPages: Array<{
    image: string;
    alt: string;
  }>;
  contents: Array<{
    label: string;
    image: string;
    imageAlt: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
    avatar: string;
  }>;
  purchaseUrl: string | null;
}

export const guides: Guide[] = [
  {
    slug: "fashion-chinese",
    title: "Фэшн чайниз",
    eyebrow: "Китайский для модниц",
    accent: "fashion",
    description: "Китайский язык через стиль, тренды и слова, которые встречаются вокруг.",
    price: "2 990 ₽",
    cover: "/images/fc-cover.webp",
    sideImages: {
      left: "/images/fc-content.webp",
      right: "/images/fc-page.webp",
    },
    advantages: [
      {
        id: "organized-vocabulary",
        label: "Всё по полочкам",
        description: "От названий одежды до фасонов, цветов и размеров. Нужная лексика собрана по категориям, чтобы не искать её по разным источникам.",
        image: "/images/advantages/po-polochkam.webp",
        imageAlt: "Визуальный пример преимущества «Всё по полочкам»",
      },
      {
        id: "more-details",
        label: "Больше деталей",
        description: "Узнавай названия конкретных фасонов и деталей одежды, чтобы точнее описывать вещи, которые тебе нравятся.",
        image: "/images/advantages/details.webp",
        imageAlt: "Визуальный пример преимущества «Больше деталей»",
      },
      {
        id: "visual-examples",
        label: "Наглядные примеры",
        description: "Иллюстрации помогают связать китайские названия с реальными предметами одежды.",
        image: "/images/advantages/naglyadno.webp",
        imageAlt: "Визуальный пример преимущества «Наглядные примеры»",
      },
      {
        id: "chinese-for-fun",
        label: "Китайский в кайф",
        description: "Учись через то, что любишь, пополняй словарный запас через моду и стиль — темы, к которым хочется возвращаться.",
        image: "/images/advantages/kaif.webp",
        imageAlt: "Визуальный пример преимущества «Китайский в кайф»",
      },
    ],
    audiences: [
      {
        id: "fashion-lovers",
        title: "Любишь моду",
        description: "Следишь за трендами и хочешь говорить о любимой одежде.",
        image: "/images/looks/look-1.webp",
        imageAlt: "Девушка в первом модном образе",
      },
      {
        id: "detail-lovers",
        title: "Учишь китайский",
        description: "Если ты устала от одних и тех же учебных тем, используй то, что тебе действительно интересно.",
        image: "/images/looks/look-7.webp",
        imageAlt: "Девушка в третьем модном образе",
      },
      {
        id: "chinese-learners",
        title: "Баер / блогер",
        description: "Хочешь лучше понимать названия, фасоны и характеристики вещей, а не лезть в переводчик каждый раз.",
        image: "/images/looks/look-2.webp",
        imageAlt: "Девушка во втором модном образе",
      },
    ],
    previewPages: [
      {
        image: "/images/fc-cover.webp",
        alt: "Обложка гайда «Фэшн чайниз»",
      },
      {
        image: "/images/fc-content.webp",
        alt: "Содержание гайда «Фэшн чайниз»",
      },
      {
        image: "/images/fc-page.webp",
        alt: "Страница гайда «Фэшн чайниз» с лексикой о видах обуви",
      },
    ],
    contents: [
      { label: "Верх", image: "/images/content/fc/hoodie.webp", imageAlt: "Верхняя часть образа" },
      { label: "Низ", image: "/images/content/fc/pants.webp", imageAlt: "Нижняя часть образа" },
      { label: "Платья", image: "/images/content/fc/dress.webp", imageAlt: "Платье" },
      { label: "Верхняя одежда", image: "/images/content/fc/puffer.webp", imageAlt: "Верхняя одежда" },
      { label: "Обувь", image: "/images/content/fc/shoes.webp", imageAlt: "Обувь" },
      { label: "Сумки", image: "/images/content/fc/bag.webp", imageAlt: "Сумка" },
      { label: "Аксессуары", image: "/images/content/fc/accessories.webp", imageAlt: "Аксессуары" },
      { label: "Цвета", image: "/images/content/fc/colors.webp", imageAlt: "Леопардовый принт" },
      { label: "Принты", image: "/images/content/fc/pattern.webp", imageAlt: "Карточка с оттенком цвета" },
    ],
    faq: [
      {
        question: "Подойдёт ли гайд, если я только начинаю учить китайский?",
        answer: "Да. Слова даны с иероглифами, пиньинем и переводом, поэтому материал можно использовать с начального уровня.",
        avatar: "/images/jk.webp",
      },
      {
        question: "Что я найду внутри «Фэшн чайниз»?",
        answer: "Лексику про одежду, обувь, аксессуары, цвета, материалы и другие детали образа — с визуальными примерами.",
        avatar: "/images/v.webp",
      },
      {
        question: "Можно ли заниматься по гайду самостоятельно?",
        answer: "Да. Открывай нужную тему в удобном порядке и возвращайся к словам, когда захочется освежить их в памяти.",
        avatar: "/images/jimin.webp",
      },
    ],
    purchaseUrl: null,
  },
  {
    slug: "china-without-chinese",
    title: "В Китай без китайского",
    eyebrow: "Обязательно для поездки",
    accent: "travel",
    description: "Фразы для первых дней в Китае: от аэропорта и такси до заказа еды.",
    price: "990 ₽",
    cover: "/images/vkbk-cover.webp",
    sideImages: {
      left: "/images/vkbk-content.webp",
      right: "/images/vkbk-page.webp",
    },
    advantages: [
      {
        id: "ready-phrases",
        label: "Готовые фразы",
        description: "Не нужно самостоятельно составлять предложения.",
        image: "/images/advantages/gotovie-frazi.webp",
        imageAlt: "Визуальный пример преимущества «Готовые фразы»",
      },
      {
        id: "by-situation",
        label: "По ситуациям",
        description: "Такси, кафе, отель, покупки и другие задачи.",
        image: "/images/advantages/po-situaciyam.webp",
        imageAlt: "Визуальный пример преимущества «По ситуациям»",
      },
      {
        id: "from-zero",
        label: "Даже с нуля",
        description: "Можно пользоваться, не зная китайского, благодаря переводу и понятной подаче.",
        image: "/images/advantages/s-nulya.webp",
        imageAlt: "Визуальный пример преимущества «Даже с нуля»",
      },
      {
        id: "always-nearby",
        label: "Всегда под рукой",
        description: "Можно быстро найти нужную фразу на телефоне.",
        image: "/images/advantages/pod-rukoy.webp",
        imageAlt: "Визуальный пример преимущества «Всегда под рукой»",
      },
    ],
    audiences: [
      {
        id: "independent-travelers",
        title: "Знаешь базу, но боишься",
        description: "Уже знаешь несколько слов и выражений, но в реальной ситуации теряешься.",
        image: "/images/looks/look-6.webp",
        imageAlt: "Девушка в шестом образе",
      },
      {
        id: "chinese-beginners",
        title: "Не хочешь теряться",
        description: "Хочешь самостоятельно едить по городу, заказывать еду без помощи окружающих.",
        image: "/images/looks/look-4.webp",
        imageAlt: "Девушка в четвёртом образе",
      },
      {
        id: "china-travelers",
        title: "Едешь в Китай",
        description: "Хочешь чувствовать себя увереннее в аэропорту, отеле, кафе и других ситуациях во время поездки.",
        image: "/images/looks/look-5.webp",
        imageAlt: "Девушка в пятом образе",
      },
    ],
    previewPages: [
      {
        image: "/images/vkbk-cover.webp",
        alt: "Обложка гайда «В Китай без китайского»",
      },
      {
        image: "/images/vkbk-content.webp",
        alt: "Содержание гайда «В Китай без китайского»",
      },
      {
        image: "/images/vkbk-page.webp",
        alt: "Страница гайда «В Китай без китайского» с готовыми фразами",
      },
    ],
    contents: [
      { label: "Аэропорт", image: "/images/content/vkbk/airport.webp", imageAlt: "Аэропорт в Китае" },
      { label: "Такси", image: "/images/content/vkbk/taxi.webp", imageAlt: "Такси" },
      { label: "Метро", image: "/images/content/vkbk/subway.webp", imageAlt: "Метро в Китае" },
      { label: "Отель", image: "/images/content/vkbk/hotel.webp", imageAlt: "Номер в отеле" },
      { label: "Еда и напитки", image: "/images/content/vkbk/food.webp", imageAlt: "Еда и напитки" },
      { label: "Покупки", image: "/images/content/vkbk/shopping.webp", imageAlt: "Покупки в Китае" },
      { label: "Оплата в городе", image: "/images/content/vkbk/china.webp", imageAlt: "Город в Китае" },
      { label: "Общение", image: "/images/content/vkbk/friends.webp", imageAlt: "Общение в поездке" },
      { label: "И многое другое", image: "/images/content/vkbk/cinema.webp", imageAlt: "Отдых в Китае" },
    ],
    faq: [
      {
        question: "Нужно ли знать китайский перед поездкой?",
        answer: "Нет. У фраз есть иероглифы, пиньинь и русский перевод, а нужную фразу можно показать собеседнику.",
        avatar: "/images/jk.webp",
      },
      {
        question: "Для каких ситуаций пригодится гайд?",
        answer: "Для аэропорта, транспорта, отеля, кафе, оплаты, связи и других повседневных моментов поездки.",
        avatar: "/images/v.webp",
      },
      {
        question: "Будет ли гайд работать без интернета?",
        answer: "Да. После скачивания PDF можно открыть офлайн на телефоне, планшете или компьютере.",
        avatar: "/images/jimin.webp",
      },
    ],
    purchaseUrl: null,
  },
];
