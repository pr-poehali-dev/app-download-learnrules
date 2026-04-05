import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5d8e2707-5a44-48eb-92d3-567d1bd84ddf/files/40350072-c645-426d-a60c-e7dca8fcbb0f.jpg";

const reviews = [
  {
    name: "Маша Д.",
    rating: 5,
    text: "Готовлюсь к контрольным прямо с телефона. Все правила по русскому и математике под рукой!",
    date: "март 2026",
  },
  {
    name: "Артём К.",
    rating: 5,
    text: "Раньше путался в правилах по физике и химии. Теперь всё структурировано — нахожу за секунды.",
    date: "февраль 2026",
  },
  {
    name: "Соня Л.",
    rating: 5,
    text: "Очень удобно повторять перед уроком. Особенно выручает по литературе и истории.",
    date: "январь 2026",
  },
  {
    name: "Никита Р.",
    rating: 4,
    text: "Пользуюсь каждый день. Оценки реально улучшились — теперь не забываю правила.",
    date: "март 2026",
  },
  {
    name: "Даша М.",
    rating: 5,
    text: "Скачала перед ОГЭ — не пожалела. Все нужные правила в одном месте, удобный поиск.",
    date: "апрель 2026",
  },
  {
    name: "Влад С.",
    rating: 4,
    text: "Интерфейс простой, не надо разбираться. Работает быстро даже без интернета.",
    date: "март 2026",
  },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5 text-base">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < rating ? "star-filled" : "star-empty"}>
          ★
        </span>
      ))}
    </div>
  );
}

