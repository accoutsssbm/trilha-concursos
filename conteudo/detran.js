/* Detran-PA: legislação estadual, resoluções do cargo e mobilidade urbana (edital 2018) */
window.MODULOS = Object.assign(window.MODULOS || {}, {
LPA1: {
  disciplina: "Legislação aplicada ao DETRAN-PA", titulo: "Lei Estadual 7.594/2011: estrutura e carreiras do Detran-PA",
  objetivo: "Conhecer a natureza jurídica, a estrutura, os órgãos colegiados e as regras de carreira do Detran-PA previstas na Lei 7.594/2011 e alterações.",
  edital: ["Lei Estadual 7.594/2011 e alterações (estrutura do DETRAN-PA e plano de cargos)"],
  porque: ["São 4 questões de Legislação para as duas leis estaduais. A Fadesp cobra letra de lei: natureza, órgãos, requisitos e números."],
  conteudo: [
    { alerta: "Este módulo resume os pontos da Lei 7.594/2011 conferidos no texto consolidado. Valores de vencimento e gratificação mudam por leis posteriores: confira a versão vigente no site da Alepa ou do Detran-PA antes da prova." },
    { h: "Natureza e vinculação" },
    { p: "O Detran-PA é autarquia estadual, vinculada à Secretaria de Estado de Segurança Pública e Defesa Social (Segup), com funções de órgão executivo de trânsito e rodoviário no âmbito do estado, nos termos do CTB." },
    { h: "Estrutura" },
    { lista: ["A estrutura organizacional (art. 3º) inclui órgãos de direção superior, órgãos colegiados, órgãos de execução e as Juntas Administrativas de Recursos de Infrações (JARI), que julgam os recursos contra penalidades.", "Conselho de Administração (Conadm): 9 membros, com mandato de 2 anos.", "Circunscrições Regionais de Trânsito (Ciretrans): unidades regionais do órgão no interior, classificadas em tipo A e tipo B conforme porte e atribuições."] },
    { h: "Agente de Fiscalização de Trânsito" },
    { lista: ["O art. 36 transformou a denominação do antigo cargo de Agente de Trânsito em Agente de Fiscalização de Trânsito.", "Ingresso por concurso público em duas fases: provas (e demais etapas do edital) e curso de formação, com carga mínima de 300 horas-aula.", "Requisito específico: Carteira Nacional de Habilitação nas categorias A e B, com pelo menos 2 anos de habilitação.", "Art. 21-A (incluído pela Lei 9.855/2023): prevê carteira de identidade funcional para o agente."] },
    { h: "Remuneração (valores da redação conferida)" },
    { tabela: { cab: ["Item", "Valor"], linhas: [["Vencimento base de nível médio", "R$ 1.023,75"], ["Gratificação de Trânsito, nível fundamental", "R$ 500,00"], ["Gratificação de Trânsito, nível médio", "R$ 700,00"], ["Gratificação de Trânsito, nível superior", "R$ 942,56"]] } },
    { dica: "Em prova de letra de lei, a Fadesp troca números (9 por 7 membros, 2 por 3 anos) e órgãos (Segup por Seplad). Faça cartões com esses números." },
    { fonte: "Lei Estadual 7.594/2011 (Pará), com alterações, inclusive a Lei 9.855/2023." }
  ],
  checklist: ["Sei a natureza jurídica e a vinculação do Detran-PA", "Sei que a JARI integra a estrutura", "Sei a composição e o mandato do Conadm", "Sei o que são as Ciretrans A e B", "Sei requisitos e formação do Agente de Fiscalização", "Sei a mudança de nome do cargo (art. 36)"],
  questoes: [
    { tipo: "mc", enunciado: "O Detran-PA tem natureza jurídica de:", opcoes: ["órgão da administração direta da Segup", "autarquia estadual vinculada à Segup", "empresa pública estadual", "fundação pública", "sociedade de economia mista"], correta: 1, explicacao: "Autarquia vinculada à Segup." },
    { tipo: "mc", enunciado: "Pela Lei 7.594/2011, o Conselho de Administração do Detran-PA é composto por:", opcoes: ["5 membros com mandato de 1 ano", "7 membros com mandato de 2 anos", "9 membros com mandato de 2 anos", "9 membros com mandato de 4 anos", "11 membros com mandato de 3 anos"], correta: 2, explicacao: "9 membros, 2 anos." },
    { tipo: "mc", enunciado: "Integram a estrutura do Detran-PA as Juntas Administrativas de Recursos de Infrações, que:", opcoes: ["aplicam multas", "julgam recursos contra penalidades", "realizam exames de direção", "emitem CNH", "registram veículos"], correta: 1, explicacao: "Papel da JARI (CTB, art. 17)." },
    { tipo: "mc", enunciado: "As unidades regionais do Detran-PA no interior do estado são as:", opcoes: ["JARIs", "Ciretrans", "Ceatrans", "Delegacias de trânsito", "Superintendências"], correta: 1, explicacao: "Circunscrições Regionais de Trânsito." },
    { tipo: "mc", enunciado: "O curso de formação do Agente de Fiscalização de Trânsito tem carga horária mínima de:", opcoes: ["120 horas-aula", "180 horas-aula", "240 horas-aula", "300 horas-aula", "400 horas-aula"], correta: 3, explicacao: "Mínimo de 300 h/a." },
    { tipo: "mc", enunciado: "Para o cargo de Agente de Fiscalização de Trânsito, exige-se CNH:", opcoes: ["categoria B, com 1 ano", "categoria A, sem tempo mínimo", "categorias A e B, com pelo menos 2 anos", "categoria D", "categorias A, B e C"], correta: 2, explicacao: "Requisito da lei." },
    { tipo: "mc", enunciado: "O art. 36 da Lei 7.594/2011 alterou a denominação do cargo de:", opcoes: ["Agente de Educação para Agente de Fiscalização", "Agente de Trânsito para Agente de Fiscalização de Trânsito", "Vistoriador para Agente de Trânsito", "Examinador para Agente de Educação", "Agente Administrativo para Técnico"], correta: 1, explicacao: "Texto do art. 36." },
    { tipo: "mc", enunciado: "A carteira de identidade funcional do Agente de Fiscalização foi prevista no art. 21-A, incluído pela:", opcoes: ["Lei 5.810/1994", "Lei 9.855/2023", "Lei 9.503/1997", "Lei 12.587/2012", "Lei 13.614/2018"], correta: 1, explicacao: "Lei estadual 9.855/2023." },
    { tipo: "mc", enunciado: "Na redação conferida da lei, a Gratificação de Trânsito para cargos de nível médio é de:", opcoes: ["R$ 500,00", "R$ 700,00", "R$ 942,56", "R$ 1.023,75", "R$ 1.200,00"], correta: 1, explicacao: "Médio: R$ 700. Superior: R$ 942,56. Fundamental: R$ 500." },
    { tipo: "mc", enunciado: "O ingresso no cargo de Agente de Fiscalização de Trânsito ocorre por concurso:", opcoes: ["de fase única", "em duas fases, a segunda sendo o curso de formação", "interno, por promoção", "de títulos apenas", "por indicação da Segup"], correta: 1, explicacao: "Provas e curso de formação." }
  ]
},

LPA2: {
  disciplina: "Legislação aplicada ao DETRAN-PA", titulo: "Lei Estadual 5.810/1994: Regime Jurídico Único dos servidores do Pará",
  objetivo: "Conhecer provimento, posse, estágio probatório, direitos, deveres, proibições e penalidades do RJU paraense.",
  edital: ["Lei Estadual 5.810/1994 (Regime Jurídico Único dos Servidores Públicos Civis do Estado do Pará)"],
  porque: ["É a outra metade de Legislação aplicada. Tem diferenças importantes em relação à Lei 8.112 federal: não confunda."],
  conteudo: [
    { h: "Provimento e concurso" },
    { lista: ["O art. 5º lista as formas de provimento dos cargos públicos.", "Validade do concurso: até 2 anos, prorrogável uma vez por igual período (art. 14).", "Reserva de até 20% das vagas para pessoas com deficiência (art. 15).", "Posse: 30 dias da publicação do ato de provimento, prorrogáveis por mais 15 (art. 22).", "Exercício: 30 dias da posse, prorrogáveis por mais 15 (art. 25)."] },
    { alerta: "Diferença para a Lei 8.112 federal: na 8.112, a posse é em 30 dias e o exercício em 15. No RJU do Pará, exercício também é em 30 dias, prorrogáveis por 15." },
    { h: "Estágio probatório (art. 32)" },
    { p: "Dura 3 anos. São avaliados os fatores assiduidade, disciplina, iniciativa, produtividade e responsabilidade." },
    { h: "Jornada, férias, licenças e vantagens" },
    { lista: ["Jornada de 6 horas diárias (art. 63), ressalvadas as previsões específicas.", "Férias de 30 dias por ano, com adicional de 1/3 da remuneração (arts. 74 e 76).", "Licença-maternidade de 180 dias e licença-paternidade de 20 dias.", "Licença-prêmio de 60 dias a cada triênio de efetivo exercício.", "Licença para tratar de interesses particulares por até 2 anos.", "Adicional por tempo de serviço: 5% a cada triênio, até o limite de 60% (art. 131).", "Serviço extraordinário com acréscimo de 50%; adicional noturno de 25%."] },
    { h: "Direito de petição" },
    { p: "A Administração tem 30 dias para decidir o requerimento; o prazo para recorrer também é de 30 dias. Prescrição: 5 anos para atos de demissão e para os que afetem interesse patrimonial e créditos resultantes das relações de trabalho; 120 dias nos demais casos." },
    { h: "Deveres, proibições e penalidades" },
    { lista: ["Deveres no art. 177 e proibições no art. 178.", "Penalidades (art. 183): repreensão, suspensão, demissão, destituição de cargo em comissão e cassação de aposentadoria ou disponibilidade. Não há 'advertência': no Pará, a pena mais leve chama-se repreensão.", "Suspensão: até 90 dias; pode ser convertida em multa de 50% por dia de remuneração, com o servidor permanecendo em serviço (art. 189).", "Demissão por inassiduidade habitual: 60 faltas intercaladas, sem justa causa, em 12 meses (art. 190, III). Abandono de cargo: ausência por 30 dias consecutivos (art. 178, IV).", "Competência formal: repreensão e suspensão são aplicadas por portaria; as demais penalidades, por decreto."] },
    { tabela: { cab: ["Ponto", "Lei 8.112 (federal)", "Lei 5.810 (Pará)"], linhas: [
      ["Pena mais leve", "Advertência", "Repreensão"], ["Exercício após a posse", "15 dias", "30 dias + 15"], ["Inassiduidade", "60 dias interpolados em 12 meses", "60 faltas intercaladas em 12 meses"], ["Jornada", "Até 40 horas semanais", "6 horas diárias"]] } },
    { fonte: "Lei Estadual 5.810/1994 (Pará), texto consolidado; Lei 8.112/1990 para comparação." }
  ],
  checklist: ["Sei os prazos de posse e exercício do RJU paraense", "Sei validade do concurso e reserva para PcD", "Sei duração e fatores do estágio probatório", "Sei férias, licenças e adicional por triênio", "Sei as penalidades e que a mais leve é repreensão", "Sei suspensão, conversão em multa, inassiduidade e abandono"],
  questoes: [
    { tipo: "mc", enunciado: "Pela Lei 5.810/1994, a penalidade disciplinar mais branda é a:", opcoes: ["advertência", "repreensão", "suspensão", "multa", "censura"], correta: 1, explicacao: "Art. 183." },
    { tipo: "mc", enunciado: "O prazo para o servidor entrar em exercício, contado da posse, é de:", opcoes: ["15 dias", "15 dias, prorrogáveis por 15", "30 dias, prorrogáveis por 15", "45 dias", "60 dias"], correta: 2, explicacao: "Art. 25." },
    { tipo: "mc", enunciado: "O estágio probatório no RJU paraense dura:", opcoes: ["1 ano", "2 anos", "3 anos", "4 anos", "5 anos"], correta: 2, explicacao: "Art. 32." },
    { tipo: "mc", enunciado: "Não é fator avaliado no estágio probatório pela Lei 5.810/1994:", opcoes: ["assiduidade", "disciplina", "iniciativa", "antiguidade", "produtividade"], correta: 3, explicacao: "Fatores: assiduidade, disciplina, iniciativa, produtividade e responsabilidade." },
    { tipo: "mc", enunciado: "A licença-prêmio prevista no RJU do Pará é de:", opcoes: ["30 dias por quinquênio", "60 dias por triênio", "90 dias por quinquênio", "3 meses por decênio", "não existe"], correta: 1, explicacao: "60 dias a cada triênio." },
    { tipo: "mc", enunciado: "O adicional por tempo de serviço é de:", opcoes: ["1% ao ano, até 35%", "5% por triênio, até 60%", "10% por quinquênio, até 50%", "5% por quinquênio, sem limite", "3% por biênio, até 30%"], correta: 1, explicacao: "Art. 131." },
    { tipo: "mc", enunciado: "A suspensão pode durar até:", opcoes: ["30 dias", "60 dias", "90 dias", "120 dias", "180 dias"], correta: 2, explicacao: "Até 90 dias." },
    { tipo: "mc", enunciado: "Configura inassiduidade habitual, punível com demissão, a falta ao serviço sem justa causa por:", opcoes: ["30 dias consecutivos", "30 dias intercalados em 12 meses", "60 dias intercalados em 12 meses", "45 dias consecutivos", "90 dias intercalados em 24 meses"], correta: 2, explicacao: "Art. 190, III. 30 dias consecutivos é abandono." },
    { tipo: "mc", enunciado: "A licença-maternidade prevista na Lei 5.810/1994 é de:", opcoes: ["120 dias", "150 dias", "180 dias", "90 dias", "60 dias"], correta: 2, explicacao: "180 dias." },
    { tipo: "mc", enunciado: "A reserva de vagas para pessoas com deficiência no concurso é de até:", opcoes: ["5%", "10%", "15%", "20%", "30%"], correta: 3, explicacao: "Art. 15." }
  ]
},

RES1: {
  disciplina: "Resoluções do CONTRAN", titulo: "Resoluções do Agente de Fiscalização: álcool, CNH e suspensão",
  objetivo: "Dominar as três resoluções do edital do Agente de Fiscalização e suas versões atuais.",
  edital: ["Res. 432/2013: fiscalização do consumo de álcool ou outra substância psicoativa", "Res. 718/2017: especificações, produção e expedição da CNH", "Res. 723/2018: procedimento de suspensão do direito de dirigir e cassação"],
  porque: ["O edital de 2018 cita as resoluções pelo número. Duas delas foram substituídas desde então, e o próximo edital deve citar as novas."],
  conteudo: [
    { tabela: { cab: ["Edital 2018", "Situação atual"], linhas: [
      ["Res. 432/2013 (álcool)", "Em agosto de 2026 o Contran aprovou novas regras que substituem a 432; número e texto final não conferidos aqui"],
      ["Res. 718/2017 (CNH)", "Revogada pela Res. 886/2021"],
      ["Res. 723/2018 (suspensão e cassação)", "Substituída pela Res. 844/2021"]] } },
    { h: "Fiscalização de álcool (Res. 432/2013)" },
    { lista: ["A confirmação da alteração da capacidade psicomotora pode ser feita por: exame de sangue; exames toxicológicos (para outras substâncias); teste em etilômetro aprovado pelo Inmetro; verificação de sinais registrados pelo agente em termo próprio.", "Infração (art. 165 do CTB): qualquer concentração de álcool por litro de sangue; ou etilômetro com resultado igual ou superior a 0,05 mg/L de ar alveolar, já descontado o erro máximo admissível; ou sinais de alteração.", "Crime (art. 306 do CTB): exame de sangue com 6 dg/L ou mais; etilômetro com 0,34 mg/L ou mais (valor que já considera o erro máximo admissível sobre 0,3 mg/L); ou sinais de alteração.", "Sinais observáveis: quanto à aparência (sonolência, olhos vermelhos, vômito, soluços, odor de álcool), atitude (agressividade, arrogância, exaltação, ironia, falante, dispersão), orientação (sabe onde está, data e hora), memória (lembra dos atos cometidos) e capacidade motora e verbal (dificuldade de equilíbrio, fala alterada).", "Recusa a se submeter a qualquer procedimento: infração do art. 165-A, com as mesmas penalidades e medidas do art. 165.", "Medidas: recolhimento do documento de habilitação e retenção do veículo até a apresentação de condutor habilitado em condições."] },
    { h: "CNH (Res. 718/2017, hoje Res. 886/2021)" },
    { lista: ["Tratam do modelo único da Carteira Nacional de Habilitação, de seus requisitos de segurança e da produção e expedição pelos órgãos executivos de trânsito dos estados e do DF.", "A CNH existe também em versão digital (CNH-e), com o mesmo valor jurídico do documento impresso, acessível pelo aplicativo oficial.", "A CNH com fotografia vale como documento de identidade em todo o território nacional (CTB, art. 159)."] },
    { alerta: "O detalhamento técnico da Res. 886/2021 (campos, elementos de segurança, prazos de expedição) não foi conferido item a item. Leia o texto no portal do Contran antes da prova." },
    { h: "Suspensão e cassação (Res. 723/2018, hoje Res. 844/2021)" },
    { lista: ["Uniformizam o processo administrativo para aplicar suspensão do direito de dirigir e cassação da CNH ou da PPD.", "Instaurado o processo, o condutor é notificado e tem prazo de defesa não inferior a 30 dias; depois, recurso à JARI e ao CETRAN.", "Suspensão por pontos: 20 (duas ou mais gravíssimas), 30 (uma gravíssima) ou 40 pontos (nenhuma gravíssima ou condutor que exerce atividade remunerada), em 12 meses. Prazo: 6 meses a 1 ano; reincidência em 12 meses: 8 meses a 2 anos.", "Infração com suspensão específica: 2 a 8 meses, salvo prazo próprio (12 meses no art. 165); reincidência: 8 a 18 meses.", "Cumprida a suspensão, o condutor faz o curso de reciclagem e a prova para recuperar o direito de dirigir."] },
    { fonte: "Resoluções Contran 432/2013, 844/2021 e 886/2021; CTB, arts. 159, 165, 165-A, 261 e 306." }
  ],
  checklist: ["Sei a situação atual das três resoluções", "Sei os limites de infração e de crime", "Sei os cinco grupos de sinais de alteração", "Sei as medidas administrativas no álcool", "Sei a pontuação e os prazos de suspensão", "Sei o prazo mínimo de defesa"],
  questoes: [
    { tipo: "mc", enunciado: "Pela Res. 432/2013, o resultado do etilômetro que configura infração administrativa, já descontado o erro máximo admissível, é igual ou superior a:", opcoes: ["0,01 mg/L", "0,05 mg/L", "0,30 mg/L", "0,34 mg/L", "0,60 mg/L"], correta: 1, explicacao: "0,05 mg/L." },
    { tipo: "mc", enunciado: "O limite do etilômetro que caracteriza o crime do art. 306, considerado o erro máximo admissível, é:", opcoes: ["0,05 mg/L", "0,10 mg/L", "0,20 mg/L", "0,34 mg/L", "0,50 mg/L"], correta: 3, explicacao: "0,34 mg/L." },
    { tipo: "mc", enunciado: "No exame de sangue, configura crime a concentração igual ou superior a:", opcoes: ["2 dg/L", "4 dg/L", "6 dg/L", "8 dg/L", "qualquer concentração"], correta: 2, explicacao: "6 decigramas por litro." },
    { tipo: "mc", enunciado: "O condutor que se recusa a fazer o teste do etilômetro:", opcoes: ["não comete infração", "comete a infração do art. 165-A, com as mesmas penalidades do art. 165", "só pode ser multado se houver sinais visíveis", "comete crime de desobediência apenas", "tem a CNH cassada imediatamente"], correta: 1, explicacao: "Art. 165-A." },
    { tipo: "mc", enunciado: "Agressividade, arrogância e exaltação são sinais observados quanto à:", opcoes: ["aparência", "atitude", "orientação", "memória", "capacidade motora"], correta: 1, explicacao: "Grupo atitude." },
    { tipo: "mc", enunciado: "A Res. 723/2018, citada no edital de 2018, foi substituída pela Res.:", opcoes: ["432/2013", "819/2021", "844/2021", "886/2021", "798/2020"], correta: 2, explicacao: "Suspensão e cassação: 844/2021." },
    { tipo: "mc", enunciado: "O condutor que exerce atividade remunerada tem o direito de dirigir suspenso ao atingir, em 12 meses:", opcoes: ["20 pontos", "30 pontos", "40 pontos", "50 pontos", "60 pontos"], correta: 2, explicacao: "40 pontos." },
    { tipo: "mc", enunciado: "No processo de suspensão, o prazo para defesa do condutor não pode ser inferior a:", opcoes: ["5 dias", "10 dias", "15 dias", "30 dias", "60 dias"], correta: 3, explicacao: "30 dias." },
    { tipo: "mc", enunciado: "Na fiscalização de álcool, a medida administrativa aplicada é:", opcoes: ["apreensão do veículo por 30 dias", "recolhimento do documento de habilitação e retenção do veículo", "remoção obrigatória do veículo em qualquer caso", "cassação imediata da CNH", "prisão administrativa"], correta: 1, explicacao: "Art. 165." },
    { tipo: "mc", enunciado: "A CNH com fotografia:", opcoes: ["não vale como identidade", "vale como documento de identidade em todo o território nacional", "vale como identidade apenas no estado emissor", "só vale na versão impressa", "substitui o CRLV"], correta: 1, explicacao: "CTB, art. 159." }
  ]
},

RES2: {
  disciplina: "Resoluções do CONTRAN", titulo: "Resoluções e cartilhas do Agente de Educação: RENAEST, Manual Básico, PNT e motociclistas",
  objetivo: "Conhecer as normas e cartilhas do edital do Agente de Educação de Trânsito e as políticas nacionais de segurança no trânsito.",
  edital: ["Res. 432/2013 (álcool)", "Res. 607/2016: Registro Nacional de Acidentes e Estatísticas de Trânsito (RENAEST)", "Res. 711/2017: conteúdo mínimo do Manual Básico de Segurança no Trânsito", "Política Nacional de Trânsito (cartilha do Denatran)", "Denatran responde: Motociclistas (cartilha)"],
  porque: ["São itens específicos do Agente de Educação. As cartilhas do Denatran não estão mais no endereço indicado no edital de 2018: estude pelos conceitos e confira as fontes atuais."],
  conteudo: [
    { alerta: "As Resoluções 607/2016 e 711/2017 e as cartilhas citadas não foram conferidas no texto original. O Contran consolidou e revogou muitas resoluções entre 2020 e 2022, e o Denatran virou Senatran. O módulo traz o conceito de cada tema; confira no portal do Ministério dos Transportes qual norma está vigente e leia-a antes da prova." },
    { h: "Álcool (Res. 432/2013)" },
    { p: "Mesmo conteúdo cobrado do Agente de Fiscalização: infração com qualquer concentração no sangue ou 0,05 mg/L no etilômetro (descontado o erro); crime com 6 dg/L no sangue ou 0,34 mg/L no etilômetro, ou sinais de alteração; recusa é infração do art. 165-A. Veja o módulo de resoluções da fiscalização ou o CTB9 para o detalhamento." },
    { h: "RENAEST" },
    { lista: ["O Registro Nacional de Acidentes e Estatísticas de Trânsito é a base nacional de dados sobre sinistros de trânsito, alimentada pelos órgãos e entidades do SNT e gerida pelo órgão máximo executivo de trânsito da União (antigo Denatran, hoje Senatran).", "Serve para diagnosticar onde, como e com quem os sinistros acontecem e orientar engenharia, fiscalização e educação.", "A norma técnica ABNT NBR 10697:2020 passou a usar o termo 'sinistro de trânsito' em vez de 'acidente', para indicar que a maioria dos eventos é evitável e não obra do acaso."] },
    { h: "Manual Básico de Segurança no Trânsito" },
    { p: "A Res. 711/2017 estabeleceu o conteúdo mínimo de um manual com orientações de segurança para condutores. Os temas centrais de segurança no trânsito, presentes nos materiais oficiais de formação de condutores, são: direção defensiva (prever e evitar riscos: condições adversas de luz, tempo, via, trânsito, veículo e do próprio condutor), primeiros socorros (sinalizar o local, acionar socorro, não remover a vítima sem necessidade), convívio social no trânsito, respeito ao meio ambiente e cuidados com os usuários vulneráveis (pedestres, ciclistas, motociclistas)." },
    { h: "Política Nacional de Trânsito e PNATRANS" },
    { lista: ["A Política Nacional de Trânsito (PNT), aprovada pelo Contran, orienta as ações do SNT. Seus objetivos giram em torno de: aumentar a segurança no trânsito; promover a educação para o trânsito; garantir mobilidade e acessibilidade com segurança e qualidade ambiental; promover o exercício da cidadania e a participação da sociedade; e fortalecer o SNT.", "Lei 13.614/2018: criou o Plano Nacional de Redução de Mortes e Lesões no Trânsito (PNATRANS), incluindo o art. 326-A no CTB, com metas de redução de mortes por grupo de veículos e por grupo de habitantes, a serem avaliadas anualmente, em horizonte de 10 anos.", "A ONU declarou a Década de Ação pela Segurança no Trânsito 2021–2030, com meta de reduzir pela metade as mortes e lesões."] },
    { h: "Motociclistas" },
    { lista: ["Condutor e passageiro devem usar capacete com viseira ou óculos de proteção (CTB, arts. 54 e 55); conduzir sem capacete é infração gravíssima com suspensão (art. 244, I).", "É proibido transportar criança menor de 10 anos ou que não tenha condições de cuidar da própria segurança (art. 244, V).", "Motocicletas circulam com farol aceso de dia e de noite (CTB, art. 40, parágrafo único); conduzir com faróis apagados é infração do art. 244, IV.", "Mototaxista e motofretista (Lei 12.009/2009): idade mínima de 21 anos, habilitação na categoria A há pelo menos 2 anos, curso especializado e colete de segurança com dispositivos retrorrefletivos.", "Riscos típicos: pontos cegos dos veículos maiores, condução entre faixas em velocidade alta, pista molhada, buracos e óleo na via. O motociclista é usuário vulnerável e corresponde a parcela muito grande das vítimas fatais no país."] },
    { fonte: "CTB, arts. 54, 55, 244 e 326-A; Lei 13.614/2018; Lei 12.009/2009; ABNT NBR 10697:2020; Resoluções Contran 432/2013, 607/2016 e 711/2017 (verificar vigência)." }
  ],
  checklist: ["Sei o que é o RENAEST e quem o gere", "Sei por que se usa 'sinistro' em vez de 'acidente'", "Sei os temas de direção defensiva e primeiros socorros", "Sei os objetivos da PNT e o que é o PNATRANS", "Sei as regras do CTB para motociclistas e da Lei 12.009", "Conferi a vigência das resoluções 607 e 711"],
  questoes: [
    { tipo: "mc", enunciado: "O RENAEST é:", opcoes: ["o registro nacional de veículos", "a base nacional de dados de sinistros e estatísticas de trânsito", "o cadastro de condutores habilitados", "a junta de recursos de infrações", "o fundo nacional de segurança no trânsito"], correta: 1, explicacao: "Registro Nacional de Acidentes e Estatísticas de Trânsito." },
    { tipo: "mc", enunciado: "A norma ABNT NBR 10697:2020 passou a usar o termo 'sinistro de trânsito' para:", opcoes: ["atender a exigência de seguradoras", "indicar que a maioria dos eventos é evitável, e não fruto do acaso", "excluir eventos com vítimas", "substituir o boletim de ocorrência", "padronizar multas"], correta: 1, explicacao: "Mudança conceitual." },
    { tipo: "mc", enunciado: "A Lei 13.614/2018 criou o:", opcoes: ["RENAEST", "PNATRANS, plano nacional de redução de mortes e lesões no trânsito", "Código de Trânsito", "Estatuto da Mobilidade", "Sistema Nacional de Trânsito"], correta: 1, explicacao: "Art. 326-A do CTB." },
    { tipo: "mc", enunciado: "Na direção defensiva, a atitude de prever riscos e agir antes que se tornem perigo concreto corresponde a:", opcoes: ["direção agressiva", "direção preventiva/defensiva", "direção esportiva", "manobra de emergência", "direção econômica apenas"], correta: 1, explicacao: "Conceito central." },
    { tipo: "mc", enunciado: "Em um sinistro com vítima, a primeira providência de quem presta ajuda é:", opcoes: ["remover a vítima do veículo", "dar água à vítima", "sinalizar o local e acionar o socorro especializado", "retirar o capacete do motociclista", "transportar a vítima no próprio carro"], correta: 2, explicacao: "Proteger a cena e chamar socorro." },
    { tipo: "mc", enunciado: "Conduzir motocicleta sem capacete é infração:", opcoes: ["leve", "média", "grave", "gravíssima, com suspensão do direito de dirigir", "apenas medida administrativa"], correta: 3, explicacao: "Art. 244, I." },
    { tipo: "mc", enunciado: "É proibido transportar em motocicleta criança com idade inferior a:", opcoes: ["5 anos", "7 anos", "10 anos", "12 anos", "14 anos"], correta: 2, explicacao: "Art. 244, V." },
    { tipo: "mc", enunciado: "Pela Lei 12.009/2009, o mototaxista deve ter idade mínima de:", opcoes: ["18 anos", "19 anos", "21 anos", "23 anos", "25 anos"], correta: 2, explicacao: "21 anos." },
    { tipo: "mc", enunciado: "Para exercer a atividade de mototaxista, exige-se habilitação na categoria A há pelo menos:", opcoes: ["6 meses", "1 ano", "2 anos", "3 anos", "5 anos"], correta: 2, explicacao: "2 anos." },
    { tipo: "mc", enunciado: "A década de ação da ONU pela segurança no trânsito em vigor tem como meta:", opcoes: ["eliminar todas as mortes até 2025", "reduzir pela metade as mortes e lesões até 2030", "dobrar a frota de ônibus", "proibir motocicletas", "reduzir multas em 50%"], correta: 1, explicacao: "Década 2021–2030." }
  ]
},

MOB1: {
  disciplina: "Mobilidade urbana", titulo: "Política Nacional de Mobilidade Urbana e problemas do transporte",
  objetivo: "Conhecer a Lei 12.587/2012 e os conceitos de transporte, trânsito, custo e meio ambiente cobrados no edital.",
  edital: ["Lei 12.587/2012 (Política Nacional de Mobilidade Urbana)", "Tópicos de transporte, trânsito, mobilidade urbana e meio ambiente: infraestrutura, modos de transporte, custo do transporte e problemas do trânsito e do transporte"],
  porque: ["Aparece nos específicos dos dois cargos e costuma inspirar o tema da discursiva."],
  conteudo: [
    { h: "Conceitos da Lei 12.587/2012" },
    { lista: ["Mobilidade urbana: condição em que se realizam os deslocamentos de pessoas e cargas no espaço urbano.", "Acessibilidade: facilidade disponibilizada às pessoas que possibilite a todos autonomia nos deslocamentos desejados.", "O Sistema Nacional de Mobilidade Urbana é o conjunto organizado e coordenado dos modos de transporte, de serviços e de infraestruturas que garante os deslocamentos de pessoas e cargas no território do município."] },
    { h: "Classificação dos serviços (art. 3º)" },
    { tabela: { cab: ["Critério", "Classes"], linhas: [["Objeto", "Passageiros ou cargas"], ["Característica do serviço", "Coletivo ou individual"], ["Natureza do serviço", "Público ou privado"], ["Modo", "Motorizado ou não motorizado"]] } },
    { p: "O transporte remunerado privado individual de passageiros (aplicativos) foi incluído na lei e cabe aos municípios regulamentá-lo e fiscalizá-lo." },
    { h: "Princípios e diretrizes" },
    { lista: ["Princípios (art. 5º): acessibilidade universal; desenvolvimento sustentável das cidades; equidade no acesso ao transporte público coletivo; eficiência, eficácia e efetividade na prestação dos serviços; gestão democrática e controle social; segurança nos deslocamentos; justa distribuição dos benefícios e ônus do uso dos diferentes modos; equidade no uso do espaço público de circulação; eficiência, eficácia e efetividade na circulação urbana.", "Diretrizes (art. 6º), destaque: prioridade dos modos de transportes não motorizados sobre os motorizados e dos serviços de transporte público coletivo sobre o transporte individual motorizado; integração com a política de uso do solo; mitigação dos custos ambientais, sociais e econômicos dos deslocamentos; incentivo a energias renováveis e menos poluentes."] },
    { h: "Instrumentos de gestão (art. 23), entre outros" },
    { lista: ["Restrição e controle de acesso e circulação, permanente ou temporária, de veículos motorizados em locais e horários predeterminados.", "Estipulação de padrões de emissão de poluentes.", "Aplicação de tributos sobre modos e serviços de transporte urbano pela utilização da infraestrutura (pedágio urbano), vinculando a receita ao transporte coletivo e não motorizado.", "Dedicação de espaço exclusivo nas vias para transporte coletivo e modos não motorizados.", "Política de estacionamentos públicos e privados.", "Monitoramento e controle das emissões de gases de efeito local e de efeito estufa."] },
    { h: "Plano de Mobilidade Urbana" },
    { p: "É o instrumento de efetivação da política. Municípios com mais de 20 mil habitantes e os demais obrigados a ter plano diretor devem elaborá-lo, integrado ao plano diretor. Os prazos legais foram prorrogados mais de uma vez; confira o prazo vigente." },
    { h: "Direitos dos usuários (art. 14)" },
    { p: "Receber o serviço adequado; participar do planejamento, fiscalização e avaliação da política; ser informado, nos pontos de embarque, sobre itinerários, horários, tarifas e modos de integração; ter ambiente seguro e acessível." },
    { h: "Transporte, custo e meio ambiente" },
    { lista: ["Modos: a pé, bicicleta, ônibus, BRT, metrô e trem, VLT, barcas, automóvel, motocicleta. Na Região Metropolitana de Belém, o transporte hidroviário tem papel relevante.", "Infraestrutura: vias, calçadas, ciclovias, terminais, pontos de parada, sinalização, estacionamentos.", "Custo do transporte: custo direto (tarifa, combustível, manutenção) e custos externos que a sociedade paga, como congestionamento (tempo perdido), poluição do ar e sonora, emissões de gases de efeito estufa e sinistros de trânsito (vidas perdidas, gastos com saúde e previdência).", "Problemas: crescimento da frota individual, congestionamentos, transporte coletivo lento e caro, ocupação urbana espraiada que alonga as viagens, insegurança de pedestres e ciclistas.", "Soluções coerentes com a lei: prioridade ao transporte coletivo (faixas exclusivas, BRT), integração tarifária, infraestrutura para pedestres e ciclistas, cidades mais compactas e de uso misto, fiscalização e educação para o trânsito."] },
    { fonte: "Lei 12.587/2012, com alterações (inclusive a Lei 13.640/2018); edital Detran-PA 2018." }
  ],
  checklist: ["Sei os conceitos de mobilidade e acessibilidade da lei", "Sei a classificação dos serviços", "Sei os princípios e a prioridade dos modos não motorizados e do coletivo", "Sei os instrumentos de gestão do art. 23", "Sei quem deve ter plano de mobilidade", "Explico custos externos e problemas do transporte urbano"],
  questoes: [
    { tipo: "mc", enunciado: "Pela Lei 12.587/2012, tem prioridade sobre o transporte individual motorizado:", opcoes: ["o transporte de cargas", "o transporte público coletivo", "o transporte por aplicativo", "o transporte aéreo", "o transporte escolar privado apenas"], correta: 1, explicacao: "Art. 6º, II." },
    { tipo: "mc", enunciado: "Os modos não motorizados, segundo a PNMU, têm prioridade sobre:", opcoes: ["os pedestres", "os modos motorizados", "as ciclovias", "o transporte coletivo apenas no centro", "nenhum outro modo"], correta: 1, explicacao: "Art. 6º, II." },
    { tipo: "mc", enunciado: "A cobrança pelo uso da infraestrutura urbana, com receita vinculada ao transporte coletivo e não motorizado, é chamada de:", opcoes: ["pedágio urbano", "taxa de licenciamento", "IPVA", "contribuição de melhoria", "multa de trânsito"], correta: 0, explicacao: "Instrumento do art. 23." },
    { tipo: "mc", enunciado: "Quanto à característica do serviço, o transporte urbano classifica-se em:", opcoes: ["público ou privado", "coletivo ou individual", "motorizado ou não motorizado", "passageiros ou cargas", "urbano ou rural"], correta: 1, explicacao: "Art. 3º." },
    { tipo: "mc", enunciado: "Devem elaborar Plano de Mobilidade Urbana os municípios com mais de:", opcoes: ["5 mil habitantes", "10 mil habitantes", "20 mil habitantes", "100 mil habitantes", "500 mil habitantes"], correta: 2, explicacao: "Além dos obrigados a ter plano diretor." },
    { tipo: "mc", enunciado: "Não é princípio da Política Nacional de Mobilidade Urbana:", opcoes: ["acessibilidade universal", "gestão democrática e controle social", "prioridade ao automóvel particular", "segurança nos deslocamentos", "equidade no uso do espaço público de circulação"], correta: 2, explicacao: "Contraria as diretrizes." },
    { tipo: "mc", enunciado: "O tempo perdido em congestionamentos, a poluição e os sinistros de trânsito são exemplos de:", opcoes: ["custos diretos do usuário", "custos externos do transporte", "receitas tarifárias", "subsídios cruzados", "benefícios da mobilidade"], correta: 1, explicacao: "Custos pagos pela sociedade." },
    { tipo: "mc", enunciado: "Cabe regulamentar e fiscalizar o transporte remunerado privado individual de passageiros (aplicativos):", opcoes: ["à União", "aos estados", "aos municípios e ao DF", "ao Contran", "às próprias empresas"], correta: 2, explicacao: "Art. 11-A." },
    { tipo: "mc", enunciado: "É direito do usuário do Sistema Nacional de Mobilidade Urbana:", opcoes: ["tarifa zero obrigatória", "ser informado nos pontos de embarque sobre itinerários, horários e tarifas", "escolher o motorista", "estacionar gratuitamente", "isenção de multas"], correta: 1, explicacao: "Art. 14." },
    { tipo: "mc", enunciado: "Uma medida coerente com a PNMU para reduzir congestionamentos é:", opcoes: ["ampliar estacionamentos gratuitos no centro", "criar faixas exclusivas para ônibus", "reduzir calçadas para alargar pistas", "eliminar ciclovias", "isentar automóveis de impostos"], correta: 1, explicacao: "Prioridade ao coletivo." }
  ]
}
});
