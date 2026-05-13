import { Link } from 'react-router-dom';

const features = [
  {
    icon: '🤝',
    title: 'Объединяет единомышленников',
    desc: 'Только подростки 14–17 лет, увлечённые кодингом, дизайном и технологиями. Никакого корпоративного официоза.',
  },
  {
    icon: '🔨',
    title: 'Реальные проекты',
    desc: 'Публикуй идеи, ищи соавторов, стройте вместе — от ботов до веб-сервисов. Не учебные задачки, а настоящие продукты.',
  },
  {
    icon: '⚡',
    title: 'XP вместо денег',
    desc: 'Никаких финансовых отношений. XP начисляется за реальный вклад: код, дизайн, статьи, помощь новичкам.',
  },
  {
    icon: '🛠️',
    title: 'Учёба через практику',
    desc: 'Вписывайся в проекты, пиши код, проходи ревью, фикси баги, пиши туториалы. Каждый квест — строчка в портфолио.',
  },
  {
    icon: '💡',
    title: 'Фейл-лог ценится',
    desc: 'Провалил проект? Напиши разбор — получи XP. Провал ценится почти как успех. Это урок для всего хаба.',
  },
  {
    icon: '🛡️',
    title: 'Управление участниками',
    desc: 'Порядок держит Совет Стражей — участники с высоким грейдом. Проверяют статьи, верифицируют квесты, решают споры.',
  },
  {
    icon: '📂',
    title: 'Портфолио и репутация',
    desc: 'Каждый квест, статья и Билд — публичная история. Реальные проекты и репутация к выходу во взрослый IT-мир.',
  },
];

