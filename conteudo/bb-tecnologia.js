/* Banco do Brasil, Agente de Tecnologia: Tecnologia da Informação (edital 2022) */
window.MODULOS = Object.assign(window.MODULOS || {}, {
TI1: {
  disciplina: "Tecnologia da Informação", titulo: "Aprendizagem de máquina e processamento de linguagem natural",
  objetivo: "Diferenciar os tipos de aprendizado, os principais algoritmos, a avaliação de modelos e as técnicas básicas de PLN.",
  edital: ["1 Aprendizagem de máquina: fundamentos básicos; noções de algoritmos de aprendizado supervisionados e não supervisionados; noções de processamento de linguagem natural"],
  porque: ["A Cesgranrio cobra conceitos e métricas, não matemática pesada: saber qual algoritmo serve para qual problema já resolve a maioria das questões."],
  conteudo: [
    { h: "Tipos de aprendizado" },
    { tabela: { cab: ["Tipo", "Dados", "Tarefas e algoritmos"], linhas: [
      ["Supervisionado", "Exemplos rotulados (entrada e resposta conhecida)", "Classificação (rótulo discreto: fraude ou não) e regressão (valor contínuo: limite de crédito). Algoritmos: regressão linear e logística, árvores de decisão, random forest, k-NN, SVM, Naive Bayes, redes neurais"],
      ["Não supervisionado", "Sem rótulos", "Agrupamento (k-means, hierárquico, DBSCAN), redução de dimensionalidade (PCA), regras de associação (Apriori), detecção de anomalias"],
      ["Por reforço", "Agente interage com ambiente e recebe recompensas", "Políticas de decisão sequencial (jogos, robótica)"]] } },
    { h: "Treino e avaliação" },
    { lista: ["Divisão em treino, validação e teste; validação cruzada k-fold usa k partições, treinando em k−1 e testando na restante.", "Overfitting (sobreajuste): o modelo decora o treino e generaliza mal; erro baixo no treino e alto no teste. Underfitting: modelo simples demais, erro alto nos dois.", "Remédios para overfitting: mais dados, regularização (L1, L2), poda de árvores, dropout em redes neurais, modelo mais simples.", "Pré-processamento: tratamento de valores faltantes, codificação de variáveis categóricas (one-hot), normalização ou padronização das escalas (importante para k-NN, SVM e k-means)."] },
    { h: "Métricas de classificação" },
    { tabela: { cab: ["Métrica", "Fórmula", "Quando importa"], linhas: [
      ["Acurácia", "(VP + VN) ÷ total", "Classes balanceadas"],
      ["Precisão", "VP ÷ (VP + FP)", "Quando falso positivo custa caro (bloquear cliente legítimo)"],
      ["Recall (sensibilidade)", "VP ÷ (VP + FN)", "Quando falso negativo custa caro (deixar passar fraude)"],
      ["F1", "2 × precisão × recall ÷ (precisão + recall)", "Equilíbrio entre os dois, classes desbalanceadas"]] } },
    { ex: "Modelo de fraude: VP = 40, FP = 10, FN = 20. Precisão = 40/50 = 0,8. Recall = 40/60 ≈ 0,67." },
    { p: "Em regressão: erro absoluto médio (MAE), erro quadrático médio (MSE), sua raiz (RMSE) e o coeficiente de determinação R²." },
    { h: "Algoritmos em uma linha" },
    { lista: ["k-NN: classifica pelo voto dos k vizinhos mais próximos; não tem fase de treino propriamente dita (aprendizado preguiçoso).", "k-means: escolhe k centroides e alterna entre atribuir pontos ao centroide mais próximo e recalcular centroides; k é definido antes.", "Árvore de decisão: divisões sucessivas pelos atributos que mais reduzem impureza (Gini, entropia); interpretável.", "Random forest: conjunto (ensemble) de árvores treinadas em amostras diferentes (bagging), com voto da maioria.", "Regressão logística: apesar do nome, é classificador; estima probabilidade com a função sigmoide.", "PCA: transforma variáveis correlacionadas em componentes principais não correlacionados, ordenados pela variância explicada."] },
    { h: "Processamento de linguagem natural" },
    { lista: ["Tokenização: dividir o texto em unidades (palavras, subpalavras).", "Remoção de stop words: palavras muito frequentes e pouco informativas (de, a, o).", "Stemming: corta a palavra até o radical (bancos → banc). Lematização: reduz à forma de dicionário (fomos → ir).", "Bag of words e TF-IDF: representações por contagem; TF-IDF pondera a frequência no documento pela raridade no conjunto.", "Embeddings (word2vec, GloVe): vetores densos em que palavras de sentido próximo ficam próximas.", "Transformers (BERT, GPT): modelos com mecanismo de atenção, base dos grandes modelos de linguagem.", "Tarefas: classificação de texto, análise de sentimentos, reconhecimento de entidades nomeadas (NER), tradução, sumarização, chatbots."] },
    { fonte: "Géron, Mãos à Obra: Aprendizado de Máquina com Scikit-Learn; documentação do scikit-learn; edital BB 2022." }
  ],
  checklist: ["Diferencio supervisionado, não supervisionado e por reforço", "Diferencio classificação e regressão", "Reconheço overfitting e sei como reduzi-lo", "Calculo precisão, recall e F1", "Sei como funcionam k-NN, k-means, árvore e random forest", "Diferencio stemming e lematização, bag of words, TF-IDF e embeddings"],
  questoes: [
    { tipo: "mc", enunciado: "Prever o valor do limite de crédito de um cliente a partir de dados históricos rotulados é tarefa de:", opcoes: ["agrupamento", "regressão", "classificação binária", "redução de dimensionalidade", "regras de associação"], correta: 1, explicacao: "Saída contínua, aprendizado supervisionado." },
    { tipo: "mc", enunciado: "Segmentar clientes em grupos com perfis semelhantes, sem rótulos prévios, é típico de:", opcoes: ["regressão logística", "k-means", "random forest", "SVM", "Naive Bayes"], correta: 1, explicacao: "Agrupamento não supervisionado." },
    { tipo: "mc", enunciado: "Um modelo com erro muito baixo no treino e alto no teste apresenta:", opcoes: ["underfitting", "overfitting", "boa generalização", "viés alto", "dados balanceados"], correta: 1, explicacao: "Sobreajuste." },
    { tipo: "mc", enunciado: "Com VP = 40, FP = 10 e FN = 20, a precisão do modelo é:", opcoes: ["0,50", "0,67", "0,80", "0,86", "0,40"], correta: 2, explicacao: "40/(40+10)." },
    { tipo: "mc", enunciado: "Com os mesmos dados (VP = 40, FP = 10, FN = 20), o recall é aproximadamente:", opcoes: ["0,50", "0,67", "0,80", "0,33", "0,90"], correta: 1, explicacao: "40/(40+20)." },
    { tipo: "mc", enunciado: "Em detecção de fraude, se o maior custo é deixar uma fraude passar, deve-se priorizar:", opcoes: ["precisão", "recall", "acurácia", "R²", "MSE"], correta: 1, explicacao: "Reduzir falsos negativos." },
    { tipo: "mc", enunciado: "O random forest é:", opcoes: ["um algoritmo de agrupamento", "um conjunto de árvores de decisão combinadas por votação", "uma técnica de PLN", "uma rede neural recorrente", "um método de redução de dimensionalidade"], correta: 1, explicacao: "Ensemble por bagging." },
    { tipo: "mc", enunciado: "Reduzir 'fomos' a 'ir' é exemplo de:", opcoes: ["stemming", "lematização", "tokenização", "remoção de stop words", "TF-IDF"], correta: 1, explicacao: "Forma de dicionário." },
    { tipo: "mc", enunciado: "A técnica que transforma variáveis correlacionadas em componentes não correlacionados ordenados pela variância é:", opcoes: ["k-NN", "PCA", "Apriori", "regressão linear", "árvore de decisão"], correta: 1, explicacao: "Análise de componentes principais." },
    { tipo: "mc", enunciado: "Identificar nomes de pessoas, empresas e locais em um texto é a tarefa de:", opcoes: ["análise de sentimentos", "reconhecimento de entidades nomeadas", "stemming", "sumarização", "clusterização"], correta: 1, explicacao: "NER." }
  ]
},

TI2: {
  disciplina: "Tecnologia da Informação", titulo: "Bancos de dados relacionais, modelagem e SQL",
  objetivo: "Modelar dados (ER e relacional), normalizar e escrever consultas SQL, com particularidades do PostgreSQL.",
  edital: ["2 Banco de dados: conceitos de BD e SGBD; modelagem conceitual (entidade-relacionamento); modelo relacional (conceitos básicos, normalização); linguagem SQL2008; PostgreSQL"],
  porque: ["SQL é o tópico mais cobrado de TI em provas de banco: leitura de consulta e resultado esperado."],
  conteudo: [
    { h: "Conceitos" },
    { lista: ["SGBD: software que gerencia o banco, garantindo independência de dados, controle de concorrência, recuperação, segurança e integridade.", "Arquitetura de três esquemas: externo (visões), conceitual (lógico) e interno (físico). Independência lógica e física.", "Transações ACID: atomicidade (tudo ou nada), consistência, isolamento e durabilidade."] },
    { h: "Modelo entidade-relacionamento" },
    { lista: ["Entidade (forte ou fraca: a fraca depende de outra para ser identificada), atributo (simples, composto, multivalorado, derivado, chave) e relacionamento.", "Cardinalidade: 1:1, 1:N e N:N. Na passagem para o relacional, N:N vira tabela associativa com as chaves das duas entidades.", "Participação total ou parcial; especialização e generalização."] },
    { h: "Modelo relacional" },
    { lista: ["Relação (tabela), tupla (linha), atributo (coluna), domínio.", "Superchave, chave candidata (superchave mínima), chave primária (escolhida, sem nulos) e chave estrangeira (referencia a primária de outra tabela).", "Integridade de entidade (PK não nula e única) e referencial (FK aponta para valor existente ou é nula)."] },
    { h: "Normalização" },
    { tabela: { cab: ["Forma normal", "Exige"], linhas: [
      ["1FN", "Atributos atômicos, sem grupos repetitivos ou multivalorados"],
      ["2FN", "1FN e nenhum atributo não chave dependente de parte de uma chave composta (sem dependência parcial)"],
      ["3FN", "2FN e nenhum atributo não chave dependente de outro atributo não chave (sem dependência transitiva)"],
      ["FNBC", "Todo determinante é chave candidata"]] } },
    { h: "SQL: grupos de comandos" },
    { tabela: { cab: ["Grupo", "Comandos"], linhas: [["DDL", "CREATE, ALTER, DROP, TRUNCATE"], ["DML", "SELECT, INSERT, UPDATE, DELETE (e MERGE)"], ["DCL", "GRANT, REVOKE"], ["TCL", "COMMIT, ROLLBACK, SAVEPOINT"]] } },
    { h: "SELECT" },
    { formula: "SELECT colunas FROM tabela [JOIN ...] WHERE filtro_de_linhas GROUP BY grupo HAVING filtro_de_grupos ORDER BY ordem" },
    { lista: ["Ordem lógica de execução: FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.", "WHERE filtra linhas antes do agrupamento; HAVING filtra grupos e pode usar funções de agregação.", "COUNT(*) conta linhas; COUNT(coluna) ignora nulos. SUM, AVG, MIN e MAX também ignoram nulos.", "NULL não se compara com =: use IS NULL ou IS NOT NULL.", "INNER JOIN: só pares com correspondência. LEFT JOIN: todas as linhas da esquerda, com nulos onde não há correspondência. FULL OUTER JOIN: todas de ambos os lados. CROSS JOIN: produto cartesiano.", "UNION remove duplicatas; UNION ALL mantém.", "Subconsultas com IN, EXISTS, ANY, ALL; subconsulta correlacionada referencia a consulta externa.", "Funções de janela (OVER, PARTITION BY, ROW_NUMBER, RANK) calculam valores por linha sem agrupar.", "SQL:2008 padronizou a limitação de linhas com OFFSET ... FETCH FIRST n ROWS ONLY."] },
    { ex: "SELECT agencia, COUNT(*) AS qtd FROM contas WHERE saldo > 0 GROUP BY agencia HAVING COUNT(*) > 100 ORDER BY qtd DESC;  → agências com mais de 100 contas de saldo positivo, da maior para a menor." },
    { h: "PostgreSQL" },
    { lista: ["SGBD objeto-relacional de código aberto, com controle de concorrência MVCC (multiversão).", "Tipos úteis: SERIAL ou GENERATED AS IDENTITY para autoincremento, JSONB para documentos, arrays, UUID.", "LIMIT e OFFSET (além do padrão FETCH FIRST); ILIKE para busca sem distinguir maiúsculas; INSERT ... RETURNING devolve linhas inseridas; ON CONFLICT para upsert.", "Schemas organizam objetos dentro de um banco; o padrão é public."] },
    { fonte: "Elmasri e Navathe, Sistemas de Banco de Dados; documentação do PostgreSQL; edital BB 2022." }
  ],
  checklist: ["Sei ACID e a arquitetura de três esquemas", "Converto ER em relacional, inclusive N:N", "Diferencio chave candidata, primária e estrangeira", "Identifico violações de 1FN, 2FN e 3FN", "Sei a ordem lógica do SELECT e WHERE x HAVING", "Sei os tipos de JOIN, COUNT com nulos e recursos do PostgreSQL"],
  questoes: [
    { tipo: "mc", enunciado: "A propriedade ACID que garante que uma transação seja executada por completo ou não tenha efeito algum é a:", opcoes: ["consistência", "isolamento", "atomicidade", "durabilidade", "disponibilidade"], correta: 2, explicacao: "Atomicidade." },
    { tipo: "mc", enunciado: "Uma tabela com chave composta (pedido, produto) e o atributo nome_produto, que depende só de produto, viola a:", opcoes: ["1FN", "2FN", "3FN apenas", "FNBC apenas", "nenhuma forma normal"], correta: 1, explicacao: "Dependência parcial." },
    { tipo: "mc", enunciado: "Em uma tabela de clientes, cidade depende de cep, que não é chave. Isso caracteriza dependência:", opcoes: ["parcial, violando a 2FN", "transitiva, violando a 3FN", "multivalorada", "funcional total válida na 3FN", "de inclusão"], correta: 1, explicacao: "Não chave → não chave." },
    { tipo: "mc", enunciado: "Para filtrar grupos cuja soma de saldos supera R$ 1 milhão, usa-se:", opcoes: ["WHERE SUM(saldo) > 1000000", "HAVING SUM(saldo) > 1000000", "ORDER BY SUM(saldo)", "GROUP BY saldo > 1000000", "DISTINCT SUM(saldo)"], correta: 1, explicacao: "Filtro de agregação vai no HAVING." },
    { tipo: "mc", enunciado: "A coluna email tem 10 linhas, 3 delas nulas. COUNT(*) e COUNT(email) retornam, respectivamente:", opcoes: ["10 e 10", "7 e 10", "10 e 7", "7 e 7", "10 e 3"], correta: 2, explicacao: "COUNT(coluna) ignora nulos." },
    { tipo: "mc", enunciado: "Para listar todos os clientes, inclusive os sem conta, junto com suas contas, usa-se:", opcoes: ["INNER JOIN", "clientes LEFT JOIN contas", "CROSS JOIN", "contas INNER JOIN clientes", "UNION"], correta: 1, explicacao: "LEFT JOIN preserva a tabela da esquerda." },
    { tipo: "mc", enunciado: "A forma correta de selecionar registros sem telefone (valor nulo) é:", opcoes: ["WHERE telefone = NULL", "WHERE telefone IS NULL", "WHERE telefone == ''", "WHERE NULL(telefone)", "WHERE telefone <> NULL"], correta: 1, explicacao: "Use IS NULL." },
    { tipo: "mc", enunciado: "GRANT e REVOKE pertencem ao grupo:", opcoes: ["DDL", "DML", "DCL", "TCL", "DQL"], correta: 2, explicacao: "Controle de acesso." },
    { tipo: "mc", enunciado: "Um relacionamento N:N entre Cliente e Produto, ao ser mapeado para o modelo relacional, gera:", opcoes: ["uma chave estrangeira em Cliente", "uma chave estrangeira em Produto", "uma tabela associativa com as chaves de ambos", "a fusão das duas tabelas", "nenhuma tabela adicional"], correta: 2, explicacao: "Tabela de ligação." },
    { tipo: "mc", enunciado: "No PostgreSQL, a cláusula que devolve as linhas afetadas por um INSERT é:", opcoes: ["OUTPUT", "RETURNING", "FETCH", "RESULT", "ECHO"], correta: 1, explicacao: "INSERT ... RETURNING." }
  ]
},

TI3: {
  disciplina: "Tecnologia da Informação", titulo: "NoSQL, MongoDB, data warehouse e big data",
  objetivo: "Diferenciar os modelos NoSQL, operar o MongoDB, modelar dados dimensionais e preparar dados em cenários de big data.",
  edital: ["2 Banco de dados: MongoDB; NoSQL (conceitos básicos, bancos orientados a grafos, colunas, chave/valor e documentos); Data Warehouse (modelagem conceitual, dados multidimensionais)", "3 Big data: fundamentos; técnicas de preparação e apresentação de dados"],
  porque: ["A Cesgranrio cobra a categoria correta de cada banco NoSQL e a modelagem estrela."],
  conteudo: [
    { h: "NoSQL" },
    { tabela: { cab: ["Modelo", "Como armazena", "Exemplos e usos"], linhas: [
      ["Chave-valor", "Pares chave → valor opaco", "Redis, DynamoDB; cache, sessões"],
      ["Documentos", "Documentos JSON/BSON com estrutura flexível", "MongoDB; cadastros, catálogos"],
      ["Colunar (família de colunas)", "Linhas com famílias de colunas, armazenamento por coluna", "Cassandra, HBase; grandes volumes de escrita, séries temporais"],
      ["Grafos", "Nós e arestas com propriedades", "Neo4j; redes de relacionamento, detecção de fraude em cadeia"]] } },
    { lista: ["Teorema CAP: em presença de partição de rede, um sistema distribuído escolhe entre consistência e disponibilidade.", "BASE (basicamente disponível, estado flexível, consistência eventual) contrasta com ACID.", "Escalabilidade horizontal (mais máquinas) é ponto forte do NoSQL."] },
    { h: "MongoDB" },
    { lista: ["Hierarquia: banco → coleção → documento (BSON). Cada documento tem _id único, por padrão um ObjectId.", "Inserir: db.clientes.insertOne({nome: 'Ana', idade: 30}).", "Consultar: db.clientes.find({idade: {$gt: 25}}, {nome: 1}) — o segundo argumento é a projeção.", "Operadores: $eq, $ne, $gt, $gte, $lt, $lte, $in, $and, $or, $exists.", "Atualizar: db.clientes.updateOne({nome: 'Ana'}, {$set: {idade: 31}}). Sem $set, o documento seria substituído (replaceOne).", "Agregação: pipeline de estágios como $match, $group, $sort, $project, $lookup (junção com outra coleção), $unwind.", "Índices aceleram consultas; replica set dá alta disponibilidade; sharding distribui dados horizontalmente."] },
    { h: "Data warehouse" },
    { tabela: { cab: ["", "OLTP (transacional)", "OLAP (analítico)"], linhas: [["Uso", "Operações do dia a dia", "Análise e decisão"], ["Dados", "Atuais, detalhados, normalizados", "Históricos, integrados, frequentemente desnormalizados"], ["Operações", "Muitas inserções e atualizações curtas", "Consultas complexas de leitura"]] } },
    { lista: ["Características (Inmon): orientado a assunto, integrado, variável no tempo e não volátil.", "Modelagem dimensional (Kimball): tabela fato (medidas numéricas do processo, como valor e quantidade) ligada a tabelas dimensão (contexto: tempo, cliente, produto, agência).", "Esquema estrela: dimensões desnormalizadas ligadas diretamente ao fato. Floco de neve: dimensões normalizadas em subtabelas.", "Granularidade: nível de detalhe de cada linha do fato.", "Operações OLAP: drill-down (mais detalhe), roll-up (menos detalhe, agregando), slice (fixa um valor de uma dimensão), dice (subcubo com filtros em várias dimensões), pivot (gira os eixos).", "ETL: extração, transformação e carga. Data mart: subconjunto departamental do DW."] },
    { h: "Big data" },
    { lista: ["Vs: volume, velocidade, variedade, veracidade e valor.", "Hadoop: HDFS (armazenamento distribuído) e MapReduce (processamento em lote). Spark: processamento em memória, mais rápido para iterações.", "Data lake: armazena dados brutos em qualquer formato, com esquema aplicado na leitura (schema-on-read); o DW aplica esquema na escrita.", "Preparação: limpeza, deduplicação, tratamento de faltantes (remover ou imputar), tratamento de outliers, padronização de formatos, normalização de escalas, codificação de categorias, criação de atributos.", "Apresentação: escolher o gráfico pelo objetivo (linha para tendência no tempo, barras para comparação, dispersão para relação entre variáveis, histograma para distribuição), dashboards e storytelling com dados."] },
    { fonte: "Documentação do MongoDB; Kimball e Ross, The Data Warehouse Toolkit; Inmon, Building the Data Warehouse; edital BB 2022." }
  ],
  checklist: ["Associo cada modelo NoSQL a exemplos e usos", "Explico CAP e BASE", "Escrevo find, updateOne com $set e um pipeline de agregação", "Diferencio OLTP e OLAP", "Diferencio fato e dimensão, estrela e floco de neve", "Sei as operações OLAP e os Vs do big data"],
  questoes: [
    { tipo: "mc", enunciado: "Para analisar cadeias de transferências entre contas e detectar anéis de fraude, o modelo NoSQL mais adequado é o de:", opcoes: ["chave-valor", "documentos", "família de colunas", "grafos", "relacional"], correta: 3, explicacao: "Relacionamentos são o foco." },
    { tipo: "mc", enunciado: "O MongoDB é um banco NoSQL orientado a:", opcoes: ["grafos", "documentos", "colunas", "chave-valor puro", "objetos relacionais"], correta: 1, explicacao: "Documentos BSON." },
    { tipo: "mc", enunciado: "No MongoDB, para alterar apenas o campo idade de um documento sem substituir os demais campos, usa-se:", opcoes: ["updateOne(filtro, {idade: 31})", "updateOne(filtro, {$set: {idade: 31}})", "insertOne({idade: 31})", "find({idade: 31})", "drop()"], correta: 1, explicacao: "$set altera só o campo." },
    { tipo: "mc", enunciado: "O estágio do pipeline de agregação do MongoDB que faz junção com outra coleção é:", opcoes: ["$match", "$group", "$lookup", "$project", "$sort"], correta: 2, explicacao: "$lookup." },
    { tipo: "mc", enunciado: "Na modelagem dimensional, o valor das vendas e a quantidade vendida ficam na tabela:", opcoes: ["dimensão tempo", "dimensão produto", "fato", "de staging", "de metadados"], correta: 2, explicacao: "Medidas ficam no fato." },
    { tipo: "mc", enunciado: "Passar da visão de vendas por ano para vendas por mês é a operação OLAP:", opcoes: ["roll-up", "drill-down", "slice", "pivot", "dice"], correta: 1, explicacao: "Mais detalhe." },
    { tipo: "mc", enunciado: "No esquema floco de neve, as dimensões são:", opcoes: ["eliminadas", "normalizadas em subtabelas", "sempre desnormalizadas", "fundidas com o fato", "armazenadas em grafos"], correta: 1, explicacao: "Diferença para a estrela." },
    { tipo: "mc", enunciado: "Pelo teorema CAP, durante uma partição de rede, o sistema distribuído deve escolher entre:", opcoes: ["custo e desempenho", "consistência e disponibilidade", "atomicidade e durabilidade", "escalabilidade e segurança", "volume e velocidade"], correta: 1, explicacao: "C ou A, dado P." },
    { tipo: "mc", enunciado: "Repositório que armazena dados brutos em vários formatos, aplicando esquema apenas na leitura, é o:", opcoes: ["data mart", "data lake", "OLTP", "esquema estrela", "cubo OLAP"], correta: 1, explicacao: "Schema-on-read." },
    { tipo: "mc", enunciado: "Uma característica do data warehouse segundo Inmon é ser:", opcoes: ["volátil", "orientado a transações", "não volátil", "restrito a dados atuais", "normalizado na 5FN"], correta: 2, explicacao: "Orientado a assunto, integrado, variável no tempo e não volátil." }
  ]
},

TI4: {
  disciplina: "Tecnologia da Informação", titulo: "Desenvolvimento mobile: Android, iOS e React Native",
  objetivo: "Conhecer os componentes e o ciclo de vida das plataformas Android e iOS e os fundamentos de Kotlin, Swift e React Native.",
  edital: ["4 Desenvolvimento mobile: linguagens/frameworks Java/Kotlin e Swift; React Native 0.59; sistemas Android API 30 e iOS Xcode 10"],
  porque: ["O app do BB é o principal canal do banco; o edital pede as três tecnologias."],
  conteudo: [
    { h: "Android" },
    { lista: ["Componentes fundamentais: Activity (tela), Service (tarefa em segundo plano), BroadcastReceiver (responde a eventos do sistema) e ContentProvider (compartilha dados entre apps).", "AndroidManifest.xml declara componentes, permissões e a activity inicial.", "Ciclo de vida da Activity: onCreate → onStart → onResume (em primeiro plano) → onPause → onStop → onDestroy; onRestart ao voltar de onStop.", "Intent explícita (indica a classe de destino) e implícita (indica uma ação; o sistema escolhe o app, ex.: abrir um link).", "Fragment: parte reutilizável da interface dentro de uma Activity.", "Permissões perigosas são pedidas em tempo de execução desde o Android 6 (API 23). A API 30 corresponde ao Android 11, que reforçou o armazenamento com escopo (scoped storage).", "Build com Gradle; interface em XML ou com Jetpack Compose (declarativa)."] },
    { h: "Kotlin" },
    { lista: ["val (referência imutável) e var (mutável).", "Segurança contra nulos: String não aceita null; String? aceita. Operadores: ?. (chamada segura), ?: (Elvis, valor padrão) e !! (força, lança exceção se nulo).", "data class gera equals, hashCode, toString e copy.", "Funções de extensão, lambdas e coroutines (concorrência leve, com suspend).", "Interoperável com Java e linguagem preferencial do Google para Android desde 2019."] },
    { h: "iOS e Swift" },
    { lista: ["Xcode: IDE da Apple; Info.plist guarda configurações do app; Interface Builder e storyboards no UIKit; SwiftUI é a alternativa declarativa.", "Ciclo do UIViewController: viewDidLoad (uma vez, após carregar a view) → viewWillAppear → viewDidAppear → viewWillDisappear → viewDidDisappear.", "Swift: let (constante) e var (variável); optionals (String?) com desembrulho seguro por if let e guard let; ! força o desembrulho.", "struct é tipo de valor (copiado na atribuição); class é tipo de referência. Protocolos definem contratos (semelhantes a interfaces).", "Gerenciamento de memória por ARC (contagem automática de referências); referências weak evitam ciclos."] },
    { h: "React Native" },
    { lista: ["Framework que usa JavaScript (ou TypeScript) e React para gerar apps com componentes nativos de Android e iOS a partir de um código comum.", "Componentes básicos: View, Text, Image, TextInput, ScrollView, FlatList (listas longas com renderização sob demanda).", "props: dados recebidos do componente pai, somente leitura. state: dados internos que, ao mudar, provocam nova renderização.", "Hooks (desde React 16.8, já disponível no React Native 0.59): useState para estado e useEffect para efeitos colaterais.", "Estilos com StyleSheet.create e Flexbox; no React Native o flexDirection padrão é column.", "Na arquitetura clássica (como na versão 0.59), JavaScript e código nativo se comunicam por uma ponte (bridge) assíncrona."] },
    { fonte: "Documentação oficial do Android (developer.android.com), da Apple (Swift e UIKit) e do React Native; edital BB 2022." }
  ],
  checklist: ["Sei os quatro componentes do Android e o papel do Manifest", "Sei o ciclo de vida da Activity em ordem", "Diferencio Intent explícita e implícita", "Uso null safety em Kotlin", "Sei optionals, struct x class e o ciclo do UIViewController em Swift", "Diferencio props e state e conheço useState e useEffect"],
  questoes: [
    { tipo: "mc", enunciado: "No Android, o método chamado quando a Activity é criada, onde normalmente se define o layout, é:", opcoes: ["onStart", "onResume", "onCreate", "onPause", "onDestroy"], correta: 2, explicacao: "onCreate." },
    { tipo: "mc", enunciado: "O componente Android que executa tarefas em segundo plano sem interface é:", opcoes: ["Activity", "Service", "Fragment", "ContentProvider", "Intent"], correta: 1, explicacao: "Service." },
    { tipo: "mc", enunciado: "Uma Intent que pede ao sistema para abrir um link, deixando que ele escolha o navegador, é:", opcoes: ["explícita", "implícita", "pendente obrigatória", "de broadcast local", "inválida"], correta: 1, explicacao: "Declara ação, não classe." },
    { tipo: "mc", enunciado: "Em Kotlin, a expressão val tamanho = nome?.length ?: 0, com nome nulo, resulta em:", opcoes: ["null", "0", "exceção NullPointerException", "erro de compilação", "-1"], correta: 1, explicacao: "?. retorna null e o Elvis devolve 0." },
    { tipo: "mc", enunciado: "Em Kotlin, o operador que força o acesso e lança exceção se o valor for nulo é:", opcoes: ["?.", "?:", "!!", "::", "as?"], correta: 2, explicacao: "Not-null assertion." },
    { tipo: "mc", enunciado: "Em Swift, struct difere de class porque struct é:", opcoes: ["tipo de referência", "tipo de valor, copiado na atribuição", "sempre opcional", "exclusiva do Objective-C", "incapaz de ter métodos"], correta: 1, explicacao: "Value type." },
    { tipo: "mc", enunciado: "No UIViewController, o método chamado uma única vez após a view ser carregada na memória é:", opcoes: ["viewWillAppear", "viewDidAppear", "viewDidLoad", "viewWillDisappear", "loadView sempre"], correta: 2, explicacao: "viewDidLoad." },
    { tipo: "mc", enunciado: "Em React Native, os dados recebidos de um componente pai, que não devem ser alterados pelo filho, são:", opcoes: ["state", "props", "hooks", "styles", "refs obrigatórios"], correta: 1, explicacao: "props." },
    { tipo: "mc", enunciado: "O hook do React usado para executar efeitos colaterais, como buscar dados de uma API após a renderização, é:", opcoes: ["useState", "useEffect", "useMemo", "useRef", "useContext"], correta: 1, explicacao: "useEffect." },
    { tipo: "mc", enunciado: "No React Native, o valor padrão de flexDirection é:", opcoes: ["row", "column", "row-reverse", "wrap", "none"], correta: 1, explicacao: "Diferente da web, onde é row." }
  ]
},

TI5: {
  disciplina: "Tecnologia da Informação", titulo: "Estruturas de dados e algoritmos",
  objetivo: "Aplicar buscas, algoritmos de ordenação simples, listas encadeadas, pilhas, filas e árvores binárias, com análise de complexidade.",
  edital: ["5 Estrutura de dados e algoritmos: busca sequencial e busca binária sobre arrays; ordenação (bolha, seleção, inserção); lista encadeada; pilha; fila; noções sobre árvore binária"],
  porque: ["As questões pedem para simular o algoritmo à mão: quantas comparações, qual o estado após uma passada, qual a ordem de visita."],
  conteudo: [
    { h: "Complexidade" },
    { p: "A notação O descreve como o custo cresce com n no pior caso. Ordem crescente: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)." },
    { h: "Buscas" },
    { tabela: { cab: ["Busca", "Pré-requisito", "Pior caso"], linhas: [["Sequencial", "Nenhum", "O(n): n comparações"], ["Binária", "Vetor ordenado e acesso por índice", "O(log n): cerca de ⌊log₂ n⌋ + 1 comparações"]] } },
    { ex: "Busca binária em 1.000 elementos: no máximo 10 comparações (2¹⁰ = 1.024). Em 1.000.000: no máximo 20." },
    { h: "Ordenação simples" },
    { tabela: { cab: ["Algoritmo", "Ideia", "Pior caso", "Melhor caso", "Estável?"], linhas: [
      ["Bolha (bubble)", "Compara vizinhos e troca; a cada passada o maior 'sobe' para o fim", "O(n²)", "O(n) com flag de parada", "Sim"],
      ["Seleção (selection)", "Seleciona o menor do restante e coloca na posição", "O(n²)", "O(n²)", "Não (na versão usual)"],
      ["Inserção (insertion)", "Insere cada elemento na posição correta da parte já ordenada", "O(n²)", "O(n), vetor já ordenado", "Sim"]] } },
    { ex: "Bolha em [5, 1, 4, 2]: 1ª passada → [1, 4, 2, 5]. Seleção em [5, 1, 4, 2]: 1º passo troca 5 e 1 → [1, 5, 4, 2]." },
    { h: "Estruturas lineares" },
    { lista: ["Lista encadeada: nós com valor e ponteiro para o próximo. Inserção no início em O(1); acesso ao i-ésimo em O(n). Duplamente encadeada tem ponteiro para o anterior também.", "Pilha (LIFO): push empilha, pop desempilha o último inserido. Usos: desfazer, chamadas de função, avaliação de expressões.", "Fila (FIFO): enqueue no fim, dequeue no início. Usos: filas de impressão, processamento em ordem de chegada."] },
    { ex: "Pilha: push 1, push 2, pop, push 3, push 4, pop, pop. Saem 2, 4, 3; resta [1]." },
    { h: "Árvore binária" },
    { lista: ["Cada nó tem até dois filhos. Árvore binária de busca (ABB): à esquerda valores menores, à direita maiores.", "Busca, inserção e remoção em O(log n) se balanceada; O(n) no pior caso (degenerada, como inserir em ordem crescente).", "Percursos: pré-ordem (raiz, esquerda, direita), em-ordem (esquerda, raiz, direita; numa ABB dá os valores em ordem crescente) e pós-ordem (esquerda, direita, raiz).", "Altura: maior número de arestas da raiz a uma folha."] },
    { ex: "ABB com raiz 8, filhos 3 e 10; 3 tem filhos 1 e 6; 10 tem filho direito 14. Pré-ordem: 8 3 1 6 10 14. Em-ordem: 1 3 6 8 10 14. Pós-ordem: 1 6 3 14 10 8." },
    { fonte: "Cormen et al., Algoritmos: Teoria e Prática; Ziviani, Projeto de Algoritmos; edital BB 2022." }
  ],
  checklist: ["Ordeno classes de complexidade", "Calculo o máximo de comparações da busca binária", "Simulo bolha, seleção e inserção", "Sei melhor e pior caso e estabilidade", "Simulo pilha e fila", "Faço os três percursos de uma árvore binária"],
  questoes: [
    { tipo: "mc", enunciado: "Em um vetor ordenado com 1.000 elementos, a busca binária faz no máximo:", opcoes: ["5 comparações", "10 comparações", "100 comparações", "500 comparações", "1.000 comparações"], correta: 1, explicacao: "⌊log₂ 1000⌋ + 1 = 10." },
    { tipo: "mc", enunciado: "A busca binária exige que o vetor:", opcoes: ["tenha tamanho par", "esteja ordenado", "não tenha repetidos", "seja uma lista encadeada", "tenha menos de 1.000 elementos"], correta: 1, explicacao: "Pré-requisito." },
    { tipo: "mc", enunciado: "Após a primeira passada completa do método da bolha (ordem crescente) sobre [5, 1, 4, 2], o vetor fica:", opcoes: ["[1, 5, 4, 2]", "[1, 4, 2, 5]", "[1, 2, 4, 5]", "[5, 4, 2, 1]", "[1, 4, 5, 2]"], correta: 1, explicacao: "5 sobe até o fim." },
    { tipo: "mc", enunciado: "O algoritmo de ordenação simples que tem melhor caso O(n) quando o vetor já está ordenado, sem precisar de flag extra, é o:", opcoes: ["seleção", "inserção", "bolha sem flag", "busca binária", "quicksort"], correta: 1, explicacao: "Inserção faz uma comparação por elemento." },
    { tipo: "mc", enunciado: "Qual dos métodos abaixo não é estável na sua implementação usual?", opcoes: ["bolha", "inserção", "seleção", "merge sort", "todos são estáveis"], correta: 2, explicacao: "A troca a distância pode inverter iguais." },
    { tipo: "mc", enunciado: "Pilha vazia: push 1, push 2, pop, push 3, push 4, pop, pop. A sequência de elementos removidos é:", opcoes: ["1, 2, 3", "2, 4, 3", "2, 3, 4", "4, 3, 2", "1, 4, 3"], correta: 1, explicacao: "LIFO." },
    { tipo: "mc", enunciado: "Fila vazia: enqueue A, enqueue B, enqueue C, dequeue, enqueue D. O próximo a sair é:", opcoes: ["A", "B", "C", "D", "a fila está vazia"], correta: 1, explicacao: "Saiu A; o próximo é B." },
    { tipo: "mc", enunciado: "Na ABB com raiz 8, filhos 3 e 10, em que 3 tem filhos 1 e 6 e 10 tem filho direito 14, o percurso em pré-ordem é:", opcoes: ["1 3 6 8 10 14", "8 3 1 6 10 14", "1 6 3 14 10 8", "8 10 14 3 6 1", "3 1 6 8 10 14"], correta: 1, explicacao: "Raiz, esquerda, direita." },
    { tipo: "mc", enunciado: "Em uma árvore binária de busca, o percurso que retorna as chaves em ordem crescente é:", opcoes: ["pré-ordem", "em-ordem", "pós-ordem", "em largura", "nenhum"], correta: 1, explicacao: "Esquerda, raiz, direita." },
    { tipo: "mc", enunciado: "Acessar o i-ésimo elemento de uma lista simplesmente encadeada tem custo:", opcoes: ["O(1)", "O(log n)", "O(n)", "O(n²)", "O(n log n)"], correta: 2, explicacao: "Percorre do início." }
  ]
},

TI6: {
  disciplina: "Tecnologia da Informação", titulo: "Linguagens e ferramentas: Python para dados, Java, TypeScript e Ansible",
  objetivo: "Ler e prever a saída de trechos em Python, Java e TypeScript e conhecer as bibliotecas de dados e a automação com Ansible.",
  edital: ["6 Ferramentas e linguagens de programação para manipulação de dados: Ansible; Java (SE 11 e EE 8); TypeScript 4.0; Python 3.9 aplicada para IA/ML e Analytics (Pandas, NumPy, SciPy, Matplotlib e Scikit-learn)"],
  porque: ["Questões de código pedem a saída do trecho ou o método certo de uma biblioteca."],
  conteudo: [
    { h: "Python 3.9" },
    { lista: ["Tipos mutáveis: list, dict, set. Imutáveis: int, float, str, tuple. Atribuir uma lista a outra variável copia a referência, não a lista: b = a; b.append(4) altera a.", "Fatiamento: s[início:fim:passo], fim exclusivo; s[::-1] inverte.", "List comprehension: [x*x for x in range(4)] → [0, 1, 4, 9].", "Python 3.9 introduziu os operadores | e |= para unir dicionários.", "Funções: def, argumentos padrão, *args, **kwargs; lambda para funções curtas."] },
    { h: "Bibliotecas de dados" },
    { tabela: { cab: ["Biblioteca", "Para quê", "Exemplos"], linhas: [
      ["NumPy", "Arrays n-dimensionais e operações vetorizadas", "np.array([1,2,3]) * 2 → [2 4 6]; a.shape; broadcasting"],
      ["Pandas", "Tabelas (DataFrame) e séries", "pd.read_csv; df.head(); df.loc[rótulos]; df.iloc[posições]; df.groupby('agencia')['saldo'].mean(); df.isnull(); df.dropna(); df.fillna(0); pd.merge"],
      ["SciPy", "Rotinas científicas", "scipy.stats (testes e distribuições), otimização, integração"],
      ["Matplotlib", "Gráficos", "plt.plot, plt.bar, plt.hist, plt.scatter, plt.show()"],
      ["Scikit-learn", "Aprendizado de máquina", "train_test_split; modelo.fit(X, y); modelo.predict(X); StandardScaler().fit_transform(X); métricas em sklearn.metrics"]] } },
    { h: "Java SE 11 e EE 8" },
    { lista: ["Orientação a objetos: encapsulamento, herança (simples entre classes, com extends), polimorfismo e abstração. Uma classe pode implementar várias interfaces (implements).", "Modificadores de acesso: private (classe), padrão sem modificador (pacote), protected (pacote e subclasses), public.", "String é imutável. == compara referências; equals compara conteúdo.", "var para inferência de tipo em variáveis locais (desde o Java 10).", "Coleções: ArrayList (lista indexada), HashMap (chave-valor), HashSet (sem repetição).", "Exceções verificadas (checked, devem ser tratadas ou declaradas com throws) e não verificadas (RuntimeException).", "Java EE 8 (hoje Jakarta EE): Servlets, JPA (persistência objeto-relacional), CDI (injeção de dependência), JAX-RS (APIs REST), Bean Validation."] },
    { h: "TypeScript 4.0" },
    { lista: ["Superconjunto do JavaScript com tipagem estática opcional; é compilado (transpilado) para JavaScript pelo tsc.", "interface e type descrevem formatos de objetos; propriedades opcionais com ?.", "Tipos união (string | number), literais, tuplas, enum e genéricos (function f<T>(x: T): T).", "any desliga a verificação; unknown exige verificação de tipo (narrowing) antes do uso.", "A versão 4.0 trouxe, entre outras novidades, tuplas variádicas e elementos de tupla rotulados."] },
    { h: "Ansible" },
    { lista: ["Ferramenta de automação de configuração, provisionamento e implantação, sem agente instalado nos hosts gerenciados (agentless): conecta por SSH (ou WinRM no Windows).", "Inventário: lista de hosts e grupos. Playbook: arquivo YAML com plays e tarefas. Módulos executam as ações (apt, yum, copy, service, user).", "Idempotência: executar o mesmo playbook várias vezes leva ao mesmo estado final, sem repetir mudanças.", "Roles organizam tarefas, variáveis, templates e handlers reutilizáveis; handlers são acionados por notify quando algo muda."] },
    { fonte: "Documentação oficial de Python, Pandas, NumPy, SciPy, Matplotlib, scikit-learn, Java, TypeScript e Ansible; edital BB 2022." }
  ],
  checklist: ["Prevejo saídas com listas, fatias e comprehensions", "Diferencio loc e iloc e uso groupby, dropna e fillna", "Sei fit, predict e train_test_split", "Diferencio == e equals e checked x unchecked em Java", "Diferencio any e unknown no TypeScript", "Explico agentless, playbook, inventário e idempotência no Ansible"],
  questoes: [
    { tipo: "mc", base: "a = [1, 2, 3]\nb = a\nb.append(4)\nprint(len(a))", enunciado: "Qual a saída do código Python acima?", opcoes: ["3", "4", "erro", "[1, 2, 3, 4]", "None"], correta: 1, explicacao: "b referencia a mesma lista." },
    { tipo: "mc", enunciado: "Em Python, [x * x for x in range(4)] produz:", opcoes: ["[1, 4, 9, 16]", "[0, 1, 4, 9]", "[0, 1, 2, 3]", "[0, 2, 4, 6]", "[1, 2, 3, 4]"], correta: 1, explicacao: "range(4) = 0..3." },
    { tipo: "mc", enunciado: "Em Python, 'banco'[::-1] resulta em:", opcoes: ["'banco'", "'ocnab'", "'b'", "'o'", "erro"], correta: 1, explicacao: "Passo −1 inverte." },
    { tipo: "mc", enunciado: "No Pandas, para selecionar linhas pela posição inteira (0, 1, 2...), independentemente do índice, usa-se:", opcoes: ["df.loc", "df.iloc", "df.at", "df.ix", "df.query"], correta: 1, explicacao: "iloc é posicional." },
    { tipo: "mc", enunciado: "No Pandas, para calcular o saldo médio por agência usa-se:", opcoes: ["df.mean('agencia')", "df.groupby('agencia')['saldo'].mean()", "df['saldo'].groupby().mean('agencia')", "df.pivot('saldo')", "df.merge('agencia')"], correta: 1, explicacao: "groupby + agregação." },
    { tipo: "mc", enunciado: "No scikit-learn, o método que treina o modelo com os dados é:", opcoes: ["predict", "fit", "transform", "score", "split"], correta: 1, explicacao: "fit(X, y)." },
    { tipo: "mc", base: "String a = \"bb\";\nString b = new String(\"bb\");\nSystem.out.println((a == b) + \" \" + a.equals(b));", enunciado: "Em Java, o trecho imprime:", opcoes: ["true true", "false true", "true false", "false false", "erro de compilação"], correta: 1, explicacao: "Objetos distintos; conteúdo igual." },
    { tipo: "mc", enunciado: "Em Java, uma classe pode:", opcoes: ["herdar de várias classes", "implementar várias interfaces", "não implementar interfaces", "herdar de interfaces com extends apenas", "ter herança múltipla de classes abstratas"], correta: 1, explicacao: "Herança simples de classe, múltiplas interfaces." },
    { tipo: "mc", enunciado: "No TypeScript, o tipo que aceita qualquer valor mas exige verificação de tipo antes do uso é:", opcoes: ["any", "unknown", "never", "void", "object"], correta: 1, explicacao: "unknown é a versão segura de any." },
    { tipo: "mc", enunciado: "O Ansible é considerado agentless porque:", opcoes: ["não usa arquivos de configuração", "não exige agente instalado nos hosts gerenciados, conectando-se por SSH", "só funciona na nuvem", "dispensa inventário", "executa apenas localmente"], correta: 1, explicacao: "Conexão por SSH/WinRM." }
  ]
}
});
