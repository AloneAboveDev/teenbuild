import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Article {
  num: string;
  title: string;
  text: string;
  sub?: string[];
  punishment?: string;
  punishColor?: string;
  isNew?: boolean;
}

interface USection {
  id: string;
  razdel: string;
  title: string;
  icon: string;
  color: string;
  articles: Article[];
}

const upkSections: USection[] = [
  {
    id: 'r1',
    razdel: 'РАЗДЕЛ I',
    title: 'Основные правила',
    icon: '📌',
    color: 'var(--accent)',
    articles: [
      {
        num: 'Ст. 1',
        title: 'Презумпция невиновности',
        text: 'Любой участник считается честным, пока обратное не доказано в суде.',
      },
      {
        num: 'Ст. 2',
        title: 'Незнание закона',
        text: 'Незнание настоящего Кодекса или правил Хаба не освобождает от ответственности.',
      },
      {
        num: 'Ст. 3',
        title: 'Обратная сила',
        text: 'Если ты нарушил правила, а закон ввели сегодня — ты всё равно идешь под Суд. Без вариантов.',
        punishColor: 'var(--red)',
      },
      {
        num: 'Ст. 4',
        title: 'Место проведения суда',
        text: 'Все судебные заседания проходят в голосовом канале Дискорда. Текстовая ветка #Суд используется только для подачи исков, выкладывания пруфов и оглашения приговора.',
      },
    ],
  },
  {
    id: 'r2',
    razdel: 'РАЗДЕЛ II',
    title: 'Составы преступлений',
    icon: '⚠️',
    color: 'var(--red)',
    articles: [
      {
        num: 'Ст. 101',
        title: 'Картельный сговор',
        text: 'Три и более человека договорились накручивать XP друг другу через фейковые билды.',
        punishment: 'Конфискация всего XP. При повторении — «Изгой» на 14 дней.',
        punishColor: 'var(--red)',
      },
      {
        num: 'Ст. 102',
        title: 'Халатность',
        text: 'Подтвердил, что билд работает, а он не работает или вообще не существует.',
        punishment: 'Штраф –50 XP тебе и твоему помощнику.',
        punishColor: 'var(--orange)',
      },
      {
        num: 'Ст. 103',
        title: 'Промышленный шпионаж',
        text: 'Обманом или подставой получил чужой приватный код.',
        punishment: 'Вечный бан. Без права апелляции.',
        punishColor: 'var(--red)',
      },
      {
        num: 'Ст. 201',
        title: 'Оскорбление',
        text: 'Написал «твой код — мусор» или кинул мем, унижающий скилы другого.',
        punishment: 'Мут 12 часов. Попался второй раз — дело в Суд.',
        punishColor: 'var(--orange)',
      },
      {
        num: 'Ст. 202',
        title: 'Клевета',
        text: 'Подал иск в #Суд без единого пруфа, всё придумал.',
        punishment: 'Наказание, которое ты требовал для другого, переходит на тебя.',
        punishColor: 'var(--yellow)',
      },
      {
        num: 'Ст. 203',
        title: 'Доксинг и шантаж',
        text: 'Пригрозил слить личные данные (ФИО, адрес, школу, номер), чтобы выбить код или XP.',
        punishment: 'Удаление навсегда. Без возврата.',
        punishColor: 'var(--red)',
      },
    ],
  },
  {
    id: 'r3',
    razdel: 'РАЗДЕЛ III',
    title: 'Защита и Адвокат',
    icon: '🛡️',
    color: 'var(--green)',
    articles: [
      {
        num: 'Ст. 301',
        title: 'Право на последнее слово',
        text: 'Суд не закрывается, пока обвиняемый не скажет «я всё сказал». Судья обязан дать слово.',
      },
      {
        num: 'Ст. 302',
        title: 'Адвокат',
        text: 'Обвиняемый может взять адвоката из любого участника Хаба (кроме свидетелей). Адвокат ищет смягчалки и проверяет улики. Адвокатом может быть участник со статусом не ниже Builder.',
      },
      {
        num: 'Ст. 303',
        title: 'Сделка с судьей',
        text: 'До приговора адвокат может сказать: «клиент признаёт вину, давайте меньше XP/мута». Судья может согласиться.',
      },
      {
        num: 'Ст. 303.1',
        title: 'Приоритет воли обвиняемого',
        text: 'Решение о признании вины или согласии на сделку принимает только обвиняемый лично. Адвокат не может заставить или запретить. Если позиции расходятся — судья слушает обвиняемого.',
        isNew: true,
      },
    ],
  },
  {
    id: 'r4',
    razdel: 'РАЗДЕЛ IV',
    title: 'Доказательства',
    icon: '🔍',
    color: 'var(--cyan)',
    articles: [
      {
        num: 'Ст. 401',
        title: 'Что работает как доказательство',
        text: 'Принимаются следующие виды доказательств:',
        sub: [
          'Скриншоты переписки (без фотошопа).',
          'Ссылки на коммиты в GitHub.',
          'Демки записи экрана.',
          'Показания минимум двух независимых свидетелей.',
        ],
        punishColor: 'var(--green)',
      },
      {
        num: 'Ст. 402',
        title: 'Что не работает',
        text: '«Мне пацаны сказали», «все знают», «я так думаю» — без скриншотов не принимается. Это клевета (см. статью 202).',
        punishment: 'Приравнивается к клевете → Ст. 202',
        punishColor: 'var(--red)',
      },
    ],
  },
  {
    id: 'r5',
    razdel: 'РАЗДЕЛ V',
    title: 'Явка в суд',
    icon: '🚨',
    color: 'var(--yellow)',
    articles: [
      {
        num: 'Ст. 501',
        title: 'Вызов на заседание',
        text: 'После того как Админ поставил ⚖️, обвиняемый обязан явиться в голосовой канал Дискорда для проведения суда.',
      },
      {
        num: 'Ст. 502',
        title: 'Срок на явку',
        text: 'У обвиняемого есть 24 часа с момента вызова. Судья обязан зафиксировать время вызова в текстовом канале #Суд.',
      },
      {
        num: 'Ст. 503',
        title: 'Если обвиняемый не явился',
        text: 'Если по истечении 24 часов обвиняемый отсутствует в голосовом канале и не вышел на связь — он считается отказавшимся от защиты.',
        punishment: 'Автоматический вечный бан.',
        punishColor: 'var(--red)',
      },
      {
        num: 'Ст. 504',
        title: 'Отказ от суда',
        text: 'Если обвиняемый сказал «не хочу», «мне лень», «у меня нет времени», «я не приду» или просто игнорирует вызов более 24 часов — это квалифицируется как отказ от защиты.',
        punishment: 'Вечный бан без права на возмущение, апелляцию или протест.',
        punishColor: 'var(--red)',
      },
      {
        num: 'Ст. 505',
        title: 'Последствия неявки или отказа',
        text: 'Обвиняемый, не явившийся в суд в течение 24 часов или заявивший отказ:',
        sub: [
          'Получает вечный бан без права на возмущение, апелляцию или протест.',
          'Решение не пересматривается, даже если у него были уважительные причины (кроме документально подтверждённой форс-мажоры по решению Админа).',
          'Любые попытки возмущаться, писать «дайте второй шанс», заводить новый аккаунт — расширенный бан по IP.',
        ],
        punishment: 'Вечный бан + IP-бан при попытке обхода',
        punishColor: 'var(--red)',
      },
      {
        num: 'Ст. 505.1',
        title: 'Исключение для несовершеннолетних и работающих',
        text: 'Если обвиняемый докажет (скрином расписания или табеля), что в течение 20 из 24 часов он находился в школе / на работе / спал, судья может дать дополнительные 12 часов на явку.',
        isNew: true,
        punishColor: 'var(--green)',
      },
      {
        num: 'Ст. 506',
        title: 'Исключение',
        text: 'Единственное исключение — если обвиняемый до истечения 24 часов написал в #Суд: «Я готов явиться, но мне нужно дополнительное время по уважительной причине». Решение о продлении принимает Админ. Максимальное продление — ещё 24 часа.',
      },
      {
        num: 'Ст. 507',
        title: 'Обязанности свидетеля',
        text: 'Свидетель, вызванный любой из сторон или судьей, обязан явиться в голосовой канал. Неявка свидетеля без уважительной причины = предупреждение. Повторная неявка = мут 24 часа и показания не засчитываются.',
        isNew: true,
      },
      {
        num: 'Ст. 508',
        title: 'Обязанности судьи',
        text: 'Судья, назначенный Админом для рассмотрения дела, обязан явиться в голосовой канал в течение 1 часа после получения назначения. Неявка судьи без уважительной причины = временное отстранение от судейства на 7 дней.',
        isNew: true,
      },
    ],
  },
  {
    id: 'r6',
    razdel: 'РАЗДЕЛ VI',
    title: 'Судебный процесс',
    icon: '🏛️',
    color: 'var(--accent)',
    articles: [
      {
        num: 'Ст. 601',
        title: 'Как начинается суд',
        text: 'Истец пишет иск в ветку #Суд. Админ ставит реакцию ⚖️ — процесс запущен. Судья обязан объявить время заседания в голосовом канале.',
      },
      {
        num: 'Ст. 602',
        title: 'Назначение адвоката',
        text: 'Судья обязан спросить у обвиняемого в голосовом канале: «тебе нужен адвокат или сам будешь защищаться?»',
      },
      {
        num: 'Ст. 603',
        title: 'Следствие',
        text: 'Истец кидает пруфы в текстовый канал. Адвокат (или сам обвиняемый) в голосовом канале устно объясняет, почему он не виноват.',
      },
      {
        num: 'Ст. 604',
        title: 'Мнение чата (ВЛИЯЕТ НА ПРИГОВОР)',
        text: 'Любой участник, который слушает заседание в голосовом канале, может поставить реакцию:',
        sub: [
          '🔥 — виновен, это отягчает',
          '🕊 — оправдать, это смягчает',
          '🤝 — нейтрально',
        ],
      },
      {
        num: 'Ст. 605',
        title: 'Как мнение чата влияет на приговор',
        text: 'Судья обязан подсчитать голоса перед вынесением приговора:',
        sub: [
          '🔥 больше 50% — отягчающее обстоятельство. Наказание увеличивается на 30%.',
          '🕊 больше 50% — смягчающее обстоятельство. Наказание уменьшается на 30%.',
          '🤝 большинство или голоса поровну — судья действует по своему усмотрению.',
        ],
      },
      {
        num: 'Ст. 605.1',
        title: 'Защита от навала',
        text: 'Голоса учитываются только от участников, находившихся в голосовом канале не менее 5 минут до начала подсчета. Навалом (когда 10 человек залетели на 10 секунд) — голоса не засчитываются.',
        isNew: true,
      },
      {
        num: 'Ст. 606',
        title: 'Прения',
        text: 'Участники чата в голосовом канале могут кратко высказаться «за» или «против». Один участник — одно выступление.',
      },
      {
        num: 'Ст. 607',
        title: 'Приговор',
        text: 'Судья в голосовом канале и дублирует в #Лог: «По делу №[номер], на основании статей [список], с учетом мнения чата, Суд постановляет: [наказание]. Приговор окончательный. Обжалованию и протесту не подлежит.»',
      },
      {
        num: 'Ст. 608',
        title: 'Видеозапись судебного заседания',
        text: 'Весь процесс суда в голосовом канале обязательно записывается на видео.',
        sub: [
          'Запись ведет Судья или назначенный Админом оператор.',
          'Готовая видеозапись выкладывается в закрытый канал #Судебные_видео сразу после окончания заседания.',
          'Видеозапись является доказательством того, что процесс прошел без нарушений.',
          'Если видеозапись отсутствует — приговор считается недействительным, а Судья получает предупреждение. За повторное отсутствие — отстранение на 14 дней.',
          'Участники не имеют права удалять или скрывать видеозапись.',
        ],
        isNew: true,
      },
    ],
  },
  {
    id: 'r7',
    razdel: 'РАЗДЕЛ VII',
    title: 'Отягчающие и смягчающие обстоятельства',
    icon: '⚖️',
    color: 'var(--yellow)',
    articles: [
      {
        num: 'Ст. 701',
        title: 'Отягчает наказание (судья обязан учесть)',
        text: 'Следующие обстоятельства отягчают наказание:',
        sub: [
          'Ты был модером или админом и нарушил («админское доверие»).',
          'Ты наебал систему на 500+ XP.',
          'Ты нахамил судье в процессе.',
          'Большинство чата поставило 🔥 (см. ст. 605).',
        ],
        punishment: '+ отягчение наказания',
        punishColor: 'var(--red)',
      },
      {
        num: 'Ст. 702',
        title: 'Смягчает наказание (судья обязан учесть)',
        text: 'Следующие обстоятельства смягчают наказание:',
        sub: [
          'Ты сам признался: «да, я виноват, бес попутал».',
          'Это твой первый косяк.',
          'Ты согласился на отработку (туториал, помощь 5 новичкам, ревью кода).',
          'Большинство чата поставило 🕊 (см. ст. 605).',
        ],
        punishment: '– смягчение наказания',
        punishColor: 'var(--green)',
      },
    ],
  },
  {
    id: 'r8',
    razdel: 'РАЗДЕЛ VIII',
    title: 'Особые условия',
    icon: '🔒',
    color: 'var(--red)',
    articles: [
      {
        num: 'Ст. 801',
        title: 'Отказ от суда = бан',
        text: 'Любой обвиняемый, который:',
        sub: [
          'Не явился в голосовой канал в течение 24 часов.',
          'Сказал «не хочу».',
          'Написал «мне похер».',
          'Вышел из чата после вызова.',
          'Игнорирует Админа,',
        ],
        punishment: 'Получает вечный бан без права на возмущение, протест или апелляцию.',
        punishColor: 'var(--red)',
      },
      {
        num: 'Ст. 802',
        title: 'Возмущение после бана',
        text: 'Любая попытка возмутиться, написать «дайте второй шанс», создать новый аккаунт, попросить друга заступиться — карается расширенным IP-баном всех вовлеченных.',
        punishment: 'IP-бан всех вовлечённых',
        punishColor: 'var(--red)',
      },
      {
        num: 'Ст. 803',
        title: 'Решение Админа — окончательно',
        text: 'Админ имеет право отказать в продлении срока, даже если причина выглядит уважительной. Решение Админа не обсуждается.',
      },
    ],
  },
];

