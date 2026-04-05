import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5d8e2707-5a44-48eb-92d3-567d1bd84ddf/files/40350072-c645-426d-a60c-e7dca8fcbb0f.jpg";

const reviews = [
  {
    name: "Анна К.",
    rating: 5,
    text: "Пользуюсь уже полгода — полностью изменило мой рабочий процесс. Чисто, быстро, без лишнего.",
    date: "март 2026",
  },
  {
    name: "Михаил Т.",
    rating: 5,
    text: "Наконец-то приложение, которое не пытается сделать всё сразу. Делает одно, но идеально.",
    date: "февраль 2026",
  },
  {
    name: "Светлана В.",
    rating: 4,
    text: "Дизайн на высоте, скорость работы отличная. Жду обновление с тёмной темой.",
    date: "январь 2026",
  },
  {
    name: "Дмитрий О.",
    rating: 5,
    text: "Команда быстро отвечает на вопросы. Продукт явно сделан с любовью к деталям.",
    date: "март 2026",
  },
  {
    name: "Елена Р.",
    rating: 5,
    text: "Скачала для пробы — осталась навсегда. Рекомендую всем коллегам.",
    date: "апрель 2026",
  },
  {
    name: "Игорь С.",
    rating: 4,
    text: "Интуитивный интерфейс, не нужна инструкция. Работает стабильно.",
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
            <span className="font-semibold text-foreground tracking-tight">Appname</span>
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
                  Версия 2.0 уже доступна
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 opacity-0-init animate-fade-up delay-100">
                  Просто.<br />Быстро.<br />Работает.
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 opacity-0-init animate-fade-up delay-200">
                  Приложение, которое помогает сосредоточиться на главном — без лишнего шума и сложности.
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
                { value: "50 000+", label: "Активных пользователей" },
                { value: avgRating + " / 5", label: "Средний рейтинг" },
                { value: "12 мес.", label: "На рынке" },
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
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Всё, что нужно. Ничего лишнего.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "Layers",
                  title: "Чистый интерфейс",
                  desc: "Только нужные функции. Никакого визуального шума, который мешает работе.",
                },
                {
                  icon: "Zap",
                  title: "Молниеносная скорость",
                  desc: "Запускается за секунду, работает без тормозов — даже на старых устройствах.",
                },
                {
                  icon: "Shield",
                  title: "Полная безопасность",
                  desc: "Ваши данные защищены шифрованием. Никакой рекламы и слежки.",
                },
                {
                  icon: "Smartphone",
                  title: "iOS и Android",
                  desc: "Нативные версии для обеих платформ с одним аккаунтом.",
                },
                {
                  icon: "RefreshCw",
                  title: "Синхронизация",
                  desc: "Все изменения мгновенно появляются на всех ваших устройствах.",
                },
                {
                  icon: "HeartHandshake",
                  title: "Поддержка 24/7",
                  desc: "Живые люди, а не боты. Отвечаем в течение часа в любое время.",
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

          {/* Reviews */}
          <section className="bg-secondary/30 border-t border-border py-24">
            <div className="max-w-5xl mx-auto px-6">
              <div className="flex items-end justify-between mb-14">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3">Отзывы</p>
                  <h2 className="text-3xl font-bold text-foreground tracking-tight">Что говорят пользователи</h2>
                </div>
                <div className="flex items-center gap-3 pb-1">
                  <div className="text-5xl font-bold text-foreground">{avgRating}</div>
                  <div>
                    <StarRating rating={Math.round(parseFloat(avgRating))} />
                    <p className="text-xs text-muted-foreground mt-1">{reviews.length} отзывов</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {reviews.map((r) => (
                  <div
                    key={r.name}
                    className="bg-background p-6 rounded-2xl border border-border hover:shadow-sm transition-shadow duration-300"
                  >
                    <StarRating rating={r.rating} />
                    <p className="text-sm text-foreground leading-relaxed my-4">"{r.text}"</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{r.name}</span>
                      <span className="text-xs text-muted-foreground">{r.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-5xl mx-auto px-6 py-24 text-center">
            <h2 className="text-4xl font-bold text-foreground tracking-tight mb-4">
              Готовы начать?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Бесплатно. Без карты. Без ограничений на старте.
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
              Выберите платформу
            </h1>
            <p className="text-muted-foreground text-lg">
              Доступно на всех популярных платформах. Один аккаунт — все устройства.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16 opacity-0-init animate-fade-up delay-100">
            {[
              {
                icon: "Smartphone",
                platform: "iOS",
                sub: "iPhone & iPad",
                badge: "App Store",
                req: "iOS 15+",
              },
              {
                icon: "Smartphone",
                platform: "Android",
                sub: "Смартфоны и планшеты",
                badge: "Google Play",
                req: "Android 9+",
              },
              {
                icon: "Monitor",
                platform: "Desktop",
                sub: "Windows & macOS",
                badge: "Прямая загрузка",
                req: "Win 10 / macOS 12+",
              },
            ].map((p) => (
              <div
                key={p.platform}
                className="group border border-border rounded-2xl p-8 hover:border-foreground/30 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon name={p.icon} size={22} className="text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{p.platform}</h3>
                <p className="text-sm text-muted-foreground mb-5">{p.sub}</p>
                <div className="border-t border-border pt-5">
                  <div className="text-xs text-muted-foreground mb-3">Требования: {p.req}</div>
                  <button className="w-full bg-foreground text-background py-2.5 rounded-xl text-sm font-medium hover:opacity-80 transition-opacity">
                    {p.badge}
                  </button>
                </div>
              </div>
            ))}
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
                "Полностью переработанный дизайн интерфейса",
                "Скорость запуска увеличена в 3 раза",
                "Новая система синхронизации между устройствами",
                "Улучшенная безопасность и шифрование данных",
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
            <span className="text-sm font-medium text-foreground">Appname</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Appname. Все права защищены.</p>
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