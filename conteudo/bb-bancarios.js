/* Banco do Brasil: Conhecimentos Bancários e Atualidades do Mercado Financeiro (edital 2022) */
window.MODULOS = Object.assign(window.MODULOS || {}, {
BAN1: {
  disciplina: "Conhecimentos Bancários", titulo: "Sistema Financeiro Nacional",
  objetivo: "Conhecer a estrutura do SFN: órgãos normativos, supervisores e operadores, e o papel de cada um.",
  edital: ["1 Sistema Financeiro Nacional: estrutura; entidades e instituições operadoras e supervisoras"],
  porque: ["É a base de Conhecimentos Bancários e aparece em toda prova do BB."],
  conteudo: [
    { h: "Estrutura" },
    { tabela: { cab: ["Mercado", "Normativo", "Supervisor", "Exemplos de operadores"], linhas: [
      ["Moeda, crédito, capitais e câmbio", "Conselho Monetário Nacional (CMN)", "Banco Central do Brasil (BCB) e Comissão de Valores Mobiliários (CVM)", "Bancos, caixas econômicas, cooperativas de crédito, financeiras, corretoras e distribuidoras, bolsa (B3)"],
      ["Seguros privados, capitalização e previdência aberta", "Conselho Nacional de Seguros Privados (CNSP)", "Superintendência de Seguros Privados (Susep)", "Seguradoras, resseguradoras, sociedades de capitalização, entidades abertas de previdência"],
      ["Previdência fechada", "Conselho Nacional de Previdência Complementar (CNPC)", "Superintendência Nacional de Previdência Complementar (Previc)", "Entidades fechadas (fundos de pensão)"]] } },
    { h: "Conselho Monetário Nacional" },
    { lista: ["Órgão máximo do SFN, sem função executiva: formula a política da moeda e do crédito.", "Composição: Ministro da Fazenda (presidente), Ministro do Planejamento e Orçamento e Presidente do Banco Central.", "Edita resoluções; fixa a meta de inflação; regula a constituição e o funcionamento das instituições financeiras.", "Comissão técnica de apoio: Comoc."] },
    { h: "Banco Central do Brasil" },
    { lista: ["Autarquia de natureza especial, com autonomia definida pela Lei Complementar 179/2021: diretoria com mandatos de 4 anos, não coincidentes com o do Presidente da República.", "Objetivo fundamental: assegurar a estabilidade de preços; sem prejuízo dele, zelar pela estabilidade e eficiência do sistema financeiro, suavizar flutuações da atividade econômica e fomentar o pleno emprego.", "Funções: emitir moeda, executar a política monetária e cambial, ser banco dos bancos (reservas, redesconto), depositário das reservas internacionais, autorizar e fiscalizar instituições financeiras, gerir o Sistema de Pagamentos Brasileiro (inclusive o Pix).", "Copom: comitê do BC que define a meta da taxa Selic, em oito reuniões ordinárias por ano."] },
    { h: "CVM" },
    { p: "Autarquia vinculada ao Ministério da Fazenda que regula e fiscaliza o mercado de valores mobiliários (ações, debêntures, cotas de fundos, derivativos), protege investidores e combate fraudes (ex.: uso de informação privilegiada)." },
    { h: "Instituições operadoras" },
    { lista: ["Bancos comerciais: captam depósitos à vista; financiam capital de giro de curto e médio prazo.", "Bancos múltiplos: pelo menos duas carteiras, sendo uma comercial ou de investimento. Constituídos como sociedades anônimas.", "Caixa Econômica Federal: empresa pública; atua como banco e em programas sociais e habitação.", "BNDES: empresa pública federal, principal instrumento de financiamento de longo prazo.", "Cooperativas de crédito: sociedades de pessoas; os associados são donos e usuários.", "Sociedades de crédito, financiamento e investimento (financeiras): crédito ao consumidor (CDC), captam por letras de câmbio.", "Corretoras e distribuidoras: intermediam títulos e valores mobiliários.", "B3: bolsa de valores, mercadorias e futuros, com câmaras de compensação e depositária."] },
    { fonte: "Lei 4.595/1964; Lei Complementar 179/2021; Lei 6.385/1976; Lei 9.069/1995, art. 8º (composição do CMN, com alterações); site do Banco Central." }
  ],
  checklist: ["Sei os três conselhos normativos e seus supervisores", "Sei a composição e as funções do CMN", "Sei as funções do BCB e a autonomia da LC 179", "Sei o que o Copom decide", "Sei o papel da CVM, Susep e Previc", "Diferencio banco comercial, múltiplo, de investimento e cooperativa"],
  questoes: [
    { tipo: "mc", enunciado: "O órgão normativo máximo do Sistema Financeiro Nacional é:", opcoes: ["o Banco Central do Brasil", "a CVM", "o Conselho Monetário Nacional", "o Copom", "a Febraban"], correta: 2, explicacao: "CMN." },
    { tipo: "mc", enunciado: "Integra o Conselho Monetário Nacional:", opcoes: ["o presidente da CVM", "o Ministro do Planejamento e Orçamento", "o presidente do BNDES", "o presidente do Banco do Brasil", "o Ministro do Trabalho"], correta: 1, explicacao: "Fazenda, Planejamento e Orçamento e presidente do BC." },
    { tipo: "mc", enunciado: "A supervisão das entidades fechadas de previdência complementar (fundos de pensão) cabe à:", opcoes: ["Susep", "CVM", "Previc", "Bacen", "B3"], correta: 2, explicacao: "Previc." },
    { tipo: "mc", enunciado: "Seguradoras e sociedades de capitalização são supervisionadas pela:", opcoes: ["CVM", "Susep", "Previc", "Receita Federal", "Comoc"], correta: 1, explicacao: "Susep, sob normas do CNSP." },
    { tipo: "mc", enunciado: "A meta da taxa Selic é definida:", opcoes: ["pelo CMN", "pelo Copom", "pelo Tesouro Nacional", "pela CVM", "pela B3"], correta: 1, explicacao: "Comitê de Política Monetária do BC." },
    { tipo: "mc", enunciado: "Pela LC 179/2021, os diretores do Banco Central têm mandato de:", opcoes: ["2 anos", "3 anos", "4 anos", "5 anos", "indeterminado"], correta: 2, explicacao: "4 anos, não coincidentes." },
    { tipo: "mc", enunciado: "A emissão de papel-moeda e moeda metálica é atribuição:", opcoes: ["do Tesouro Nacional", "da Casa da Moeda, por decisão própria", "do Banco Central", "do CMN", "dos bancos comerciais"], correta: 2, explicacao: "Competência exclusiva do BC (CF, art. 164). A Casa da Moeda fabrica." },
    { tipo: "mc", enunciado: "O banco múltiplo deve ter, no mínimo:", opcoes: ["uma carteira qualquer", "duas carteiras, sendo uma comercial ou de investimento", "três carteiras, incluindo a de desenvolvimento", "carteira de câmbio obrigatória", "carteira de crédito imobiliário obrigatória"], correta: 1, explicacao: "Res. CMN sobre bancos múltiplos." },
    { tipo: "mc", enunciado: "A autarquia que regula o mercado de valores mobiliários e pune o uso de informação privilegiada é:", opcoes: ["o BCB", "a Susep", "a CVM", "a Previc", "o CMN"], correta: 2, explicacao: "CVM (Lei 6.385/1976)." },
    { tipo: "mc", enunciado: "Nas cooperativas de crédito, os associados são:", opcoes: ["apenas depositantes", "donos e usuários", "acionistas sem direito a voto", "credores preferenciais do BC", "clientes sem participação"], correta: 1, explicacao: "Sociedades de pessoas." }
  ]
},

BAN2: {
  disciplina: "Conhecimentos Bancários", titulo: "Mercados, política monetária, câmbio e dívida pública",
  objetivo: "Entender os quatro mercados financeiros, os instrumentos de política monetária, a dinâmica do câmbio e dos juros e os títulos públicos.",
  edital: ["2 Mercado financeiro: mercados monetário, de crédito, de capitais e cambial", "3 Moeda e política monetária: convencionais e não convencionais; taxa Selic; Copom", "4 Orçamento público, títulos do Tesouro Nacional e dívida pública", "7 a 11 Mercado de câmbio: instituições e operações; regimes de câmbio; taxas nominais e reais; impactos sobre exportações e importações; diferencial de juros e prêmios de risco", "12 a 14 Mercado interbancário; tesouraria, varejo e recuperação de crédito; curva de juros; juros nominais e reais"],
  porque: ["A Cesgranrio cobra o raciocínio econômico: o que acontece com o câmbio, a inflação e o crédito quando a Selic sobe."],
  conteudo: [
    { h: "Os quatro mercados" },
    { tabela: { cab: ["Mercado", "Prazo e finalidade", "Exemplos"], linhas: [
      ["Monetário", "Curtíssimo prazo; controle da liquidez da economia", "Operações compromissadas com títulos públicos, DI interbancário"],
      ["De crédito", "Curto e médio prazo; bancos intermediam poupadores e tomadores", "Empréstimos, financiamentos, capital de giro"],
      ["De capitais", "Médio e longo prazo; financia investimentos das empresas diretamente com investidores", "Ações, debêntures, notas comerciais"],
      ["Cambial", "Conversão de moedas", "Câmbio comercial, turismo, financeiro"]] } },
    { h: "Política monetária" },
    { lista: ["Instrumentos convencionais: operações de mercado aberto (compra e venda de títulos públicos pelo BC), depósito compulsório e assistência financeira de liquidez (redesconto). Também a comunicação (forward guidance).", "Política contracionista: eleva a Selic, vende títulos, aumenta o compulsório → menos liquidez e crédito, contenção da inflação.", "Política expansionista: o inverso.", "Instrumentos não convencionais: usados quando os juros já estão muito baixos ou em crise, como compras de ativos em larga escala (quantitative easing) e linhas especiais de liquidez.", "Regime de metas para a inflação: o CMN fixa a meta (IPCA). Desde 2025 a meta é contínua, de 3%, com intervalo de tolerância de 1,5 ponto percentual; o descumprimento é caracterizado quando a inflação acumulada em 12 meses fica fora do intervalo por seis meses consecutivos.", "Selic: taxa média das operações compromissadas de um dia lastreadas em títulos públicos federais no Selic (sistema). O Copom define a meta; a taxa efetiva fica próxima dela."] },
    { h: "Juros" },
    { lista: ["Mercado interbancário: bancos emprestam entre si por um dia; a taxa média é o DI (CDI), referência para CDBs e fundos.", "Juro real ≈ juro nominal − inflação (exato: (1 + nominal) ÷ (1 + inflação) − 1).", "Curva de juros (estrutura a termo): relação entre prazo e taxa. Inclinação positiva indica que o mercado espera juros maiores à frente ou exige prêmio por prazo; inclinação negativa sugere expectativa de cortes.", "Atividade bancária: tesouraria (gestão de liquidez e posições), varejo (pessoas e pequenas empresas, em grande escala) e recuperação de crédito (cobrança e renegociação)."] },
    { h: "Câmbio" },
    { lista: ["Operam no câmbio as instituições autorizadas pelo BC: bancos, caixas econômicas, corretoras de câmbio, distribuidoras e corretoras de títulos, entre outras.", "Regimes: fixo (BC garante uma paridade), flutuante (oferta e demanda) e intermediários (bandas, flutuação suja). O Brasil adota câmbio flutuante desde 1999, com intervenções pontuais do BC.", "Desvalorização do real (dólar mais caro): estimula exportações e encarece importações, com efeito inflacionário.", "Taxa de câmbio real: taxa nominal ajustada pela relação entre preços externos e internos; mede a competitividade.", "Diferencial de juros: juros internos altos em relação aos externos atraem capital e tendem a valorizar o real. O prêmio de risco do país (ex.: CDS) reduz esse efeito."] },
    { h: "Orçamento, títulos e dívida" },
    { lista: ["Instrumentos do orçamento: Plano Plurianual (PPA), Lei de Diretrizes Orçamentárias (LDO) e Lei Orçamentária Anual (LOA).", "Títulos do Tesouro: LTN (prefixado, sem cupom), NTN-F (prefixado, com cupom semestral), LFT (pós-fixado à Selic), NTN-B (IPCA + taxa, com cupom) e NTN-B Principal (IPCA + taxa, sem cupom).", "Tesouro Direto: programa do Tesouro Nacional e da B3 para venda de títulos a pessoas físicas pela internet.", "Dívida pública: o Tesouro emite títulos para financiar o déficit e rolar a dívida. Selic mais alta encarece a dívida atrelada a ela."] },
    { fonte: "Site do Banco Central (regime de metas, Copom, câmbio); Tesouro Nacional (Tesouro Direto); Decreto 12.079/2024 (meta contínua); edital BB 2022." }
  ],
  checklist: ["Diferencio os quatro mercados", "Sei os instrumentos da política monetária e seus efeitos", "Sei a meta contínua de inflação", "Explico DI, juro real e curva de juros", "Explico efeitos do câmbio sobre exportações e importações", "Sei os títulos do Tesouro e seus indexadores"],
  questoes: [
    { tipo: "mc", enunciado: "Para conter a inflação, o Banco Central tende a:", opcoes: ["reduzir a Selic e comprar títulos", "elevar a Selic e vender títulos no mercado aberto", "reduzir o compulsório", "emitir mais moeda", "baixar a meta de inflação"], correta: 1, explicacao: "Política contracionista." },
    { tipo: "mc", enunciado: "O mercado em que empresas captam recursos de longo prazo diretamente de investidores, emitindo ações e debêntures, é o:", opcoes: ["monetário", "de crédito", "de capitais", "cambial", "interbancário"], correta: 2, explicacao: "Mercado de capitais." },
    { tipo: "mc", enunciado: "Uma desvalorização do real frente ao dólar tende a:", opcoes: ["baratear importações", "estimular exportações", "reduzir a inflação imediatamente", "diminuir a receita dos exportadores", "valorizar a moeda nacional"], correta: 1, explicacao: "Produto brasileiro fica mais barato lá fora." },
    { tipo: "mc", enunciado: "O título público pós-fixado atrelado à taxa Selic é a:", opcoes: ["LTN", "NTN-F", "LFT", "NTN-B", "NTN-B Principal"], correta: 2, explicacao: "LFT (Tesouro Selic)." },
    { tipo: "mc", enunciado: "O título que paga IPCA mais uma taxa e não tem cupom intermediário é a:", opcoes: ["NTN-B Principal", "NTN-F", "LTN", "LFT", "NTN-B com cupom"], correta: 0, explicacao: "Tesouro IPCA+." },
    { tipo: "mc", enunciado: "A taxa média dos empréstimos de um dia entre instituições financeiras é conhecida como:", opcoes: ["TR", "TJLP", "DI (CDI)", "IPCA", "Selic meta"], correta: 2, explicacao: "Depósito interfinanceiro." },
    { tipo: "mc", enunciado: "Com juros nominais de 12% ao ano e inflação de 12% ao ano, o juro real é:", opcoes: ["24%", "12%", "1%", "zero", "negativo de 12%"], correta: 3, explicacao: "1,12/1,12 − 1 = 0." },
    { tipo: "mc", enunciado: "O regime cambial adotado pelo Brasil desde 1999 é:", opcoes: ["câmbio fixo", "bandas cambiais rígidas", "câmbio flutuante, com intervenções pontuais", "currency board", "dolarização"], correta: 2, explicacao: "Flutuante." },
    { tipo: "mc", enunciado: "A lei que estabelece as metas e prioridades da administração e orienta a elaboração da lei orçamentária anual é a:", opcoes: ["PPA", "LDO", "LOA", "LRF", "LC 179"], correta: 1, explicacao: "Lei de Diretrizes Orçamentárias." },
    { tipo: "mc", enunciado: "Um aumento do diferencial entre os juros internos e os externos, mantido o risco-país, tende a:", opcoes: ["provocar saída de capital e desvalorizar o real", "atrair capital e valorizar o real", "não afetar o câmbio", "reduzir a Selic", "aumentar as reservas do Tesouro sem efeito no câmbio"], correta: 1, explicacao: "Capital busca retorno maior." }
  ]
},

BAN3: {
  disciplina: "Conhecimentos Bancários", titulo: "Produtos bancários, mercado de capitais e garantias",
  objetivo: "Conhecer os produtos de captação, crédito, investimento, seguros e previdência, as noções de mercado de capitais e as garantias usadas no crédito.",
  edital: ["5 Produtos bancários: cartões de crédito e débito, crédito direto ao consumidor, crédito rural, poupança, capitalização, previdência, investimentos e seguros", "6 Noções de mercado de capitais", "15 Garantias do SFN: aval, fiança, penhor mercantil, alienação fiduciária, hipoteca, fianças bancárias; Fundo Garantidor de Créditos (FGC)"],
  porque: ["É o que o Agente Comercial vende no dia a dia. A banca cobra regras de rendimento, tributação e garantia."],
  conteudo: [
    { h: "Captação e investimentos" },
    { tabela: { cab: ["Produto", "Características"], linhas: [
      ["Depósito à vista (conta corrente)", "Sem remuneração; movimentação livre"],
      ["Poupança", "Com Selic acima de 8,5% a.a.: 0,5% ao mês + TR. Com Selic igual ou abaixo de 8,5%: 70% da Selic + TR. Rendimento mensal na data de aniversário; isenta de IR para pessoa física; coberta pelo FGC"],
      ["CDB / RDB", "Títulos de renda fixa emitidos por bancos; CDB é negociável, RDB não; IR regressivo; coberto pelo FGC"],
      ["LCI / LCA", "Lastreadas em crédito imobiliário e do agronegócio; isentas de IR para pessoa física; cobertas pelo FGC"],
      ["Fundos de investimento", "Condomínio de investidores administrado por gestor; regulados pela CVM; não cobertos pelo FGC; come-cotas em maio e novembro nos fundos sujeitos"],
      ["Capitalização", "Guarda programada com sorteios; supervisão da Susep; não é investimento propriamente dito, pode devolver menos que o pago em resgate antecipado"]] } },
    { h: "Crédito" },
    { lista: ["Cartão de crédito: pagamento postergado; rotativo quando paga menos que o total da fatura. Pela Lei 14.690/2023, juros e encargos do rotativo e do parcelamento da fatura não podem superar 100% do valor original da dívida.", "Cartão de débito: debita na hora o saldo da conta.", "Cheque especial: limite pré-aprovado; juros limitados a 8% ao mês para pessoas físicas e MEI (Resolução CMN 4.765/2019).", "CDC (crédito direto ao consumidor): financiamento de bens e serviços com prestações fixas; o bem pode ficar alienado fiduciariamente.", "Crédito consignado: parcelas descontadas na folha ou no benefício; menor risco e menor taxa.", "Crédito rural: finalidades de custeio, investimento, comercialização e industrialização; regras no Manual de Crédito Rural do BC."] },
    { h: "Previdência e seguros" },
    { tabela: { cab: ["", "PGBL", "VGBL"], linhas: [
      ["Para quem", "Quem faz declaração completa do IR", "Quem faz declaração simplificada ou é isento, ou já aplica 12%"],
      ["Benefício fiscal", "Deduz contribuições até 12% da renda bruta tributável", "Não deduz"],
      ["IR no resgate", "Sobre o valor total", "Só sobre os rendimentos"]] } },
    { p: "Tabelas de IR: progressiva (alíquotas da tabela mensal) ou regressiva (35% caindo até 10% após 10 anos). Seguro: o segurado paga o prêmio; a indenização paga ao beneficiário quando ocorre o sinistro; a franquia é a parte do prejuízo arcada pelo segurado." },
    { h: "Mercado de capitais" },
    { lista: ["Ações: frações do capital da sociedade anônima. Ordinárias (ON) dão direito a voto; preferenciais (PN) têm preferência no recebimento de dividendos.", "Mercado primário: emissão de títulos novos (IPO, no caso de abertura de capital); o dinheiro vai para a empresa. Mercado secundário: negociação entre investidores na bolsa.", "Debêntures: títulos de dívida de sociedades anônimas; debêntures incentivadas de infraestrutura têm isenção de IR para pessoa física.", "Dividendos e juros sobre capital próprio: formas de remunerar o acionista."] },
    { h: "Garantias" },
    { tabela: { cab: ["Garantia", "Tipo", "Características"], linhas: [
      ["Aval", "Pessoal (fidejussória)", "Em títulos de crédito (nota promissória, cheque); avalista é devedor solidário, sem benefício de ordem"],
      ["Fiança", "Pessoal", "Contrato acessório; o fiador tem benefício de ordem, salvo renúncia; exige autorização do cônjuge (exceto regime de separação absoluta)"],
      ["Penhor", "Real, bem móvel", "Em regra, o bem é entregue ao credor; no penhor rural, mercantil e industrial, permanece com o devedor"],
      ["Hipoteca", "Real, bem imóvel (também navios e aeronaves)", "O bem permanece com o devedor; registrada no cartório de imóveis"],
      ["Alienação fiduciária", "Real", "O credor detém a propriedade resolúvel até a quitação; o devedor fica com a posse direta. Muito usada em veículos e imóveis"],
      ["Fiança bancária", "Pessoal, prestada por banco", "Banco garante obrigação do cliente perante terceiro"]] } },
    { h: "Fundo Garantidor de Créditos (FGC)" },
    { lista: ["Associação privada sem fins lucrativos, mantida pelas instituições associadas.", "Garante até R$ 250 mil por CPF ou CNPJ, por conglomerado financeiro, com teto de R$ 1 milhão a cada período de 4 anos para garantias pagas.", "Cobertos: depósitos à vista e a prazo, poupança, CDB, RDB, letras de câmbio, LCI, LCA, LH, LIG, entre outros.", "Não cobertos: fundos de investimento, ações, debêntures, títulos públicos, previdência, CRI e CRA."] },
    { fonte: "Lei 12.703/2012 (poupança); Lei 14.690/2023; Resolução CMN 4.765/2019; estatuto e regulamento do FGC; Código Civil (garantias)." }
  ],
  checklist: ["Sei a regra de remuneração da poupança", "Sei quais produtos são cobertos pelo FGC e o limite", "Sei os limites de juros do cheque especial e do rotativo", "Diferencio PGBL e VGBL", "Diferencio ações ON e PN, mercado primário e secundário", "Diferencio aval, fiança, penhor, hipoteca e alienação fiduciária"],
  questoes: [
    { tipo: "mc", enunciado: "Com a Selic em 10,5% ao ano, a poupança rende:", opcoes: ["70% da Selic + TR", "0,5% ao mês + TR", "100% do CDI", "IPCA + 6%", "0,5% ao mês sem TR"], correta: 1, explicacao: "Selic acima de 8,5%: regra antiga." },
    { tipo: "mc", enunciado: "Não é coberto pelo FGC:", opcoes: ["CDB", "LCI", "poupança", "cotas de fundo de investimento", "depósito à vista"], correta: 3, explicacao: "Fundos não têm cobertura." },
    { tipo: "mc", enunciado: "O limite de cobertura do FGC por CPF, por conglomerado, é de:", opcoes: ["R$ 100 mil", "R$ 250 mil", "R$ 500 mil", "R$ 1 milhão", "ilimitado"], correta: 1, explicacao: "R$ 250 mil." },
    { tipo: "mc", enunciado: "Um cliente que faz a declaração completa do IR e quer deduzir as contribuições da base de cálculo deve optar pelo:", opcoes: ["VGBL", "PGBL", "título de capitalização", "CDB", "LCA"], correta: 1, explicacao: "PGBL deduz até 12% da renda bruta." },
    { tipo: "mc", enunciado: "No VGBL, o imposto de renda no resgate incide sobre:", opcoes: ["o valor total", "somente os rendimentos", "as contribuições", "nada, pois é isento", "o saldo inicial"], correta: 1, explicacao: "Só sobre os rendimentos." },
    { tipo: "mc", enunciado: "A garantia dada em título de crédito, na qual o garantidor é devedor solidário sem benefício de ordem, é:", opcoes: ["fiança", "aval", "penhor", "hipoteca", "anticrese"], correta: 1, explicacao: "Aval." },
    { tipo: "mc", enunciado: "No financiamento de veículos, a garantia mais comum, em que o credor detém a propriedade resolúvel até a quitação, é:", opcoes: ["hipoteca", "aval", "alienação fiduciária", "penhor comum", "fiança bancária"], correta: 2, explicacao: "Alienação fiduciária." },
    { tipo: "mc", enunciado: "Ações que conferem direito a voto nas assembleias são:", opcoes: ["preferenciais (PN)", "ordinárias (ON)", "debêntures", "units obrigatórias", "bônus de subscrição"], correta: 1, explicacao: "Ordinárias." },
    { tipo: "mc", enunciado: "No mercado primário de ações:", opcoes: ["investidores negociam ações entre si", "a empresa emite novas ações e recebe os recursos", "só são negociados títulos públicos", "não há participação de bancos", "não há registro na CVM"], correta: 1, explicacao: "Emissão primária." },
    { tipo: "mc", enunciado: "Pela Resolução CMN 4.765/2019, os juros do cheque especial para pessoas físicas são limitados a:", opcoes: ["2% ao mês", "4% ao mês", "8% ao mês", "12% ao mês", "não há limite"], correta: 2, explicacao: "8% ao mês." }
  ]
},

BAN4: {
  disciplina: "Conhecimentos Bancários", titulo: "Prevenção à lavagem de dinheiro, sigilo bancário e LGPD",
  objetivo: "Conhecer as etapas da lavagem, os deveres das instituições na prevenção, as hipóteses de quebra do sigilo e as regras da LGPD.",
  edital: ["16 Crime de lavagem de dinheiro: conceito e etapas; prevenção e combate (Lei 9.613/1998 e alterações; Circular BCB 3.978/2020; Carta Circular BCB 4.001/2020)", "18 Sigilo bancário: Lei Complementar 105/2001", "19 Lei Geral de Proteção de Dados: Lei 13.709/2018"],
  porque: ["Compliance é tema certo nas provas recentes de bancos.", "O funcionário de agência é o primeiro a identificar operações suspeitas."],
  conteudo: [
    { h: "Lavagem de dinheiro" },
    { lista: ["Conceito (Lei 9.613/1998, art. 1º): ocultar ou dissimular a natureza, origem, localização, disposição, movimentação ou propriedade de bens, direitos ou valores provenientes, direta ou indiretamente, de infração penal. Pena de reclusão de 3 a 10 anos e multa.", "Desde a Lei 12.683/2012, qualquer infração penal pode ser antecedente (não há mais rol taxativo).", "Etapas: colocação (introdução do dinheiro no sistema, ex.: depósitos fracionados), ocultação ou estratificação (várias transações para dificultar o rastreamento) e integração (o recurso volta à economia com aparência lícita, ex.: compra de imóveis, empresas)."] },
    { h: "Deveres das instituições (Lei 9.613 e Circular BCB 3.978/2020)" },
    { lista: ["Política de prevenção à lavagem de dinheiro e ao financiamento do terrorismo (PLD/FT), aprovada pela diretoria ou conselho, com diretor responsável.", "Avaliação interna de risco: classificar clientes, produtos, serviços e canais por risco (abordagem baseada em risco).", "Conheça seu cliente (KYC), seu funcionário, seu parceiro e seu fornecedor; identificação de pessoas expostas politicamente (PEP) e do beneficiário final.", "Monitoramento, seleção e análise de operações atípicas; decisão sobre comunicação em até 45 dias da seleção da operação.", "Comunicação ao Coaf até o dia útil seguinte à decisão de comunicar, sem dar ciência ao cliente.", "Comunicação automática de operações em espécie, como depósitos, saques ou provisionamentos de saque, de valor igual ou superior a R$ 50 mil.", "A Carta Circular BCB 4.001/2020 lista situações que podem configurar indício de lavagem ou financiamento do terrorismo (ex.: movimentação incompatível com a renda, fracionamento para evitar comunicação, resistência a fornecer informações).", "Coaf: unidade de inteligência financeira, vinculada administrativamente ao Banco Central (Lei 13.974/2020)."] },
    { h: "Sigilo bancário (LC 105/2001)" },
    { lista: ["As instituições financeiras conservam sigilo em suas operações ativas e passivas e serviços prestados.", "Não constitui violação do sigilo: troca de informações entre instituições para fins cadastrais (inclusive por centrais de risco), fornecimento de informações ao cadastro de emitentes de cheques sem fundos, comunicação de ilícitos às autoridades, revelação com consentimento expresso do interessado e fornecimento de informações à Receita Federal nas hipóteses da lei.", "A quebra pode ser determinada pelo Poder Judiciário e pelas CPIs. A Receita pode examinar documentos e registros quando houver processo administrativo ou procedimento fiscal em curso e os exames forem indispensáveis (art. 6º), o que o STF considerou constitucional.", "Quebrar o sigilo fora das hipóteses autorizadas é crime: reclusão de 1 a 4 anos e multa (art. 10)."] },
    { h: "LGPD (Lei 13.709/2018)" },
    { lista: ["Dado pessoal: informação relacionada a pessoa natural identificada ou identificável. Dado sensível: origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, dado de saúde ou vida sexual, genético ou biométrico.", "Agentes de tratamento: controlador (toma as decisões) e operador (trata em nome do controlador). Encarregado (DPO): canal entre controlador, titulares e ANPD.", "Bases legais (art. 7º): consentimento, cumprimento de obrigação legal ou regulatória, execução de políticas públicas, estudos por órgão de pesquisa, execução de contrato, exercício regular de direitos, proteção da vida, tutela da saúde, legítimo interesse e proteção do crédito.", "Direitos do titular: confirmação e acesso, correção, anonimização ou eliminação de dados desnecessários, portabilidade, informação sobre compartilhamento, revogação do consentimento.", "ANPD: Autoridade Nacional de Proteção de Dados, autarquia de natureza especial.", "Sanções: advertência, multa simples de até 2% do faturamento, limitada a R$ 50 milhões por infração, multa diária, publicização, bloqueio e eliminação dos dados, entre outras."] },
    { fonte: "Lei 9.613/1998 (com Lei 12.683/2012); Circular BCB 3.978/2020; Carta Circular BCB 4.001/2020; Lei 13.974/2020; LC 105/2001; Lei 13.709/2018." }
  ],
  checklist: ["Sei as três etapas da lavagem", "Sei que qualquer infração penal pode ser antecedente", "Sei os deveres da Circular 3.978 (KYC, PEP, avaliação de risco, prazos, R$ 50 mil)", "Sei o que não é quebra de sigilo e quem pode quebrar", "Diferencio dado pessoal e sensível, controlador e operador", "Sei as bases legais e as sanções da LGPD"],
  questoes: [
    { tipo: "mc", enunciado: "A etapa da lavagem em que o dinheiro ilícito é introduzido no sistema financeiro, por exemplo com depósitos fracionados, é a:", opcoes: ["integração", "ocultação", "colocação", "estratificação", "dissimulação final"], correta: 2, explicacao: "Colocação." },
    { tipo: "mc", enunciado: "Após a Lei 12.683/2012, o crime antecedente da lavagem de dinheiro:", opcoes: ["deve ser tráfico de drogas", "deve constar de rol taxativo", "pode ser qualquer infração penal", "só pode ser crime contra a administração", "deve ter pena superior a 4 anos"], correta: 2, explicacao: "Rol taxativo foi extinto." },
    { tipo: "mc", enunciado: "Ao comunicar uma operação suspeita ao Coaf, a instituição deve:", opcoes: ["avisar o cliente", "não dar ciência ao cliente", "bloquear todas as contas do cliente", "pedir autorização judicial", "aguardar 90 dias"], correta: 1, explicacao: "Vedado dar ciência ao envolvido." },
    { tipo: "mc", enunciado: "Pela Circular BCB 3.978/2020, saques em espécie são comunicados ao Coaf quando iguais ou superiores a:", opcoes: ["R$ 10 mil", "R$ 30 mil", "R$ 50 mil", "R$ 100 mil", "R$ 1 milhão"], correta: 2, explicacao: "R$ 50 mil." },
    { tipo: "mc", enunciado: "Não constitui violação do sigilo bancário, segundo a LC 105/2001:", opcoes: ["divulgar o saldo do cliente a um vizinho", "trocar informações entre instituições financeiras para fins cadastrais", "fornecer extrato a jornalista", "informar dívidas do cliente ao empregador", "publicar movimentações em rede social"], correta: 1, explicacao: "Art. 1º, § 3º, I." },
    { tipo: "mc", enunciado: "A quebra do sigilo bancário pode ser determinada por:", opcoes: ["qualquer delegado de polícia", "Comissão Parlamentar de Inquérito", "gerente da agência", "Procon", "Ministério Público, por ato próprio, em qualquer caso"], correta: 1, explicacao: "CPIs e Judiciário." },
    { tipo: "mc", enunciado: "Na LGPD, quem toma as decisões sobre o tratamento de dados pessoais é o:", opcoes: ["operador", "encarregado", "controlador", "titular", "ANPD"], correta: 2, explicacao: "Controlador." },
    { tipo: "mc", enunciado: "É exemplo de dado pessoal sensível na LGPD:", opcoes: ["número de telefone", "endereço", "dado biométrico", "e-mail profissional", "número da conta corrente"], correta: 2, explicacao: "Biometria é sensível." },
    { tipo: "mc", enunciado: "A multa simples da LGPD é limitada, por infração, a:", opcoes: ["R$ 5 milhões", "R$ 10 milhões", "R$ 50 milhões", "R$ 100 milhões", "10% do faturamento, sem teto"], correta: 2, explicacao: "Até 2% do faturamento, limitada a R$ 50 milhões." },
    { tipo: "mc", enunciado: "Classificar clientes, produtos e canais por grau de risco de lavagem, conforme a Circular 3.978, é a:", opcoes: ["integração", "avaliação interna de risco", "ocultação", "auditoria externa", "quebra de sigilo"], correta: 1, explicacao: "Abordagem baseada em risco." }
  ]
},

BAN5: {
  disciplina: "Conhecimentos Bancários", titulo: "Anticorrupção, segurança cibernética e autorregulação",
  objetivo: "Conhecer a Lei Anticorrupção e seu decreto, a Resolução CMN 4.893/2021 e o sistema de autorregulação bancária.",
  edital: ["17 Autorregulação bancária e Normativos SARB", "20 Legislação anticorrupção: Lei 12.846/2013 e Decreto 11.129/2022", "21 Segurança cibernética: Resolução CMN 4.893/2021"],
  porque: ["São normas recentes que entraram no edital de 2022; questões costumam ser de leitura direta."],
  conteudo: [
    { h: "Lei Anticorrupção (Lei 12.846/2013)" },
    { lista: ["Responsabilização objetiva, administrativa e civil, de pessoas jurídicas por atos lesivos à administração pública, nacional ou estrangeira. A responsabilidade da empresa não exclui a das pessoas físicas (dirigentes), que respondem na medida da culpabilidade.", "Atos lesivos (art. 5º): prometer, oferecer ou dar vantagem indevida a agente público; financiar a prática de ilícitos; usar interposta pessoa para ocultar interesses; fraudar licitações e contratos; dificultar investigação ou fiscalização.", "Sanções administrativas: multa de 0,1% a 20% do faturamento bruto do exercício anterior ao processo (nunca inferior à vantagem auferida, quando estimável) e publicação extraordinária da decisão condenatória.", "Sanções judiciais: perdimento de bens, suspensão ou interdição parcial de atividades, dissolução compulsória e proibição de receber incentivos e empréstimos públicos por 1 a 5 anos.", "Acordo de leniência: com a pessoa jurídica que colabore efetivamente; no Executivo federal, celebrado pela CGU. Pode reduzir a multa em até 2/3 e isentar da publicação extraordinária e da proibição de receber incentivos. Não exime de reparar integralmente o dano."] },
    { h: "Decreto 11.129/2022" },
    { lista: ["Regulamenta a Lei 12.846 no Executivo federal, substituindo o Decreto 8.420/2015.", "Disciplina o processo administrativo de responsabilização (PAR), o cálculo da multa e o acordo de leniência.", "Define programa de integridade: mecanismos e procedimentos internos de integridade, auditoria, incentivo à denúncia de irregularidades e aplicação de códigos de ética e conduta, com o objetivo de prevenir, detectar e sanar desvios, fraudes e atos ilícitos. Um programa efetivo pode reduzir a multa."] },
    { h: "Segurança cibernética (Resolução CMN 4.893/2021)" },
    { lista: ["Exige que as instituições implementem e mantenham política de segurança cibernética, compatível com porte, perfil de risco, modelo de negócio e sensibilidade dos dados.", "A política aborda objetivos de segurança, procedimentos e controles (autenticação, criptografia, prevenção e detecção de intrusão, prevenção de vazamento, testes e varreduras, proteção contra softwares maliciosos, rastreabilidade, cópias de segurança), registro e análise de incidentes relevantes e compartilhamento de informações sobre incidentes com outras instituições.", "Exige plano de ação e de resposta a incidentes, com diretor responsável, e relatório anual sobre sua implementação.", "Regula a contratação de serviços de processamento, armazenamento de dados e computação em nuvem, inclusive no exterior: a instituição continua responsável, deve avaliar o prestador e comunicar a contratação de serviços relevantes ao Banco Central.", "Incidentes relevantes devem ser comunicados ao Banco Central."] },
    { h: "Autorregulação bancária (SARB)" },
    { lista: ["O Sistema de Autorregulação Bancária foi criado pela Febraban em 2008: as instituições signatárias aderem voluntariamente a normas de conduta que vão além da regulação oficial.", "Os normativos SARB tratam de temas como relacionamento com clientes, crédito responsável, prevenção a fraudes, atendimento, ofertas, cobrança, publicidade e responsabilidade socioambiental.", "A autorregulação tem órgãos próprios de supervisão e pode aplicar medidas às signatárias que descumprirem os normativos."] },
    { fonte: "Lei 12.846/2013; Decreto 11.129/2022; Resolução CMN 4.893/2021; site do SARB (Febraban)." }
  ],
  checklist: ["Sei que a responsabilidade da pessoa jurídica é objetiva", "Sei os limites da multa e as sanções judiciais", "Sei quem celebra a leniência e seus benefícios", "Sei o que é programa de integridade", "Sei os elementos da política de segurança cibernética e as regras da nuvem", "Sei o que é o SARB"],
  questoes: [
    { tipo: "mc", enunciado: "Na Lei 12.846/2013, a responsabilidade administrativa e civil da pessoa jurídica é:", opcoes: ["subjetiva, exigindo dolo dos dirigentes", "objetiva", "inexistente, recaindo só sobre pessoas físicas", "subsidiária", "dependente de condenação penal"], correta: 1, explicacao: "Art. 1º e 2º." },
    { tipo: "mc", enunciado: "A multa administrativa da Lei Anticorrupção varia de:", opcoes: ["1% a 10% do lucro", "0,1% a 20% do faturamento bruto do exercício anterior", "R$ 6 mil a R$ 60 mil", "5% a 50% do patrimônio", "valor fixo de R$ 1 milhão"], correta: 1, explicacao: "Art. 6º, I." },
    { tipo: "mc", enunciado: "No Poder Executivo federal, o acordo de leniência da Lei 12.846 é celebrado pela:", opcoes: ["Polícia Federal", "CGU", "CVM", "AGU sozinha", "Febraban"], correta: 1, explicacao: "Controladoria-Geral da União." },
    { tipo: "mc", enunciado: "O acordo de leniência pode reduzir a multa em até:", opcoes: ["1/3", "metade", "2/3", "100%", "10%"], correta: 2, explicacao: "Art. 16, § 2º." },
    { tipo: "mc", enunciado: "O acordo de leniência:", opcoes: ["exime a empresa de reparar o dano", "não exime da obrigação de reparar integralmente o dano", "extingue a responsabilidade dos dirigentes", "é sigiloso para sempre", "dispensa colaboração efetiva"], correta: 1, explicacao: "Art. 16, § 3º." },
    { tipo: "mc", enunciado: "O Decreto 11.129/2022 substituiu, na regulamentação da Lei Anticorrupção, o:", opcoes: ["Decreto 8.420/2015", "Decreto 1.171/1994", "Decreto 9.203/2017", "Decreto 7.203/2010", "Decreto 6.029/2007"], correta: 0, explicacao: "Revogou o Decreto 8.420/2015." },
    { tipo: "mc", enunciado: "Segundo a Resolução CMN 4.893/2021, ao contratar computação em nuvem a instituição financeira:", opcoes: ["transfere toda a responsabilidade ao prestador", "permanece responsável e deve avaliar o prestador", "fica dispensada de política de segurança", "só pode contratar no Brasil", "não precisa comunicar o Banco Central"], correta: 1, explicacao: "A responsabilidade continua da instituição." },
    { tipo: "mc", enunciado: "A política de segurança cibernética da Resolução 4.893 deve ser compatível com:", opcoes: ["apenas o porte da instituição", "porte, perfil de risco, modelo de negócio e sensibilidade dos dados", "o padrão único definido pela Febraban", "o orçamento de TI disponível", "a legislação estrangeira"], correta: 1, explicacao: "Proporcionalidade." },
    { tipo: "mc", enunciado: "O SARB caracteriza-se por:", opcoes: ["ser norma do Banco Central de adesão obrigatória", "adesão voluntária das instituições a normas de conduta criadas pela Febraban", "substituir o CDC", "ser órgão da CVM", "aplicar penas de prisão"], correta: 1, explicacao: "Autorregulação." },
    { tipo: "mc", enunciado: "Conjunto de mecanismos internos de integridade, auditoria e incentivo à denúncia, que pode reduzir a multa da Lei Anticorrupção, é o:", opcoes: ["acordo de leniência", "programa de integridade", "PAR", "termo de ajustamento de conduta", "plano de continuidade"], correta: 1, explicacao: "Decreto 11.129/2022." }
  ]
},

BAN6: {
  disciplina: "Conhecimentos Bancários", titulo: "Responsabilidade socioambiental e ASG",
  objetivo: "Entender a regulação de responsabilidade social, ambiental e climática das instituições e os conceitos de finanças sustentáveis.",
  edital: ["23 Política de Responsabilidade Socioambiental do Banco do Brasil", "24 ASG (Ambiental, Social e Governança): economia sustentável; financiamentos; mercado PJ"],
  porque: ["O BB se posiciona como banco sustentável e cobra o tema na prova."],
  conteudo: [
    { alerta: "O texto da Política de Responsabilidade Socioambiental do próprio Banco do Brasil não foi reproduzido aqui. Leia a versão vigente no site de relações com investidores do BB antes da prova." },
    { h: "Regulação do CMN" },
    { lista: ["Resolução CMN 4.945/2021: exige que as instituições estabeleçam e implementem a Política de Responsabilidade Social, Ambiental e Climática (PRSAC), com princípios e diretrizes de natureza social, ambiental e climática para os negócios e para a relação com as partes interessadas.", "A PRSAC observa os princípios de relevância (grau de exposição aos riscos) e proporcionalidade (compatibilidade com porte, natureza dos negócios e complexidade).", "Exige diretor responsável, ações para implementação, monitoramento e divulgação ao público.", "Resolução CMN 4.943/2021: incluiu os riscos social, ambiental e climático na estrutura de gerenciamento de riscos das instituições."] },
    { h: "Riscos" },
    { tabela: { cab: ["Risco", "Exemplo"], linhas: [
      ["Social", "Financiar empresa com trabalho análogo à escravidão ou que viole direitos de comunidades"],
      ["Ambiental", "Financiar atividade com desmatamento ilegal ou contaminação"],
      ["Climático de transição", "Perdas com mudanças regulatórias e tecnológicas da economia de baixo carbono (ex.: setor muito dependente de combustível fóssil)"],
      ["Climático físico", "Perdas por eventos extremos, como secas e enchentes, que afetam tomadores de crédito rural"]] } },
    { h: "ASG (ESG)" },
    { lista: ["Ambiental: emissões, uso de recursos, biodiversidade, mudança do clima.", "Social: direitos humanos e trabalhistas, diversidade, relação com comunidades e clientes.", "Governança: ética, transparência, estrutura de conselhos, combate à corrupção, gestão de riscos.", "Economia sustentável: crescimento que concilia resultado econômico, inclusão social e preservação ambiental.", "Financiamentos sustentáveis: linhas com destinação verde (energia renovável, eficiência energética, agricultura de baixo carbono), títulos verdes e sociais (green e social bonds) e créditos ligados a metas de sustentabilidade (sustainability-linked).", "Mercado PJ: empresas com boas práticas ASG tendem a ter menor risco e acesso a crédito em melhores condições; bancos avaliam critérios socioambientais na concessão.", "Greenwashing: divulgar práticas sustentáveis que a empresa não adota de fato; é risco reputacional e regulatório."] },
    { fonte: "Resoluções CMN 4.943/2021 e 4.945/2021; edital BB 2022." }
  ],
  checklist: ["Sei o que é a PRSAC e os princípios de relevância e proporcionalidade", "Sei que a Res. 4.943 incluiu os riscos social, ambiental e climático", "Diferencio risco climático físico e de transição", "Sei o que cada letra de ASG cobre", "Sei o que são títulos verdes e greenwashing", "Li a política socioambiental vigente do BB"],
  questoes: [
    { tipo: "mc", enunciado: "A Resolução CMN 4.945/2021 trata da:", opcoes: ["política de segurança cibernética", "Política de Responsabilidade Social, Ambiental e Climática", "ouvidoria", "prevenção à lavagem de dinheiro", "política de relacionamento com clientes"], correta: 1, explicacao: "PRSAC." },
    { tipo: "mc", enunciado: "Na PRSAC, o princípio que considera o grau de exposição da instituição aos riscos social, ambiental e climático é o da:", opcoes: ["proporcionalidade", "relevância", "eficiência", "transparência", "legalidade"], correta: 1, explicacao: "Relevância." },
    { tipo: "mc", enunciado: "Perdas de uma carteira de crédito rural causadas por secas extremas exemplificam risco:", opcoes: ["climático físico", "climático de transição", "de mercado", "operacional de TI", "de liquidez"], correta: 0, explicacao: "Evento climático extremo." },
    { tipo: "mc", enunciado: "Perdas em empresas de combustíveis fósseis por novas regras de descarbonização são risco:", opcoes: ["climático físico", "climático de transição", "social", "de crédito apenas", "cambial"], correta: 1, explicacao: "Transição para economia de baixo carbono." },
    { tipo: "mc", enunciado: "Na sigla ASG, a letra G refere-se a:", opcoes: ["garantias", "governança", "gestão de pessoas", "ganhos", "geração de energia"], correta: 1, explicacao: "Governança." },
    { tipo: "mc", enunciado: "Divulgar compromissos ambientais que a empresa não pratica de fato é:", opcoes: ["inbound marketing", "greenwashing", "compliance", "leniência", "relevância"], correta: 1, explicacao: "Greenwashing." },
    { tipo: "mc", enunciado: "Os riscos social, ambiental e climático foram incluídos na estrutura de gerenciamento de riscos das instituições pela Resolução CMN:", opcoes: ["4.893/2021", "4.943/2021", "4.949/2021", "4.860/2020", "4.765/2019"], correta: 1, explicacao: "Res. 4.943/2021." },
    { tipo: "mc", enunciado: "Títulos de dívida cujos recursos financiam projetos ambientais, como energia renovável, são chamados:", opcoes: ["debêntures conversíveis", "títulos verdes (green bonds)", "LFT", "CDB pós-fixado", "letras de câmbio"], correta: 1, explicacao: "Green bonds." },
    { tipo: "mc", enunciado: "Financiar empresa flagrada com trabalho análogo à escravidão expõe o banco principalmente a risco:", opcoes: ["social", "climático físico", "cambial", "de mercado", "de liquidez"], correta: 0, explicacao: "Risco social e reputacional." },
    { tipo: "mc", enunciado: "O princípio da proporcionalidade, na PRSAC, considera:", opcoes: ["a exposição aos riscos", "a compatibilidade com o porte e a complexidade da instituição", "o lucro do exercício", "o número de agências", "a nota de rating"], correta: 1, explicacao: "Proporcionalidade." }
  ]
},

ATU1: {
  disciplina: "Atualidades do Mercado Financeiro", titulo: "Bancos na era digital",
  objetivo: "Entender as transformações digitais do sistema financeiro e os novos atores e modelos de negócio.",
  edital: ["1 Os bancos na era digital: atualidade, tendências e desafios", "2 Internet banking", "3 Mobile banking", "4 Open banking", "5 Novos modelos de negócios", "6 Fintechs, startups e big techs", "7 Sistema de bancos-sombra (shadow banking)", "10 Marketplace", "11 Correspondentes bancários", "14 Segmentação e interações digitais", "15 Transformação digital no Sistema Financeiro"],
  porque: ["São 5 questões de Conhecimentos Básicos; com estes dois módulos o conteúdo fica coberto."],
  conteudo: [
    { h: "Canais digitais" },
    { lista: ["Internet banking: acesso aos serviços pelo navegador, no computador.", "Mobile banking: acesso por aplicativo no celular; hoje é o principal canal de transações no Brasil segundo a Pesquisa Febraban de Tecnologia Bancária.", "Interações digitais permitem segmentar clientes por comportamento em tempo real e oferecer produtos personalizados (hiperpersonalização), com uso de dados e inteligência artificial."] },
    { h: "Open banking e open finance" },
    { lista: ["Compartilhamento padronizado de dados e serviços entre instituições, por meio de APIs, sempre com consentimento do cliente.", "No Brasil, implantado pelo Banco Central em fases a partir de 2021 (dados das instituições, dados cadastrais e transacionais dos clientes, serviços de pagamento, e depois investimentos, seguros, previdência e câmbio), passando a se chamar Open Finance.", "O cliente é dono dos dados: escolhe com quem compartilha, por quanto tempo e pode revogar o consentimento.", "Objetivos: aumentar a concorrência, reduzir custos e permitir ofertas melhores."] },
    { h: "Novos atores" },
    { tabela: { cab: ["Ator", "O que é"], linhas: [
      ["Fintech", "Empresa que usa tecnologia para oferecer serviços financeiros; no Brasil, as reguladas incluem Sociedades de Crédito Direto (SCD) e Sociedades de Empréstimo entre Pessoas (SEP), além de instituições de pagamento"],
      ["Startup", "Empresa nova, com modelo de negócio escalável e repetível em ambiente de incerteza"],
      ["Big tech", "Grande empresa de tecnologia (Google, Apple, Amazon, Meta etc.) que entra em serviços financeiros aproveitando base de usuários e dados"],
      ["Banco digital", "Banco que opera essencialmente por canais digitais, sem rede de agências"],
      ["Bancos-sombra (shadow banking)", "Intermediação de crédito feita por entidades fora do sistema bancário regulado tradicional; pode gerar riscos sistêmicos por menor supervisão"]] } },
    { h: "Modelos de negócio" },
    { lista: ["Marketplace: plataforma que reúne produtos de vários fornecedores; bancos oferecem produtos de terceiros (seguros, investimentos, até bens de consumo) no próprio app.", "Banking as a Service (BaaS): instituição regulada oferece sua infraestrutura para outras empresas oferecerem serviços financeiros com sua marca.", "Ecossistemas: o banco se integra a serviços do dia a dia do cliente.", "Correspondentes bancários: empresas contratadas por instituições financeiras para prestar serviços em nome delas (recebimentos, pagamentos, encaminhamento de propostas de crédito), regulados pelo CMN. A instituição contratante responde pelos serviços prestados."] },
    { h: "Desafios" },
    { p: "Segurança cibernética e fraudes (engenharia social, golpes por aplicativos de mensagem), inclusão digital, proteção de dados (LGPD), concorrência com fintechs e big techs e custo da rede física de agências." },
    { fonte: "Banco Central do Brasil (Open Finance, fintechs, correspondentes); Febraban, Pesquisa de Tecnologia Bancária; edital BB 2022." }
  ],
  checklist: ["Diferencio internet e mobile banking", "Sei o que é Open Finance e o papel do consentimento", "Diferencio fintech, startup, big tech e banco digital", "Explico shadow banking", "Explico marketplace, BaaS e correspondente bancário"],
  questoes: [
    { tipo: "mc", enunciado: "No Open Finance, o compartilhamento de dados do cliente entre instituições depende de:", opcoes: ["autorização do Banco Central caso a caso", "consentimento do cliente", "contrato entre as instituições apenas", "decisão judicial", "nada, é automático"], correta: 1, explicacao: "Consentimento do titular." },
    { tipo: "mc", enunciado: "Intermediação de crédito realizada por entidades fora do sistema bancário regulado tradicional é chamada de:", opcoes: ["open banking", "shadow banking", "mobile banking", "marketplace", "BaaS"], correta: 1, explicacao: "Bancos-sombra." },
    { tipo: "mc", enunciado: "A Sociedade de Crédito Direto (SCD) é um tipo de:", opcoes: ["big tech", "fintech regulada pelo Banco Central", "cooperativa de crédito", "banco múltiplo", "corretora de câmbio"], correta: 1, explicacao: "Fintech de crédito." },
    { tipo: "mc", enunciado: "Lotérica que recebe contas e encaminha pedidos em nome de um banco atua como:", opcoes: ["fintech", "correspondente bancário", "banco digital", "cooperativa", "ouvidoria"], correta: 1, explicacao: "Correspondente." },
    { tipo: "mc", enunciado: "Um banco que oferece no seu app seguros, investimentos e produtos de diversas empresas parceiras adota o modelo de:", opcoes: ["shadow banking", "marketplace", "redesconto", "câmbio flutuante", "SARB"], correta: 1, explicacao: "Plataforma de terceiros." },
    { tipo: "mc", enunciado: "Grandes empresas de tecnologia que passam a oferecer meios de pagamento e crédito aproveitando sua base de usuários são as:", opcoes: ["fintechs", "big techs", "startups", "cooperativas", "SEPs"], correta: 1, explicacao: "Big techs." },
    { tipo: "mc", enunciado: "O Open Finance usa, para troca padronizada de dados, principalmente:", opcoes: ["arquivos em papel", "APIs", "fax", "redes sociais", "planilhas por e-mail"], correta: 1, explicacao: "Interfaces de programação." },
    { tipo: "mc", enunciado: "Quanto aos serviços prestados por correspondente bancário, a instituição financeira contratante:", opcoes: ["não tem responsabilidade", "responde por eles", "responde só se houver dolo", "transfere a responsabilidade ao Banco Central", "responde apenas por fraudes"], correta: 1, explicacao: "Responsabilidade da contratante." },
    { tipo: "mc", enunciado: "Uma infraestrutura bancária regulada oferecida a empresas não financeiras para que ofereçam conta e cartão com sua própria marca caracteriza:", opcoes: ["Banking as a Service", "shadow banking", "câmbio turismo", "crédito rural", "SARB"], correta: 0, explicacao: "BaaS." },
    { tipo: "mc", enunciado: "Um desafio central da digitalização bancária é:", opcoes: ["a eliminação de fraudes por engenharia social", "a segurança cibernética e o combate a golpes", "a extinção da regulação", "o fim da concorrência", "a redução do uso de dados"], correta: 1, explicacao: "Fraudes digitais crescem com os canais." }
  ]
},

ATU2: {
  disciplina: "Atualidades do Mercado Financeiro", titulo: "Moeda, criptoativos, arranjos de pagamento e Pix",
  objetivo: "Conhecer funções da moeda, blockchain e criptomoedas, arranjos de pagamento e o funcionamento do Pix.",
  edital: ["8 Funções da moeda", "9 O dinheiro na era digital: blockchain, bitcoin e demais criptomoedas", "12 Arranjos de pagamentos", "13 Sistema de pagamentos instantâneos (Pix)"],
  porque: ["Pix e criptoativos são temas recorrentes em provas de bancos desde 2021."],
  conteudo: [
    { h: "Funções da moeda" },
    { lista: ["Meio de troca: intermediária nas transações, eliminando a dupla coincidência de desejos do escambo.", "Unidade de conta: medida comum de valor.", "Reserva de valor: permite adiar o consumo; a inflação corrói essa função.", "Características desejáveis: aceitação geral, durabilidade, divisibilidade, homogeneidade, facilidade de transporte e oferta controlada."] },
    { h: "Blockchain e criptoativos" },
    { lista: ["Blockchain: registro distribuído (DLT), em que transações são agrupadas em blocos encadeados por hashes criptográficos; alterar um bloco exige refazer os seguintes, o que dá imutabilidade prática.", "Mecanismos de consenso: prova de trabalho (proof of work, usada pelo bitcoin, com mineração) e prova de participação (proof of stake).", "Bitcoin: primeira criptomoeda (2009), descentralizada, com oferta máxima de 21 milhões de unidades.", "Stablecoins: criptoativos com valor atrelado a uma moeda ou ativo.", "CBDC: moeda digital emitida pelo banco central. No Brasil, o projeto do BC é o Drex, em fase de testes; acompanhe as decisões mais recentes do BC sobre o desenho.", "Marco legal: a Lei 14.478/2022 regula os prestadores de serviços de ativos virtuais; o Banco Central foi designado regulador e editou normas para as prestadoras em 2025.", "Criptomoedas privadas não são moeda de curso legal: não há obrigação de aceitá-las e seu valor é volátil."] },
    { h: "Arranjos de pagamento" },
    { lista: ["Lei 12.865/2013: arranjo de pagamento é o conjunto de regras que disciplina um serviço de pagamento (ex.: bandeiras de cartão, Pix). Instituidor do arranjo é quem cria as regras; instituição de pagamento é quem presta o serviço (emissor de moeda eletrônica, emissor de pós-pago, credenciador).", "Instituições de pagamento não podem conceder empréstimos com recursos dos clientes; os saldos ficam em conta de pagamento, com recursos segregados."] },
    { h: "Pix" },
    { lista: ["Arranjo de pagamentos instantâneos instituído e gerido pelo Banco Central, lançado em novembro de 2020.", "Funciona 24 horas, todos os dias; liquidação em segundos, pela infraestrutura do BC (SPI).", "Chaves: CPF ou CNPJ, e-mail, celular ou chave aleatória. Também por QR Code (estático ou dinâmico) ou dados da conta.", "Gratuito para pessoas físicas, salvo exceções (ex.: uso comercial); pessoas jurídicas podem ser tarifadas.", "Segurança: limite padrão de R$ 1.000 entre 20h e 6h para pessoas físicas, ajustável pelo cliente com prazo de carência para aumento; Mecanismo Especial de Devolução (MED) em caso de fraude ou falha operacional.", "Modalidades: Pix Saque e Pix Troco (saque em estabelecimentos), Pix Cobrança (com vencimento), Pix Agendado e Pix Automático (pagamentos recorrentes com autorização prévia, lançado em 2025).", "Participação obrigatória para instituições com mais de 500 mil contas ativas."] },
    { fonte: "Banco Central do Brasil (Pix, Drex, criptoativos); Leis 12.865/2013 e 14.478/2022." }
  ],
  checklist: ["Sei as três funções da moeda", "Explico blockchain, prova de trabalho e oferta máxima do bitcoin", "Diferencio criptomoeda, stablecoin e CBDC", "Sei o que é arranjo, instituidor e instituição de pagamento", "Sei as regras do Pix: horário, chaves, limite noturno, MED e modalidades"],
  questoes: [
    { tipo: "mc", enunciado: "A função da moeda corroída pela inflação alta é a de:", opcoes: ["meio de troca", "unidade de conta", "reserva de valor", "padrão de pagamentos diferidos apenas", "divisibilidade"], correta: 2, explicacao: "Perde poder de compra no tempo." },
    { tipo: "mc", enunciado: "A oferta máxima do bitcoin, prevista em seu protocolo, é de:", opcoes: ["1 milhão", "21 milhões", "100 milhões", "1 bilhão", "ilimitada"], correta: 1, explicacao: "21 milhões." },
    { tipo: "mc", enunciado: "O mecanismo de consenso do bitcoin, baseado em mineração, é:", opcoes: ["proof of stake", "proof of work", "proof of authority", "votação do Banco Central", "sorteio"], correta: 1, explicacao: "Prova de trabalho." },
    { tipo: "mc", enunciado: "Moeda digital emitida por banco central é chamada de:", opcoes: ["stablecoin", "CBDC", "token não fungível", "criptomoeda privada", "moeda eletrônica de instituição de pagamento"], correta: 1, explicacao: "Central Bank Digital Currency." },
    { tipo: "mc", enunciado: "O Pix é instituído e gerido pelo:", opcoes: ["Tesouro Nacional", "Banco Central do Brasil", "Banco do Brasil", "Febraban", "CMN"], correta: 1, explicacao: "BC." },
    { tipo: "mc", enunciado: "Para pessoas físicas, o limite padrão do Pix no período noturno (20h às 6h) é de:", opcoes: ["R$ 200", "R$ 500", "R$ 1.000", "R$ 5.000", "não há limite"], correta: 2, explicacao: "R$ 1.000, ajustável." },
    { tipo: "mc", enunciado: "O mecanismo do Pix que permite devolução de valores em caso de fraude é o:", opcoes: ["Pix Troco", "MED", "QR Code dinâmico", "DICT", "SPB"], correta: 1, explicacao: "Mecanismo Especial de Devolução." },
    { tipo: "mc", enunciado: "Pela Lei 12.865/2013, quem define as regras de um arranjo de pagamento é o:", opcoes: ["credenciador", "instituidor do arranjo", "usuário pagador", "correspondente", "emissor de pós-pago"], correta: 1, explicacao: "Instituidor." },
    { tipo: "mc", enunciado: "A modalidade do Pix para pagamentos recorrentes com autorização prévia do pagador é o:", opcoes: ["Pix Saque", "Pix Troco", "Pix Automático", "Pix Garantido", "Pix Cobrança"], correta: 2, explicacao: "Pix Automático." },
    { tipo: "mc", enunciado: "A característica do blockchain que dificulta alterar registros passados é:", opcoes: ["a centralização em um servidor", "o encadeamento dos blocos por hashes criptográficos", "o uso de senhas simples", "a ausência de registros", "a emissão pelo Banco Central"], correta: 1, explicacao: "Imutabilidade prática." }
  ]
}
});
