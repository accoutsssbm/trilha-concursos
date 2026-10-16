/* Legislação de Trânsito: CTB (Lei 9.503/1997, com as alterações até a Lei 14.071/2020 e posteriores) */
window.MODULOS = Object.assign(window.MODULOS || {}, {
CTB1: {
  disciplina: "Legislação de Trânsito", titulo: "Disposições preliminares e Sistema Nacional de Trânsito",
  objetivo: "Saber onde o CTB se aplica, quem compõe o SNT e o que compete a cada órgão, com destaque para a PRF.",
  edital: ["CTB: disposições preliminares (arts. 1º a 4º)", "Sistema Nacional de Trânsito: composição e competências (arts. 5º a 25)", "Anexo I: conceitos e definições"],
  porque: ["Itens sobre competência (quem autua o quê, em qual via) aparecem em toda prova da PRF e do Detran.", "O art. 20 descreve o trabalho do PRF e é cobrado quase literalmente."],
  conteudo: [
    { h: "Onde o CTB se aplica" },
    { lista: ["Art. 1º: o trânsito de qualquer natureza nas vias terrestres do território nacional, abertas à circulação, rege-se pelo CTB.", "Trânsito é a utilização das vias por pessoas, veículos e animais, isolados ou em grupos, conduzidos ou não, para circulação, parada, estacionamento e operação de carga ou descarga.", "O trânsito em condições seguras é direito de todos e dever dos órgãos e entidades do SNT, que respondem objetivamente por danos causados por ação, omissão ou erro na execução de programas e serviços que garantam esse direito.", "Art. 2º: são vias terrestres as ruas, avenidas, vielas, caminhos, passagens, estradas e rodovias. O parágrafo único inclui as praias abertas à circulação pública, as vias internas dos condomínios constituídos por unidades autônomas e as vias e áreas de estacionamento de estabelecimentos privados de uso coletivo.", "Art. 3º: as disposições do CTB alcançam qualquer veículo e os proprietários, condutores de veículos nacionais ou estrangeiros e as pessoas nele expressamente mencionadas.", "Art. 4º: conceitos e definições estão no Anexo I."] },
    { h: "Composição do SNT (art. 7º)" },
    { tabela: { cab: ["Órgão", "Papel principal"], linhas: [
      ["CONTRAN", "Coordenador do sistema e órgão máximo normativo e consultivo; edita as Resoluções"],
      ["CETRAN (estados) e CONTRANDIFE (DF)", "Normativos, consultivos e coordenadores na esfera local; julgam recursos em 2ª instância nos casos previstos"],
      ["Órgãos executivos de trânsito (União, estados, DF, municípios)", "Senatran na União; Detrans nos estados; órgãos municipais quando o município integra o SNT"],
      ["Órgãos executivos rodoviários", "DNIT nas rodovias federais; DERs e equivalentes nas estaduais"],
      ["Polícia Rodoviária Federal", "Policiamento e fiscalização nas rodovias e estradas federais"],
      ["Polícias Militares", "Policiamento ostensivo de trânsito, executado mediante convênio quando for fiscalização"],
      ["JARI", "Juntas Administrativas de Recursos de Infrações: julgam recursos em 1ª instância"]] } },
    { nota: "O CONTRAN, segundo o art. 12, estabelece normas, coordena e zela pela unidade do sistema. As JARI funcionam junto a cada órgão executivo e rodoviário (art. 16)." },
    { h: "Competência da PRF (art. 20), em resumo" },
    { lista: ["Cumprir e fazer cumprir a legislação e as normas de trânsito no âmbito das rodovias e estradas federais.", "Realizar o patrulhamento ostensivo, executando operações relacionadas com a segurança pública, para preservar a ordem, a incolumidade das pessoas, o patrimônio da União e o de terceiros.", "Executar a fiscalização de trânsito, aplicar as penalidades de advertência por escrito e multa e as medidas administrativas cabíveis, com notificação dos infratores e arrecadação das multas.", "Efetuar levantamento dos locais de acidentes de trânsito e dos serviços de atendimento, socorro e salvamento de vítimas.", "Credenciar os serviços de escolta, fiscalizar e adotar medidas de segurança relativas aos serviços de remoção de veículos, escolta e transporte de carga indivisível.", "Assegurar a livre circulação nas rodovias federais, podendo solicitar ao órgão rodoviário a adoção de medidas emergenciais.", "Implementar as medidas da Política Nacional de Segurança e Educação de Trânsito e promover e participar de projetos e programas de educação e segurança.", "Fiscalizar o cumprimento das normas sobre emissão de poluentes e ruído produzidos pelos veículos automotores."] },
    { h: "Divisão de competência que mais cai" },
    { tabela: { cab: ["Assunto", "Quem autua"], linhas: [
      ["Infrações de circulação, estacionamento e parada", "Órgão com circunscrição sobre a via (município na via urbana; DNIT/PRF na rodovia federal; DER na estadual)"],
      ["Infrações relativas a condutor e veículo (habilitação, licenciamento, equipamentos) em via urbana", "Detran (estado)"],
      ["Excesso de peso, dimensões e lotação", "Órgão rodoviário ou municipal com circunscrição sobre a via"],
      ["Qualquer infração nas rodovias federais, no policiamento", "PRF, nos limites do art. 20"]] } },
    { dica: "Em itens de competência, pergunte primeiro qual é a via. A via define o órgão; o tipo da infração define se é o órgão de trânsito do estado ou o da via." },
    { h: "Conceitos do Anexo I mais cobrados" },
    { lista: ["Automóvel: veículo automotor destinado ao transporte de passageiros, com capacidade para até oito pessoas, exclusive o condutor.", "Ciclomotor: veículo de duas ou três rodas com motor de combustão de até 50 cm³ ou elétrico de até 4 kW, velocidade máxima de fabricação até 50 km/h.", "Parada: imobilização do veículo pelo tempo estritamente necessário para embarque ou desembarque de passageiros. Estacionamento: imobilização por tempo superior ao necessário para isso.", "Ultrapassagem: movimento de passar à frente de outro veículo que se desloca no mesmo sentido, em menor velocidade, e na mesma faixa de tráfego.", "Via de trânsito rápido: sem interseções em nível, sem acessibilidade direta aos lotes e sem travessia de pedestres em nível.", "Agente da autoridade de trânsito: pessoa, civil ou policial militar, credenciada pela autoridade para fiscalização, operação, policiamento ostensivo ou patrulhamento."] },
    { fonte: "Lei 9.503/1997 (CTB), arts. 1º a 25 e Anexo I, texto compilado no portal da Presidência (planalto.gov.br)." }
  ],
  checklist: ["Sei o conceito legal de trânsito e de vias terrestres", "Sei a composição do SNT", "Sei o que o CONTRAN, o CETRAN e a JARI fazem", "Sei as competências da PRF no art. 20", "Sei definir parada, estacionamento, ultrapassagem e ciclomotor"],
  questoes: [
    { tipo: "ce", enunciado: "As vias internas pertencentes aos condomínios constituídos por unidades autônomas são consideradas vias terrestres para os efeitos do CTB.", certo: true, explicacao: "Art. 2º, parágrafo único." },
    { tipo: "ce", enunciado: "A Polícia Rodoviária Federal integra o Sistema Nacional de Trânsito.", certo: true, explicacao: "Art. 7º, V." },
    { tipo: "ce", enunciado: "Compete à JARI julgar, em primeira instância, os recursos contra penalidades impostas pelos órgãos e entidades executivos de trânsito ou rodoviários.", certo: true, explicacao: "Art. 17." },
    { tipo: "ce", enunciado: "O CONTRAN é o órgão máximo executivo do Sistema Nacional de Trânsito, responsável por lavrar autos de infração em todo o país.", certo: false, explicacao: "O CONTRAN é órgão máximo normativo e consultivo, coordenador do sistema; não autua." },
    { tipo: "ce", enunciado: "Compete à PRF efetuar levantamento dos locais de acidentes de trânsito e dos serviços de atendimento, socorro e salvamento de vítimas nas rodovias federais.", certo: true, explicacao: "Art. 20." },
    { tipo: "ce", enunciado: "Parada é a imobilização do veículo por tempo superior ao necessário para embarque ou desembarque de passageiros.", certo: false, explicacao: "Isso é estacionamento. Parada é pelo tempo estritamente necessário." },
    { tipo: "ce", enunciado: "Os órgãos do SNT respondem, no âmbito de suas competências, objetivamente por danos causados aos cidadãos em virtude de ação, omissão ou erro na execução de programas que garantam o trânsito seguro.", certo: true, explicacao: "Art. 1º, § 3º." },
    { tipo: "ce", enunciado: "Via de trânsito rápido é aquela caracterizada por acessos especiais com trânsito livre, sem interseções em nível, sem acessibilidade direta aos lotes lindeiros e sem travessia de pedestres em nível.", certo: true, explicacao: "Definição do Anexo I." },
    { tipo: "mc", enunciado: "Nas rodovias federais, o órgão executivo rodoviário da União é:", opcoes: ["o Detran", "o DNIT", "a Senatran", "o CETRAN", "a JARI"], correta: 1, explicacao: "DNIT." },
    { tipo: "mc", enunciado: "Segundo o Anexo I, o automóvel destina-se ao transporte de passageiros com capacidade para até:", opcoes: ["cinco pessoas, incluído o condutor", "seis pessoas, exclusive o condutor", "oito pessoas, exclusive o condutor", "nove pessoas, incluído o condutor", "dez pessoas, exclusive o condutor"], correta: 2, explicacao: "Até oito pessoas, exclusive o condutor." }
  ]
},

CTB2: {
  disciplina: "Legislação de Trânsito", titulo: "Normas gerais de circulação e conduta",
  objetivo: "Aplicar as regras de circulação: preferência, ultrapassagem, luzes, velocidade, pedestres e ciclistas.",
  edital: ["Normas gerais de circulação e conduta (arts. 26 a 67)", "Pedestres e condutores de veículos não motorizados (arts. 68 a 73)"],
  porque: ["São regras usadas na própria fiscalização e aparecem em itens de situação concreta.", "Os limites de velocidade do art. 61 caem com frequência."],
  conteudo: [
    { h: "Deveres básicos" },
    { lista: ["Art. 26: abster-se de atos que constituam perigo ou obstáculo ao trânsito e não obstruir a via lançando ou depositando objetos.", "Art. 27: antes de circular, verificar a existência e as boas condições dos equipamentos de uso obrigatório e o combustível suficiente.", "Art. 28: o condutor deve ter, a todo momento, domínio do veículo, dirigindo com atenção e cuidados indispensáveis à segurança."] },
    { h: "Circulação (art. 29)" },
    { lista: ["Circulação pelo lado direito da via, admitidas as exceções sinalizadas.", "Manter distância de segurança lateral e frontal, considerando velocidade, condições do local, do veículo e do clima.", "Preferência em local não sinalizado: (a) quem estiver circulando por rodovia, quando apenas um fluxo for de rodovia; (b) quem estiver circulando pela rotatória; (c) nos demais casos, quem vier pela direita do condutor.", "Ultrapassagem pela esquerda, com sinalização prévia, após verificar que ninguém já começou a ultrapassá-lo e que a faixa está livre em distância suficiente.", "Veículos de polícia, fiscalização, bombeiros e ambulâncias, em serviço de urgência e com sirene e luz vermelha intermitente ligadas, têm prioridade de trânsito e livre circulação, estacionamento e parada.", "Os veículos maiores são responsáveis pela segurança dos menores, os motorizados pelos não motorizados e todos pela incolumidade dos pedestres (art. 29, § 2º)."] },
    { h: "Ultrapassagem proibida (art. 32 e 33)" },
    { p: "O condutor não poderá ultrapassar veículos em vias com duplo sentido de direção e pista única, nos trechos em curvas e aclives sem visibilidade suficiente, nas passagens de nível, nas pontes e viadutos e nas travessias de pedestres, exceto quando houver sinalização permitindo. Nas interseções e suas proximidades, também não se ultrapassa." },
    { h: "Luzes (art. 40)" },
    { lista: ["Farol baixo aceso durante a noite, nos túneis com iluminação pública, e nas rodovias de pista simples situadas fora dos perímetros urbanos, durante o dia, quando o veículo não tiver luzes de rodagem diurna (redação da Lei 14.071/2020).", "Luz alta: em vias não iluminadas, exceto ao cruzar ou seguir outro veículo.", "Pisca-alerta: em imobilizações ou situações de emergência e quando a regulamentação da via determinar.", "Troca de luz baixa e alta, por curto período, de forma intermitente, só para indicar a intenção de ultrapassar ou para indicar a existência de risco à segurança dos veículos em sentido contrário."] },
    { h: "Velocidade (art. 61)" },
    { tabela: { cab: ["Via", "Limite quando não houver sinalização"], linhas: [
      ["Urbana de trânsito rápido", "80 km/h"], ["Urbana arterial", "60 km/h"], ["Urbana coletora", "40 km/h"], ["Urbana local", "30 km/h"],
      ["Rodovia de pista dupla", "110 km/h para automóveis, camionetas e motocicletas; 90 km/h para os demais"],
      ["Rodovia de pista simples", "100 km/h para automóveis, camionetas e motocicletas; 90 km/h para os demais"],
      ["Estrada (via rural não pavimentada)", "60 km/h"]] } },
    { nota: "Art. 62: a velocidade mínima não pode ser inferior à metade da máxima da via, respeitadas as condições operacionais." },
    { h: "Cinto, crianças e motocicletas" },
    { lista: ["Art. 65: cinto obrigatório para condutor e passageiros em todas as vias, salvo situações regulamentadas.", "Art. 64: crianças com menos de 10 anos que não tenham atingido 1,45 m devem ser transportadas nos bancos traseiros, em dispositivo de retenção adequado ao peso e à altura (redação da Lei 14.071/2020, regulamentada pela Resolução Contran 819/2021).", "Art. 54 e 55: condutor e passageiro de motocicleta usam capacete com viseira ou óculos, e o passageiro vai em carro lateral ou assento atrás do condutor."] },
    { h: "Pedestres e ciclistas" },
    { lista: ["Art. 68: é assegurada ao pedestre a utilização dos passeios ou passagens apropriadas; onde não houver, a circulação se faz pelos bordos da pista, em fila única, em sentido contrário ao dos veículos (exceto onde proibido).", "Art. 70: os pedestres que estiverem atravessando a via sobre as faixas delimitadas para esse fim terão prioridade de passagem, exceto nos locais com sinalização semafórica.", "Art. 58: nas vias urbanas e rurais de pista dupla, a bicicleta circula, quando não houver ciclovia ou ciclofaixa, nos bordos da pista, no mesmo sentido do fluxo, com preferência sobre os veículos automotores.", "Art. 201: deixar de guardar a distância lateral de 1,50 m ao passar ou ultrapassar bicicleta é infração média."] },
    { fonte: "CTB, arts. 26 a 73 e 201, texto compilado no portal da Presidência." }
  ],
  checklist: ["Sei a ordem de preferência em cruzamento não sinalizado", "Sei onde a ultrapassagem é proibida", "Sei as regras de farol do art. 40, com a mudança de 2020", "Sei os limites do art. 61 e a velocidade mínima", "Sei a regra de 10 anos e 1,45 m para crianças", "Sei a prioridade do pedestre e a distância de 1,50 m do ciclista"],
  questoes: [
    { tipo: "ce", enunciado: "Em cruzamento não sinalizado entre duas vias urbanas comuns, tem preferência o veículo que vier pela direita do condutor.", certo: true, explicacao: "Art. 29, III, c." },
    { tipo: "ce", enunciado: "Em uma rotatória não sinalizada, tem preferência de passagem o veículo que pretende entrar nela.", certo: false, explicacao: "Preferência de quem já circula pela rotatória." },
    { tipo: "ce", enunciado: "Na ausência de sinalização, a velocidade máxima para automóveis em rodovia de pista simples é de 100 km/h.", certo: true, explicacao: "Art. 61, § 1º, II, a, 2." },
    { tipo: "ce", enunciado: "Na ausência de sinalização, a velocidade máxima em via urbana coletora é de 60 km/h.", certo: false, explicacao: "Coletora: 40 km/h. Arterial: 60 km/h." },
    { tipo: "ce", enunciado: "Em rodovia de pista dupla cuja velocidade máxima para automóveis é 110 km/h, a velocidade mínima permitida para esses veículos é 55 km/h.", certo: true, explicacao: "Art. 62: metade da máxima." },
    { tipo: "ce", enunciado: "Os veículos de maior porte são responsáveis pela segurança dos menores, os motorizados pelos não motorizados e, juntos, pela incolumidade dos pedestres.", certo: true, explicacao: "Art. 29, § 2º." },
    { tipo: "ce", enunciado: "A ultrapassagem é permitida em pontes e viadutos de pista única com duplo sentido, desde que o condutor sinalize com antecedência.", certo: false, explicacao: "É proibida, salvo sinalização que permita (art. 32 e 33)." },
    { tipo: "ce", enunciado: "Crianças com menos de dez anos que não tenham atingido 1,45 m de altura devem ser transportadas nos bancos traseiros, em dispositivo de retenção adequado.", certo: true, explicacao: "Art. 64, com redação da Lei 14.071/2020." },
    { tipo: "ce", enunciado: "Onde não houver passeio, o pedestre deve circular pelos bordos da pista, em fila única e no mesmo sentido dos veículos.", certo: false, explicacao: "Em sentido contrário ao dos veículos (art. 68, § 3º)." },
    { tipo: "mc", enunciado: "Ao ultrapassar um ciclista, o condutor deve guardar distância lateral mínima de:", opcoes: ["0,50 m", "1,00 m", "1,50 m", "2,00 m", "3,00 m"], correta: 2, explicacao: "1,50 m (art. 201)." }
  ]
},

CTB3: {
  disciplina: "Legislação de Trânsito", titulo: "Sinalização, engenharia e educação para o trânsito",
  objetivo: "Conhecer os tipos de sinalização, a ordem de prevalência e as regras de educação e engenharia de tráfego.",
  edital: ["Educação para o trânsito (arts. 74 a 79)", "Sinalização de trânsito (arts. 80 a 90) e Anexo II", "Engenharia de tráfego, operação, fiscalização e policiamento ostensivo (arts. 91 a 95)"],
  porque: ["A ordem de prevalência da sinalização é item clássico.", "O Anexo II (placas e marcas) é cobrado em situações concretas."],
  conteudo: [
    { h: "Educação para o trânsito" },
    { lista: ["Art. 74: a educação para o trânsito é direito de todos e constitui dever prioritário para os componentes do SNT.", "Art. 76: a educação para o trânsito será promovida na pré-escola e nas escolas de 1º, 2º e 3º graus, por meio de planejamento e ações coordenadas entre os órgãos do SNT e os de educação.", "Art. 77: no âmbito da educação, os órgãos do SNT promovem campanhas de âmbito nacional, e as campanhas são permanentes, com intensificação em datas específicas."] },
    { h: "Tipos de sinalização (art. 87)" },
    { lista: ["Verticais (placas).", "Horizontais (marcas no pavimento).", "Dispositivos de sinalização auxiliar.", "Luminosos (semáforos).", "Sonoros (apito).", "Gestos do agente de trânsito e do condutor."] },
    { h: "Prevalência (art. 89)" },
    { formula: "Ordens do agente  >  indicações do semáforo  >  demais sinais  >  normas gerais de circulação" },
    { lista: ["Art. 90: não serão aplicadas as sanções previstas no CTB por inobservância à sinalização quando esta for insuficiente ou incorreta.", "Art. 80: sempre que necessário, será colocada ao longo da via sinalização prevista no CTB e em legislação complementar, para informar sobre a utilização adequada. A sinalização deve ser colocada em posição e condições que a tornem perfeitamente visível e legível durante o dia e a noite.", "Art. 88: nenhuma via pavimentada poderá ser entregue após sua construção, ou reaberta ao trânsito após a realização de obras ou manutenção, enquanto não estiver devidamente sinalizada."] },
    { h: "Placas" },
    { tabela: { cab: ["Grupo", "Forma e cor", "Exemplos"], linhas: [
      ["Regulamentação", "Em geral circular, fundo branco, orla vermelha", "R-1 Parada obrigatória (octogonal, fundo vermelho); R-2 Dê a preferência (triângulo com vértice para baixo); proibido estacionar; velocidade máxima"],
      ["Advertência", "Em geral quadrada com diagonal vertical (losango), fundo amarelo, símbolo preto", "Curva acentuada, pista escorregadia, área escolar"],
      ["Indicação", "Retangular, cores variadas (verde, azul, marrom)", "Identificação de rodovia, distâncias, serviços auxiliares, atrativos turísticos"]] } },
    { h: "Marcas viárias" },
    { lista: ["Amarelas: separam fluxos de sentidos opostos.", "Brancas: separam fluxos no mesmo sentido, delimitam bordos e faixas de pedestres.", "Linha contínua: proíbe a transposição; tracejada: permite.", "Linhas duplas contínua e tracejada: vale para cada sentido a linha mais próxima do condutor."] },
    { h: "Gestos do agente (Anexo II)" },
    { lista: ["Braço levantado verticalmente, com a palma da mão para a frente: ordem de parada para todos os veículos.", "Braços estendidos horizontalmente: ordem de parada para os veículos que venham de direções que cortem a dos braços.", "Silvo breve: siga. Dois silvos breves: pare. Silvo longo: diminua a marcha."] },
    { h: "Engenharia e obras (arts. 91 a 95)" },
    { p: "Art. 95: nenhum evento ou obra que possa perturbar ou interromper a livre circulação pode ser iniciado sem permissão prévia do órgão com circunscrição sobre a via. Obstáculos à livre circulação devem ser sinalizados de imediato pelo responsável pela execução ou manutenção." },
    { fonte: "CTB, arts. 74 a 95 e Anexo II; Manual Brasileiro de Sinalização de Trânsito (Contran)." }
  ],
  checklist: ["Sei os seis tipos de sinalização", "Sei a ordem de prevalência do art. 89", "Sei que sinalização insuficiente impede a sanção (art. 90)", "Reconheço os grupos de placas pela forma e cor", "Sei o significado das cores e do tipo de linha", "Sei os gestos e silvos do agente"],
  questoes: [
    { tipo: "ce", enunciado: "As ordens do agente de trânsito prevalecem sobre as indicações do semáforo.", certo: true, explicacao: "Art. 89, I." },
    { tipo: "ce", enunciado: "As indicações dos sinais prevalecem sobre as ordens do agente, para garantir a padronização.", certo: false, explicacao: "Ordem inversa: agente primeiro." },
    { tipo: "ce", enunciado: "Não serão aplicadas sanções por inobservância à sinalização quando esta for insuficiente ou incorreta.", certo: true, explicacao: "Art. 90." },
    { tipo: "ce", enunciado: "Marcas longitudinais amarelas separam fluxos de veículos que trafegam no mesmo sentido.", certo: false, explicacao: "Amarelas separam sentidos opostos; brancas, mesmo sentido." },
    { tipo: "ce", enunciado: "Dois silvos breves do apito do agente significam ordem de parada.", certo: true, explicacao: "Anexo II: dois silvos breves = pare." },
    { tipo: "ce", enunciado: "Os gestos de condutores constituem um dos tipos de sinalização previstos no CTB.", certo: true, explicacao: "Art. 87, VI." },
    { tipo: "ce", enunciado: "A placa de parada obrigatória (R-1) tem forma octogonal e fundo vermelho.", certo: true, explicacao: "Exceção de forma no grupo de regulamentação." },
    { tipo: "ce", enunciado: "Uma via pavimentada pode ser reaberta ao trânsito após obras de manutenção mesmo sem sinalização, desde que haja agente no local.", certo: false, explicacao: "Art. 88: não pode ser reaberta sem estar devidamente sinalizada." },
    { tipo: "ce", enunciado: "A educação para o trânsito é direito de todos e constitui dever prioritário para os componentes do Sistema Nacional de Trânsito.", certo: true, explicacao: "Art. 74." },
    { tipo: "mc", enunciado: "As placas de advertência têm, em regra:", opcoes: ["forma circular e orla vermelha", "forma de losango e fundo amarelo", "forma retangular e fundo verde", "forma octogonal e fundo vermelho", "forma triangular invertida"], correta: 1, explicacao: "Advertência: losango amarelo." }
  ]
},

CTB4: {
  disciplina: "Legislação de Trânsito", titulo: "Veículos: classificação, segurança, registro e licenciamento",
  objetivo: "Classificar veículos, conhecer os equipamentos obrigatórios e as regras de registro, licenciamento e identificação.",
  edital: ["Veículos: classificação, segurança, identificação (arts. 96 a 117)", "Registro e licenciamento (arts. 120 a 135)"],
  porque: ["A fiscalização de documentação e equipamentos é rotina do PRF e do agente do Detran.", "Os prazos de transferência e as hipóteses de novo CRV caem com frequência."],
  conteudo: [
    { h: "Classificação (art. 96)" },
    { tabela: { cab: ["Critério", "Classes"], linhas: [
      ["Tração", "Automotor, elétrico, de propulsão humana, de tração animal, reboque ou semirreboque"],
      ["Espécie", "Passageiros (bicicleta, ciclomotor, motoneta, motocicleta, triciclo, quadriciclo, automóvel, micro-ônibus, ônibus, bonde, reboque, charrete), carga, misto, competição, tração, especial e coleção"],
      ["Categoria", "Oficial, de representação diplomática ou consular, particular, de aluguel e de aprendizagem"]] } },
    { h: "Equipamentos obrigatórios (art. 105), entre outros" },
    { lista: ["Cinto de segurança, conforme regulamentação.", "Para veículos de transporte e condução escolar, de transporte de passageiros com mais de dez lugares e de carga com peso bruto total superior a 4.536 kg: equipamento registrador instantâneo inalterável de velocidade e tempo (tacógrafo).", "Encosto de cabeça, para todos os tipos de veículos automotores, conforme regulamentação.", "Air bag frontal para condutor e passageiro do banco dianteiro, nos veículos novos, na forma regulamentada.", "Dispositivo destinado ao controle de emissão de gases poluentes e de ruído."] },
    { h: "Identificação" },
    { lista: ["Art. 114: o veículo é identificado obrigatoriamente por caracteres gravados no chassi ou monobloco (VIN), reproduzidos em outras partes.", "Art. 115: identificação externa por placas dianteira e traseira, lacradas; a motocicleta, motoneta, ciclomotor e triciclo usam apenas placa traseira.", "Adulterar ou remarcar chassi, sinal identificador ou componente é crime do Código Penal (art. 311)."] },
    { h: "Registro (arts. 120 a 129)" },
    { lista: ["Art. 120: todo veículo automotor, elétrico, articulado, reboque ou semirreboque deve ser registrado no órgão executivo de trânsito do estado ou do DF, no município de domicílio ou residência do proprietário.", "Art. 123: será obrigatória a expedição de novo Certificado de Registro de Veículo (CRV) quando: for transferida a propriedade; o proprietário mudar o município de domicílio ou residência; for alterada qualquer característica do veículo; houver mudança de categoria.", "No caso de transferência de propriedade, o prazo para o novo proprietário adotar as providências é de 30 dias (art. 123, § 1º). Deixar de fazê-lo é infração do art. 233.", "Art. 134: o antigo proprietário deve comunicar a venda ao órgão de trânsito, sob pena de responder solidariamente pelas penalidades até a data da comunicação."] },
    { h: "Licenciamento (arts. 130 a 135)" },
    { lista: ["Art. 130: todo veículo automotor, elétrico, articulado, reboque ou semirreboque, para transitar na via, deve ser licenciado anualmente pelo órgão executivo de trânsito do estado ou do DF onde estiver registrado.", "O documento de porte obrigatório é o Certificado de Licenciamento Anual (CRLV, hoje também em versão digital, CRLV-e).", "Art. 131: o licenciamento só é feito com a quitação de débitos de tributos, encargos e multas vinculados ao veículo, independentemente da responsabilidade pelas infrações.", "Conduzir veículo não registrado ou não licenciado é infração do art. 230 (incisos V e seguintes), gravíssima, com remoção do veículo."] },
    { fonte: "CTB, arts. 96 a 135 e 230; Código Penal, art. 311." }
  ],
  checklist: ["Classifico veículos por tração, espécie e categoria", "Sei quando o tacógrafo é obrigatório", "Sei as quatro hipóteses de novo CRV", "Sei o prazo de 30 dias da transferência", "Sei que o licenciamento exige quitação de débitos"],
  questoes: [
    { tipo: "ce", enunciado: "Quanto à categoria, os veículos classificam-se em oficial, de representação diplomática, particular, de aluguel e de aprendizagem.", certo: true, explicacao: "Art. 96, III." },
    { tipo: "ce", enunciado: "O tacógrafo é obrigatório para veículos de carga com peso bruto total superior a 4.536 kg.", certo: true, explicacao: "Art. 105, II." },
    { tipo: "ce", enunciado: "A mudança de cor do veículo não exige novo CRV, pois não altera suas características.", certo: false, explicacao: "Alteração de característica (cor inclusive) exige novo CRV." },
    { tipo: "ce", enunciado: "O novo proprietário tem 30 dias para adotar as providências necessárias à transferência do veículo.", certo: true, explicacao: "Art. 123, § 1º." },
    { tipo: "ce", enunciado: "A motocicleta deve portar placas dianteira e traseira.", certo: false, explicacao: "Motos usam só placa traseira." },
    { tipo: "ce", enunciado: "O licenciamento anual do veículo depende da quitação dos débitos relativos a tributos, encargos e multas vinculados ao veículo.", certo: true, explicacao: "Art. 131, § 2º." },
    { tipo: "ce", enunciado: "Bicicleta é veículo de propulsão humana e, quanto à espécie, de passageiros.", certo: true, explicacao: "Art. 96, I e II, a." },
    { tipo: "ce", enunciado: "A mudança de domicílio do proprietário para outro bairro do mesmo município obriga a expedição de novo CRV.", certo: false, explicacao: "A obrigação é na mudança de município." },
    { tipo: "mc", enunciado: "Qual destes NÃO é hipótese de expedição obrigatória de novo CRV?", opcoes: ["transferência de propriedade", "mudança de município de residência do proprietário", "alteração de característica do veículo", "mudança de categoria", "renovação anual do licenciamento"], correta: 4, explicacao: "Licenciamento anual não gera novo CRV." },
    { tipo: "mc", enunciado: "Adulterar o número do chassi de um veículo é:", opcoes: ["infração leve", "infração grave", "apenas medida administrativa", "crime previsto no Código Penal", "crime previsto no CTB, art. 306"], correta: 3, explicacao: "CP, art. 311." }
  ]
},

CTB5: {
  disciplina: "Legislação de Trânsito", titulo: "Habilitação",
  objetivo: "Conhecer requisitos, exames, categorias, permissão para dirigir e renovação da CNH.",
  edital: ["Da habilitação (arts. 140 a 160)"],
  porque: ["Categorias e requisitos para C, D e E são cobrados em quase toda prova.", "A Lei 14.071/2020 mudou prazos de validade do exame médico, e a banca gosta de mudanças recentes."],
  conteudo: [
    { h: "Requisitos (art. 140)" },
    { p: "O candidato deve ser penalmente imputável, saber ler e escrever e possuir documento de identidade. A habilitação é feita em exames realizados pelo órgão executivo de trânsito do estado ou do DF do domicílio ou residência do candidato." },
    { h: "Exames (art. 147)" },
    { lista: ["Aptidão física e mental.", "Avaliação psicológica, obrigatória na primeira habilitação e nos casos regulamentados.", "Escrito, sobre legislação de trânsito.", "Noções de primeiros socorros, conforme regulamentação do Contran.", "Direção veicular, realizado na via pública, em veículo da categoria pretendida."] },
    { h: "Validade do exame de aptidão física e mental (art. 147, § 2º, redação da Lei 14.071/2020)" },
    { tabela: { cab: ["Idade do condutor", "Renovação"], linhas: [["Menos de 50 anos", "a cada 10 anos"], ["De 50 a menos de 70 anos", "a cada 5 anos"], ["70 anos ou mais", "a cada 3 anos"]] } },
    { h: "Categorias (art. 143)" },
    { tabela: { cab: ["Categoria", "Veículos"], linhas: [
      ["A", "Motorizado de duas ou três rodas, com ou sem carro lateral"],
      ["B", "Não abrangido pela A, com peso bruto total até 3.500 kg e lotação até 8 lugares, excluído o do motorista"],
      ["C", "Transporte de carga com peso bruto total acima de 3.500 kg"],
      ["D", "Transporte de passageiros com lotação acima de 8 lugares, excluído o do motorista"],
      ["E", "Combinação de veículos em que a unidade tratora se enquadre em B, C ou D e a unidade acoplada tenha 6.000 kg ou mais de peso bruto total, ou lotação acima de 8 lugares"]] } },
    { h: "Requisitos para D e E (art. 145)" },
    { p: "O art. 145 vale para quem quer se habilitar nas categorias D e E ou conduzir transporte coletivo de passageiros, de escolares, de emergência ou de produto perigoso." },
    { lista: ["Ser maior de 21 anos.", "Estar habilitado: no mínimo há 2 anos na categoria B, ou no mínimo há 1 ano na categoria C, para a D; no mínimo há 1 ano na categoria C, para a E.", "Não ter cometido mais de uma infração gravíssima nos últimos 12 meses (inciso III, redação da Lei 14.071/2020).", "Ser aprovado em curso especializado e em curso de treinamento de prática veicular em situação de risco, nos termos da regulamentação do Contran."] },
    { nota: "Antes da Lei 14.071/2020, o inciso III exigia não ter cometido infração grave ou gravíssima nem ser reincidente em infrações médias. Provas antigas usam a redação anterior: confira o ano antes de corrigir. A participação no curso especializado independe do inciso III (parágrafo único)." },
    { h: "Permissão para dirigir (art. 148)" },
    { lista: ["Aprovado nos exames, o candidato recebe a Permissão para Dirigir, válida por 1 ano.", "Ao fim do ano, recebe a CNH se não tiver cometido nenhuma infração de natureza grave ou gravíssima nem for reincidente em infração média.", "Se não cumprir, reinicia todo o processo de habilitação (art. 148, § 4º)."] },
    { h: "Outros pontos" },
    { lista: ["Art. 159: a CNH, expedida em modelo único, contém fotografia e tem fé pública e equivale a documento de identidade em todo o território nacional.", "Art. 155: a formação de condutor é feita por instrutor autorizado; o aprendiz conduz acompanhado do instrutor, portando a licença de aprendizagem.", "Art. 162: dirigir sem habilitação, com CNH cassada ou suspensa, ou com CNH de categoria diferente é infração gravíssima, com multa agravada e retenção do veículo até apresentação de condutor habilitado."] },
    { fonte: "CTB, arts. 140 a 162, com alterações das Leis 13.281/2016 e 14.071/2020." }
  ],
  checklist: ["Sei os requisitos do art. 140", "Sei os exames do art. 147", "Sei a periodicidade do exame médico por idade", "Sei as categorias A a E", "Sei os requisitos do art. 145 para D e E", "Sei as condições para trocar a PPD pela CNH"],
  questoes: [
    { tipo: "ce", enunciado: "Para obter a habilitação, o candidato deve ser penalmente imputável, saber ler e escrever e possuir documento de identidade.", certo: true, explicacao: "Art. 140." },
    { tipo: "ce", enunciado: "Para condutores com menos de 50 anos, o exame de aptidão física e mental é renovado a cada 10 anos.", certo: true, explicacao: "Art. 147, § 2º, redação da Lei 14.071/2020." },
    { tipo: "ce", enunciado: "Condutores com 70 anos ou mais renovam o exame de aptidão física e mental a cada 5 anos.", certo: false, explicacao: "A cada 3 anos." },
    { tipo: "ce", enunciado: "A categoria B habilita a conduzir veículo de passageiros com lotação de até 8 lugares, excluído o do motorista.", certo: true, explicacao: "Art. 143, II." },
    { tipo: "ce", enunciado: "Para se habilitar na categoria E, o condutor precisa estar habilitado há pelo menos 1 ano na categoria C.", certo: true, explicacao: "Art. 145." },
    { tipo: "ce", enunciado: "O permissionário que cometer uma infração leve durante o período de permissão não poderá obter a CNH definitiva.", certo: false, explicacao: "Impedem: infração grave, gravíssima ou reincidência em média." },
    { tipo: "ce", enunciado: "A Permissão para Dirigir tem validade de dois anos.", certo: false, explicacao: "Um ano (art. 148, § 2º)." },
    { tipo: "ce", enunciado: "Pela redação atual do art. 145, o candidato à categoria D não pode ter cometido nenhuma infração grave nos últimos 12 meses.", certo: false, explicacao: "Desde a Lei 14.071/2020, o requisito é não ter cometido mais de uma infração gravíssima nos últimos 12 meses." },
    { tipo: "ce", enunciado: "A CNH tem fé pública e equivale a documento de identidade em todo o território nacional.", certo: true, explicacao: "Art. 159." },
    { tipo: "mc", enunciado: "Um caminhão com peso bruto total de 8.000 kg exige, no mínimo, a categoria:", opcoes: ["A", "B", "C", "D", "E"], correta: 2, explicacao: "Carga acima de 3.500 kg: C." },
    { tipo: "mc", enunciado: "A combinação de veículos cuja unidade acoplada tem 6.000 kg ou mais de PBT exige a categoria:", opcoes: ["B", "C", "D", "E", "ACC"], correta: 3, explicacao: "Categoria E." }
  ]
},

CTB6: {
  disciplina: "Legislação de Trânsito", titulo: "Infrações de trânsito",
  objetivo: "Classificar as infrações, saber valores e pontos e memorizar as infrações mais cobradas com suas penalidades e medidas.",
  edital: ["Das infrações (arts. 161 a 255)"],
  porque: ["É o módulo mais extenso e mais cobrado do Bloco II.", "A banca troca natureza, fator multiplicador ou medida administrativa para tornar o item errado."],
  conteudo: [
    { h: "Natureza, valor e pontos" },
    { tabela: { cab: ["Natureza", "Multa (art. 258)", "Pontos (art. 259)"], linhas: [
      ["Gravíssima", "R$ 293,47", "7"], ["Grave", "R$ 195,23", "5"], ["Média", "R$ 130,16", "4"], ["Leve", "R$ 88,38", "3"]] } },
    { nota: "Valores fixados pela Lei 13.281/2016. Quando o artigo diz 'multa (dez vezes)', multiplica-se o valor da gravíssima: 10 × R$ 293,47 = R$ 2.934,70." },
    { h: "Responsabilidade (art. 257)" },
    { lista: ["Ao proprietário cabe a responsabilidade pelas infrações referentes à prévia regularização e ao preenchimento das formalidades e condições exigidas para o trânsito do veículo (documentos, equipamentos, características).", "Ao condutor cabe a responsabilidade pelas infrações decorrentes de atos praticados na direção do veículo.", "Não sendo imediata a identificação do infrator, o proprietário tem 30 dias após a notificação da autuação para apresentá-lo; não o fazendo, é considerado responsável."] },
    { h: "Infrações mais cobradas" },
    { tabela: { cab: ["Art.", "Conduta", "Natureza e penalidade", "Medida administrativa"], linhas: [
      ["162, I", "Dirigir sem possuir CNH ou PPD", "Gravíssima, multa (3x)", "Retenção do veículo até apresentação de condutor habilitado"],
      ["162, II", "Dirigir com CNH cassada ou com suspensão do direito de dirigir", "Gravíssima, multa (3x)", "Recolhimento do documento e retenção do veículo"],
      ["162, III", "Dirigir com CNH de categoria diferente", "Gravíssima, multa (2x)", "Retenção do veículo"],
      ["165", "Dirigir sob a influência de álcool ou de qualquer substância psicoativa que determine dependência", "Gravíssima, multa (10x) e suspensão por 12 meses", "Recolhimento do documento de habilitação e retenção do veículo"],
      ["165-A", "Recusar-se a ser submetido a teste, exame clínico, perícia ou outro procedimento que permita certificar a influência de álcool ou substância psicoativa", "As mesmas do art. 165", "As mesmas do art. 165"],
      ["167", "Deixar o condutor ou passageiro de usar o cinto", "Grave, multa", "Retenção até colocação do cinto"],
      ["168", "Transportar crianças sem observância das normas de segurança", "Gravíssima, multa", "Retenção até regularização"],
      ["173", "Disputar corrida (racha)", "Gravíssima, multa (10x) e suspensão", "Recolhimento do documento e remoção do veículo"],
      ["175", "Manobra perigosa: arrancada brusca, derrapagem ou frenagem com deslizamento ou arrastamento de pneus", "Gravíssima, multa (10x) e suspensão", "Recolhimento do documento e remoção do veículo"],
      ["176", "Deixar o condutor envolvido em sinistro com vítima de prestar socorro, adotar providências, preservar o local etc.", "Gravíssima, multa (5x) e suspensão", "Recolhimento do documento de habilitação"],
      ["203", "Ultrapassar pela contramão em curvas, aclives sem visibilidade, faixas de pedestres, pontes, passagens de nível ou onde houver linha dupla contínua ou simples contínua amarela", "Gravíssima, multa (5x); em dobro na reincidência em 12 meses", "—"],
      ["214", "Deixar de dar preferência a pedestre que se encontre na faixa a ele destinada", "Gravíssima, multa", "—"],
      ["218", "Velocidade superior à máxima: até 20%", "Média, multa", "—"],
      ["218", "Velocidade superior à máxima: mais de 20% até 50%", "Grave, multa", "—"],
      ["218", "Velocidade superior à máxima: mais de 50%", "Gravíssima, multa (3x) e suspensão", "—"],
      ["244, I", "Conduzir motocicleta sem capacete com viseira ou óculos de proteção", "Gravíssima, multa e suspensão", "Recolhimento do documento de habilitação"],
      ["252, par. único", "Dirigir segurando ou manuseando telefone celular", "Gravíssima, multa", "—"]] } },
    { alerta: "Os incisos e multiplicadores mudaram várias vezes (Leis 12.971/2014, 13.281/2016, 14.071/2020). Antes da prova, confira cada artigo da tabela no texto compilado do CTB." },
    { h: "Regras de aplicação" },
    { lista: ["Art. 266: quando o infrator cometer, simultaneamente, duas ou mais infrações, ser-lhe-ão aplicadas, cumulativamente, as respectivas penalidades.", "Art. 165, parágrafo único: em caso de reincidência no período de até 12 meses, a multa do art. 165 é aplicada em dobro.", "Art. 165-B (Lei 14.071/2020): conduzir veículo das categorias C, D ou E sem realizar o exame toxicológico exigido é gravíssima, multa (5x) e suspensão por 3 meses."] },
    { fonte: "CTB, arts. 161 a 259; Lei 13.281/2016 (valores); Lei 14.071/2020." }
  ],
  checklist: ["Sei valores e pontos de cada natureza", "Sei a divisão de responsabilidade entre proprietário e condutor", "Sei as infrações do art. 162 com fatores", "Sei arts. 165 e 165-A com penalidade e medida", "Sei as faixas do art. 218", "Sei as infrações de racha, manobra perigosa, socorro e ultrapassagem pela contramão"],
  questoes: [
    { tipo: "ce", enunciado: "A infração de natureza grave acarreta multa de R$ 195,23 e 5 pontos no prontuário.", certo: true, explicacao: "Arts. 258 e 259." },
    { tipo: "ce", enunciado: "Dirigir sob a influência de álcool é infração gravíssima, com multa multiplicada por dez e suspensão do direito de dirigir por 12 meses.", certo: true, explicacao: "Art. 165." },
    { tipo: "ce", enunciado: "Recusar-se a fazer o teste do etilômetro não configura infração, pois ninguém é obrigado a produzir prova contra si mesmo.", certo: false, explicacao: "Art. 165-A: infração com as mesmas penalidades do art. 165." },
    { tipo: "ce", enunciado: "Transitar a 125 km/h em via cuja velocidade máxima é 100 km/h configura infração grave.", certo: true, explicacao: "Excesso de 25%: entre 20% e 50%, grave." },
    { tipo: "ce", enunciado: "Transitar a 160 km/h em via cuja velocidade máxima é 100 km/h configura infração gravíssima, com multa multiplicada por três e suspensão do direito de dirigir.", certo: true, explicacao: "Excesso de 60%: art. 218, III." },
    { tipo: "ce", enunciado: "Dirigir veículo com CNH de categoria diferente da do veículo é infração gravíssima com multa multiplicada por três.", certo: false, explicacao: "Art. 162, III: multa (2x)." },
    { tipo: "ce", enunciado: "As infrações referentes ao preenchimento das formalidades e condições exigidas para o trânsito do veículo são de responsabilidade do proprietário.", certo: true, explicacao: "Art. 257, § 2º." },
    { tipo: "ce", enunciado: "Quando o infrator comete duas infrações simultâneas, aplica-se apenas a penalidade da mais grave.", certo: false, explicacao: "Art. 266: penalidades cumulativas." },
    { tipo: "ce", enunciado: "Dirigir segurando ou manuseando telefone celular é infração gravíssima.", certo: true, explicacao: "Art. 252, parágrafo único." },
    { tipo: "mc", enunciado: "A multa do art. 165 (dez vezes a gravíssima) corresponde a:", opcoes: ["R$ 293,47", "R$ 880,41", "R$ 1.467,35", "R$ 2.934,70", "R$ 5.869,40"], correta: 3, explicacao: "10 × 293,47 = 2.934,70." }
  ]
},

CTB7: {
  disciplina: "Legislação de Trânsito", titulo: "Penalidades, medidas administrativas e processo administrativo",
  objetivo: "Diferenciar penalidade de medida administrativa, conhecer suspensão, cassação e o rito do processo de autuação e recurso.",
  edital: ["Das penalidades (arts. 256 a 268)", "Das medidas administrativas (arts. 269 a 279)", "Do processo administrativo (arts. 280 a 290)"],
  porque: ["A distinção entre penalidade e medida administrativa derruba muitos candidatos.", "A Lei 14.071/2020 mudou a pontuação da suspensão, a advertência e o desconto da multa."],
  conteudo: [
    { h: "Penalidades (art. 256)" },
    { lista: ["Advertência por escrito.", "Multa.", "Suspensão do direito de dirigir.", "Cassação da CNH.", "Cassação da Permissão para Dirigir.", "Frequência obrigatória em curso de reciclagem."] },
    { nota: "A apreensão do veículo deixou de ser penalidade (revogada pela Lei 13.281/2016). Penalidade é aplicada pela autoridade de trânsito; medida administrativa é providência imediata do agente." },
    { h: "Advertência por escrito (art. 267)" },
    { p: "Pela redação da Lei 14.071/2020, deverá ser imposta a advertência por escrito à infração leve ou média, passível de multa, caso o infrator não tenha cometido nenhuma outra infração nos últimos 12 meses." },
    { h: "Suspensão do direito de dirigir (art. 261)" },
    { tabela: { cab: ["Situação no período de 12 meses", "Pontos para suspensão"], linhas: [
      ["Duas ou mais infrações gravíssimas", "20 pontos"], ["Uma infração gravíssima", "30 pontos"], ["Nenhuma infração gravíssima", "40 pontos"],
      ["Condutor que exerce atividade remunerada (EAR)", "40 pontos, independentemente da natureza"]] } },
    { lista: ["Prazo por pontos: de 6 meses a 1 ano; na reincidência em 12 meses, de 8 meses a 2 anos.", "Infração que prevê suspensão específica: de 2 a 8 meses, salvo prazo próprio (ex.: 12 meses no art. 165); na reincidência, de 8 a 18 meses.", "Cumprida a suspensão, o condutor faz curso de reciclagem para recuperar o direito de dirigir."] },
    { h: "Cassação (art. 263)" },
    { lista: ["Quando, suspenso o direito de dirigir, o infrator conduzir qualquer veículo.", "No caso de reincidência, no prazo de 12 meses, das infrações dos arts. 162, III, 163, 164, 165, 173, 174 e 175.", "Quando condenado judicialmente por delito de trânsito.", "Decorridos 2 anos da cassação, o infrator pode requerer reabilitação, submetendo-se a todos os exames."] },
    { h: "Medidas administrativas (art. 269), entre outras" },
    { lista: ["Retenção do veículo: imobilização no local até sanar a irregularidade.", "Remoção do veículo: para depósito do órgão.", "Recolhimento da CNH ou da PPD.", "Recolhimento do Certificado de Licenciamento Anual.", "Transbordo do excesso de carga.", "Realização de teste de dosagem de alcoolemia ou perícia de substância entorpecente.", "Recolhimento de animais soltos na via."] },
    { h: "Processo administrativo (arts. 280 a 290)" },
    { lista: ["Ocorrendo a infração, lavra-se o auto de infração, com tipificação, local, data e hora, placa e marca do veículo, identificação do condutor quando possível, identificação do agente e assinatura do infrator sempre que possível.", "Art. 281: o auto será arquivado e seu registro julgado insubsistente se considerado inconsistente ou irregular, ou se a notificação da autuação não for expedida no prazo de 30 dias.", "Notificação da autuação: abre prazo para defesa prévia e para indicação do condutor.", "Notificação da penalidade: abre prazo para recurso à JARI. A Lei 14.071/2020 fixou prazo para aplicação da penalidade (art. 281-A e seguintes) e para julgamento dos recursos.", "Art. 284: a multa pode ser paga até o vencimento por 80% do valor. Se o infrator aderir ao sistema de notificação eletrônica e não apresentar defesa prévia nem recurso, reconhecendo a infração, paga 60% do valor.", "Recurso em 2ª instância contra decisão da JARI vai ao CETRAN, CONTRANDIFE ou colegiado especial, conforme o órgão que impôs a penalidade (art. 289)."] },
    { fonte: "CTB, arts. 256 a 290, com alterações das Leis 13.281/2016 e 14.071/2020; Resolução Contran 844/2021." }
  ],
  checklist: ["Sei listar as penalidades e que apreensão não é mais penalidade", "Diferencio penalidade e medida administrativa", "Sei a pontuação escalonada da suspensão", "Sei os prazos de suspensão por pontos e por infração específica", "Sei as hipóteses de cassação e o prazo de reabilitação", "Sei o prazo de 30 dias para expedir a notificação da autuação e os descontos da multa"],
  questoes: [
    { tipo: "ce", enunciado: "A apreensão do veículo é uma das penalidades atualmente previstas no art. 256 do CTB.", certo: false, explicacao: "Revogada pela Lei 13.281/2016." },
    { tipo: "ce", enunciado: "O condutor que comete duas infrações gravíssimas em 12 meses tem o direito de dirigir suspenso ao atingir 20 pontos.", certo: true, explicacao: "Art. 261, I, a." },
    { tipo: "ce", enunciado: "O condutor sem nenhuma infração gravíssima no período de 12 meses tem o direito de dirigir suspenso ao atingir 30 pontos.", certo: false, explicacao: "40 pontos." },
    { tipo: "ce", enunciado: "Retenção e remoção do veículo são medidas administrativas, não penalidades.", certo: true, explicacao: "Art. 269." },
    { tipo: "ce", enunciado: "Conduzir veículo durante o período de suspensão do direito de dirigir acarreta a cassação da CNH.", certo: true, explicacao: "Art. 263, I." },
    { tipo: "ce", enunciado: "O condutor que teve a CNH cassada pode requerer reabilitação após um ano.", certo: false, explicacao: "Após 2 anos." },
    { tipo: "ce", enunciado: "O auto de infração será arquivado se a notificação da autuação não for expedida no prazo de 30 dias.", certo: true, explicacao: "Art. 281, parágrafo único, II." },
    { tipo: "ce", enunciado: "Pela redação atual do CTB, a advertência por escrito deve ser imposta à infração leve ou média, passível de multa, se o infrator não tiver cometido outra infração nos últimos 12 meses.", certo: true, explicacao: "Art. 267, redação da Lei 14.071/2020." },
    { tipo: "ce", enunciado: "Condenação judicial por delito de trânsito é hipótese de cassação da CNH.", certo: true, explicacao: "Art. 263, III." },
    { tipo: "mc", enunciado: "O infrator que adere à notificação eletrônica e não apresenta defesa nem recurso, reconhecendo a infração, paga a multa por:", opcoes: ["100% do valor", "80% do valor", "70% do valor", "60% do valor", "50% do valor"], correta: 3, explicacao: "Art. 284, § 1º: 60%." }
  ]
},

CTB8: {
  disciplina: "Legislação de Trânsito", titulo: "Crimes de trânsito",
  objetivo: "Conhecer as disposições gerais e os crimes em espécie do CTB, com penas, qualificadoras e regras de flagrante.",
  edital: ["Dos crimes de trânsito (arts. 291 a 312-B)"],
  porque: ["O tema é cobrado tanto no Bloco II quanto em Legislação Penal Especial.", "Penas e qualificadoras mudaram com as Leis 12.971/2014, 13.546/2017 e 14.071/2020."],
  conteudo: [
    { h: "Disposições gerais" },
    { lista: ["Art. 291: aos crimes de trânsito aplicam-se as normas do Código Penal e do Código de Processo Penal, e a Lei 9.099/1995 no que couber.", "Art. 291, § 1º: na lesão corporal culposa aplicam-se os institutos de composição civil, representação e transação (arts. 74, 76 e 88 da Lei 9.099), exceto se o agente estiver sob influência de álcool ou substância psicoativa, participando de racha, ou transitando em velocidade superior à máxima em 50 km/h.", "Art. 292: a suspensão ou a proibição de se obter a permissão ou a habilitação pode ser imposta isolada ou cumulativamente com outras penas.", "Art. 293: a suspensão ou proibição dura de 2 meses a 5 anos.", "Art. 294: em qualquer fase da investigação ou da ação penal, havendo necessidade para a garantia da ordem pública, o juiz pode decretar, como medida cautelar, a suspensão ou a proibição.", "Art. 298: são agravantes, entre outras, ter o condutor cometido a infração com dano potencial para duas ou mais pessoas, sem placas ou com placas falsas, sem PPD ou CNH, com CNH de categoria diferente, quando sua profissão exigir cuidados especiais com o transporte, em veículo adulterado ou sobre faixa de pedestres.", "Art. 301: ao condutor que prestar pronto e integral socorro à vítima não se imporá prisão em flagrante nem se exigirá fiança."] },
    { h: "Crimes em espécie" },
    { tabela: { cab: ["Art.", "Crime", "Pena"], linhas: [
      ["302", "Homicídio culposo na direção de veículo automotor", "Detenção de 2 a 4 anos e suspensão ou proibição"],
      ["302, § 3º", "Homicídio culposo conduzindo sob influência de álcool ou substância psicoativa", "Reclusão de 5 a 8 anos e suspensão ou proibição"],
      ["303", "Lesão corporal culposa na direção de veículo automotor", "Detenção de 6 meses a 2 anos e suspensão ou proibição"],
      ["303, § 2º", "Lesão culposa sob influência de álcool, resultando lesão grave ou gravíssima", "Reclusão de 2 a 5 anos, sem prejuízo de outras sanções"],
      ["304", "Omissão de socorro (quando o fato não constituir elemento de crime mais grave)", "Detenção de 6 meses a 1 ano, ou multa"],
      ["305", "Afastar-se do local do sinistro para fugir à responsabilidade penal ou civil", "Detenção de 6 meses a 1 ano, ou multa"],
      ["306", "Conduzir com capacidade psicomotora alterada em razão de álcool ou substância psicoativa", "Detenção de 6 meses a 3 anos, multa e suspensão ou proibição"],
      ["307", "Violar a suspensão ou a proibição imposta", "Detenção de 6 meses a 1 ano e multa, com nova imposição por igual prazo"],
      ["308", "Participar de corrida, disputa ou competição não autorizada (racha) gerando situação de risco", "Detenção de 6 meses a 3 anos; lesão grave: reclusão de 3 a 6; morte: reclusão de 5 a 10"],
      ["309", "Dirigir sem PPD ou CNH, ou com direito cassado, gerando perigo de dano", "Detenção de 6 meses a 1 ano, ou multa"],
      ["310", "Permitir, confiar ou entregar a direção a pessoa não habilitada, com direito suspenso ou cassado, ou sem condições de dirigir", "Detenção de 6 meses a 1 ano, ou multa"],
      ["311", "Velocidade incompatível próximo a escolas, hospitais, estações de embarque, logradouros estreitos ou com grande movimentação, gerando perigo de dano", "Detenção de 6 meses a 1 ano, ou multa"],
      ["312", "Inovar artificiosamente, em caso de sinistro com vítima, o estado de lugar, coisa ou pessoa, para induzir a erro o agente, o perito ou o juiz", "Detenção de 6 meses a 1 ano, ou multa"]] } },
    { h: "Homicídio culposo: aumento de 1/3 à metade (art. 302, § 1º)" },
    { lista: ["Não possuir Permissão para Dirigir ou CNH.", "Praticar o crime em faixa de pedestres ou na calçada.", "Deixar de prestar socorro, quando possível fazê-lo sem risco pessoal, à vítima do sinistro.", "No exercício de profissão ou atividade, estar conduzindo veículo de transporte de passageiros."] },
    { h: "Prova da embriaguez no art. 306" },
    { lista: ["Concentração igual ou superior a 6 decigramas de álcool por litro de sangue ou igual ou superior a 0,3 miligrama por litro de ar alveolar; ou", "sinais que indiquem alteração da capacidade psicomotora, na forma do Contran.", "Pode ser verificada por teste de alcoolemia, exame clínico, perícia, vídeo, prova testemunhal ou outros meios admitidos, observado o direito à contraprova."] },
    { h: "Penas alternativas e restrições" },
    { lista: ["Art. 312-A: nos crimes dos arts. 302 a 312, a pena privativa de liberdade substituída por restritiva de direitos será de prestação de serviço à comunidade em atividades ligadas a resgate e atendimento de vítimas de trânsito, entre outras previstas.", "Art. 312-B (Lei 14.071/2020): aos crimes dos arts. 302, § 3º, e 303, § 2º, não se aplica a substituição da pena privativa de liberdade por restritiva de direitos."] },
    { fonte: "CTB, arts. 291 a 312-B, com alterações das Leis 12.971/2014, 13.546/2017 e 14.071/2020." }
  ],
  checklist: ["Sei as exceções à Lei 9.099 na lesão culposa", "Sei o prazo da suspensão ou proibição (2 meses a 5 anos)", "Sei a regra do socorro e do flagrante (art. 301)", "Sei penas do homicídio e da lesão culposa, inclusive com álcool", "Sei os critérios do art. 306", "Sei que o art. 312-B veda a substituição nos casos com álcool"],
  questoes: [
    { tipo: "ce", enunciado: "Ao condutor que presta pronto e integral socorro à vítima não se impõe prisão em flagrante nem se exige fiança.", certo: true, explicacao: "Art. 301." },
    { tipo: "ce", enunciado: "O homicídio culposo na direção de veículo automotor praticado por condutor sob influência de álcool é punido com reclusão de 5 a 8 anos.", certo: true, explicacao: "Art. 302, § 3º, incluído pela Lei 13.546/2017." },
    { tipo: "ce", enunciado: "A suspensão ou proibição de se obter a habilitação, como pena, tem duração de 6 meses a 1 ano.", certo: false, explicacao: "De 2 meses a 5 anos (art. 293)." },
    { tipo: "ce", enunciado: "Na lesão corporal culposa no trânsito praticada por condutor que transitava 60 km/h acima da velocidade máxima da via, não se aplica a transação penal.", certo: true, explicacao: "Art. 291, § 1º, III: acima de 50 km/h." },
    { tipo: "ce", enunciado: "O crime do art. 306 pode ser comprovado por vídeo ou prova testemunhal, não apenas pelo etilômetro.", certo: true, explicacao: "Art. 306, § 2º." },
    { tipo: "ce", enunciado: "Para configurar o crime do art. 306 pelo etilômetro, a concentração deve ser igual ou superior a 0,3 miligrama de álcool por litro de ar alveolar.", certo: true, explicacao: "Art. 306, § 1º, I." },
    { tipo: "ce", enunciado: "Praticar o homicídio culposo na calçada é causa de aumento de pena.", certo: true, explicacao: "Art. 302, § 1º, II." },
    { tipo: "ce", enunciado: "A participação em racha que resulta em morte, sem dolo, é punida com detenção de 6 meses a 3 anos.", certo: false, explicacao: "Com morte: reclusão de 5 a 10 anos (art. 308, § 2º)." },
    { tipo: "ce", enunciado: "Ao homicídio culposo cometido sob influência de álcool é possível substituir a pena privativa de liberdade por restritiva de direitos.", certo: false, explicacao: "Art. 312-B veda." },
    { tipo: "mc", enunciado: "Entregar a direção do veículo a pessoa não habilitada é crime previsto no art.:", opcoes: ["306", "307", "309", "310", "311"], correta: 3, explicacao: "Art. 310." }
  ]
},

CTB9: {
  disciplina: "Legislação de Trânsito", titulo: "Resoluções do Contran mais cobradas",
  objetivo: "Conhecer o essencial das resoluções que detalham o CTB na fiscalização: álcool, suspensão e cassação, transporte de crianças e medição de velocidade.",
  edital: ["Resoluções do Contran listadas no item de Legislação de Trânsito do edital (consulte a lista oficial no edital vigente)"],
  porque: ["O edital da PRF 2021 lista resoluções específicas. A lista completa deve ser conferida no edital: este módulo cobre as mais recorrentes, não substitui a lista oficial."],
  conteudo: [
    { alerta: "Este módulo não reproduz a lista oficial de resoluções do edital, que não foi conferida item a item. Use-o como base e leia cada resolução no portal do Contran (Ministério dos Transportes) antes da prova. O Contran consolidou muitas resoluções a partir de 2020, e várias numerações antigas foram revogadas." },
    { h: "Álcool e substâncias psicoativas (Resolução 432/2013)" },
    { lista: ["Infração (art. 165): qualquer concentração de álcool por litro de sangue, ou resultado do etilômetro igual ou superior a 0,05 mg/L de ar alveolar, já descontado o erro máximo admissível.", "Crime (art. 306): exame de sangue com 6 dg/L ou mais, ou etilômetro com 0,34 mg/L ou mais (valor medido considerado o erro máximo admissível), ou sinais de alteração da capacidade psicomotora.", "Sinais observados pelo agente: aparência, atitude, orientação, memória, capacidade motora e verbal, registrados em termo próprio.", "Recusa a qualquer procedimento: infração do art. 165-A."] },
    { nota: "Em agosto de 2026 o Contran aprovou novas regras para fiscalização de álcool que substituem a Resolução 432/2013. O número e o texto final não foram conferidos aqui: verifique se o edital do próximo concurso já cita a nova resolução." },
    { h: "Suspensão e cassação (Resolução 844/2021)" },
    { lista: ["Regulamenta o processo administrativo de suspensão do direito de dirigir e de cassação da CNH e da PPD.", "Pontos para suspensão: 20, 30 ou 40 conforme o número de gravíssimas; 40 para quem exerce atividade remunerada.", "Prazos de suspensão por pontos: 6 meses a 1 ano; reincidência: 8 meses a 2 anos.", "Infração com suspensão específica: 2 a 8 meses, salvo prazo próprio; exame toxicológico: 3 meses.", "Prazo para defesa: não inferior a 30 dias."] },
    { h: "Transporte de crianças (Resolução 819/2021)" },
    { lista: ["Regulamenta o art. 64 do CTB: menores de 10 anos com menos de 1,45 m no banco traseiro, em dispositivo de retenção adequado ao peso e à altura.", "Prevê exceções, como veículo que só tenha banco dianteiro ou quando a quantidade de crianças exceder a capacidade do banco traseiro, situações em que a de maior estatura pode ir na frente, com dispositivo adequado.", "Descumprir é infração do art. 168 (gravíssima, retenção até regularização)."] },
    { h: "Medição de velocidade (Resolução 798/2020)" },
    { lista: ["Regulamenta os requisitos técnicos dos medidores de velocidade e a fiscalização.", "Os medidores precisam de aprovação de modelo e verificação pelo Inmetro.", "O valor considerado para autuação é o medido com desconto do erro máximo admissível: 7 km/h para velocidades medidas até 107 km/h e 7% acima disso.", "Disciplina a sinalização de regulamentação de velocidade nos trechos fiscalizados."] },
    { dica: "Em itens sobre resoluções, a banca troca números (0,05 por 0,3; 6 dg por 0,6 g). Faça uma folha com os números de cada resolução e revise antes de cada simulado." },
    { fonte: "Resoluções Contran 432/2013, 798/2020, 819/2021 e 844/2021; CTB, arts. 64, 165, 165-A, 168, 261 e 306." }
  ],
  checklist: ["Sei os limites de infração e de crime da Res. 432", "Sei os sinais de alteração da capacidade psicomotora", "Sei a pontuação e os prazos da Res. 844", "Sei a regra e as exceções do transporte de crianças", "Sei o desconto do erro dos medidores de velocidade", "Conferi a lista oficial de resoluções do edital"],
  questoes: [
    { tipo: "ce", enunciado: "Segundo a Resolução 432/2013, configura infração administrativa qualquer concentração de álcool por litro de sangue.", certo: true, explicacao: "Exame de sangue: qualquer concentração." },
    { tipo: "ce", enunciado: "Pelo etilômetro, a infração do art. 165 se configura a partir de 0,30 mg/L de ar alveolar.", certo: false, explicacao: "Infração: 0,05 mg/L (descontado o erro). 0,34 mg/L é o patamar do crime com o erro." },
    { tipo: "ce", enunciado: "A capacidade psicomotora alterada pode ser constatada por sinais observados pelo agente e registrados em termo próprio.", certo: true, explicacao: "Res. 432/2013." },
    { tipo: "ce", enunciado: "Na fiscalização eletrônica, para velocidade medida de 90 km/h, o desconto do erro máximo admissível é de 7 km/h.", certo: true, explicacao: "Até 107 km/h, desconto fixo de 7 km/h." },
    { tipo: "ce", enunciado: "Para velocidade medida de 150 km/h, o desconto do erro é de 7 km/h.", certo: false, explicacao: "Acima de 107 km/h, desconto de 7%: 10,5 km/h." },
    { tipo: "ce", enunciado: "O condutor que exerce atividade remunerada tem a suspensão aplicada ao atingir 40 pontos, independentemente da natureza das infrações.", certo: true, explicacao: "Art. 261, § 5º, e Res. 844/2021." },
    { tipo: "ce", enunciado: "Os medidores de velocidade dispensam verificação do Inmetro quando instalados por órgão federal.", certo: false, explicacao: "Exigem aprovação e verificação metrológica." },
    { tipo: "ce", enunciado: "O transporte de criança sem o dispositivo de retenção adequado configura infração gravíssima.", certo: true, explicacao: "Art. 168." },
    { tipo: "mc", enunciado: "Um medidor registrou 120 km/h. A velocidade considerada para autuação é:", opcoes: ["113 km/h", "111,6 km/h", "120 km/h", "108 km/h", "112 km/h"], correta: 1, explicacao: "Acima de 107: desconto de 7%. 120 × 0,93 = 111,6." },
    { tipo: "mc", enunciado: "Pela Res. 432/2013, é crime o resultado de exame de sangue igual ou superior a:", opcoes: ["0,05 g/L", "0,2 dg/L", "6 dg/L", "0,34 mg/L", "qualquer concentração"], correta: 2, explicacao: "6 decigramas por litro de sangue." }
  ]
}
});
