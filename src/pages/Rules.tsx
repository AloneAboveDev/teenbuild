import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Section {
  id: string;
  chapter: string;
  title: string;
  icon: string;
  color: string;
  items: Rule[];
}

interface Rule {
  num?: string;
  text: string;
  sub?: string[];
  tag?: string;
  tagColor?: string;
}

const sections: Section[] = [
  {
    id: 'intro',
    chapter: 'ВСТУПЛЕНИЕ',
    title: 'О TeenBuild',
    icon: '⚙️',
    color: 'var(--accent)',
    items: [
      {
        text: 'Добро пожаловать в TeenBuild. Здесь мы не просто болтаем об IT — мы строим реальные проекты.',
      },
      {
        text: 'Наша валюта — это XP (опыт), а наш закон — честность.',
      },
      {
        text: 'Система работает полностью в ручном режиме. Оценивают люди, а не боты.',
        tag: 'ВАЖНО',
        tagColor: 'var(--yellow)',
      },
    ],
  },
  {
    id: 'builds',
    chapter: 'ГЛАВА 1',
    title: 'Билды (Как мы работаем)',
    icon: '🔨',
    color: 'var(--cyan)',
    items: [
      {
        num: '1.',
        text: 'MVP — это база.',
        sub: [
          'Голые идеи не принимаются. Хочешь запустить проект (Билд) и просить помощи? У тебя уже должна быть хотя бы строчка кода, дизайн в Figma или базовая структура.',
        ],
        tag: 'ОБЯЗАТЕЛЬНО',
        tagColor: 'var(--red)',
      },
      {
        num: '2.',
        text: 'Как получить помощь:',
        sub: [
          'Пишешь в ветку #Билды: "Делаю [проект], нужен человек для [задача]. Ссылка: [линк]".',
        ],
      },
      {
        num: '3.',
        text: 'Сделка на доверии:',
        sub: [
          'Когда помощник выполнил задачу, вы ОБА (Автор и Помощник) пишете Админу или в специальную ветку.',
          'Админ смотрит результат и вручную начисляет XP обоим.',
        ],
        tag: 'XP',
        tagColor: 'var(--green)',
      },
    ],
  },
  {
    id: 'economy',
    chapter: 'ГЛАВА 2',
    title: 'Экономика (Как мы считаем XP)',
    icon: '⚡',
    color: 'var(--green)',
    items: [
      {
        text: 'XP — это твоя репутация и статус. Никаких алгоритмов, награда выдается «на глаз» за реальный труд.',
        tag: 'ПРИНЦИП',
        tagColor: 'var(--accent)',
      },
      {
        num: '🐛',
        text: 'Мелкая помощь',
        sub: ['поправить баг, сверстать кнопку'],
        tag: '10–30 XP',
        tagColor: 'var(--text-secondary)',
      },
      {
        num: '⚙️',
        text: 'Средняя задача',
        sub: ['написать функцию, поднять бота'],
        tag: '40–70 XP',
        tagColor: 'var(--cyan)',
      },
      {
        num: '🏗️',
        text: 'Хардкор',
        sub: ['архитектура, релиз модуля'],
        tag: '100+ XP',
        tagColor: 'var(--accent)',
      },
      {
        num: '🧑‍🏫',
        text: 'Бонус за менторство',
        sub: ['Если ты помог новичку разобраться, Админ накинет тебе сверху за человечность.'],
        tag: '+10–20 XP',
        tagColor: 'var(--green)',
      },
    ],
  },
  {
    id: 'opensource',
    chapter: 'ГЛАВА 3',
    title: 'Open Source vs Приватность',
    icon: '🔓',
    color: 'var(--yellow)',
    items: [
      {
        text: 'Ты сам решаешь, показывать свой код или нет, но система поощряет открытость.',
      },
      {
        num: '🟢',
        text: 'Открытый код (GitHub)',
        sub: [
          'Ты получаешь x1.8 XP, быстрые проверки и право претендовать на высшие роли (Архитектор, Техлид).',
        ],
        tag: 'x1.8 XP',
        tagColor: 'var(--green)',
      },
      {
        num: '🔴',
        text: 'Закрытый код (Приват)',
        sub: [
          'Боишься за идею? Твое право. Но за закрытый код ты получаешь базовый XP (без множителей), и для подтверждения работы тебе придется показывать демку экрана Админу в личке.',
        ],
        tag: 'Базовый XP',
        tagColor: 'var(--red)',
      },
    ],
  },
  {
    id: 'law',
    chapter: 'ГЛАВА 4',
    title: 'Закон и Суд (Две платформы)',
    icon: '⚖️',
    color: 'var(--red)',
    items: [
      {
        text: 'Telegram — это наша штаб-квартира (HQ). Здесь мы общаемся и кодим. Но если ты нарушил закон, дело переходит в Discord.',
        tag: 'ПЛАТФОРМЫ',
        tagColor: 'var(--accent)',
      },
      {
        num: '1.',
        text: 'Главные грехи:',
        sub: [
          'Дюп (накрутка) XP с друзьями.',
          'Воровство чужого кода (плагиат).',
          'Токсичность.',
        ],
        tag: 'НАРУШЕНИЯ',
        tagColor: 'var(--red)',
      },
      {
        num: '2.',
        text: 'Зал Суда:',
        sub: [
          'Любой может подать иск с пруфами (скриншотами).',
          'Разбирательство проходит в нашем Discord-сервере в присутствии Судьи (Админа).',
        ],
      },
      {
        num: '3.',
        text: 'Дискорд обязателен при судебном деле.',
        sub: [
          'Иначе автоматически проигрывают.',
        ],
        tag: 'ОБЯЗАТЕЛЬНО',
        tagColor: 'var(--red)',
      },
    ],
  },
];

