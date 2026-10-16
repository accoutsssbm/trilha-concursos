# Trilha Concursos

Plataforma de estudo para três concursos, no mesmo formato da Trilha GFC: fases, módulos em ciclo PDCA, teste por módulo e prova anterior no fim de cada fase. Cada pessoa cria o próprio acesso e escolhe a trilha que vai estudar.

| Trilha | Cargo | Banca do último edital | Base |
|---|---|---|---|
| PRF | Policial Rodoviário Federal | Cebraspe (certo/errado) | Edital PRF nº 1/2021 |
| Banco do Brasil | Escriturário · Agente Comercial | Cesgranrio | Edital BB nº 1/2022 |
| Banco do Brasil | Escriturário · Agente de Tecnologia | Cesgranrio | Edital BB nº 1/2022 |
| Detran-PA | Agente de Fiscalização de Trânsito (nível médio) | Fadesp | Edital nº 01/SEAD-DETRAN/PA/2018 |
| Detran-PA | Agente de Educação de Trânsito (nível médio) | Fadesp | Edital nº 01/SEAD-DETRAN/PA/2018 |

O Detran-PA não teve cargo de nível superior nesse concurso, por isso não há trilha de nível superior.

## Como cada módulo funciona

| Etapa | No módulo |
|---|---|
| P · Planejar | Objetivo, o que o edital pede, horas de estudo e nota mínima |
| D · Executar | Conteúdo completo, checklist e anotações. O prazo é calculado pelas horas por dia que a pessoa informa em Configurações |
| C · Checar | O teste libera quando o checklist fecha, quando o prazo vence ou quando a pessoa pede. Questões no estilo da banca: na PRF, item errado desconta um certo |
| A · Agir | Nota acima da mínima conclui o módulo. Abaixo, o módulo volta para revisão com metade do prazo |

A próxima fase só abre quando todos os módulos da fase atual estão concluídos e a pessoa registra o resultado da prova anterior indicada. Em Configurações dá para ligar a ordem livre e estudar em qualquer ordem.

## Arquivos

```
index.html            a aplicação
config.js             repositório onde fica a base de dados (sem token)
trilhas.js            as cinco trilhas: prova, regras, fases, módulos, horas e provas anteriores
conteudo/*.js         a biblioteca de módulos (86 módulos, 846 questões)
```

## Publicar (dois repositórios, como na Trilha GFC)

A página pode ser pública. A base de dados tem nomes e notas, então fica num repositório privado separado.

1. Crie o repositório privado `trilha-concursos-dados`, marcando *Add a README*.
2. Crie o repositório público `trilha-concursos` e suba `index.html`, `config.js`, `trilhas.js`, a pasta `conteudo` e este README.
3. Edite o `config.js`:
   ```js
   github: { owner: "SEU_USUARIO", repo: "trilha-concursos-dados", branch: "main", path: "data/db.json" }
   ```
4. No repositório do site: Settings → Pages → Deploy from a branch → `main` / root → Save. Em um ou dois minutos o site fica em `https://SEU_USUARIO.github.io/trilha-concursos/`.

O arquivo `data/db.json` é criado na primeira gravação.

## Token de cada pessoa

Cada pessoa que vai estudar precisa de um token próprio, com acesso só ao repositório de dados.

1. GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token.
2. Repository access → Only select repositories → `trilha-concursos-dados`.
3. Permissions → Repository permissions → Contents → Read and write.
4. Defina a validade e gere.
5. No site: na tela de login, Configurar armazenamento → cole o token → Testar conexão → Salvar e reconectar.

Para dar acesso a outra pessoa, gere um token separado para ela (ou adicione a conta dela como colaboradora do repositório de dados e peça que gere o próprio). Assim você revoga um acesso sem afetar os outros.

O token fica salvo só no navegador de quem colou. Nunca coloque o token no `config.js`.

## Primeiro acesso e rotina

1. Abra o site → Criar novo acesso → nome, trilha e PIN (4 a 8 dígitos).
2. Em Configurações, informe quantas horas por dia você estuda em cada dia da semana. Os prazos dos módulos saem daí.
3. Abra o módulo atual → Iniciar módulo → estude, marque o checklist, anote → faça o teste.
4. No fim de cada fase, resolva a prova anterior indicada (links oficiais em cada fase) e registre o resultado.

Outras telas: Dúvidas da turma (perguntas e respostas entre quem estuda junto), Banco de questões (criar questões próprias ou desativar alguma), Turma (avanço de cada pessoa), Trocar de trilha (o progresso de cada trilha fica guardado).

Sem o repositório preenchido no `config.js`, a base fica salva só no navegador de quem abriu. Serve para uma pessoa testar; para estudar em grupo, use o GitHub.

## Editar o conteúdo

- Horas, nota mínima, ordem e fase de cada módulo: `trilhas.js`.
- Texto e questões: `conteudo/*.js`. Questão objetiva tem `opcoes` (5) e `correta` (índice de 0 a 4); certo/errado tem `certo: true/false`; discursiva tem `esperado` e `peso`.
- As alternativas são embaralhadas na tela de forma fixa por questão; alternativas numéricas ficam em ordem crescente.

## Limites e cuidados

- Os três concursos estão sem edital aberto (situação conferida em 16/10/2026). As trilhas seguem o último edital de cada um. Quando sair edital novo, compare o conteúdo programático com a tela Edital e prova e ajuste os módulos.
- Pontos que não foram conferidos item a item e estão sinalizados nos próprios módulos: a lista oficial de resoluções do Contran do edital da PRF (CTB9), as Resoluções 607/2016 e 711/2017 e as cartilhas do antigo Denatran (RES2), o detalhamento da Resolução 886/2021 (RES1), a nova resolução de álcool aprovada em agosto de 2026 e a Política Socioambiental do Banco do Brasil (BAN6).
- Leis mudam. Antes da prova, confira os artigos marcados com alerta no texto compilado oficial.
- O PIN é uma trava de conveniência. Quem tem o token consegue editar o JSON direto no GitHub.
- O gabarito fica nos arquivos `conteudo/*.js`, públicos se o repositório do site for público.
- Configurações → Baixar base (.json) gera uma cópia de segurança.
