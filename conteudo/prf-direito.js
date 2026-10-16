/* Bloco III da PRF: Direito Penal, Processual Penal, Legislação Especial, Direitos Humanos, Administrativo e Constitucional */
window.MODULOS = Object.assign(window.MODULOS || {}, {
DPE1: {
  disciplina: "Direito Penal", titulo: "Aplicação da lei penal e teoria do crime",
  objetivo: "Dominar os princípios, a aplicação da lei penal no tempo e no espaço e a estrutura do crime: fato típico, ilicitude e culpabilidade.",
  edital: ["Princípios básicos; aplicação da lei penal; lei penal no tempo e no espaço", "O fato típico e seus elementos; crime consumado e tentado; ilicitude e causas de exclusão; culpabilidade; imputabilidade penal; concurso de pessoas"],
  porque: ["É a base para todos os crimes em espécie e para as leis especiais.", "Excludentes de ilicitude ligadas à atividade policial (legítima defesa, estrito cumprimento do dever legal) são frequentes."],
  conteudo: [
    { h: "Princípios e lei penal no tempo" },
    { lista: ["Legalidade e anterioridade (CP, art. 1º; CF, art. 5º, XXXIX): não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal.", "Irretroatividade da lei mais grave e retroatividade da lei mais benéfica (art. 2º; CF, art. 5º, XL), mesmo após o trânsito em julgado.", "Abolitio criminis: lei posterior que deixa de considerar o fato crime faz cessar a execução e os efeitos penais da sentença; os efeitos civis permanecem.", "Lei excepcional ou temporária (art. 3º): aplica-se ao fato praticado durante sua vigência, mesmo depois de decorrido o período (ultra-atividade).", "Tempo do crime (art. 4º): teoria da atividade, momento da ação ou omissão, ainda que outro seja o do resultado."] },
    { h: "Lei penal no espaço" },
    { lista: ["Territorialidade (art. 5º): aplica-se a lei brasileira ao crime cometido no território nacional, sem prejuízo de tratados. Embarcações e aeronaves públicas brasileiras, onde estiverem, e as privadas em alto-mar ou espaço aéreo correspondente são extensão do território.", "Lugar do crime (art. 6º): teoria da ubiquidade, onde ocorreu a ação ou omissão, no todo ou em parte, ou onde se produziu ou deveria produzir-se o resultado.", "Extraterritorialidade (art. 7º): incondicionada (ex.: crimes contra a vida ou a liberdade do Presidente da República, contra o patrimônio ou a fé pública da União, contra a administração pública por quem está a seu serviço, genocídio por brasileiro ou domiciliado no Brasil) e condicionada (ex.: crimes que o Brasil se obrigou a reprimir por tratado, praticados por brasileiro)."] },
    { h: "Estrutura do crime (conceito analítico tripartido)" },
    { tabela: { cab: ["Elemento", "Conteúdo", "O que o exclui"], linhas: [
      ["Fato típico", "Conduta (dolosa ou culposa), resultado, nexo causal e tipicidade", "Ausência de conduta (coação física irresistível, ato reflexo), atipicidade, princípio da insignificância"],
      ["Ilicitude", "Contrariedade do fato ao ordenamento", "Estado de necessidade, legítima defesa, estrito cumprimento do dever legal, exercício regular de direito (art. 23)"],
      ["Culpabilidade", "Imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa", "Inimputabilidade, erro de proibição inevitável, coação moral irresistível, obediência hierárquica a ordem não manifestamente ilegal"]] } },
    { h: "Dolo e culpa" },
    { lista: ["Dolo direto: o agente quis o resultado. Dolo eventual: assumiu o risco de produzi-lo (art. 18, I).", "Culpa (art. 18, II): resultado por imprudência (ação descuidada), negligência (omissão de cuidado) ou imperícia (falta de aptidão técnica). Só há crime culposo quando a lei prevê expressamente.", "Culpa consciente: o agente prevê o resultado, mas acredita sinceramente que não ocorrerá. No dolo eventual, ele aceita o resultado."] },
    { h: "Consumação e tentativa" },
    { lista: ["Iter criminis: cogitação, preparação, execução e consumação. Cogitação e, em regra, preparação não são puníveis.", "Tentativa (art. 14, II): iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente. Pena do consumado reduzida de 1 a 2/3.", "Desistência voluntária e arrependimento eficaz (art. 15): o agente só responde pelos atos já praticados.", "Arrependimento posterior (art. 16): crime sem violência ou grave ameaça, dano reparado ou coisa restituída até o recebimento da denúncia, por ato voluntário. Pena reduzida de 1 a 2/3.", "Crime impossível (art. 17): ineficácia absoluta do meio ou absoluta impropriedade do objeto; não se pune a tentativa."] },
    { h: "Excludentes de ilicitude ligadas à atividade policial" },
    { lista: ["Legítima defesa (art. 25): usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem.", "Parágrafo único (Lei 13.964/2019): também se considera em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.", "Estado de necessidade (art. 24): salvar de perigo atual, que não provocou por sua vontade nem podia evitar, direito próprio ou alheio, cujo sacrifício não era razoável exigir. Não pode alegá-lo quem tinha o dever legal de enfrentar o perigo.", "Excesso (art. 23, parágrafo único): o agente responde pelo excesso doloso ou culposo em qualquer das excludentes."] },
    { h: "Imputabilidade e concurso de pessoas" },
    { lista: ["Menores de 18 anos são penalmente inimputáveis (art. 27; CF, art. 228), sujeitos à legislação especial (ECA).", "Doença mental que torne o agente inteiramente incapaz de entender o caráter ilícito do fato ou de determinar-se: isenção de pena (art. 26). Capacidade parcial: redução de 1 a 2/3.", "Embriaguez voluntária ou culposa não exclui a imputabilidade (art. 28, II). Embriaguez completa por caso fortuito ou força maior isenta de pena.", "Concurso de pessoas (art. 29): quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade. Participação de menor importância: redução de 1/6 a 1/3."] },
    { fonte: "Código Penal (Decreto-Lei 2.848/1940), arts. 1º a 31, com alterações da Lei 13.964/2019; Constituição Federal, art. 5º." }
  ],
  checklist: ["Sei retroatividade benéfica, abolitio criminis e ultra-atividade", "Sei as teorias da atividade (tempo) e da ubiquidade (lugar)", "Sei os elementos do fato típico, da ilicitude e da culpabilidade", "Diferencio dolo eventual e culpa consciente", "Sei tentativa, desistência, arrependimento eficaz e posterior", "Sei a legítima defesa do agente de segurança pública"],
  questoes: [
    { tipo: "ce", enunciado: "A lei penal posterior mais benéfica aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado.", certo: true, explicacao: "CP, art. 2º, parágrafo único." },
    { tipo: "ce", enunciado: "Quanto ao tempo do crime, o Código Penal adota a teoria do resultado.", certo: false, explicacao: "Teoria da atividade (art. 4º)." },
    { tipo: "ce", enunciado: "Quanto ao lugar do crime, o Código Penal adota a teoria da ubiquidade.", certo: true, explicacao: "Art. 6º." },
    { tipo: "ce", enunciado: "Na culpa consciente, o agente prevê o resultado e o aceita, sendo-lhe indiferente sua ocorrência.", certo: false, explicacao: "Isso é dolo eventual. Na culpa consciente ele acredita que o resultado não ocorrerá." },
    { tipo: "ce", enunciado: "No arrependimento posterior, a reparação do dano deve ocorrer até o recebimento da denúncia ou da queixa.", certo: true, explicacao: "Art. 16." },
    { tipo: "ce", enunciado: "Considera-se em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.", certo: true, explicacao: "Art. 25, parágrafo único, incluído pela Lei 13.964/2019." },
    { tipo: "ce", enunciado: "A embriaguez voluntária completa exclui a imputabilidade penal.", certo: false, explicacao: "Art. 28, II: não exclui." },
    { tipo: "ce", enunciado: "Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo.", certo: true, explicacao: "Art. 24, § 1º." },
    { tipo: "ce", enunciado: "Na tentativa, a pena é a do crime consumado, reduzida de um a dois terços.", certo: true, explicacao: "Art. 14, parágrafo único." },
    { tipo: "ce", enunciado: "Na desistência voluntária, o agente responde pela tentativa do crime que pretendia cometer.", certo: false, explicacao: "Responde só pelos atos já praticados (art. 15)." }
  ]
},

DPE2: {
  disciplina: "Direito Penal", titulo: "Crimes contra a pessoa e contra o patrimônio",
  objetivo: "Distinguir os principais crimes contra a vida, a integridade e o patrimônio, com as qualificadoras e majorantes mais cobradas.",
  edital: ["Crimes contra a pessoa", "Crimes contra o patrimônio"],
  porque: ["O PRF lida com furto e roubo de veículos, receptação e crimes violentos na rodovia.", "A banca explora a diferença entre furto, roubo, extorsão e receptação."],
  conteudo: [
    { h: "Crimes contra a vida e a integridade" },
    { tabela: { cab: ["Crime", "Pena base", "Pontos-chave"], linhas: [
      ["Homicídio simples (art. 121)", "Reclusão de 6 a 20 anos", "Privilegiado (§ 1º): relevante valor social ou moral, ou domínio de violenta emoção logo após injusta provocação; redução de 1/6 a 1/3"],
      ["Homicídio qualificado (art. 121, § 2º)", "Reclusão de 12 a 30 anos", "Motivo torpe ou fútil, meio cruel, recurso que dificulte a defesa, para assegurar outro crime, contra agente de segurança pública no exercício da função ou em decorrência dela (e parentes), entre outras. É hediondo."],
      ["Feminicídio (art. 121-A, Lei 14.994/2024)", "Reclusão de 20 a 40 anos", "Matar mulher por razões da condição do sexo feminino (violência doméstica e familiar, ou menosprezo ou discriminação). Passou a ser crime autônomo."],
      ["Homicídio culposo (art. 121, § 3º)", "Detenção de 1 a 3 anos", "No trânsito, aplica-se o art. 302 do CTB"],
      ["Lesão corporal (art. 129)", "Detenção de 3 meses a 1 ano", "Grave (§ 1º), gravíssima (§ 2º) e seguida de morte (§ 3º) têm penas maiores"],
      ["Omissão de socorro (art. 135)", "Detenção de 1 a 6 meses, ou multa", "Aumenta de metade se resulta lesão grave e triplica se resulta morte"]] } },
    { h: "Crimes contra o patrimônio" },
    { tabela: { cab: ["Crime", "Núcleo", "Pena base"], linhas: [
      ["Furto (art. 155)", "Subtrair coisa alheia móvel, sem violência ou grave ameaça", "Reclusão de 1 a 4 anos"],
      ["Furto de veículo levado a outro estado ou ao exterior (art. 155, § 5º)", "Subtração de veículo automotor que venha a ser transportado para outro estado ou para o exterior", "Reclusão de 3 a 8 anos"],
      ["Roubo (art. 157)", "Subtrair mediante grave ameaça ou violência à pessoa, ou depois de havê-la reduzido à impossibilidade de resistência", "Reclusão de 4 a 10 anos"],
      ["Latrocínio (art. 157, § 3º, II)", "Roubo do qual resulta morte", "Reclusão de 20 a 30 anos; hediondo"],
      ["Extorsão (art. 158)", "Constranger alguém, mediante violência ou grave ameaça, a fazer, tolerar ou deixar de fazer algo, para obter vantagem econômica", "Reclusão de 4 a 10 anos"],
      ["Extorsão mediante sequestro (art. 159)", "Sequestrar pessoa para obter vantagem como condição ou preço do resgate", "Reclusão de 8 a 15 anos; hediondo"],
      ["Apropriação indébita (art. 168)", "Apropriar-se de coisa alheia móvel de que tem a posse ou detenção", "Reclusão de 1 a 4 anos"],
      ["Estelionato (art. 171)", "Obter vantagem ilícita induzindo ou mantendo alguém em erro, por artifício, ardil ou fraude", "Reclusão de 1 a 5 anos"],
      ["Receptação (art. 180)", "Adquirir, receber, transportar, conduzir ou ocultar coisa que sabe ser produto de crime", "Reclusão de 1 a 4 anos; qualificada (atividade comercial) 3 a 8"]] } },
    { h: "Majorantes do roubo mais cobradas (art. 157, § 2º e § 2º-A)" },
    { lista: ["Aumento de 1/3 até a metade: concurso de duas ou mais pessoas; vítima em serviço de transporte de valores; subtração de veículo automotor levado a outro estado ou ao exterior; restrição da liberdade da vítima; arma branca.", "Aumento de 2/3: emprego de arma de fogo; destruição ou rompimento de obstáculo com explosivo.", "Arma de fogo de uso restrito ou proibido: pena em dobro (§ 2º-B, Lei 13.964/2019)."] },
    { h: "Distinções que a banca explora" },
    { lista: ["Furto x roubo: a violência ou a grave ameaça contra a pessoa transforma a subtração em roubo.", "Roubo x extorsão: no roubo o agente subtrai; na extorsão a colaboração da vítima é indispensável.", "Estelionato x furto mediante fraude: no estelionato a vítima entrega o bem enganada; no furto mediante fraude, a fraude serve para diminuir a vigilância e o agente subtrai.", "Estelionato: desde a Lei 13.964/2019, a ação penal depende de representação, salvo quando a vítima for a administração pública, criança ou adolescente, pessoa com deficiência mental, maior de 70 anos ou incapaz (art. 171, § 5º)."] },
    { fonte: "Código Penal, arts. 121 a 180, com alterações das Leis 13.964/2019 e 14.994/2024." }
  ],
  checklist: ["Sei as penas de homicídio simples, qualificado e culposo", "Sei que o feminicídio é crime autônomo desde 2024", "Diferencio furto, roubo, extorsão e estelionato", "Sei as majorantes do roubo, incluindo arma de fogo", "Sei a receptação e a qualificada", "Sei quando o estelionato exige representação"],
  questoes: [
    { tipo: "ce", enunciado: "A subtração de veículo automotor que venha a ser transportado para outro estado configura furto qualificado, com pena de reclusão de 3 a 8 anos.", certo: true, explicacao: "Art. 155, § 5º." },
    { tipo: "ce", enunciado: "No roubo, o emprego de arma de fogo aumenta a pena de um terço até a metade.", certo: false, explicacao: "Arma de fogo: aumento de 2/3 (§ 2º-A)." },
    { tipo: "ce", enunciado: "O latrocínio é crime hediondo, punido com reclusão de 20 a 30 anos.", certo: true, explicacao: "Art. 157, § 3º, II; Lei 8.072/1990." },
    { tipo: "ce", enunciado: "Desde a Lei 14.994/2024, o feminicídio é previsto como crime autônomo no art. 121-A do Código Penal.", certo: true, explicacao: "Pena de reclusão de 20 a 40 anos." },
    { tipo: "ce", enunciado: "Quem transporta, no exercício de atividade comercial, carga que sabe ser produto de crime pratica receptação qualificada.", certo: true, explicacao: "Art. 180, § 1º." },
    { tipo: "ce", enunciado: "Na extorsão, diferentemente do roubo, a colaboração da vítima é indispensável para a obtenção da vantagem.", certo: true, explicacao: "Distinção doutrinária e jurisprudencial." },
    { tipo: "ce", enunciado: "O homicídio praticado contra integrante da Polícia Rodoviária Federal, no exercício da função, é qualificado.", certo: true, explicacao: "Art. 121, § 2º, VII, que remete aos arts. 142 e 144 da CF." },
    { tipo: "ce", enunciado: "A subtração de coisa alheia móvel mediante grave ameaça configura furto qualificado.", certo: false, explicacao: "Grave ameaça à pessoa caracteriza roubo." },
    { tipo: "ce", enunciado: "No estelionato contra pessoa maior de 70 anos, a ação penal é pública incondicionada.", certo: true, explicacao: "Exceção do art. 171, § 5º." },
    { tipo: "mc", enunciado: "O agente que sequestra pessoa com o fim de obter, para si ou para outrem, vantagem como condição do resgate pratica:", opcoes: ["roubo", "extorsão simples", "extorsão mediante sequestro", "sequestro e cárcere privado", "estelionato"], correta: 2, explicacao: "Art. 159." }
  ]
},

DPE3: {
  disciplina: "Direito Penal", titulo: "Crimes contra a administração pública",
  objetivo: "Conhecer o conceito penal de funcionário público e os crimes funcionais e praticados por particular contra a administração.",
  edital: ["Crimes contra a administração pública"],
  porque: ["O policial é funcionário público para fins penais e lida diariamente com resistência, desobediência, desacato e tentativas de corrupção.", "Peculato, concussão e corrupção são cobrados com troca de verbos."],
  conteudo: [
    { h: "Funcionário público (art. 327)" },
    { p: "Considera-se funcionário público, para os efeitos penais, quem, embora transitoriamente ou sem remuneração, exerce cargo, emprego ou função pública. Equipara-se quem exerce cargo, emprego ou função em entidade paraestatal e quem trabalha para empresa prestadora de serviço contratada ou conveniada para a execução de atividade típica da administração pública." },
    { h: "Crimes praticados por funcionário público" },
    { tabela: { cab: ["Crime", "Verbo-chave", "Pena"], linhas: [
      ["Peculato (art. 312)", "Apropriar-se ou desviar dinheiro, valor ou bem de que tem a posse em razão do cargo; ou subtrair valendo-se da facilidade do cargo (peculato-furto)", "Reclusão de 2 a 12 anos e multa"],
      ["Peculato culposo (art. 312, § 2º)", "Concorrer culposamente para o crime de outrem", "Detenção de 3 meses a 1 ano. Reparação do dano antes da sentença irrecorrível extingue a punibilidade; depois, reduz a pena pela metade"],
      ["Concussão (art. 316)", "EXIGIR vantagem indevida em razão da função", "Reclusão de 2 a 12 anos e multa (redação da Lei 13.964/2019)"],
      ["Corrupção passiva (art. 317)", "SOLICITAR ou RECEBER vantagem indevida, ou ACEITAR promessa", "Reclusão de 2 a 12 anos e multa"],
      ["Facilitação de contrabando ou descaminho (art. 318)", "Facilitar, com infração de dever funcional, a prática de contrabando ou descaminho", "Reclusão de 3 a 8 anos e multa"],
      ["Prevaricação (art. 319)", "Retardar, deixar de praticar ou praticar ato contra a lei para satisfazer interesse ou sentimento pessoal", "Detenção de 3 meses a 1 ano e multa"],
      ["Condescendência criminosa (art. 320)", "Deixar, por indulgência, de responsabilizar subordinado ou de levar o fato ao conhecimento da autoridade", "Detenção de 15 dias a 1 mês, ou multa"],
      ["Advocacia administrativa (art. 321)", "Patrocinar interesse privado perante a administração, valendo-se da qualidade de funcionário", "Detenção de 1 a 3 meses, ou multa"]] } },
    { h: "Crimes praticados por particular" },
    { tabela: { cab: ["Crime", "Conduta", "Pena"], linhas: [
      ["Resistência (art. 329)", "Opor-se à execução de ato legal, mediante violência ou ameaça a funcionário competente", "Detenção de 2 meses a 2 anos; se o ato não se executa, reclusão de 1 a 3 anos"],
      ["Desobediência (art. 330)", "Desobedecer a ordem legal de funcionário público", "Detenção de 15 dias a 6 meses e multa"],
      ["Desacato (art. 331)", "Desacatar funcionário público no exercício da função ou em razão dela", "Detenção de 6 meses a 2 anos, ou multa"],
      ["Corrupção ativa (art. 333)", "OFERECER ou PROMETER vantagem indevida a funcionário para que pratique, omita ou retarde ato de ofício", "Reclusão de 2 a 12 anos e multa"],
      ["Descaminho (art. 334)", "Iludir, no todo ou em parte, o pagamento de imposto devido pela entrada, saída ou consumo de mercadoria permitida", "Reclusão de 1 a 4 anos"],
      ["Contrabando (art. 334-A)", "Importar ou exportar mercadoria proibida", "Reclusão de 2 a 5 anos"]] } },
    { dica: "Exigir = concussão. Solicitar ou receber = corrupção passiva. Oferecer ou prometer = corrupção ativa (particular). Se o particular só paga porque o funcionário exigiu, não há corrupção ativa: ele é vítima da concussão." },
    { nota: "A desobediência à ordem de parada dada por policial rodoviário em fiscalização de trânsito tem tratamento específico no CTB (infração do art. 195 e, conforme o caso, art. 210). A configuração do crime do art. 330 do CP nesse contexto é tema de divergência; leia a jurisprudência recente antes da prova." },
    { fonte: "Código Penal, arts. 312 a 334-A, com alterações da Lei 13.964/2019." }
  ],
  checklist: ["Sei o conceito penal de funcionário público e o equiparado", "Diferencio peculato doloso e culposo e os efeitos da reparação", "Diferencio concussão, corrupção passiva e corrupção ativa", "Sei prevaricação, condescendência e advocacia administrativa", "Sei resistência, desobediência e desacato", "Diferencio contrabando e descaminho"],
  questoes: [
    { tipo: "ce", enunciado: "Para os efeitos penais, considera-se funcionário público quem exerce cargo público, ainda que transitoriamente e sem remuneração.", certo: true, explicacao: "Art. 327." },
    { tipo: "ce", enunciado: "O policial que exige dinheiro de motorista para não lavrar o auto de infração pratica corrupção passiva.", certo: false, explicacao: "Exigir caracteriza concussão (art. 316)." },
    { tipo: "ce", enunciado: "O motorista que oferece dinheiro ao policial para não ser autuado pratica corrupção ativa.", certo: true, explicacao: "Art. 333: oferecer vantagem indevida." },
    { tipo: "ce", enunciado: "No peculato culposo, a reparação do dano após a sentença irrecorrível extingue a punibilidade.", certo: false, explicacao: "Antes da sentença irrecorrível extingue; depois, reduz a pena pela metade." },
    { tipo: "ce", enunciado: "Pratica prevaricação o funcionário que deixa de praticar ato de ofício para satisfazer sentimento pessoal.", certo: true, explicacao: "Art. 319." },
    { tipo: "ce", enunciado: "A importação de mercadoria proibida configura descaminho.", certo: false, explicacao: "Mercadoria proibida: contrabando. Descaminho é iludir tributo de mercadoria permitida." },
    { tipo: "ce", enunciado: "Na resistência, se o ato, em razão dela, não se executa, a pena é de reclusão de 1 a 3 anos.", certo: true, explicacao: "Art. 329, § 1º." },
    { tipo: "ce", enunciado: "O funcionário que aceita promessa de vantagem indevida em razão da função pratica corrupção passiva, mesmo que não receba a vantagem.", certo: true, explicacao: "Aceitar promessa já consuma o crime." },
    { tipo: "ce", enunciado: "A condescendência criminosa ocorre quando o funcionário, por indulgência, deixa de responsabilizar subordinado que cometeu infração no exercício do cargo.", certo: true, explicacao: "Art. 320." },
    { tipo: "mc", enunciado: "O funcionário que se apropria de bem de que tem a posse em razão do cargo pratica:", opcoes: ["concussão", "peculato", "prevaricação", "corrupção passiva", "advocacia administrativa"], correta: 1, explicacao: "Art. 312, caput." }
  ]
},

DPP1: {
  disciplina: "Direito Processual Penal", titulo: "Inquérito policial e ação penal",
  objetivo: "Conhecer características, instauração, prazos e arquivamento do inquérito e as espécies de ação penal.",
  edital: ["Inquérito policial", "Ação penal: espécies"],
  porque: ["O PRF atua no início da persecução penal: ocorrências, flagrantes e encaminhamento à polícia judiciária.", "Características do inquérito são cobradas em quase toda prova da Cebraspe."],
  conteudo: [
    { h: "Características do inquérito" },
    { lista: ["Procedimento administrativo, preparatório e informativo, presidido pelo delegado de polícia (polícia judiciária).", "Escrito (art. 9º), sigiloso na medida necessária à elucidação do fato (art. 20), inquisitivo (não há contraditório pleno).", "Dispensável: o MP pode oferecer denúncia com base em outros elementos.", "Indisponível: a autoridade policial não pode mandar arquivar autos de inquérito (art. 17).", "Súmula Vinculante 14: o defensor tem direito de acesso amplo aos elementos de prova já documentados que digam respeito ao exercício do direito de defesa."] },
    { h: "Instauração (art. 5º)" },
    { tabela: { cab: ["Tipo de ação penal", "Como o inquérito começa"], linhas: [
      ["Pública incondicionada", "De ofício, por requisição do MP ou por requerimento do ofendido"],
      ["Pública condicionada", "Depende de representação do ofendido ou de requisição do Ministro da Justiça"],
      ["Privada", "Depende de requerimento de quem tenha qualidade para propor a ação"]] } },
    { h: "Prazos (art. 10)" },
    { p: "10 dias se o indiciado estiver preso, contados da prisão; 30 dias se estiver solto. Leis especiais trazem prazos próprios (ex.: Lei de Drogas, 30 dias preso e 90 solto, duplicáveis; inquérito federal, 15 dias preso, prorrogáveis por mais 15)." },
    { h: "Arquivamento" },
    { p: "Pela Lei 13.964/2019, o arquivamento é promovido pelo Ministério Público. Ao julgar as ADIs 6.298, 6.299, 6.300 e 6.305 (2023), o STF deu interpretação conforme: o MP deve submeter sua manifestação ao juiz, que pode, em caso de ilegalidade ou teratologia, submeter a matéria à revisão da instância competente do MP. Arquivado o inquérito por falta de base, a autoridade pode fazer novas pesquisas se tiver notícia de outras provas (art. 18; Súmula 524 do STF)." },
    { h: "Ação penal" },
    { tabela: { cab: ["Espécie", "Titular e peça", "Princípios"], linhas: [
      ["Pública incondicionada (regra)", "MP, por denúncia", "Obrigatoriedade e indisponibilidade"],
      ["Pública condicionada", "MP, por denúncia, após representação ou requisição", "Representação retratável até o oferecimento da denúncia (art. 25)"],
      ["Privada", "Ofendido, por queixa-crime", "Oportunidade, disponibilidade (perdão, perempção) e indivisibilidade"],
      ["Privada subsidiária da pública", "Ofendido, se o MP não oferecer denúncia no prazo", "CF, art. 5º, LIX"]] } },
    { lista: ["Decadência (art. 38): o direito de queixa ou de representação decai em 6 meses, contados do dia em que se soube quem é o autor do crime.", "Prazo da denúncia (art. 46): 5 dias com réu preso, 15 dias com réu solto.", "Acordo de não persecução penal (art. 28-A, Lei 13.964/2019): infração sem violência ou grave ameaça, com pena mínima inferior a 4 anos, havendo confissão formal e circunstanciada, se não for caso de arquivamento e for suficiente para reprovação e prevenção."] },
    { fonte: "Código de Processo Penal, arts. 4º a 62 e 28-A; STF, SV 14 e Súmula 524; ADIs 6.298, 6.299, 6.300 e 6.305." }
  ],
  checklist: ["Sei as características do inquérito", "Sei como o inquérito começa em cada tipo de ação", "Sei os prazos de 10 e 30 dias", "Sei quem arquiva e o que o STF decidiu em 2023", "Diferencio as espécies de ação penal", "Sei decadência, prazo da denúncia e requisitos do ANPP"],
  questoes: [
    { tipo: "ce", enunciado: "A autoridade policial pode mandar arquivar autos de inquérito quando concluir que o fato é atípico.", certo: false, explicacao: "Art. 17: não pode." },
    { tipo: "ce", enunciado: "O inquérito policial é dispensável para o oferecimento da denúncia.", certo: true, explicacao: "Se houver outros elementos suficientes." },
    { tipo: "ce", enunciado: "Estando o indiciado preso, o inquérito deve terminar em 10 dias, como regra do CPP.", certo: true, explicacao: "Art. 10." },
    { tipo: "ce", enunciado: "Nos crimes de ação pública condicionada, o inquérito pode ser instaurado de ofício pela autoridade policial, sem representação.", certo: false, explicacao: "Depende de representação (art. 5º, § 4º)." },
    { tipo: "ce", enunciado: "O direito de representação decai em seis meses, contados do dia em que o ofendido vier a saber quem é o autor do crime.", certo: true, explicacao: "Art. 38." },
    { tipo: "ce", enunciado: "A representação é retratável até o oferecimento da denúncia.", certo: true, explicacao: "Art. 25." },
    { tipo: "ce", enunciado: "O acordo de não persecução penal é cabível em crimes cometidos com grave ameaça, desde que a pena mínima seja inferior a quatro anos.", certo: false, explicacao: "Exige infração sem violência ou grave ameaça." },
    { tipo: "ce", enunciado: "A ação penal privada subsidiária da pública é cabível quando o MP não oferece denúncia no prazo legal.", certo: true, explicacao: "CF, art. 5º, LIX; CPP, art. 29." },
    { tipo: "ce", enunciado: "O defensor tem direito de acesso amplo aos elementos de prova já documentados no inquérito que digam respeito ao direito de defesa.", certo: true, explicacao: "SV 14." },
    { tipo: "mc", enunciado: "Com o réu preso, o prazo do MP para oferecer denúncia é de:", opcoes: ["2 dias", "5 dias", "10 dias", "15 dias", "30 dias"], correta: 1, explicacao: "Art. 46." }
  ]
},

DPP2: {
  disciplina: "Direito Processual Penal", titulo: "Prisões, busca e provas",
  objetivo: "Aplicar as regras de prisão em flagrante, preventiva e temporária, busca pessoal e domiciliar, provas ilícitas e cadeia de custódia.",
  edital: ["Prisão em flagrante, preventiva e temporária", "Provas; busca e apreensão; cadeia de custódia"],
  porque: ["É o direito processual que o PRF aplica na ocorrência.", "Flagrante (espécies) e busca pessoal são cobrados com situações concretas."],
  conteudo: [
    { h: "Prisão em flagrante" },
    { lista: ["Art. 301: qualquer do povo poderá e as autoridades policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito (flagrante facultativo x obrigatório).", "Flagrante próprio (art. 302, I e II): está cometendo a infração ou acaba de cometê-la.", "Flagrante impróprio (III): é perseguido, logo após, em situação que faça presumir ser autor.", "Flagrante presumido ou ficto (IV): é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser ele autor.", "Crimes permanentes (ex.: tráfico na modalidade 'ter em depósito', posse ilegal de arma): o flagrante perdura enquanto não cessar a permanência (art. 303).", "Flagrante preparado (provocado) é ilegal: crime impossível (Súmula 145 do STF). Flagrante esperado é válido; flagrante diferido (ação controlada) depende de previsão legal."] },
    { h: "Depois da prisão" },
    { lista: ["Comunicação imediata ao juiz, ao MP e à família ou pessoa indicada (CF, art. 5º, LXII).", "Nota de culpa em até 24 horas; auto de prisão remetido ao juiz em até 24 horas.", "Audiência de custódia em até 24 horas (art. 310): o juiz relaxa a prisão ilegal, converte em preventiva (se presentes os requisitos e insuficientes as cautelares) ou concede liberdade provisória.", "Súmula Vinculante 11: algemas só em caso de resistência, fundado receio de fuga ou perigo à integridade física, própria ou alheia, justificada a excepcionalidade por escrito."] },
    { h: "Preventiva e temporária" },
    { tabela: { cab: ["", "Preventiva (CPP, arts. 311 a 316)", "Temporária (Lei 7.960/1989)"], linhas: [
      ["Quando", "Inquérito ou processo", "Só no inquérito"],
      ["Quem decreta", "Juiz, a requerimento do MP, querelante, assistente ou representação da autoridade policial. Não pode de ofício (Lei 13.964/2019).", "Juiz, por representação da autoridade policial ou requerimento do MP; não de ofício"],
      ["Fundamentos", "Garantia da ordem pública ou econômica, conveniência da instrução, assegurar a aplicação da lei penal, com prova da existência do crime, indício suficiente de autoria e perigo gerado pela liberdade", "Imprescindibilidade para a investigação, ausência de residência fixa ou identificação, e fundadas razões de autoria em crimes do rol da lei"],
      ["Prazo", "Sem prazo fixo; revisão da necessidade a cada 90 dias (art. 316, parágrafo único)", "5 dias + 5; hediondos e equiparados, 30 + 30"]] } },
    { h: "Busca" },
    { lista: ["Busca pessoal (art. 244): independe de mandado no caso de prisão, quando houver fundada suspeita de que a pessoa esteja na posse de arma proibida ou de objetos ou papéis que constituam corpo de delito, ou quando determinada no curso de busca domiciliar. O STJ exige fundada suspeita baseada em elementos objetivos, não em impressões subjetivas.", "Busca em veículo: em regra segue as regras da busca pessoal.", "Busca domiciliar (CF, art. 5º, XI): a casa é asilo inviolável; entra-se sem consentimento só em flagrante delito, desastre, para prestar socorro ou, durante o dia, por determinação judicial."] },
    { h: "Provas" },
    { lista: ["Art. 157: são inadmissíveis as provas ilícitas, obtidas em violação a normas constitucionais ou legais, e as delas derivadas (frutos da árvore envenenada), salvo quando não evidenciado o nexo de causalidade ou quando puderem ser obtidas por fonte independente.", "Cadeia de custódia (arts. 158-A a 158-F, Lei 13.964/2019): conjunto de procedimentos para manter e documentar a história cronológica do vestígio, do reconhecimento ao descarte. O agente público que reconhece um elemento como de potencial interesse para a perícia fica responsável por sua preservação.", "Exame de corpo de delito é indispensável quando a infração deixar vestígios, não podendo supri-lo a confissão (art. 158)."] },
    { fonte: "CPP, arts. 155 a 250 e 282 a 316; Lei 7.960/1989; CF, art. 5º; STF, Súmula 145 e SV 11." }
  ],
  checklist: ["Sei as espécies de flagrante e o flagrante nos crimes permanentes", "Sei flagrante preparado x esperado", "Sei a audiência de custódia e a SV 11", "Diferencio preventiva e temporária, inclusive prazos", "Sei as hipóteses de busca pessoal sem mandado e de entrada em domicílio", "Sei provas ilícitas, derivadas e cadeia de custódia"],
  questoes: [
    { tipo: "ce", enunciado: "Considera-se em flagrante quem é encontrado, logo depois, com instrumentos ou objetos que façam presumir ser ele o autor da infração.", certo: true, explicacao: "Flagrante presumido (art. 302, IV)." },
    { tipo: "ce", enunciado: "Nos crimes permanentes, entende-se o agente em flagrante enquanto não cessar a permanência.", certo: true, explicacao: "Art. 303." },
    { tipo: "ce", enunciado: "Não há crime quando a preparação do flagrante pela polícia torna impossível a sua consumação.", certo: true, explicacao: "Súmula 145 do STF." },
    { tipo: "ce", enunciado: "Após a Lei 13.964/2019, o juiz pode decretar a prisão preventiva de ofício no curso da ação penal.", certo: false, explicacao: "Art. 311: só a requerimento ou representação." },
    { tipo: "ce", enunciado: "A prisão temporária pode ser decretada durante a ação penal.", certo: false, explicacao: "Só durante o inquérito." },
    { tipo: "ce", enunciado: "Nos crimes hediondos, a prisão temporária tem prazo de 30 dias, prorrogável por igual período em caso de extrema e comprovada necessidade.", certo: true, explicacao: "Lei 8.072/1990, art. 2º, § 4º." },
    { tipo: "ce", enunciado: "A busca pessoal depende sempre de mandado judicial.", certo: false, explicacao: "Art. 244: dispensa mandado em caso de prisão ou fundada suspeita." },
    { tipo: "ce", enunciado: "Em flagrante delito, é permitido ingressar na casa sem consentimento do morador, inclusive durante a noite.", certo: true, explicacao: "CF, art. 5º, XI." },
    { tipo: "ce", enunciado: "Quando a infração deixa vestígios, a confissão do acusado supre a falta do exame de corpo de delito.", certo: false, explicacao: "Art. 158: não supre." },
    { tipo: "mc", enunciado: "O agente perseguido logo após a infração, em situação que faça presumir ser autor, está em flagrante:", opcoes: ["próprio", "impróprio", "presumido", "preparado", "diferido"], correta: 1, explicacao: "Art. 302, III." }
  ]
},

LES1: {
  disciplina: "Legislação Penal Especial", titulo: "Drogas, armas e abuso de autoridade",
  objetivo: "Conhecer os crimes e as regras centrais da Lei de Drogas, do Estatuto do Desarmamento e da Lei de Abuso de Autoridade.",
  edital: ["Lei 11.343/2006 (drogas)", "Lei 10.826/2003 (Estatuto do Desarmamento)", "Lei 13.869/2019 (abuso de autoridade)"],
  porque: ["Tráfico e armas são as maiores fontes de flagrante nas rodovias federais.", "A Lei de Abuso de Autoridade limita a própria atuação policial."],
  conteudo: [
    { h: "Lei de Drogas (Lei 11.343/2006)" },
    { tabela: { cab: ["Art.", "Conduta", "Pena"], linhas: [
      ["28", "Adquirir, guardar, ter em depósito, transportar ou trazer consigo droga para consumo pessoal", "Advertência, prestação de serviços à comunidade e medida educativa. Não há pena de prisão."],
      ["33", "Importar, exportar, remeter, preparar, produzir, adquirir, vender, ter em depósito, transportar, trazer consigo, guardar, entregar a consumo ou fornecer drogas, ainda que gratuitamente, sem autorização (tráfico)", "Reclusão de 5 a 15 anos e multa"],
      ["33, § 4º", "Tráfico privilegiado: agente primário, de bons antecedentes, que não se dedica a atividades criminosas nem integra organização criminosa", "Redução de 1/6 a 2/3"],
      ["35", "Associarem-se duas ou mais pessoas para praticar, reiteradamente ou não, o tráfico", "Reclusão de 3 a 10 anos e multa"],
      ["40", "Causas de aumento de 1/6 a 2/3", "Ex.: transnacionalidade, tráfico entre estados ou com o DF, uso de arma de fogo, envolvimento de criança ou adolescente"]] } },
    { lista: ["Para distinguir uso de tráfico, o juiz considera natureza e quantidade da substância, local e condições da ação, circunstâncias sociais e pessoais, conduta e antecedentes (art. 28, § 2º).", "No RE 635.659 (2024), o STF decidiu que o porte de maconha para consumo pessoal não é crime (permanece ilícito administrativo) e fixou presunção de uso para até 40 gramas ou seis plantas fêmeas, sem impedir a prisão por tráfico diante de outros elementos.", "O tráfico privilegiado não é crime hediondo (STF; Lei 7.210/1984, art. 112, § 5º)."] },
    { h: "Estatuto do Desarmamento (Lei 10.826/2003)" },
    { tabela: { cab: ["Art.", "Conduta", "Pena"], linhas: [
      ["12", "Posse irregular de arma de fogo de uso permitido (no interior da residência ou do local de trabalho, sendo titular ou responsável)", "Detenção de 1 a 3 anos e multa"],
      ["14", "Porte ilegal de arma de fogo de uso permitido", "Reclusão de 2 a 4 anos e multa"],
      ["15", "Disparo de arma de fogo em lugar habitado ou em via pública", "Reclusão de 2 a 4 anos e multa"],
      ["16", "Posse ou porte ilegal de arma de fogo de uso restrito", "Reclusão de 3 a 6 anos e multa"],
      ["16, § 2º", "Arma de fogo de uso proibido", "Reclusão de 4 a 12 anos (hediondo)"],
      ["17 e 18", "Comércio ilegal e tráfico internacional de arma de fogo", "Penas maiores; aumentadas se a arma for de uso proibido ou restrito"]] } },
    { nota: "O STF (ADI 3.112) declarou inconstitucionais os dispositivos que proibiam fiança nos arts. 14 e 15 e liberdade provisória no art. 21." },
    { h: "Abuso de autoridade (Lei 13.869/2019)" },
    { lista: ["Exige dolo específico: finalidade de prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal (art. 1º, § 1º).", "A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso (art. 1º, § 2º).", "Ação penal pública incondicionada; admite ação privada subsidiária.", "Perda do cargo e inabilitação dependem de reincidência em crime de abuso de autoridade e não são automáticas: devem ser declaradas motivadamente na sentença.", "Exemplos de crimes: constranger o preso, mediante violência ou grave ameaça, a exibir-se à curiosidade pública (art. 13); deixar de comunicar a prisão ao juiz (art. 12); invadir ou adentrar imóvel alheio sem autorização judicial ou fora das hipóteses legais (art. 22)."] },
    { alerta: "Os incisos e artigos da Lei 13.869/2019 tiveram vetos derrubados pelo Congresso. Confira no texto compilado quais artigos estão em vigor antes de memorizar a numeração." },
    { fonte: "Leis 11.343/2006, 10.826/2003 e 13.869/2019; STF, RE 635.659 e ADI 3.112." }
  ],
  checklist: ["Sei a pena do art. 28 e os critérios para distinguir uso de tráfico", "Sei a decisão do STF de 2024 sobre maconha", "Sei pena e requisitos do tráfico privilegiado", "Sei associação para o tráfico (duas pessoas)", "Diferencio posse e porte, uso permitido, restrito e proibido", "Sei o dolo específico do abuso de autoridade"],
  questoes: [
    { tipo: "ce", enunciado: "O porte de droga para consumo pessoal é punido com detenção de 6 meses a 2 anos.", certo: false, explicacao: "Art. 28: advertência, prestação de serviços e medida educativa; sem prisão." },
    { tipo: "ce", enunciado: "A associação para o tráfico exige a reunião de pelo menos duas pessoas.", certo: true, explicacao: "Art. 35: duas ou mais pessoas." },
    { tipo: "ce", enunciado: "O tráfico privilegiado tem natureza hedionda.", certo: false, explicacao: "Não é hediondo." },
    { tipo: "ce", enunciado: "O transporte de drogas entre estados da Federação é causa de aumento de pena na Lei 11.343/2006.", certo: true, explicacao: "Art. 40, V." },
    { tipo: "ce", enunciado: "Manter arma de fogo de uso permitido sem registro dentro da própria residência configura porte ilegal.", certo: false, explicacao: "Configura posse irregular (art. 12)." },
    { tipo: "ce", enunciado: "Portar arma de fogo de uso proibido é crime hediondo.", certo: true, explicacao: "Lei 8.072/1990, art. 1º, parágrafo único, II." },
    { tipo: "ce", enunciado: "Os crimes de abuso de autoridade exigem que o agente atue com finalidade específica, como prejudicar outrem ou por mero capricho.", certo: true, explicacao: "Art. 1º, § 1º." },
    { tipo: "ce", enunciado: "A divergência na interpretação da lei configura abuso de autoridade quando favorece o agente.", certo: false, explicacao: "Art. 1º, § 2º: não configura." },
    { tipo: "ce", enunciado: "A perda do cargo é efeito automático de toda condenação por abuso de autoridade.", certo: false, explicacao: "Exige reincidência e declaração motivada." },
    { tipo: "mc", enunciado: "Disparar arma de fogo em via pública, sem finalidade de outro crime, configura:", opcoes: ["posse irregular", "porte ilegal", "disparo de arma de fogo (art. 15)", "contravenção penal apenas", "conduta atípica"], correta: 2, explicacao: "Art. 15 do Estatuto." }
  ]
},

LES2: {
  disciplina: "Legislação Penal Especial", titulo: "Hediondos, tortura, organização criminosa e violência doméstica",
  objetivo: "Conhecer o regime dos crimes hediondos e equiparados, a Lei de Tortura, a Lei de Organizações Criminosas e as medidas da Lei Maria da Penha.",
  edital: ["Lei 8.072/1990 (crimes hediondos)", "Lei 9.455/1997 (tortura)", "Lei 12.850/2013 (organização criminosa)", "Lei 11.340/2006 (Maria da Penha)"],
  porque: ["O regime dos hediondos aparece em itens de direito constitucional e penal.", "Tortura e Maria da Penha têm regras específicas para policiais."],
  conteudo: [
    { h: "Crimes hediondos e equiparados" },
    { lista: ["CF, art. 5º, XLIII: são inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes, o terrorismo (TTT, os equiparados) e os definidos como crimes hediondos.", "A Lei 8.072/1990 acrescenta a vedação ao indulto.", "O regime inicial fechado obrigatório foi declarado inconstitucional pelo STF (HC 111.840); o regime segue as regras gerais do CP.", "Exemplos do rol: homicídio qualificado e o praticado em atividade típica de grupo de extermínio, latrocínio, extorsão qualificada pela morte, extorsão mediante sequestro, estupro e estupro de vulnerável, epidemia com resultado morte, falsificação de produto terapêutico ou medicinal, genocídio, posse ou porte de arma de fogo de uso proibido, feminicídio.", "Prisão temporária: 30 dias, prorrogáveis por mais 30."] },
    { h: "Tortura (Lei 9.455/1997)" },
    { lista: ["Constranger alguém com violência ou grave ameaça, causando sofrimento físico ou mental, para obter informação, declaração ou confissão; para provocar ação ou omissão criminosa; ou em razão de discriminação racial ou religiosa.", "Submeter alguém sob sua guarda, poder ou autoridade a intenso sofrimento físico ou mental como forma de castigo pessoal ou medida preventiva.", "Pena: reclusão de 2 a 8 anos. Aumento de 1/6 a 1/3 se cometido por agente público.", "Omissão: quem se omite em face dessas condutas, quando tinha o dever de evitá-las ou apurá-las, responde com detenção de 1 a 4 anos.", "A condenação acarreta a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada (efeito automático).", "Regime inicial fechado previsto em lei, salvo na omissão. Aplica-se também a crime cometido fora do território nacional, sendo a vítima brasileira ou o agente em local sob jurisdição brasileira."] },
    { h: "Organização criminosa (Lei 12.850/2013)" },
    { lista: ["Conceito: associação de 4 ou mais pessoas, estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, para obter vantagem de qualquer natureza, mediante prática de infrações penais com penas máximas superiores a 4 anos ou de caráter transnacional.", "Pena de promover, constituir, financiar ou integrar: reclusão de 3 a 8 anos e multa.", "Meios de obtenção de prova: colaboração premiada, captação ambiental, ação controlada, acesso a registros, interceptação, quebra de sigilos, infiltração de agentes e cooperação entre órgãos.", "Ação controlada: retardar a intervenção policial para que ocorra no momento mais eficaz, comunicada previamente ao juiz.", "Diferente da associação criminosa do CP (art. 288): 3 ou mais pessoas, para cometer crimes, sem exigência de estrutura ordenada."] },
    { h: "Maria da Penha (Lei 11.340/2006)" },
    { lista: ["Violência doméstica e familiar contra a mulher: qualquer ação ou omissão baseada no gênero que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial, no âmbito da unidade doméstica, da família ou de relação íntima de afeto, independentemente de coabitação.", "Formas de violência (art. 7º): física, psicológica, sexual, patrimonial e moral.", "Art. 12-C: verificado risco atual ou iminente à vida ou à integridade, o agressor será imediatamente afastado do lar pela autoridade judicial; pelo delegado, quando o município não for sede de comarca; ou pelo policial, quando o município não for sede de comarca e não houver delegado disponível. O juiz é comunicado em 24 horas.", "Art. 41: aos crimes praticados com violência doméstica contra a mulher não se aplica a Lei 9.099/1995.", "Descumprir medida protetiva de urgência é crime (art. 24-A)."] },
    { fonte: "CF, art. 5º, XLIII; Leis 8.072/1990, 9.455/1997, 12.850/2013 e 11.340/2006; STF, HC 111.840." }
  ],
  checklist: ["Sei o que é inafiançável e insuscetível de graça e anistia", "Sei que o regime inicial fechado obrigatório é inconstitucional", "Sei a pena da tortura, da omissão e o efeito sobre o cargo", "Sei o conceito de organização criminosa (4 pessoas, pena > 4 anos)", "Diferencio organização e associação criminosa", "Sei o afastamento do lar pelo delegado ou policial (art. 12-C)"],
  questoes: [
    { tipo: "ce", enunciado: "Tortura, tráfico de drogas, terrorismo e crimes hediondos são inafiançáveis e insuscetíveis de graça ou anistia.", certo: true, explicacao: "CF, art. 5º, XLIII." },
    { tipo: "ce", enunciado: "Os crimes hediondos e equiparados são imprescritíveis.", certo: false, explicacao: "Imprescritíveis são o racismo e a ação de grupos armados contra a ordem constitucional." },
    { tipo: "ce", enunciado: "Na Lei de Tortura, a perda do cargo é efeito automático da condenação.", certo: true, explicacao: "Art. 1º, § 5º." },
    { tipo: "ce", enunciado: "O agente que se omite diante de tortura, quando tinha o dever de evitá-la, responde com a mesma pena de quem a pratica.", certo: false, explicacao: "Omissão: detenção de 1 a 4 anos." },
    { tipo: "ce", enunciado: "Organização criminosa exige associação de três ou mais pessoas.", certo: false, explicacao: "Quatro ou mais. Três é a associação criminosa do CP." },
    { tipo: "ce", enunciado: "Na ação controlada, a intervenção policial é retardada para que se concretize no momento mais eficaz à produção de provas.", certo: true, explicacao: "Lei 12.850/2013, art. 8º." },
    { tipo: "ce", enunciado: "Nos municípios que não são sede de comarca e sem delegado disponível, o policial pode afastar imediatamente o agressor do lar em caso de risco atual à vida da mulher.", certo: true, explicacao: "Lei 11.340/2006, art. 12-C, III." },
    { tipo: "ce", enunciado: "Aos crimes de violência doméstica contra a mulher aplica-se a transação penal da Lei 9.099/1995.", certo: false, explicacao: "Art. 41 da Lei Maria da Penha." },
    { tipo: "ce", enunciado: "A violência patrimonial é uma das formas de violência doméstica previstas na Lei Maria da Penha.", certo: true, explicacao: "Art. 7º, IV." },
    { tipo: "mc", enunciado: "Na Lei de Tortura, se o crime é cometido por agente público, a pena:", opcoes: ["é dobrada", "aumenta de 1/6 a 1/3", "aumenta de 2/3", "não se altera", "é substituída por perda do cargo"], correta: 1, explicacao: "Art. 1º, § 4º, I." }
  ]
},

DH1: {
  disciplina: "Direitos Humanos", titulo: "Direitos humanos e uso da força",
  objetivo: "Conhecer a teoria geral dos direitos humanos, os principais documentos internacionais, a incorporação dos tratados no Brasil e as regras de uso da força pelos agentes de segurança.",
  edital: ["Teoria geral dos direitos humanos", "Declaração Universal dos Direitos Humanos; Convenção Americana sobre Direitos Humanos (Pacto de São José)", "Incorporação dos tratados (CF, art. 5º, §§ 2º e 3º)", "Uso da força: Lei 13.060/2014"],
  porque: ["O PRF usa a força em abordagens: os princípios de legalidade, necessidade e proporcionalidade são cobrados com situações práticas."],
  conteudo: [
    { h: "Características" },
    { lista: ["Universalidade: titularidade de todas as pessoas.", "Indivisibilidade e interdependência: direitos civis, políticos, econômicos, sociais e culturais formam um conjunto.", "Inalienabilidade, irrenunciabilidade e imprescritibilidade.", "Historicidade: surgem e se ampliam ao longo da história.", "Vedação do retrocesso: os níveis de proteção alcançados não devem ser reduzidos.", "Gerações ou dimensões: 1ª, liberdades civis e políticas (abstenção do Estado); 2ª, direitos sociais, econômicos e culturais (prestação); 3ª, direitos difusos, como meio ambiente e paz (fraternidade)."] },
    { h: "Documentos" },
    { lista: ["Declaração Universal dos Direitos Humanos (1948): aprovada pela Assembleia Geral da ONU como resolução; não é tratado, mas é referência de interpretação e parte do costume internacional.", "Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica, 1969): promulgada no Brasil pelo Decreto 678/1992. Órgãos: Comissão e Corte Interamericana de Direitos Humanos.", "O Pacto de São José só admite prisão civil por dívida de alimentos. Por isso o STF editou a Súmula Vinculante 25: é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito."] },
    { h: "Hierarquia dos tratados no Brasil" },
    { tabela: { cab: ["Tratado", "Status"], linhas: [
      ["De direitos humanos aprovado em cada Casa do Congresso, em dois turnos, por 3/5 dos votos (CF, art. 5º, § 3º, EC 45/2004)", "Equivalente a emenda constitucional"],
      ["De direitos humanos aprovado pelo rito comum", "Supralegal: abaixo da Constituição e acima das leis (STF, RE 466.343)"],
      ["Demais tratados", "Status de lei ordinária"]] } },
    { nota: "O primeiro tratado aprovado com status de emenda foi a Convenção sobre os Direitos das Pessoas com Deficiência e seu Protocolo Facultativo." },
    { h: "Uso da força" },
    { lista: ["Princípios: legalidade, necessidade, proporcionalidade, moderação e conveniência (Portaria Interministerial 4.226/2010), na linha dos Princípios Básicos da ONU sobre o Uso da Força e de Armas de Fogo (1990).", "Lei 13.060/2014: os órgãos de segurança pública priorizarão instrumentos de menor potencial ofensivo, desde que o seu uso não coloque em risco a integridade física ou psíquica dos policiais.", "Não é legítimo o uso de arma de fogo contra pessoa em fuga que esteja desarmada ou que não represente risco imediato de morte ou lesão aos agentes ou a terceiros (art. 2º, parágrafo único, I).", "Nem contra veículo que desrespeite bloqueio policial em via pública, exceto quando o ato represente risco de morte ou lesão aos agentes ou a terceiros (art. 2º, parágrafo único, II).", "Quem for atingido por instrumento de menor potencial ofensivo deve receber assistência e socorro médico imediato."] },
    { fonte: "CF, art. 5º, §§ 2º e 3º; DUDH (1948); Decreto 678/1992; STF, RE 466.343 e SV 25; Lei 13.060/2014; Portaria Interministerial 4.226/2010." }
  ],
  checklist: ["Sei as características e as gerações dos direitos humanos", "Sei a natureza jurídica da DUDH", "Sei a regra da prisão civil e a SV 25", "Sei os três níveis de hierarquia dos tratados", "Sei as vedações da Lei 13.060/2014", "Sei os princípios do uso da força"],
  questoes: [
    { tipo: "ce", enunciado: "Os tratados de direitos humanos aprovados em cada Casa do Congresso, em dois turnos, por três quintos dos votos, equivalem às emendas constitucionais.", certo: true, explicacao: "CF, art. 5º, § 3º." },
    { tipo: "ce", enunciado: "Tratados de direitos humanos aprovados pelo rito comum têm, segundo o STF, status de lei ordinária.", certo: false, explicacao: "Status supralegal (RE 466.343)." },
    { tipo: "ce", enunciado: "É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.", certo: true, explicacao: "SV 25." },
    { tipo: "ce", enunciado: "A Declaração Universal dos Direitos Humanos foi aprovada como tratado internacional sujeito a ratificação.", certo: false, explicacao: "É resolução da Assembleia Geral da ONU." },
    { tipo: "ce", enunciado: "Os direitos sociais, econômicos e culturais são associados à segunda geração dos direitos humanos.", certo: true, explicacao: "Igualdade, prestações estatais." },
    { tipo: "ce", enunciado: "É legítimo o uso de arma de fogo contra veículo que desrespeite bloqueio policial, independentemente de risco aos agentes ou a terceiros.", certo: false, explicacao: "Lei 13.060/2014: só quando houver risco de morte ou lesão." },
    { tipo: "ce", enunciado: "Não é legítimo o uso de arma de fogo contra pessoa em fuga desarmada que não represente risco imediato de morte ou lesão.", certo: true, explicacao: "Art. 2º, parágrafo único, I." },
    { tipo: "ce", enunciado: "A Lei 13.060/2014 determina que os órgãos de segurança pública priorizem instrumentos de menor potencial ofensivo, desde que não coloquem em risco a integridade dos policiais.", certo: true, explicacao: "Art. 2º." },
    { tipo: "ce", enunciado: "A indivisibilidade significa que os direitos civis e políticos têm prioridade sobre os sociais.", certo: false, explicacao: "Indivisibilidade: os direitos formam um conjunto sem hierarquia." },
    { tipo: "mc", enunciado: "O primeiro tratado internacional aprovado no Brasil com status de emenda constitucional foi:", opcoes: ["o Pacto de São José da Costa Rica", "a Declaração Universal dos Direitos Humanos", "a Convenção sobre os Direitos das Pessoas com Deficiência", "a Convenção contra a Tortura", "o Estatuto de Roma"], correta: 2, explicacao: "Aprovada pelo Decreto Legislativo 186/2008." }
  ]
},

DAD1: {
  disciplina: "Direito Administrativo", titulo: "Princípios e organização administrativa",
  objetivo: "Conhecer os princípios da administração e a estrutura da administração direta e indireta.",
  edital: ["Noções de organização administrativa; administração direta e indireta, centralizada e descentralizada", "Princípios da administração pública"],
  porque: ["É a base do Direito Administrativo, presente em todas as provas da Cebraspe.", "Autarquia, empresa pública e sociedade de economia mista são cobradas pela natureza jurídica e pela forma de criação."],
  conteudo: [
    { h: "Princípios" },
    { lista: ["Expressos na CF, art. 37: legalidade, impessoalidade, moralidade, publicidade e eficiência.", "Na Lei 9.784/1999, art. 2º: legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.", "Supremacia do interesse público sobre o privado e indisponibilidade do interesse público: os dois pilares do regime jurídico-administrativo.", "Autotutela: a Administração anula seus atos ilegais e revoga os inconvenientes (Súmula 473 do STF)."] },
    { h: "Centralização, descentralização e desconcentração" },
    { tabela: { cab: ["Conceito", "O que acontece", "Exemplo"], linhas: [
      ["Desconcentração", "Distribuição interna de competências entre órgãos da mesma pessoa jurídica, com hierarquia", "Criação de superintendências da PRF dentro da estrutura da União"],
      ["Descentralização por outorga (serviços)", "Criação, por lei, de nova pessoa jurídica que recebe a titularidade e a execução do serviço", "Autarquias, fundações públicas, empresas estatais"],
      ["Descentralização por delegação (colaboração)", "Transferência apenas da execução, por contrato ou ato, a particular", "Concessão e permissão de serviço público"]] } },
    { nota: "Órgão público não tem personalidade jurídica: é centro de competência. A PRF é órgão da administração direta da União, integrante da estrutura do Ministério da Justiça e Segurança Pública." },
    { h: "Administração indireta" },
    { tabela: { cab: ["Entidade", "Personalidade", "Criação", "Observações"], linhas: [
      ["Autarquia", "Direito público", "Criada por lei específica", "Serviço típico de Estado; bens públicos; ex.: INSS, DNIT, Detrans"],
      ["Fundação pública", "Direito público ou privado", "Criada por lei (direito público) ou autorizada por lei (direito privado); lei complementar define as áreas", "Patrimônio personalizado para fim social"],
      ["Empresa pública", "Direito privado", "Autorizada por lei específica", "Capital 100% público; qualquer forma societária; ex.: Caixa, Correios"],
      ["Sociedade de economia mista", "Direito privado", "Autorizada por lei específica", "Sociedade anônima, com maioria do capital votante do poder público; ex.: Banco do Brasil, Petrobras"]] } },
    { lista: ["CF, art. 37, XIX: somente por lei específica poderá ser criada autarquia e autorizada a instituição de empresa pública, de sociedade de economia mista e de fundação.", "Controle sobre a indireta é finalístico (tutela ou supervisão ministerial), não hierárquico.", "Lei 13.303/2016: estatuto jurídico das empresas públicas e sociedades de economia mista."] },
    { fonte: "CF, art. 37; Lei 9.784/1999, art. 2º; Decreto-Lei 200/1967; Lei 13.303/2016; STF, Súmula 473." }
  ],
  checklist: ["Sei os princípios expressos na CF e na Lei 9.784", "Diferencio desconcentração e descentralização", "Diferencio outorga e delegação", "Sei natureza jurídica e criação de cada entidade da indireta", "Sei que entre a direta e a indireta não há hierarquia"],
  questoes: [
    { tipo: "ce", enunciado: "A desconcentração implica a criação de nova pessoa jurídica para executar o serviço.", certo: false, explicacao: "Desconcentração é interna, entre órgãos. Nova pessoa jurídica é descentralização." },
    { tipo: "ce", enunciado: "A autarquia é pessoa jurídica de direito público criada por lei específica.", certo: true, explicacao: "CF, art. 37, XIX." },
    { tipo: "ce", enunciado: "A sociedade de economia mista deve adotar a forma de sociedade anônima.", certo: true, explicacao: "Lei 13.303/2016, art. 4º." },
    { tipo: "ce", enunciado: "A empresa pública é criada diretamente por lei, sem necessidade de registro dos atos constitutivos.", certo: false, explicacao: "A lei autoriza; a criação se completa com o registro." },
    { tipo: "ce", enunciado: "Entre a União e suas autarquias existe relação de hierarquia.", certo: false, explicacao: "Há vinculação e controle finalístico." },
    { tipo: "ce", enunciado: "A Polícia Rodoviária Federal é órgão da administração direta da União, desprovido de personalidade jurídica.", certo: true, explicacao: "Órgão do MJSP." },
    { tipo: "ce", enunciado: "Na descentralização por delegação, transfere-se apenas a execução do serviço, permanecendo a titularidade com o poder público.", certo: true, explicacao: "Concessão e permissão." },
    { tipo: "ce", enunciado: "O princípio da motivação está previsto expressamente na Lei 9.784/1999.", certo: true, explicacao: "Art. 2º." },
    { tipo: "ce", enunciado: "A Administração pode anular seus próprios atos quando eivados de vícios que os tornem ilegais.", certo: true, explicacao: "Súmula 473 do STF." },
    { tipo: "mc", enunciado: "O Banco do Brasil é, quanto à natureza jurídica:", opcoes: ["autarquia", "fundação pública", "empresa pública", "sociedade de economia mista", "órgão da administração direta"], correta: 3, explicacao: "Sociedade de economia mista." }
  ]
},

DAD2: {
  disciplina: "Direito Administrativo", titulo: "Atos administrativos e poderes da administração",
  objetivo: "Conhecer elementos, atributos e extinção dos atos administrativos e os poderes administrativos, em especial o poder de polícia.",
  edital: ["Ato administrativo: conceito, requisitos, atributos, classificação, espécies, extinção", "Poderes administrativos: hierárquico, disciplinar, regulamentar e de polícia; uso e abuso do poder"],
  porque: ["A multa de trânsito e a fiscalização são exercício do poder de polícia.", "Anulação x revogação aparece em quase toda prova."],
  conteudo: [
    { h: "Elementos (requisitos)" },
    { tabela: { cab: ["Elemento", "Pergunta", "Vinculado ou discricionário"], linhas: [
      ["Competência", "Quem pode praticar?", "Vinculado"], ["Finalidade", "Para quê? (interesse público)", "Vinculado"], ["Forma", "Como se exterioriza?", "Vinculado"],
      ["Motivo", "Por quê? (pressupostos de fato e de direito)", "Pode ser discricionário"], ["Objeto", "O que o ato determina?", "Pode ser discricionário"]] } },
    { nota: "Motivo e objeto formam o mérito administrativo nos atos discricionários. Teoria dos motivos determinantes: o motivo declarado vincula a validade do ato." },
    { h: "Atributos" },
    { lista: ["Presunção de legitimidade e veracidade: o ato presume-se legal e verdadeiro até prova em contrário (relativa).", "Imperatividade: impõe-se ao particular independentemente de concordância.", "Autoexecutoriedade: executa-se pela própria Administração sem ordem judicial, quando a lei prevê ou em urgência (ex.: remoção de veículo). Multa não tem autoexecutoriedade: a cobrança forçada depende de execução.", "Tipicidade: o ato corresponde a figura prevista em lei."] },
    { h: "Extinção" },
    { tabela: { cab: ["", "Anulação", "Revogação", "Convalidação"], linhas: [
      ["Motivo", "Ilegalidade", "Conveniência e oportunidade", "Vício sanável (competência não exclusiva, forma não essencial)"],
      ["Quem", "Administração ou Judiciário", "Só a Administração que praticou o ato", "Administração"],
      ["Efeitos", "Retroativos (ex tunc)", "Não retroativos (ex nunc)", "Retroativos"],
      ["Limite", "5 anos para atos favoráveis ao destinatário, salvo má-fé (Lei 9.784, art. 54)", "Não alcança atos vinculados nem os que geraram direito adquirido", "Não pode haver lesão ao interesse público nem prejuízo a terceiros"]] } },
    { h: "Poderes administrativos" },
    { lista: ["Vinculado e discricionário: graus de liberdade conferidos pela lei.", "Hierárquico: organizar, dar ordens, fiscalizar, rever, delegar e avocar dentro da mesma pessoa jurídica.", "Disciplinar: apurar infrações e aplicar penalidades a servidores e a particulares com vínculo especial com a Administração.", "Regulamentar: editar decretos e regulamentos para fiel execução da lei (CF, art. 84, IV), sem inovar na ordem jurídica, salvo decreto autônomo (art. 84, VI).", "Abuso de poder: excesso de poder (agente vai além da competência) e desvio de poder ou de finalidade (atua dentro da competência, mas para fim diverso)."] },
    { h: "Poder de polícia" },
    { lista: ["Conceito (CTN, art. 78): atividade que limita ou disciplina direito, interesse ou liberdade, regulando a prática de ato ou abstenção de fato em razão de interesse público.", "Atributos: discricionariedade (em regra), autoexecutoriedade e coercibilidade.", "Ciclo: ordem de polícia (norma), consentimento (licença, autorização), fiscalização e sanção.", "STF, RE 633.782 (Tema 532, 2020): é constitucional delegar as fases de consentimento, fiscalização e sanção a pessoas jurídicas de direito privado da administração indireta, de capital majoritariamente público, que prestem exclusivamente serviço público próprio do Estado em regime não concorrencial. A ordem de polícia não pode ser delegada.", "Polícia administrativa (bens, direitos e atividades; preventiva; vários órgãos) x polícia judiciária (pessoas; apuração de crimes; polícias civis e federal)."] },
    { fonte: "Lei 9.784/1999; CTN, art. 78; CF, art. 84; STF, Súmula 473 e RE 633.782." }
  ],
  checklist: ["Sei os cinco elementos e quais formam o mérito", "Sei os atributos e que a multa não é autoexecutória", "Diferencio anulação, revogação e convalidação", "Sei o prazo decadencial de 5 anos", "Diferencio excesso e desvio de poder", "Sei ciclo, atributos e delegação do poder de polícia"],
  questoes: [
    { tipo: "ce", enunciado: "A revogação do ato administrativo produz efeitos retroativos.", certo: false, explicacao: "Revogação: ex nunc." },
    { tipo: "ce", enunciado: "O Poder Judiciário pode anular ato administrativo ilegal, mas não pode revogar ato de outro Poder por conveniência.", certo: true, explicacao: "Revogação é exclusiva da Administração que praticou o ato." },
    { tipo: "ce", enunciado: "O direito da Administração de anular atos de que decorram efeitos favoráveis aos destinatários decai em 5 anos, salvo comprovada má-fé.", certo: true, explicacao: "Lei 9.784, art. 54." },
    { tipo: "ce", enunciado: "A competência e a finalidade são elementos sempre vinculados do ato administrativo.", certo: true, explicacao: "Também a forma, para a doutrina majoritária." },
    { tipo: "ce", enunciado: "A cobrança forçada de multa de trânsito não paga é exemplo de autoexecutoriedade.", certo: false, explicacao: "Exige execução fiscal." },
    { tipo: "ce", enunciado: "Ocorre desvio de finalidade quando o agente pratica ato dentro de sua competência, mas visando fim diverso do interesse público previsto na lei.", certo: true, explicacao: "Espécie de abuso de poder." },
    { tipo: "ce", enunciado: "A ordem de polícia pode ser delegada a sociedade de economia mista que preste serviço público em regime não concorrencial.", certo: false, explicacao: "Tema 532: a ordem de polícia é indelegável." },
    { tipo: "ce", enunciado: "A fiscalização e a aplicação de sanções de trânsito integram o ciclo do poder de polícia.", certo: true, explicacao: "Fiscalização e sanção." },
    { tipo: "ce", enunciado: "O poder disciplinar alcança particulares sem qualquer vínculo com a Administração.", certo: false, explicacao: "Só servidores e particulares com vínculo especial." },
    { tipo: "mc", enunciado: "O atributo pelo qual o ato administrativo se impõe ao particular independentemente de sua concordância é:", opcoes: ["presunção de legitimidade", "imperatividade", "tipicidade", "autoexecutoriedade", "motivação"], correta: 1, explicacao: "Imperatividade." }
  ]
},

DAD3: {
  disciplina: "Direito Administrativo", titulo: "Agentes públicos, Lei 8.112/1990 e improbidade",
  objetivo: "Conhecer o regime dos servidores federais (provimento, vacância, estabilidade, responsabilidade, processo disciplinar) e a Lei de Improbidade.",
  edital: ["Agentes públicos; Lei 8.112/1990: provimento, vacância, direitos, deveres, proibições, responsabilidades, penalidades, processo administrativo disciplinar", "Lei 8.429/1992 (improbidade administrativa), com a Lei 14.230/2021"],
  porque: ["O PRF é servidor regido pela Lei 8.112. Penalidades e PAD são cobrados com prazos e competências.", "A Lei 14.230/2021 mudou a improbidade a fundo e é tema certo na próxima prova."],
  conteudo: [
    { h: "Provimento e vacância (Lei 8.112)" },
    { lista: ["Formas de provimento (art. 8º): nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução.", "Posse em até 30 dias da publicação do ato de provimento; sem posse, o ato é tornado sem efeito.", "Exercício em até 15 dias da posse; sem exercício, o servidor é exonerado.", "Estabilidade: após 3 anos de efetivo exercício, com avaliação especial de desempenho (CF, art. 41). O estágio probatório acompanha esse prazo segundo o STF e o STJ.", "O servidor estável só perde o cargo por sentença judicial transitada em julgado, processo administrativo com ampla defesa ou avaliação periódica de desempenho, na forma de lei complementar (e na hipótese do art. 169 da CF).", "Vacância (art. 33): exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento."] },
    { h: "Responsabilidades" },
    { p: "O servidor responde civil, penal e administrativamente, e as sanções são independentes entre si (art. 125). A responsabilidade administrativa é afastada no caso de absolvição criminal que negue a existência do fato ou sua autoria (art. 126)." },
    { h: "Penalidades (art. 127) e prescrição (art. 142)" },
    { tabela: { cab: ["Penalidade", "Hipóteses típicas", "Prescrição da ação disciplinar"], linhas: [
      ["Advertência", "Violação de proibições menos graves e inobservância de dever funcional", "180 dias"],
      ["Suspensão (até 90 dias)", "Reincidência em faltas punidas com advertência e violação das demais proibições que não tipifiquem demissão. Pode ser convertida em multa de 50% por dia de vencimento, ficando o servidor obrigado a permanecer em serviço", "2 anos"],
      ["Demissão", "Crime contra a administração, abandono de cargo (mais de 30 dias consecutivos), inassiduidade habitual (60 dias interpolados em 12 meses), improbidade, corrupção, entre outras (art. 132)", "5 anos"],
      ["Cassação de aposentadoria ou disponibilidade", "Falta punível com demissão praticada na atividade", "5 anos"],
      ["Destituição de cargo em comissão", "Infração sujeita a suspensão ou demissão por quem não é titular de cargo efetivo", "5 anos"]] } },
    { h: "Sindicância e PAD" },
    { lista: ["Sindicância: prazo de até 30 dias, prorrogável por igual período. Pode resultar em arquivamento, advertência ou suspensão de até 30 dias, ou instauração de PAD.", "PAD obrigatório quando a infração ensejar suspensão por mais de 30 dias, demissão, cassação ou destituição.", "Comissão de três servidores estáveis; o presidente deve ocupar cargo efetivo superior ou de mesmo nível, ou ter escolaridade igual ou superior à do indiciado.", "Prazo do PAD: até 60 dias, prorrogável por igual prazo.", "Fases: instauração (portaria), inquérito administrativo (instrução, defesa e relatório) e julgamento (20 dias após o recebimento do processo).", "Afastamento preventivo: até 60 dias, prorrogável por igual prazo, sem prejuízo da remuneração."] },
    { h: "Improbidade (Lei 8.429/1992, com a Lei 14.230/2021)" },
    { lista: ["Exige dolo em todas as modalidades: não existe mais improbidade culposa.", "Art. 9º: enriquecimento ilícito. Art. 10: lesão ao erário. Art. 11: atentado aos princípios, agora com rol taxativo de condutas.", "Sanções (art. 12): perda dos bens acrescidos ilicitamente, perda da função pública, suspensão dos direitos políticos, multa civil e proibição de contratar com o poder público, graduadas por modalidade.", "A ação é proposta pelo Ministério Público (o STF, nas ADIs 7.042 e 7.043, restabeleceu também a legitimidade da pessoa jurídica interessada).", "Prescrição: 8 anos, contados do fato ou, na infração permanente, do dia em que cessou a permanência.", "CF, art. 37, § 4º: os atos de improbidade importam suspensão dos direitos políticos, perda da função pública, indisponibilidade dos bens e ressarcimento ao erário, sem prejuízo da ação penal."] },
    { fonte: "Lei 8.112/1990; CF, art. 37, § 4º, e art. 41; Lei 8.429/1992 com a Lei 14.230/2021; STF, ADIs 7.042 e 7.043." }
  ],
  checklist: ["Sei as formas de provimento e os prazos de posse e exercício", "Sei estabilidade e hipóteses de perda do cargo", "Sei a independência das instâncias e a exceção do art. 126", "Sei penalidades e prazos de prescrição", "Sei prazos de sindicância, PAD e afastamento preventivo", "Sei as mudanças da Lei 14.230/2021 (dolo, rol taxativo, prescrição de 8 anos)"],
  questoes: [
    { tipo: "ce", enunciado: "A posse ocorrerá no prazo de 30 dias contados da publicação do ato de provimento.", certo: true, explicacao: "Lei 8.112, art. 13, § 1º." },
    { tipo: "ce", enunciado: "O servidor empossado que não entrar em exercício no prazo de 15 dias terá o ato de provimento tornado sem efeito.", certo: false, explicacao: "Será exonerado. 'Sem efeito' é para quem não toma posse." },
    { tipo: "ce", enunciado: "A suspensão pode ser convertida em multa de 50% por dia de vencimento, ficando o servidor obrigado a permanecer em serviço.", certo: true, explicacao: "Art. 130, § 2º." },
    { tipo: "ce", enunciado: "A ação disciplinar prescreve em 2 anos quanto às infrações puníveis com advertência.", certo: false, explicacao: "Advertência: 180 dias. Suspensão: 2 anos." },
    { tipo: "ce", enunciado: "A absolvição criminal por falta de provas afasta automaticamente a responsabilidade administrativa do servidor.", certo: false, explicacao: "Só a absolvição que nega o fato ou a autoria (art. 126)." },
    { tipo: "ce", enunciado: "Da sindicância pode resultar aplicação de suspensão de até 30 dias.", certo: true, explicacao: "Art. 145, II." },
    { tipo: "ce", enunciado: "O prazo para conclusão do PAD é de 60 dias, prorrogável por igual prazo.", certo: true, explicacao: "Art. 152." },
    { tipo: "ce", enunciado: "Após a Lei 14.230/2021, admite-se ato de improbidade culposo que cause lesão ao erário.", certo: false, explicacao: "Todas as modalidades exigem dolo." },
    { tipo: "ce", enunciado: "A inassiduidade habitual, configurada pela falta ao serviço sem causa justificada por 60 dias interpoladamente durante 12 meses, é punida com demissão.", certo: true, explicacao: "Arts. 132, III, e 139." },
    { tipo: "mc", enunciado: "Pela Lei 8.429/1992, com a Lei 14.230/2021, a ação de improbidade prescreve em:", opcoes: ["2 anos", "5 anos", "8 anos", "10 anos", "é imprescritível"], correta: 2, explicacao: "Art. 23." }
  ]
},

DAD4: {
  disciplina: "Direito Administrativo", titulo: "Responsabilidade civil do Estado, controle e licitações",
  objetivo: "Aplicar a responsabilidade objetiva do Estado, conhecer as formas de controle e os pontos centrais da Lei 14.133/2021.",
  edital: ["Responsabilidade civil do Estado", "Controle e responsabilização da administração", "Licitações e contratos (Lei 14.133/2021)"],
  porque: ["Danos causados por viaturas e agentes em serviço são exemplo clássico de responsabilidade objetiva.", "A Lei 14.133 substituiu a 8.666 e é cobrada pelas modalidades novas."],
  conteudo: [
    { h: "Responsabilidade civil (CF, art. 37, § 6º)" },
    { lista: ["As pessoas jurídicas de direito público e as de direito privado prestadoras de serviço público respondem pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.", "Teoria do risco administrativo: responsabilidade objetiva, que dispensa prova de culpa, bastando conduta, dano e nexo causal.", "Excludentes: culpa exclusiva da vítima, caso fortuito ou força maior e fato exclusivo de terceiro. Culpa concorrente atenua a indenização.", "STF (Tema 940): a vítima deve propor a ação contra o Estado ou a prestadora, não diretamente contra o agente (dupla garantia).", "Omissão: a jurisprudência aplica a responsabilidade objetiva quando o Estado tinha o dever específico de agir (ex.: morte de preso sob custódia, STF RE 841.526); na omissão genérica, discute-se a falta do serviço (culpa anônima)."] },
    { h: "Controle da administração" },
    { tabela: { cab: ["Tipo", "Quem", "Exemplos"], linhas: [
      ["Interno", "A própria Administração", "Autotutela, controladorias, corregedorias, recursos administrativos"],
      ["Externo legislativo", "Congresso, com auxílio do TCU", "Julgamento de contas, fiscalização contábil, financeira, orçamentária, operacional e patrimonial (CF, arts. 70 e 71)"],
      ["Judicial", "Poder Judiciário, provocado", "Controle de legalidade, não de mérito; mandado de segurança, ação popular, ação civil pública"],
      ["Social", "Cidadão", "Ouvidorias, LAI, denúncia ao TCU (CF, art. 74, § 2º)"]] } },
    { h: "Licitações (Lei 14.133/2021)" },
    { lista: ["Modalidades (art. 28): pregão, concorrência, concurso, leilão e diálogo competitivo. Tomada de preços e convite deixaram de existir.", "Pregão: bens e serviços comuns, critério de menor preço ou maior desconto. Diálogo competitivo: inovação técnica ou soluções que a Administração não consegue definir sozinha.", "Critérios de julgamento (art. 33): menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance (leilão) e maior retorno econômico.", "Fases (art. 17): preparatória, divulgação do edital, apresentação de propostas e lances, julgamento, habilitação, recursal e homologação. Em regra o julgamento vem antes da habilitação.", "Contratação direta: dispensa (a licitação é possível, mas a lei a dispensa, como nos valores baixos atualizados anualmente por decreto, ou em emergência) e inexigibilidade (competição inviável: fornecedor exclusivo, artista consagrado, serviço técnico de notória especialização, credenciamento, imóvel com características que condicionam a escolha)."] },
    { fonte: "CF, arts. 37, § 6º, 70 a 74; Lei 14.133/2021; STF, RE 1.027.633 (Tema 940) e RE 841.526." }
  ],
  checklist: ["Sei a teoria do risco administrativo e as excludentes", "Sei a tese da dupla garantia (Tema 940)", "Diferencio omissão específica e genérica", "Diferencio controle interno, externo, judicial e social", "Sei as cinco modalidades da Lei 14.133", "Diferencio dispensa e inexigibilidade"],
  questoes: [
    { tipo: "ce", enunciado: "A responsabilidade civil do Estado por atos comissivos de seus agentes é objetiva, fundada na teoria do risco administrativo.", certo: true, explicacao: "CF, art. 37, § 6º." },
    { tipo: "ce", enunciado: "A culpa exclusiva da vítima exclui a responsabilidade do Estado.", certo: true, explicacao: "Rompe o nexo causal." },
    { tipo: "ce", enunciado: "Segundo o STF, a vítima pode escolher propor a ação de indenização diretamente contra o servidor causador do dano.", certo: false, explicacao: "Tema 940: a ação é contra o Estado; o agente responde em regresso." },
    { tipo: "ce", enunciado: "O direito de regresso contra o agente depende da comprovação de dolo ou culpa.", certo: true, explicacao: "Responsabilidade subjetiva do agente." },
    { tipo: "ce", enunciado: "A Lei 14.133/2021 manteve a tomada de preços e o convite como modalidades de licitação.", certo: false, explicacao: "Foram extintas." },
    { tipo: "ce", enunciado: "O diálogo competitivo é modalidade prevista na Lei 14.133/2021.", certo: true, explicacao: "Art. 28, V." },
    { tipo: "ce", enunciado: "A inexigibilidade ocorre quando há inviabilidade de competição.", certo: true, explicacao: "Art. 74." },
    { tipo: "ce", enunciado: "O controle judicial dos atos administrativos alcança a conveniência e a oportunidade do ato discricionário.", certo: false, explicacao: "Controla a legalidade, não o mérito." },
    { tipo: "ce", enunciado: "As pessoas jurídicas de direito privado prestadoras de serviço público também respondem objetivamente pelos danos causados por seus agentes a terceiros.", certo: true, explicacao: "CF, art. 37, § 6º." },
    { tipo: "mc", enunciado: "Na Lei 14.133/2021, a modalidade para aquisição de bens e serviços comuns é:", opcoes: ["concurso", "leilão", "pregão", "convite", "tomada de preços"], correta: 2, explicacao: "Pregão." }
  ]
},

DCO1: {
  disciplina: "Direito Constitucional", titulo: "Direitos e garantias fundamentais",
  objetivo: "Dominar os incisos do art. 5º mais cobrados, os remédios constitucionais e os direitos sociais e de nacionalidade.",
  edital: ["Direitos e garantias fundamentais: direitos e deveres individuais e coletivos; direitos sociais; nacionalidade; direitos políticos", "Remédios constitucionais"],
  porque: ["O art. 5º regula diretamente a abordagem policial: domicílio, prisão, identificação, reunião.", "Remédios constitucionais são cobrados pelo cabimento."],
  conteudo: [
    { h: "Incisos do art. 5º mais cobrados" },
    { lista: ["II: ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei.", "III: ninguém será submetido a tortura nem a tratamento desumano ou degradante.", "IV: é livre a manifestação do pensamento, sendo vedado o anonimato.", "XI: a casa é asilo inviolável, salvo em flagrante delito, desastre, para prestar socorro ou, durante o dia, por determinação judicial.", "XII: é inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e telefônicas, salvo, no último caso, por ordem judicial, para investigação criminal ou instrução processual penal.", "XV: é livre a locomoção no território nacional em tempo de paz.", "XVI: reunião pacífica, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustre outra reunião anteriormente convocada para o mesmo local, exigido prévio aviso à autoridade.", "XVII a XIX: plena a liberdade de associação para fins lícitos, vedada a de caráter paramilitar; dissolução compulsória só por decisão judicial transitada em julgado; suspensão das atividades por decisão judicial.", "XLII: a prática do racismo é crime inafiançável e imprescritível, sujeito a reclusão.", "XLIV: constitui crime inafiançável e imprescritível a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.", "LVIII: o civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses previstas em lei.", "LXI: ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo transgressão militar ou crime propriamente militar.", "LXIII: o preso será informado de seus direitos, entre os quais o de permanecer calado.", "LXIV: o preso tem direito à identificação dos responsáveis por sua prisão ou por seu interrogatório policial."] },
    { h: "Remédios constitucionais" },
    { tabela: { cab: ["Remédio", "Cabimento", "Observações"], linhas: [
      ["Habeas corpus", "Violência ou coação na liberdade de locomoção, por ilegalidade ou abuso de poder", "Qualquer pessoa impetra, sem advogado; gratuito; não cabe em punições disciplinares militares quanto ao mérito"],
      ["Habeas data", "Conhecer ou retificar informações pessoais em bancos de dados de entidades governamentais ou de caráter público", "Gratuito; exige prévia recusa administrativa"],
      ["Mandado de segurança", "Direito líquido e certo não amparado por HC ou HD, contra ilegalidade ou abuso de autoridade", "Prazo de 120 dias (Lei 12.016/2009); coletivo por partido, sindicato, entidade de classe ou associação"],
      ["Mandado de injunção", "Falta de norma regulamentadora que torne inviável o exercício de direitos e liberdades constitucionais", "Lei 13.300/2016"],
      ["Ação popular", "Anular ato lesivo ao patrimônio público, à moralidade, ao meio ambiente e ao patrimônio histórico e cultural", "Só o cidadão; isento de custas e sucumbência, salvo má-fé"]] } },
    { h: "Aplicação e outros direitos" },
    { lista: ["Art. 5º, § 1º: as normas definidoras dos direitos e garantias fundamentais têm aplicação imediata.", "Direitos sociais (art. 6º): educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados.", "Nacionalidade: são brasileiros natos, entre outros, os nascidos no Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país. Cargos privativos de brasileiro nato incluem Presidente e Vice, presidentes da Câmara e do Senado, ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro de Estado da Defesa (art. 12, § 3º).", "Direitos políticos: alistamento e voto obrigatórios para maiores de 18 anos e facultativos para analfabetos, maiores de 70 e entre 16 e 18 anos. A cassação de direitos políticos é vedada; perda ou suspensão só nas hipóteses do art. 15."] },
    { fonte: "Constituição Federal, arts. 5º a 16; Leis 12.016/2009, 13.300/2016 e 4.717/1965." }
  ],
  checklist: ["Sei as exceções à inviolabilidade de domicílio", "Sei a regra da interceptação telefônica", "Sei os requisitos do direito de reunião", "Sei o que é imprescritível e o que é só inafiançável", "Sei o cabimento de cada remédio constitucional", "Sei os cargos privativos de brasileiro nato"],
  questoes: [
    { tipo: "ce", enunciado: "O direito de reunião depende de autorização prévia da autoridade competente.", certo: false, explicacao: "Independe de autorização; exige prévio aviso." },
    { tipo: "ce", enunciado: "A interceptação de comunicações telefônicas pode ser autorizada por ordem judicial para fins de investigação criminal ou instrução processual penal.", certo: true, explicacao: "Art. 5º, XII." },
    { tipo: "ce", enunciado: "A casa pode ser invadida durante a noite, sem consentimento do morador, para cumprir determinação judicial.", certo: false, explicacao: "Ordem judicial: só durante o dia." },
    { tipo: "ce", enunciado: "A prática do racismo constitui crime inafiançável e imprescritível.", certo: true, explicacao: "Art. 5º, XLII." },
    { tipo: "ce", enunciado: "O habeas corpus pode ser impetrado por qualquer pessoa, independentemente de advogado.", certo: true, explicacao: "Legitimidade universal." },
    { tipo: "ce", enunciado: "A associação só pode ser compulsoriamente dissolvida por decisão judicial transitada em julgado.", certo: true, explicacao: "Art. 5º, XIX." },
    { tipo: "ce", enunciado: "O civilmente identificado não será submetido a identificação criminal em nenhuma hipótese.", certo: false, explicacao: "Salvo nas hipóteses previstas em lei (Lei 12.037/2009)." },
    { tipo: "ce", enunciado: "Qualquer pessoa jurídica pode propor ação popular.", certo: false, explicacao: "Só o cidadão (Súmula 365 do STF)." },
    { tipo: "ce", enunciado: "O preso tem direito à identificação dos responsáveis por sua prisão ou por seu interrogatório policial.", certo: true, explicacao: "Art. 5º, LXIV." },
    { tipo: "mc", enunciado: "Para obter certidão negada por órgão público sobre situação funcional de terceiro, o remédio adequado, havendo direito líquido e certo, é:", opcoes: ["habeas corpus", "habeas data", "mandado de segurança", "mandado de injunção", "ação popular"], correta: 2, explicacao: "Habeas data só protege informações relativas à pessoa do impetrante." }
  ]
},

DCO2: {
  disciplina: "Direito Constitucional", titulo: "Administração pública e segurança pública na Constituição",
  objetivo: "Conhecer as regras constitucionais da administração pública (art. 37 a 41), a organização do Estado em competências e o art. 144.",
  edital: ["Organização político-administrativa do Estado; competências da União", "Administração pública: disposições gerais e servidores públicos", "Segurança pública: art. 144"],
  porque: ["O art. 144 define a própria PRF.", "Concurso, acumulação de cargos e estabilidade são cobrados com frequência."],
  conteudo: [
    { h: "Organização do Estado" },
    { lista: ["A República Federativa é formada pela união indissolúvel de estados, municípios e DF (art. 1º). União, estados, DF e municípios são autônomos (art. 18). Territórios integram a União.", "Compete privativamente à União legislar sobre trânsito e transporte (art. 22, XI).", "É competência comum de União, estados, DF e municípios estabelecer e implantar política de educação para a segurança do trânsito (art. 23, XII).", "Os bens da União incluem as terras devolutas indispensáveis à defesa de fronteiras, os lagos e rios em terrenos de seu domínio ou que banhem mais de um estado, os recursos minerais e os potenciais de energia hidráulica (art. 20)."] },
    { h: "Administração pública (art. 37)" },
    { lista: ["Cargos acessíveis a brasileiros que preencham os requisitos legais e a estrangeiros na forma da lei.", "Investidura em cargo ou emprego efetivo depende de concurso público de provas ou de provas e títulos; cargo em comissão é de livre nomeação e exoneração.", "Validade do concurso: até 2 anos, prorrogável uma vez por igual período. Durante o prazo improrrogável do edital, o aprovado tem prioridade sobre novos concursados.", "Funções de confiança: exclusivamente por servidores efetivos. Cargos em comissão: percentuais mínimos para servidores de carreira; destinam-se a direção, chefia e assessoramento.", "Acumulação remunerada vedada, exceto, havendo compatibilidade de horários: dois cargos de professor; um de professor com outro técnico ou científico; dois de profissionais de saúde com profissão regulamentada.", "Teto remuneratório: subsídio de ministro do STF (inciso XI)."] },
    { h: "Servidores (arts. 39 a 41)" },
    { lista: ["Estabilidade: após 3 anos de efetivo exercício, para nomeados para cargo de provimento efetivo em virtude de concurso, com avaliação especial de desempenho por comissão (art. 41).", "Perda do cargo do estável: sentença judicial transitada em julgado; processo administrativo com ampla defesa; avaliação periódica de desempenho, na forma de lei complementar.", "Extinto o cargo ou declarada sua desnecessidade, o estável fica em disponibilidade com remuneração proporcional ao tempo de serviço, até seu adequado aproveitamento."] },
    { h: "Segurança pública (art. 144)" },
    { lista: ["A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio.", "Órgãos: Polícia Federal, Polícia Rodoviária Federal, Polícia Ferroviária Federal, polícias civis, polícias militares e corpos de bombeiros militares, e polícias penais federal, estaduais e distrital (incluídas pela EC 104/2019).", "§ 2º: a PRF, órgão permanente, organizado e mantido pela União e estruturado em carreira, destina-se, na forma da lei, ao patrulhamento ostensivo das rodovias federais.", "§ 8º: os municípios podem constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações.", "§ 10 (EC 82/2014): a segurança viária, exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio nas vias públicas, compreende a educação, a engenharia e a fiscalização de trânsito, além de outras atividades previstas em lei."] },
    { fonte: "Constituição Federal, arts. 1º, 18, 20, 22, 23, 37 a 41 e 144." }
  ],
  checklist: ["Sei que trânsito e transporte são competência legislativa privativa da União", "Sei validade e prorrogação do concurso", "Sei as hipóteses de acumulação de cargos", "Sei estabilidade e perda do cargo", "Sei os órgãos do art. 144 e o texto do § 2º", "Sei o conteúdo da segurança viária (§ 10)"],
  questoes: [
    { tipo: "ce", enunciado: "Compete privativamente à União legislar sobre trânsito e transporte.", certo: true, explicacao: "Art. 22, XI." },
    { tipo: "ce", enunciado: "A PRF destina-se, na forma da lei, ao patrulhamento ostensivo das rodovias federais.", certo: true, explicacao: "Art. 144, § 2º." },
    { tipo: "ce", enunciado: "O prazo de validade do concurso público é de até 2 anos, prorrogável uma única vez por igual período.", certo: true, explicacao: "Art. 37, III." },
    { tipo: "ce", enunciado: "As polícias penais integram o rol de órgãos de segurança pública do art. 144.", certo: true, explicacao: "EC 104/2019." },
    { tipo: "ce", enunciado: "As guardas municipais estão entre os órgãos listados nos incisos do caput do art. 144.", certo: false, explicacao: "Estão no § 8º, não nos incisos do caput." },
    { tipo: "ce", enunciado: "É permitida a acumulação remunerada de dois cargos de policial, havendo compatibilidade de horários.", certo: false, explicacao: "Não está entre as exceções do art. 37, XVI." },
    { tipo: "ce", enunciado: "As funções de confiança são exercidas exclusivamente por servidores ocupantes de cargo efetivo.", certo: true, explicacao: "Art. 37, V." },
    { tipo: "ce", enunciado: "A segurança viária compreende a educação, a engenharia e a fiscalização de trânsito.", certo: true, explicacao: "Art. 144, § 10." },
    { tipo: "ce", enunciado: "O servidor estável adquire estabilidade após 2 anos de efetivo exercício.", certo: false, explicacao: "Três anos (art. 41)." },
    { tipo: "mc", enunciado: "Estabelecer e implantar política de educação para a segurança do trânsito é competência:", opcoes: ["privativa da União", "exclusiva dos estados", "comum de União, estados, DF e municípios", "exclusiva dos municípios", "concorrente apenas entre União e estados"], correta: 2, explicacao: "Art. 23, XII." }
  ]
}
});
