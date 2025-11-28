import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            CloudFlow
          </div>
          <div className="hidden md:flex gap-8">
            {['product', 'features', 'reviews', 'pricing', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'product' && 'О продукте'}
                {section === 'features' && 'Возможности'}
                {section === 'reviews' && 'Отзывы'}
                {section === 'pricing' && 'Цены'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button size="sm" className="hidden md:inline-flex">
            Попробовать бесплатно
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-2">
              🚀 Новая эра SaaS
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Управляй бизнесом{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                из облака
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              CloudFlow — это платформа нового поколения для автоматизации процессов.
              Подписка от 990₽/мес. Демо-версия бесплатно.
            </p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                Попробовать демо
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Смотреть видео
                <Icon name="Play" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="py-24 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent/20 text-accent border-accent/40">О продукте</Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Все инструменты в одном месте
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CloudFlow объединяет CRM, аналитику, автоматизацию и коммуникации.
                Работайте из любой точки мира, синхронизируйте команду, масштабируйте бизнес.
              </p>
              <ul className="space-y-4">
                {[
                  'Интеграция с 200+ сервисами',
                  'Безопасность уровня банка',
                  'Обновления каждую неделю',
                  'Поддержка 24/7 на русском'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-primary/20 rounded-full p-1 mt-1">
                      <Icon name="Check" className="text-primary" size={16} />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <Card className="relative p-8 bg-card/80 backdrop-blur border-2 border-primary/30">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Icon name="Zap" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Скорость работы</div>
                      <div className="text-sm text-muted-foreground">В 3 раза быстрее</div>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-primary to-secondary" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {[
                      { icon: 'Users', label: '10K+', sub: 'Пользователей' },
                      { icon: 'TrendingUp', label: '99.9%', sub: 'Uptime' },
                      { icon: 'Award', label: '#1', sub: 'В рейтинге' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Icon name={stat.icon} className="text-secondary" size={20} />
                        </div>
                        <div className="font-bold text-lg">{stat.label}</div>
                        <div className="text-xs text-muted-foreground">{stat.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/20 text-primary border-primary/40 mb-4">Возможности</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Всё для роста бизнеса
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мощные инструменты, которые работают вместе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Workflow',
                color: 'primary',
                title: 'Автоматизация',
                desc: 'Настройте сценарии без программирования. Триггеры, действия, условия — всё визуально.'
              },
              {
                icon: 'BarChart3',
                color: 'secondary',
                title: 'Аналитика',
                desc: 'Дашборды в реальном времени. Отслеживайте метрики, стройте воронки, экспортируйте отчёты.'
              },
              {
                icon: 'Shield',
                color: 'accent',
                title: 'Безопасность',
                desc: 'Шифрование данных, двухфакторная аутентификация, резервные копии каждый час.'
              },
              {
                icon: 'Layers',
                color: 'primary',
                title: 'Интеграции',
                desc: 'Подключайте любимые сервисы через API. Готовые модули для Telegram, 1C, Bitrix.'
              },
              {
                icon: 'Users2',
                color: 'secondary',
                title: 'Командная работа',
                desc: 'Роли, права доступа, совместное редактирование. Работайте синхронно.'
              },
              {
                icon: 'Smartphone',
                color: 'accent',
                title: 'Мобильное приложение',
                desc: 'Доступ с любого устройства. Приложения для iOS и Android с полным функционалом.'
              }
            ].map((feature, i) => (
              <Card
                key={i}
                className={`p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}/20 flex items-center justify-center mb-4`}>
                  <Icon name={feature.icon} className={`text-${feature.color}`} size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-secondary/20 text-secondary border-secondary/40 mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что говорят клиенты
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Алексей Иванов',
                role: 'CEO, TechStart',
                avatar: '👨‍💼',
                text: 'CloudFlow помог нам сократить время на рутинные задачи на 60%. Команда работает эффективнее, клиенты довольны.'
              },
              {
                name: 'Мария Петрова',
                role: 'Директор по маркетингу',
                avatar: '👩‍💻',
                text: 'Лучшая аналитика, которую я видела. Наконец-то понимаем, откуда приходят клиенты и что работает.'
              },
              {
                name: 'Дмитрий Смирнов',
                role: 'Основатель, E-com Plus',
                avatar: '🧑‍💼',
                text: 'Перешли с трёх разных платформ на CloudFlow. Теперь всё в одном месте. Экономим 50к/мес.'
              }
            ].map((review, i) => (
              <Card
                key={i}
                className="p-6 bg-card border-border animate-fade-in"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Icon key={j} name="Star" className="text-accent fill-accent" size={16} />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-accent/20 text-accent border-accent/40 mb-4">Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Прозрачные цены
            </h2>
            <p className="text-lg text-muted-foreground">
              Выберите план под ваши задачи. Без скрытых платежей.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Демо',
                price: 'Бесплатно',
                period: '14 дней',
                features: ['До 5 пользователей', '100 МБ хранилища', 'Базовые интеграции', 'Email поддержка'],
                badge: 'Попробовать',
                highlight: false
              },
              {
                name: 'Стартап',
                price: '990₽',
                period: 'в месяц',
                features: ['До 20 пользователей', '10 ГБ хранилища', 'Все интеграции', 'Приоритетная поддержка', 'Автоматизация'],
                badge: 'Популярный',
                highlight: true
              },
              {
                name: 'Бизнес',
                price: '4990₽',
                period: 'в месяц',
                features: ['Безлимит пользователей', '100 ГБ хранилища', 'Персональный менеджер', 'API доступ', 'SLA 99.9%', 'Брендирование'],
                badge: 'Для команд',
                highlight: false
              }
            ].map((plan, i) => (
              <Card
                key={i}
                className={`p-8 bg-card border-2 transition-all hover:scale-105 animate-fade-in ${
                  plan.highlight
                    ? 'border-primary shadow-lg shadow-primary/20 relative'
                    : 'border-border'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-extrabold mb-1">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                      : ''
                  }`}
                  variant={plan.highlight ? 'default' : 'outline'}
                >
                  {plan.name === 'Демо' ? 'Начать бесплатно' : 'Подключить'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-primary/20 text-primary border-primary/40 mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Остались вопросы?
            </h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: 'Mail', title: 'Email', value: 'hello@cloudflow.ru', link: 'mailto:hello@cloudflow.ru' },
              { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67', link: 'tel:+74951234567' },
              { icon: 'MessageCircle', title: 'Telegram', value: '@cloudflow_support', link: 'https://t.me/cloudflow_support' }
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.link}
                className="block animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Card className="p-6 text-center hover:border-primary/50 transition-all hover:scale-105">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon name={contact.icon} className="text-primary" size={24} />
                  </div>
                  <div className="font-semibold mb-1">{contact.title}</div>
                  <div className="text-sm text-muted-foreground">{contact.value}</div>
                </Card>
              </a>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 animate-scale-in">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Начните прямо сейчас</h3>
              <p className="text-muted-foreground">
                14 дней бесплатно. Без карты. Отмена в любой момент.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
                />
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  Попробовать бесплатно
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              CloudFlow
            </div>
            <div className="flex gap-6">
              {['Github', 'Twitter', 'Linkedin'].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <Icon name={social} size={20} />
                </a>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 CloudFlow. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
