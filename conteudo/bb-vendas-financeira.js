/* Banco do Brasil: Vendas e Negociação e Matemática Financeira (edital 2022) */
window.MODULOS = Object.assign(window.MODULOS || {}, {
VEN1: {
  disciplina: "Vendas e Negociação", titulo: "Estratégia, segmentação, valor e comportamento do consumidor",
  objetivo: "Usar as ferramentas de análise de mercado e entender como o cliente percebe valor e decide a compra.",
  edital: ["1 Noções de estratégia empresarial: análise de mercado, forças competitivas, imagem institucional, identidade e posicionamento", "2 Segmentação de mercado", "3 Ações para aumentar o valor percebido pelo cliente", "4 Gestão da experiência do cliente", "5 Aprendizagem e sustentabilidade organizacional", "13 Comportamento do consumidor e sua relação com vendas e negociação"],
  porque: ["Vendas e Negociação vale 22,5 pontos e é o segundo critério de desempate do Agente Comercial.", "A Cesgranrio cobra os conceitos com situações de agência: identificar a ferramenta ou o conceito aplicado."],
  conteudo: [
    { h: "Análise de mercado" },
    { lista: ["Análise SWOT (FOFA): forças e fraquezas são internas; oportunidades e ameaças são externas ao negócio.", "Cinco forças competitivas de Porter: rivalidade entre concorrentes, ameaça de novos entrantes, ameaça de produtos substitutos, poder de barganha dos clientes e poder de barganha dos fornecedores. Fintechs e bancos digitais são exemplo de novos entrantes; o Pix, de substituto para TED e boleto.", "Estratégias genéricas de Porter: liderança em custo, diferenciação e foco.", "Imagem institucional é como o público percebe a empresa; identidade é como a empresa se define; posicionamento é o lugar que a marca quer ocupar na mente do cliente em relação aos concorrentes."] },
    { h: "Segmentação" },
    { tabela: { cab: ["Base", "Exemplos"], linhas: [
      ["Geográfica", "Região, cidade, porte do município, clima"],
      ["Demográfica", "Idade, renda, ocupação, ciclo de vida familiar"],
      ["Psicográfica", "Estilo de vida, personalidade, valores"],
      ["Comportamental", "Uso do produto, benefícios buscados, fidelidade, ocasião de compra"]] } },
    { p: "Um segmento útil é mensurável, acessível, substancial (rentável o suficiente), diferenciável e acionável. Bancos segmentam pessoa física por renda e relacionamento (varejo, alta renda, private) e pessoa jurídica por faturamento." },
    { h: "Valor percebido e experiência" },
    { lista: ["Valor percebido = benefícios totais (produto, serviço, pessoal, imagem) menos custos totais (monetário, tempo, energia, psicológico). Para aumentar valor: elevar benefícios ou reduzir custos, inclusive os não monetários (ex.: resolver pelo app sem ir à agência).", "Satisfação é a comparação entre desempenho percebido e expectativa. Encantamento ocorre quando o desempenho supera a expectativa.", "Experiência do cliente (CX) é a soma das interações em todos os pontos de contato (jornada do cliente). Gestão da experiência mapeia a jornada, identifica pontos de dor e momentos da verdade e mede indicadores como NPS (Net Promoter Score).", "Reter cliente custa menos que conquistar: daí o foco em relacionamento e no valor do cliente ao longo do tempo (lifetime value)."] },
    { h: "Aprendizagem e sustentabilidade organizacional" },
    { p: "Organizações que aprendem (Peter Senge) desenvolvem cinco disciplinas: domínio pessoal, modelos mentais, visão compartilhada, aprendizagem em equipe e pensamento sistêmico. Sustentabilidade organizacional equilibra os resultados econômico, social e ambiental (triple bottom line)." },
    { h: "Comportamento do consumidor" },
    { lista: ["Fatores que influenciam a compra (Kotler): culturais (cultura, subcultura, classe social), sociais (grupos de referência, família, papéis e status), pessoais (idade, ocupação, situação financeira, estilo de vida) e psicológicos (motivação, percepção, aprendizagem, crenças e atitudes).", "Processo de decisão: reconhecimento do problema, busca de informações, avaliação de alternativas, decisão de compra e comportamento pós-compra.", "Dissonância cognitiva: desconforto após a compra; o pós-venda serve para reduzi-la.", "Pirâmide de Maslow: necessidades fisiológicas, de segurança, sociais, de estima e de autorrealização."] },
    { fonte: "Kotler e Keller, Administração de Marketing; Porter, Estratégia Competitiva; Senge, A Quinta Disciplina; edital BB 2022." }
  ],
  checklist: ["Aplico SWOT e as cinco forças a um banco", "Sei as bases de segmentação", "Calculo valor percebido como benefícios menos custos", "Diferencio satisfação, encantamento e experiência do cliente", "Sei as cinco disciplinas de Senge", "Sei os fatores de influência e as etapas da decisão de compra"],
  questoes: [
    { tipo: "mc", enunciado: "Na análise SWOT de uma agência, o surgimento de bancos digitais com tarifa zero na mesma cidade é:", opcoes: ["uma força", "uma fraqueza", "uma oportunidade", "uma ameaça", "um fator interno"], correta: 3, explicacao: "Fator externo negativo: ameaça." },
    { tipo: "mc", enunciado: "Nas cinco forças de Porter, o Pix, em relação a TED e boletos, representa:", opcoes: ["poder de barganha dos fornecedores", "ameaça de produtos substitutos", "rivalidade entre concorrentes", "barreira de entrada", "poder de barganha dos acionistas"], correta: 1, explicacao: "Substitui outro meio de pagamento." },
    { tipo: "mc", enunciado: "Segmentar clientes pela frequência de uso do aplicativo e pelos benefícios que buscam é segmentação:", opcoes: ["geográfica", "demográfica", "psicográfica", "comportamental", "institucional"], correta: 3, explicacao: "Uso e benefícios: comportamental." },
    { tipo: "mc", enunciado: "Um banco permite ao cliente contratar crédito pelo app em dois minutos, sem ir à agência. Do ponto de vista do valor percebido, a ação:", opcoes: ["aumenta o custo monetário", "reduz custos de tempo e energia do cliente", "reduz o benefício do produto", "não altera o valor", "aumenta o custo psicológico"], correta: 1, explicacao: "Reduzir custos não monetários aumenta o valor." },
    { tipo: "mc", enunciado: "O cliente cujo desempenho percebido supera suas expectativas tende a ficar:", opcoes: ["insatisfeito", "indiferente", "satisfeito no limite", "encantado", "dissonante"], correta: 3, explicacao: "Encantamento." },
    { tipo: "mc", enunciado: "A disciplina que, segundo Senge, integra as demais e permite ver a organização como um todo é:", opcoes: ["domínio pessoal", "modelos mentais", "visão compartilhada", "aprendizagem em equipe", "pensamento sistêmico"], correta: 4, explicacao: "Quinta disciplina." },
    { tipo: "mc", enunciado: "A influência de familiares e amigos na escolha de um banco é fator:", opcoes: ["cultural", "social", "pessoal", "psicológico", "econômico"], correta: 1, explicacao: "Grupos de referência e família: sociais." },
    { tipo: "mc", enunciado: "O desconforto do cliente após contratar um produto caro, duvidando da escolha, chama-se:", opcoes: ["reconhecimento do problema", "dissonância cognitiva", "percepção seletiva", "lealdade", "atitude"], correta: 1, explicacao: "Dissonância pós-compra." },
    { tipo: "mc", enunciado: "O NPS é um indicador usado para medir:", opcoes: ["a rentabilidade da carteira", "a propensão do cliente a recomendar a empresa", "o custo de aquisição de clientes", "a inadimplência", "o tempo médio de atendimento"], correta: 1, explicacao: "Net Promoter Score." },
    { tipo: "mc", enunciado: "Na estratégia genérica de foco, a empresa:", opcoes: ["busca o menor custo do setor inteiro", "diferencia-se para todo o mercado", "concentra-se em um segmento específico", "atua sem posicionamento", "copia o líder"], correta: 2, explicacao: "Foco em nicho, por custo ou diferenciação." }
  ]
},

VEN2: {
  disciplina: "Vendas e Negociação", titulo: "Serviços, qualidade, técnicas de vendas e marketing digital",
  objetivo: "Aplicar as características dos serviços, a gestão da qualidade, o processo de vendas e as noções de marketing digital cobradas no edital.",
  edital: ["6 Características dos serviços: intangibilidade, inseparabilidade, variabilidade e perecibilidade", "7 Gestão da qualidade em serviços", "8 Técnicas de vendas: da pré-abordagem ao pós-vendas", "9 Noções de marketing digital: geração de leads; técnica de copywriting; gatilhos mentais; inbound marketing", "10 Ética e conduta profissional em vendas", "11 Padrões de qualidade no atendimento aos clientes", "12 Utilização de canais remotos para vendas"],
  porque: ["É a parte mais operacional da disciplina e a que mais rende questões de situação."],
  conteudo: [
    { h: "Características dos serviços" },
    { tabela: { cab: ["Característica", "O que significa", "Como a empresa lida"], linhas: [
      ["Intangibilidade", "Não pode ser visto ou tocado antes da compra", "Tornar tangível: instalações, materiais, aparência dos funcionários, simuladores"],
      ["Inseparabilidade", "Produção e consumo simultâneos; o cliente participa", "Treinar quem atende; autoatendimento"],
      ["Variabilidade", "Qualidade depende de quem presta, quando e onde", "Padronização de processos, roteiros, treinamento, pesquisa de satisfação"],
      ["Perecibilidade", "Não pode ser estocado", "Gerir oferta e demanda: agendamento, horários alternativos, canais digitais"]] } },
    { h: "Qualidade em serviços" },
    { lista: ["Dimensões do SERVQUAL: confiabilidade (fazer certo, como prometido), responsividade (presteza), segurança (competência e cortesia que inspiram confiança), empatia (atenção individualizada) e tangíveis.", "Modelo dos cinco gaps: entre expectativa do cliente e percepção da gerência; entre percepção da gerência e especificação; entre especificação e entrega; entre entrega e comunicação externa; e o gap final entre serviço esperado e percebido.", "Padrões de atendimento: tempo de espera, resolução no primeiro contato, cordialidade, linguagem clara, cumprimento de prazos e retorno ao cliente."] },
    { h: "Processo de vendas" },
    { tabela: { cab: ["Etapa", "O que fazer"], linhas: [
      ["Prospecção", "Identificar e qualificar clientes potenciais"],
      ["Pré-abordagem", "Pesquisar o cliente, seu histórico e necessidades; planejar a visita ou contato"],
      ["Abordagem", "Primeiro contato, criar empatia e credibilidade"],
      ["Sondagem (levantamento de necessidades)", "Perguntas abertas, escuta ativa; identificar necessidades explícitas e implícitas"],
      ["Apresentação", "Mostrar benefícios ligados às necessidades (característica → vantagem → benefício)"],
      ["Tratamento de objeções", "Ouvir, entender a causa, responder com informação; objeção é sinal de interesse"],
      ["Fechamento", "Pedir a decisão; técnicas como fechamento por alternativa ou por resumo de benefícios"],
      ["Pós-venda", "Acompanhar, confirmar satisfação, reduzir dissonância, gerar recompra e indicações"]] } },
    { h: "Marketing digital" },
    { lista: ["Inbound marketing: atrair o cliente com conteúdo relevante, em vez de interrompê-lo com propaganda (outbound). Etapas: atrair, converter, relacionar (nutrir), vender e encantar.", "Lead: contato que forneceu dados em troca de algo de valor (e-book, simulação). Funil: topo (descoberta), meio (consideração) e fundo (decisão).", "Copywriting: redação persuasiva voltada a gerar ação; foco no benefício, chamada para ação (CTA) clara.", "Gatilhos mentais: escassez, urgência, prova social, autoridade, reciprocidade, compromisso e coerência. Usados com ética: a escassez ou a urgência devem ser reais."] },
    { h: "Canais remotos e ética" },
    { lista: ["Canais remotos: app, internet banking, WhatsApp, telefone, e-mail, gerente remoto. Exigem linguagem adequada ao canal, confirmação de identidade e registro da contratação.", "Ética em vendas: oferecer o produto adequado ao perfil e à necessidade do cliente (suitability), informar custos e riscos com transparência, não praticar venda casada nem pressionar.", "Metas não justificam vender produto inadequado: isso gera reclamações, cancelamentos e sanções regulatórias."] },
    { fonte: "Kotler e Keller, Administração de Marketing; Parasuraman, Zeithaml e Berry (SERVQUAL e gaps); edital BB 2022." }
  ],
  checklist: ["Associo cada característica dos serviços a uma solução", "Sei as cinco dimensões do SERVQUAL", "Sei as etapas da venda e o que se faz em cada uma", "Sei tratar objeções e fechar", "Explico inbound, lead, funil, copywriting e gatilhos", "Sei os limites éticos em vendas"],
  questoes: [
    { tipo: "mc", enunciado: "Uma agência fica lotada no início do mês e vazia no meio. A característica dos serviços que explica a dificuldade de 'estocar' atendimento é a:", opcoes: ["intangibilidade", "inseparabilidade", "variabilidade", "perecibilidade", "tangibilidade"], correta: 3, explicacao: "Serviço não se estoca." },
    { tipo: "mc", enunciado: "O banco cria roteiros de atendimento e treina todos os funcionários para que o cliente receba o mesmo padrão em qualquer agência. Ataca-se a:", opcoes: ["perecibilidade", "variabilidade", "intangibilidade", "sazonalidade", "inseparabilidade"], correta: 1, explicacao: "Padronização reduz variabilidade." },
    { tipo: "mc", enunciado: "No SERVQUAL, a dimensão que corresponde a cumprir o serviço prometido de forma precisa e confiável é:", opcoes: ["tangíveis", "confiabilidade", "responsividade", "empatia", "segurança"], correta: 1, explicacao: "Confiabilidade." },
    { tipo: "mc", enunciado: "A etapa da venda em que o funcionário pesquisa o histórico do cliente antes de ligar para ele é:", opcoes: ["prospecção", "pré-abordagem", "abordagem", "fechamento", "pós-venda"], correta: 1, explicacao: "Preparação antes do contato." },
    { tipo: "mc", enunciado: "Diante de uma objeção sobre a tarifa de um pacote, a postura recomendada é:", opcoes: ["ignorar e passar ao fechamento", "ouvir, entender a causa e responder com informação sobre benefícios e alternativas", "oferecer outro produto qualquer", "encerrar o atendimento", "condicionar o desconto à contratação de seguro"], correta: 1, explicacao: "Objeção é sinal de interesse; trate com informação." },
    { tipo: "mc", enunciado: "No inbound marketing, a empresa:", opcoes: ["interrompe o cliente com propaganda em massa", "atrai o cliente com conteúdo relevante e o conduz pelo funil", "compra listas de e-mails", "vende apenas por telefone", "dispensa geração de leads"], correta: 1, explicacao: "Marketing de atração." },
    { tipo: "mc", enunciado: "'Mais de 2 milhões de clientes já usam este cartão' explora o gatilho mental de:", opcoes: ["escassez", "urgência", "prova social", "reciprocidade", "autoridade"], correta: 2, explicacao: "Prova social." },
    { tipo: "mc", enunciado: "Oferecer um e-book gratuito em troca de nome e e-mail é uma ação típica de:", opcoes: ["pós-venda", "geração de leads", "fechamento", "venda casada", "telemarketing ativo"], correta: 1, explicacao: "Captação de lead." },
    { tipo: "mc", enunciado: "Do ponto de vista ético, um funcionário que oferece fundo de alto risco a cliente de perfil conservador para bater meta:", opcoes: ["age corretamente, pois a meta é prioritária", "desrespeita a adequação do produto ao perfil do cliente", "pratica inbound marketing", "aplica o gatilho de autoridade", "realiza pós-venda"], correta: 1, explicacao: "Viola a adequação ao perfil (suitability)." },
    { tipo: "mc", enunciado: "Mostrar ao cliente o extrato simulado e o folheto do investimento é forma de reduzir a:", opcoes: ["perecibilidade", "intangibilidade", "variabilidade", "inseparabilidade", "sazonalidade"], correta: 1, explicacao: "Tangibilização." }
  ]
},

VEN3: {
  disciplina: "Vendas e Negociação", titulo: "Normas de relacionamento: CDC, Res. CMN 4.949, ouvidoria e Estatuto da Pessoa com Deficiência",
  objetivo: "Conhecer as regras legais e regulatórias que limitam e orientam a venda de produtos bancários.",
  edital: ["14 Política de Relacionamento com o Cliente: Resolução CMN 4.949/2021", "15 Resolução CMN 4.860/2020 (ouvidoria)", "16 Lei 13.146/2015 (Estatuto da Pessoa com Deficiência)", "17 Código de Proteção e Defesa do Consumidor: Lei 8.078/1990"],
  porque: ["São itens de leitura de lei: a Cesgranrio cobra prazos e vedações."],
  conteudo: [
    { h: "Código de Defesa do Consumidor (Lei 8.078/1990)" },
    { lista: ["Súmula 297 do STJ: o CDC é aplicável às instituições financeiras.", "Direitos básicos (art. 6º): informação adequada e clara, proteção contra publicidade enganosa e abusiva, facilitação da defesa, inclusive com inversão do ônus da prova quando verossímil a alegação ou hipossuficiente o consumidor.", "Práticas abusivas (art. 39): condicionar o fornecimento de produto ou serviço ao de outro (venda casada), enviar produto sem solicitação (equipara-se a amostra grátis), prevalecer-se da fraqueza ou ignorância do consumidor, exigir vantagem manifestamente excessiva.", "Cobrança indevida (art. 42, parágrafo único): o consumidor tem direito à repetição do indébito, por valor igual ao dobro do que pagou em excesso, salvo engano justificável.", "Direito de arrependimento (art. 49): 7 dias, a contar da assinatura ou do recebimento, quando a contratação ocorrer fora do estabelecimento comercial (telefone, internet).", "Prazos para reclamar de vícios aparentes (art. 26): 30 dias para produtos e serviços não duráveis; 90 dias para duráveis. Prescrição da pretensão por fato do produto ou serviço: 5 anos (art. 27).", "Superendividamento (Lei 14.181/2021): incluiu no CDC regras de crédito responsável e repactuação de dívidas."] },
    { h: "Relacionamento com clientes (Resolução CMN 4.949/2021)" },
    { lista: ["Exige das instituições conduta pautada em princípios de ética, responsabilidade, transparência e diligência, com tratamento justo e equitativo.", "Determina política institucional de relacionamento com clientes e usuários, aprovada pelo conselho de administração ou pela diretoria, com diretor responsável.", "Na oferta, os produtos devem ser adequados às necessidades, interesses e objetivos do cliente; as informações devem ser claras e completas, inclusive sobre custos e riscos.", "Veda, entre outros, a venda casada e o envio de cartão de crédito ou produto não solicitado."] },
    { h: "Ouvidoria (Resolução CMN 4.860/2020)" },
    { lista: ["É obrigatória para bancos e demais instituições autorizadas indicadas na norma.", "Atua como última instância administrativa: recebe demandas não solucionadas pelos canais primários (agência, SAC).", "Prazo de resposta conclusiva: até 10 dias úteis, prorrogáveis excepcionalmente por mais 10 dias úteis, com justificativa ao cliente.", "Atendimento gratuito, com número de protocolo; acesso por telefone gratuito e divulgado.", "A instituição designa diretor responsável e ouvidor; a ouvidoria produz relatório semestral."] },
    { h: "Estatuto da Pessoa com Deficiência (Lei 13.146/2015)" },
    { lista: ["Pessoa com deficiência: aquela com impedimento de longo prazo de natureza física, mental, intelectual ou sensorial que, em interação com barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições.", "Atendimento prioritário (art. 9º), inclusive em serviços de atendimento ao público. A Lei 10.048/2000 também garante prioridade a idosos (60+), gestantes, lactantes, pessoas com crianças de colo e obesos.", "Acessibilidade: eliminação de barreiras urbanísticas, arquitetônicas, nos transportes, nas comunicações e na informação, atitudinais e tecnológicas.", "Desenho universal e adaptações razoáveis; recusa de adaptação razoável é discriminação.", "Crime (art. 88): praticar, induzir ou incitar discriminação de pessoa em razão de sua deficiência, pena de reclusão de 1 a 3 anos e multa."] },
    { fonte: "Lei 8.078/1990; STJ, Súmula 297; Resoluções CMN 4.949/2021 e 4.860/2020; Leis 13.146/2015 e 10.048/2000." }
  ],
  checklist: ["Sei que o CDC se aplica aos bancos", "Sei venda casada, cobrança em dobro e arrependimento em 7 dias", "Sei prazos de 30 e 90 dias e prescrição de 5 anos", "Sei os princípios da Res. 4.949", "Sei o papel e o prazo da ouvidoria", "Sei o conceito de PcD e o crime de discriminação"],
  questoes: [
    { tipo: "mc", enunciado: "Condicionar a concessão de empréstimo à contratação de seguro é:", opcoes: ["prática permitida se houver desconto", "venda casada, prática abusiva", "estratégia de cross-selling sempre lícita", "obrigação regulatória", "inbound marketing"], correta: 1, explicacao: "CDC, art. 39, I." },
    { tipo: "mc", enunciado: "O cliente que contratou um seguro pelo aplicativo pode desistir, sem justificativa, no prazo de:", opcoes: ["3 dias", "7 dias", "15 dias", "30 dias", "90 dias"], correta: 1, explicacao: "Art. 49: contratação fora do estabelecimento." },
    { tipo: "mc", enunciado: "O consumidor cobrado indevidamente que pagou o valor tem direito, salvo engano justificável, à devolução:", opcoes: ["simples", "em dobro do valor pago em excesso", "em triplo", "apenas com correção", "em crédito para novas compras"], correta: 1, explicacao: "Art. 42, parágrafo único." },
    { tipo: "mc", enunciado: "Segundo a Súmula 297 do STJ:", opcoes: ["o CDC não se aplica aos bancos", "o CDC é aplicável às instituições financeiras", "só o Banco Central julga relações bancárias", "contratos bancários são regidos apenas pelo Código Civil", "o CDC só vale para pessoas jurídicas"], correta: 1, explicacao: "Texto da súmula." },
    { tipo: "mc", enunciado: "Pela Resolução CMN 4.860/2020, a ouvidoria deve dar resposta conclusiva em até:", opcoes: ["5 dias úteis", "10 dias úteis", "15 dias corridos", "30 dias corridos", "60 dias"], correta: 1, explicacao: "10 dias úteis, prorrogáveis excepcionalmente por mais 10." },
    { tipo: "mc", enunciado: "A ouvidoria das instituições financeiras atua:", opcoes: ["como primeiro canal de atendimento", "como última instância administrativa, após os canais primários", "apenas para clientes pessoa jurídica", "só por meio de agência", "como órgão do Banco Central"], correta: 1, explicacao: "Última instância interna." },
    { tipo: "mc", enunciado: "A Resolução CMN 4.949/2021 exige que as instituições pautem o relacionamento com clientes por princípios de:", opcoes: ["lucro, rapidez e volume", "ética, responsabilidade, transparência e diligência", "sigilo absoluto e discricionariedade", "padronização e automação", "concorrência e agressividade comercial"], correta: 1, explicacao: "Princípios previstos na Resolução CMN 4.949/2021." },
    { tipo: "mc", enunciado: "Para vícios aparentes de serviço durável, o prazo para reclamar é de:", opcoes: ["7 dias", "30 dias", "60 dias", "90 dias", "5 anos"], correta: 3, explicacao: "Art. 26, II." },
    { tipo: "mc", enunciado: "Pelo Estatuto da Pessoa com Deficiência, a recusa de adaptações razoáveis:", opcoes: ["é permitida em instituições privadas", "configura discriminação", "só é vedada em órgãos públicos", "depende de laudo médico anual", "é infração apenas administrativa leve"], correta: 1, explicacao: "Art. 4º, § 1º." },
    { tipo: "mc", enunciado: "Enviar cartão de crédito ao cliente sem solicitação prévia:", opcoes: ["é prática comercial permitida", "é prática abusiva vedada pelo CDC e pela regulação", "só é proibido para clientes idosos", "é permitido se o cartão vier bloqueado", "é obrigação do banco"], correta: 1, explicacao: "CDC, art. 39, III; STJ, Súmula 532 trata como prática abusiva." }
  ]
},

MFI1: {
  disciplina: "Matemática Financeira", titulo: "Juros simples, compostos e taxas",
  objetivo: "Calcular montante, juros, taxa, capital e prazo nos regimes simples e composto e converter taxas.",
  edital: ["Conceitos gerais: valor do dinheiro no tempo; capital, juros, taxas de juros; capitalização, regimes de capitalização; fluxos de caixa e diagramas; equivalência financeira", "Juros simples; juros compostos; cálculo do montante, dos juros, da taxa, do principal e do prazo"],
  porque: ["São 5 questões de 1,5 ponto; com juros compostos e taxas resolvidos, faltam só os sistemas de amortização."],
  conteudo: [
    { h: "Conceitos" },
    { lista: ["Valor do dinheiro no tempo: R$ 100 hoje valem mais que R$ 100 daqui a um ano, porque podem ser aplicados.", "Capital (C ou PV), juros (J), montante (M ou FV = C + J), taxa (i), prazo (n). Taxa e prazo precisam estar na mesma unidade.", "Diagrama de fluxo de caixa: linha do tempo com entradas (setas para cima) e saídas (setas para baixo)."] },
    { h: "Juros simples" },
    { formula: "J = C·i·n      M = C·(1 + i·n)" },
    { p: "Os juros incidem sempre sobre o capital inicial; crescem linearmente. Taxas proporcionais: 2% a.m. equivale a 24% a.a. em juros simples." },
    { ex: "R$ 5.000 a 2% a.m., juros simples, por 6 meses: J = 5.000 × 0,02 × 6 = R$ 600; M = R$ 5.600." },
    { h: "Juros compostos" },
    { formula: "M = C·(1 + i)ⁿ      C = M ÷ (1 + i)ⁿ" },
    { p: "Juros sobre juros: crescimento exponencial. Para n > 1, o montante composto é maior que o simples; para n entre 0 e 1, o simples é maior." },
    { ex: "R$ 1.000 a 10% a.a. por 2 anos: M = 1.000 × 1,21 = R$ 1.210. O valor presente de R$ 1.210 daqui a 2 anos, a 10% a.a., é R$ 1.000." },
    { h: "Taxas" },
    { tabela: { cab: ["Taxa", "Conceito", "Exemplo"], linhas: [
      ["Proporcional", "Juros simples: divide ou multiplica pelo número de períodos", "12% a.a. ↔ 1% a.m."],
      ["Equivalente", "Juros compostos: (1 + i_a) = (1 + i_m)¹²", "1% a.m. ↔ 12,68% a.a.; 21% a.a. ↔ 10% a.s."],
      ["Nominal", "Período da taxa diferente do de capitalização", "12% a.a. capitalizados mensalmente"],
      ["Efetiva", "Período da taxa igual ao de capitalização", "12% a.a. com cap. mensal = 1% a.m. efetiva = 12,68% a.a. efetiva"],
      ["Real e aparente", "(1 + aparente) = (1 + real)·(1 + inflação)", "Aparente 10%, inflação 5%: real = 1,10 ÷ 1,05 − 1 ≈ 4,76%"]] } },
    { dica: "Tabela mental útil: 1,1² = 1,21; 1,1³ = 1,331; 1,02² = 1,0404; 1,05² = 1,1025; 1,01¹² ≈ 1,1268. A Cesgranrio costuma dar as potências no enunciado." },
    { h: "Equivalência de capitais" },
    { p: "Dois fluxos são equivalentes, a uma taxa, se tiverem o mesmo valor numa mesma data focal. Em juros compostos, a data focal pode ser qualquer uma. Para comparar propostas de pagamento, traga todos os valores para a mesma data." },
    { fonte: "Assaf Neto, Matemática Financeira e suas Aplicações; edital BB 2022." }
  ],
  checklist: ["Calculo juros e montante simples", "Calculo montante e valor presente compostos", "Converto taxas proporcionais e equivalentes", "Transformo taxa nominal em efetiva", "Calculo taxa real pela fórmula de Fisher", "Comparo fluxos em uma data focal"],
  questoes: [
    { tipo: "mc", enunciado: "Um capital de R$ 5.000 aplicado a juros simples de 2% a.m. durante 6 meses rende juros de:", opcoes: ["R$ 500", "R$ 600", "R$ 630,81", "R$ 1.000", "R$ 5.600"], correta: 1, explicacao: "5.000 × 0,02 × 6 = 600." },
    { tipo: "mc", enunciado: "R$ 1.000 aplicados a juros compostos de 10% a.a. por 2 anos geram montante de:", opcoes: ["R$ 1.100", "R$ 1.200", "R$ 1.210", "R$ 1.331", "R$ 1.020"], correta: 2, explicacao: "1.000 × 1,21." },
    { tipo: "mc", enunciado: "A taxa semestral equivalente, em juros compostos, a 21% ao ano é:", opcoes: ["10,5%", "10%", "11%", "12%", "9,5%"], correta: 1, explicacao: "1,1² = 1,21." },
    { tipo: "mc", enunciado: "Uma taxa nominal de 12% a.a. com capitalização mensal corresponde a uma taxa efetiva anual de aproximadamente:", opcoes: ["12%", "12,36%", "12,68%", "13%", "11,39%"], correta: 2, explicacao: "1,01¹² − 1 ≈ 12,68%." },
    { tipo: "mc", enunciado: "Uma aplicação rendeu 10% em um ano em que a inflação foi de 5%. A taxa real foi de aproximadamente:", opcoes: ["5%", "4,76%", "5,24%", "15%", "15,5%"], correta: 1, explicacao: "1,10/1,05 − 1." },
    { tipo: "mc", enunciado: "O valor presente de R$ 1.210, a receber em 2 anos, à taxa composta de 10% a.a., é:", opcoes: ["R$ 1.000", "R$ 1.010", "R$ 1.089", "R$ 1.100", "R$ 990"], correta: 0, explicacao: "1.210 ÷ 1,21." },
    { tipo: "mc", enunciado: "Em juros simples, a taxa de 18% ao ano é proporcional a:", opcoes: ["1,2% a.m.", "1,5% a.m.", "1,8% a.m.", "2% a.m.", "1,39% a.m."], correta: 1, explicacao: "18 ÷ 12." },
    { tipo: "mc", enunciado: "Para prazos maiores que um período, comparando juros simples e compostos à mesma taxa:", opcoes: ["o montante simples é maior", "os montantes são iguais", "o montante composto é maior", "depende do capital", "o composto é menor"], correta: 2, explicacao: "Crescimento exponencial supera o linear para n > 1." },
    { tipo: "mc", enunciado: "Quanto tempo leva, em juros simples a 5% a.m., para um capital dobrar?", opcoes: ["10 meses", "12 meses", "15 meses", "20 meses", "24 meses"], correta: 3, explicacao: "J = C → C·0,05·n = C → n = 20." },
    { tipo: "mc", enunciado: "Uma dívida de R$ 2.000 a juros compostos de 2% a.m. terá, após 2 meses, valor de:", opcoes: ["R$ 2.040,00", "R$ 2.080,00", "R$ 2.080,80", "R$ 2.081,60", "R$ 2.120,00"], correta: 2, explicacao: "2.000 × 1,0404 = 2.080,80." }
  ]
},

MFI2: {
  disciplina: "Matemática Financeira", titulo: "Sistemas de amortização: Price e SAC",
  objetivo: "Montar e interpretar tabelas de amortização nos sistemas Price e SAC.",
  edital: ["Sistemas de amortização: sistema Price; sistema SAC"],
  porque: ["Financiamento imobiliário e crédito consignado usam estes sistemas: é conteúdo de prova e de trabalho na agência."],
  conteudo: [
    { h: "Elementos" },
    { p: "Cada prestação = amortização (parte que reduz o saldo devedor) + juros (taxa × saldo devedor do período anterior). O saldo devedor cai a cada pagamento pelo valor da amortização." },
    { h: "Sistema Price (francês)" },
    { formula: "PMT = PV · i / (1 − (1 + i)⁻ⁿ)" },
    { lista: ["Prestações constantes.", "Juros decrescentes e amortizações crescentes ao longo do tempo.", "No início, a maior parte da prestação é juros."] },
    { ex: "R$ 10.000 em 3 parcelas a 2% a.m.: PMT ≈ R$ 3.467,55. Mês 1: juros 200,00; amortização 3.267,55; saldo 6.732,45. Mês 2: juros 134,65; amortização 3.332,90; saldo 3.399,56. Mês 3: juros 67,99; amortização 3.399,56; saldo 0." },
    { h: "SAC (amortização constante)" },
    { formula: "Amortização = PV ÷ n      Juros_k = i × saldo anterior      Prestação = amortização + juros" },
    { lista: ["Amortização constante.", "Juros e prestações decrescentes (as prestações caem em progressão aritmética, com razão = amortização × i).", "Primeira prestação maior que a do Price, mas o total de juros pagos é menor que no Price para o mesmo prazo e taxa."] },
    { ex: "R$ 12.000 em 4 parcelas a 1% a.m. Amortização: 3.000. Mês 1: juros 120, prestação 3.120, saldo 9.000. Mês 2: juros 90, prestação 3.090, saldo 6.000. Mês 3: juros 60, prestação 3.060, saldo 3.000. Mês 4: juros 30, prestação 3.030, saldo 0. Total de juros: 300." },
    { tabela: { cab: ["", "Price", "SAC"], linhas: [["Prestação", "Constante", "Decrescente"], ["Amortização", "Crescente", "Constante"], ["Juros", "Decrescentes", "Decrescentes"], ["1ª prestação", "Menor", "Maior"], ["Total de juros", "Maior", "Menor"]] } },
    { h: "Análise de investimentos" },
    { lista: ["VPL (valor presente líquido): soma dos fluxos trazidos a valor presente pela taxa mínima de atratividade, menos o investimento. VPL > 0: projeto viável.", "TIR (taxa interna de retorno): taxa que zera o VPL. Projeto viável se TIR > taxa mínima de atratividade.", "CET (custo efetivo total): taxa que inclui juros, tarifas, tributos e seguros de uma operação de crédito; deve ser informado ao cliente antes da contratação."] },
    { fonte: "Assaf Neto, Matemática Financeira e suas Aplicações; edital BB 2022." }
  ],
  checklist: ["Calculo a prestação Price com a fórmula", "Monto a tabela Price com juros e amortização", "Monto a tabela SAC", "Comparo Price e SAC", "Sei VPL, TIR e CET"],
  questoes: [
    { tipo: "mc", enunciado: "No SAC, um financiamento de R$ 12.000 em 4 parcelas mensais a 1% a.m. tem primeira prestação de:", opcoes: ["R$ 3.000", "R$ 3.030", "R$ 3.075", "R$ 3.120", "R$ 3.240"], correta: 3, explicacao: "3.000 + 120." },
    { tipo: "mc", enunciado: "No mesmo SAC (R$ 12.000, 4 parcelas, 1% a.m.), a terceira prestação é:", opcoes: ["R$ 3.120", "R$ 3.090", "R$ 3.060", "R$ 3.030", "R$ 3.000"], correta: 2, explicacao: "Saldo antes: 6.000; juros 60; 3.000 + 60." },
    { tipo: "mc", enunciado: "No sistema Price:", opcoes: ["as amortizações são constantes", "as prestações são decrescentes", "as prestações são constantes e as amortizações crescentes", "os juros são crescentes", "a primeira prestação é maior que a última"], correta: 2, explicacao: "Característica do Price." },
    { tipo: "mc", enunciado: "Um empréstimo de R$ 10.000 pelo Price a 2% a.m. tem prestação de R$ 3.467,55. Os juros da primeira prestação são:", opcoes: ["R$ 67,99", "R$ 134,65", "R$ 200,00", "R$ 346,76", "R$ 3.267,55"], correta: 2, explicacao: "2% de 10.000." },
    { tipo: "mc", enunciado: "Ainda nesse Price, a amortização da primeira prestação é:", opcoes: ["R$ 3.333,33", "R$ 3.267,55", "R$ 3.467,55", "R$ 200,00", "R$ 3.399,56"], correta: 1, explicacao: "3.467,55 − 200." },
    { tipo: "mc", enunciado: "Para o mesmo valor, prazo e taxa, comparando SAC e Price:", opcoes: ["o Price paga menos juros totais", "o SAC paga menos juros totais", "pagam o mesmo total de juros", "o SAC tem prestações constantes", "o Price tem amortização constante"], correta: 1, explicacao: "No SAC o saldo cai mais rápido no início." },
    { tipo: "mc", enunciado: "No SAC, as prestações formam:", opcoes: ["progressão geométrica crescente", "progressão aritmética decrescente", "sequência constante", "progressão aritmética crescente", "sequência sem padrão"], correta: 1, explicacao: "Caem de amortização × i a cada período." },
    { tipo: "mc", enunciado: "Um projeto com VPL positivo à taxa mínima de atratividade:", opcoes: ["deve ser rejeitado", "tem TIR menor que a taxa mínima", "é viável, pois remunera acima da taxa mínima", "tem TIR igual a zero", "tem prejuízo"], correta: 2, explicacao: "VPL > 0 ⇔ TIR > TMA." },
    { tipo: "mc", enunciado: "O indicador que reúne juros, tarifas, tributos e seguros de uma operação de crédito é:", opcoes: ["a TIR", "a Selic", "o CET", "a TR", "o VPL"], correta: 2, explicacao: "Custo efetivo total." },
    { tipo: "mc", enunciado: "No sistema Price, ao longo do contrato, a parcela de juros de cada prestação:", opcoes: ["aumenta", "diminui", "é constante", "é zero", "é igual à amortização"], correta: 1, explicacao: "Juros sobre saldo decrescente." }
  ]
}
});
