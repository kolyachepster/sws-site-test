// ============================================
// БАЗА ДАННЫХ SWS - Sound Wave Studio
// ============================================

// 1. БАЗА ДАННЫХ ТАЙТЛОВ
window.titlesDatabase = [
    {
        id: 'attack_on_titan',
        name: 'Атака Титанов',
        name_en: 'Attack on Titan',
        image: 'aot.jpg',
        poster: 'aot-poster.jpg',
        type: 'completed',
        status: 'Завершён',
        year: 2023,
        episodes_count: 87,
        seasons: 4,
        rating: 9.0,
        genres: ['Экшн', 'Драма', 'Фэнтези'],
        description: 'Эпическая история о борьбе человечества с гигантскими титанами.',
        videoUrl: 'https://vk.com/video_ext.php?oid=-123456789&id=456239001&hash=1b3f5a7e9d2c4b8a',
        characters: [
            { name: 'Эрен Йегер', name_en: 'Eren Yeager', voiceId: 'raskolnikov', voiceName: 'Раскольников', image: 'eren.jpg' },
            { name: 'Леви Аккерман', name_en: 'Levi Ackerman', voiceId: 'dnt', voiceName: 'DNT', image: 'levi.jpg' },
            { name: 'Армин Арлерт', name_en: 'Armin Arlert', voiceId: 'spartans', voiceName: 'Юный Спартанец', image: 'armin.jpg' }
        ],
        episodes: [
            { number: 1, title: 'Твой дом', title_en: 'To You, in 2000 Years', videoUrl: 'https://vk.com/video_ext.php?oid=-123456789&id=456239001&hash=1b3f5a7e9d2c4b8a', isAvailable: true, hasSkip: true, skipText: 'Skip Opening (00:00 - 01:30)' },
            { number: 2, title: 'Этот день', title_en: 'That Day', videoUrl: 'https://vk.com/video_ext.php?oid=-123456789&id=456239002&hash=2c4g6b8f0e3d5c9b', isAvailable: true, hasSkip: true, skipText: 'Skip Opening (00:00 - 01:28)' },
            { number: 3, title: 'Блестящие тени', title_en: 'A Dim Light Amid Despair', videoUrl: 'https://vk.com/video_ext.php?oid=-123456789&id=456239003&hash=3d5h7c9g1f4e6d0c', isAvailable: true, hasSkip: true, skipText: 'Skip Opening (00:00 - 01:32)' },
            { number: 4, title: 'Ночь битвы', title_en: 'The Night of the Closing Ceremony', videoUrl: 'https://vk.com/video_ext.php?oid=-123456789&id=456239004&hash=4e6i8d0h2g5f7e1d', isAvailable: true, hasSkip: false },
            { number: 5, title: 'Первый шаг', title_en: 'First Battle', videoUrl: 'https://vk.com/video_ext.php?oid=-123456789&id=456239005&hash=5f7j9e1i3h6g8f2e', isAvailable: true, hasSkip: false },
            { number: 6, title: 'Рассвет', title_en: 'The World the Girl Saw', videoUrl: 'https://vk.com/video_ext.php?oid=-123456789&id=456239006&hash=6g8k0f2j4i7h9g3f', isAvailable: true, hasSkip: true, skipText: 'Skip Opening (00:00 - 01:35)' },
            { number: 7, title: 'Выбор', title_en: 'Choice', videoUrl: '', isAvailable: false, hasSkip: false },
            { number: 8, title: 'Удар', title_en: 'Strike', videoUrl: '', isAvailable: false, hasSkip: false },
            { number: 9, title: 'Воспоминания', title_en: 'Memories', videoUrl: '', isAvailable: false, hasSkip: false },
            { number: 10, title: 'Ответ', title_en: 'Answer', videoUrl: '', isAvailable: false, hasSkip: false }
        ]
    },
    {
        id: 'demon_slayer',
        name: 'Клинок, рассекающий демонов',
        name_en: 'Demon Slayer: Kimetsu no Yaiba',
        image: 'ds.jpg',
        poster: 'ds-poster.jpg',
        type: 'completed',
        status: 'Завершён',
        year: 2024,
        episodes_count: 55,
        seasons: 4,
        rating: 8.9,
        genres: ['Экшн', 'Фэнтези', 'Драма'],
        description: 'История юноши по имени Тандзиро Камадо, который становится охотником на демонов.',
        videoUrl: 'https://vk.com/video_ext.php?oid=-123456789&id=456239101&hash=7h9l1g3k5j8i0h4g',
        characters: [
            { name: 'Тандзиро Камадо', name_en: 'Tanjiro Kamado', voiceId: 'chep', voiceName: 'chep', image: 'tanjiro.jpg' },
            { name: 'Нэзуко Камадо', name_en: 'Nezuko Kamado', voiceId: 'nezuko', voiceName: 'Nezuko-va', image: 'nezuko.jpg' }
        ],
        episodes: [
            { number: 1, title: 'Жестокость', title_en: 'Cruelty', videoUrl: 'https://vk.com/video_ext.php?oid=-123456789&id=456239101&hash=7h9l1g3k5j8i0h4g', isAvailable: true, hasSkip: true, skipText: 'Skip Opening (00:00 - 01:30)' },
            { number: 2, title: 'Первый учитель', title_en: 'First Teacher', videoUrl: '', isAvailable: false, hasSkip: false },
            { number: 3, title: 'Меч', title_en: 'Sword', videoUrl: '', isAvailable: false, hasSkip: false }
        ]
    },
    {
        id: 'jujutsu_kaisen',
        name: 'Магическая битва',
        name_en: 'Jujutsu Kaisen',
        image: 'jjk.jpg',
        poster: 'jjk-poster.jpg',
        type: 'ongoing',
        status: 'Онгоинг',
        year: 2025,
        episodes_count: 47,
        seasons: 2,
        rating: 8.8,
        genres: ['Экшн', 'Сверхъестественное', 'Фэнтези'],
        description: 'Студент Юдзи Итадори проглатывает палец проклятия и становится охотником на проклятия.',
        videoUrl: 'https://vk.com/video_ext.php?oid=-123456789&id=456239201&hash=8i0m2h4l6k9j1i5h',
        characters: [
            { name: 'Юдзи Итадори', name_en: 'Yuji Itadori', voiceId: 'chep', voiceName: 'chep', image: 'yuji.jpg' },
            { name: 'Годзё Сатору', name_en: 'Satoru Gojo', voiceId: 'raskolnikov', voiceName: 'Раскольников', image: 'gojo.jpg' }
        ],
        episodes: [
            { number: 1, title: 'Сильный', title_en: 'Ryomen Sukuna', videoUrl: 'https://vk.com/video_ext.php?oid=-123456789&id=456239201&hash=8i0m2h4l6k9j1i5h', isAvailable: true, hasSkip: true, skipText: 'Skip Opening (00:00 - 01:30)' },
            { number: 2, title: 'Проклятие', title_en: 'Curse', videoUrl: '', isAvailable: false, hasSkip: false }
        ]
    }
];

