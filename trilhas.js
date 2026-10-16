/* =====================================================================
   Trilhas: uma por concurso/cargo. Cada trilha referencia módulos da
   biblioteca (pasta conteudo/) e define fase, horas e nota mínima.
   Base: últimos editais publicados. Situação conferida em 16/10/2026.
   ===================================================================== */
(function () {
  const PROVAS_PRF = [
    { t: "PRF 2021 · Policial Rodoviário Federal (Cebraspe)", d: "120 itens certo/errado. Use o gabarito definitivo.", links: [["Prova", "https://cdn.cebraspe.org.br/concursos/prf_21/arquivos/578_PRF_001_01.PDF"], ["Gabarito", "https://cdn.cebraspe.org.br/concursos/prf_21/arquivos/GAB_DEFINITIVO_578_PRF_001_01.PDF"], ["Inglês", "https://cdn.cebraspe.org.br/concursos/prf_21/arquivos/578_PRF_ING_01.PDF"], ["Gab. Inglês", "https://cdn.cebraspe.org.br/concursos/prf_21/arquivos/GAB_DEFINITIVO_578_PRF_ING_01.PDF"], ["Espanhol", "https://cdn.cebraspe.org.br/concursos/prf_21/arquivos/578_PRF_ESP_02.PDF"], ["Gab. Espanhol", "https://cdn.cebraspe.org.br/concursos/prf_21/arquivos/GAB_DEFINITIVO_578_PRF_ESP_02.PDF"]] },
    { t: "PRF · edital 2018 (Cebraspe)", d: "Prova anterior com a mesma lógica de certo/errado.", links: [["Prova", "https://cdn.cebraspe.org.br/concursos/PRF_18/arquivos/440_PRF_001_00_PAG_9.PDF"], ["Gabarito", "https://cdn.cebraspe.org.br/concursos/PRF_18/arquivos/GAB_DEFINITIVO_MATRIZ_440_PRF_001_00_PAG_9.PDF"]] },
    { t: "PRF 2013 (Cespe, atual Cebraspe)", d: "Legislação de trânsito anterior às mudanças de 2016 a 2021: confira se o item ainda vale pela lei atual.", links: [["Prova", "http://www.cespe.unb.br/concursos/dprf_13/arquivos/DPRF13_001_01.pdf"], ["Gabarito", "http://www.cespe.unb.br/concursos/dprf_13/arquivos/Gab_definitivo_DPRF13_001_01.PDF"]] }
  ];
  const PROVAS_BB = [
    { t: "Banco do Brasil 2023 · Escriturário (Cesgranrio)", d: "Página oficial do concurso na Cesgranrio, com provas e gabaritos de Agente Comercial e Agente de Tecnologia.", links: [["Página da Cesgranrio", "https://www.cesgranrio.org.br/concursos/evento.aspx?id=bb0122"]] },
    { t: "Banco do Brasil 2021 · Agente Comercial (Cesgranrio)", d: "Alguns itens do conteúdo de 2021 mudaram em 2022 (ex.: normas de segurança cibernética e anticorrupção).", links: [["Prova", "https://jcconcursos.com.br/media/uploads/provas/provas/concurso-banco-do-brasil-2021-prova-agente-comercial.pdf"], ["Gabarito", "https://jcconcursos.com.br/media/uploads/provas/gabaritos/concurso-banco-do-brasil-2021-gabarito-agente-comercial.pdf"]] },
    { t: "Banco do Brasil 2021 · Agente de Tecnologia (Cesgranrio)", d: "", links: [["Prova", "https://jcconcursos.com.br/media/uploads/provas/provas/concurso-banco-do-brasil-2021-prova-agente-de-tecnologia.pdf"], ["Gabarito", "https://jcconcursos.com.br/media/uploads/provas/gabaritos/concurso-banco-do-brasil-2021-gabarito-agente-de-tecnologia.pdf"]] }
  ];
  const PROVAS_DET = [
    { t: "Detran-PA 2019 · Agente de Fiscalização e Agente de Educação (Fadesp)", d: "Página da Fadesp com o concurso C-177: cadernos de prova e gabaritos.", links: [["Página da Fadesp", "http://www.portalfadesp.org.br/pagConcursosp.asp?id_pagina=575"], ["Edital 2018", "https://blog-static.infra.grancursosonline.com.br/wp-content/uploads/2018/11/21121950/Edital-DETRAN-PA.pdf"]] }
  ];
  const sim = (titulo, instrucao, provas) => ({ titulo, instrucao, provas });
  const M = (mod, fase, horas, peso, notaMin = 7, extra = {}) => Object.assign({ mod, fase, horas, peso, notaMin }, extra);

  const BB_BASICOS = [
    M("POR1", 3, 5, "Português · 10 questões"), M("POR2", 3, 3, "Português"), M("POR3", 3, 4, "Português"), M("POR4", 3, 5, "Português"),
    M("POR5", 3, 3, "Português"), M("POR6", 3, 4, "Português"), M("POR7", 3, 4, "Português"), M("POR8", 3, 3, "Português"),
    M("MAT1", 3, 3, "Matemática · 5 questões"), M("MAT2", 3, 4, "Matemática"), M("LOG1", 3, 4, "Matemática"), M("MAT3", 3, 5, "Matemática"),
    M("MAT4", 3, 4, "Matemática"), M("MAT5", 3, 3, "Matemática"), M("MAT6", 3, 3, "Matemática"),
    M("ATU1", 3, 3, "Atualidades · 5 questões"), M("ATU2", 3, 3, "Atualidades"),
    M("ING1", 3, 4, "Inglês · 5 questões")
  ];
  const BB_BANC = [M("BAN1", 2, 4, "Bancários"), M("BAN2", 2, 5, "Bancários"), M("BAN3", 2, 4, "Bancários"), M("BAN4", 2, 4, "Bancários"), M("BAN5", 2, 5, "Bancários"), M("BAN6", 2, 3, "Bancários")];

  window.TRILHAS = {
    prf: {
      id: "prf", nome: "PRF", cargo: "Policial Rodoviário Federal", banca: "Cebraspe", estilo: "ce",
      formato: "120 itens C/E + discursiva", unidade: "Itens",
      edital: { nome: "Edital PRF nº 1/2021", url: "https://cdn.cebraspe.org.br/concursos/PRF_21/arquivos/ED_1_PRF_2021_ABERTURA.PDF" },
      situacao: "sem edital autorizado. A PRF enviou ao governo pedido de novo concurso em 2026; até outubro não havia autorização publicada. A trilha segue o edital 2021.",
      prova: [["Bloco I: Português, Raciocínio Lógico-Matemático, Informática, Física, Ética e Cidadania, Geopolítica, Inglês ou Espanhol", 55, 55], ["Bloco II: Legislação de Trânsito", 30, 30], ["Bloco III: Dir. Administrativo, Constitucional, Penal, Processual Penal, Legislação Especial, Direitos Humanos", 35, 35], ["Discursiva (até 30 linhas)", null, 20]],
      regras: ["Cada item certo vale +1 e cada item errado vale −1. Em branco vale 0: chute só quando a chance de acerto compensar.", "Mínimos para não ser eliminado: 15 pontos no Bloco I, 10 no Bloco II, 10 no Bloco III e 50 no total.", "Discursiva: nota = conteúdo − 4 × (erros ÷ linhas). Abaixo de 10 pontos elimina.", "Desempate (depois da idade): maior nota no Bloco II, depois Bloco III, depois Bloco I. Por isso a trilha começa pela Legislação de Trânsito."],
      etapas: ["Prova objetiva e discursiva", "Exame de aptidão física: barra fixa, shuttle run, impulsão horizontal, flexão abdominal e corrida de 12 minutos (índices no Anexo III do edital)", "Avaliação psicológica, apresentação de documentos, avaliação de saúde, títulos e investigação social", "Curso de Formação Policial, eliminatório e classificatório"],
      logica: "As fases seguem o critério de desempate do edital: Legislação de Trânsito (Bloco II) primeiro, depois as disciplinas jurídicas (Bloco III) e por último o Bloco I. As horas de cada módulo seguem o volume de conteúdo e o peso do bloco.",
      fases: [
        { n: 1, nome: "Legislação de Trânsito", objetivo: "Dominar o Código de Trânsito Brasileiro e as resoluções mais cobradas: o Bloco II tem 30 itens de uma disciplina só e é o primeiro critério de desempate.", criterio: "Módulos aprovados e prova anterior do Bloco II registrada.",
          simulado: sim("Bloco II das provas anteriores", "Resolva somente os itens de Legislação de Trânsito das provas abaixo, no tempo de 1 minuto e meio por item. Corrija pelo gabarito definitivo e registre o resultado líquido (certos menos errados).", PROVAS_PRF) },
        { n: 2, nome: "Direito Penal, Processual e Leis Especiais", objetivo: "Estudar o direito que o policial aplica na rodovia: crimes, flagrante, provas e leis penais especiais.", criterio: "Módulos aprovados e prova anterior do Bloco III registrada.",
          simulado: sim("Bloco III (parte penal) das provas anteriores", "Resolva os itens de Direito Penal, Processual Penal, Legislação Especial e Direitos Humanos. Registre o resultado líquido.", PROVAS_PRF) },
        { n: 3, nome: "Direito Administrativo, Constitucional e Ética", objetivo: "Fechar o Bloco III com Administrativo e Constitucional e estudar Ética e Cidadania do Bloco I, que usa a mesma base legal.", criterio: "Módulos aprovados e prova anterior registrada.",
          simulado: sim("Administrativo, Constitucional e Ética nas provas anteriores", "Resolva os itens de Direito Administrativo, Direito Constitucional e Ética. Registre o resultado líquido.", PROVAS_PRF) },
        { n: 4, nome: "Bloco I: Conhecimentos gerais", objetivo: "Português, Raciocínio Lógico-Matemático, Física, Informática, Geopolítica e língua estrangeira.", criterio: "Módulos aprovados e prova anterior do Bloco I registrada.",
          simulado: sim("Bloco I das provas anteriores", "Resolva os itens do Bloco I. Faça só a língua estrangeira que você escolheu.", PROVAS_PRF) },
        { n: 5, nome: "Discursiva e prova completa", objetivo: "Treinar o texto dissertativo e resolver a prova inteira no tempo oficial de 4h30.", criterio: "Discursiva aprovada e prova completa registrada.",
          simulado: sim("Prova completa no tempo oficial", "Resolva a prova de 2021 inteira em 4h30, com a discursiva. Registre o resultado líquido dos 120 itens.", PROVAS_PRF) }
      ],
      modulos: [
        M("CTB1", 1, 5, "Bloco II"), M("CTB2", 1, 6, "Bloco II"), M("CTB3", 1, 5, "Bloco II"), M("CTB4", 1, 5, "Bloco II"), M("CTB5", 1, 5, "Bloco II"),
        M("CTB6", 1, 7, "Bloco II"), M("CTB7", 1, 5, "Bloco II"), M("CTB8", 1, 5, "Bloco II"), M("CTB9", 1, 4, "Bloco II"),
        M("DPE1", 2, 6, "Bloco III"), M("DPE2", 2, 5, "Bloco III"), M("DPE3", 2, 5, "Bloco III"), M("DPP1", 2, 5, "Bloco III"), M("DPP2", 2, 5, "Bloco III"),
        M("LES1", 2, 5, "Bloco III"), M("LES2", 2, 5, "Bloco III"), M("DH1", 2, 4, "Bloco III"),
        M("DAD1", 3, 4, "Bloco III"), M("DAD2", 3, 5, "Bloco III"), M("DAD3", 3, 5, "Bloco III"), M("DAD4", 3, 5, "Bloco III"),
        M("DCO1", 3, 6, "Bloco III"), M("DCO2", 3, 5, "Bloco III"), M("ETI1", 3, 2, "Bloco I"), M("ETI2", 3, 4, "Bloco I"),
        M("POR1", 4, 5, "Bloco I"), M("POR2", 4, 3, "Bloco I"), M("POR3", 4, 4, "Bloco I"), M("POR4", 4, 5, "Bloco I"), M("POR5", 4, 3, "Bloco I"), M("POR6", 4, 4, "Bloco I"), M("POR7", 4, 4, "Bloco I"), M("POR8", 4, 3, "Bloco I"), M("POR9", 4, 3, "Bloco I"),
        M("MAT2", 4, 4, "Bloco I"), M("MAT3", 4, 5, "Bloco I"), M("MAT5", 4, 3, "Bloco I"), M("MAT6", 4, 3, "Bloco I"), M("MAT1", 4, 3, "Bloco I"), M("EST1", 4, 4, "Bloco I"), M("EST2", 4, 4, "Bloco I"), M("GEO1", 4, 4, "Bloco I"),
        M("FIS1", 4, 5, "Bloco I"), M("FIS2", 4, 6, "Bloco I"),
        M("INF1", 4, 2, "Bloco I"), M("INF3", 4, 3, "Bloco I"), M("INF4", 4, 3, "Bloco I"), M("INF5", 4, 3, "Bloco I"),
        M("GEOP1", 4, 4, "Bloco I"), M("GEOP2", 4, 4, "Bloco I"),
        M("ING1", 4, 4, "Bloco I · escolha Inglês ou Espanhol", 7, { opcional: true }), M("ESP1", 4, 4, "Bloco I · escolha Inglês ou Espanhol", 7, { opcional: true }),
        M("REDPRF", 5, 6, "Discursiva · 20 pts")
      ]
    },

    bbcom: {
      id: "bbcom", nome: "Banco do Brasil", cargo: "Escriturário · Agente Comercial", banca: "Cesgranrio", estilo: "mc",
      formato: "70 questões (A a E) + redação", unidade: "Questões",
      edital: { nome: "Edital BB nº 1/2022", url: "https://cdn.direcaoconcursos.com.br/uploads/2024/06/EDITAL-DE-ABERTURA-SELECAO-EXTERNA-2022_001-EDITAL-DE-ABERTURA-SELECAO-EXTERNA-2022_001-DOU-Imprensa-Nacional.pdf" },
      situacao: "sem edital em 2026. Em agosto/2026 o banco informou que não publicaria edital neste ano; a escolha da banca segue em andamento. A trilha segue o edital 2022.",
      prova: [["Conhecimentos Básicos", 25, 32.5], ["Língua Portuguesa", 10, 15], ["Língua Inglesa", 5, 5], ["Matemática", 5, 7.5], ["Atualidades do Mercado Financeiro", 5, 5], ["Conhecimentos Específicos", 45, 67.5], ["Vendas e Negociação", 15, 22.5], ["Conhecimentos de Informática", 15, 22.5], ["Conhecimentos Bancários", 10, 15], ["Matemática Financeira", 5, 7.5], ["Redação (dissertativo-argumentativa)", null, 100]],
      regras: ["Elimina com menos de 50% no total, menos de 50% nos Básicos, menos de 50% nos Específicos ou nota zero em qualquer disciplina.", "Redação: só é corrigida para quem fica até 3 vezes o número de vagas + cadastro; abaixo de 70 pontos elimina.", "Desempate (depois da idade): Específicos, depois Vendas e Negociação, depois Informática, depois Bancários."],
      etapas: ["Provas objetivas e redação no mesmo dia (5 horas)", "Heteroidentificação para cotistas", "Procedimentos admissionais e perícia médica"],
      logica: "Vendas e Negociação e Informática valem 45 dos 100 pontos e são os primeiros critérios de desempate, por isso abrem a trilha. Depois vêm Bancários e Matemática Financeira, e por último os Básicos, que precisam de 50% isoladamente.",
      fases: [
        { n: 1, nome: "Vendas e Informática", objetivo: "As duas disciplinas de maior peso: 15 questões cada, 22,5 pontos cada.", criterio: "Módulos aprovados e prova anterior registrada.", simulado: sim("Vendas e Informática nas provas anteriores", "Resolva as questões de Vendas e Negociação e de Informática das provas abaixo e registre os acertos.", PROVAS_BB) },
        { n: 2, nome: "Bancários, Matemática Financeira e mercado", objetivo: "Sistema Financeiro Nacional, produtos, compliance e cálculos financeiros.", criterio: "Módulos aprovados e prova anterior registrada.", simulado: sim("Bancários e Matemática Financeira nas provas anteriores", "Resolva as questões de Conhecimentos Bancários e Matemática Financeira e registre os acertos.", PROVAS_BB) },
        { n: 3, nome: "Conhecimentos Básicos", objetivo: "Português, Matemática, Atualidades do Mercado Financeiro e Inglês: 25 questões que precisam de 50% sozinhas.", criterio: "Módulos aprovados e prova anterior registrada.", simulado: sim("Conhecimentos Básicos nas provas anteriores", "Resolva as 25 questões básicas e registre os acertos.", PROVAS_BB) },
        { n: 4, nome: "Redação e prova completa", objetivo: "Treinar a redação dissertativo-argumentativa e resolver a prova inteira em 5 horas.", criterio: "Redação aprovada e prova completa registrada.", simulado: sim("Prova completa no tempo oficial", "Resolva a prova de 2023 inteira em 5 horas, com redação. Registre os acertos das 70 questões.", PROVAS_BB) }
      ],
      modulos: [
        M("VEN1", 1, 5, "Vendas · 15 questões"), M("VEN2", 1, 5, "Vendas"), M("VEN3", 1, 5, "Vendas"),
        M("INF1", 1, 3, "Informática · 15 questões"), M("INF2", 1, 6, "Informática"), M("INF3", 1, 4, "Informática"), M("INF4", 1, 4, "Informática"), M("INF5", 1, 3, "Informática"), M("INF6", 1, 2, "Informática"),
        ...BB_BANC, M("MFI1", 2, 4, "Mat. Financeira · 5 questões"), M("MFI2", 2, 5, "Mat. Financeira"),
        ...BB_BASICOS,
        M("REDBB", 4, 6, "Redação · 100 pts")
      ]
    },

    bbtec: {
      id: "bbtec", nome: "Banco do Brasil", cargo: "Escriturário · Agente de Tecnologia", banca: "Cesgranrio", estilo: "mc",
      formato: "70 questões (A a E) + redação", unidade: "Questões",
      edital: { nome: "Edital BB nº 1/2022", url: "https://cdn.direcaoconcursos.com.br/uploads/2024/06/EDITAL-DE-ABERTURA-SELECAO-EXTERNA-2022_001-EDITAL-DE-ABERTURA-SELECAO-EXTERNA-2022_001-DOU-Imprensa-Nacional.pdf" },
      situacao: "sem edital em 2026. Em agosto/2026 o banco informou que não publicaria edital neste ano; a escolha da banca segue em andamento. A trilha segue o edital 2022.",
      prova: [["Conhecimentos Básicos", 25, 32.5], ["Língua Portuguesa", 10, 15], ["Língua Inglesa", 5, 5], ["Matemática", 5, 7.5], ["Atualidades do Mercado Financeiro", 5, 5], ["Conhecimentos Específicos", 45, 67.5], ["Tecnologia da Informação", 35, 52.5], ["Probabilidade e Estatística", 5, 7.5], ["Conhecimentos Bancários", 5, 7.5], ["Redação (dissertativo-argumentativa)", null, 100]],
      regras: ["Elimina com menos de 50% no total, nos Básicos ou nos Específicos.", "Redação abaixo de 70 pontos elimina.", "Desempate (depois da idade): Específicos, depois Tecnologia da Informação, depois Probabilidade e Estatística."],
      etapas: ["Provas objetivas e redação no mesmo dia (5 horas)", "Heteroidentificação para cotistas", "Procedimentos admissionais e perícia médica"],
      logica: "Tecnologia da Informação vale sozinha 52,5 dos 100 pontos e é o segundo critério de desempate, por isso ocupa a primeira fase inteira.",
      fases: [
        { n: 1, nome: "Tecnologia da Informação", objetivo: "Os seis eixos de TI do edital: ML, bancos de dados, big data, mobile, estruturas de dados e linguagens.", criterio: "Módulos aprovados e prova anterior registrada.", simulado: sim("TI nas provas anteriores", "Resolva as 35 questões de Tecnologia da Informação e registre os acertos.", PROVAS_BB) },
        { n: 2, nome: "Probabilidade, Estatística e Bancários", objetivo: "Os outros 10 itens específicos.", criterio: "Módulos aprovados e prova anterior registrada.", simulado: sim("Estatística e Bancários nas provas anteriores", "Resolva as questões de Probabilidade e Estatística e de Conhecimentos Bancários.", PROVAS_BB) },
        { n: 3, nome: "Conhecimentos Básicos", objetivo: "Português, Matemática, Atualidades do Mercado Financeiro e Inglês.", criterio: "Módulos aprovados e prova anterior registrada.", simulado: sim("Conhecimentos Básicos nas provas anteriores", "Resolva as 25 questões básicas e registre os acertos.", PROVAS_BB) },
        { n: 4, nome: "Redação e prova completa", objetivo: "Redação e prova inteira em 5 horas.", criterio: "Redação aprovada e prova completa registrada.", simulado: sim("Prova completa no tempo oficial", "Resolva a prova de Agente de Tecnologia inteira em 5 horas.", PROVAS_BB) }
      ],
      modulos: [
        M("TI1", 1, 6, "TI · 35 questões"), M("TI2", 1, 7, "TI"), M("TI3", 1, 6, "TI"), M("TI4", 1, 6, "TI"), M("TI5", 1, 7, "TI"), M("TI6", 1, 4, "TI"),
        M("EST1", 2, 4, "Prob. e Estatística · 5 questões"), M("EST2", 2, 4, "Prob. e Estatística"), M("EST3", 2, 5, "Prob. e Estatística"),
        ...BB_BANC.map(x => Object.assign({}, x, { horas: Math.max(2, x.horas - 1), peso: "Bancários · 5 questões" })),
        ...BB_BASICOS,
        M("REDBB", 4, 6, "Redação · 100 pts")
      ]
    }
  };

  const detBase = (cargo, resMod, extraEtapas) => ({
    nome: "Detran-PA", cargo, banca: "Fadesp", estilo: "mc", formato: "50 questões (A a E) + discursiva", unidade: "Questões",
    edital: { nome: "Edital nº 01/SEAD-DETRAN/PA/2018", url: "https://blog-static.infra.grancursosonline.com.br/wp-content/uploads/2018/11/21121950/Edital-DETRAN-PA.pdf" },
    situacao: "sem edital nem banca. O TCE-PA determinou que o Detran-PA apresente planejamento de novo concurso. A trilha segue o edital 2018 (concurso C-177).",
    prova: [["Conhecimentos básicos", 20, 4], ["Língua Portuguesa", 6, 1.2], ["Matemática e Raciocínio Lógico", 4, 0.8], ["Legislação aplicada ao DETRAN-PA", 4, 0.8], ["Ética e Qualidade no Serviço Público", 3, 0.6], ["Noções de Microinformática", 3, 0.6], ["Conhecimentos específicos", 30, 6], ["CTB, resoluções CONTRAN, mobilidade urbana", 30, 6], ["Discursiva (20 a 30 linhas)", null, 10]],
    regras: ["Cada questão vale 0,2 ponto. Elimina abaixo de 50% da objetiva ou com zero em Língua Portuguesa.", "A discursiva só é corrigida para quem fica até 5 vezes o número de vagas; abaixo de 6 pontos elimina.", "Discursiva: tema, argumentação, coerência e elaboração crítica valem 2,5 cada; desconto de 2 × (erros ÷ linhas).", "Desempate (depois da idade): discursiva, depois acertos em Específicos, depois Português, Legislação, Matemática, Ética e Informática."],
    etapas: extraEtapas,
    logica: "Os 30 específicos (60% da objetiva) e o segundo critério de desempate abrem a trilha. Português vem logo depois porque zerar elimina e é o primeiro desempate entre os básicos.",
    fases: [
      { n: 1, nome: "Conhecimentos específicos", objetivo: "Código de Trânsito, resoluções do CONTRAN do cargo e mobilidade urbana: 30 das 50 questões.", criterio: "Módulos aprovados e prova anterior registrada.", simulado: sim("Específicos da prova de 2019", "Resolva as 30 questões de conhecimentos específicos do seu cargo e registre os acertos.", PROVAS_DET) },
      { n: 2, nome: "Português e legislação do Pará", objetivo: "Português (6 questões, não pode zerar) e as duas leis estaduais (4 questões).", criterio: "Módulos aprovados e prova anterior registrada.", simulado: sim("Português e Legislação da prova de 2019", "Resolva as questões de Português e de Legislação aplicada ao DETRAN-PA.", PROVAS_DET) },
      { n: 3, nome: "Demais básicos", objetivo: "Matemática e Raciocínio Lógico, Ética e Qualidade no Serviço Público e Microinformática.", criterio: "Módulos aprovados e prova anterior registrada.", simulado: sim("Básicos da prova de 2019", "Resolva as 20 questões básicas e registre os acertos.", PROVAS_DET) },
      { n: 4, nome: "Discursiva e prova completa", objetivo: "Texto dissertativo-argumentativo com proposta de intervenção e prova inteira em 4 horas.", criterio: "Discursiva aprovada e prova completa registrada.", simulado: sim("Prova completa no tempo oficial", "Resolva a prova de 2019 do seu cargo em 4 horas, com a discursiva.", PROVAS_DET) }
    ],
    modulos: [
      M("CTB1", 1, 4, "Específicos"), M("CTB2", 1, 5, "Específicos"), M("CTB3", 1, 4, "Específicos"), M("CTB4", 1, 4, "Específicos"), M("CTB5", 1, 4, "Específicos"),
      M("CTB6", 1, 6, "Específicos"), M("CTB7", 1, 4, "Específicos"), M("CTB8", 1, 4, "Específicos"), M(resMod, 1, 4, "Específicos"), M("MOB1", 1, 4, "Específicos"),
      M("POR1", 2, 4, "Português · 6 questões"), M("POR2", 2, 3, "Português"), M("POR3", 2, 3, "Português"), M("POR4", 2, 4, "Português"), M("POR5", 2, 3, "Português"), M("POR6", 2, 3, "Português"), M("POR7", 2, 3, "Português"), M("POR8", 2, 3, "Português"),
      M("LPA1", 2, 3, "Legislação · 4 questões"), M("LPA2", 2, 4, "Legislação"),
      M("MAT1", 3, 3, "Matemática e RL · 4 questões"), M("MAT2", 3, 3, "Matemática e RL"), M("MAT3", 3, 3, "Matemática e RL"), M("MAT6", 3, 3, "Matemática e RL"), M("EST2", 3, 3, "Matemática e RL"), M("GEO1", 3, 3, "Matemática e RL"), M("LOG1", 3, 3, "Matemática e RL"), M("LOG2", 3, 3, "Matemática e RL"),
      M("ETI1", 3, 2, "Ética · 3 questões"), M("ETI3", 3, 3, "Ética"),
      M("INF1", 3, 2, "Microinformática · 3 questões"), M("INF3", 3, 2, "Microinformática"), M("INF4", 3, 2, "Microinformática"),
      M("REDDET", 4, 5, "Discursiva · 10 pts")
    ]
  });
  window.TRILHAS.detfis = Object.assign({ id: "detfis" }, detBase("Agente de Fiscalização de Trânsito", "RES1", ["Prova objetiva e discursiva", "Avaliação médica (inclui IMC abaixo de 30 e exame toxicológico)", "Teste de capacidade física: barra (3 rep. masc. / 10 s fem.), abdominal em 1 min (30/25), flexão de braço (20/15) e corrida de 12 min (2.000 m / 1.600 m)", "Avaliação psicológica, certidão criminal e curso de formação de no mínimo 300 h/aula"]));
  window.TRILHAS.detedu = Object.assign({ id: "detedu" }, detBase("Agente de Educação de Trânsito", "RES2", ["Etapa única: prova objetiva e discursiva no mesmo dia (4 horas)"]));
})();
