const i18nData = {
    pt: {
        "nav-portfolio": "Portfólio",
        "nav-presentation": "Apresentação",
        "nav-projects": "Projetos",
        "nav-knowledge": "Competências",
        "nav-curriculum": "Currículo",
        "nav-contact": "Contatos",

        "hero-eyebrow": "Portfólio Acadêmico Digital • FATEC SJC",
        "hero-greeting": "João Vítor Góes Gomes",
        "hero-desc": "Estudante de Desenvolvimento de Software Multiplataforma na FATEC São José dos Campos (Prof. Jessen Vidal) e Analista de Monitoramento em NOC (Network Operations Center).",
        "hero-obj-title": "<i class='fas fa-bullseye'></i> Objetivos Acadêmicos e Profissionais",
        "hero-obj-text": "Atuar como Desenvolvedor Full Stack e Engenheiro DevOps/SRE, aplicando engenharia de software, automação inteligente e arquitetura em nuvem para construir sistemas escaláveis, resilientes e de alto impacto.",
        "hero-int-title": "<i class='fas fa-compass'></i> Áreas de Interesse",
        "int-1": "Desenvolvimento Full Stack",
        "int-2": "DevOps, SRE & Observabilidade",
        "int-3": "APIs REST & Microsserviços",
        "int-4": "Inteligência Artificial & Agentes",
        "int-5": "Mobile (Flutter / React Native)",

        "section-projects-title": "Meus Projetos",
        "section-projects-subtitle": "Explore meus projetos acadêmicos (API), profissionais e pessoais desenvolvidos ao longo da minha trajetória.",
        "filter-all": "Todos",
        "filter-api": "#Acadêmicos (API)",
        "filter-prof": "#Profissionais",
        "filter-personal": "#Pessoais & Outros",

        "badge-api": "Projeto Acadêmico (API)",
        "badge-prof": "Projeto Profissional",
        "badge-personal": "Projeto Pessoal",
        "badge-acad": "Projeto de Disciplina",

        "label-problem": "<i class='fas fa-exclamation-circle'></i> Situação-Problema",
        "label-solution": "<i class='fas fa-lightbulb'></i> Solução Desenvolvida",
        "tech-used": "Tecnologias Utilizadas",
        "personal-contrib": "Contribuições Pessoais",
        "hard-skills-title": "Habilidades Técnicas Adquiridas (Hard Skills)",
        "soft-skills-title": "Habilidades Pessoais e Sociais (Soft Skills)",
        "view-github": "Repositório da Equipe <i class='fas fa-external-link-alt'></i>",
        "view-github-personal": "Repositório Pessoal <i class='fas fa-code-branch'></i>",

        // 1. Smart Farming
        "sf-partner": "<i class='fas fa-handshake'></i> Empresa Parceira: Equipe I9 / FATEC SJC",
        "sf-problem": "A necessidade de monitorar, armazenar e analisar continuamente variáveis críticas de uma estufa automatizada para agricultura indoor (umidade do ar e do solo, temperatura e volume de água), evitando perdas no cultivo por falta de acompanhamento diário.",
        "sf-solution": "Aplicação web desenvolvida em equipe com Scrum para leitura, persistência e visualização gráfica das médias diárias e leituras dos sensores da estufa inteligente.",
        "sf-contrib-1": "<strong>Flask:</strong> Configuração inicial do servidor web, rotas REST/HTTP e operações CRUD.",
        "sf-contrib-2": "<strong>MySQL:</strong> Modelagem relacional e estruturação do banco de dados das leituras.",
        "sf-contrib-3": "<strong>Front-end:</strong> Criação de interfaces responsivas e filtros para visualização dos dados.",
        "sf-hard-1": "<strong>Python & Flask (Desenvolvedor Autônomo):</strong> Construção de rotas backend e integração com templates.",
        "sf-hard-2": "<strong>SQL / MySQL (Desenvolvedor Autônomo):</strong> Modelagem de tabelas e consultas agregadas.",
        "sf-hard-3": "<strong>HTML5, CSS3 & JS (Fluente):</strong> Estruturação semântica e consumo dinâmico de dados.",
        "sf-soft-1": "<strong>Trabalho em equipe:</strong> Colaboração eficaz em ambiente Scrum com 8 desenvolvedores.",
        "sf-soft-2": "<strong>Adaptabilidade:</strong> Aprendizado rápido de novas tecnologias no 1º semestre.",
        "sf-soft-3": "<strong>Comunicação:</strong> Participação ativa nas cerimônias ágeis (Daily, Planning, Review e Retro).",

        // 2. Inv.Sort
        "is-partner": "<i class='fas fa-handshake'></i> Empresa Parceira: Prof. Cláudio Etelvino (Cliente Acelerador - FATEC SJC)",
        "is-problem": "A dificuldade de gerenciar movimentações de estoque de forma precisa, onde o controle descentralizado gerava inconsistências nos níveis de produtos e a ausência de relatórios atualizados impedia tomadas de decisão estratégicas.",
        "is-solution": "Sistema web completo para controle de estoque com gestão de categorias, produtos, fornecedores, fluxo de entrada/saída e dashboards analíticos personalizados.",
        "is-contrib-1": "<strong>Product Owner:</strong> Definição de roadmap, gestão do Product Backlog e priorização de User Stories.",
        "is-contrib-2": "<strong>Front-end:</strong> Desenvolvimento de componentes reutilizáveis e tabelas filtráveis com React.",
        "is-contrib-3": "<strong>UI/UX:</strong> Implementação de interface responsiva com Tailwind CSS.",
        "is-hard-1": "<strong>React & Tailwind CSS (Fluente):</strong> Componentização, gerenciamento de estado, hooks e estilização utilitária.",
        "is-hard-2": "<strong>Node.js, Express & Prisma ORM (Desenvolvedor Autônomo):</strong> Integração com API REST e mapeamento objeto-relacional.",
        "is-soft-1": "<strong>Liderança:</strong> Coordenação do produto junto a uma equipe de 8 desenvolvedores.",
        "is-soft-2": "<strong>Gestão de Expectativas:</strong> Mediação contínua entre stakeholders e time técnico.",
        "is-soft-3": "<strong>Visão Estratégica:</strong> Alinhamento das entregas de cada sprint com os objetivos de negócio.",

        // 3. Checkpoint
        "cp-partner": "<i class='fas fa-handshake'></i> Empresa Parceira: Necto Systems",
        "cp-problem": "A necessidade de monitorar, organizar e controlar a jornada de trabalho de colaboradores de forma transparente e em conformidade legal, eliminando falhas no cálculo de horas extras, banco de horas, folgas e solicitações de abono.",
        "cp-solution": "Sistema de ponto eletrônico web desenvolvido em 3 sprints com visões dedicadas para colaboradores e gestores, incluindo marcação online, cálculo automatizado de horas, notificações em tempo real (WebSockets) e relatórios gerenciais.",
        "cp-contrib-1": "<strong>Back-end:</strong> Implementação da lógica de cálculo de horas trabalhadas, extras e banco de horas em Spring Boot.",
        "cp-contrib-2": "<strong>Front-end:</strong> Desenvolvimento de dashboards gerenciais e relatórios com React e TypeScript.",
        "cp-contrib-3": "<strong>Integração:</strong> Conexão entre front-end e APIs REST/WebSockets.",
        "cp-hard-1": "<strong>Java & Spring Boot (Desenvolvedor Autônomo):</strong> Regras de negócio complexas e persistência híbrida (MySQL + MongoDB).",
        "cp-hard-2": "<strong>React & TypeScript (Fluente):</strong> Tipagem estática, Redux e consumo de APIs com Axios.",
        "cp-soft-1": "<strong>Resiliência Técnica:</strong> Aprendizado simultâneo de Java/Spring e TypeScript.",
        "cp-soft-2": "<strong>Orientação a Detalhes:</strong> Rigor na implementação das regras trabalhistas de cálculo de horas.",
        "cp-soft-3": "<strong>Colaboração:</strong> Sinergia em equipe ágil de 5 desenvolvedores.",

        // 4. Nimbus
        "nb-partner": "<i class='fas fa-handshake'></i> Empresa Parceira: Tecsus",
        "nb-problem": "A necessidade de coletar, validar e disponibilizar dados meteorológicos precisos a partir de estações IoT de baixo custo (ESP32), aliando monitoramento ambiental para prevenção de desastres naturais à educação prática em escolas públicas.",
        "nb-solution": "Ecossistema IoT ponta a ponta que realiza a ingestão periódica de sensores (vento, chuva, umidade, temperatura e pressão), tratamento automatizado, disparo de alertas em tempo real e exibição em dashboards educativos.",
        "nb-contrib-1": "<strong>Infraestrutura & DB:</strong> Modelagem relacional e estruturação do banco de dados PostgreSQL.",
        "nb-contrib-2": "<strong>Tratamento de Dados:</strong> Desenvolvimento de scripts em Python para ingestão, validação e normalização de leituras.",
        "nb-contrib-3": "<strong>Metodologia:</strong> Planejamento técnico dos entregáveis com foco em prazos rigorosos.",
        "nb-hard-1": "<strong>Python & Processamento de Dados (Fluente):</strong> Sanitização e ingestão automatizada de séries temporais IoT.",
        "nb-hard-2": "<strong>PostgreSQL & Docker (Desenvolvedor Autônomo):</strong> Modelagem relacional, containerização e orquestração de serviços.",
        "nb-soft-1": "<strong>Visão Holística:</strong> Compreensão completa do ciclo de transmissão do hardware (ESP32) ao portal web.",
        "nb-soft-2": "<strong>Pensamento Analítico:</strong> Validação de integridade de dados massivos e tratamento de anomalias.",

        // 5. PrecedentIA
        "pr-period": "2026-1 | Product Owner",
        "pr-partner": "<i class='fas fa-handshake'></i> Empresa Parceira: Xertica.ai",
        "pr-problem": "A sobrecarga processual nos tribunais latino-americanos, onde magistrados despendem elevado tempo na triagem manual de petições iniciais e na busca por precedentes judiciais qualificados antes da análise de mérito.",
        "pr-solution": "Plataforma inteligente de análise jurídica baseada em IA Generativa, RAG e busca vetorial que extrai os pontos-chave de petições iniciais e recomenda precedentes judiciais categorizados por aplicabilidade com síntese explicativa.",
        "pr-contrib-1": "<strong>Product Owner:</strong> Priorização do backlog e alinhamento estratégico das entregas entre a equipe e a Xertica.ai.",
        "pr-contrib-2": "<strong>Dart & Flutter:</strong> Desenvolvimento de componentes multiplataforma e interfaces da aplicação.",
        "pr-contrib-3": "<strong>DevOps & Terraform:</strong> Estruturação da infraestrutura como código (IaC) e automação de deploy.",
        "pr-hard-1": "<strong>Flutter & Dart (Desenvolvedor Autônomo):</strong> Construção de interfaces multiplataforma modernas e responsivas.",
        "pr-hard-2": "<strong>Terraform, Cloud & Git Submodules (Desenvolvedor Autônomo):</strong> Provisionamento de infraestrutura como código e gestão de múltiplos repositórios.",
        "pr-soft-1": "<strong>Comunicação Corporativa:</strong> Alinhamento técnico e tradução de demandas jurídicas junto ao cliente Xertica.ai.",
        "pr-soft-2": "<strong>Liderança Técnica:</strong> Condução das decisões de DevOps e entregas de produto do time.",

        "sb-partner": "<i class='fas fa-brain'></i> Mentor virtual para aprendizagem de novas habilidades",
        "sb-problem": "A dificuldade de aprender novas habilidades sem saber por onde começar, definir objetivos claros ou acompanhar a própria evolução.",
        "sb-solution": "Mentor virtual com IA e processamento de linguagem natural que sugere atividades personalizadas, acompanha o progresso e fornece feedback para apoiar o desenvolvimento de habilidades.",

        // 6. NOCFlow (Profissional)
        "nf-period": "2025 - Atual | Analista de Monitoramento NOC",
        "nf-partner": "<i class='fas fa-briefcase'></i> Vínculo Profissional: Atuação em NOC / SRE",
        "nf-problem": "A necessidade de reduzir o tempo médio de resposta (MTTR) e eliminar o retrabalho manual durante o tratamento de incidentes críticos no NOC, onde a transcrição de alertas do Zabbix, abertura de tickets no Movidesk e notificação às equipes consumiam minutos preciosos.",
        "nf-solution": "Sistema desktop em Python (NOCFlow) que utiliza Visão Computacional via Google Gemini (IA multimodal) para extrair automaticamente dados de prints do Zabbix na área de transferência, preenche tickets ricos em HTML no Movidesk via Playwright e gera comunicados padronizados para WhatsApp, Teams e E-mail com um clique.",
        "nf-contrib-1": "<strong>Concepção & Arquitetura:</strong> Idealização e desenvolvimento integral da ferramenta aplicada à rotina real do NOC.",
        "nf-contrib-2": "<strong>IA & Automação:</strong> Integração com a API do Google Gemini 1.5 Flash e automação de navegador com Playwright.",
        "nf-contrib-3": "<strong>Interface Desktop:</strong> Construção da GUI em Tkinter com gestão de área de transferência (Pillow/Pyperclip).",
        "nf-hard-1": "<strong>Python, Playwright & Gemini AI (Fluente):</strong> Automação RPA/SRE e integração de modelos multimodais.",
        "nf-hard-2": "<strong>Zabbix & Gestão de Incidentes (Fluente):</strong> Triagem de alertas, análise de severidade e operação de ferramentas ITSM.",
        "nf-soft-1": "<strong>Proatividade e Inovação:</strong> Identificação de gargalos operacionais no trabalho e criação autônoma de solução.",
        "nf-soft-2": "<strong>Foco em Eficiência:</strong> Padronização da comunicação técnica sob pressão em cenários de incidentes.",

        // 7. Lab Zabbix 7 (Profissional)
        "lz-period": "2025 - 2026 | Projeto Aplicado ao NOC / Observabilidade",
        "lz-partner": "<i class='fas fa-server'></i> Contexto: Engenharia de Monitoramento & SRE",
        "lz-problem": "A necessidade de simular, validar e homologar cenários complexos de monitoramento corporativo distribuído, alta disponibilidade de coleta, segurança de acesso e gestão de SLA sem impactar ambientes produtivos.",
        "lz-solution": "Ambiente completo de laboratório baseado em Zabbix 7.0 LTS em arquitetura híbrida (Docker Compose v2, Host Windows e VMs Linux), provisionado via API com múltiplos métodos de coleta (Agent clássico/ativo, Agent 2, MySQL e Docker nativos), Proxies Zabbix, RBAC, MFA TOTP, esteira de alertas com webhooks e dashboards executivos de SLA.",
        "lz-contrib-1": "<strong>Automação via API & PowerShell:</strong> Scripts para provisionamento automatizado de hosts, templates, triggers e regras de monitoramento.",
        "lz-contrib-2": "<strong>Arquitetura Híbrida:</strong> Orquestração com Docker Compose, Zabbix Proxy SQLite e agentes em Windows/Linux.",
        "lz-hard-1": "<strong>Zabbix 7.0 LTS & Observabilidade (Fluente):</strong> Configuração avançada de proxies, descoberta automática, SLA e webhooks.",
        "lz-hard-2": "<strong>Docker, Linux & PowerShell (Desenvolvedor Autônomo):</strong> Automação de infraestrutura e administração de sistemas.",
        "lz-soft-1": "<strong>Documentação Técnica:</strong> Criação de guia passo a passo detalhado de arquitetura e operação.",
        "lz-soft-2": "<strong>Visão Sistêmica:</strong> Planejamento de segurança (RBAC/MFA) e janelas de manutenção.",

        // 8. Grimório (Pessoal)
        "gr-period": "2025 - 2026 | Projeto Pessoal",
        "gr-partner": "<i class='fas fa-mobile-alt'></i> Aplicação Mobile Android (Offline-first)",
        "gr-problem": "A necessidade de organizar tarefas cotidianas, checklists e projetos de longo prazo em um dispositivo móvel com total autonomia offline, privacidade de dados locais e uma experiência visual imersiva livre de distrações.",
        "gr-solution": "Aplicativo mobile Android desenvolvido com React Native, Expo e TypeScript que reúne lista de tarefas, quadros Kanban, agrupamento por projetos/pastas e visão diária planejada.",
        "gr-contrib-1": "<strong>Desenvolvimento Mobile Completo:</strong> Arquitetura offline-first, navegação, persistência local e geração de APK.",
        "gr-contrib-2": "<strong>Product Design & UI/UX:</strong> Criação da identidade visual, backlog evolutivo e prototipação.",
        "gr-hard-1": "<strong>React Native, Expo & TypeScript (Desenvolvedor Autônomo):</strong> Desenvolvimento mobile multiplataforma e tipagem estrita.",
        "gr-soft-1": "<strong>Autogestão de Produto:</strong> Separação clara entre MVP implementado e roadmap futuro.",

        // 9. CadastraHub (Acadêmico)
        "ch-period": "2025-1 | Desenvolvimento Web II",
        "ch-partner": "<i class='fas fa-university'></i> Orientação: Prof. Cláudio Etelvino (FATEC SJC)",
        "ch-problem": "A lentidão e inconsistência causadas pelo controle manual de catálogo de produtos em pequenas empresas, dificultando a consulta rápida e a segurança no acesso aos registros.",
        "ch-solution": "Plataforma web full stack para cadastro, edição, pesquisa e gerenciamento seguro de produtos com autenticação via token JWT.",
        "ch-contrib-1": "<strong>Back-end:</strong> Desenvolvimento do módulo de autenticação segura com JWT.",
        "ch-contrib-2": "<strong>API REST:</strong> Implementação dos endpoints CRUD com Node.js, Express e Prisma ORM.",
        "ch-contrib-3": "<strong>Integração:</strong> Conexão entre front-end e banco de dados MySQL.",
        "ch-hard-1": "<strong>Node.js, Express, Prisma & JWT (Fluente):</strong> Construção de APIs RESTful autenticadas.",
        "ch-soft-1": "<strong>Autogestão e Parceria:</strong> Divisão natural de responsabilidades e entregas em dupla.",

        // Seção Competências Técnicas
        "section-knowledge-title": "Competências Técnicas (Hard Skills)",
        "section-knowledge-subtitle": "Competências agrupadas por área de atuação.",
        "cat-lang": "Linguagens de Programação",
        "cat-front": "Front-end & Mobile",
        "cat-back": "Back-end & APIs",
        "cat-db": "Bancos de Dados",
        "cat-devops": "DevOps, NOC & Cloud",
        "cat-other": "IA, Gestão & Outras Tecnologias",

        // Seção Informações Curriculares
        "section-curriculum-title": "Informações Curriculares",
        "section-curriculum-subtitle": "Formação acadêmica, experiência profissional, certificações técnicas, idiomas e participações em eventos.",
        "curr-edu-title": "<i class='fas fa-graduation-cap'></i> Formação Acadêmica & Profissional",
        "edu-1-date": "2024 - 2026 (Cursando)",
        "edu-1-title": "Tecnólogo em Desenvolvimento de Software Multiplataforma (DSM)",
        "edu-1-org": "FATEC São José dos Campos – Prof. Jessen Vidal",
        "edu-1-desc": "Formação focada em engenharia de software, desenvolvimento web e mobile full stack, computação em nuvem, DevOps, banco de dados, inteligência artificial e metodologia ágil Scrum.",
        "exp-1-date": "Fev. 2025 – Atual",
        "exp-1-title": "NOC (Network Operations Center) / Observability",
        "exp-1-org": "Dataside · Trainee",
        "exp-1-desc": "Monitoramento proativo de infraestrutura de TI e serviços críticos com Zabbix, triagem e resposta a incidentes, automação de processos operacionais (SRE/RPA com Python e IA) e gestão de SLA.",
        "edu-2-date": "Formação Complementar",
        "edu-2-title": "Programação em C# / Cursos Técnicos",
        "edu-2-org": "SENAI São José dos Campos",
        "edu-2-desc": "Desenvolvimento de lógica de programação e aplicações em C# (.NET).",

        "curr-cert-title": "<i class='fas fa-certificate'></i> Certificações, Cursos & Idiomas",
        "cert-placeholder-1": "<strong>Gestão de Projetos de TI</strong> — Fundação FAT (ago. 2025)",
        "cert-placeholder-2": "<strong>Design Thinking para UX Designers: construindo produtos relevantes</strong> — EBAC (abr. 2025)",
        "cert-placeholder-3": "<strong>Implantação de Serviços em Nuvem - AWS Cloud Practitioner Foundational</strong> — SENAI São José dos Campos (dez. 2024)",
        "lang-title": "Idiomas",
        "lang-pt": "Português",
        "lang-pt-lvl": "Fluente / Nativo",
        "lang-en": "Inglês",
        "lang-en-lvl": "Nível intermediário",
        "lang-it": "Italiano",
        "lang-it-lvl": "Nível básico",

        "curr-events-title": "<i class='fas fa-calendar-check'></i> Eventos, Trabalhos & Publicações",
        "event-placeholder-1": "<strong>18ª Edição da Escola de Inovadores (2024-1)</strong> — Centro Paula Souza (jun. 2024)",
        "event-placeholder-2": "<strong>Certificado de Participação — 2º Science</strong> — Even3 (jul. 2024)",
        "event-placeholder-3": "<strong>Apresentação do projeto PrecedentIA</strong> — equipe DSM/FATEC (25 jun. 2026)",

        "section-contact-title": "Informações de Contato",
        "section-contact-subtitle": "Entre em contato comigo pelas redes sociais, GitHub ou e-mail.",
        "footer-text": "&copy; 2026 Portfólio Acadêmico Digital de João Vítor Góes Gomes • FATEC SJC."
    },
    en: {
        "nav-portfolio": "Portfolio",
        "nav-presentation": "About",
        "nav-projects": "Projects",
        "nav-knowledge": "Skills",
        "nav-curriculum": "Curriculum",
        "nav-contact": "Contact",

        "hero-eyebrow": "Academic Digital Portfolio • FATEC SJC",
        "hero-greeting": "João Vítor Góes Gomes",
        "hero-desc": "Multiplatform Software Development student at FATEC São José dos Campos and NOC (Network Operations Center) Monitoring Analyst.",
        "hero-obj-title": "<i class='fas fa-bullseye'></i> Academic & Professional Goals",
        "hero-obj-text": "Work as a Full Stack Developer and DevOps/SRE Engineer, applying software engineering, intelligent automation, and cloud architecture to build scalable, resilient, high-impact systems.",
        "hero-int-title": "<i class='fas fa-compass'></i> Areas of Interest",
        "int-1": "Full Stack Development",
        "int-2": "DevOps, SRE & Observability",
        "int-3": "REST APIs & Microservices",
        "int-4": "Artificial Intelligence & Agents",
        "int-5": "Mobile (Flutter / React Native)",

        "section-projects-title": "My Projects",
        "section-projects-subtitle": "Explore my academic (API), professional, and personal projects developed throughout my journey.",
        "filter-all": "All",
        "filter-api": "#Academic (API)",
        "filter-prof": "#Professional",
        "filter-personal": "#Personal & Others",

        "badge-api": "Academic Project (API)",
        "badge-prof": "Professional Project",
        "badge-personal": "Personal Project",
        "badge-acad": "Course Project",

        "label-problem": "<i class='fas fa-exclamation-circle'></i> Problem Statement",
        "label-solution": "<i class='fas fa-lightbulb'></i> Developed Solution",
        "tech-used": "Technologies Used",
        "personal-contrib": "Personal Contributions",
        "hard-skills-title": "Technical Skills Acquired (Hard Skills)",
        "soft-skills-title": "Interpersonal Skills (Soft Skills)",
        "view-github": "Team Repository <i class='fas fa-external-link-alt'></i>",
        "view-github-personal": "Personal Repository <i class='fas fa-code-branch'></i>",

        "sf-partner": "<i class='fas fa-handshake'></i> Partner Organization: I9 Team / FATEC SJC",
        "sf-problem": "The need to continuously monitor, store, and analyze critical variables of an automated indoor greenhouse (ambient/soil moisture, temperature, and water volume) to prevent crop loss.",
        "sf-solution": "Web application built with Scrum to read, persist, and display daily averages and sensor charts for the smart greenhouse.",
        "sf-contrib-1": "<strong>Flask:</strong> Initial web server setup, HTTP routes, and CRUD operations.",
        "sf-contrib-2": "<strong>MySQL:</strong> Relational database modeling and structuring.",
        "sf-contrib-3": "<strong>Front-end:</strong> Responsive interfaces and date filters for data visualization.",
        "sf-hard-1": "<strong>Python & Flask (Autonomous Developer):</strong> Backend routing and template integration.",
        "sf-hard-2": "<strong>SQL / MySQL (Autonomous Developer):</strong> Table modeling and aggregate queries.",
        "sf-hard-3": "<strong>HTML5, CSS3 & JS (Fluent):</strong> Semantic layout and dynamic data rendering.",
        "sf-soft-1": "<strong>Teamwork:</strong> Effective collaboration in an 8-developer Scrum team.",
        "sf-soft-2": "<strong>Adaptability:</strong> Fast learning of web technologies during the 1st semester.",
        "sf-soft-3": "<strong>Communication:</strong> Active participation in Scrum ceremonies.",

        "is-partner": "<i class='fas fa-handshake'></i> Partner Organization: Prof. Cláudio Etelvino (FATEC SJC)",
        "is-problem": "Difficulty in accurately tracking inventory movements, where decentralized records caused stock inconsistencies and the lack of updated reports hindered strategic decisions.",
        "is-solution": "Full-featured inventory control system with category/product management, in/out tracking, and custom analytical dashboards.",
        "is-contrib-1": "<strong>Product Owner:</strong> Roadmap definition, Product Backlog management, and User Story prioritization.",
        "is-contrib-2": "<strong>Front-end:</strong> Reusable components and filterable tables with React.",
        "is-contrib-3": "<strong>UI/UX:</strong> Responsive interface implementation with Tailwind CSS.",
        "is-hard-1": "<strong>React & Tailwind CSS (Fluent):</strong> Componentization, state management, hooks, and utility styling.",
        "is-hard-2": "<strong>Node.js, Express & Prisma ORM (Autonomous Developer):</strong> REST API integration and ORM modeling.",
        "is-soft-1": "<strong>Leadership:</strong> Product coordination for an 8-developer team.",
        "is-soft-2": "<strong>Expectation Management:</strong> Mediation between stakeholders and tech team.",
        "is-soft-3": "<strong>Strategic Vision:</strong> Aligning sprint deliverables with business goals.",

        "cp-partner": "<i class='fas fa-handshake'></i> Partner Organization: Necto Systems",
        "cp-problem": "The need to monitor, organize, and control employee working hours transparently and in legal compliance, eliminating errors in overtime, time bank, and absence tracking.",
        "cp-solution": "Electronic time-tracking web system developed across 3 sprints with dedicated employee and manager views, automated hour calculations, real-time WebSocket notifications, and managerial reports.",
        "cp-contrib-1": "<strong>Back-end:</strong> Worked hours and time bank calculation logic in Spring Boot.",
        "cp-contrib-2": "<strong>Front-end:</strong> Managerial dashboards and reports using React and TypeScript.",
        "cp-contrib-3": "<strong>Integration:</strong> Connecting front-end to REST/WebSocket APIs.",
        "cp-hard-1": "<strong>Java & Spring Boot (Autonomous Developer):</strong> Complex business rules and hybrid persistence (MySQL + MongoDB).",
        "cp-hard-2": "<strong>React & TypeScript (Fluent):</strong> Static typing, Redux, and API integration with Axios.",
        "cp-soft-1": "<strong>Technical Resilience:</strong> Simultaneous learning of Java/Spring and TypeScript.",
        "cp-soft-2": "<strong>Detail Orientation:</strong> Precision with labor rules and hour calculations.",
        "cp-soft-3": "<strong>Collaboration:</strong> Synergy within a 5-developer agile team.",

        "nb-partner": "<i class='fas fa-handshake'></i> Partner Organization: Tecsus",
        "nb-problem": "The need to collect, validate, and display accurate meteorological data from low-cost IoT weather stations (ESP32), combining disaster prevention monitoring with STEM education.",
        "nb-solution": "End-to-end IoT ecosystem performing periodic sensor ingestion (wind, rain, humidity, temperature, pressure), automated processing, real-time alerts, and educational dashboards.",
        "nb-contrib-1": "<strong>Infrastructure & DB:</strong> Relational modeling and PostgreSQL database structuring.",
        "nb-contrib-2": "<strong>Data Processing:</strong> Python scripts for ingestion, validation, and normalization.",
        "nb-contrib-3": "<strong>Methodology:</strong> Deliverable planning focused on strict deadlines.",
        "nb-hard-1": "<strong>Python & Data Processing (Fluent):</strong> Automated sanitization and ingestion of IoT time-series data.",
        "nb-hard-2": "<strong>PostgreSQL & Docker (Autonomous Developer):</strong> Relational modeling and service containerization.",
        "nb-soft-1": "<strong>Holistic Vision:</strong> Full understanding of the hardware-to-software transmission cycle.",
        "nb-soft-2": "<strong>Analytical Thinking:</strong> Massive data integrity validation.",

        "pr-period": "2026-1 | Product Owner",
        "pr-partner": "<i class='fas fa-handshake'></i> Partner Organization: Xertica.ai",
        "pr-problem": "High caseloads in Latin American courts, where judges spend significant time manually screening initial petitions and searching for applicable judicial precedents.",
        "pr-solution": "Intelligent legal analysis platform powered by Generative AI, RAG, and vector search that extracts key points from petitions and recommends ranked judicial precedents with explanatory summaries.",
        "pr-contrib-1": "<strong>Product Owner:</strong> Backlog prioritization and delivery alignment with the team and Xertica.ai.",
        "pr-contrib-2": "<strong>Dart & Flutter:</strong> Cross-platform components and UI implementation.",
        "pr-contrib-3": "<strong>DevOps & Terraform:</strong> Infrastructure as Code (IaC) and deployment automation.",
        "pr-hard-1": "<strong>Flutter & Dart (Autonomous Developer):</strong> Modern cross-platform UI development.",
        "pr-hard-2": "<strong>Terraform, Cloud & Git Submodules (Autonomous Developer):</strong> IaC provisioning and multi-repo management.",
        "pr-soft-1": "<strong>Corporate Communication:</strong> Technical alignment with client Xertica.ai.",
        "pr-soft-2": "<strong>Technical Leadership:</strong> Guiding team DevOps decisions.",

        "sb-partner": "<i class='fas fa-brain'></i> Virtual mentor for learning new skills",
        "sb-problem": "The challenge of learning new skills without knowing where to start, setting clear goals, or tracking personal progress.",
        "sb-solution": "An AI-powered virtual mentor using natural language processing to suggest personalized activities, track progress, and provide feedback that supports skill development.",

        "nf-period": "2025 - Present | NOC Monitoring Analyst",
        "nf-partner": "<i class='fas fa-briefcase'></i> Professional Role: NOC / SRE Operations",
        "nf-problem": "The need to reduce Mean Time to Respond (MTTR) and eliminate manual rework when handling critical NOC alerts, where transcribing Zabbix alerts, opening Movidesk tickets, and notifying teams took valuable minutes.",
        "nf-solution": "Python desktop tool (NOCFlow) combining Computer Vision via Google Gemini (multimodal AI) to extract data from clipboard Zabbix screenshots, Playwright browser automation to fill HTML tickets in Movidesk, and one-click template generation for WhatsApp, Teams, and Email.",
        "nf-contrib-1": "<strong>Conception & Architecture:</strong> End-to-end design and development applied to daily NOC operations.",
        "nf-contrib-2": "<strong>AI & Automation:</strong> Google Gemini 1.5 Flash integration and Playwright browser automation.",
        "nf-contrib-3": "<strong>Desktop UI:</strong> Tkinter interface with clipboard image processing (Pillow/Pyperclip).",
        "nf-hard-1": "<strong>Python, Playwright & Gemini AI (Fluent):</strong> RPA/SRE automation and multimodal AI integration.",
        "nf-hard-2": "<strong>Zabbix & Incident Management (Fluent):</strong> Alert triage, severity analysis, and ITSM workflows.",
        "nf-soft-1": "<strong>Proactivity & Innovation:</strong> Identifying operational bottlenecks and autonomously building a solution.",
        "nf-soft-2": "<strong>Efficiency Focus:</strong> Standardizing technical communication under incident pressure.",

        "lz-period": "2025 - 2026 | Applied NOC / Observability Project",
        "lz-partner": "<i class='fas fa-server'></i> Context: Monitoring Engineering & SRE",
        "lz-problem": "The need to simulate, validate, and test complex enterprise monitoring scenarios, distributed proxies, access control, and SLA tracking without risking production environments.",
        "lz-solution": "Complete Zabbix 7.0 LTS hybrid lab (Docker Compose v2, Windows Host, and Linux VMs), API-provisioned with multi-mode collection (classic/active agent, Agent 2, native MySQL/Docker), Zabbix Proxies, RBAC, TOTP MFA, webhook alert pipelines, and SLA dashboards.",
        "lz-contrib-1": "<strong>API & PowerShell Automation:</strong> Scripts for automated provisioning of hosts, templates, and triggers.",
        "lz-contrib-2": "<strong>Hybrid Architecture:</strong> Orchestration with Docker Compose, SQLite Proxy, and cross-OS agents.",
        "lz-hard-1": "<strong>Zabbix 7.0 LTS & Observability (Fluent):</strong> Advanced proxy setup, auto-discovery, SLA, and webhooks.",
        "lz-hard-2": "<strong>Docker, Linux & PowerShell (Autonomous Developer):</strong> Infrastructure automation and sysadmin.",
        "lz-soft-1": "<strong>Technical Documentation:</strong> Comprehensive step-by-step architecture and operations guide.",
        "lz-soft-2": "<strong>Systems Thinking:</strong> Planning RBAC/MFA security and maintenance windows.",

        "gr-period": "2025 - 2026 | Personal Project",
        "gr-partner": "<i class='fas fa-mobile-alt'></i> Android Mobile App (Offline-first)",
        "gr-problem": "The need to organize daily tasks, checklists, and long-term goals on a mobile device with full offline autonomy, local data privacy, and a distraction-free visual identity.",
        "gr-solution": "Android mobile app built with React Native, Expo, and TypeScript featuring task lists, Kanban boards, project folders, and daily execution views.",
        "gr-contrib-1": "<strong>Full Mobile Development:</strong> Offline-first architecture, navigation, local storage, and APK build.",
        "gr-contrib-2": "<strong>Product Design & UI/UX:</strong> Visual identity, evolutionary backlog, and prototyping.",
        "gr-hard-1": "<strong>React Native, Expo & TypeScript (Autonomous Developer):</strong> Cross-platform mobile development.",
        "gr-soft-1": "<strong>Product Self-Management:</strong> Clear separation between implemented MVP and future roadmap.",

        "ch-period": "2025-1 | Web Development II",
        "ch-partner": "<i class='fas fa-university'></i> Advisor: Prof. Cláudio Etelvino (FATEC SJC)",
        "ch-problem": "Slowness and inconsistency caused by manual product catalog management in small businesses, hindering quick lookups and secure access.",
        "ch-solution": "Full stack web platform for product registration, editing, search, and secure management with JWT authentication.",
        "ch-contrib-1": "<strong>Back-end:</strong> Secure JWT authentication module.",
        "ch-contrib-2": "<strong>REST API:</strong> CRUD endpoints using Node.js, Express, and Prisma ORM.",
        "ch-contrib-3": "<strong>Integration:</strong> Connecting front-end and MySQL database.",
        "ch-hard-1": "<strong>Node.js, Express, Prisma & JWT (Fluent):</strong> Building authenticated RESTful APIs.",
        "ch-soft-1": "<strong>Self-management & Partnership:</strong> Task division and continuous alignment.",

        "section-knowledge-title": "Technical Skills (Hard Skills)",
        "section-knowledge-subtitle": "Skills grouped by area of expertise.",
        "cat-lang": "Programming Languages",
        "cat-front": "Front-end & Mobile",
        "cat-back": "Back-end & APIs",
        "cat-db": "Databases",
        "cat-devops": "DevOps, NOC & Cloud",
        "cat-other": "AI, Management & Other Tech",

        "section-curriculum-title": "Curriculum Information",
        "section-curriculum-subtitle": "Academic education, professional experience, technical certifications, languages, and events.",
        "curr-edu-title": "<i class='fas fa-graduation-cap'></i> Education & Professional Experience",
        "edu-1-date": "2024 - 2026 (In Progress)",
        "edu-1-title": "B.Tech in Multiplatform Software Development (DSM)",
        "edu-1-org": "FATEC São José dos Campos – Prof. Jessen Vidal",
        "edu-1-desc": "Focused on software engineering, full stack web & mobile development, cloud computing, DevOps, databases, AI, and Scrum agile methodology.",
        "exp-1-date": "Feb 2025 – Present",
        "exp-1-title": "NOC (Network Operations Center) / Observability",
        "exp-1-org": "Dataside · Trainee",
        "exp-1-desc": "Proactive monitoring of IT infrastructure and critical services with Zabbix, incident triage and response, operational automation (SRE/RPA with Python & AI), and SLA management.",
        "edu-2-date": "Complementary Education",
        "edu-2-title": "C# Programming / Technical Courses",
        "edu-2-org": "SENAI São José dos Campos",
        "edu-2-desc": "Programming logic and C# (.NET) application development.",

        "curr-cert-title": "<i class='fas fa-certificate'></i> Certifications, Courses & Languages",
        "cert-placeholder-1": "<strong>IT Project Management</strong> — Fundação FAT (Aug 2025)",
        "cert-placeholder-2": "<strong>Design Thinking for UX Designers: Building Relevant Products</strong> — EBAC (Apr 2025)",
        "cert-placeholder-3": "<strong>Cloud Services Deployment - AWS Cloud Practitioner Foundational</strong> — SENAI São José dos Campos (Dec 2024)",
        "lang-title": "Languages",
        "lang-pt": "Portuguese",
        "lang-pt-lvl": "Fluent / Native",
        "lang-en": "English",
        "lang-en-lvl": "Intermediate",
        "lang-it": "Italian",
        "lang-it-lvl": "Basic",

        "curr-events-title": "<i class='fas fa-calendar-check'></i> Events, Papers & Publications",
        "event-placeholder-1": "<strong>18th Innovators School Edition (2024-1)</strong> — Centro Paula Souza (Jun 2024)",
        "event-placeholder-2": "<strong>Participation Certificate — 2nd Science</strong> — Even3 (Jul 2024)",
        "event-placeholder-3": "<strong>PrecedentIA project presentation</strong> — DSM/FATEC team (Jun 25, 2026)",

        "section-contact-title": "Contact Information",
        "section-contact-subtitle": "Reach out via social media, GitHub, or email.",
        "footer-text": "&copy; 2026 Academic Digital Portfolio of João Vítor Góes Gomes • FATEC SJC."
    }
};