function NavLink({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-sm font-medium transition-colors duration-200 px-1 pb-0.5 border-b ${
        active
          ? "text-foreground border-foreground"
          : "text-muted-foreground border-transparent hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

const Index = () => {
  const [page, setPage] = useState<"home" | "download">("home");

  const avgRating = (
    reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-background font-golos">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-foreground rounded-md flex items-center justify-center">
              <Icon name="Zap" size={14} className="text-background" />
            </div>
            <span className="font-semibold text-foreground tracking-tight">УчиВсеПравила</span>
          </div>
          <nav className="flex items-center gap-6">
            <NavLink label="Главная" active={page === "home"} onClick={() => setPage("home")} />
            <NavLink label="Скачать" active={page === "download"} onClick={() => setPage("download")} />
          </nav>
        </div>
      </header>

      {page === "home" && (
        <main>
          {/* Hero */}
          <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-secondary text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full mb-6 opacity-0-init animate-fade-up">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  Правила всех школьных предметов
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 opacity-0-init animate-fade-up delay-100">
                  Все правила.<br />Один экран.<br />Любой предмет.
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 opacity-0-init animate-fade-up delay-200">
                  Учи правила по математике, русскому, физике, химии и другим предметам — всё в одном приложении, всегда под рукой.
                </p>
                <div className="flex items-center gap-4 opacity-0-init animate-fade-up delay-300">
                  <button
                    onClick={() => setPage("download")}
                    className="bg-foreground text-background px-6 py-3 rounded-xl font-medium hover:opacity-80 transition-opacity"
                  >
                    Скачать бесплатно
                  </button>
                  <button className="text-muted-foreground text-sm flex items-center gap-1.5 hover:text-foreground transition-colors">
                    Узнать больше
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
              <div className="opacity-0-init animate-fade-up delay-400">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-transparent rounded-3xl transform scale-105 -z-10" />
                  <img
                    src={HERO_IMAGE}
                    alt="Скриншот приложения"
                    className="w-full rounded-2xl border border-border shadow-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="border-y border-border bg-secondary/40">
            <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 divide-x divide-border">
              {[
                { value: "30 000+", label: "Учеников" },
                { value: avgRating + " / 5", label: "Средний рейтинг" },
                { value: "15+", label: "Школьных предметов" },
              ].map((stat) => (
                <div key={stat.label} className="px-8 first:pl-0 last:pr-0 text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="max-w-5xl mx-auto px-6 py-24">
            <div className="mb-14">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3">Возможности</p>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Учись умнее, а не дольше.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "BookOpen",
                  title: "Все предметы",
                  desc: "Математика, русский, физика, химия, биология, история и ещё 10+ предметов.",
                },
                {
                  icon: "Search",
                  title: "Быстрый поиск",
                  desc: "Найди нужное правило за секунду — просто введи ключевое слово.",
                },
                {
                  icon: "Bookmark",
                  title: "Закладки",
                  desc: "Сохраняй правила, которые учишь сейчас, чтобы быстро возвращаться к ним.",
                },
                {
                  icon: "WifiOff",
                  title: "Без интернета",
                  desc: "Работает офлайн — на уроке, в метро, в любом месте.",
                },
                {
                  icon: "GraduationCap",
                  title: "Подготовка к ОГЭ/ЕГЭ",
                  desc: "Правила отобраны с учётом требований экзаменов.",
                },

              ].map((f) => (
                <div
                  key={f.title}
                  className="group p-6 rounded-2xl border border-border hover:border-foreground/20 hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-foreground rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={f.icon} size={18} className="text-background" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-5xl mx-auto px-6 py-24 text-center">
            <h2 className="text-4xl font-bold text-foreground tracking-tight mb-4">
              Готов учиться лучше?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Бесплатно. Без рекламы. Все предметы сразу.
            </p>
            <button
              onClick={() => setPage("download")}
              className="bg-foreground text-background px-8 py-4 rounded-xl font-medium text-base hover:opacity-80 transition-opacity inline-flex items-center gap-2"
            >
              <Icon name="Download" size={18} />
              Скачать приложение
            </button>
          </section>
        </main>
      )}

      {page === "download" && (
        <main className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-14 opacity-0-init animate-fade-up">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3">Скачать</p>
            <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
              Скачать для Android
            </h1>
            <p className="text-muted-foreground text-lg">
              Установи APK прямо сейчас — бесплатно, без магазина приложений.
            </p>
          </div>

          <div className="max-w-md mb-16 opacity-0-init animate-fade-up delay-100">
            <div className="border border-border rounded-2xl p-8 hover:border-foreground/20 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-foreground rounded-2xl flex items-center justify-center shrink-0">
                  <Icon name="Smartphone" size={26} className="text-background" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">УчиВсеПравила.apk</h3>
                  <p className="text-sm text-muted-foreground">Android 9+ · ~18 МБ</p>
                </div>
              </div>
              <div className="border-t border-border pt-6 space-y-3">
                <a
                  href="https://www.dropbox.com/scl/fi/dmasmr4j7gp03ujz02ink/siteapp.apk?rlkey=wu1rffjhwu5id9y4oe2uhl4g2&st=trc3wskd&dl=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-foreground text-background py-3.5 rounded-xl font-medium hover:opacity-80 transition-opacity"
                >
                  <Icon name="Download" size={18} className="text-background" />
                  Скачать APK
                </a>
                <p className="text-xs text-muted-foreground text-center">
                  При установке разрешите «Установку из неизвестных источников»
                </p>
              </div>
            </div>
          </div>

          {/* Version info */}
          <div className="border border-border rounded-2xl p-8 bg-secondary/30 opacity-0-init animate-fade-up delay-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <Icon name="Info" size={15} className="text-background" />
              </div>
              <h3 className="font-semibold text-foreground">Что нового в версии 2.0</h3>

            </div>
            <ul className="space-y-3">
              {[
                "Добавлены правила по 5 новым предметам",
                "Умный поиск с подсказками",
                "Режим повторения: проверь себя перед уроком",
                "Работа без интернета на всех устройствах",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Icon name="Check" size={15} className="text-foreground mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-border mt-10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground rounded-md flex items-center justify-center">
              <Icon name="Zap" size={12} className="text-background" />
            </div>
            <span className="text-sm font-medium text-foreground">УчиВсеПравила</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 УчиВсеПравила. Все права защищены.</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Политика</a>
            <a href="#" className="hover:text-foreground transition-colors">Условия</a>
            <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;