const grades = [
  { name: 'Recruit', xp: '0', color: '#9499b0' },
  { name: 'Builder', xp: '200+', color: '#4ade80' },
  { name: 'Developer', xp: '600+', color: '#22d3ee' },
  { name: 'Architect', xp: '1500+', color: '#6c63ff' },
  { name: 'Techlead', xp: '3000+', color: '#fb923c' },
  { name: 'Legend', xp: '6000+', color: '#facc15' },
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(10, 11, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 22, fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 700, letterSpacing: '-0.5px' }}>
            {'<TB/>'}
          </span>
          <span style={{ fontSize: 16, fontFamily: 'var(--font-main)', fontWeight: 600, color: 'var(--text-primary)' }}>
            TeenBuild
          </span>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link to="/rules">
            <button style={{
              background: 'transparent',
              border: '1px solid var(--border-light)',
              color: 'var(--text-secondary)',
              padding: '7px 16px',
              borderRadius: 8,
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => {
                (e.target as HTMLButtonElement).style.borderColor = 'var(--accent)';
                (e.target as HTMLButtonElement).style.color = 'var(--accent)';
              }}
              onMouseLeave={e => {
                (e.target as HTMLButtonElement).style.borderColor = 'var(--border-light)';
                (e.target as HTMLButtonElement).style.color = 'var(--text-secondary)';
              }}
            >
              📜 Устав
            </button>
          </Link>
          <Link to="/upk">
            <button style={{
              background: 'transparent',
              border: '1px solid var(--border-light)',
              color: 'var(--text-secondary)',
              padding: '7px 16px',
              borderRadius: 8,
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => {
                (e.target as HTMLButtonElement).style.borderColor = 'var(--red)';
                (e.target as HTMLButtonElement).style.color = 'var(--red)';
              }}
              onMouseLeave={e => {
                (e.target as HTMLButtonElement).style.borderColor = 'var(--border-light)';
                (e.target as HTMLButtonElement).style.color = 'var(--text-secondary)';
              }}
            >
              ⚖️ УПК ТБ
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '100px 24px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* background grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(108,99,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />
        {/* glow */}
        <div style={{
          position: 'absolute',
          top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(108,99,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: 780 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 32,
            fontSize: 12,
            fontFamily: 'var(--font-mono)',
            color: 'var(--cyan)',
            letterSpacing: '0.05em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            v1.0 · 2026 · BETA ACTIVE
          </div>

          <h1 style={{
            fontFamily: 'var(--font-main)',
            fontSize: 'clamp(2.2rem, 7vw, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: 24,
            color: 'var(--text-primary)',
          }}>
            IT-песочница{' '}
            <span style={{ color: 'var(--accent)' }}>для подростков</span>
            <br />от подростков
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            marginBottom: 48,
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            maxWidth: 620,
            margin: '0 auto 48px',
          }}>
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>TeenBuild</strong> — это RPG-гильдия для юных айтишников 14–17 лет,
            где прокачка идёт через реальную работу над проектами,
            а <span style={{ color: 'var(--yellow)' }}>Легендами</span> становятся не за идеальный код, а за путь.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/rules">
              <button style={{
                background: 'var(--accent)',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: 'var(--font-main)',
                letterSpacing: '0.01em',
                boxShadow: '0 0 30px rgba(108,99,255,0.3)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 4px 40px rgba(108,99,255,0.45)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(108,99,255,0.3)';
                }}
              >
                📜 Наши правила
              </button>
            </Link>
            <Link to="/upk">
              <button style={{
                background: 'transparent',
                color: 'var(--text-primary)',
                padding: '14px 32px',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: 'var(--font-main)',
                border: '1px solid var(--border-light)',
                letterSpacing: '0.01em',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  (e.target as HTMLButtonElement).style.borderColor = 'var(--red)';
                  (e.target as HTMLButtonElement).style.color = 'var(--red)';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLButtonElement).style.borderColor = 'var(--border-light)';
                  (e.target as HTMLButtonElement).style.color = 'var(--text-primary)';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                }}
              >
                ⚖️ УПК ТБ
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: 40, justifyContent: 'center',
            marginTop: 64,
            flexWrap: 'wrap',
          }}>
            {[
              { val: '14–17', label: 'лет участникам' },
              { val: '7', label: 'систем XP-прокачки' },
              { val: '6', label: 'грейдов роста' },
              { val: '∞', label: 'реальных проектов' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '-0.02em',
                }}>{s.val}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4, fontFamily: 'var(--font-body)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--accent)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>// что мы делаем</div>
          <h2 style={{
            fontFamily: 'var(--font-main)',
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}>Зачем существует TeenBuild</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </section>

      {/* GRADES */}
      <section style={{
        padding: '80px 24px',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--cyan)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}>// система грейдов</div>
            <h2 style={{
              fontFamily: 'var(--font-main)',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>Путь от Recruit до Legend</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 16,
          }}>
            {grades.map((g, i) => (
              <div key={g.name} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '24px 16px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: g.color,
                }} />
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--text-muted)',
                  marginBottom: 8,
                  letterSpacing: '0.1em',
                }}>УРОВЕНЬ {i + 1}</div>
                <div style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: 18,
                  fontWeight: 700,
                  color: g.color,
                  marginBottom: 8,
                }}>{g.name}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  color: 'var(--text-muted)',
                }}>от {g.xp} XP</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW XP WORKS */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--green)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>// экономика</div>
          <h2 style={{
            fontFamily: 'var(--font-main)',
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}>Как зарабатывается XP</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { icon: '🐛', label: 'Мелкая помощь', desc: 'поправить баг, сверстать кнопку', xp: '10–30 XP', color: 'var(--text-secondary)' },
            { icon: '⚙️', label: 'Средняя задача', desc: 'написать функцию, поднять бота', xp: '40–70 XP', color: 'var(--cyan)' },
            { icon: '🏗️', label: 'Хардкор', desc: 'архитектура, релиз модуля', xp: '100+ XP', color: 'var(--accent)' },
            { icon: '🧑‍🏫', label: 'Менторство', desc: 'помог новичку разобраться', xp: '+10–20 XP', color: 'var(--green)' },
            { icon: '🟢', label: 'Открытый код', desc: 'GitHub Open Source', xp: 'x1.8 XP', color: 'var(--green)' },
            { icon: '📝', label: 'Фейл-лог', desc: 'разбор провального проекта', xp: 'XP за урок', color: 'var(--yellow)' },
          ].map(item => (
            <div key={item.label} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '22px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}>
              <span style={{ fontSize: 28 }}>{item.icon}</span>
              <div style={{ fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>{item.label}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{item.desc}</div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 14,
                fontWeight: 700,
                color: item.color,
                marginTop: 4,
              }}>{item.xp}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-secondary)',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-main)',
            fontSize: 'clamp(1.4rem, 4vw, 2rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 16,
          }}>Готов строить реальные проекты?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 36, lineHeight: 1.7 }}>
            Изучи наш устав и уголовно-процессуальный кодекс. Здесь есть правила — и мы их соблюдаем.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/rules">
              <button style={{
                background: 'var(--accent)',
                color: '#fff',
                padding: '13px 28px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: 'var(--font-main)',
                boxShadow: '0 0 24px rgba(108,99,255,0.25)',
                transition: 'all 0.2s',
              }}>📜 Читать Устав</button>
            </Link>
            <Link to="/upk">
              <button style={{
                background: 'transparent',
                color: 'var(--text-secondary)',
                padding: '13px 28px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: 'var(--font-main)',
                border: '1px solid var(--border-light)',
                transition: 'all 0.2s',
              }}>⚖️ Читать УПК ТБ</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '32px 24px',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: 13,
        fontFamily: 'var(--font-mono)',
      }}>
        <span style={{ color: 'var(--accent)' }}>{'<TB/>'}</span>{' '}
        TeenBuild © 2026 — IT-песочница для подростков. Все XP заработаны честно.
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '24px 22px',
        transition: 'all 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'var(--border-light)';
        el.style.background = 'var(--bg-card-hover)';
        el.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'var(--border)';
        el.style.background = 'var(--bg-card)';
        el.style.transform = 'translateY(0)';
      }}
    >
      <span style={{ fontSize: 32, display: 'block', marginBottom: 14 }}>{icon}</span>
      <h3 style={{
        fontFamily: 'var(--font-main)',
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--text-primary)',
        marginBottom: 10,
        letterSpacing: '-0.01em',
      }}>{title}</h3>
      <p style={{
        fontSize: 14,
        color: 'var(--text-secondary)',
        lineHeight: 1.65,
        fontFamily: 'var(--font-body)',
      }}>{desc}</p>
    </div>
  );
}