export default function UPK() {
  const [activeSection, setActiveSection] = useState('r1');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(10, 11, 15, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 60,
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 700, fontSize: 18 }}>{'<TB/>'}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: 'var(--font-body)' }}>/ УПК ТБ</span>
        </Link>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link to="/">
            <button style={{
              background: 'transparent', border: '1px solid var(--border-light)',
              color: 'var(--text-secondary)', padding: '6px 14px', borderRadius: 7,
              fontSize: 12, fontFamily: 'var(--font-body)', cursor: 'pointer',
            }}>← Главная</button>
          </Link>
          <Link to="/rules">
            <button style={{
              background: 'transparent', border: '1px solid var(--border-light)',
              color: 'var(--text-secondary)', padding: '6px 14px', borderRadius: 7,
              fontSize: 12, fontFamily: 'var(--font-body)', cursor: 'pointer',
            }}>📜 Устав</button>
          </Link>
        </div>
      </nav>

      <div style={{ display: 'flex', paddingTop: 60, minHeight: '100vh' }}>
        {/* SIDEBAR */}
        <aside style={{
          width: 260,
          flexShrink: 0,
          position: 'fixed',
          top: 60,
          bottom: 0,
          left: 0,
          overflowY: 'auto',
          background: 'var(--bg-secondary)',
          borderRight: '1px solid var(--border)',
          padding: '24px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}>
          <div style={{
            padding: '0 20px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--text-muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            borderBottom: '1px solid var(--border)',
            marginBottom: 8,
          }}>⚖️ УПК ТБ</div>
          {upkSections.map(sec => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              style={{
                background: activeSection === sec.id ? 'var(--accent-glow)' : 'transparent',
                border: 'none',
                borderLeft: activeSection === sec.id ? '2px solid var(--accent)' : '2px solid transparent',
                color: activeSection === sec.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '9px 20px',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: 12,
                fontFamily: 'var(--font-body)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                transition: 'all 0.15s',
                width: '100%',
                lineHeight: 1.4,
              }}
            >
              <span style={{ flexShrink: 0, marginTop: 1 }}>{sec.icon}</span>
              <div>
                <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: 2 }}>{sec.razdel}</div>
                <div>{sec.title}</div>
              </div>
            </button>
          ))}
        </aside>

        {/* MAIN */}
        <main style={{
          marginLeft: 260,
          flex: 1,
          padding: '48px 48px 80px',
          maxWidth: 900,
        }}>
          {/* Header */}
          <div style={{ marginBottom: 56, paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--red)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>// официальный документ · 2026</div>
            <h1 style={{
              fontFamily: 'var(--font-main)',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: 12,
            }}>⚖️ Уголовно-процессуальный кодекс TeenBuild</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, maxWidth: 620, marginBottom: 20 }}>
              УПК ТБ регулирует порядок проведения судебных разбирательств в хабе. Незнание закона не освобождает от ответственности.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 100,
                padding: '5px 14px',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--text-muted)',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)', display: 'inline-block' }} />
                УПК ТБ · 2026 · 8 Разделов
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(108,99,255,0.08)',
                border: '1px solid rgba(108,99,255,0.2)',
                borderRadius: 100,
                padding: '5px 14px',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--accent)',
              }}>
                ✦ Содержит НОВЫЕ статьи
              </div>
            </div>
          </div>

          {/* Sections */}
          {upkSections.map(sec => (
            <section
              key={sec.id}
              id={sec.id}
              style={{ marginBottom: 64, scrollMarginTop: 80 }}
            >
              {/* Section header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 14,
                marginBottom: 24,
                paddingBottom: 16,
                borderBottom: `1px solid var(--border)`,
              }}>
                <div style={{
                  width: 44, height: 44,
                  background: 'var(--bg-card)',
                  border: `1px solid var(--border)`,
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0,
                }}>{sec.icon}</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: sec.color,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: 4,
                  }}>{sec.razdel}</div>
                  <h2 style={{
                    fontFamily: 'var(--font-main)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}>{sec.title}</h2>
                </div>
              </div>

              {/* Articles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {sec.articles.map((art, idx) => (
                  <ArticleCard key={idx} article={art} sectionColor={sec.color} />
                ))}
              </div>
            </section>
          ))}

          {/* Footer */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            textAlign: 'center',
          }}>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              УПК ТБ действует совместно с Общим Уставом TeenBuild
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/rules">
                <button style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)',
                  padding: '10px 22px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontFamily: 'var(--font-main)',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}>📜 Читать Устав →</button>
              </Link>
              <Link to="/">
                <button style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-secondary)',
                  padding: '10px 22px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontFamily: 'var(--font-main)',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}>← На главную</button>
              </Link>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          aside { display: none !important; }
          main { margin-left: 0 !important; padding: 24px 16px 60px !important; }
        }
      `}</style>
    </div>
  );
}

function ArticleCard({ article, sectionColor }: { article: Article; sectionColor: string }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '18px 20px',
      borderLeft: `3px solid ${sectionColor}`,
      position: 'relative',
    }}>
      {article.isNew && (
        <span style={{
          position: 'absolute',
          top: 12,
          right: 14,
          background: 'rgba(108,99,255,0.12)',
          border: '1px solid rgba(108,99,255,0.3)',
          color: 'var(--accent)',
          fontSize: 10,
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          padding: '2px 8px',
          borderRadius: 4,
          letterSpacing: '0.06em',
        }}>NEW</span>
      )}

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        marginBottom: (article.sub || article.punishment) ? 12 : 0,
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          fontWeight: 700,
          color: sectionColor,
          flexShrink: 0,
          marginTop: 2,
          minWidth: 60,
        }}>{article.num}</span>
        <div>
          <div style={{
            fontFamily: 'var(--font-main)',
            fontWeight: 600,
            fontSize: 15,
            color: 'var(--text-primary)',
            marginBottom: 6,
            paddingRight: article.isNew ? 60 : 0,
          }}>{article.title}</div>
          <div style={{
            fontSize: 14,
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            fontFamily: 'var(--font-body)',
          }}>{article.text}</div>
        </div>
      </div>

      {article.sub && (
        <ul style={{ paddingLeft: 72, margin: '0 0 8px', listStyle: 'none' }}>
          {article.sub.map((s, i) => (
            <li key={i} style={{
              fontSize: 13,
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              padding: '3px 0',
              display: 'flex',
              gap: 8,
              fontFamily: 'var(--font-body)',
            }}>
              <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>·</span>
              {s}
            </li>
          ))}
        </ul>
      )}

      {article.punishment && (
        <div style={{
          marginLeft: 72,
          marginTop: 10,
          background: 'var(--bg-secondary)',
          borderRadius: 8,
          padding: '10px 14px',
          borderLeft: `2px solid ${article.punishColor || 'var(--text-muted)'}`,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <span style={{ fontSize: 14 }}>⚡</span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            fontWeight: 700,
            color: article.punishColor || 'var(--text-muted)',
          }}>{article.punishment}</span>
        </div>
      )}
    </div>
  );
}
