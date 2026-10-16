/* Ética e línguas estrangeiras */
window.MODULOS = Object.assign(window.MODULOS || {}, {
ETI1: {
  disciplina: "Ética", titulo: "Ética, moral e ética profissional",
  objetivo: "Diferenciar ética, moral e lei, entender valores e virtudes e aplicar a ética profissional e a responsabilidade social.",
  edital: ["Ética e moral; valores, ética e lei; conduta ética; ética profissional; ética e responsabilidade social (Detran)", "Ética e moral; ética, princípios e valores (PRF)", "Ética aplicada: ética, moral, valores e virtudes; ética empresarial e profissional (BB, em Bancários)"],
  porque: ["É a base conceitual de Ética e Cidadania (PRF), Ética e Qualidade (Detran) e Ética Aplicada (BB).", "As bancas cobram a diferença entre ética e moral e entre o que é legal e o que é ético."],
  conteudo: [
    { h: "Ética e moral" },
    { tabela: { cab: ["", "Moral", "Ética"], linhas: [
      ["O que é", "Conjunto de normas, costumes e valores de um grupo, num tempo e lugar", "Reflexão crítica, filosófica, sobre a moral e sobre o que é certo"],
      ["Caráter", "Prático, prescritivo, cultural", "Teórico, reflexivo, busca princípios universais"],
      ["Mudança", "Varia entre sociedades e épocas", "Questiona e fundamenta as normas morais"]] } },
    { p: "Na prova, a distinção mais comum é: a moral diz 'o que se faz' num grupo; a ética pergunta 'por que se deve fazer'. No uso comum e em muitos textos legais, os termos aparecem quase como sinônimos." },
    { h: "Valores, virtudes e lei" },
    { lista: ["Valores são aquilo que uma pessoa ou grupo considera importante: honestidade, justiça, respeito, responsabilidade.", "Virtude é a disposição estável de agir bem (Aristóteles: o meio-termo entre dois excessos; a coragem fica entre a covardia e a temeridade).", "Lei é norma obrigatória, com sanção do Estado. Nem tudo que é legal é ético (aproveitar uma brecha para prejudicar alguém), e a ética costuma exigir mais do que a lei.", "Consciência moral é a capacidade de julgar os próprios atos; a autonomia supõe agir por convicção, não só por medo da punição."] },
    { h: "Ética profissional" },
    { p: "Conjunto de princípios que orientam a conduta numa profissão, em geral reunidos em códigos de ética. Pontos comuns: sigilo sobre informações obtidas no trabalho, competência, honestidade, imparcialidade, respeito ao público e aos colegas, e responsabilidade pelos próprios atos." },
    { h: "Ética e responsabilidade social" },
    { p: "Responsabilidade social é o compromisso das organizações com os impactos que causam na sociedade e no meio ambiente, além do cumprimento da lei. Inclui transparência, respeito aos direitos dos trabalhadores e consumidores, ações para a comunidade e práticas ambientais. No setor bancário, aparece como ASG (ambiental, social e governança)." },
    { h: "Ética empresarial e gestão da ética" },
    { lista: ["Código de ética ou de conduta: documento que traduz os valores em regras de comportamento.", "Comitê ou comissão de ética: recebe denúncias, orienta e aplica medidas.", "Canais de denúncia com proteção ao denunciante.", "Treinamento periódico e exemplo da liderança."] },
    { fonte: "Vázquez, A. S. Ética; Aristóteles, Ética a Nicômaco; conteúdo programático dos editais Detran-PA 2018, PRF 2021 e BB 2022." }
  ],
  checklist: ["Diferencio ética e moral", "Diferencio valor, virtude e lei", "Sei que nem tudo que é legal é ético", "Sei os elementos da ética profissional", "Explico responsabilidade social"],
  questoes: [
    { tipo: "mc", enunciado: "A reflexão crítica e fundamentada sobre os costumes e normas de comportamento de uma sociedade é o objeto da:", opcoes: ["moral", "ética", "lei", "etiqueta", "religião"], correta: 1, explicacao: "Ética é a reflexão sobre a moral." },
    { tipo: "mc", enunciado: "Segundo Aristóteles, a coragem é uma virtude porque:", opcoes: ["é imposta por lei", "é o meio-termo entre a covardia e a temeridade", "depende apenas da vontade dos outros", "é inata e não se aprende", "garante vantagem pessoal"], correta: 1, explicacao: "Virtude como justa medida entre dois extremos." },
    { tipo: "mc", enunciado: "Um servidor que usa uma lacuna da norma para obter vantagem pessoal, sem cometer ilegalidade, age de forma:", opcoes: ["ética, porque é legal", "legal, mas antiética", "ilegal e antiética", "ética e moral", "neutra"], correta: 1, explicacao: "Legalidade não garante conduta ética." },
    { tipo: "mc", enunciado: "Assinale a característica da moral.", opcoes: ["É universal e imutável.", "Varia conforme a sociedade e a época.", "É sempre escrita em lei.", "Não influencia o comportamento.", "É criada pelo Estado."], correta: 1, explicacao: "A moral é cultural e histórica." },
    { tipo: "mc", enunciado: "Na ética profissional, o dever de não divulgar informações obtidas em razão do cargo corresponde ao:", opcoes: ["sigilo", "lucro", "interesse pessoal", "nepotismo", "corporativismo"], correta: 0, explicacao: "Sigilo profissional." },
    { tipo: "mc", enunciado: "A sigla ASG, no setor financeiro, refere-se a:", opcoes: ["Ativos, Saldos e Garantias", "Ambiental, Social e Governança", "Auditoria, Segurança e Gestão", "Atendimento, Satisfação e Ganhos", "Agência, Serviço e Gerência"], correta: 1, explicacao: "ASG (em inglês, ESG): ambiental, social e governança." },
    { tipo: "ce", enunciado: "Toda conduta permitida pela lei é necessariamente ética.", certo: false, explicacao: "A ética pode exigir mais do que a lei." },
    { tipo: "ce", enunciado: "A moral é um conjunto de normas e valores que pode variar entre sociedades e ao longo do tempo.", certo: true, explicacao: "Caráter histórico e cultural da moral." },
    { tipo: "ce", enunciado: "Responsabilidade social limita-se ao cumprimento das obrigações legais da empresa.", certo: false, explicacao: "Vai além da lei: impacto social e ambiental." },
    { tipo: "ce", enunciado: "Um código de ética profissional traduz valores em regras de conduta para os membros de uma profissão ou organização.", certo: true, explicacao: "Função do código de ética." }
  ]
},

ETI2: {
  disciplina: "Ética e Cidadania", titulo: "Ética no serviço público federal",
  objetivo: "Conhecer as normas de ética e integridade do Executivo federal cobradas na PRF: Código de Ética (Decreto 1.171/1994), Sistema de Gestão da Ética (Decreto 6.029/2007), governança (Decreto 9.203/2017), LAI, conflito de interesses e nepotismo.",
  edital: ["Ética no setor público; integridade; princípios da administração pública (CF, art. 37)", "Deveres do servidor (Lei 8.112/1990); Decreto 9.203/2017; Decreto 1.171/1994; Decreto 6.029/2007; Código de Conduta da Alta Administração Federal", "Lei 12.527/2011 (acesso à informação); Lei 12.813/2013 (conflito de interesses); nepotismo (PRF)"],
  porque: ["Ética e Cidadania faz parte do Bloco I da PRF e é cobrada com letra de lei.", "As mesmas normas aparecem em Direito Administrativo (Bloco III)."],
  conteudo: [
    { h: "Princípios da administração pública (CF, art. 37)" },
    { p: "Legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE). Legalidade: o administrador só faz o que a lei permite. Impessoalidade: atua para o interesse público, sem favorecimentos, e os atos são do órgão, não da pessoa. Moralidade: além de legal, o ato deve ser honesto e de boa-fé. Publicidade: transparência dos atos, salvo sigilo legal. Eficiência: resultado com qualidade e economia (incluída pela EC 19/1998)." },
    { h: "Código de Ética Profissional do Servidor Público Civil do Executivo Federal (Decreto 1.171/1994)" },
    { lista: ["Estrutura: regras deontológicas, deveres fundamentais e vedações, além das comissões de ética.", "A dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais são primados maiores no exercício do cargo.", "O servidor não pode omitir ou falsear a verdade, ainda que contrária aos interesses da própria pessoa interessada ou da Administração.", "A publicidade de qualquer ato administrativo é requisito de eficácia e moralidade.", "Deveres incluem desempenhar com rapidez e rendimento, ser cortês, tratar todos com urbanidade, apresentar-se ao trabalho com vestimenta adequada e comunicar imediatamente aos superiores atos contrários ao interesse público.", "Vedações incluem usar o cargo para obter favorecimento, pleitear ou receber ajuda financeira, presente ou vantagem para cumprir sua missão, desviar servidor para atendimento a interesse particular e fazer uso de informações privilegiadas.", "A pena aplicável pela Comissão de Ética é a de censura, com fundamentação no parecer."] },
    { h: "Sistema de Gestão da Ética do Poder Executivo Federal (Decreto 6.029/2007)" },
    { lista: ["Integram o sistema a Comissão de Ética Pública (CEP), as comissões de ética de cada órgão e entidade e as demais comissões previstas.", "CEP: sete brasileiros de idoneidade moral e reputação ilibada, designados pelo Presidente da República, com mandato de três anos não coincidentes, permitida uma única recondução. Cuida da conduta da alta administração.", "Comissões de ética dos órgãos: três membros titulares e três suplentes, servidores efetivos, mandato de três anos não coincidentes, permitida uma recondução.", "O processo de apuração na comissão é sigiloso até a conclusão e garante contraditório e ampla defesa."] },
    { h: "Código de Conduta da Alta Administração Federal" },
    { p: "Aplica-se a ministros e secretários de Estado, titulares de cargos de natureza especial, secretários-executivos, ocupantes de cargos equivalentes no topo da estrutura e dirigentes de autarquias, fundações, empresas públicas e sociedades de economia mista. Trata de declaração de patrimônio, conflito de interesses, recebimento de presentes (vedado, salvo exceções como brindes sem valor comercial ou de valor reduzido, nos termos regulamentados pela CEP), atividades depois do cargo e participação em eventos." },
    { h: "Governança pública (Decreto 9.203/2017)" },
    { lista: ["Princípios: capacidade de resposta, integridade, confiabilidade, melhoria regulatória, prestação de contas e responsabilidade, e transparência.", "Mecanismos: liderança, estratégia e controle.", "Prevê programas de integridade nos órgãos e entidades, com prevenção, detecção, punição e remediação de fraudes e corrupção."] },
    { h: "Deveres e proibições do servidor (Lei 8.112/1990)" },
    { lista: ["Deveres (art. 116): zelo e dedicação, lealdade às instituições, observar normas legais, cumprir ordens superiores (exceto as manifestamente ilegais), atender com presteza, levar irregularidades ao conhecimento da autoridade, zelar pela economia do material, guardar sigilo, manter conduta compatível com a moralidade, ser assíduo e pontual, tratar as pessoas com urbanidade e representar contra ilegalidade, omissão ou abuso de poder.", "Proibições (art. 117): entre outras, retirar documento sem autorização, recusar fé a documentos públicos, valer-se do cargo para proveito pessoal, receber propina ou comissão, praticar usura, manter sob chefia imediata cônjuge, companheiro ou parente até o 2º grau civil, e participar de gerência de empresa privada (salvo exceções legais)."] },
    { h: "Lei de Acesso à Informação (Lei 12.527/2011)" },
    { lista: ["A publicidade é a regra e o sigilo, a exceção. O pedido não precisa ser motivado.", "Transparência ativa: o órgão divulga informações de interesse geral sem pedido (na internet). Transparência passiva: responde a pedidos.", "Prazo: acesso imediato; não sendo possível, até 20 dias, prorrogáveis por mais 10 com justificativa.", "Recurso contra negativa: 10 dias a partir da ciência.", "Classificação de sigilo: ultrassecreta (até 25 anos), secreta (até 15) e reservada (até 5).", "Informações pessoais relativas à intimidade, vida privada, honra e imagem: acesso restrito por até 100 anos."] },
    { h: "Conflito de interesses (Lei 12.813/2013) e nepotismo" },
    { lista: ["Conflito de interesses é a situação em que interesses públicos e privados se confrontam e podem comprometer o interesse coletivo ou o desempenho da função.", "Durante o exercício: é vedado, por exemplo, divulgar informação privilegiada, prestar serviço a quem tenha interesse em decisão do agente e receber presente de quem tenha interesse em decisão dele.", "Depois do cargo, para os agentes alcançados pela lei: impedimento de 6 meses para atividades que configurem conflito (quarentena).", "Nepotismo: a Súmula Vinculante 13 do STF proíbe nomear cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o 3º grau inclusive, da autoridade nomeante ou de servidor com cargo de direção, chefia ou assessoramento, para cargo em comissão ou função de confiança, inclusive por designações recíprocas (nepotismo cruzado). No Executivo federal, o Decreto 7.203/2010 regulamenta o tema."] },
    { fonte: "Constituição Federal, art. 37; Decretos 1.171/1994, 6.029/2007, 9.203/2017 e 7.203/2010; Leis 8.112/1990, 12.527/2011 e 12.813/2013; STF, Súmula Vinculante 13." }
  ],
  checklist: ["Sei os princípios do art. 37 (LIMPE)", "Sei a estrutura e a pena do Decreto 1.171/1994", "Sei a composição da CEP e das comissões de ética", "Sei os princípios e mecanismos de governança do Decreto 9.203/2017", "Sei prazos e graus de sigilo da LAI", "Sei o que é conflito de interesses e o alcance da Súmula Vinculante 13"],
  questoes: [
    { tipo: "ce", enunciado: "Segundo o Decreto 1.171/1994, a pena aplicável ao servidor pela Comissão de Ética é a de censura.", certo: true, explicacao: "Previsão expressa do Código de Ética." },
    { tipo: "ce", enunciado: "Pela Lei de Acesso à Informação, o cidadão precisa justificar o motivo do pedido de informação de interesse público.", certo: false, explicacao: "É vedado exigir os motivos do pedido." },
    { tipo: "ce", enunciado: "A Comissão de Ética Pública é composta por sete brasileiros designados pelo Presidente da República, com mandato de três anos não coincidentes, permitida uma única recondução.", certo: true, explicacao: "Decreto 6.029/2007." },
    { tipo: "ce", enunciado: "Informações classificadas como reservadas podem permanecer em sigilo por até 15 anos.", certo: false, explicacao: "Reservada: até 5 anos. Secreta: 15. Ultrassecreta: 25." },
    { tipo: "ce", enunciado: "A Súmula Vinculante 13 alcança também as designações recíprocas, conhecidas como nepotismo cruzado.", certo: true, explicacao: "O texto da súmula inclui o ajuste mediante designações recíprocas." },
    { tipo: "ce", enunciado: "Liderança, estratégia e controle são os mecanismos para o exercício da governança pública previstos no Decreto 9.203/2017.", certo: true, explicacao: "Art. 5º do decreto." },
    { tipo: "ce", enunciado: "Pela Lei 8.112/1990, o servidor deve cumprir todas as ordens superiores, inclusive as manifestamente ilegais.", certo: false, explicacao: "O dever exclui as ordens manifestamente ilegais." },
    { tipo: "ce", enunciado: "Na LAI, quando o acesso não for imediato, o prazo de resposta é de até 20 dias, prorrogáveis por mais 10 mediante justificativa.", certo: true, explicacao: "Art. 11 da Lei 12.527/2011." },
    { tipo: "mc", enunciado: "Qual destes NÃO é princípio da governança pública no Decreto 9.203/2017?", opcoes: ["Integridade", "Transparência", "Capacidade de resposta", "Lucratividade", "Melhoria regulatória"], correta: 3, explicacao: "Os princípios são capacidade de resposta, integridade, confiabilidade, melhoria regulatória, prestação de contas e responsabilidade, e transparência." },
    { tipo: "mc", enunciado: "O princípio que exige que a atuação administrativa seja honesta e de boa-fé, além de legal, é o da:", opcoes: ["legalidade", "impessoalidade", "moralidade", "publicidade", "eficiência"], correta: 2, explicacao: "Moralidade administrativa." }
  ]
},

ETI3: {
  disciplina: "Ética e Qualidade no Serviço Público", titulo: "Qualidade no atendimento e trabalho em equipe",
  objetivo: "Aplicar os atributos do bom atendimento ao público, os conceitos de gestão da qualidade em serviços e os fundamentos do trabalho em equipe.",
  edital: ["Qualidade no atendimento ao público: comunicabilidade, apresentação, atenção, cortesia, interesse, presteza, eficiência, tolerância, discrição, conduta e objetividade; comunicação e relações públicas", "Gestão da qualidade: dimensões da qualidade pessoal e profissional; fatores determinantes; normatização técnica e qualidade", "Trabalho em equipe: personalidade e relacionamento; comportamento interpessoal; comportamento receptivo e defensivo, empatia e compreensão mútua; clientes e fornecedores internos (Detran)"],
  porque: ["São 3 questões no Detran-PA, com conteúdo muito previsível.", "Os atributos do atendimento costumam vir em situações práticas: qual atitude do agente demonstra discrição, presteza ou objetividade."],
  conteudo: [
    { h: "Atributos do atendimento ao público" },
    { tabela: { cab: ["Atributo", "Na prática"], linhas: [
      ["Comunicabilidade", "Expressar-se com clareza, adequando a linguagem ao público"],
      ["Apresentação", "Aparência, postura e ambiente adequados"],
      ["Atenção", "Ouvir com foco, sem distrações, e entender a necessidade"],
      ["Cortesia", "Educação e respeito: cumprimentar, agradecer, tratar pelo nome"],
      ["Interesse", "Mostrar disposição real em resolver"],
      ["Presteza", "Rapidez e prontidão em atender"],
      ["Eficiência", "Resolver bem, com os recursos certos e sem retrabalho"],
      ["Tolerância", "Paciência com pessoas irritadas ou com dificuldade"],
      ["Discrição", "Reserva sobre informações do cidadão e comportamento sóbrio"],
      ["Conduta", "Comportamento ético e coerente com a função"],
      ["Objetividade", "Ir direto ao ponto, sem rodeios"]] } },
    { h: "Comunicação e relações públicas" },
    { p: "Comunicação envolve emissor, mensagem, canal, receptor, código e retorno (feedback). Ruídos são interferências que distorcem a mensagem (barulho, jargão técnico, pressa, preconceito). Relações públicas cuidam da imagem da instituição perante o público: atendimento, informação clara e transparência fortalecem a confiança." },
    { h: "Qualidade em serviços" },
    { lista: ["Serviço é intangível, inseparável de quem presta, variável e perecível (não se estoca). Por isso a qualidade depende muito de pessoas e processos.", "Qualidade percebida = resultado entregue comparado com a expectativa do cidadão.", "Dimensões usadas para avaliar serviços: confiabilidade (fazer certo da primeira vez), responsividade (prontidão), segurança (competência e cortesia que transmitem confiança), empatia (atenção individual) e tangíveis (instalações, equipamentos, aparência).", "Qualidade pessoal e profissional: a qualidade do serviço começa na atitude, competência e postura de quem atende.", "Fatores determinantes: pessoas capacitadas, processos claros, tecnologia, liderança e foco no usuário."] },
    { h: "Ferramentas e normatização" },
    { lista: ["Ciclo PDCA: planejar (Plan), executar (Do), verificar (Check) e agir corretivamente (Act).", "5S: utilização (seiri), organização (seiton), limpeza (seiso), padronização (seiketsu) e disciplina (shitsuke).", "Normatização técnica: normas como a ISO 9001 definem requisitos de sistemas de gestão da qualidade; no Brasil, a ABNT publica as versões nacionais (NBR ISO).", "Indicadores de qualidade: tempo de espera, taxa de resolução no primeiro atendimento, reclamações, satisfação."] },
    { h: "Trabalho em equipe" },
    { lista: ["Equipe é mais do que grupo: tem objetivo comum, papéis complementares e responsabilidade compartilhada.", "Comportamento receptivo: ouvir, aceitar críticas e ideias, cooperar. Comportamento defensivo: justificar-se, atacar, fechar-se à crítica; reduz a confiança.", "Empatia: colocar-se no lugar do outro e compreender seus sentimentos e pontos de vista. A compreensão mútua nasce do diálogo e do feedback.", "Feedback eficaz: específico, sobre o comportamento (não a pessoa), no momento oportuno.", "Clientes e fornecedores internos: cada setor depende do trabalho de outro. Quem recebe o resultado do seu trabalho é seu cliente interno; quem entrega insumos para você é seu fornecedor interno."] },
    { fonte: "Conteúdo programático do edital Detran-PA 2018; Parasuraman, Zeithaml e Berry (modelo SERVQUAL); ABNT NBR ISO 9001." }
  ],
  checklist: ["Associo cada atributo de atendimento a uma atitude concreta", "Sei os elementos da comunicação e o que é ruído", "Sei as características dos serviços e as dimensões da qualidade", "Sei o PDCA e o 5S", "Diferencio comportamento receptivo e defensivo", "Explico cliente e fornecedor interno"],
  questoes: [
    { tipo: "mc", enunciado: "Um agente que mantém sigilo sobre as infrações de um cidadão, sem comentá-las com outras pessoas, demonstra principalmente:", opcoes: ["presteza", "discrição", "comunicabilidade", "tolerância", "objetividade"], correta: 1, explicacao: "Discrição: reserva sobre informações do cidadão." },
    { tipo: "mc", enunciado: "Atender o cidadão com rapidez e prontidão corresponde ao atributo de:", opcoes: ["cortesia", "presteza", "discrição", "apresentação", "conduta"], correta: 1, explicacao: "Presteza = prontidão." },
    { tipo: "mc", enunciado: "Na ferramenta 5S, o senso que corresponde a manter os padrões por hábito é:", opcoes: ["seiri (utilização)", "seiton (organização)", "seiso (limpeza)", "seiketsu (padronização)", "shitsuke (disciplina)"], correta: 4, explicacao: "Shitsuke: disciplina, cumprir os padrões por hábito." },
    { tipo: "mc", enunciado: "O setor de vistoria que recebe os processos já cadastrados pelo setor de atendimento é, em relação a este, seu:", opcoes: ["fornecedor interno", "cliente interno", "cliente externo", "concorrente", "auditor"], correta: 1, explicacao: "Quem recebe o resultado do seu trabalho é seu cliente interno." },
    { tipo: "mc", enunciado: "Diante de uma crítica de um colega, o comportamento receptivo é:", opcoes: ["justificar-se imediatamente", "ouvir, buscar entender e avaliar a crítica", "contra-atacar", "ignorar a crítica", "levar o caso à chefia sem conversar"], correta: 1, explicacao: "Receptivo: abertura e escuta." },
    { tipo: "mc", enunciado: "Na etapa 'C' do ciclo PDCA, a organização:", opcoes: ["planeja as metas", "executa o plano", "verifica os resultados em relação ao planejado", "padroniza o que deu certo", "contrata pessoal"], correta: 2, explicacao: "Check: verificar e comparar com o planejado." },
    { tipo: "ce", enunciado: "Por serem intangíveis e perecíveis, os serviços não podem ser estocados, o que torna a qualidade dependente do momento do atendimento.", certo: true, explicacao: "Características dos serviços." },
    { tipo: "ce", enunciado: "O uso de jargões técnicos com o cidadão leigo é exemplo de ruído na comunicação.", certo: true, explicacao: "Linguagem inadequada ao receptor distorce a mensagem." },
    { tipo: "ce", enunciado: "Empatia é concordar sempre com a opinião do outro para evitar conflitos.", certo: false, explicacao: "Empatia é compreender a perspectiva do outro, não concordar sempre." },
    { tipo: "ce", enunciado: "Tolerância, no atendimento, é manter a paciência e o respeito mesmo diante de um cidadão irritado.", certo: true, explicacao: "Definição do atributo." }
  ]
},

ING1: {
  disciplina: "Língua Inglesa", titulo: "Inglês: leitura e gramática para compreensão",
  objetivo: "Ler textos em inglês usando estratégias de leitura, vocabulário (cognatos e falsos cognatos) e a gramática básica necessária para compreender o sentido.",
  edital: ["Conhecimento de um vocabulário fundamental e dos aspectos gramaticais básicos para a compreensão de textos (BB)", "Compreensão de textos escritos em língua inglesa; itens gramaticais relevantes para a compreensão (PRF, opcional com Espanhol)"],
  porque: ["No BB são 5 questões de 1 ponto, e zerar elimina.", "As provas são de leitura: o vocabulário e os conectivos decidem a maioria das questões."],
  conteudo: [
    { h: "Estratégias de leitura" },
    { lista: ["Skimming: leitura rápida para captar a ideia geral (título, primeiro parágrafo, primeira frase de cada parágrafo).", "Scanning: busca de uma informação específica (data, número, nome).", "Leia as perguntas antes do texto e procure as palavras-chave delas no texto.", "Use o contexto para deduzir palavras desconhecidas; não pare em cada palavra."] },
    { h: "Cognatos e falsos cognatos" },
    { tabela: { cab: ["Palavra", "Significa", "Não significa"], linhas: [
      ["actually", "na verdade", "atualmente (currently)"], ["eventually", "finalmente, com o tempo", "eventualmente (occasionally)"], ["pretend", "fingir", "pretender (intend)"],
      ["push", "empurrar", "puxar (pull)"], ["library", "biblioteca", "livraria (bookstore)"], ["sensible", "sensato", "sensível (sensitive)"],
      ["assist", "ajudar", "assistir (watch)"], ["college", "faculdade", "colégio (school)"], ["exquisite", "requintado", "esquisito (weird)"],
      ["lecture", "palestra", "leitura (reading)"], ["policy", "política (diretriz)", "polícia (police)"], ["data", "dados", "data (date)"]] } },
    { h: "Conectivos (linking words)" },
    { tabela: { cab: ["Relação", "Conectivos"], linhas: [
      ["Adição", "and, also, moreover, furthermore, in addition, besides"],
      ["Contraste", "but, however, nevertheless, yet, although, though, even though, whereas, while, despite / in spite of (+ substantivo ou -ing)"],
      ["Causa", "because, since, as, due to, owing to (+ substantivo)"],
      ["Consequência / conclusão", "so, therefore, thus, hence, consequently, as a result"],
      ["Condição", "if, unless (= if not), provided that, as long as"],
      ["Exemplo", "for example, for instance, such as"],
      ["Finalidade", "to, in order to, so that"]] } },
    { h: "Tempos verbais essenciais" },
    { tabela: { cab: ["Tempo", "Forma", "Uso"], linhas: [
      ["Simple present", "He drives / does he drive?", "Hábitos, verdades gerais"],
      ["Present continuous", "He is driving", "Ação em andamento"],
      ["Simple past", "He drove (irregular) / worked (regular)", "Ação concluída em momento definido"],
      ["Present perfect", "He has driven", "Passado com ligação ao presente, sem tempo definido"],
      ["Future", "He will drive / is going to drive", "Previsão / plano"],
      ["Passive voice", "The car was stopped by the police", "Foco na ação ou no objeto"]] } },
    { h: "Modais" },
    { lista: ["can / could: capacidade, permissão, possibilidade.", "may / might: possibilidade (might é mais remota); may também é permissão formal.", "must: obrigação forte ou dedução lógica ('He must be tired'). mustn't: proibição.", "should / ought to: conselho, recomendação.", "have to: obrigação externa; don't have to: não é necessário (diferente de mustn't)."] },
    { h: "Outros pontos de gramática" },
    { lista: ["Pronomes relativos: who (pessoas), which (coisas), that (ambos, em orações restritivas), whose (posse), where (lugar).", "Comparativos: adjetivos curtos + -er / the -est (faster, the fastest); longos com more / the most (more dangerous); irregulares: good-better-best, bad-worse-worst.", "Condicionais: zero (If you heat ice, it melts), primeira (If it rains, I will stay), segunda (If I had time, I would study), terceira (If I had known, I would have gone).", "Sufixos: -ness e -ment formam substantivos (awareness, enforcement); -ly forma advérbios (safely); -less indica ausência (careless)."] },
    { fonte: "Conteúdo programático dos editais BB 2022 e PRF 2021." }
  ],
  checklist: ["Uso skimming e scanning", "Conheço os falsos cognatos mais cobrados", "Sei o valor dos conectivos de contraste, causa e conclusão", "Reconheço os tempos verbais e a voz passiva", "Diferencio must, should, may e don't have to", "Uso pronomes relativos e comparativos"],
  questoes: [
    { tipo: "mc", base: "Road safety campaigns have reduced fatalities in many countries. However, speeding remains one of the main causes of accidents.", enunciado: "The word 'However' expresses:", opcoes: ["addition", "contrast", "cause", "example", "time"], correta: 1, explicacao: "However = no entanto (contraste)." },
    { tipo: "mc", base: "Road safety campaigns have reduced fatalities in many countries. However, speeding remains one of the main causes of accidents.", enunciado: "According to the text:", opcoes: ["campaigns have eliminated all fatalities", "speeding is no longer a problem", "speeding is still an important cause of accidents", "campaigns have increased fatalities", "accidents happen only in a few countries"], correta: 2, explicacao: "'Remains one of the main causes' = continua sendo uma das principais causas." },
    { tipo: "mc", enunciado: "The word 'actually' in 'Actually, the driver was not drunk' means:", opcoes: ["atualmente", "na verdade", "eventualmente", "rapidamente", "felizmente"], correta: 1, explicacao: "Falso cognato: actually = na verdade." },
    { tipo: "mc", enunciado: "Choose the correct option: 'Drivers ___ use their phones while driving. It is forbidden.'", opcoes: ["mustn't", "don't have to", "might", "could", "would"], correta: 0, explicacao: "Mustn't = proibição. Don't have to = não é necessário." },
    { tipo: "mc", enunciado: "In 'The car was stopped by the police', the verb is in the:", opcoes: ["active voice, simple present", "passive voice, simple past", "present perfect", "future", "present continuous"], correta: 1, explicacao: "Was + particípio: voz passiva no passado." },
    { tipo: "mc", enunciado: "Choose the correct relative pronoun: 'The officer ___ car broke down called for help.'", opcoes: ["who", "which", "whose", "where", "what"], correta: 2, explicacao: "Whose indica posse: o policial cujo carro quebrou." },
    { tipo: "ce", enunciado: "The connector 'unless' is equivalent to 'if not'.", certo: true, explicacao: "Unless = a menos que = se não." },
    { tipo: "ce", enunciado: "The word 'library' means 'livraria' in Portuguese.", certo: false, explicacao: "Library = biblioteca; livraria = bookstore." },
    { tipo: "ce", enunciado: "In 'If I had more time, I would study more', the sentence expresses an unreal or hypothetical situation in the present.", certo: true, explicacao: "Segunda condicional." },
    { tipo: "ce", enunciado: "'Therefore' introduces a conclusion or consequence.", certo: true, explicacao: "Therefore = portanto." }
  ]
},

ESP1: {
  disciplina: "Língua Espanhola", titulo: "Espanhol: leitura e gramática para compreensão",
  objetivo: "Ler textos em espanhol, evitando os falsos amigos, e dominar os pontos gramaticais que mudam o sentido: artigos, eufonia, muy/mucho, conectivos e tempos verbais.",
  edital: ["Compreensão de textos escritos em língua espanhola; itens gramaticais relevantes para a compreensão (PRF, opcional com Inglês)"],
  porque: ["Na PRF o candidato escolhe Inglês ou Espanhol na inscrição. O espanhol parece fácil para quem fala português, e é aí que os falsos amigos derrubam."],
  conteudo: [
    { h: "Falsos amigos (heterosemánticos)" },
    { tabela: { cab: ["Espanhol", "Significa", "Não significa"], linhas: [
      ["exquisito", "delicioso, requintado", "esquisito (raro)"], ["embarazada", "grávida", "embaraçada (avergonzada)"], ["oficina", "escritório", "oficina (taller)"],
      ["rato", "momento, instante", "rato (ratón)"], ["apellido", "sobrenome", "apelido (apodo)"], ["borrar", "apagar", "borrar (manchar)"],
      ["polvo", "pó", "polvo (pulpo)"], ["cena", "jantar", "cena (escena)"], ["largo", "comprido", "largo (ancho)"],
      ["pelo", "cabelo", "pelo (vello)"], ["ninguno", "nenhum", "ninguém (nadie)"], ["todavía", "ainda", "todavia (sin embargo)"]] } },
    { h: "Artigos e o neutro 'lo'" },
    { lista: ["Masculinos: el, los; femininos: la, las.", "Contrações: a + el = al; de + el = del.", "Diante de substantivo feminino singular iniciado por 'a' ou 'ha' tônico, usa-se 'el': el agua, el águila (mas las aguas).", "'Lo' é artigo neutro, usado com adjetivos e advérbios para expressar ideia abstrata: lo importante (o importante), lo bueno, lo más rápido. Não se usa 'lo' antes de substantivo."] },
    { h: "Eufonia" },
    { p: "A conjunção 'y' vira 'e' antes de palavra que começa com som de i (padre e hijo, español e inglés). A conjunção 'o' vira 'u' antes de palavra que começa com som de o (siete u ocho, mujer u hombre)." },
    { h: "Muy e mucho" },
    { p: "'Muy' antes de adjetivos e advérbios (muy rápido, muy bien). 'Mucho' antes de substantivos e depois de verbos, e varia (mucho tráfico, muchas multas, trabaja mucho). Exceções: mucho antes de mejor, peor, mayor, menor, más, menos ('mucho mejor')." },
    { h: "Conectivos" },
    { tabela: { cab: ["Relação", "Conectivos"], linhas: [
      ["Contraste", "pero, sin embargo, no obstante, aunque, a pesar de, sino (depois de negação: no es rojo sino azul)"],
      ["Causa", "porque, ya que, puesto que, debido a"],
      ["Conclusão", "por lo tanto, por eso, así que, entonces"],
      ["Adição", "además, también, incluso, asimismo"],
      ["Tempo", "mientras, cuando, en cuanto, luego"]] } },
    { h: "Verbos e pronomes" },
    { lista: ["Pretérito perfecto simple (hablé) para passado concluído; pretérito perfecto compuesto (he hablado) para passado ligado ao presente.", "Verbo 'gustar' concorda com o que agrada: me gusta el café; me gustan los coches.", "Pronomes: yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes. 'Usted' é tratamento formal e leva verbo na 3ª pessoa.", "Heterogenéricos (gênero diferente do português): el viaje, el puente, la sangre, la leche, la nariz, el color, el árbol.", "Heterotônicos (sílaba tônica diferente): teléfono, océano, democracia, burocracia, nivel."] },
    { fonte: "Real Academia Española, Nueva gramática básica de la lengua española; conteúdo programático do edital PRF 2021." }
  ],
  checklist: ["Conheço os falsos amigos mais cobrados", "Uso el/la, al/del e o neutro 'lo'", "Aplico a eufonia y → e e o → u", "Diferencio muy e mucho", "Sei o valor de 'sin embargo', 'sino', 'todavía' e 'aunque'", "Conheço heterogenéricos e heterotônicos comuns"],
  questoes: [
    { tipo: "mc", enunciado: "En la frase 'La comida estaba exquisita', la palabra 'exquisita' significa:", opcoes: ["esquisita", "deliciosa", "fria", "estragada", "barata"], correta: 1, explicacao: "Exquisito = delicioso, requintado." },
    { tipo: "mc", enunciado: "Complete: 'Necesitamos siete ___ ocho agentes.'", opcoes: ["o", "u", "y", "e", "a"], correta: 1, explicacao: "'O' vira 'u' antes de palavra iniciada com som de o." },
    { tipo: "mc", enunciado: "Complete: 'El tráfico estaba ___ lento y había ___ coches.'", opcoes: ["mucho / muy", "muy / muchos", "muy / muy", "mucho / mucho", "muchos / muy"], correta: 1, explicacao: "Muy antes de adjetivo; muchos (concordando) antes de substantivo plural." },
    { tipo: "mc", enunciado: "La palabra 'todavía' en 'Todavía no han llegado' significa:", opcoes: ["todavia (porém)", "ainda", "sempre", "nunca", "já"], correta: 1, explicacao: "Todavía = ainda." },
    { tipo: "mc", enunciado: "En 'No es un control de velocidad, sino de alcoholemia', la palabra 'sino' indica:", opcoes: ["condición", "corrección o sustitución tras una negación", "causa", "tiempo", "adición"], correta: 1, explicacao: "Sino introduz a alternativa correta depois de negação." },
    { tipo: "mc", enunciado: "La forma correcta es:", opcoes: ["la agua fría", "el agua fría", "lo agua fría", "los agua fría", "al agua fría (como sujeto)"], correta: 1, explicacao: "Substantivo feminino com 'a' tônico usa 'el' no singular, mas o adjetivo fica feminino." },
    { tipo: "ce", enunciado: "La palabra 'oficina' corresponde, en portugués, a 'escritório'.", certo: true, explicacao: "Oficina = escritório; oficina mecânica = taller." },
    { tipo: "ce", enunciado: "En 'Lo importante es llegar con seguridad', 'lo' es un artículo neutro.", certo: true, explicacao: "Lo + adjetivo = ideia abstrata." },
    { tipo: "ce", enunciado: "La palabra 'apellido' significa 'apelido' en portugués.", certo: false, explicacao: "Apellido = sobrenome; apelido = apodo." },
    { tipo: "ce", enunciado: "'Sin embargo' tiene valor adversativo, equivalente a 'no entanto'.", certo: true, explicacao: "Conectivo de contraste." }
  ]
}
});
