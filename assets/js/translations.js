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
    hero_tagline: "Software development student from São Paulo, Brazil — passionate about backend development, open source, and building things that matter.",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Get in Touch",
    hero_cta_resume: "Resume",
    hero_scroll: "Scroll down",

    // Typewriter cycle — separated by | — keep concise
    hero_roles: "Backend Developer|Software Student|Full Stack Enthusiast|FOSS Advocate|API Builder",

    // ── About ────────────────────────────────────────────────────────────────
    about_section_title: "About Me",
    about_section_subtitle: "A little background",
    about_p1: "I'm a 23-year-old Software Analysis and Development student at FATEC São Paulo, with hands-on experience in backend development using Django, .NET, and various databases.",
    about_p2: "I've worked as a freelance backend developer, an AI trainer for Brazilian Portuguese at Outlier, and a data annotator at e2f — building both technical depth and a strong work ethic along the way.",
    about_p3: "Outside of work, I'm interested in cybersecurity, artificial intelligence, game development, and contributing to open source projects.",
    about_location: "São Paulo, Brazil",
    about_education: "FATEC — Software Analysis & Development",
    about_education_period: "Aug 2023 – Present",
    about_languages_spoken: "Portuguese (Native) · English (Proficient)",
    about_download_resume: "Download Resume",
    about_stat_exp: "Years of Experience",
    about_stat_projects: "Projects Built",
    about_stat_langs: "Languages Spoken",

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

    // ── Skills ────────────────────────────────────────────────────────────────
    skills_section_title: "Skills",
    skills_section_subtitle: "Technologies I work with",
    skills_cat_languages: "Programming Languages",
    skills_cat_frameworks: "Frameworks & Libraries",
    skills_cat_databases: "Databases",
    skills_cat_tools: "Tools & DevOps",

    // ── Projects ──────────────────────────────────────────────────────────────
    projects_section_title: "Projects",
    projects_section_subtitle: "Things I've built",

    scout_badge: "Featured Project",
    scout_title: "Scout",
    scout_subtitle: "Recruitment Management Platform",
    scout_desc: "A full-featured recruitment management system built with Django and Python. Companies can publish job listings, review candidate applications, and manage the hiring pipeline. Candidates can create profiles, upload CVs, and track their application status. Includes role-based access control, file management for CVs, and a clean admin dashboard.",
    scout_tag_tech: "Django|Python|PostgreSQL|SQLite|HTML|CSS|JavaScript",
    scout_live: "Live Demo",
    scout_code: "View Source",
    scout_coming_soon: "Coming Soon",

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
    hero_tagline: "Estudante de desenvolvimento de software em São Paulo, Brasil — apaixonado por desenvolvimento backend, código aberto e por construir coisas que importam.",
    hero_cta_projects: "Ver Projetos",
    hero_cta_contact: "Entrar em Contato",
    hero_cta_resume: "Currículo",
    hero_scroll: "Role para baixo",

    hero_roles: "Desenvolvedor Backend|Estudante de Software|Entusiasta Full Stack|Defensor do FOSS|Construtor de APIs",

    // ── About ────────────────────────────────────────────────────────────────
    about_section_title: "Sobre Mim",
    about_section_subtitle: "Um pouco sobre minha trajetória",
    about_p1: "Tenho 23 anos e sou estudante de Análise e Desenvolvimento de Sistemas na FATEC São Paulo, com experiência prática em desenvolvimento backend utilizando Django, .NET e diversas tecnologias de banco de dados.",
    about_p2: "Trabalhei como desenvolvedor backend freelancer, treinador de IA para o português brasileiro na Outlier, e anotador de dados na e2f — construindo profundidade técnica e uma forte ética de trabalho ao longo do caminho.",
    about_p3: "Fora do trabalho, me interesso por segurança cibernética, inteligência artificial, desenvolvimento de jogos e contribuição com projetos de código aberto.",
    about_location: "São Paulo, Brasil",
    about_education: "FATEC — Análise e Desenvolvimento de Sistemas",
    about_education_period: "Ago 2023 – Presente",
    about_languages_spoken: "Português (Nativo) · Inglês (Proficiente)",
    about_download_resume: "Baixar Currículo",
    about_stat_exp: "Anos de Experiência",
    about_stat_projects: "Projetos Desenvolvidos",
    about_stat_langs: "Idiomas Falados",

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

    // ── Skills ────────────────────────────────────────────────────────────────
    skills_section_title: "Habilidades",
    skills_section_subtitle: "Tecnologias com as quais trabalho",
    skills_cat_languages: "Linguagens de Programação",
    skills_cat_frameworks: "Frameworks & Bibliotecas",
    skills_cat_databases: "Bancos de Dados",
    skills_cat_tools: "Ferramentas & DevOps",

    // ── Projects ──────────────────────────────────────────────────────────────
    projects_section_title: "Projetos",
    projects_section_subtitle: "O que eu construí",

    scout_badge: "Projeto em Destaque",
    scout_title: "Scout",
    scout_subtitle: "Plataforma de Gestão de Recrutamento",
    scout_desc: "Sistema completo de gestão de recrutamento desenvolvido com Django e Python. Empresas podem publicar vagas, analisar candidaturas e gerenciar o pipeline de contratação. Candidatos podem criar perfis, enviar currículos e acompanhar o status das suas candidaturas. Inclui controle de acesso por função, gerenciamento de arquivos e um painel administrativo limpo.",
    scout_tag_tech: "Django|Python|PostgreSQL|SQLite|HTML|CSS|JavaScript",
    scout_live: "Demo ao Vivo",
    scout_code: "Ver Código",
    scout_coming_soon: "Em Breve",

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
