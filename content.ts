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
          image: "/case1.jpg",
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
          image: "/case2.jpg",
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
          image: "/case3.jpg",
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
            "Built a growth agency for SMBs in Australia with a co-founder, fully remote from Argentina. Managed client accounts end-to-end  -  from the first call through performance reviews  -  while building the systems that kept delivery consistent as we scaled: onboarding flows, templates, delivery processes. Cross-functional from day one  -  clients, designers, and developers all in the mix simultaneously.",
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
      name: "[TU_NOMBRE]",
      links: [
        { label: "Casos de Producto", href: "#cases" },
        { label: "Impacto", href: "#impact" },
        { label: "Experiencia", href: "#background" },
        { label: "Contacto", href: "#contact" },
      ],
    },

    // Hero Section
    hero: {
      name: "[TU_NOMBRE_COMPLETO]",
      headline: "[TU_TITULAR]",
      subtitle: "[TU_SUBTITULO]",
      cta: {
        primary: "Ver Mi Trabajo",
        secondary: "Hablemos",
      },
    },

    // Product Cases Section
    cases: {
      title: "Pensamiento de Producto",
      items: [
        {
          id: 1,
          image: "/case1.jpg",
          title: "[CASO_1_TITULO]",
          summary: "[CASO_1_RESUMEN]",
          problem: "[CASO_1_PROBLEMA]",
          discovery: "[CASO_1_DESCUBRIMIENTO]",
          hypothesis: "[CASO_1_HIPOTESIS]",
          solution: "[CASO_1_SOLUCION]",
          execution: "[CASO_1_EJECUCION]",
          results: "[CASO_1_RESULTADOS]",
          proposal: "[CASO_1_PROPUESTA]",
          metrics: "[CASO_1_METRICAS]",
        },
        {
          id: 2,
          image: "/case2.jpg",
          title: "[CASO_2_TITULO]",
          summary: "[CASO_2_RESUMEN]",
          problem: "[CASO_2_PROBLEMA]",
          hypothesis: "[CASO_2_HIPOTESIS]",
          proposal: "[CASO_2_PROPUESTA]",
          metrics: "[CASO_2_METRICAS]",
        },
        {
          id: 3,
          image: "/case3.jpg",
          title: "[CASO_3_TITULO]",
          summary: "[CASO_3_RESUMEN]",
          problem: "[CASO_3_PROBLEMA]",
          hypothesis: "[CASO_3_HIPOTESIS]",
          proposal: "[CASO_3_PROPUESTA]",
          metrics: "[CASO_3_METRICAS]",
        },
      ],
      labels: {
        problem: "Problema",
        hypothesis: "Hipótesis",
        proposal: "Propuesta",
        metrics: "Métricas",
        readMore: "Leer Más",
        close: "Cerrar",
      },
    },

    // Key Decisions & Trade-offs Section
    impact: {
      title: "Decisiones Clave y Compromisos",
      decisions: [
        {
          title: "[DECISION_1_TITULO]",
          description: "[DECISION_1_DESCRIPCION]",
          tradeoff: "[TRADEOFF_1]",
        },
        {
          title: "[DECISION_2_TITULO]",
          description: "[DECISION_2_DESCRIPCION]",
          tradeoff: "[TRADEOFF_2]",
        },
        {
          title: "[DECISION_3_TITULO]",
          description: "[DECISION_3_DESCRIPCION]",
          tradeoff: "[TRADEOFF_3]",
        },
        {
          title: "[DECISION_4_TITULO]",
          description: "[DECISION_4_DESCRIPCION]",
          tradeoff: "[TRADEOFF_4]",
        },
      ],
    },

    // Background Section
    background: {
      title: "Experiencia",
      philosophy: {
        title: "Mi Filosofía de Producto",
        beliefs: ["[CREENCIA_1]", "[CREENCIA_2]", "[CREENCIA_3]"],
      },
      experience: [
        {
          role: "[PUESTO_1]",
          company: "[EMPRESA_1]",
          description: "[DESCRIPCION_1]",
        },
        {
          role: "[PUESTO_2]",
          company: "[EMPRESA_2]",
          description: "[DESCRIPCION_2]",
        },
        {
          role: "[PUESTO_3]",
          company: "[EMPRESA_3]",
          description: "[DESCRIPCION_3]",
        },
        {
          role: "[PUESTO_4]",
          company: "[EMPRESA_4]",
          description: "[DESCRIPCION_4]",
        },
      ],
    },

    // Contact Section
    contact: {
      title: "Hablemos",
      message: "[MENSAJE_CONTACTO]",
      linkedin: "[URL_LINKEDIN]",
      email: "[CORREO]",
    },

    // Footer
    footer: {
      copyright: `© ${new Date().getFullYear()} [TU_NOMBRE]. Todos los derechos reservados.`,
      social: {
        linkedin: "[URL_LINKEDIN]",
        email: "[CORREO]",
      },
    },
  },
};

export type Language = "en" | "es";
export type Content = typeof content.en;
