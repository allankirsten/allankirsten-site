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
  sections?: Section[];
  thanks?: { label: string; names: string }[];
  related?: string[];
};

export const projects: Project[] = [
  // ── Recent work (case studies) ────────────────────────────────────────────

  {
    slug: "betterfly",
    title: "Betterfly",
    category: "Product Design",
    tagline: "Global Wellness, powered by purpose",
    services: "Head of Product Design – Global",
    thumbnail: "/images/work/betterfly.jpg",
    color: "#1a1a2e",
    type: "case-study",
    overview:
      "Betterfly, a Chilean insurtech, made headlines in 2021 by raising $60 million and later became Latin America's first unicorn in 2022. Around this time, it acquired five technology companies, including Brazil's Xerpay and Chilean startups under the Kunder group.\n\nIn 2022, Betterfly raised $125 million in Series C funding, bringing the company's valuation to over $1 billion and making it Latin America's first social impact unicorn. The round was led by Glade Brook Capital, with participation from Greycroft, Lightrock, QED Investors, and DST Global. This investment more than tripled the company's valuation and significantly expanded its market reach.",
    sections: [
      {
        heading: "Key Responsibilities",
        body: "As Head of Product Design – Global, my primary role was to lead the integration of design teams following a significant international M&A. I managed the design integration of four companies, including a 35-person team comprised of design leads, UX writers, translators, product designers, design ops, illustrators, motion designers, and design system operators.",
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
  },

  {
    slug: "xerpay",
    title: "Xerpay",
    category: "Product Design",
    tagline: "Redefining Financial Wellness",
    services: "Product Design Lead",
    thumbnail: "/images/work/xerpay.jpg",
    color: "#1e1e3f",
    type: "case-study",
    overview:
      "Xerpay aimed to help employees of companies organize their personal finances through early wage access mechanisms, without compromising their earnings. The service was provided to 60,000 employees from 45 companies in Brazil, including major brands such as Ambev, RiHappy, and Nivea. The startup was backed by Kasek, Redpoint Ventures, QED, and Vostok.\n\nOur design challenge was to transform this sensitive service into an empathetic and user-friendly experience. We accelerated feature launches through rapid user testing and strategic knowledge sharing, significantly reducing costs and maximizing ROI by shortening development time.",
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
  },

  {
    slug: "remessa-online",
    title: "Remessa Online",
    category: "Product Design",
    tagline: "Designing for a Global Financial Revolution",
    services: "Head of Design",
    thumbnail: "/images/work/remessa-online.jpg",
    color: "#0d1117",
    type: "case-study",
    overview:
      "I had the opportunity to join Remessa Online, one of Latin America's largest cross-border payment platforms, as Product Design Lead in 2016. During my time there, I contributed to the successful launch of the product and was later promoted to Head of Design, where I oversaw the scaling of design operations during a period of rapid growth. The company was eventually acquired by EBANX for $229M in 2022.",
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
  },

  {
    slug: "mar-ventures",
    title: "MAR ventures",
    category: "Design Leadership",
    tagline: "A legacy of resilience and success",
    services: "Partner & Head of Design",
    thumbnail: "/images/work/mar-ventures.jpg",
    color: "#111827",
    type: "case-study",
    overview:
      "In 2016, I was invited to join MAR ventures (initially e-Genius), a venture builder with a compelling mission: to support and accelerate the growth of early-stage startups through a uniquely structured model that offered more than just capital. Our vision involved injecting intelligence across technology, design, HR, and finance, enabling founders to focus on their core business while MAR took on the complexities of growth.",
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
          "Rebranding to MAR Ventures: In 2017, collaborated with brand designers and writers to rebrand e-Genius as MAR Ventures — a name that captures our adaptability and commitment to progress.",
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
    overview:
      "Em 2010 a Technos relançou um modelo que foi moda no Brasil nos anos 90. O Relógio Mariner, que dava ao usuário a liberdade de criar looks diferentes trocando partes coloridas do acessório. Seguindo o conceito de customização da experiência de uso do Mariner, criamos um website em que era possível testar todas as possibilidades de combinação de cores em um relógio virtual com rotação de 360 graus.\n\nPara ambientar o resultado das experiências, a paleta de cores de todo o website mudava de acordo com a combinação do relógio.",
  },
  {
    slug: "embraer-executive-jets",
    title: "Embraer Executive Jets",
    category: "Digital",
    services: "UI Design · Supervisão de Criação",
    thumbnail: "/images/work/embraer-executive-jets.jpg",
    color: "#D0D8E0",
    type: "classic",
    overview:
      "Projeto de re-design de interface para o site dos aviões mais charmosos da Embraer, os Jatos Executivos. A solução foi aumentar o apelo emocional em layouts com nova estrutura e belas imagens.",
  },
  {
    slug: "sandalias-kenner",
    title: "Sandálias Kenner",
    category: "Digital",
    services: "UI Design",
    thumbnail: "/images/work/sandalias-kenner.jpg",
    color: "#E0D8D0",
    type: "classic",
    overview:
      "Marca brasileira de sandálias conhecida pelo design que combina conforto, moda e inovação. As sandálias seriam modeladas em 3D especialmente para o novo website, com visualização interativa de 360°.",
  },
  {
    slug: "claro-ana-maria-braga",
    title: "Claro · Ana Maria Braga",
    category: "Digital",
    services: "UX/UI Design",
    thumbnail: "/images/work/claro-ana-maria-braga.jpg",
    color: "#D8E0D8",
    type: "classic",
    overview:
      "Layouts para a plataforma da Claro, estrelada por Ana Maria Braga. O design é responsivo abrigando perfeitamente conteúdos como receitas, livros digitais e mensagens de alto astral.",
  },
  {
    slug: "globo-quiz-babilonia",
    title: "Globo Quiz Babilônia",
    category: "UX/UI Design",
    services: "UI Design",
    thumbnail: "/images/work/globo-quiz-babilonia.jpg",
    color: "#E0D8E0",
    type: "classic",
    overview: "Layouts para quiz on line da novela Babilônia da Rede Globo.",
  },
  {
    slug: "giro-aventura",
    title: "Giro & Aventura",
    category: "Art Direction",
    services: "UX/UI Design",
    thumbnail: "/images/work/giro-aventura.jpg",
    color: "#D8E8D8",
    type: "classic",
    overview:
      "Para aproximar as marcas BFGoodrich/Michelin de seu público alvo, criamos uma plataforma que envolveu revista impressa e um website. O design foi inspirado pelas trilhas, paisagens e texturas do off road.",
  },
  {
    slug: "tim-gloria-kalil",
    title: "TIM · Glória Kalil",
    category: "Digital",
    services: "UI Design",
    thumbnail: "/images/work/tim-gloria-kalil.jpg",
    color: "#E8D8D8",
    type: "classic",
    overview:
      "Layouts para a plataforma da TIM, estrelada por Glória Kalil. Conteúdos de dicas e livros digitais caem como uma luva na estrutura de design responsivo.",
  },
  {
    slug: "revista-piaui",
    title: "Revista Piauí",
    category: "UX/UI Design",
    services: "UX/UI Design",
    thumbnail: "/images/work/revista-piaui.jpg",
    color: "#D8D8E8",
    type: "classic",
    overview:
      "Uma das publicações mais irreverentes do Brasil precisava de um site que abrigasse o conteúdo da revista impressa de maneira eficiente. A arquitetura foi estruturada para ser customizável de acordo com o visual das belas capas da revista.",
  },
  {
    slug: "saraiva-plus",
    title: "Saraiva Plus",
    category: "Digital",
    services: "UI Design",
    thumbnail: "/images/work/saraiva-plus.jpg",
    color: "#E0E8D8",
    type: "classic",
    overview: "Proposta de design para a Saraiva Plus.",
  },
  {
    slug: "o-boticario-timeline",
    title: "O Boticário · Timeline",
    category: "Digital",
    services: "UI Design · Supervisão de Criação",
    thumbnail: "/images/work/o-boticario-timeline.jpg",
    color: "#E8E8D8",
    type: "classic",
    overview:
      "Para centralizar fatos históricos de seus 35 anos, o Boticário nos solicitou a criação de uma linha do tempo interativa. A aceitação interna foi tamanha que o projeto Nossa História está disponível on line.",
  },
  {
    slug: "embraer-timeline",
    title: "Embraer · Timeline",
    category: "Digital",
    services: "UI Design · Supervisão de Criação",
    thumbnail: "/images/work/embraer-timeline.jpg",
    color: "#D8E0E8",
    type: "classic",
    overview:
      "O Centro Histórico Embraer solicitou a criação de uma timeline interativa para visualização das datas mais importantes. O resultado foi uma linha do tempo que voa sobre um infinito céu azul.",
  },
  {
    slug: "maserati",
    title: "Maserati",
    category: "Art Direction",
    services: "Ilustração Vetorial",
    thumbnail: "/images/work/maserati.jpg",
    color: "#E8D8E0",
    type: "classic",
    overview:
      "Em meados de 2006 entre uma cerveja e outra, estudar ilustração digital foi um de meus hobbies. A Maserati MC12 foi feita usando Illustrator. Old, but gold.",
  },
  {
    slug: "arquipelago-de-estilos-maria-filo",
    title: "Arquipélago de Estilos · Maria Filó",
    category: "Digital",
    services: "UX/UI Design",
    thumbnail: "/images/work/arquipelago-de-estilos-maria-filo.jpg",
    color: "#D0E0D8",
    type: "classic",
    overview:
      "A Maria Filó lançou uma coleção colaborativa onde quatro artistas criaram suas estampas em ilhas virtuais. Os usuários podiam experimentar as camisetas via provador virtual com realidade aumentada.",
  },
  {
    slug: "itau-cultural",
    title: "Itaú Cultural",
    category: "UX/UI Design",
    services: "UI Design · Supervisão de Criação",
    thumbnail: "/images/work/itau-cultural.jpg",
    color: "#E0D0D8",
    type: "classic",
    overview:
      "Projeto de design para o site do Itaú Cultural, totalmente remodelado com princípios de maior flexibilidade para conteúdo, interação e integração com redes sociais.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const recentWork = projects.filter((p) => p.type === "case-study");
export const classicWork = projects.filter((p) => p.type === "classic");
