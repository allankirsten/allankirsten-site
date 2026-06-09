export type Section = {
  heading: string;
  body: string | string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline?: string;
  services: string;
  thumbnail: string;
  color: string;
  type: "classic" | "case-study";
  soon?: boolean;
  overview?: string;
  overviewPt?: string;
  overviewLegacy?: string;
  sections?: Section[];
  thanks?: { label: string; names: string }[];
  related?: string[];
  gallery?: string[];
};

export const projects: Project[] = [
  // ── Recent work (case studies) ────────────────────────────────────────────

  {
    slug: "betterfly",
    title: "Betterfly",
    category: "Product Design",
    tagline: "Global Wellness, powered by purpose",
    services: "Global Head of Product Design",
    thumbnail: "/images/work/betterfly/hero.jpg",
    color: "#1a1a2e",
    type: "case-study",
    overview:
      "Betterfly was a Chilean insurtech with a particularly ambitious thesis: pair financial protection with daily well-being, then turn every healthy habit into a measurable act of social impact. Trees planted, meals donated, schools sponsored. The bet caught the moment. In 2021, the company raised US$60 million; in 2022, it closed an additional US$125 million Series C led by Glade Brook Capital with Greycroft, Lightrock, QED and DST Global, more than tripling its valuation and making it Latin America's first social impact unicorn.\n\nTo get there at speed, Betterfly acquired five technology companies during the same window, including Brazil's Xerpay, where I had been Product Design Lead, and the Chilean Kunder group. That M&A wave reshaped the company almost overnight, and reshaped my work with it: I moved into the role of Global Head of Product Design, responsible for integrating a 35-person team that now spanned design leads, UX writers, translators, product designers, design ops, illustrators, motion designers and design system operators across three languages and several cultures.\n\nThe job was less about new pixels and more about new connective tissue: defining how four design organizations would operate as one, structuring the department alongside product and tech post-M&A, aligning workflows with CX, brand and engineering, and building hiring and career frameworks that could hold a fast-growing team together without flattening the cultural identities each acquired company brought with it. What I learned in those months has shaped every team I've led since. Culture isn't something you draw in an org chart; it's something you keep deciding for, in public, week after week.",
    sections: [
      {
        heading: "Key Responsibilities",
        body: "As Global Head of Product Design, my primary role was to lead the integration of design teams following a significant international M&A. I managed the design integration of four companies, including a 35-person team comprised of design leads, UX writers, translators, product designers, design ops, illustrators, motion designers, and design system operators.",
      },
      {
        heading: "Objectives",
        body: [
          "Structuring the design department alongside product and tech post-M&A",
          "Unifying design teams across four acquired companies",
          "Defining roles, responsibilities, and career paths for each design role",
          "Ensuring seamless integration between design, CX, and branding",
          "Establishing a recruitment and hiring process for the design department",
          "Aligning processes between product design, design ops, and tech teams",
        ],
      },
      {
        heading: "Challenges",
        body: [
          "Cultural Integration: Managing rapid team growth after a major acquisition, while maintaining cohesion across teams from different cultural and professional backgrounds.",
          "Multilingual Communication: Navigating stakeholder meetings across three languages (English, Spanish, and Portuguese) while ensuring alignment with C-level executives.",
          "Agile Transformation: Shifting the mindset from a waterfall model to agile practices across global teams.",
          "Stakeholder Management: Unlike Xerpay, Betterfly's decision-making process involved a significantly larger and more complex array of external stakeholders.",
        ],
      },
      {
        heading: "Learnings",
        body: [
          "Culture is about people. If you forget about people you fail in culture.",
          "Some coworkers are forever. Doesn't matter how distant you are.",
          "Language isn't a barrier. Especially with people who really love your job and like to do their best.",
        ],
      },
    ],
    thanks: [
      { label: "Product Mates", names: "Andrés Munita, Raphael Farinazzo, Adriano Freire, Vivi Yushiura, Bruno Silva" },
      { label: "Design Team Mates", names: "Moni, Pinky, Poncito, Rocha, Rhawbert, Zuk, Alefito" },
    ],
    related: ["xerpay", "remessa-online"],
    gallery: [
      "/images/work/betterfly/hero.jpg",
      "/images/work/betterfly/gallery-01.png",
      "/images/work/betterfly/gallery-02.png",
      "/images/work/betterfly/gallery-03.png",
      "/images/work/betterfly/gallery-04.png",
      "/images/work/betterfly/gallery-05.jpeg",
      "/images/work/betterfly/gallery-06.jpeg",
      "/images/work/betterfly/gallery-07.jpeg",
      "/images/work/betterfly/gallery-08.jpeg",
    ],
  },

  {
    slug: "xerpay",
    title: "Xerpay",
    category: "Product Design",
    tagline: "Redefining Financial Wellness",
    services: "Product Design Lead",
    thumbnail: "/images/work/xerpay/hero.jpg",
    color: "#1e1e3f",
    type: "case-study",
    overview:
      "Xerpay was a Brazilian fintech with a deceptively simple proposition: let employees access the salary they had already earned, before payday, without falling into the cycle of payroll loans, overdrafts and high-interest credit that defined the alternatives. By the time I joined as Product Design Lead, the product was operating inside 45 companies in Brazil (Ambev, RiHappy and Nivea among them) and reaching more than 60,000 employees. The startup was backed by Kaszek, Redpoint Ventures, QED and Vostok.\n\nThe design challenge sat at an unusually emotional intersection of money, work and dignity. The user wasn't a generic \"employee\". They were a person making a private financial decision in front of their employer's logo. We had to take a service that touched some of the most private moments in someone's financial life and make it feel empathetic, transparent and effortless to use. My role was to prepare the design organization for that kind of responsibility at scale: shifting from delivery-led work to a discovery-led, data-driven practice, and tightening the loop between product, brand, acquisition and engineering so the team could ship faster without losing the human texture of the product.\n\nIn 2021, Xerpay was acquired by Betterfly, a Chilean insurtech building Latin America's first social impact unicorn. The acquisition was a recognition of what the company had built, and the start of a new chapter for me personally, as the role evolved into a global one inside the parent organization.",
    sections: [
      {
        heading: "Key Responsibilities",
        body: "I prepared the design team for scaling, aligning design to maximize business results. My focus was on data-driven UX decisions, implementing discovery methodologies, and adapting workflows to agile processes. I also integrated acquisition and product design for a cohesive, user-centered approach across the product lifecycle.",
      },
      {
        heading: "Process",
        body: "Using a blend of existing frameworks, we aligned solutions across business, product, design, and tech by gathering insights from data, user needs, OKRs, and stakeholders. Through an Atomic Research Structure and an Opportunity Solution Tree, we organized and prioritized opportunities, keeping the team aligned.",
      },
      {
        heading: "Key Projects",
        body: [
          "Refactoring and simplifying the app through progressive value-driven deliveries",
          "Launch of a new website and rebranding",
          "New withdrawal journey via PIX",
          "KYC Journey",
          "Payment scheduling",
          "Fast track for user testing",
        ],
      },
      {
        heading: "Achievements",
        body: "The testing process, which previously took over a month, was reduced to less than a week. This included standardizing documentation, automating workflows with finance and legal, creating a recruitment pool of testers, and upgrading the stack to Figma and Maze for async tests with automatic result collection.\n\nMetrics impacted: Increase in the volume of registrations · Growth in withdrawals and transactional volume · Increase in recurrence and Monthly Active Users (MAU).",
      },
      {
        heading: "Learnings",
        body: "The acquisition of Xerpay by Betterfly was an important lesson, highlighting how startups must quickly adapt to M&A scenarios, especially in integrating cultures.",
      },
    ],
    thanks: [
      { label: "Product Mates", names: "Cesar Cesar, Raphael Farinazzo, Adriano Freire, Vivi Yushiura, Bruno Silva" },
      { label: "Design Team Mates", names: "Guilherme Ponce, Fernando Rocha, Rhawbert Costa, Lucas Zuk, Alef Totem" },
    ],
    related: ["betterfly", "remessa-online"],
    gallery: [
      "/images/work/xerpay/hero.jpg",
      "/images/work/xerpay/gallery-01.jpg",
      "/images/work/xerpay/gallery-02.png",
      "/images/work/xerpay/gallery-03.jpg",
      "/images/work/xerpay/gallery-04.png",
      "/images/work/xerpay/gallery-05.jpeg",
    ],
  },

  {
    slug: "remessa-online",
    title: "Remessa Online",
    category: "Product Design",
    tagline: "Designing for a Global Financial Revolution",
    services: "Head of Design",
    thumbnail: "/images/work/remessa-online/hero.jpeg",
    color: "#0d1117",
    type: "case-study",
    overview:
      "Remessa Online was one of the most ambitious Brazilian fintech bets of the mid-2010s: a digital-native challenger taking on cross-border money transfers, a category that had been dominated for decades by traditional banks, with fees, exchange spreads and paperwork to match. The premise was simple to say and harder to deliver: make sending and receiving money across borders feel as obvious as sending a message.\n\nI joined as Product Design Lead in 2016, shortly after the product's launch, and helped shape what cross-border payments could feel like for individuals, freelancers, students, expats and SMBs paying or being paid in another currency. For many of those users, an international transfer wasn't a transaction. It was a parent, a tuition, a survival. That framing followed every design decision we made. As the company scaled, the design surface scaled with it: from a single transfer flow into a multi-product platform with onboarding, KYC, business accounts, acquisition channels and a full brand system. I was later promoted to Head of Design, where the work shifted again: from drawing the next screen to deciding who would draw it, and what \"good\" should mean once the company outgrew any single person's standard.\n\nIn 2022, Remessa Online was acquired by EBANX for US$229M, one of the most significant fintech exits in cross-border payments in Latin America. Looking back, the most lasting part of the work wasn't any single screen or feature. It was the proof that design, embedded early enough and given room to scale, can reshape an entire category's relationship with its customers.",
    sections: [
      {
        heading: "Challenges",
        body: [
          "Revolutionizing Cross-Border Payments: When I started, international money transfers were complex, expensive, and inaccessible to most people. My role was to transform the user experience, making it easy, intuitive, and affordable.",
          "Simplifying Complexity: I led efforts to ensure that both individuals and businesses could use the platform effortlessly, focusing on simplifying the cross-border payment process.",
          "Scaling the Design Team: As Remessa Online grew rapidly, my challenge was to scale the design team to match the company's growth. Over three years, I built a team of 12 designers from scratch.",
          "Stakeholder Management: With the company's growth came more stakeholders and increased investor pressure. One of my key responsibilities was managing these relationships and aligning expectations.",
        ],
      },
      {
        heading: "Key Projects",
        body: [
          "Designing User Journeys for International Transfers: Led the design of user journeys for both individuals and businesses, focusing on making registration, transfers, and fund receipt as seamless as possible.",
          "Conversion-Focused Acquisition Channels: Oversaw the creation and optimization of acquisition channels, including the main website.",
          "User Journey Optimization: Optimizing critical user flows to improve onboarding and transaction processes, resulting in higher engagement and reduced churn.",
        ],
      },
      {
        heading: "Results & Impact",
        body: [
          "Built and scaled the design team from the ground up, growing it to 12 members in three years.",
          "Led the implementation of a new brand system while optimizing key user journeys.",
          "Registration Volume: Increased sign-ups through improved user flows.",
          "Transaction Volume: Increased the number of remittances and overall transactional volume.",
          "Conversion Funnel: Reduced drop-offs at key stages of the user journey.",
          "LTV: Improved customer retention, contributing to long-term business value.",
        ],
      },
      {
        heading: "Learnings",
        body: [
          "Design as strategy: Design can directly drive business outcomes.",
          "Balancing growth and quality: Scaling while maintaining quality required a clear hiring process and structured design operations.",
          "Customer-centric solutions: Always view challenges from the customer's perspective.",
          "Data-driven design: Tracking metrics like conversion and drop-offs informed design decisions.",
          "Resilience under pressure: These experiences shaped my resilience and understanding of what sustainable leadership truly requires.",
        ],
      },
    ],
    thanks: [
      { label: "Challenge Partners", names: "Marcio William, André Gadelha, Alex Kawaharada, Fernando Pavani, Stefano Milo, Fabio Arruda, Alexandre Liuzzi" },
      { label: "Design Team Mates", names: "Ariana Dias, Barbara Coelho, Bruno Lucini, Gabriel Dias, Gabe Kondrat, Gabe Atílio, Giovanna Medeiros, Lucas Almeida, Marcos Silva, Pedro Boreli, Rapha Galassi, Rosa Panerari, Thiago Ajeka, William Capone" },
    ],
    related: ["betterfly", "xerpay"],
    gallery: [
      "/images/work/remessa-online/hero.jpeg",
      "/images/work/remessa-online/gallery-01.jpg",
      "/images/work/remessa-online/gallery-02.jpg",
      "/images/work/remessa-online/gallery-03.jpg",
      "/images/work/remessa-online/gallery-04.jpeg",
      "/images/work/remessa-online/gallery-05.jpeg",
      "/images/work/remessa-online/gallery-06.jpeg",
      "/images/work/remessa-online/gallery-07.jpg",
    ],
  },

  {
    slug: "mar-ventures",
    title: "MAR ventures",
    category: "Design Leadership",
    tagline: "A legacy of resilience and success",
    services: "Partner & Head of Design",
    thumbnail: "/images/work/mar-ventures/hero.jpeg",
    color: "#111827",
    type: "case-study",
    overview:
      "MAR ventures (originally e-Genius when I joined as a partner in 2016) was a venture builder, a model still uncommon in Brazil at the time, sitting somewhere between a VC fund and an operating company. Instead of writing a check and hoping for the best, MAR embedded itself inside each early-stage company in the portfolio, contributing capital plus a full operating layer: technology, design, HR, finance, brand and the day-to-day discipline most founders haven't yet built. The bet was that this combination would shorten the path from idea to product-market fit and let founders concentrate on the parts only they could do.\n\nI joined as Partner and Head of Design, responsible for the design capability across the entire portfolio. That meant shaping the first product surfaces and brand systems for each new company we incubated, then growing and operating a single design organization that could move between those companies as they scaled. In 2017, working with brand designers and writers, we rebranded e-Genius into MAR ventures, a name that captured what the work had become: adaptable, current-aware and committed to forward motion.\n\nThe model produced results that were easier to read in retrospect than they were to predict. Portfolio companies raised funding rounds roughly every eight months. The team grew from thirty people sharing a small house in Pinheiros in 2016, close enough that you could overhear every meeting, to more than two hundred occupying a full floor on Faria Lima by 2019. The portfolio itself included Remessa Online (eventually acquired by EBANX for US$229M), alongside Easy Carros, Finpass and Modiax. More than any single exit, what stayed with me from MAR was a simpler conviction: design, when it shows up early and stays close to the operating problem, doesn't just produce screens. It changes how a company decides.",
    sections: [
      {
        heading: "Challenges",
        body: "The primary challenge was establishing an infrastructure robust enough to allow each startup to grow rapidly without losing quality. As Head of Design, I focused on creating initial product frameworks for each startup, scaling the design team thoughtfully, and aligning design strategy with business objectives.",
      },
      {
        heading: "Solutions",
        body: [
          "Initial Design and Development: Led the creation of the first interfaces and user journeys for each startup in the portfolio, carefully balancing UX best practices with each startup's unique goals.",
          "Building a Scalable Design Team: Led hiring, interviews, and training to ensure every new team member understood our culture and strategic vision.",
          "Rebranding to MAR Ventures: In 2017, collaborated with brand designers and writers to rebrand e-Genius as MAR Ventures, a name that captures our adaptability and commitment to progress.",
        ],
      },
      {
        heading: "Results & Impact",
        body: [
          "Portfolio companies secured funding rounds at an average of every eight months.",
          "Expanded from 30 people in a small house in Pinheiros (2016) to a team of over 200 in 2019, occupying a full floor on Faria Lima.",
          "Portfolio successes: Remessa Online (acquired by EBANX for $229M), Easy Carros, Finpass, and Modiax.",
        ],
      },
      {
        heading: "Key Insights",
        body: "Working with MAR ventures reinforced my belief that with the right combination of strategic insight and passionate execution, even the most complex challenges can become opportunities for growth. These experiences remain central to my approach in new projects and consulting roles.",
      },
    ],
    thanks: [
      { label: "Challenge Partners", names: "Marcio William, André Gadelha, Alex Kawaharada, Fernando Pavani, Stefano Milo, Fabio Arruda, Alexandre Liuzzi" },
      { label: "Design Team Mates", names: "Ariana Dias, Barbara Coelho, Bruno Lucini, Gabriel Dias, Gabe Kondrat, Gabe Atílio, Giovanna Medeiros, Lucas Almeida, Marcos Silva, Pedro Boreli, Rapha Galassi, Rosa Panerari, Thiago Ajeka, William Capone" },
    ],
    related: ["remessa-online", "betterfly"],
    gallery: [
      "/images/work/mar-ventures/hero.jpeg",
      "/images/work/mar-ventures/gallery-01.png",
      "/images/work/mar-ventures/gallery-02.png",
      "/images/work/mar-ventures/gallery-03.jpg",
      "/images/work/mar-ventures/gallery-04.jpg",
      "/images/work/mar-ventures/gallery-05.jpeg",
      "/images/work/mar-ventures/gallery-06.jpeg",
      "/images/work/mar-ventures/gallery-07.jpeg",
      "/images/work/mar-ventures/gallery-08.jpg",
    ],
  },

  {
    slug: "easy-carros",
    title: "Easy Carros",
    category: "Product Design",
    tagline: "Fleet Management Innovation",
    services: "Head of Product",
    thumbnail: "/images/work/easy-carros.jpg",
    color: "#1a2433",
    type: "case-study",
    soon: true,
    overview: "Driving fleet management innovation to streamline operations and business growth.",
  },

  {
    slug: "foodastic",
    title: "Foodastic",
    category: "Branding",
    tagline: "Food park, bold branding",
    services: "Founder",
    thumbnail: "/images/work/foodastic.jpg",
    color: "#1a1208",
    type: "case-study",
    soon: true,
    overview: "Creating a food park that fuses bold branding with unforgettable moments.",
  },

  // ── Classic portfolio ─────────────────────────────────────────────────────

  {
    slug: "technos-mariner",
    title: "Technos Mariner",
    category: "UX/UI Design",
    services: "UI/UX Design · Supervisão de Criação",
    thumbnail: "/images/work/technos-mariner.jpg",
    color: "#E8E0D8",
    type: "classic",
    overview: "In 2010, Technos relaunched the Mariner, a watch that had become iconic in 1990s Brazil, with an updated take on its signature interchangeable colored parts. The challenge was to translate that physical sense of play into a browser. I led the design of a website built around a 3D watch viewer that let visitors swap straps, bezels and accents in real time across a full 360° rotation. To deepen the moment, the entire site's color palette shifted to match whatever combination the user assembled, turning product configuration into a moment of brand expression.",
    overviewPt: "Em 2010 a Technos relançou o Mariner, relógio que havia se tornado ícone nos anos 90, atualizando o conceito de partes coloridas trocáveis que marcou o modelo. O desafio era traduzir essa sensação física de brincar com o produto para o browser. Liderei o design de um website construído em torno de um visualizador 3D que permitia trocar pulseiras, anéis e detalhes em tempo real com rotação completa de 360°. Para aprofundar o momento, toda a paleta do site mudava de acordo com a combinação montada pelo usuário, transformando configuração de produto em momento de expressão da marca.",
    overviewLegacy: "Em 2010 a Technos relançou um modelo que foi moda no Brasil nos anos 90. O Relógio Mariner, que dava ao usuário a liberdade de criar looks diferentes trocando partes coloridas do acessório. Seguindo o conceito de customização da experiência de uso do Mariner, criamos um website em que era possível testar todas as possibilidades de combinação de cores em um relógio virtual com rotação de 360 graus.\n\nPara ambientar o resultado das experiências, a paleta de cores de todo o website mudava de acordo com a combinação do relógio.",
    gallery: [
      "/images/work/technos-mariner/hero.jpg",
      "/images/work/technos-mariner/gallery-01.jpg",
      "/images/work/technos-mariner/gallery-02.jpg",
      "/images/work/technos-mariner/gallery-03.jpg",
      "/images/work/technos-mariner/gallery-04.jpg",
    ],
  },
  {
    slug: "embraer-executive-jets",
    title: "Embraer Executive Jets",
    category: "Digital",
    services: "UI Design · Supervisão de Criação",
    thumbnail: "/images/work/embraer-executive-jets.jpg",
    color: "#D0D8E0",
    type: "classic",
    overview: "Embraer's Executive Jets line (Phenom, Legacy and Praetor) competes in one of the smallest and most demanding audiences in aviation: high-net-worth individuals and corporations for whom an aircraft is part vehicle, part identity. The existing website treated this audience like a procurement officer. Each model lived in its own spec page full of dimensions, avionics and range charts, with little of the lifestyle and aspiration that actually moves the purchase decision.\n\nI led the interface redesign in the role of UI design and creative supervision, anchoring the experience in editorial-grade photography, a calmer typographic rhythm and a more confident information hierarchy. Each model now opened with an image of the aircraft in context, a destination, a moment, a feeling, letting the technical depth surface only when the visitor asked for it. The new layouts moved the conversation from features to emotion, without losing the precision that demanding buyers still expected to find.",
    overviewPt: "A linha Executive Jets da Embraer (Phenom, Legacy e Praetor) disputa um dos públicos mais restritos e exigentes da aviação: indivíduos de alto poder aquisitivo e corporações para quem um avião é parte veículo, parte identidade. O site existente tratava esse público como comprador técnico. Cada modelo vivia em sua própria página de especificações, cheia de dimensões, aviônica e gráficos de alcance, com pouco do estilo de vida e da aspiração que de fato movem a decisão de compra.\n\nLiderei o redesign da interface no papel de UI design e supervisão de criação, ancorando a experiência em fotografia editorial, em uma tipografia mais calma e em uma hierarquia de informação mais segura. Cada modelo passou a abrir com uma imagem da aeronave em contexto: um destino, um momento, uma sensação. A profundidade técnica só aparecia quando o visitante pedisse. Os novos layouts moveram a conversa de funcionalidades para emoção, sem perder a precisão que o comprador exigente ainda esperava encontrar.",
    overviewLegacy: "Projeto de re-design de interface para o site dos aviões mais charmosos da Embraer, os Jatos Executivos. A solução foi aumentar o apelo emocional em layouts com nova estrutura e belas imagens.",
    gallery: [
      "/images/work/embraer-executive-jets/hero.jpg",
      "/images/work/embraer-executive-jets/gallery-01.jpg",
      "/images/work/embraer-executive-jets/gallery-02.jpg",
      "/images/work/embraer-executive-jets/gallery-03.jpg",
      "/images/work/embraer-executive-jets/gallery-04.jpg",
    ],
  },
  {
    slug: "sandalias-kenner",
    title: "Sandálias Kenner",
    category: "Digital",
    services: "UI Design",
    thumbnail: "/images/work/sandalias-kenner.jpg",
    color: "#E0D8D0",
    type: "classic",
    overview: "Kenner is a Brazilian sandal brand whose identity sits at the intersection of outdoor performance, fashion and craft. The new website was the chance to give that range a single visual language. The signature decision was to model each sandal in 3D and let visitors rotate them inside a 360° viewer, a bold move at a time when WebGL in the browser was still uncommon. The interface itself stays out of the way, letting product, texture and color carry the story.",
    overviewPt: "A Kenner é uma marca brasileira de sandálias cuja identidade vive na interseção entre outdoor, moda e artesanato. O novo site foi a oportunidade de dar a esse leque uma linguagem visual única. A decisão central foi modelar cada sandália em 3D e permitir rotação em visualizador 360°, uma escolha ousada para uma época em que WebGL no browser ainda era raro. A interface se mantém discreta, deixando produto, textura e cor conduzirem a narrativa.",
    overviewLegacy: "Marca brasileira de sandálias conhecida pelo design que combina conforto, moda e inovação. As sandálias seriam modeladas em 3D especialmente para o novo website, com visualização interativa de 360°.",
    gallery: [
      "/images/work/sandalias-kenner/hero.jpg",
      "/images/work/sandalias-kenner/gallery-01.jpg",
      "/images/work/sandalias-kenner/gallery-02.jpg",
      "/images/work/sandalias-kenner/gallery-03.jpg",
      "/images/work/sandalias-kenner/gallery-04.jpg",
      "/images/work/sandalias-kenner/gallery-05.jpg",
    ],
  },
  {
    slug: "claro-ana-maria-braga",
    title: "Claro · Ana Maria Braga",
    category: "Digital",
    services: "UX/UI Design",
    thumbnail: "/images/work/claro-ana-maria-braga.jpg",
    color: "#D8E0D8",
    type: "classic",
    overview: "A content platform created by Claro and anchored by Ana Maria Braga, one of Brazil's most beloved TV personalities. The audience was wide and intergenerational, and the editorial range was equally broad: recipes, digital books, daily affirmations, lifestyle pieces. I designed a responsive system that absorbed this variety without fragmenting the brand, a consistent rhythm of cards and reading layouts that could host any format and still feel like one product.",
    overviewPt: "Uma plataforma de conteúdo criada pela Claro e estrelada por Ana Maria Braga, uma das figuras mais queridas da TV brasileira. O público era amplo e intergeracional, e o leque editorial igualmente vasto: receitas, livros digitais, mensagens diárias, lifestyle. Desenhei um sistema responsivo capaz de absorver essa variedade sem fragmentar a marca, com um ritmo consistente de cards e layouts de leitura que abrigavam qualquer formato e ainda assim pareciam um único produto.",
    overviewLegacy: "Layouts para a plataforma da Claro, estrelada por Ana Maria Braga. O design é responsivo abrigando perfeitamente conteúdos como receitas, livros digitais e mensagens de alto astral.",
    gallery: [
      "/images/work/claro-ana-maria-braga/hero.jpg",
      "/images/work/claro-ana-maria-braga/gallery-01.jpg",
      "/images/work/claro-ana-maria-braga/gallery-02.jpg",
      "/images/work/claro-ana-maria-braga/gallery-03.jpg",
      "/images/work/claro-ana-maria-braga/gallery-04.jpg",
    ],
  },
  {
    slug: "globo-quiz-babilonia",
    title: "Globo Quiz Babilônia",
    category: "UX/UI Design",
    services: "UI Design",
    thumbnail: "/images/work/globo-quiz-babilonia.jpg",
    color: "#E0D8E0",
    type: "classic",
    overview: "Babilônia was a primetime telenovela on Rede Globo, and the network wanted a second-screen experience that captured the conversation around it as episodes aired. I designed the interface for an online quiz that ran in parallel with the broadcast: fast, visually loud and built for mobile-first viewers playing from the couch. The layouts had to feel native to Globo's brand language while standing on their own as a self-contained product.",
    overviewPt: "Babilônia foi uma novela das nove na Rede Globo, e a emissora queria uma experiência de second-screen que capturasse a conversa em torno dos episódios. Desenhei a interface de um quiz online que rodava em paralelo à exibição: rápido, visualmente forte e pensado para o espectador no sofá com o celular na mão. Os layouts precisavam parecer nativos à linguagem da Globo e, ao mesmo tempo, sustentar-se como produto independente.",
    overviewLegacy: "Layouts para quiz on line da novela Babilônia da Rede Globo.",
    gallery: [
      "/images/work/globo-quiz-babilonia/hero.jpg",
      "/images/work/globo-quiz-babilonia/gallery-01.jpg",
      "/images/work/globo-quiz-babilonia/gallery-02.jpg",
    ],
  },
  {
    slug: "giro-aventura",
    title: "Giro & Aventura",
    category: "Art Direction",
    services: "UX/UI Design",
    thumbnail: "/images/work/giro-aventura.jpg",
    color: "#D8E8D8",
    type: "classic",
    overview: "Giro & Aventura was a content platform created to bring BFGoodrich and Michelin closer to their off-road audience in Brazil. The strategy spanned a printed magazine and a companion website, and the visual identity drew directly from the world the readers lived in: trail textures, dust, weathered surfaces and the wide horizons of remote drives. The design treated the audience as enthusiasts first, customers second.",
    overviewPt: "Giro & Aventura foi uma plataforma de conteúdo criada para aproximar a BFGoodrich e a Michelin do público off-road no Brasil. A estratégia envolveu uma revista impressa e um website complementar, e a identidade visual veio diretamente do universo do leitor: texturas de trilha, poeira, superfícies desgastadas e o horizonte aberto das estradas remotas. O design tratava o público como entusiasta primeiro, cliente depois.",
    overviewLegacy: "Para aproximar as marcas BFGoodrich/Michelin de seu público alvo, criamos uma plataforma que envolveu revista impressa e um website. O design foi inspirado pelas trilhas, paisagens e texturas do off road.",
    gallery: [
      "/images/work/giro-aventura/hero.jpg",
      "/images/work/giro-aventura/gallery-01.jpg",
    ],
  },
  {
    slug: "tim-gloria-kalil",
    title: "TIM · Glória Kalil",
    category: "Digital",
    services: "UI Design",
    thumbnail: "/images/work/tim-gloria-kalil.jpg",
    color: "#E8D8D8",
    type: "classic",
    overview: "A digital style platform sponsored by TIM and curated by Glória Kalil, one of Brazil's most respected fashion voices. The product hosted styling tips, columns and digital books for a predominantly female audience that consumed content across phones, tablets and desktops. The design system relied on a responsive editorial grid that adapted gracefully to every device while preserving the rhythm and polish expected from a fashion brand.",
    overviewPt: "Uma plataforma digital de estilo patrocinada pela TIM e curada por Glória Kalil, uma das vozes mais respeitadas da moda no Brasil. O produto reunia dicas de styling, colunas e livros digitais para um público majoritariamente feminino que consumia conteúdo entre celular, tablet e desktop. O sistema de design apoiou-se em um grid editorial responsivo que se adaptava com elegância a cada dispositivo sem perder o ritmo e o acabamento esperados de uma marca de moda.",
    overviewLegacy: "Layouts para a plataforma da TIM, estrelada por Glória Kalil. Conteúdos de dicas e livros digitais caem como uma luva na estrutura de design responsivo.",
    gallery: [
      "/images/work/tim-gloria-kalil/hero.jpg",
      "/images/work/tim-gloria-kalil/gallery-01.jpg",
      "/images/work/tim-gloria-kalil/gallery-02.jpg",
      "/images/work/tim-gloria-kalil/gallery-03.jpg",
    ],
  },
  {
    slug: "revista-piaui",
    title: "Revista Piauí",
    category: "UX/UI Design",
    services: "UX/UI Design",
    thumbnail: "/images/work/revista-piaui.jpg",
    color: "#D8D8E8",
    type: "classic",
    overview: "Piauí is one of Brazil's most distinctive magazines: long-form journalism with a sharp, often subversive voice. The brief was to build a digital home that respected the printed product while making the content findable and readable on every device. The architecture was modular enough to bend around the magazine's famously bold covers, so each issue could reshape the look of the site without breaking it. The digital edition felt like an extension of the print object rather than a generic CMS.",
    overviewPt: "A Piauí é uma das revistas mais singulares do Brasil: jornalismo de longo-formato com voz afiada e quase sempre irreverente. O briefing era construir uma casa digital que respeitasse o produto impresso sem abrir mão de fazer o conteúdo encontrável e legível em qualquer dispositivo. A arquitetura foi modular o bastante para se moldar às capas emblemáticas da revista, de modo que cada edição podia alterar o visual do site sem quebrá-lo. A versão digital parecia uma extensão do objeto impresso, não um CMS genérico.",
    overviewLegacy: "Uma das publicações mais irreverentes do Brasil precisava de um site que abrigasse o conteúdo da revista impressa de maneira eficiente. A arquitetura foi estruturada para ser customizável de acordo com o visual das belas capas da revista.",
    gallery: [
      "/images/work/revista-piaui/hero.jpg",
      "/images/work/revista-piaui/gallery-01.jpg",
      "/images/work/revista-piaui/gallery-02.jpg",
      "/images/work/revista-piaui/gallery-03.jpg",
    ],
  },
  {
    slug: "saraiva-plus",
    title: "Saraiva Plus",
    category: "Digital",
    services: "UI Design",
    thumbnail: "/images/work/saraiva-plus.jpg",
    color: "#E0E8D8",
    type: "classic",
    overview: "A design proposal for Saraiva Plus, a content subscription product from one of Brazil's largest book retailers. The work explored how a familiar bookstore brand could extend itself into a recurring digital relationship: what reading, browsing and discovery should feel like inside a paid membership built around the same catalog readers already trusted offline.",
    overviewPt: "Uma proposta de design para o Saraiva Plus, um produto de assinatura de conteúdo de uma das maiores livrarias do Brasil. O trabalho explorou como uma marca de livraria já conhecida poderia se estender em uma relação digital recorrente: o que ler, navegar e descobrir deveria significar dentro de uma assinatura paga construída sobre o mesmo catálogo em que o leitor já confiava no offline.",
    overviewLegacy: "Proposta de design para a Saraiva Plus.",
    gallery: [
      "/images/work/saraiva-plus/hero.jpg",
      "/images/work/saraiva-plus/gallery-01.jpg",
      "/images/work/saraiva-plus/gallery-02.jpg",
      "/images/work/saraiva-plus/gallery-03.jpg",
    ],
  },
  {
    slug: "o-boticario-timeline",
    title: "O Boticário · Timeline",
    category: "Digital",
    services: "UI Design · Supervisão de Criação",
    thumbnail: "/images/work/o-boticario-timeline.jpg",
    color: "#E8E8D8",
    type: "classic",
    overview: "To mark its 35th anniversary, O Boticário commissioned an interactive timeline that would consolidate decades of brand history into a single experience. I led the UI design of a scrollable journey through products, campaigns and milestones, a piece adopted so strongly internally that it eventually became Nossa História, an ongoing public site. What started as an anniversary moment turned into a living institutional asset.",
    overviewPt: "Para marcar seus 35 anos, O Boticário encomendou uma linha do tempo interativa capaz de consolidar décadas de história em uma única experiência. Liderei o design da interface de uma jornada navegável por produtos, campanhas e marcos. Uma peça com tamanha adesão interna que acabou virando o Nossa História, um site público em curso. O que começou como uma comemoração transformou-se em um ativo institucional permanente.",
    overviewLegacy: "Para centralizar fatos históricos de seus 35 anos, o Boticário nos solicitou a criação de uma linha do tempo interativa. A aceitação interna foi tamanha que o projeto Nossa História está disponível on line.",
    gallery: [
      "/images/work/o-boticario-timeline/hero.jpg",
      "/images/work/o-boticario-timeline/gallery-01.jpg",
      "/images/work/o-boticario-timeline/gallery-02.jpg",
    ],
  },
  {
    slug: "embraer-timeline",
    title: "Embraer · Timeline",
    category: "Digital",
    services: "UI Design · Supervisão de Criação",
    thumbnail: "/images/work/embraer-timeline.jpg",
    color: "#D8E0E8",
    type: "classic",
    overview: "Embraer's Centro Histórico is the institution's memory keeper, the team responsible for preserving and telling the story of one of Brazil's most consequential industrial companies. They wanted to take that story, until then locked inside archives and printed material, and turn it into something the public could walk through. The brief was an interactive timeline strong enough to carry decades of milestones and emotional enough to feel like it belonged to a company whose entire existence is about flight.\n\nWorking in the role of UI design and creative supervision, I led the visual concept that placed each milestone over an endless blue sky, a single deliberate canvas that shared the storytelling work with the content. As the visitor scrolled through years, the sky was the constant; people, aircraft and decisions came and went on top of it. The result balanced editorial depth with the sense of openness, continuity and ambition the institution wanted to project.",
    overviewPt: "O Centro Histórico Embraer é o guardião da memória da instituição, a equipe responsável por preservar e contar a história de uma das companhias industriais mais relevantes do Brasil. Eles queriam tirar essa história de dentro dos arquivos e materiais impressos e transformá-la em algo pelo qual o público pudesse caminhar. O briefing era uma linha do tempo interativa, forte o suficiente para carregar décadas de marcos e emocional o suficiente para parecer pertencente a uma empresa cuja existência inteira é sobre voar.\n\nAtuando como UI design e supervisão de criação, liderei o conceito visual que posicionava cada marco sobre um céu azul infinito, uma tela única e deliberada que dividia o trabalho narrativo com o conteúdo. À medida que o visitante percorria os anos, o céu era a constante; pessoas, aeronaves e decisões iam e vinham sobre ele. O resultado equilibrou profundidade editorial com a sensação de abertura, continuidade e ambição que a instituição queria projetar.",
    overviewLegacy: "O Centro Histórico Embraer solicitou a criação de uma timeline interativa para visualização das datas mais importantes. O resultado foi uma linha do tempo que voa sobre um infinito céu azul.",
    gallery: [
      "/images/work/embraer-timeline/hero.jpg",
      "/images/work/embraer-timeline/gallery-01.jpg",
      "/images/work/embraer-timeline/gallery-02.jpg",
      "/images/work/embraer-timeline/gallery-03.jpg",
    ],
  },
  {
    slug: "maserati",
    title: "Maserati",
    category: "Art Direction",
    services: "Ilustração Vetorial",
    thumbnail: "/images/work/maserati.jpg",
    color: "#E8D8E0",
    type: "classic",
    overview: "This was never a client project, but it stays in the portfolio for a reason. Around 2006, vector illustration in Brazil was still a craft designers learned mostly on their own. There were no real tutorials, no Behance, no shortcuts; you opened Illustrator and figured it out one curve at a time. Between beers and quiet evenings, I started teaching myself the medium, and the Maserati MC12 became the piece I kept coming back to: a study in line, light, gradient and patience.\n\nWhat started as a hobby ended up shaping how I think about design work. Building something this complex out of nothing but anchor points and bézier handles taught me to slow down, to commit to a decision, to enjoy unglamorous repetition. Habits that still show up across everything I do today. It's old, but it's still gold.",
    overviewPt: "Esse nunca foi um projeto de cliente, mas continua no portfólio por um motivo. Em meados de 2006, ilustração vetorial no Brasil ainda era um ofício que designer aprendia praticamente sozinho. Não tinha tutorial decente, não tinha Behance, não tinha atalho; você abria o Illustrator e descobria, uma curva por vez. Entre uma cerveja e outra, comecei a estudar o meio, e a Maserati MC12 acabou sendo a peça à qual eu voltava: um estudo de linha, luz, gradiente e paciência.\n\nO que começou como hobby acabou moldando como penso o trabalho de design. Construir algo desse nível de complexidade só com pontos âncora e curvas bézier me ensinou a desacelerar, a se comprometer com uma decisão, a gostar da repetição sem glamour. Hábitos que ainda aparecem em tudo que faço hoje. É antiga, mas continua boa.",
    overviewLegacy: "Em meados de 2006 entre uma cerveja e outra, estudar ilustração digital foi um de meus hobbies. A Maserati MC12 foi feita usando Illustrator. Old, but gold.",
    gallery: [
      "/images/work/maserati/hero.jpg",
      "/images/work/maserati/gallery-01.jpg",
      "/images/work/maserati/gallery-02.jpg",
    ],
  },
  {
    slug: "arquipelago-de-estilos-maria-filo",
    title: "Arquipélago de Estilos · Maria Filó",
    category: "Digital",
    services: "UX/UI Design",
    thumbnail: "/images/work/arquipelago-de-estilos-maria-filo.jpg",
    color: "#D0E0D8",
    type: "classic",
    overview: "Maria Filó launched a collaborative collection with four artists, each translating their universe into a virtual island of prints. I designed the platform that hosted these islands, including an early use of augmented reality in fashion ecommerce: visitors could try on the t-shirts inside a virtual fitting room. At the time, AR in the browser was still a novelty — which made the project as much a technology experiment as a branding piece.",
    overviewPt: "A Maria Filó lançou uma coleção colaborativa com quatro artistas, cada um traduzindo seu universo em uma ilha virtual de estampas. Desenhei a plataforma que abrigava essas ilhas, incluindo um uso pioneiro de realidade aumentada no ecommerce de moda: os visitantes podiam experimentar as camisetas em um provador virtual. Naquela época, AR no browser ainda era uma novidade — o que tornou o projeto tanto um experimento tecnológico quanto uma peça de branding.",
    overviewLegacy: "A Maria Filó lançou uma coleção colaborativa onde quatro artistas criaram suas estampas em ilhas virtuais. Os usuários podiam experimentar as camisetas via provador virtual com realidade aumentada.",
    gallery: [
      "/images/work/arquipelago-de-estilos-maria-filo/hero.jpg",
      "/images/work/arquipelago-de-estilos-maria-filo/gallery-01.jpg",
      "/images/work/arquipelago-de-estilos-maria-filo/gallery-02.jpg",
    ],
  },
  {
    slug: "itau-cultural",
    title: "Itaú Cultural",
    category: "UX/UI Design",
    services: "UI Design · Supervisão de Criação",
    thumbnail: "/images/work/itau-cultural.jpg",
    color: "#E0D0D8",
    type: "classic",
    overview: "A complete redesign of the Itaú Cultural website, one of Brazil's most active cultural institutions. The brief called for a system flexible enough to host an unpredictable editorial output — exhibitions, performances, archives, programming, video — and tight enough to feel curated rather than catalog-like. I led the UI design with a focus on modular content blocks, a generous reading rhythm and clean integration with the social channels where audiences were already discovering the institution's work.",
    overviewPt: "Um redesign completo do site do Itaú Cultural, uma das instituições culturais mais ativas do Brasil. O briefing pedia um sistema flexível o bastante para hospedar uma produção editorial imprevisível — exposições, performances, acervos, programação, vídeo — e ao mesmo tempo coeso o bastante para soar curado, não catalogado. Liderei o design da interface com foco em blocos modulares de conteúdo, ritmo de leitura generoso e integração limpa com os canais sociais onde o público já encontrava o trabalho da instituição.",
    overviewLegacy: "Projeto de design para o site do Itaú Cultural, totalmente remodelado com princípios de maior flexibilidade para conteúdo, interação e integração com redes sociais.",
    gallery: [
      "/images/work/itau-cultural/hero.jpg",
      "/images/work/itau-cultural/gallery-01.jpg",
      "/images/work/itau-cultural/gallery-02.jpg",
      "/images/work/itau-cultural/gallery-03.jpg",
      "/images/work/itau-cultural/gallery-04.jpg",
      "/images/work/itau-cultural/gallery-05.jpg",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const recentWork = projects.filter((p) => p.type === "case-study");
export const classicWork = projects.filter((p) => p.type === "classic");
