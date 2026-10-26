export type CityId = "shanghai" | "beijing" | "shenzhen" | "guangzhou";

export interface QuizOption {
  id: string;
  label: string;
  city: CityId;
  feedback?: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  visual: QuizVisual;
  options: QuizOption[];
}

export interface QuizVisual {
  symbol?: string;
  pinyin?: string;
  translation?: string;
  lang?: "zh";
  image?: string;
  alt?: string;
}

export interface CityResult {
  name: string;
  emoji: string;
  image: string;
  guideId: GuideId;
  description: string;
}

export type GuideId = "fashion" | "travel";

export interface QuizGuide {
  title: string;
  cover: string;
  price: string;
}

export const questions: QuizQuestion[] = [
  {
    id: "free-time",
    prompt: "Как ты проводишь досуг?",
    visual: {
      image: "/images/dosug.webp",
      alt: "Прогулка по городу",
    },
    options: [
      {
        id: "books-and-films",
        label: "чилю дома",
        city: "beijing",
      },
      {
        id: "walk-and-music",
        label: "гуляю по городу",
        city: "shenzhen",
      },
      {
        id: "exhibitions-and-museums",
        label: "хожу на выставки",
        city: "shanghai",
      },
      {
        id: "friends-and-food",
        label: "еду куда то поесть",
        city: "guangzhou",
      },
    ],
  },
  {
    id: "mountain",
    prompt: "Что ты здесь видишь?",
    visual: {
      symbol: "山",
      lang: "zh",
    },
    options: [
      {
        id: "swords",
        label: "три меча",
        city: "shenzhen",
        feedback: "Почти: линии правда выглядят остро, но это гора. 3000 лет назад знак рисовали как три пика, а потом он стал квадратнее.",
      },
      {
        id: "mountain",
        label: "гора",
        city: "beijing",
        feedback: "Точно, это гора. 3000 лет назад знак рисовали как три пика, а со временем он просто стал квадратнее.",
      },
      {
        id: "temple",
        label: "храм",
        city: "shanghai",
        feedback: "Красивая ассоциация, но это гора. 3000 лет назад знак рисовали как три пика, а потом он стал квадратнее.",
      },
      {
        id: "steps",
        label: "ступени",
        city: "guangzhou",
        feedback: "Похоже на ступени, но на самом деле это гора. Древняя форма изображала три пика и со временем стала квадратнее.",
      },
    ],
  },
  {
    id: "music",
    prompt: "Какую музыку ты любишь?",
    visual: {
      image: "/images/music.webp",
      alt: "Наушники",
    },
    options: [
      {
        id: "lana-del-rey",
        label: "Lana Del Rey",
        city: "beijing",
        feedback: "А кто не любит Ланочку. Ты любишь меланхоличную  музыку, под которую хочется красиво грустить.",
      },
      {
        id: "madk1d",
        label: "madk1d",
        city: "shenzhen",
        feedback: "Попался, нефор. Тебе нужен драйв, резкие ощущения, и чувство, что ночь только начинается.",
      },
      {
        id: "bts",
        label: "BTS",
        city: "shanghai",
        feedback: "Если вы любите китайский то скорее всего твой биас – J-Hope. BTS легенды.",
      },
      {
        id: "miyagi-and-andy-panda",
        label: "Miyagi & Andy Panda",
        city: "guangzhou",
        feedback: "Ты что тут забыл? Ладно, наверное ты любишь расслабленный тёплый вайб – музыка для долгой дороги и спокойного вечера.",
      },
    ],
  },
  {
    id: "computer",
    prompt: "Что это значит дословно?",
    visual: {
      symbol: "电脑",
      pinyin: "diànnǎo",
      translation: "компьютер",
      lang: "zh",
    },
    options: [
      {
        id: "light-of-knowledge",
        label: "свет знаний",
        city: "shanghai",
        feedback: "Звучит поэтично, но ответ – «электрический мозг»: 电 – электричество, 脑 – мозг. Всё буквально.",
      },
      {
        id: "iron-box",
        label: "железная коробка",
        city: "guangzhou",
        feedback: "Логично, но дословно это «электрический мозг»: 电 – электричество, 脑 – мозг. Китайский здесь работает как конструктор.",
      },
      {
        id: "talking-machine",
        label: "говорящая машина",
        city: "beijing",
        feedback: "Очень близко по смыслу, но дословно – «электрический мозг»: 电 – электричество, 脑 – мозг.",
      },
      {
        id: "electric-brain",
        label: "электрический мозг",
        city: "shenzhen",
        feedback: "Да: 电 – электричество, 脑 – мозг. Китайский собирает новые понятия как конструктор из знакомых частей.",
      },
    ],
  },
  {
    id: "trendy",
    prompt: "Что это значит у зумеров?",
    visual: {
      symbol: "潮",
      pinyin: "cháo",
      translation: "влага, сырость",
      lang: "zh",
    },
    options: [
      {
        id: "fresh",
        label: "свежий",
        city: "shenzhen",
        feedback: "Очень близкая ассоциация, но точнее – «трендовый». Отсюда 潮流 (cháoliú) – мода или тренд.",
      },
      {
        id: "heavy",
        label: "депрессивный",
        city: "beijing",
        feedback: "Настроение угадано не совсем: у зумеров 潮 значит «трендовый». Отсюда 潮流 (cháoliú) – мода или тренд.",
      },
      {
        id: "stylish",
        label: "трендовый",
        city: "shanghai",
        feedback: "Именно: 潮 – это «трендовый». Отсюда 潮流 (cháoliú) – мода или тренд; так говорят про одежду и людей.",
      },
      {
        id: "affordable",
        label: "доступный",
        city: "guangzhou",
        feedback: "Не совсем: у зумеров 潮 значит «трендовый». Отсюда 潮流 (cháoliú) – мода или тренд.",
      },
    ],
  },
  {
    id: "new-city",
    prompt: "Что ты первым делом делаешь в новом городе?",
    visual: {
      image: "/images/coffee.webp",
      alt: "Кофе в городской кофейне",
    },
    options: [
      {
        id: "architecture",
        label: "изучаю архитектуру",
        city: "beijing",
      },
      {
        id: "coffee-shops",
        label: "ищу кофейни",
        city: "shanghai",
      },
      {
        id: "shopping-mall",
        label: "иду в ТЦ",
        city: "shenzhen",
      },
      {
        id: "local-food",
        label: "пробую местную еду",
        city: "guangzhou",
      },
    ],
  },
  {
    id: "wechat",
    prompt: "Что это значит когда пишут в WeChat?",
    visual: {
      symbol: "520",
    },
    options: [
      {
        id: "order",
        label: "номер заказа",
        city: "guangzhou",
        feedback: "В переписке смысл романтичнее: 520 звучит похоже на 我爱你 – «я тебя люблю». Поэтому 20 мая отмечают как день влюблённых.",
      },
      {
        id: "love",
        label: "я тебя люблю",
        city: "shanghai",
        feedback: "Да: 520 звучит похоже на 我爱你 (wǒ ài nǐ) – «я тебя люблю». Поэтому 20 мая стало неофициальным днём влюблённых.",
      },
      {
        id: "meeting",
        label: "встречаемся в 5:20",
        city: "beijing",
        feedback: "Буквально прочитать можно и так, но в WeChat это «я тебя люблю»: 520 звучит похоже на 我爱你 (wǒ ài nǐ).",
      },
      {
        id: "unlock",
        label: "код разблокировки",
        city: "shenzhen",
        feedback: "На код похоже, но это признание: 520 звучит похоже на 我爱你 – «я тебя люблю». Поэтому важная дата – 20 мая.",
      },
    ],
  },
];

