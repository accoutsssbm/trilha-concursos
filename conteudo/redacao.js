/* Redação e discursivas: PRF (Cebraspe), BB (Cesgranrio), Detran-PA (Fadesp) */
(function () {
  const ESTRUTURA = [
    { h: "Estrutura do texto dissertativo-argumentativo" },
    { tabela: { cab: ["Parte", "Função", "Tamanho de referência em 30 linhas"], linhas: [
      ["Introdução", "Apresentar o tema e a tese (sua posição) e, se quiser, anunciar os argumentos", "4 a 6 linhas"],
      ["Desenvolvimento 1", "Primeiro argumento: tópico frasal + fundamentação (dado, lei, exemplo, causa e consequência)", "7 a 9 linhas"],
      ["Desenvolvimento 2", "Segundo argumento, com a mesma lógica", "7 a 9 linhas"],
      ["Conclusão", "Retomar a tese e fechar; quando o comando pedir, propor solução (quem faz, o quê, como, para quê)", "4 a 6 linhas"]] } },
    { h: "O que derruba a nota" },
    { lista: ["Fugir do tema ou responder só parte dos tópicos pedidos no comando.", "Texto sem tese clara, que só descreve o problema.", "Argumentos genéricos ('é muito importante', 'nos dias de hoje') sem dado, lei ou exemplo concreto.", "Parágrafos sem ligação: faltam conectivos de causa, consequência, oposição e conclusão.", "Erros de concordância, regência, crase, pontuação e ortografia, que descontam diretamente na nota.", "Ultrapassar o número máximo de linhas ou ficar abaixo do mínimo."] },
    { h: "Roteiro de 50 minutos" },
    { lista: ["5 min: ler o comando, sublinhar cada tópico e definir a tese.", "10 min: rascunho em tópicos (um argumento e uma evidência por parágrafo).", "25 min: escrever o texto.", "10 min: revisar concordância, crase, vírgulas e passar a limpo dentro do limite de linhas."] },
    { h: "Repertório útil" },
    { p: "Leis e dados que você estudou nos módulos valem como argumento de autoridade: CTB, Lei 13.614/2018 (PNATRANS), Lei 12.587/2012, Década de Ação da ONU 2021–2030, LGPD, Lei 12.846/2013, Resolução CMN 4.945/2021, dados do Censo 2022. Cite com precisão; número errado é pior que nenhum número." }
  ];
  window.MODULOS = Object.assign(window.MODULOS || {}, {
    REDPRF: {
      disciplina: "Discursiva PRF", titulo: "Texto dissertativo na Cebraspe",
      objetivo: "Escrever em até 30 linhas um texto que responda a todos os tópicos do comando, com correção gramatical, no padrão de correção da Cebraspe.",
      edital: ["Prova discursiva: texto dissertativo de até 30 linhas, sobre tema e tópicos definidos no caderno de prova", "Valor: 20 pontos. Abaixo de 10 pontos elimina."],
      porque: ["A discursiva elimina e pesa na classificação. A fórmula da Cebraspe desconta erros proporcionalmente ao número de linhas."],
      conteudo: [
        { h: "Como a Cebraspe corrige" },
        { formula: "NPD = NC − 4 × (NE ÷ TL)\nNC = nota de conteúdo; NE = número de erros; TL = número de linhas efetivamente escritas" },
        { lista: ["A nota de conteúdo é dividida pelos tópicos do comando (ex.: 2.1, 2.2, 2.3) e pela apresentação e estrutura textual.", "Cada erro de grafia, morfossintaxe ou propriedade vocabular conta em NE. Com 30 linhas, 6 erros tiram 0,8 ponto; com 15 linhas, os mesmos 6 erros tiram 1,6.", "Texto com menos linhas é mais penalizado por erro e tende a ter menos conteúdo. Escreva perto do limite.", "A Cebraspe costuma pedir tópicos objetivos (ex.: 'conceitue', 'cite duas medidas', 'explique a diferença'). Responda cada tópico em parágrafo próprio, na ordem do comando."] },
        ...ESTRUTURA
      ],
      checklist: ["Sei a fórmula de correção da Cebraspe", "Respondo cada tópico do comando em parágrafo próprio", "Escrevo perto do limite de 30 linhas", "Revisei concordância, crase e pontuação", "Fiz pelo menos três textos completos cronometrados"],
      questoes: [
        { tipo: "ce", enunciado: "Na fórmula da Cebraspe, mantido o número de erros, escrever mais linhas reduz o desconto por erros.", certo: true, explicacao: "O desconto é 4 × NE ÷ TL." },
        { tipo: "ce", enunciado: "Na discursiva da Cebraspe, é aconselhável responder os tópicos do comando fora de ordem para demonstrar criatividade.", certo: false, explicacao: "Siga a ordem: facilita a correção por tópico." },
        { tipo: "ce", enunciado: "Com nota de conteúdo 16, 6 erros e 30 linhas, a nota final é 15,2.", certo: true, explicacao: "16 − 4 × (6/30) = 16 − 0,8." },
        { tipo: "aberta", peso: 4, enunciado: "Redija um texto dissertativo de até 30 linhas sobre o tema: A FISCALIZAÇÃO DA ALCOOLEMIA NAS RODOVIAS FEDERAIS. Aborde: 1) a diferença entre a infração do art. 165 e o crime do art. 306 do CTB; 2) os meios de prova admitidos para constatar a alteração da capacidade psicomotora; 3) duas medidas, além da fiscalização, para reduzir sinistros associados ao álcool.", esperado: "Tópico 1: infração administrativa com qualquer concentração no sangue ou etilômetro ≥ 0,05 mg/L (descontado o erro) ou sinais; gravíssima, multa (10x), suspensão por 12 meses, recolhimento do documento e retenção. Crime: ≥ 6 dg/L no sangue ou ≥ 0,3 mg/L (0,34 com o erro) ou sinais de alteração; detenção de 6 meses a 3 anos, multa e suspensão ou proibição. Recusa = art. 165-A. Tópico 2: etilômetro, exame de sangue, exame clínico, perícia, vídeo, prova testemunhal e termo de constatação de sinais (art. 306, § 2º; Res. 432). Tópico 3: duas medidas concretas, por exemplo campanhas educativas em datas críticas, transporte alternativo/estímulo ao motorista da vez, integração com órgãos de saúde, engenharia viária. Texto em 3 ou 4 parágrafos, tópicos na ordem, sem erros gramaticais graves." },
        { tipo: "aberta", peso: 4, enunciado: "Redija um texto dissertativo de até 30 linhas sobre o tema: O PAPEL DA POLÍCIA RODOVIÁRIA FEDERAL NO COMBATE AO CRIME NAS RODOVIAS. Aborde: 1) a competência constitucional da PRF; 2) a relação entre fronteiras, rodovias e crimes transnacionais; 3) os limites legais da abordagem policial.", esperado: "Tópico 1: art. 144, § 2º — órgão permanente, mantido pela União, estruturado em carreira, destinado ao patrulhamento ostensivo das rodovias federais; art. 20 do CTB. Tópico 2: fronteira extensa e de difícil fiscalização; drogas, armas, contrabando e descaminho escoados por rodovias federais rumo a centros consumidores e portos; necessidade de integração com PF, Receita e estados. Tópico 3: busca pessoal só com fundada suspeita objetiva (CPP, art. 244); uso da força com legalidade, necessidade e proporcionalidade (Lei 13.060/2014); respeito à inviolabilidade de domicílio; Lei 13.869/2019 (abuso de autoridade); algemas conforme SV 11. Conclusão retoma a tese de equilíbrio entre eficiência e direitos." }
      ]
    },
    REDBB: {
      disciplina: "Redação BB", titulo: "Redação dissertativo-argumentativa na Cesgranrio",
      objetivo: "Escrever redação dissertativo-argumentativa sobre tema de atualidade, com tese clara e argumentação consistente, no padrão de 100 pontos da Cesgranrio.",
      edital: ["Redação dissertativo-argumentativa, no número de linhas definido no edital, valor de 100 pontos. Abaixo de 70 pontos elimina.", "Só é corrigida para quem fica até 3 vezes o número de vagas mais o cadastro de reserva."],
      porque: ["A nota mínima de 70 em 100 é exigente: um texto apenas correto não basta, precisa de argumentação forte."],
      conteudo: [
        { h: "Critérios usados pela Cesgranrio" },
        { lista: ["Adequação ao tema e ao tipo de texto (dissertativo-argumentativo): fugir do tema pode zerar.", "Desenvolvimento: tese, argumentos relevantes e progressão das ideias.", "Coesão e coerência: uso de conectivos, retomadas, paragrafação.", "Domínio da norma padrão: ortografia, acentuação, concordância, regência, pontuação, crase.", "Os pesos e a grade exata variam por edital: leia o anexo de critérios do edital vigente."] },
        { h: "Temas prováveis" },
        { p: "Temas ligados ao mercado financeiro e à sociedade: inclusão financeira e digital, golpes digitais e segurança, educação financeira e endividamento, sustentabilidade e finanças, inteligência artificial e trabalho, Pix e fim do dinheiro em espécie." },
        ...ESTRUTURA
      ],
      checklist: ["Sei os critérios de correção do edital", "Escrevo tese clara na introdução", "Uso dado ou lei em cada argumento", "Fecho com conclusão que retoma a tese", "Fiz pelo menos três redações cronometradas"],
      questoes: [
        { tipo: "mc", enunciado: "Na redação dissertativo-argumentativa, a tese é:", opcoes: ["o título do texto", "o ponto de vista que o texto defende", "a conclusão com proposta obrigatória", "um resumo dos textos motivadores", "o primeiro argumento"], correta: 1, explicacao: "Posição defendida." },
        { tipo: "mc", enunciado: "Qual frase é mais adequada como argumento?", opcoes: ["Hoje em dia todo mundo usa o celular para tudo.", "Segundo a Pesquisa Febraban de Tecnologia Bancária, o celular é o principal canal das transações bancárias no Brasil, o que exige investimento em segurança digital.", "É muito importante pensar sobre isso.", "Desde os primórdios da humanidade o dinheiro existe.", "Cada um tem sua opinião sobre o tema."], correta: 1, explicacao: "Fonte e relação de causa." },
        { tipo: "mc", enunciado: "O conectivo adequado para introduzir uma consequência é:", opcoes: ["entretanto", "embora", "portanto", "conquanto", "ainda que"], correta: 2, explicacao: "Conclusão/consequência." },
        { tipo: "aberta", peso: 4, enunciado: "Redija um texto dissertativo-argumentativo de até 30 linhas sobre o tema: O AVANÇO DOS GOLPES DIGITAIS E O PAPEL DOS BANCOS NA PROTEÇÃO DOS CLIENTES.", esperado: "Tese clara (ex.: segurança digital é responsabilidade compartilhada, mas o banco tem dever reforçado de prevenção). Argumento 1: digitalização (mobile como principal canal, Pix) ampliou superfície de ataque; engenharia social explora o cliente; dados/leis: CDC e Súmula 479 do STJ (responsabilidade objetiva por fortuito interno), Res. CMN 4.893/2021. Argumento 2: medidas — limites noturnos do Pix, MED, autenticação forte, monitoramento por IA, educação financeira e digital dos clientes, sobretudo idosos. Conclusão retomando a tese. Coesão com conectivos, sem desvios gramaticais." },
        { tipo: "aberta", peso: 4, enunciado: "Redija um texto dissertativo-argumentativo de até 30 linhas sobre o tema: EDUCAÇÃO FINANCEIRA COMO CAMINHO PARA REDUZIR O ENDIVIDAMENTO DAS FAMÍLIAS.", esperado: "Tese sobre o papel da educação financeira. Argumento 1: crédito fácil e caro (rotativo, cheque especial) e falta de planejamento geram superendividamento; citar Lei 14.181/2021 (superendividamento), limite do rotativo (Lei 14.690/2023) e do cheque especial (Res. 4.765/2019) com precisão. Argumento 2: ações de educação financeira em escolas, bancos e empresas; crédito responsável; adequação de produtos ao perfil (Res. 4.949/2021). Conclusão com retomada da tese e, se couber, quem deve agir. Correção gramatical e coesão." }
      ]
    },
    REDDET: {
      disciplina: "Discursiva Detran-PA", titulo: "Texto dissertativo-argumentativo na Fadesp",
      objetivo: "Escrever texto de 20 a 30 linhas com tema, argumentação, coerência e elaboração crítica, como pede o edital do Detran-PA.",
      edital: ["Prova discursiva: texto dissertativo-argumentativo de 20 a 30 linhas, valor 10 pontos; abaixo de 6 elimina", "Critérios: tema, argumentação, coerência e elaboração crítica (2,5 pontos cada), com desconto de 2 × (erros ÷ linhas)"],
      porque: ["A discursiva é o primeiro critério de desempate do Detran-PA."],
      conteudo: [
        { h: "Como a Fadesp corrige (edital 2018)" },
        { formula: "Nota = soma dos critérios (tema + argumentação + coerência + elaboração crítica, 2,5 cada) − 2 × (erros ÷ linhas)" },
        { lista: ["Tema: aderência total ao que foi pedido.", "Argumentação: qualidade e fundamentação dos argumentos.", "Coerência: ideias sem contradição, com progressão e ligação entre parágrafos.", "Elaboração crítica: posicionamento próprio, análise das causas e consequências e, quando cabível, proposta de solução."] },
        { h: "Temas prováveis" },
        { p: "Segurança viária, educação para o trânsito, motociclistas como usuários vulneráveis, álcool e direção, mobilidade urbana em Belém, transporte coletivo, sinistros e saúde pública, fiscalização e tecnologia." },
        ...ESTRUTURA
      ],
      checklist: ["Sei os quatro critérios e o desconto por erros", "Escrevo entre 20 e 30 linhas", "Uso CTB, PNATRANS ou Lei 12.587 como argumento", "Apresento elaboração crítica com proposta", "Fiz pelo menos três textos cronometrados"],
      questoes: [
        { tipo: "mc", enunciado: "Na fórmula da Fadesp, com 3 erros em 30 linhas, o desconto é de:", opcoes: ["0,1", "0,2", "0,3", "0,6", "1,0"], correta: 1, explicacao: "2 × 3/30 = 0,2." },
        { tipo: "mc", enunciado: "O critério que avalia posicionamento próprio e análise de causas e consequências é a:", opcoes: ["adequação ao tema", "coerência", "elaboração crítica", "ortografia", "paragrafação"], correta: 2, explicacao: "Elaboração crítica." },
        { tipo: "mc", enunciado: "Uma proposta de solução completa indica:", opcoes: ["apenas que 'o governo deve agir'", "agente, ação, meio e finalidade", "somente a finalidade", "uma citação famosa", "um resumo do texto"], correta: 1, explicacao: "Quem, o quê, como e para quê." },
        { tipo: "aberta", peso: 4, enunciado: "Redija um texto dissertativo-argumentativo de 20 a 30 linhas sobre o tema: OS MOTOCICLISTAS E A SEGURANÇA NO TRÂNSITO DO PARÁ.", esperado: "Tese sobre a vulnerabilidade do motociclista e a necessidade de ação combinada. Argumento 1: crescimento da frota de motos (uso para trabalho, mototáxi e entregas), vulnerabilidade física, alta participação nas vítimas; regras do CTB (capacete, art. 244; vedação de transportar menores de 10 anos) e Lei 12.009/2009. Argumento 2: causas — excesso de velocidade, falta de habilitação, álcool, infraestrutura; papel de educação, fiscalização e engenharia (PNATRANS, Lei 13.614/2018). Elaboração crítica com proposta: agente (Detran-PA, municípios), ação (campanhas e cursos para motofretistas, fiscalização de habilitação e capacete), meio e finalidade. Sem erros graves." },
        { tipo: "aberta", peso: 4, enunciado: "Redija um texto dissertativo-argumentativo de 20 a 30 linhas sobre o tema: MOBILIDADE URBANA E TRANSPORTE COLETIVO NAS GRANDES CIDADES.", esperado: "Tese a favor da prioridade ao transporte coletivo e aos modos não motorizados. Argumento 1: problemas — congestionamentos, poluição, sinistros, custo e tempo perdido (custos externos). Argumento 2: Lei 12.587/2012 — prioridade do coletivo sobre o individual e dos não motorizados sobre os motorizados; instrumentos como faixas exclusivas, integração tarifária, plano de mobilidade; possibilidade de citar o transporte hidroviário na região de Belém. Proposta concreta e coerente. Coesão e correção." }
      ]
    }
  });
})();
