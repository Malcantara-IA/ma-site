export type PracticeArea = {
  slug: string;
  shortTitle: string;
  eyebrow: string;
  title: string;
  lead: string;
  cardText: string;
  audience: string[];
  signals: string[];
  services: { title: string; text: string }[];
  outcomes: string[];
  closingTitle: string;
  closingText: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "empresas-familiares",
    shortTitle: "Empresas familiares",
    eyebrow: "Governança e continuidade",
    title: "A empresa cresceu. As regras precisam crescer com ela.",
    lead:
      "Estruturamos as relações entre família, patrimônio e negócio para reduzir conflitos, profissionalizar decisões e preparar a continuidade empresarial.",
    cardText:
      "Governança, acordos societários e regras claras para proteger o negócio sem romper os vínculos.",
    audience: [
      "Empresas familiares em fase de crescimento ou profissionalização",
      "Famílias com mais de uma geração na gestão ou no capital",
      "Sócios que precisam organizar papéis, decisões e saída",
    ],
    signals: [
      "Decisões relevantes dependem de conversas informais",
      "Papéis de familiares e executivos estão sobrepostos",
      "A próxima geração não sabe como ingressará no negócio",
      "Conflitos familiares começam a contaminar a operação",
    ],
    services: [
      {
        title: "Diagnóstico de governança",
        text: "Mapeamento de pessoas, poderes, riscos e lacunas decisórias.",
      },
      {
        title: "Acordos e protocolo familiar",
        text: "Regras sobre voto, gestão, liquidez, ingresso, saída e resolução de conflitos.",
      },
      {
        title: "Conselhos e políticas",
        text: "Estruturação de fóruns, alçadas e rotinas de acompanhamento.",
      },
    ],
    outcomes: [
      "Papéis e responsabilidades definidos",
      "Decisões menos personalizadas e mais previsíveis",
      "Sucessão tratada como processo, não como evento",
      "Proteção simultânea dos vínculos e do negócio",
    ],
    closingTitle: "A harmonia não substitui regras. Boas regras ajudam a preservá-la.",
    closingText:
      "O diagnóstico identifica onde a família empresária está vulnerável e qual estrutura faz sentido para sua realidade.",
  },
  {
    slug: "contratos-empresariais",
    shortTitle: "Contratos empresariais",
    eyebrow: "Operação e negociação",
    title: "Um bom contrato não engessa o negócio. Ele sustenta a operação.",
    lead:
      "Construímos e negociamos contratos que distribuem riscos com clareza, protegem margem e reduzem surpresas na execução.",
    cardText:
      "Estruturação, negociação e gestão de contratos alinhadas à operação real da empresa.",
    audience: [
      "Empresas com contratos de alto impacto financeiro ou operacional",
      "Negócios em expansão, parceria, distribuição ou fornecimento",
      "Gestores que precisam padronizar a contratação sem perder controle",
    ],
    signals: [
      "O contrato só é consultado quando o problema já surgiu",
      "Obrigações comerciais e jurídicas não conversam",
      "Garantias, reajustes ou hipóteses de saída estão desequilibrados",
      "Minutas diferentes geram riscos que ninguém acompanha",
    ],
    services: [
      {
        title: "Arquitetura contratual",
        text: "Desenho da relação, matriz de risco e instrumentos adequados ao negócio.",
      },
      {
        title: "Negociação estratégica",
        text: "Apoio jurídico orientado por prioridades econômicas e operacionais.",
      },
      {
        title: "Governança de contratos",
        text: "Padrões, fluxos, alçadas e acompanhamento do ciclo contratual.",
      },
    ],
    outcomes: [
      "Responsabilidades e consequências compreensíveis",
      "Menor exposição a inadimplemento e litígio",
      "Contratos coerentes com a rotina da operação",
      "Mais controle sobre prazo, garantia e margem",
    ],
    closingTitle: "Contrato forte é o que funciona quando a relação é testada.",
    closingText:
      "O MA revisa a operação antes da cláusula para que o documento proteja o negócio que realmente existe.",
  },
  {
    slug: "tributario-reforma-tributaria",
    shortTitle: "Tributário e reforma",
    eyebrow: "Tributação, transição e eficiência",
    title: "Reforma tributária não é só troca de imposto. É mudança de operação.",
    lead:
      "Atuamos na adaptação empresarial ao IBS, à CBS e ao Imposto Seletivo, conectando tributação, contratos, preços, créditos, sistemas e fluxo de caixa, além do consultivo e do contencioso tributário.",
    cardText:
      "Diagnóstico e implementação da reforma tributária, planejamento, contratos e gestão de passivos fiscais.",
    audience: [
      "Empresas que precisam adaptar sistemas, documentos fiscais, contratos e formação de preços",
      "Grupos empresariais e famílias que avaliam reorganizações societárias ou patrimoniais",
      "Produtores, agroindústrias e negócios expostos a regimes específicos, créditos e benefícios fiscais",
    ],
    signals: [
      "Os sistemas e documentos fiscais ainda não foram adequados ao IBS e à CBS",
      "Os contratos não distribuem os efeitos de mudanças tributárias sobre preço, margem e créditos",
      "A empresa não simulou o impacto da transição na cadeia, no caixa e no destino das operações",
      "Benefícios, passivos ou escolhas de regime são tratados sem uma estratégia integrada",
    ],
    services: [
      {
        title: "Implementação da reforma",
        text: "Diagnóstico de impactos, plano de transição, revisão de processos, documentos fiscais, contratos, preços e créditos.",
      },
      {
        title: "Planejamento tributário",
        text: "Análise de operações, reorganizações e alternativas lícitas alinhadas à realidade econômica do negócio.",
      },
      {
        title: "Passivo e contencioso",
        text: "Defesas, regularização, transação tributária e estratégia para contingências fiscais relevantes.",
      },
    ],
    outcomes: [
      "Mapa dos impactos tributários por operação e cadeia",
      "Contratos, preços e processos alinhados à transição",
      "Governança para obrigações, créditos e decisões fiscais",
      "Passivos tratados com estratégia e visão de caixa",
    ],
    closingTitle: "Esperar a perda de margem ou a rejeição da nota é um jeito caro de começar a transição.",
    closingText:
      "Em 2026, a adequação já alcança documentos e sistemas, enquanto as decisões contratuais e econômicas projetam efeitos durante toda a transição. O diagnóstico define prioridades, responsáveis e cronograma.",
  },
  {
    slug: "agronegocio",
    shortTitle: "Agronegócio",
    eyebrow: "Crédito, operação e patrimônio rural",
    title: "No agro, risco jurídico também tem safra, clima e fluxo de caixa.",
    lead:
      "Atuamos com produtores, grupos familiares e empresas do agronegócio em contratos, crédito, garantias, reorganização e prevenção de crises.",
    cardText:
      "Soluções jurídicas conectadas ao ciclo produtivo, ao crédito rural e à realidade patrimonial do produtor.",
    audience: [
      "Produtores rurais e famílias com atividade empresarial no campo",
      "Agroindústrias, revendas, fornecedores e grupos econômicos",
      "Negócios expostos a crédito, garantias e oscilação de ciclo",
    ],
    signals: [
      "A dívida vence antes de o caixa da safra se realizar",
      "Garantias alcançam patrimônio além da operação financiada",
      "CPRs, barter ou contratos de fornecimento se sobrepõem",
      "Patrimônio familiar e risco empresarial estão misturados",
    ],
    services: [
      {
        title: "Contratos do agro",
        text: "CPR, barter, compra e venda, fornecimento, integração e parcerias.",
      },
      {
        title: "Crédito e garantias",
        text: "Análise de custo, cobertura, vencimento, renegociação e exposição patrimonial.",
      },
      {
        title: "Estrutura e compliance",
        text: "Organização societária, sucessória e contratual conectada à atividade rural.",
      },
    ],
    outcomes: [
      "Obrigações compatíveis com o ciclo produtivo",
      "Visibilidade sobre garantias e patrimônio exposto",
      "Melhor posição para negociar com credores e parceiros",
      "Continuidade do negócio rural entre gerações",
    ],
    closingTitle: "A operação rural não cabe em uma minuta genérica.",
    closingText:
      "O diagnóstico considera produção, fluxo, estrutura familiar e contratos para definir prioridades reais.",
  },
  {
    slug: "reestruturacao-de-dividas",
    shortTitle: "Reestruturação de dívidas",
    eyebrow: "Insolvência, negociação e continuidade",
    title: "Reestruturação de dívidas e continuidade empresarial.",
    lead: "Direito da insolvência, negociação com credores e transação tributária. Contratos, garantias e capacidade de pagamento na mesma análise.",
    cardText: "Direito da insolvência, reestruturação de dívidas e transação tributária para a continuidade empresarial.",
    audience: ["PMEs e famílias empresárias com pressão sobre o caixa"],
    signals: ["Parcelas bancárias comprimem o capital de giro"],
    services: [
      {title: "Reestruturação de dívidas", text: "Análise do passivo e negociação com bancos e fornecedores."},
      {title: "Direito da insolvência", text: "Negociação, mediação e procedimentos recuperacionais conforme cada situação."},
      {title: "Transação tributária", text: "Análise do passivo fiscal e das modalidades disponíveis."},
    ],
    outcomes: ["Visão integrada das dívidas, garantias e capacidade de pagamento"],
    closingTitle: "Uma conversa inicial para compreender a situação.",
    closingText: "A ferramenta acompanha o diagnóstico.",
  },
  {
    slug: "sucessao-patrimonial",
    shortTitle: "Sucessão patrimonial",
    eyebrow: "Patrimônio e legado",
    title: "Planejar a sucessão é organizar decisões enquanto elas ainda podem ser escolhidas.",
    lead:
      "Integramos patrimônio, família, empresa e tributação para construir uma transição segura, compreensível e compatível com a vontade de quem formou o legado.",
    cardText:
      "Planejamento sucessório conectado à governança, à proteção patrimonial e à continuidade empresarial.",
    audience: [
      "Famílias com patrimônio empresarial, rural ou imobiliário",
      "Fundadores que desejam preparar a transição em vida",
      "Herdeiros e sócios diante de inventário ou reorganização patrimonial",
    ],
    signals: [
      "O patrimônio cresceu sem uma visão consolidada",
      "A família evita conversar sobre sucessão",
      "Sociedades e imóveis não refletem a realidade atual",
      "Há risco de conflito, inventário complexo ou perda de continuidade",
    ],
    services: [
      {
        title: "Diagnóstico patrimonial",
        text: "Levantamento de bens, sociedades, regimes, riscos e objetivos familiares.",
      },
      {
        title: "Planejamento sucessório",
        text: "Testamentos, doações, acordos, holdings quando adequadas e regras de governança.",
      },
      {
        title: "Inventários e regularização",
        text: "Condução judicial ou extrajudicial e organização registral dos bens.",
      },
    ],
    outcomes: [
      "Estrutura compreensível para a família",
      "Redução de incerteza e conflito",
      "Continuidade do controle e da atividade empresarial",
      "Decisões documentadas e juridicamente sustentáveis",
    ],
    closingTitle: "Holding não é plano. Plano é o conjunto de decisões que protege o legado.",
    closingText:
      "A estrutura só vem depois do diagnóstico da família, do patrimônio e dos objetivos.",
  },
];