export const quizGuides: Record<GuideId, QuizGuide> = {
  fashion: {
    title: "Фэшн-чайниз",
    cover: "/images/fc-cover.webp",
    price: "2 990 ₽",
  },
  travel: {
    title: "В Китай без китайского",
    cover: "/images/vkbk-cover.webp",
    price: "990 ₽",
  },
};

export const cityResults: Record<CityId, CityResult> = {
  shanghai: {
    name: "Шанхай",
    emoji: "🌆",
    image: "/images/sh.webp",
    guideId: "fashion",
    description:
      "Тебе близки стиль, быстрый ритм и яркий Шанхай. Продолжи знакомство с живым китайским вместе с «Фэшн-чайниз».",
  },
  beijing: {
    name: "Пекин",
    emoji: "🏯",
    image: "/images/bj.webp",
    guideId: "travel",
    description:
      "Тебе близки история, традиции и неспешный Пекин. Подготовься к поездке вместе с гайдом «В Китай без китайского».",
  },
  shenzhen: {
    name: "Шэньчжэнь",
    emoji: "🚀",
    image: "/images/sz.webp",
    guideId: "fashion",
    description:
      "Тебе близки технологии, скорость и современный Шэньчжэнь. Продолжи знакомство с живым языком вместе с «Фэшн-чайниз».",
  },
  guangzhou: {
    name: "Гуанчжоу",
    emoji: "🏪",
    image: "/images/gz.webp",
    guideId: "travel",
    description:
      "Тебе близки деловой ритм, рынки и практичный Гуанчжоу. Подготовься к поездке вместе с гайдом «В Китай без китайского».",
  },
};