const navItems = sections.map(s => ({ id: s.id, label: s.title, icon: s.icon }));

export default function Rules() {
  const [activeSection, setActiveSection] = useState('intro');

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
          <span style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: 'var(--font-body)' }}>/ Устав</span>
        </Link>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link to="/">
            <button style={{
              background: 'transparent', border: '1px solid var(--border-light)',
              color: 'var(--text-secondary)', padding: '6px 14px', borderRadius: 7,
              fontSize: 12, fontFamily: 'var(--font-body)', cursor: 'pointer',
            }}>← Главная</button>
          </Link>
          <Link to="/upk">
            <button style={{
              background: 'transparent', border: '1px solid var(--border-light)',
              color: 'var(--text-secondary)', padding: '6px 14px', borderRadius: 7,
              fontSize: 12, fontFamily: 'var(--font-body)', cursor: 'pointer',
            }}>⚖️ УПК ТБ</button>
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
          gap: 4,
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
          }}>📜 Общий Устав v2.0</div>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: activeSection === item.id ? 'var(--accent-glow)' : 'transparent',
                border: 'none',
                borderLeft: activeSection === item.id ? '2px solid var(--accent)' : '2px solid transparent',
                color: activeSection === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '10px 20px',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: 13,
                fontFamily: 'var(--font-body)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                transition: 'all 0.15s',
                width: '100%',
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </aside>

        {/* MAIN CONTENT */}
        <main style={{
          marginLeft: 260,
          flex: 1,
          padding: '48px 48px 80px',
          maxWidth: 860,
        }}>
          {/* Header */}
          <div style={{
            marginBottom: 56,
            paddingBottom: 32,
            borderBottom: '1px solid var(--border)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>// официальный документ · 2026</div>
            <h1 style={{
              fontFamily: 'var(--font-main)',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: 12,
            }}>📜 Общий Устав TeenBuild</h1>
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
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
              Версия 2.0 · Действует с 2026
            </div>
          </div>

          {/* Sections */}
          {sections.map(sec => (
            <section
              key={sec.id}
              id={sec.id}
              style={{ marginBottom: 64, scrollMarginTop: 80 }}
            >
              {/* Section header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 14,
                marginBottom: 28,
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
                  }}>{sec.chapter}</div>
                  <h2 style={{
                    fontFamily: 'var(--font-main)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}>{sec.title}</h2>
                </div>
              </div>

              {/* Rules */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {sec.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: 12,
                      padding: '18px 20px',
                      borderLeft: `3px solid ${sec.color}`,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: item.sub ? 10 : 0 }}>
                          {item.num && (
                            <span style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: 14,
                              color: sec.color,
                              fontWeight: 700,
                              flexShrink: 0,
                            }}>{item.num}</span>
                          )}
                          <span style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: 15,
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                          }}>{item.text}</span>
                        </div>
                        {item.sub && (
                          <ul style={{ paddingLeft: item.num ? 28 : 0, margin: 0, listStyle: 'none' }}>
                            {item.sub.map((s, si) => (
                              <li key={si} style={{
                                fontSize: 14,
                                color: 'var(--text-secondary)',
                                lineHeight: 1.65,
                                padding: '3px 0',
                                display: 'flex',
                                gap: 8,
                                fontFamily: 'var(--font-body)',
                              }}>
                                <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>—</span>
                                {s}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {item.tag && (
                        <span style={{
                          background: 'var(--bg-secondary)',
                          border: `1px solid var(--border)`,
                          color: item.tagColor || 'var(--text-muted)',
                          padding: '3px 10px',
                          borderRadius: 6,
                          fontSize: 11,
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          flexShrink: 0,
                          whiteSpace: 'nowrap',
                        }}>{item.tag}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Footer note */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            padding: '24px 24px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', fontFamily: 'var(--font-body)', marginBottom: 16 }}>
              Нарушение устава рассматривается по уголовно-процессуальному кодексу TeenBuild
            </p>
            <Link to="/upk">
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
              }}>⚖️ Читать УПК ТБ →</button>
            </Link>
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
