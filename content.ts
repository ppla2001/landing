export const content = {
  en: {
    // Navbar
    nav: {
      name: "Pedro Pla",
      links: [
        { label: "Product Cases", href: "#cases" },
        { label: "Impact", href: "#impact" },
        { label: "Background", href: "#background" },
        { label: "Contact", href: "#contact" },
      ],
    },

    // Hero Section
    hero: {
      name: "Pedro Pla",
      image: "/yo-formal%20copy.jpeg",
      headline: "From Strategy to Execution",
      subtitle:
        "I connect product, growth, and operations to make things that actually work",
      cta: {
        primary: "See My Work",
        secondary: "Let's Talk",
      },
    },

    // Product Cases Section
    cases: {
      title: "Product Thinking",
      items: [
        {
          id: 1,
          image: "/willow.png",
          title: "Willow",
          summary:
            "Led product for a multi-channel inventory SaaS, taking it from zero to paying customers - owning discovery, prioritization, and front-end execution while navigating the constraints of an early-stage startup.",
          problem:
            "In Argentina, most e-commerce businesses don't sell through just one channel. A typical retailer might have their own online store (built on TiendaNube, Shopify, WooCommerce, etc.), listings on marketplaces like MercadoLibre or Frávega, and sometimes a physical location. Each channel has its own inventory system, product catalog, and rules.\n\nThis creates painful operational realities. For example, when a product sells on MercadoLibre, the retailer has to manually update stock on TiendaNube and every other channel. If they forget or move too slowly, they risk overselling items they don't have. Many retailers split inventory across channels to work around this, but lose visibility into their actual total stock.\n\nThe complexity goes beyond inventory. MercadoLibre's marketplace search algorithm rewards different keywords than what a retailer might use in their own store, so retailers often need different product titles per platform. Commission structures vary, so prices might differ too. Some MercadoLibre sellers create multiple listings for the same product - one with installment pricing, another for one-time payment - each requiring separate management.\n\nFor small and mid-sized retailers without dedicated operations teams, this meant hours of repetitive work daily, constant error risk, and no clear picture of their inventory position.",
          discovery:
            "We started by talking to retailers, agencies managing multiple e-commerce stores, and people deep in the Argentine e-commerce ecosystem. Those conversations revealed the problem was more nuanced than expected - and uncovered opportunities we hadn't anticipated.\n\nThe first insight came from timing. MercadoShops, a storefront product within MercadoLibre, announced it was shutting down on December 31st, 2025. Retailers faced manually migrating thousands of products to new platforms - many simply weren't doing it. None of our competitors offered migration tools. This gave us a market entry opportunity with a deadline attached.\n\nThe second insight came from seeing actual user data. We'd assumed retailers would have clean product catalogs - consistent SKUs, accurate information. The reality was messier: SKUs that didn't match between platforms, products missing SKUs entirely, duplicates everywhere. Any product assuming clean data would fail.\n\nWe also discovered unexpected workflows. Some retailers used physical inventory scanners connected to their own software. These weren't going away - they were embedded in operations. This surfaced integration opportunities and reminded us our product needed to fit into existing workflows.\n\nWorking with agencies revealed different needs: switching between client accounts efficiently, granular team permissions, bulk operations across stores. These conversations shaped our thinking on multi-tenancy and access control.\n\nOne theme kept emerging: flexibility wasn't optional. Some users wanted stock mirrored identically everywhere. Others needed to allocate quantities per channel while seeing total inventory. Some wanted uniform product titles; others needed platform-specific variations. A rigid approach wouldn't serve this market.",
          solution:
            "We built Willow - a platform letting retailers manage inventory and product information across all sales channels from one place.\n\nThe core was a configurable sync system. Mirror mode kept stock identical everywhere - sell one unit on MercadoLibre, and TiendaNube updates automatically. Alternatively, retailers could assign specific quantities per channel while maintaining total visibility. We also supported negative stock for businesses that accepted orders while awaiting replenishment.\n\nFor product information, we built a rule-based system. During setup, users configured rules per product: same title everywhere or platform-specific? Synced prices or independent? Once set, rules ran automatically. The system started simpler but evolved as we learned basic sync wasn't enough differentiation. The trade-off - more complexity for us, but intuitive for users. When we showed prototypes, most understood it immediately.\n\nWe built multi-listing support for MercadoLibre sellers who maintain several listings per product (one-time payment vs. installment pricing). Willow treated these as linked to a single source of truth.\n\nThe product migrator was a strategic bet. We built MercadoShops-to-TiendaNube migration to capture the December 31st deadline window. The highlighy was when we migrated one customer's entire catalog - over 4,000 products - in approximately a day. The system was designed to generalize to other platform combinations.\n\nWe invested in handling messy data. During import, Willow matched products via SKU but also detected problems: mismatched SKUs, missing SKUs, duplicates. We generated reports showing what needed attention and designed flows to help users create unified SKUs.\n\nThe multi-tenant architecture reflected agency needs. Multiple users per company, multiple companies per user, granular permissions (Owner/Editor/Reader/No Access) per section, email invitations. We scoped agency-specific features: bulk management, cross-client operations, workflow optimizations and other features not scoped previously to our discovery.\n\nNot everything was prioritized equally. Physical store integration and inventory gun integrations were scoped but not essential for market entry.\n\nOne feature taught us an important lesson. We built a customizable metrics dashboard, believing it would be valuable. Users told us directly they weren't using it. We cut further investment immediately. The lesson: validate before building, even when something feels obvious - stuck with me.",
          execution:
            "My role covered product strategy, front-end development, and cross-functional coordination.\n\nMy main challenge was translating backend complexity into simple interfaces. The rule system, multi-tenant permissions, async sync processes - technically intricate, but users shouldn't feel that complexity. I built the front-end with this principle in mind, validating flows through prototypes before committing engineering effort.\n\nValidation was continuous. Regular feedback sessions with users, prospects, and agencies shaped priorities weekly. The metrics dashboard mistake happened because we skipped validation - we assumed value instead of testing. Hearing users say they weren't engaging made deprioritization obvious.\n\nWhen we encountered messy data in production, we adapted quickly. We built detection automations and cleanup reports. This responsiveness - solving real problems rather than sticking rigidly to a roadmap - became how we operated.\n\nI coordinated an external development team through weekly check-ins. This relationship had challenges: velocity gaps, accountability issues. In retrospect, I'd establish clearer contracts, explicit milestones, and tighter oversight from the start.\n\nI also built internal operating systems: weekly planning, documentation, onboarding materials, templates for proposals and reporting, standardized sales processes. Not glamorous, but essential for a small team moving fast.\n\nI worked with designers on brand identity, partnered with legal and accounting on company setup, and collaborated across all business areas as co-founder.\n\nWe pitched to multiple investors. Our pricing strategy - below competitors to enter the market, tiered plans with per-user pricing for expansion - was questioned but successfully defended. We won a pitching competition at an Argentine university. Despite positive reception, we didn't secure the investment needed to scale.",
          results:
            "We acquired paying customers, including one retailer whose 4,000+ SKU catalog we migrated in a day. We built a functional platform with real users and validated demand through continuous conversations. We won a university pitch competition and presented to multiple investors, defending our model even though we didn't close funding.\n\nAfter 14 months, we closed. Contributing factors: capital intensity to compete against established players, inability to raise funding, diverging co-founder commitment levels, and challenges with our external development partner.\n\nWhat I'd do differently:\n\nValidate harder before building. The metrics dashboard felt obvious - we built it without enough signal that users wanted it. More conversations and smaller experiments would have saved that effort.\n\nScope even smaller. We were iterative, but some releases could have been tighter for faster feedback.\n\nTreat external teams as critical dependencies. Clearer contracts and structured accountability would have surfaced problems earlier.\n\nHave alignment conversations sooner. Co-founder commitment gaps only surfaced when facing a major decision. I'd push for explicit conversations about scenarios much earlier.\n\nProtect focus ruthlessly. Some features diluted attention from core value. More discipline about \"not yet\" would have kept us sharper.",
        },
        {
          id: 2,
          image: "/marketplace.jpg",
          title: "Luxury Real Estate Developments Marketplace",
          summary:
            "Led product definition for a real estate lead generation platform - transforming an ambiguous vision into a complete project specification including requirements, technical architecture, analytics plan, and development roadmap.",
          problem:
            'Two business partners - one owning a major retail chain in Argentina, the other running a real estate agency in Miami - wanted to build a digital platform to capture and qualify leads for luxury real estate developments across Miami, Punta del Este, and Buenos Aires.\n\nTheir business model was clear: they had deep networks with developers but needed a scalable way to attract potential buyers, qualify them before investing sales time, and convert the best prospects into clients. The platform would showcase developments in progress, let users filter by location, building type, amenities, and price range, and funnel interested visitors into a qualification flow before any human conversation happened.\n\nThe challenge wasn\'t the business idea. It was that they had no clear picture of what the product should look like or how it should work. They knew they wanted "a marketplace to get leads." Everything else - user flows, features, technical requirements, qualification process, integrations - was undefined. They were busy executives with limited availability for alignment sessions, yet every detail required their input.',
          discovery:
            "My role was to take this rough concept and turn it into something a development team could build - and that meant extracting clarity from stakeholders who couldn't articulate what they wanted.\n\nThe discovery process spanned about six weeks of weekly meetings. These weren't typical requirements sessions where stakeholders hand you a spec. I had to structure conversations to pull their vision out piece by piece. The most effective technique was asking for examples: what existing platforms did they like? What specific aspects appealed to them? Reacting to concrete references was far more productive than abstract feature discussions. I documented everything in shared Google Docs, building a reference library of patterns and preferences we could point back to.\n\nThrough these conversations, the product scope became clear. The marketplace needed to support three markets (Miami, Buenos Aires, Punta del Este) with developments filterable by location, neighborhood, price, construction status, and amenities. Each project would have a detailed page with renders, videos, floor plans, maps, and contact options. Administrators needed a back-office to create and manage listings, control featured placements, and reorder content manually.\n\nBut the marketplace was only the front door. The real value was in lead qualification. When a user expressed interest, they'd enter a WhatsApp-based flow powered by an AI bot that would ask pre-qualification questions - budget, preferred zone, property type, timeline. Qualified leads would get offered a meeting booking; unqualified ones would be handled differently. Every interaction would flow into a CRM with full context, so sales conversations started informed.\n\nThis meant integrations with WhatsApp Business API, a workflow orchestrator like n8n, a CRM (HubSpot or Pipedrive), calendar booking (Calendly), and mapping services. Plus analytics infrastructure to measure the full funnel from visit to closed deal.\n\nTo validate direction before any development, I built rapid prototypes using V0. This let us test ideas visually and iterate based on stakeholder reactions. After hundreds of iterations - adjusting layouts, flows, interactions - we reached a version where both partners said \"this is what we want.\"",
          solution:
            "Once we had alignment, I translated everything into structured documentation the team could execute against.\n\nDevelopment proposal: I wrote the full project specification - functional scope broken into user roles (visitor, registered user, admin), detailed feature requirements, UX/UI scope, QA process, commercial terms, timeline, and change management process. This became the contract-ready document defining what would be built and what was explicitly out of scope.\n\nTechnical architecture: Along with the dev, we defined the stack and infrastructure decisions, translating it into a clear document. Next.js for the public-facing front-end, NestJS for the API layer, PostgreSQL for data, S3 for media storage, Docker for deployment on a VPS. Each decision was documented with rationale - balancing speed to market, maintainability, and cost. I also scoped what was deliberately excluded from the MVP to keep complexity and expectations manageable.\n\nAnalytics plan: I designed the measurement framework - defining the conversion funnel from visit through lead qualification to meeting attendance to outcome. I specified which events to track, how they'd flow into GA4, which advertising pixels to connect, and how CRM and calendar data would feed back into analytics. The deliverable included a testing protocol and documentation for the client's marketing team.\n\nDevelopment roadmap: I structured the backlog in Jira with epics covering the marketplace experience, lead capture flows, AI qualification system, CRM integration, calendar functionality, and back-office administration. Each epic broke into user stories with acceptance criteria detailed enough for the developer to work independently.\n\nAdditional services scope: I also documented optional add-ons outside the core MVP - expanded analytics, additional integrations, content migration support - with separate pricing, so the client understood what was included versus what would require additional investment.\n\nThe team was small: one developer, one designer, the two stakeholders, myself, and one other person providing support. With limited resources and stakeholders who had unpredictable availability, comprehensive documentation was essential. Every specification needed to stand alone.",
          execution:
            "By the time I transitioned off the project in December 2025, I had delivered the complete product definition: validated prototypes, development proposal, technical architecture, analytics plan, and a structured Jira backlog. Backend development had begun based on my specifications. The project continued toward its planned MVP launch in early 2026.\n\nI stepped away because the engagement required a level of flexibility around scope changes and stakeholder availability that wasn't sustainable alongside my other commitments. Recognizing that and exiting cleanly - with thorough documentation so the project could continue - was the right call.",
          results:
            "What I took from this experience:\n\nStructure extracts clarity from ambiguity. When stakeholders can't articulate what they want, asking for examples and references works better than asking for requirements. People react to concrete options more easily than they generate abstract specifications.\n\nPrototype before you specify. Building quick visual prototypes saved weeks of potential misalignment. Iterating on a V0 prototype is far cheaper than rewriting a Jira backlog or - worse - production code.\n\nDocumentation is a deliverable, not overhead. The proposal, architecture doc, and analytics plan weren't just internal artifacts - they were the product of my work. With a small team and busy stakeholders, these documents enabled execution without me needing to be in every conversation.\n\nScope the full system, not just the interface. What looked like \"a marketplace\" was actually a lead qualification engine with CRM integration, AI workflows, analytics infrastructure, and administrative tools. Mapping the complete system early prevented surprises later.\n\nKnow when to step back. The project was viable but the engagement dynamics weren't sustainable for me. Exiting professionally - with everything documented and handed over - preserved relationships and let the work continue.",
        },
        {
          id: 3,
          image: "/nft.jpg",
          title: "Trape",
          summary:
            "Fully specified a P2P NFT trading platform - from market analysis to technical architecture - then made the informed decision not to build it.",
          problem:
            "I kept running into the same problem personally: I wanted to trade an NFT directly for another NFT, but there was no safe way to do it.\n\nTo understand why this is hard, a bit of context helps. NFTs are unique digital assets stored on a blockchain - think of them like collectible items, but digital and verifiable. Unlike regular currency, you can't just \"exchange\" two NFTs in a single action. Each transfer is a separate transaction. This creates a trust problem: if I send you my NFT first, you could simply not send yours back. There's no undo button on a blockchain.\n\nThe options available were all bad. I could sell my NFT for cryptocurrency, then use that to buy the other person's NFT - but this introduces price fluctuation risk, platform fees, and requires both of us to time our transactions. Or I could try to coordinate a swap through direct messages, which meant either trusting a stranger to send their asset first (risky), or finding a trusted intermediary in some community - typically a moderator - to hold both assets and execute the swap (slow and tedious). Either way, what should be a simple exchange became a slow, manual process dependent on people's availability and goodwill.\n\nIt wasn't just my problem. I'm part of several NFT communities, and I kept seeing the same pattern: people wanting to trade, asking moderators to intermediate, waiting for someone trusted to be online. The friction was obvious, and it felt like something a platform could solve.\n\nMajor platforms had tried. OpenSea, the largest NFT marketplace, launched a feature called Deals that allowed direct swaps. But they discontinued it in their 2024 platform update - citing insufficient usage to justify maintaining it. Other dedicated swap platforms had emerged over the years, but they either shut down, got hacked, or faded into irrelevance. As far as I could find, none were still actively operating.\n\nThe market had abandoned direct NFT swaps. But the need hadn't disappeared.",
          marketAnalysis:
            "Before designing anything, I researched why solutions in this space kept failing.\n\nI looked at every platform that had attempted peer-to-peer NFT swaps: what they offered, what happened to them, and what I could learn from their trajectory.\n\nThe pattern was consistent. Platforms either abandoned the feature because usage was too low to justify the maintenance cost, or they got compromised through security vulnerabilities that made users lose assets. OpenSea had the data - millions of users - and decided the feature wasn't worth keeping. Other dedicated platforms had suffered exploits that drained user assets and destroyed trust overnight. The rest simply stopped operating over time. By the time I did this research, I couldn't find a single reliable, active platform offering direct NFT swaps.\n\nThis analysis told me several things. First, there was a genuine gap: no active platform existed for direct swaps that could handle NFTs plus tokens in a single transaction. Second, the space had real risks - security failures aren't recoverable when you're handling other people's assets. Third, the market size was uncertain. My personal frustration was real, the community demand I'd witnessed was real, but OpenSea's decision suggested that even among millions of NFT users, the subset who wanted direct swaps might be too small to build a sustainable product around.\n\nThe opportunity existed, but it came with significant caveats.",
          productSpecification:
            'I decided to fully specify the product before writing any code - treating the specification itself as a way to think through whether this was worth building.\n\nThe concept was straightforward: a platform where one person creates an offer ("I\'ll give you this NFT plus these tokens for that NFT"), sends it to a specific counterparty, and if they accept, the swap executes automatically - both sides of the trade happen together, so either the full exchange completes or nothing happens at all. No trust required, no intermediary holding assets.\n\nI documented everything I would need to actually build this myself.\n\nFor the product itself, I defined the MVP scope explicitly: what was included (creating, accepting, and cancelling offers; automatic expiration; clear status tracking) and what was deliberately excluded (auctions, public listings, reputation systems). I planned minimal fees - just enough to cover hosting and infrastructure costs, not as a revenue model. Keeping the first version focused would let me validate whether anyone actually used it before investing in complexity.\n\nI mapped user flows end-to-end: how someone would connect their wallet, select assets, create an offer, share it with a counterparty, and what the counterparty would see when reviewing and accepting. I specified the states an offer could be in (active, accepted, cancelled, expired) and wrote the messaging for each scenario - success confirmations, error explanations, edge cases.\n\nFor the technical side, I made architecture decisions: launching first on Abstract (a newer network with lower friction and good developer tools), what technologies to use for the front-end, and how the smart contracts should be structured. I documented security patterns that would be essential - ways to prevent common vulnerabilities that had affected other platforms.\n\nI also created a complete brand identity. The name Trape (a blend of "trade" with a distinct sound), a visual system with colors and typography, messaging guidelines, and even a pronunciation note since the name isn\'t obvious. This might seem premature for something unbuilt, but I wanted to see if I could envision the product as something real and coherent.\n\nFinally, I defined success criteria (what metrics would indicate the MVP was working) and sketched a roadmap for how the product could evolve across multiple phases if it gained traction.\n\nThe exercise was valuable in itself. By the time I finished, I had a complete blueprint I could build against - and a much clearer picture of what doing so would actually require.',
          buildDecision:
            "With the specification complete, I had to decide: do I actually build this?\n\nI decided not to - for reasons that became clear through the process of specifying the product.\n\nThe fundamental issue was security risk. The core of this product is a smart contract that holds users' assets during a swap. If there's a vulnerability in that contract, users lose their NFTs. This isn't theoretical - it's exactly what had happened to other platforms in the space. Unlike a bug in a website that you can patch and apologize for, a smart contract exploit on a public blockchain is often permanent and irreversible.\n\nI was planning to build this myself using AI-assisted coding tools - what's sometimes called \"vibe coding.\" I'm capable of building the front-end, the user interface, the flows. But writing secure smart contracts that handle valuable assets requires deep expertise I don't have. AI coding assistants can generate Solidity code that looks correct, but \"looks correct\" isn't good enough when someone's valuable collectibles are at stake. Subtle vulnerabilities are exactly what experienced auditors get paid to find, and AI tools can introduce them just as easily as they can write working code.\n\nI considered alternatives. I could pay for a professional security audit before launching. But audits cost real money - often thousands of dollars - for a side project that might have a tiny user base. The fees I'd planned were just to cover infrastructure costs, not to fund significant upfront investment. The economics didn't work.\n\nThere was also the market signal to consider. OpenSea isn't a small operation - they have data on millions of users and professional product teams. They concluded that direct swaps weren't worth maintaining. My personal frustration with the problem was genuine, the community need I'd observed was genuine, but I had to be honest: that might still represent a niche too small to matter.\n\nAnd there was a personal dimension. If I shipped a product with a vulnerability and someone lost their assets, that would be on me. The reputational risk and the ethical weight of potentially causing harm to users wasn't something I could take lightly, especially for a project I was building mostly for myself and others like me.\n\nThe responsible choice was to stop. I'd rather have a complete specification sitting in a folder than a live product that puts users at risk.",
          learnings:
            "Specification is a thinking tool, not just a building tool. The process of fully designing Trape - from market analysis through technical architecture - forced me to confront questions I might have glossed over if I'd jumped straight into coding. By the time I finished, the decision not to build was clear. The specification had done its job even though no code was written.\n\nKnowing when not to build is a product skill. There's a bias toward action - ship fast, learn by doing, iterate. That works for many products. But some products have risk profiles where shipping prematurely can cause real harm. Recognizing which category you're in, and having the discipline to stop when the risks outweigh your ability to manage them, is undervalued.\n\nCommunity pain isn't automatic market validation. I genuinely wanted Trape to exist. I would use it. People in my communities would use it. But observed frustration can make a problem feel bigger than it is. OpenSea's decision to discontinue their swap feature was a data point I had to take seriously - they knew something about actual user behavior at scale that my personal experience couldn't tell me.\n\nSecurity constraints change the game. In typical web development, the worst case is usually a bug that annoys users or causes some downtime. In smart contract development handling assets, the worst case is people losing money with no recourse. That asymmetry matters. Being honest about whether your skills and resources match the risk profile of your product is essential - especially when building solo with AI tools.\n\nThe work isn't wasted. The specification exists. If circumstances change - if smart contract tooling becomes reliable enough that I'd trust AI-assisted development for security-critical code, or if I find a collaborator with the right expertise - I have a complete blueprint ready to execute. And regardless, the thinking I did transfers to other products and problems.",
        },
      ],
      labels: {
        problem: "Problem",
        discovery: "Discovery",
        solution: "Solution",
        execution: "Execution",
        results: "Results",
        marketAnalysis: "Market Analysis",
        productSpecification: "Product Specification",
        buildDecision: "Build Decision",
        learnings: "Learnings",
        hypothesis: "Hypothesis",
        proposal: "Proposal",
        metrics: "Metrics",
        readMore: "Read More",
        close: "Close",
      },
    },

    // Key Decisions & Trade-offs Section
    impact: {
      title: "The Thinking Behind the Work",
      decisions: [
        {
          title: "Embrace ambiguity, ship clarity",
          description:
            "Never waited for perfect information. Built structured frameworks and decision trees to move forward - then refined as reality pushed back.",
          tradeoff: "Some assumptions broke. But momentum never did.",
        },
        {
          title: "When words fail, prototype",
          description:
            "Stakeholders rarely know what they want until they see what they don't. Used rapid mockups as a forcing function to surface real requirements faster than any discovery meeting could.",
          tradeoff: "More upfront work. Less costly late-stage pivots.",
        },
        {
          title: "Documentation as alignment, not bureaucracy",
          description:
            "Full technical architecture, analytics plans, and structured backlogs before a single line of code. Not because process demands it - because ambiguity compounds when everyone's working from a different version of the truth.",
          tradeoff: "Slower starts. Faster everything else.",
        },
        {
          title: "The best product decision is sometimes not building",
          description:
            "On Trape, delivered a no-build recommendation after identifying security vulnerabilities with no viable fix. Protected end users over hitting a launch milestone.",
          tradeoff:
            "No shipped product. But the right call - and the harder one to make.",
        },
      ],
    },

    // Background Section
    background: {
      title: "Background",
      philosophy: {
        title: "My Product Philosophy",
        beliefs: [
          "Clarity before solutions - figure out the real problem first.",
          "Shipping beats perfecting - a working prototype teaches more than a perfect spec.",
          "No is a decision too - focus is something you choose actively.",
        ],
      },
      experience: [
        {
          role: "Co-Founder & Product Lead",
          company: "Willow",
          description:
            "Willow started from a real problem: retailers selling across multiple channels waste hours managing inventory, product data, and pricing by hand  -  across platforms that don't talk to each other. I owned discovery, prioritization, front-end development, and GTM. Sat with real users to untangle workflows that were messier than expected, built a configurable sync system that had to handle clean data and dirty data equally well, and kept an external dev team aligned week to week. We reached paying customers and shut down after 14 months  -  the case study covers what we built, what worked, and what I'd do differently.",
        },
        {
          role: "Digital Marketing & Sales Diligence Analyst",
          company: "CRISIL",
          description:
            "Worked embedded in the team of a NYC-based private equity firm, analyzing portfolio companies and acquisition targets. The job was turning scattered digital data  -  traffic, share of voice, demand signals  -  into a clear picture of where each company stood against its competitors. Every output landed as a stakeholder-ready deliverable: tight, opinionated, and built for people making investment decisions  -  not for people who wanted to dig through spreadsheets themselves.",
        },
        {
          role: "Co-Founder & Growth Lead",
          company: "Vellicity",
          description:
            "Built a growth agency for SMBs in Australia with a co-founder, fully remote from Argentina. Managed client accounts end-to-end  -  from the first call through performance reviews  -  while building the systems that kept delivery consistent as we scaled: onboarding flows, templates, delivery processes. Cross-functional from day one  -  clients and designers all in the mix simultaneously.",
        },
        {
          role: "Marketing Analyst",
          company: "Agencia Empuje",
          description:
            "My first agency job, running several e-commerce accounts in parallel. Paid media, CRO, competitive analysis  -  but what stuck with me most was learning to translate what a client says they want into something a team can actually execute. Looking back, I was operating like a PM before I knew that's what I wanted to do.",
        },
      ],
    },

    // Contact Section
    contact: {
      title: "Let's Talk",
      message:
        "Open to PM, growth, and strategy roles - especially at teams that move fast and think deeply.",
      linkedin: "https://www.linkedin.com/in/pedro-pla1/",
      email: "plapedro@outlook.com",
      emailModal: {
        title: "Get in touch",
        copied: "Copied!",
        copyAddress: "Copy address",
        openMailApp: "Open mail app",
        close: "Close",
      },
    },

    // Footer
    footer: {
      copyright: `© ${new Date().getFullYear()} Pedro Pla. All rights reserved.`,
      social: {
        linkedin: "https://www.linkedin.com/in/pedro-pla1/",
        email: "plapedro@outlook.com",
      },
    },
  },

  es: {
    // Navbar
    nav: {
      name: "Pedro Pla",
      links: [
        { label: "Casos de Producto", href: "#cases" },
        { label: "Impacto", href: "#impact" },
        { label: "Experiencia", href: "#background" },
        { label: "Contacto", href: "#contact" },
      ],
    },

    // Hero Section
    hero: {
      name: "Pedro Pla",
      image: "/yo-formal%20copy.jpeg",
      headline: "De la estrategia a la ejecución",
      subtitle:
        "Conecto producto, growth y operaciones para construir cosas que realmente funcionan",
      cta: {
        primary: "Ver Mi Trabajo",
        secondary: "Hablemos",
      },
    },

    // Product Cases Section
    cases: {
      title: "Producto en acción",
      items: [
        {
          id: 1,
          image: "/willow.png",
          title: "Willow",
          summary:
            "Lideré producto en un SaaS de inventario multicanal, llevándolo de cero a primeros clientes pagos - siendo responsable del discovery, la priorización y la ejecución front-end mientras navegaba las limitaciones de una startup en etapa temprana.",
          problem:
            "En Argentina, la mayoría de los negocios de e-commerce no venden por un solo canal. Un retailer típico puede tener su propia tienda online (en TiendaNube, Shopify, WooCommerce, etc.), publicaciones en marketplaces como MercadoLibre o Frávega, y a veces un local físico. Cada canal tiene su propio sistema de inventario, catálogo de productos y reglas propias.\n\nEsto genera realidades operativas muy dolorosas. Cuando un producto se vende en MercadoLibre, el retailer tiene que actualizar el stock manualmente en TiendaNube y en todos los demás canales. Si se olvida o tarda demasiado, arriesga vender productos que no tiene. Muchos retailers dividían el inventario entre canales como solución, pero perdían visibilidad del stock real total.\n\nLa complejidad va más allá del inventario. El algoritmo de búsqueda de MercadoLibre premia palabras clave distintas a las que un retailer usaría en su propia tienda, por lo que los títulos suelen tener que ser distintos por plataforma. Las estructuras de comisión varían, así que los precios también pueden diferir. Algunos vendedores de MercadoLibre crean múltiples publicaciones para un mismo producto  -  una con precio en cuotas, otra de pago único  -  cada una requiriendo gestión por separado.\n\nPara retailers pequeños y medianos sin equipos de operaciones dedicados, esto significaba horas de trabajo repetitivo por día, riesgo constante de errores y ninguna visión clara de su posición de inventario.",
          discovery:
            "Empezamos hablando con retailers, agencias que gestionaban múltiples tiendas y personas con experiencia profunda en el ecosistema de e-commerce argentino. Esas conversaciones revelaron que el problema era más matizado de lo que esperábamos  -  y nos abrieron oportunidades que no habíamos anticipado.\n\nEl primer insight llegó por timing. MercadoShops, el producto de tiendas dentro de MercadoLibre, anunció que cerraba el 31 de diciembre de 2025. Los retailers tendrían que migrar miles de productos manualmente a nuevas plataformas  -  y muchos simplemente no lo estaban haciendo. Ningún competidor ofrecía herramientas de migración. Eso nos dio una oportunidad de entrada al mercado con una fecha límite incorporada.\n\nEl segundo insight surgió de ver datos reales de usuarios. Habíamos asumido que los retailers tendrían catálogos prolijos  -  SKUs consistentes, información precisa. La realidad era más desordenada: SKUs que no coincidían entre plataformas, productos sin SKU, duplicados por todos lados. Cualquier producto que asumiera datos limpios iba a fallar.\n\nTambién descubrimos flujos de trabajo inesperados. Algunos retailers usaban lectores de inventario físicos conectados a su propio software. No iban a desaparecer  -  estaban embebidos en la operación. Eso abrió oportunidades de integración y nos recordó que nuestro producto tenía que encajar en los flujos existentes, no reemplazarlos.\n\nTrabajar con agencias reveló necesidades distintas: cambiar entre cuentas de clientes de forma eficiente, permisos granulares por equipo, operaciones masivas entre tiendas. Esas conversaciones moldearon nuestra visión de multi-tenancy y control de acceso.\n\nUn tema seguía apareciendo: la flexibilidad no era opcional. Algunos usuarios querían stock espejado idéntico en todos los canales. Otros necesitaban asignar cantidades por canal manteniendo visibilidad total. Algunos querían títulos uniformes; otros necesitaban variaciones por plataforma. Un enfoque rígido no iba a servir a este mercado.",
          solution:
            "Construimos Willow  -  una plataforma que permite a los retailers gestionar inventario e información de productos en todos sus canales de venta desde un solo lugar.\n\nEl núcleo era un sistema de sincronización configurable. El modo espejo mantenía el stock idéntico en todos lados  -  si se vendía una unidad en MercadoLibre, TiendaNube se actualizaba automáticamente. Como alternativa, los retailers podían asignar cantidades específicas por canal manteniendo visibilidad total. También soportamos stock negativo para negocios que aceptaban pedidos mientras esperaban reposición.\n\nPara la información de productos, construimos un sistema basado en reglas. Durante la configuración, los usuarios definían reglas por producto: ¿mismo título en todos lados o específico por plataforma? ¿Precios sincronizados o independientes? Una vez configuradas, las reglas corrían solas. El sistema empezó más simple pero evolucionó cuando aprendimos que la sincronización básica no era suficiente diferenciación. El trade-off  -  más complejidad para nosotros, pero intuitivo para los usuarios. Cuando mostramos los prototipos, la mayoría lo entendió de inmediato.\n\nConstruimos soporte de multi-publicación para vendedores de MercadoLibre que mantienen varias publicaciones por producto (pago único vs. cuotas). Willow las trataba como vinculadas a una única fuente de verdad.\n\nEl migrador de productos fue una apuesta estratégica. Construimos la migración de MercadoShops a TiendaNube para capturar la ventana de la fecha límite del 31 de diciembre. El momento más destacado fue cuando migramos el catálogo completo de un cliente  -  más de 4.000 productos  -  en aproximadamente un día. El sistema fue diseñado para generalizarse a otras combinaciones de plataformas.\n\nInvertimos en manejar datos desordenados. Durante la importación, Willow cruzaba productos por SKU pero también detectaba problemas: SKUs que no coincidían, SKUs faltantes, duplicados. Generábamos reportes mostrando qué necesitaba atención y diseñamos flujos para ayudar a los usuarios a crear SKUs unificados.\n\nLa arquitectura multi-tenant reflejó las necesidades de las agencias. Múltiples usuarios por empresa, múltiples empresas por usuario, permisos granulares (Owner/Editor/Reader/Sin acceso) por sección, invitaciones por email.\n\nNo todo se priorizó igual. La integración con locales físicos y lectores de inventario quedó en el radar pero no era esencial para entrar al mercado.\n\nUna feature nos enseñó una lección importante. Construimos un dashboard de métricas personalizable porque creíamos que tendría valor. Los usuarios nos dijeron directamente que no lo estaban usando. Cortamos la inversión de inmediato. La lección: validar antes de construir, incluso cuando algo parece obvio  -  eso me quedó grabado.",
          execution:
            "Mi rol abarcó estrategia de producto, desarrollo front-end y coordinación cross-funcional.\n\nMi principal desafío era traducir complejidad técnica en interfaces simples. El sistema de reglas, los permisos multi-tenant, los procesos de sincronización asíncrona  -  técnicamente intrincados, pero los usuarios no tenían que sentir esa complejidad. Construí el front-end con ese principio como guía, validando flujos con prototipos antes de comprometer esfuerzo de ingeniería.\n\nLa validación era continua. Sesiones de feedback regulares con usuarios, prospectos y agencias moldeaban las prioridades semana a semana. El error del dashboard de métricas ocurrió porque saltamos la validación  -  asumimos valor en lugar de probarlo. Escuchar a los usuarios decir que no lo usaban hizo que depriorizarlo fuera una decisión fácil.\n\nAnte datos desorganizados en producción, nos adaptamos rápido. Construimos automatizaciones de detección y reportes de limpieza. Esa capacidad de respuesta  -  resolver problemas reales en lugar de seguir el roadmap rígidamente  -  se convirtió en nuestra forma de operar.\n\nCoordiné un equipo de desarrollo externo a través de reuniones semanales. Esa relación tuvo sus fricciones: brechas de velocidad, problemas de accountability. En retrospectiva, establecería contratos más claros, hitos explícitos y mayor seguimiento desde el inicio.\n\nTambién construí los sistemas operativos internos: planificación semanal, documentación, materiales de onboarding, plantillas para propuestas y reportes, procesos de ventas estandarizados. No es lo más glamoroso, pero es esencial para un equipo pequeño moviéndose rápido.\n\nTrabajé con diseñadores en la identidad de marca, con legales y contabilidad en la constitución de la empresa, y colaboré en todas las áreas del negocio como co-founder.\n\nPresentamos ante inversores. Nuestra estrategia de precios  -  por debajo de competidores para entrar al mercado, planes escalonados con pricing por usuario para expandir  -  fue cuestionada pero defendida con éxito. Ganamos un concurso de pitching en una universidad argentina. A pesar de la buena recepción, no cerramos la inversión que necesitábamos para escalar.",
          results:
            'Adquirimos clientes pagos, incluyendo un retailer cuyo catálogo de más de 4.000 SKUs migramos en un día. Construimos una plataforma funcional con usuarios reales y validamos demanda a través de conversaciones continuas. Ganamos un concurso de pitching universitario y presentamos ante inversores, defendiendo nuestro modelo aunque no cerramos financiamiento.\n\nDespués de 14 meses, cerramos. Factores que contribuyeron: la intensidad de capital para competir contra players establecidos, la imposibilidad de levantar funding, la divergencia en el nivel de compromiso entre co-founders, y los desafíos con el equipo externo de desarrollo.\n\nQué haría distinto:\n\nValidar más antes de construir. El dashboard de métricas parecía obvio  -  lo construimos sin suficiente señal de que los usuarios lo querían. Más conversaciones y experimentos más pequeños habrían ahorrado ese esfuerzo.\n\nScopear aún más chico. Fuimos iterativos, pero algunos releases podrían haber sido más acotados para obtener feedback más rápido.\n\nTratar los equipos externos como dependencias críticas. Contratos más claros y accountability estructurado habrían hecho saltar los problemas antes.\n\nTener conversaciones de alineación más temprano. Las brechas de compromiso entre co-founders solo afloraron al enfrentar una decisión importante. Empujaría por conversaciones explícitas sobre escenarios hipotéticos mucho antes.\n\nDefender el foco a rajatabla. Algunas features diluyeron la atención del valor core. Más disciplina alrededor del "todavía no" nos habría mantenido más afilados.',
        },
        {
          id: 2,
          image: "/marketplace.jpg",
          title: "Marketplace de Desarrollos Inmobiliarios de Lujo",
          summary:
            "Lideré la definición de producto para una plataforma de generación de leads inmobiliarios  -  transformando una visión ambigua en una especificación completa de proyecto que incluía requerimientos, arquitectura técnica, plan de analítica y roadmap de desarrollo.",
          problem:
            'Dos socios de negocio  -  uno dueño de una cadena retail importante en Argentina, el otro con una agencia inmobiliaria en Miami  -  querían construir una plataforma digital para capturar y calificar leads de desarrollos inmobiliarios de lujo en Miami, Punta del Este y Buenos Aires.\n\nSu modelo de negocio era claro: tenían muchos contactos con desarrolladores, pero necesitaban una forma escalable de atraer compradores potenciales, calificarlos antes de invertir tiempo de ventas, y convertir a los mejores prospectos en clientes. La plataforma mostraría desarrollos en curso, permitiría filtrar por ubicación, tipo de unidad, amenities y rango de precio, y llevaría a los visitantes interesados a un flujo de calificación antes de que ocurriera cualquier conversación humana.\n\nEl desafío no era la idea de negocio. Era que no tenían ninguna imagen clara de cómo debía verse o funcionar el producto. Sabían que querían "un marketplace para conseguir leads." Todo lo demás  -  flujos de usuario, features, requerimientos técnicos, proceso de calificación, integraciones  -  estaba indefinido. Eran ejecutivos ocupados con disponibilidad limitada para reuniones de alineación, pero cada detalle requería su input.',
          discovery:
            'Mi rol era tomar ese concepto en bruto y convertirlo en algo que un equipo de desarrollo pudiera construir  -  y eso significaba extraer claridad de stakeholders que no podían articular lo que querían.\n\nEl proceso de discovery se extendió aproximadamente seis semanas de reuniones semanales. No eran sesiones típicas de requerimientos donde el cliente te entrega una spec. Tuve que estructurar conversaciones para extraer su visión pieza por pieza. La técnica más efectiva fue pedir ejemplos: ¿qué plataformas existentes les gustaban? ¿Qué aspectos específicos les atraían? Reaccionar a referencias concretas era mucho más productivo que discutir features en abstracto. Documenté todo en Google Docs compartidos, construyendo una biblioteca de patrones y preferencias a la que podíamos volver.\n\nA través de esas conversaciones, el scope del producto fue tomando forma. El marketplace necesitaba soportar tres mercados (Miami, Buenos Aires, Punta del Este) con desarrollos filtrables por ubicación, barrio, precio, estado de construcción y amenities. Cada proyecto tendría una página detallada con renders, videos, planos, mapas y opciones de contacto. Los administradores necesitaban un back-office para crear y gestionar listings, controlar posicionamientos destacados y reordenar contenido manualmente.\n\nPero el marketplace era solo la puerta de entrada. El valor real estaba en la calificación de leads. Cuando un usuario expresaba interés, entraba a un flujo por WhatsApp potenciado por un bot de IA que hacía preguntas de pre-calificación  -  presupuesto, zona preferida, tipo de propiedad, plazo, etc. Los leads calificados recibirían una oferta para reservar una reunión; los no calificados serían manejados de otra forma. Cada interacción fluiría hacia un CRM con contexto completo, para que las conversaciones de ventas empezaran informadas.\n\nEsto implicaba integraciones con WhatsApp Business, un orquestador de workflows como n8n, un CRM (HubSpot o Pipedrive), reserva de calendario (Calendly) y servicios de mapas. Más infraestructura de analítica para medir el funnel completo desde la visita hasta el cierre.\n\nPara validar la dirección antes de cualquier desarrollo, construí prototipos rápidos con V0. Eso nos permitió testear ideas visualmente e iterar según las reacciones de los stakeholders. Después de cientos de iteraciones  -  ajustando layouts, flujos, interacciones  -  llegamos a una versión donde ambos socios dijeron "esto es lo que queremos."',
          solution:
            "Una vez que tuvimos alineación, traduje todo en documentación estructurada contra la cual el equipo pudiera ejecutar.\n\nPropuesta de desarrollo: Escribí la especificación completa del proyecto  -  scope funcional dividido por roles de usuario (visitante, usuario registrado, admin), requerimientos detallados de features, scope de UX/UI, proceso de QA, términos comerciales, timeline y proceso de gestión de cambios. Este documento se convirtió en el contrato que definía qué se construiría y qué quedaba explícitamente fuera de scope.\n\nArquitectura técnica: Junto con el desarrollador, definimos el stack y las decisiones de infraestructura, plasmándolo en un documento claro. Next.js para el front-end, NestJS para la capa de API, PostgreSQL para datos, S3 para almacenamiento de media, Docker para el deployment en un VPS. Cada decisión fue documentada con su justificación  -  balanceando velocidad de salida al mercado, mantenibilidad y costo. También scopeé qué quedaba deliberadamente fuera del MVP para mantener la complejidad y las expectativas bajo control.\n\nPlan de analítica: Diseñé el framework de medición  -  definiendo el funnel de conversión desde la visita, pasando por la calificación del lead, la asistencia a la reunión y el resultado final. Especifiqué qué eventos trackear, cómo fluirían a GA4, qué pixels de publicidad conectar, y cómo los datos del CRM y el calendario retroalimentarían la analítica. El entregable incluía un protocolo de testing y documentación para el equipo de marketing del cliente.\n\nRoadmap de desarrollo: Estructuré el backlog en Jira con epics que cubrían la experiencia del marketplace, los flujos de captura de leads, el sistema de calificación por IA, la integración con el CRM, la funcionalidad de calendario y la administración del back-office. Cada epic se desglosó en user stories con criterios de aceptación suficientemente detallados para que el desarrollador pudiera trabajar de forma independiente.\n\nScope de servicios adicionales: También documenté add-ons opcionales fuera del MVP core  -  analítica expandida, integraciones adicionales, soporte para migración de contenido  -  con precios separados, para que el cliente entendiera qué estaba incluido y qué requeriría inversión adicional.\n\nEl equipo era pequeño: un desarrollador, un diseñador, los dos stakeholders, yo, y otra persona de soporte. Con recursos limitados y stakeholders de disponibilidad impredecible, la documentación exhaustiva era esencial. Cada especificación tenía que poder sostenerse sola.",
          execution:
            "Para cuando me retiré del proyecto en diciembre de 2025, había entregado la definición de producto completa: prototipos validados, propuesta de desarrollo, arquitectura técnica, plan de analítica y un backlog estructurado en Jira. El desarrollo backend había comenzado sobre la base de mis especificaciones. El proyecto continuó hacia su lanzamiento de MVP previsto para principios de 2026.\n\nMe alejé porque el engagement requería un nivel de flexibilidad ante cambios de scope y disponibilidad de stakeholders que no era sostenible junto a mis otros compromisos. Reconocer eso y salir de forma ordenada  -  con documentación exhaustiva para que el proyecto pudiera continuar  -  fue la decisión correcta.",
          results:
            'Lo que me llevé de esta experiencia:\n\nLa estructura extrae claridad de la ambigüedad. Cuando los stakeholders no pueden articular lo que quieren, pedir ejemplos y referencias funciona mejor que pedir requerimientos. La gente reacciona a opciones concretas con mucha más facilidad de lo que genera especificaciones abstractas.\n\nProtoipá antes de especificar. Construir prototipos visuales rápidos ahorró semanas de potencial desalineación. Iterar sobre un prototipo en V0 es mucho más barato que reescribir un backlog en Jira  -  o peor, código en producción.\n\nLa documentación es un entregable, no un overhead. La propuesta, el documento de arquitectura y el plan de analítica no eran solo artefactos internos  -  eran el resultado de mi trabajo. Con un equipo pequeño y stakeholders ocupados, esos documentos habilitaban la ejecución sin que yo tuviera que estar en cada conversación.\n\nScopea el sistema completo, no solo la interfaz. Lo que parecía "un marketplace" era en realidad un motor de calificación de leads con integración de CRM, workflows de IA, infraestructura de analítica y herramientas de administración. Mapear el sistema completo desde el inicio evitó sorpresas más adelante.\n\nSaber cuándo dar un paso al costado. El proyecto era viable, pero la dinámica del engagement no era sostenible para mí. Salir de forma profesional  -  con todo documentado y transferido  -  preservó las relaciones y permitió que el trabajo continuara.',
        },
        {
          id: 3,
          image: "/nft.jpg",
          title: "Trape",
          summary:
            "Definí por completo una plataforma P2P de intercambio de NFTs  -  del análisis de mercado a la arquitectura técnica  -  y con esa claridad, decidí no construirla.",
          problem:
            'Todo empezó con un problema propio: quería intercambiar un NFT directamente por otro, y no había forma segura de hacerlo.\n\nPara entender por qué esto es difícil, un poco de contexto. Los NFTs son activos digitales únicos almacenados en una blockchain  -  se pueden pensar como objetos de colección, pero digitales y verificables. A diferencia de la moneda común, no se puede simplemente "intercambiar" dos NFTs en una sola acción. Cada transferencia es una transacción separada. Eso crea un problema de confianza: si mando mi NFT primero, podrían simplemente no mandarme el suyo. No hay botón de deshacer en una blockchain.\n\nLas opciones disponibles eran todas malas. Podía vender mi NFT por criptomonedas y usarlas para comprar el NFT del otro  -  pero eso introduce riesgo de fluctuación de precio, comisiones de plataforma y requiere que ambos coordinemos el timing. O podía intentar coordinar el intercambio por mensajes directos, lo que significaba confiar en que un desconocido enviara su activo primero (riesgoso), o encontrar un intermediario de confianza en alguna comunidad  -  típicamente un moderador  -  para que retuviera ambos activos y ejecutara el swap (lento y tedioso). De cualquier forma, lo que debería ser un intercambio simple se convertía en un proceso manual y lento, dependiente de la disponibilidad y buena voluntad de otras personas.\n\nNo era solo mi problema. Soy parte de varias comunidades de NFTs, y seguía viendo el mismo patrón: gente queriendo intercambiar, pidiendo a moderadores que intermediaran, esperando que alguien de confianza estuviera online. La fricción era evidente, y parecía algo que una plataforma podía resolver.\n\nLas plataformas grandes lo habían intentado. OpenSea, el marketplace de NFTs más grande, lanzó una feature llamada Deals que permitía swaps directos. Pero la discontinuaron en una actualización de 2024  -  citando uso insuficiente para justificar el mantenimiento. Otras plataformas dedicadas a swaps habían surgido a lo largo de los años, pero o cerraron, o fueron hackeadas, o cayeron en irrelevancia. Hasta donde pude encontrar, ninguna seguía operando activamente.\n\nEl mercado había abandonado los swaps directos de NFTs. Pero la necesidad no había desaparecido.',
          marketAnalysis:
            "Antes de diseñar nada, investigué por qué las soluciones en este espacio seguían fallando.\n\nAnalicé cada plataforma que había intentado swaps P2P de NFTs: qué ofrecían, qué les pasó y qué podía aprender de su trayectoria.\n\nEl patrón era consistente. Las plataformas o abandonaban la feature porque el uso era demasiado bajo para justificar el costo de mantenimiento, o eran comprometidas por vulnerabilidades de seguridad que hacían que los usuarios perdieran sus activos. OpenSea tenía los datos  -  millones de usuarios  -  y decidió que la feature no valía la pena mantener. Otras plataformas dedicadas sufrieron exploits que drenaron activos de usuarios y destruyeron la confianza de un día para el otro. El resto simplemente dejó de operar con el tiempo. Para cuando hice esta investigación, no podía encontrar una sola plataforma confiable y activa que ofreciera swaps directos de NFTs.\n\nEste análisis me dijo varias cosas. Primero, había un gap genuino: no existía ninguna plataforma activa para swaps directos que pudiera manejar NFTs más tokens en una sola transacción. Segundo, el espacio tenía riesgos reales  -  los fallos de seguridad no son recuperables cuando estás manejando activos de otras personas. Tercero, el tamaño del mercado era incierto. Mi frustración personal era real, la demanda de la comunidad que había observado era real, pero la decisión de OpenSea sugería que incluso entre millones de usuarios de NFTs, el subconjunto que quería swaps directos podría ser demasiado pequeño para construir un producto sostenible.\n\nLa oportunidad existía, pero venía con señales de alerta importantes.",
          productSpecification:
            'Decidí desglosar el producto por completo antes de escribir una sola línea de código  -  tratando la especificación en sí misma como una forma de pensar si esto valía la pena construir.\n\nEl concepto era directo: una plataforma donde una persona crea una oferta ("te doy este NFT más estos tokens por ese NFT"), se la envía a una contraparte específica, y si la acepta, el swap se ejecuta automáticamente  -  ambos lados del intercambio ocurren juntos, así que o el intercambio completo se completa o no pasa nada. Sin necesidad de confianza, sin intermediario reteniendo activos.\n\nDocumenté todo lo que necesitaría para construirlo yo mismo.\n\nPara el producto, definí el scope del MVP explícitamente: qué estaba incluido (crear, aceptar y cancelar ofertas; expiración automática; seguimiento claro de estado) y qué quedaba deliberadamente excluido (subastas, listings públicos, sistemas de reputación). Planeé fees mínimos  -  solo suficientes para cubrir costos de hosting e infraestructura, no como modelo de revenue. Mantener la primera versión enfocada me permitiría validar si alguien realmente lo usaba antes de invertir en complejidad.\n\nMapeé los flujos de usuario de punta a punta: cómo alguien conectaría su wallet, seleccionaría activos, crearía una oferta, la compartiría con una contraparte, y qué vería esa contraparte al revisar y aceptar. Especifiqué los estados en los que podía estar una oferta (activa, aceptada, cancelada, expirada) y escribí los mensajes para cada escenario  -  confirmaciones de éxito, explicaciones de errores, casos borde.\n\nPara el lado técnico, tomé decisiones de arquitectura: lanzar primero en Abstract (una red más nueva con menor fricción y buenas herramientas para desarrolladores), qué tecnologías usar para el front-end, y cómo deberían estructurarse los smart contracts. Documenté patrones de seguridad esenciales  -  formas de prevenir vulnerabilidades comunes que habían afectado a otras plataformas.\n\nTambién creé una identidad de marca completa. El nombre Trape (una fusión de "trade" con un sonido distintivo), un sistema visual con colores y tipografía, lineamientos de mensajería, e incluso una nota de pronunciación ya que el nombre no es obvio. Puede parecer prematuro para algo que no se construyó, pero quería ver si podía visualizar el producto como algo real y coherente.\n\nFinalmente, definí criterios de éxito (qué métricas indicarían que el MVP estaba funcionando) y definí un roadmap de cómo el producto podría evolucionar en múltiples fases si ganaba tracción.\n\nEl ejercicio fue valioso en sí mismo. Para cuando terminé, tenía un blueprint completo contra el cual construir  -  y una imagen mucho más clara de lo que hacerlo realmente requeriría.',
          buildDecision:
            'Con el desgloce completo, tenía que decidir: ¿lo construyo?\n\nDecidí que no  -  por razones que se volvieron claras a través del proceso de especificar el producto.\n\nEl problema fundamental era el riesgo de seguridad. El núcleo de este producto es un smart contract que retiene los activos de los usuarios durante un swap. Si hay una vulnerabilidad en ese contrato, los usuarios pierden sus NFTs. Esto no es teórico  -  es exactamente lo que le había pasado a otras plataformas en el espacio. A diferencia de un bug en un sitio web que podés parchear y por el que podés disculparte, un exploit de smart contract en una blockchain pública es frecuentemente permanente e irreversible.\n\nPlaneaba construir esto yo mismo usando herramientas de coding asistido por IA  - "vibe coding." Soy capaz de construir el front-end, la interfaz de usuario, los flujos. Pero escribir smart contracts seguros que manejen activos valiosos requiere una expertise profunda que no tengo. Los asistentes de IA pueden generar código Solidity que parece correcto, pero "parece correcto" no es suficiente cuando los coleccionables valiosos de alguien están en juego. Las vulnerabilidades sutiles son exactamente lo que los auditores experimentados cobran por encontrar, y las herramientas de IA pueden introducirlas tan fácilmente como pueden escribir código funcional.\n\nConsideré alternativas. Podía pagar por una auditoría de seguridad profesional antes de lanzar. Pero las auditorías cuestan dinero real  -  frecuentemente miles de dólares  -  para un proyecto personal que podría tener una base de usuarios pequeña. Los fees que había planeado eran solo para cubrir costos de infraestructura, no para financiar una inversión inicial significativa. La economía no cerraba.\n\nTambién estaba la señal del mercado a considerar. OpenSea no es una operación pequeña  -  tienen datos de millones de usuarios y equipos de producto profesionales. Concluyeron que los swaps directos no valían la pena mantener. Mi frustración personal con el problema era genuina, la necesidad de la comunidad que había observado era genuina, pero tenía que ser honesto: eso podría seguir representando un nicho demasiado pequeño.\n\nY había una dimensión personal. Si lanzaba un producto con una vulnerabilidad y alguien perdía sus activos, eso iba a caer sobre mí. El riesgo reputacional y el peso ético de potencialmente causar daño a usuarios no era algo que podía tomar a la ligera, especialmente para un proyecto que estaba construyendo principalmente para mí y otros como yo.\n\nLa decisión responsable era parar. Prefiero tener una especificación completa guardada en una carpeta que un producto en vivo que pone a los usuarios en riesgo.',
          learnings:
            "Documentar antes de construir es una herramienta de pensamiento, no solo de ejecución. El proceso de diseñar Trape por completo  -  desde el análisis de mercado hasta la arquitectura técnica  -  me forzó a enfrentar preguntas que podría haber pasado por alto si hubiera saltado directo al código. Para cuando terminé, la decisión de no construir era clara. La documentación había cumplido su función aunque no se escribiera ningún código.\n\nSaber cuándo no construir es una habilidad de producto. Existe un sesgo hacia la acción  -  lanzar rápido, aprender haciendo, iterar. Eso funciona para muchos productos. Pero algunos productos tienen perfiles de riesgo donde lanzar prematuramente puede causar daño real. Reconocer en qué categoría estás, y tener la disciplina de parar cuando los riesgos superan tu capacidad de manejarlos, es algo subvalorado.\n\nEl dolor de la comunidad no es validación automática de mercado. Genuinamente quería que Trape existiera. Yo lo usaría. Gente en mis comunidades lo usaría. Pero la frustración personal puede hacer que un problema parezca más grande de lo que es. La decisión de OpenSea de discontinuar su feature de swaps fue un dato que tuve que tomar en serio  -  ellos sabían algo sobre el comportamiento real de los usuarios a escala que mi experiencia personal no podía decirme.\n\nLas restricciones de seguridad cambian el juego. En el desarrollo web típico, el peor caso suele ser un bug que molesta a los usuarios o causa algo de downtime. En el desarrollo de smart contracts que manejan activos, el peor caso es que la gente pierda dinero sin vuelta atrás. Esa asimetría importa. Ser honesto sobre si tus habilidades y recursos están a la altura del perfil de riesgo de tu producto es esencial  -  especialmente cuando construís solo con herramientas de IA.\n\nEl trabajo no se pierde. La especificación existe. Si las circunstancias cambian  -  si las herramientas de smart contracts se vuelven lo suficientemente confiables como para fiarme del desarrollo asistido por IA en código crítico de seguridad, o si encuentro un colaborador con la expertise correcta  -  tengo un blueprint completo listo para ejecutar. Y de todas formas, el pensamiento que hice se transfiere a otros productos y problemas.",
        },
      ],
      labels: {
        problem: "Problema",
        discovery: "Discovery",
        solution: "Solución",
        execution: "Ejecución",
        results: "Resultados",
        marketAnalysis: "Análisis de mercado",
        productSpecification: "Especificación de producto",
        buildDecision: "Decisión final",
        learnings: "Aprendizajes",
        hypothesis: "Hipótesis",
        proposal: "Propuesta",
        metrics: "Métricas",
        readMore: "Leer Más",
        close: "Cerrar",
      },
    },

    // Key Decisions & Trade-offs Section
    impact: {
      title: "La lógica detrás de las decisiones",
      decisions: [
        {
          title: "Estructura para decidir, no para frenar",
          description:
            "Ante la incertidumbre, no esperé tener todas las respuestas. Construí frameworks y árboles de decisión para avanzar con criterio  -  y los ajusté cuando la realidad los desafió.",
          tradeoff:
            "Avanzar sin certeza implica asumir riesgos. Pero quedarse quieto esperando información perfecta tiene un costo mayor.",
        },
        {
          title: "Un prototipo vale más que mil reuniones",
          description:
            "Las personas rara vez saben lo que necesitan hasta que tienen algo concreto frente a ellas. Usé mockups rápidos para hacer visible lo invisible  -  y descubrir los requisitos reales antes de comprometer tiempo y recursos.",
          tradeoff: "Más trabajo al inicio. Menos sorpresas al final.",
        },
        {
          title: "Documentación como alineación, no como burocracia",
          description:
            "Arquitectura técnica completa, planes de analytics y backlogs estructurados antes de escribir una sola línea de código. No porque el proceso lo exija  -  sino porque la ambigüedad se multiplica cuando cada uno trabaja desde una versión distinta de la verdad.",
          tradeoff: "Arranques más lentos. Todo lo demás, más rápido.",
        },
        {
          title: "A veces, la mejor decisión de producto es no construir",
          description:
            "En Trape, tras un análisis profundo identifiqué vulnerabilidades de seguridad sin solución viable. La conclusión fue clara: no había producto que valiera la pena lanzar en esas condiciones. Decidí no construirlo.",
          tradeoff:
            "Sin producto lanzado. Pero proteger a los usuarios finales siempre va a pesar más que cumplir un milestone.",
        },
      ],
    },

    // Background Section
    background: {
      title: "Experiencia",
      philosophy: {
        title: "Mi Filosofía de Producto",
        beliefs: [
          "El problema primero, las soluciones después  -  primero hay que entender el problema real.",
          "Ejecutar enseña más que planificar  -  un prototipo que funciona vale más que un documento perfecto.",
          "Decir que no también es decidir  -  el foco no aparece solo, hay que elegirlo.",
        ],
      },
      experience: [
        {
          role: "Co-Founder & Product Lead",
          company: "Willow",
          description:
            "Willow nació de un problema real: los retailers que venden en múltiples canales pierden horas gestionando inventario, datos de productos y precios a mano, en plataformas que no se hablan entre sí. Tuve a cargo el discovery, la priorización, el desarrollo front-end y el GTM. Me senté con usuarios reales a desenredar flujos de trabajo más complicados de lo esperado, construí un sistema de sincronización configurable que tenía que manejar datos limpios y datos sucios con igual eficiencia, y mantuve alineado a un equipo de desarrollo externo semana a semana. Llegamos a clientes que pagaban y cerramos a los 14 meses - el caso de estudio cubre qué construimos, qué funcionó y qué haría distinto.",
        },
        {
          role: "Digital Marketing & Sales Diligence Analyst",
          company: "CRISIL",
          description:
            "Trabajé con un equipo de un private equity de Nueva York, analizando compañías portfolio y potenciales adquisiciones. El trabajo era convertir datos digitales dispersos  -  tráfico, share of voice, señales de demanda  -  en una imagen clara de dónde estaba cada empresa frente a sus competidores. Cada output terminaba como un entregable listo para stakeholders: conciso, con punto de vista propio, y pensado para personas que toman decisiones de inversión, no para quienes quieren excavar planillas ellos mismos.",
        },
        {
          role: "Co-Founder & Growth Lead",
          company: "Vellicity",
          description:
            "Armé una agencia de growth para pymes en Australia junto a un co-founder. Gestioné cuentas de clientes de punta a punta  -  desde la primera llamada hasta las revisiones de performance  -  mientras construía los sistemas que mantenían la entrega consistente a medida que escalábamos: flujos de onboarding, templates, procesos de delivery. Interfuncional desde el día uno  -  clientes y diseñadores todo en simultáneo.",
        },
        {
          role: "Marketing Analyst",
          company: "Agencia Empuje",
          description:
            "Mi primer trabajo en agencia, llevando varias cuentas de e-commerce en paralelo. Paid media, CRO, análisis competitivo  -  pero lo que más me quedó fue aprender a traducir lo que un cliente dice que quiere en algo que un equipo puede realmente ejecutar. Mirando atrás, estaba operando como PM antes de saber que era eso lo que quería hacer.",
        },
      ],
    },

    // Contact Section
    contact: {
      title: "Hablemos",
      message:
        "Abierto a roles de PM, growth y estrategia - sobre todo en equipos que actúan rápido y piensan en grande.",
      linkedin: "https://www.linkedin.com/in/pedro-pla1/",
      email: "plapedro@outlook.com",
      emailModal: {
        title: "Contacto",
        copied: "¡Copiado!",
        copyAddress: "Copiar dirección",
        openMailApp: "Abrir app de correo",
        close: "Cerrar",
      },
    },

    // Footer
    footer: {
      copyright: `© ${new Date().getFullYear()} Pedro Pla. Todos los derechos reservados.`,
      social: {
        linkedin: "https://www.linkedin.com/in/pedro-pla1/",
        email: "plapedro@outlook.com",
      },
    },
  },
};

export type Language = "en" | "es";
export type Content = typeof content.en;