// 2. БАЗА ДАННЫХ ДАББЕРОВ
window.teamDatabase = [
    {
        id: 'raskolnikov',
        name: 'Раскольников',
        name_en: 'Raskolnikov',
        image: 'ава-raskolnikov.jpg',
        status: '🎭 Владелец, актёр дубляжа',
        joinDate: '2020',
        bio: 'Основатель и владелец студии SWS. Занимаюсь дубляжом с 2020 года.',
        categories: ['main'],
        social: {
            telegram: '@raskolnikov_va',
            vk: 'raskolnikov_va'
        }
    },
    {
        id: 'dnt',
        name: 'DNT',
        name_en: 'DNT',
        image: 'ава-dnt.jpg',
        status: '🎭 Совладелец, сводчик, актёр дубляжа',
        joinDate: '2020',
        bio: 'Совладелец студии, занимаюсь сведением звука и озвучкой.',
        categories: ['main', 'tech'],
        social: {
            telegram: '@dnt_va',
            github: 'dnt-voice'
        }
    },
    {
        id: 'spartans',
        name: 'Юный Спартанец',
        name_en: 'Young Spartan',
        image: 'ава-spart.jpg',
        status: '🎭 Совладелец, сводчик, актёр дубляжа',
        joinDate: '2021',
        bio: 'Совладелец студии. Занимаюсь сведением и озвучкой.',
        categories: ['main', 'tech'],
        social: {
            telegram: '@young_spartans',
            vk: 'young_spartans'
        }
    },
    {
        id: 'chep',
        name: 'chep',
        name_en: 'chep',
        image: 'ава-chep.jpg',
        status: '🎙️ Актёр дубляжа, разработчик',
        joinDate: '2021',
        bio: 'Актёр дубляжа и разработчик сайта.',
        categories: ['main', 'tech'],
        social: {
            telegram: '@chep_va',
            github: 'chep-voice'
        }
    },
    {
        id: 'doza_narkoza',
        name: 'Doza_Narkoza',
        name_en: 'Doza_Narkoza',
        image: 'ава-doza.jpg',
        status: '🎙️ Актёр дубляжа',
        joinDate: '2022',
        bio: 'Актёр дубляжа. Специализируюсь на драматических ролях.',
        categories: ['main'],
        social: {
            telegram: '@doza_va'
        }
    }
];

