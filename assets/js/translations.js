/**
 * translations.js — i18n string definitions
 * Both languages are inlined here to avoid CORS issues with file:// protocol.
 * Keys are organized by section. Add new keys to BOTH objects.
 */

const translations = {
  en: {
    // ── Navigation ──────────────────────────────────────────────────────────
    nav_home: "Home",
    nav_about: "About",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_certifications: "Certifications",
    nav_contact: "Contact",
    nav_lang_toggle: "PT-BR",
    nav_lang_toggle_aria: "Switch to Portuguese",

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero_greeting: "Hello, I'm",
    hero_tagline: "Software development student from São Paulo, Brazil, building AI and machine learning applications in Python — from statistical forecasting with honest uncertainty to LLM-powered RAG systems — on a solid backend foundation.",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Get in Touch",
    hero_cta_resume: "Resume",
    resume_href: "static/resume-giovani-oliveira.pdf",
    hero_role: "AI & Machine Learning Developer",

    // ── About ────────────────────────────────────────────────────────────────
    about_section_title: "About Me",
    about_section_subtitle: "A little background",
    about_p1: "I'm a 24-year-old Software Analysis and Development student at FATEC São Paulo, with hands-on experience in backend development using Django, .NET, and various databases.",
    about_p2: "I've worked as a freelance backend developer, an AI trainer for Brazilian Portuguese at Outlier, and a data annotator at e2f — building both technical depth and a strong work ethic along the way.",
    about_p3: "Outside of work, I'm interested in cybersecurity, artificial intelligence, game development, and contributing to open source projects.",
    about_location: "São Paulo, Brazil",
    about_education: "FATEC — Software Analysis & Development",
    about_education_period: "Aug 2023 – Present",
    about_languages_spoken: "Portuguese (Native) · English (Proficient)",
    about_download_resume: "Download Resume",

    // ── Experience ───────────────────────────────────────────────────────────
    experience_section_title: "Experience",
    experience_section_subtitle: "My professional journey",

    exp1_title: "Backend Development Freelancer",
    exp1_company: "Self-employed",
    exp1_period: "Mar 2023 – Oct 2024",
    exp1_desc: "Developed small-to-medium web solutions for clients using .NET, Django REST API, SQL Server, MySQL, and Docker. Handled full backend lifecycle from database design to API deployment.",
    exp1_tags: ".NET|Django REST|MySQL|SQL Server|Docker",

    exp2_title: "AI Trainer — Brazilian Portuguese",
    exp2_company: "Outlier",
    exp2_period: "Jun 2024 – Jun 2025",
    exp2_desc: "Specialized in training and optimizing AI language models for Brazilian Portuguese, focusing on text and image processing tasks. Evaluated model outputs and provided structured feedback.",
    exp2_tags: "AI Training|NLP|Brazilian Portuguese|Text Processing",

    exp3_title: "Annotator — Brazilian Portuguese",
    exp3_company: "e2f",
    exp3_period: "Oct 2024 – Aug 2025",
    exp3_desc: "Specialized in data annotation and optimization of AI models in Brazilian Portuguese, focusing on text and video content. Ensured high-quality labeled datasets for model training.",
    exp3_tags: "Data Annotation|AI|Video Processing|NLP",

    exp4_title: "Junior Premium Support Analyst",
    exp4_company: "Desktop",
    exp4_period: "Jun 2026 – Sep 2026",
    exp4_desc: "Specialized technical support at an Internet Service Provider (ISP), acting as a liaison between customers, field teams, and internal departments to ensure efficient incident resolution and service continuity.",
    exp4_tags: "Technical Support|Incident Management|ISP Operations",

    // ── Skills ────────────────────────────────────────────────────────────────
    skills_section_title: "Skills",
    skills_section_subtitle: "Technologies I work with",
    skills_cat_languages: "Programming Languages",
    skills_cat_frameworks: "Frameworks & Libraries",
    skills_cat_databases: "Databases",
    skills_cat_tools: "Tools & DevOps",
    skills_cat_data: "Data & Machine Learning",

    // ── Projects ──────────────────────────────────────────────────────────────
    projects_section_title: "Projects",
    projects_section_subtitle: "Things I've built",

    w8t_badge: "Featured Project",
    w8t_title: "W8T",
    w8t_subtitle: "Weight tracking with statistics & machine learning",
    w8t_desc: "A study project in time-series statistics: daily weigh-ins become trend, plateau and anomaly detection, forecasts with honest uncertainty, and a plain-language summary — built and evaluated like a real ML system, on classical models suited to small personal data.",
    w8t_h1: "7 forecasting models (damped Holt, Kalman filter, Gaussian Process, ensemble), always with 95% intervals — the recommended ensemble held ~95% coverage across 30 synthetic series.",
    w8t_h2: "Walk-forward backtesting with Diebold–Mariano tests: no model is called better without statistical evidence.",
    w8t_h3: "Kalman-based detectors for trend, plateaus and outliers: 12× fewer false anomaly alarms than a simpler statistical reference method; gap reconstruction with uncertainty.",
    w8t_h4: "An LLM (Gemini) that only narrates numbers already computed — every number in the text is checked against them, and any mismatch is flagged.",
    w8t_tag_tech: "Python|statsmodels|scikit-learn|pandas|Streamlit|Plotly|SQLAlchemy|PostgreSQL|Gemini API",
    w8t_live: "Live Demo",
    w8t_code: "View Source",

    projects_other_title: "Other projects",
    projects_more_title: "More on GitHub",
    projects_more_desc: "Experiments, coursework and smaller tools.",

    scout_title: "Scout",
    scout_desc_short: "Recruitment management CRUD: job listings, applications and role-based access for companies and candidates.",
    scout_tag_line: "Django · Python · PostgreSQL",
    scout_live: "Live Demo",
    scout_code: "View Source",

    wiki_badge: "Company Project",
    wiki_title: "Desktop Wiki",
    wiki_subtitle: "Internal Knowledge Base Platform",
    wiki_desc: "Internal knowledge base for a customer-support team, redesigned end to end. Three-level topic navigation, rich content blocks (text, images, video, checklists), glossary tooltips and instant search. An AI assistant answers questions with RAG over the wiki's own content — embeddings plus keyword boosting, with screenshots auto-described by a vision model — and points to its sources. Also hosts browser-only tools, like a ticket-script generator whose customer data never leaves the browser. Django on Render, with PostgreSQL and Cloudflare R2.",
    wiki_tag_tech: "Django|Python|PostgreSQL|Tailwind CSS|RAG|Cloudflare Workers AI|Cloudflare R2",
    wiki_live: "Live Demo",
    wiki_code: "View Source",
    wiki_preview_placeholder: "Screenshot coming soon",

    moneta_badge: "Work in Progress",
    moneta_title: "Moneta",
    moneta_subtitle: "Personal finance management & planning",
    moneta_desc: "A personal finance app I'm building for my own daily use: accounts, income and expenses, budgets, recurring bills, installments, goals and investments in one place. The aim goes beyond recording the past — it should answer \"can I afford this, and what's the best way to pay for it?\", and every automatic analysis shows the numbers behind it.",
    moneta_tag_tech: "Python|Django|HTMX|SQLite|pytest|mypy",
    moneta_code: "View Source",
    moneta_note: "Not deployed: it holds my real financial data, so it only runs on my own machine.",
    moneta_done_title: "Already working",
    moneta_d1: "A dashboard with fair comparisons: a month in progress is compared with the same days of the previous month, and every chart has an equivalent table and a drill-down to the transactions behind it.",
    moneta_d2: "Automatic insights (budget pace, spending spikes, price drops) that always show their evidence, or say when there isn't enough history yet.",
    moneta_d3: "Planning: recurring bills, installment plans, budgets, a day-by-day balance projection and savings goals.",
    moneta_d4: "Investments: CDI, Selic and IPCA rates from the Brazilian Central Bank API, regressive income tax and IOF, and a comparison of paying upfront vs. in installments while the money keeps earning.",
    moneta_d5: "Engineering: money stored as integer cents, strict per-user data isolation, a strict Content Security Policy, versioned JSON export/import, 500+ automated tests and strict mypy.",
    moneta_now_title: "Working on now",
    moneta_n1: "Moving to real daily use: installable PWA, private access from my phone over Tailscale, and scheduled backups.",
    moneta_n2: "Interface polish: hover states and subtle motion that respect reduced-motion preferences.",
    moneta_n3: "Wishlist price tracking through the official Mercado Livre API — no scraping.",

    // ── Certifications ────────────────────────────────────────────────────────
    certs_section_title: "Certifications",
    certs_section_subtitle: "Credentials & learning",

    cert1_name: "Test of English for International Communication (TOEIC)",
    cert1_org: "ETS",
    cert1_date: "October 2023",
    cert1_desc: "CEFR language certification with a score of 915/990 — C1 level proficiency in English.",

    cert2_name: "Cybersecurity Essentials",
    cert2_org: "Cisco",
    cert2_date: "September 2023",
    cert2_desc: "Introduction to fundamental topics in cybersecurity: threats, vulnerabilities, network security, and best practices.",

    cert3_name: "Working with APIs in C#",
    cert3_org: "FATEC Americana",
    cert3_date: "October 2024",
    cert3_desc: "Intensive practical course on backend application development using ASP.NET, REST APIs, and C#.",

    // ── Contact ───────────────────────────────────────────────────────────────
    contact_section_title: "Get in Touch",
    contact_section_subtitle: "Let's connect",
    contact_desc: "I'm open to job opportunities, freelance projects, and interesting collaborations. Whether you have a question or just want to say hi — my inbox is always open.",
    contact_email_label: "Send an Email",
    contact_phone_label: "WhatsApp / Phone",
    contact_github_label: "GitHub Profile",
    contact_linkedin_label: "LinkedIn Profile",

    // ── Footer ────────────────────────────────────────────────────────────────
    footer_rights: "All rights reserved.",
    footer_built: "Built with",
    footer_and: "and",
    footer_coffee: "lots of coffee",
  },

  pt: {
    // ── Navigation ──────────────────────────────────────────────────────────
    nav_home: "Início",
    nav_about: "Sobre",
    nav_experience: "Experiência",
    nav_skills: "Habilidades",
    nav_projects: "Projetos",
    nav_certifications: "Certificações",
    nav_contact: "Contato",
    nav_lang_toggle: "EN",
    nav_lang_toggle_aria: "Trocar para Inglês",

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero_greeting: "Olá, eu sou",
    hero_tagline: "Estudante de desenvolvimento de software em São Paulo, construindo aplicações de IA e Machine Learning em Python — de previsão estatística com incerteza honesta a sistemas RAG com LLMs — sobre uma base sólida de backend.",
    hero_cta_projects: "Ver Projetos",
    hero_cta_contact: "Entrar em Contato",
    hero_cta_resume: "Currículo",
    resume_href: "static/curriculo-giovani-oliveira.pdf",
    hero_role: "Desenvolvedor de IA & Machine Learning",

    // ── About ────────────────────────────────────────────────────────────────
    about_section_title: "Sobre Mim",
    about_section_subtitle: "Um pouco sobre minha trajetória",
    about_p1: "Tenho 24 anos e sou estudante de Análise e Desenvolvimento de Sistemas na FATEC São Paulo, com experiência prática em desenvolvimento backend utilizando Django, .NET e diversas tecnologias de banco de dados.",
    about_p2: "Trabalhei como desenvolvedor backend freelancer, treinador de IA para o português brasileiro na Outlier, e anotador de dados na e2f — construindo profundidade técnica e uma forte ética de trabalho ao longo do caminho.",
    about_p3: "Fora do trabalho, me interesso por segurança cibernética, inteligência artificial, desenvolvimento de jogos e contribuição com projetos de código aberto.",
    about_location: "São Paulo, Brasil",
    about_education: "FATEC — Análise e Desenvolvimento de Sistemas",
    about_education_period: "Ago 2023 – Presente",
    about_languages_spoken: "Português (Nativo) · Inglês (Proficiente)",
    about_download_resume: "Baixar Currículo",

    // ── Experience ───────────────────────────────────────────────────────────
    experience_section_title: "Experiência",
    experience_section_subtitle: "Minha trajetória profissional",

    exp1_title: "Desenvolvedor Backend Freelancer",
    exp1_company: "Autônomo",
    exp1_period: "Mar 2023 – Out 2024",
    exp1_desc: "Desenvolvi soluções web de pequeno a médio porte para clientes utilizando .NET, Django REST API, SQL Server, MySQL e Docker. Responsável por todo o ciclo de backend, desde o design do banco de dados até o deploy das APIs.",
    exp1_tags: ".NET|Django REST|MySQL|SQL Server|Docker",

    exp2_title: "Treinador de IA — Português Brasileiro",
    exp2_company: "Outlier",
    exp2_period: "Jun 2024 – Jun 2025",
    exp2_desc: "Especializado no treinamento e otimização de modelos de linguagem de IA para o português brasileiro, com foco em processamento de texto e imagens. Avaliei saídas dos modelos e forneci feedback estruturado.",
    exp2_tags: "Treinamento de IA|NLP|Português Brasileiro|Processamento de Texto",

    exp3_title: "Anotador — Português Brasileiro",
    exp3_company: "e2f",
    exp3_period: "Out 2024 – Ago 2025",
    exp3_desc: "Especializado em anotação de dados e otimização de modelos de IA em português brasileiro, com foco em conteúdo de texto e vídeo. Garantia da qualidade de conjuntos de dados rotulados para treinamento de modelos.",
    exp3_tags: "Anotação de Dados|IA|Processamento de Vídeo|NLP",

    exp4_title: "Analista de Suporte Premium Júnior",
    exp4_company: "Desktop",
    exp4_period: "Jun 2026 – Set 2026",
    exp4_desc: "Suporte técnico especializado em um provedor de internet (ISP), atuando como elo entre clientes, equipes de campo e departamentos internos para garantir a resolução eficiente de incidentes e a continuidade do serviço.",
    exp4_tags: "Suporte Técnico|Gestão de Incidentes|Operações de ISP",

    // ── Skills ────────────────────────────────────────────────────────────────
    skills_section_title: "Habilidades",
    skills_section_subtitle: "Tecnologias com as quais trabalho",
    skills_cat_languages: "Linguagens de Programação",
    skills_cat_frameworks: "Frameworks & Bibliotecas",
    skills_cat_databases: "Bancos de Dados",
    skills_cat_tools: "Ferramentas & DevOps",
    skills_cat_data: "Dados & Machine Learning",

    // ── Projects ──────────────────────────────────────────────────────────────
    projects_section_title: "Projetos",
    projects_section_subtitle: "O que eu construí",

    w8t_badge: "Projeto em Destaque",
    w8t_title: "W8T",
    w8t_subtitle: "Acompanhamento de peso com estatística & machine learning",
    w8t_desc: "Projeto de estudo em estatística de séries temporais: pesagens diárias viram detecção de tendência, platô e anomalia, previsões com incerteza honesta e um resumo em linguagem natural — construído e avaliado como um sistema de ML de verdade, com modelos clássicos adequados a poucos dados pessoais.",
    w8t_h1: "7 modelos de previsão (Holt amortecido, filtro de Kalman, Processo Gaussiano, combinação), sempre com intervalo de 95% — a combinação recomendada manteve ~95% de cobertura em 30 séries sintéticas.",
    w8t_h2: "Backtesting walk-forward com teste de Diebold–Mariano: nenhum modelo é declarado melhor sem evidência estatística.",
    w8t_h3: "Detectores baseados em Kalman para tendência, platôs e medições atípicas: 12× menos alarmes falsos de anomalia que um método estatístico mais simples usado como referência; reconstrução de lacunas com incerteza.",
    w8t_h4: "Um LLM (Gemini) que só narra números já calculados — cada número do texto é conferido com eles, e qualquer divergência é sinalizada.",
    w8t_tag_tech: "Python|statsmodels|scikit-learn|pandas|Streamlit|Plotly|SQLAlchemy|PostgreSQL|Gemini API",
    w8t_live: "Demo ao Vivo",
    w8t_code: "Ver Código",

    projects_other_title: "Outros projetos",
    projects_more_title: "Mais no GitHub",
    projects_more_desc: "Experimentos, trabalhos da faculdade e ferramentas menores.",

    scout_title: "Scout",
    scout_desc_short: "CRUD de gestão de recrutamento: vagas, candidaturas e controle de acesso por função para empresas e candidatos.",
    scout_tag_line: "Django · Python · PostgreSQL",
    scout_live: "Demo ao Vivo",
    scout_code: "Ver Código",

    wiki_badge: "Projeto Corporativo",
    wiki_title: "Desktop Wiki",
    wiki_subtitle: "Plataforma Interna de Base de Conhecimento",
    wiki_desc: "Base de conhecimento interna de uma equipe de suporte, redesenhada de ponta a ponta. Navegação em três níveis, blocos de conteúdo (texto, imagens, vídeo, checklists), tooltips de glossário e busca instantânea. Um assistente de IA responde perguntas com RAG sobre o próprio conteúdo da wiki — embeddings mais reforço por palavra-chave, com prints descritos automaticamente por um modelo de visão — e indica as fontes. Também reúne ferramentas que rodam só no navegador, como um gerador de script de chamado cujos dados de cliente nunca saem do navegador. Django no Render, com PostgreSQL e Cloudflare R2.",
    wiki_tag_tech: "Django|Python|PostgreSQL|Tailwind CSS|RAG|Cloudflare Workers AI|Cloudflare R2",
    wiki_live: "Demo ao Vivo",
    wiki_code: "Ver Código",
    wiki_preview_placeholder: "Screenshot em breve",

    moneta_badge: "Em Desenvolvimento",
    moneta_title: "Moneta",
    moneta_subtitle: "Gestão e planejamento financeiro pessoal",
    moneta_desc: "Um app de finanças pessoais que estou construindo para o meu próprio dia a dia: contas, receitas e despesas, orçamentos, contas recorrentes, parcelamentos, metas e investimentos em um só lugar. A ideia vai além de registrar o passado — ele deve responder \"dá para comprar isso, e qual a melhor forma de pagar?\", e toda análise automática mostra os números por trás dela.",
    moneta_tag_tech: "Python|Django|HTMX|SQLite|pytest|mypy",
    moneta_code: "Ver Código",
    moneta_note: "Sem deploy público: ele guarda meus dados financeiros reais, então roda só na minha máquina.",
    moneta_done_title: "Já funcionando",
    moneta_d1: "Painel com comparações justas: o mês em andamento é comparado com os mesmos dias do mês anterior, e todo gráfico tem uma tabela equivalente e um atalho para as movimentações por trás dele.",
    moneta_d2: "Análises automáticas (ritmo do orçamento, picos de gasto, quedas de preço) que sempre mostram a evidência, ou avisam quando ainda não há histórico suficiente.",
    moneta_d3: "Planejamento: contas recorrentes, parcelamentos, orçamentos, projeção do saldo dia a dia e metas de economia.",
    moneta_d4: "Investimentos: CDI, Selic e IPCA pela API do Banco Central, IR regressivo e IOF, e a comparação entre pagar à vista ou parcelado enquanto o dinheiro continua rendendo.",
    moneta_d5: "Engenharia: dinheiro guardado em centavos inteiros, isolamento rigoroso dos dados de cada usuário, Content Security Policy estrita, exportação/importação em JSON versionado, mais de 500 testes automatizados e mypy no modo estrito.",
    moneta_now_title: "Em andamento",
    moneta_n1: "Colocando em uso real no dia a dia: PWA instalável, acesso privado pelo celular via Tailscale e backups agendados.",
    moneta_n2: "Polimento da interface: estados de hover e animações sutis que respeitam a preferência por movimento reduzido.",
    moneta_n3: "Acompanhamento de preços da lista de desejos pela API oficial do Mercado Livre — sem raspagem de sites.",

    // ── Certifications ────────────────────────────────────────────────────────
    certs_section_title: "Certificações",
    certs_section_subtitle: "Credenciais e aprendizado",

    cert1_name: "Test of English for International Communication (TOEIC)",
    cert1_org: "ETS",
    cert1_date: "Outubro 2023",
    cert1_desc: "Certificação de idioma CEFR com pontuação de 915/990 — proficiência de nível C1 em inglês.",

    cert2_name: "Fundamentos de Cibersegurança",
    cert2_org: "Cisco",
    cert2_date: "Setembro 2023",
    cert2_desc: "Introdução aos tópicos fundamentais em cibersegurança: ameaças, vulnerabilidades, segurança de rede e boas práticas.",

    cert3_name: "Trabalhando com APIs em C#",
    cert3_org: "FATEC Americana",
    cert3_date: "Outubro 2024",
    cert3_desc: "Curso prático intensivo sobre desenvolvimento de aplicações backend com ASP.NET, APIs REST e C#.",

    // ── Contact ───────────────────────────────────────────────────────────────
    contact_section_title: "Entre em Contato",
    contact_section_subtitle: "Vamos conversar",
    contact_desc: "Estou aberto a oportunidades de trabalho, projetos freelance e colaborações interessantes. Seja para uma pergunta ou apenas para dizer olá — minha caixa de entrada está sempre aberta.",
    contact_email_label: "Enviar E-mail",
    contact_phone_label: "WhatsApp / Telefone",
    contact_github_label: "Perfil no GitHub",
    contact_linkedin_label: "Perfil no LinkedIn",

    // ── Footer ────────────────────────────────────────────────────────────────
    footer_rights: "Todos os direitos reservados.",
    footer_built: "Feito com",
    footer_and: "e",
    footer_coffee: "muito café",
  },
};