let currentLang = 'pt';
const btnPt = document.getElementById('btn-pt');
const btnEn = document.getElementById('btn-en');

const rolesPt = [
    "Desenvolvedor Full Stack",
    "Analista de Monitoramento em NOC",
    "Estudante de DSM na FATEC SJC",
    "Entusiasta de DevOps, SRE & IA"
];
const rolesEn = [
    "Full Stack Developer",
    "NOC Monitoring Analyst",
    "DSM Student at FATEC SJC",
    "DevOps, SRE & AI Enthusiast"
];

let currentRoles = rolesPt;
let roleIndex = 0;
let typingTimeout;
let i = 0; 
let isDeleting = false;

function setLanguage(lang) {
    currentLang = lang;
    btnPt.classList.toggle('active', lang === 'pt');
    btnEn.classList.toggle('active', lang === 'en');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[lang][key]) {
            el.innerHTML = i18nData[lang][key];
        }
    });

    currentRoles = lang === 'pt' ? rolesPt : rolesEn;
    roleIndex = 0;
    const terminalText = document.getElementById('terminal-text');
    if (terminalText) {
        terminalText.textContent = '';
        i = 0; 
        isDeleting = false;
        clearTimeout(typingTimeout);
        typeTerminalText();
    }
}

btnPt.addEventListener('click', () => setLanguage('pt'));
btnEn.addEventListener('click', () => setLanguage('en'));

function typeTerminalText() {
    const terminalText = document.getElementById('terminal-text');
    if (!terminalText) return;
    const currentRole = currentRoles[roleIndex];
    
    terminalText.textContent = currentRole.substring(0, i);
    let speed = 110; 
    
    if (!isDeleting && i === currentRole.length) {
        isDeleting = true; 
        speed = 3500; 
    } else if (isDeleting && i === 0) {
        isDeleting = false; 
        roleIndex = (roleIndex + 1) % currentRoles.length;
        speed = 600; 
    }
    
    i = isDeleting ? i - 1 : i + 1;
    typingTimeout = setTimeout(typeTerminalText, isDeleting ? 55 : speed);
}

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
}

// Project Category Filtering
const filterButtons = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.hidden = false;
                card.classList.add('animate');
            } else {
                card.hidden = true;
            }
        });
    });
});

// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate');
    });
}, { threshold: 0.05, rootMargin: "0px 0px -30px 0px" });

document.querySelectorAll('section, .project-card, .knowledge-card, .tech-tag, .skill-tag').forEach(el => observer.observe(el));

setLanguage('pt');