// 3. БАЗА ДАННЫХ НОВОСТЕЙ
window.newsDatabase = [
    {
        id: 1,
        title: '🎉 Добро пожаловать на новый сайт SWS!',
        title_en: 'Welcome to the new SWS website!',
        date: '2026-03-26',
        category: 'event',
        image: 'https://via.placeholder.com/800x400/ae0000/ffffff?text=SWS+News',
        excerpt: 'Мы рады представить вам наш новый официальный сайт! Здесь вы найдёте все наши проекты, сможете следить за новостями и обновлениями.',
        content: '<p>Дорогие друзья и поклонники нашей студии!</p><p>С огромной радостью представляем вам наш новый официальный сайт. Это событие стало важным шагом в развитии SWS. Теперь у вас есть единое место, где можно:</p><ul><li>Следить за новостями студии</li><li>Смотреть все наши проекты</li><li>Узнавать о новых тайтлах</li><li>Знакомиться с нашей командой</li></ul><p>Сайт будет постоянно обновляться. Мы будем добавлять новые функции и улучшать интерфейс. Спасибо, что вы с нами!</p><p>С уважением,<br>Команда SWS</p>',
        views: 156,
        author: 'Администрация'
    },
    {
        id: 2,
        title: '🎬 Атака Титанов - первый сезон в работе!',
        title_en: 'Attack on Titan - first season in progress!',
        date: '2026-03-25',
        category: 'announcement',
        image: 'https://via.placeholder.com/800x400/ae0000/ffffff?text=Attack+on+Titan',
        excerpt: 'Начинаем озвучку культового аниме "Атака Титанов". Первые серии уже в работе и скоро будут доступны!',
        content: '<p>Уважаемые зрители!</p><p>Мы рады сообщить, что начинаем работу над одним из самых ожидаемых проектов - "Атака Титанов" (Attack on Titan).</p><p>На данный момент в работе находятся первые 6 серий первого сезона. Мы тщательно подбираем голоса для каждого персонажа, чтобы передать всю глубину и эмоциональность этого великолепного аниме.</p><p><strong>Планируемые сроки:</strong></p><ul><li>1 серия - уже доступна</li><li>2-3 серии - на финальной стадии озвучки</li><li>4-6 серии - в процессе записи</li></ul><p>Следите за обновлениями! Все новые серии будут появляться на сайте сразу после выхода.</p>',
        views: 89,
        author: 'Раскольников'
    },
    {
        id: 3,
        title: '🔊 Открыт набор актёров дубляжа!',
        title_en: 'Voice actors wanted!',
        date: '2026-03-20',
        category: 'recruitment',
        image: 'https://via.placeholder.com/800x400/ae0000/ffffff?text=Casting',
        excerpt: 'Присоединяйтесь к нашей команде! Ищем талантливых актёров дубляжа для новых проектов.',
        content: '<p>Команда SWS расширяется!</p><p>Мы ищем талантливых и увлечённых людей, готовых дарить свои голоса любимым персонажам. Если вы чувствуете в себе актёрский потенциал и хотите попробовать себя в озвучке - этот пост для вас!</p><p><strong>Требования:</strong></p><ul><li>Чистая дикция и хорошая техника речи</li><li>Наличие качественного микрофона</li><li>Умение работать с аудиоредакторами (базовые навыки)</li><li>Ответственность и соблюдение дедлайнов</li></ul><p><strong>Что мы предлагаем:</strong></p><ul><li>Участие в интересных проектах</li><li>Дружный коллектив единомышленников</li><li>Возможность развиваться в сфере озвучки</li></ul><p>Для участия в кастинге напишите нашему руководителю - Раскольникову в Telegram: @raskolnikov_va</p><p>Пришлите пример вашей озвучки (2-3 минуты) и краткое описание опыта.</p>',
        views: 234,
        author: 'DNT'
    },
    {
        id: 4,
        title: '🔄 Обновление: Новые серии Клинка, рассекающего демонов',
        title_en: 'Update: New Demon Slayer episodes',
        date: '2026-03-18',
        category: 'update',
        image: 'https://via.placeholder.com/800x400/ae0000/ffffff?text=Demon+Slayer',
        excerpt: 'Добавлены новые серии аниме "Клинок, рассекающий демонов". Спешите посмотреть!',
        content: '<p>Приветствуем всех поклонников "Клинка, рассекающего демонов"!</p><p>Мы рады сообщить, что добавили 3 новые озвученные серии. Теперь доступны первые 6 серий первого сезона.</p><p><strong>Доступные серии:</strong></p><ul><li>Серия 1: "Жестокость"</li><li>Серия 2: "Первый учитель"</li><li>Серия 3: "Меч"</li><li>Серия 4: "Семья"</li><li>Серия 5: "Демон"</li><li>Серия 6: "Охотник"</li></ul><p>Работа над следующими сериями продолжается. Следите за обновлениями!</p>',
        views: 112,
        author: 'chep'
    },
    {
        id: 5,
        title: '✨ Анонс: Магическая битва 2 сезон',
        title_en: 'Announcement: Jujutsu Kaisen Season 2',
        date: '2026-03-15',
        category: 'announcement',
        image: 'https://via.placeholder.com/800x400/ae0000/ffffff?text=Jujutsu+Kaisen',
        excerpt: 'Начинаем работу над вторым сезоном "Магической битвы". Ожидайте первых серий в ближайшее время!',
        content: '<p>Друзья, отличные новости для всех фанатов "Магической битвы" (Jujutsu Kaisen)!</p><p>Мы приступаем к работе над вторым сезоном этого замечательного аниме. Первые серии планируем выпустить в течение месяца.</p><p>Все голоса остаются прежними, состав команды не меняется. Мы постараемся сохранить тот же уровень качества, который вы полюбили в первом сезоне.</p><p>Подробный график выхода серий будет опубликован позже. Следите за новостями!</p>',
        views: 178,
        author: 'Юный Спартанец'
    },
    {
        id: 6,
        title: '🎉 Поздравляем с 5-летием студии!',
        title_en: 'Happy 5th anniversary!',
        date: '2026-03-10',
        category: 'event',
        image: 'https://via.placeholder.com/800x400/ae0000/ffffff?text=5+Years',
        excerpt: 'Нашей студии исполнилось 5 лет! Спасибо всем, кто был с нами всё это время.',
        content: '<p>Дорогие друзья!</p><p>Сегодня особенный день - нашей студии SWS исполняется 5 лет! За это время мы прошли большой путь: от маленькой команды энтузиастов до известной студии фандаба.</p><p><strong>Наши достижения за 5 лет:</strong></p><ul><li>Озвучено более 50 тайтлов</li><li>В команде более 15 постоянных участников</li><li>Более 1000 часов качественного контента</li><li>Тысячи благодарных зрителей</li></ul><p>Спасибо каждому, кто поддерживал нас всё это время! Мы продолжим радовать вас новыми проектами.</p><p>В честь юбилея мы готовим специальный выпуск с лучшими моментами из наших работ. Следите за новостями!</p>',
        views: 423,
        author: 'Раскольников'
    }
];

console.log('✅ База данных SWS загружена!');
console.log(`📚 Тайтлов: ${window.titlesDatabase.length}`);
console.log(`🎭 Дабберов: ${window.teamDatabase.length}`);
console.log(`📰 Новостей: ${window.newsDatabase.length}`);