/* Informática — comum (BB Agente Comercial, PRF, Detran-PA) */
window.MODULOS = Object.assign(window.MODULOS || {}, {
INF1: {
  disciplina: "Informática", titulo: "Sistemas operacionais e gerenciamento de arquivos",
  objetivo: "Operar Windows 10 e Linux: organização de arquivos e pastas, atalhos, lixeira, permissões e comandos básicos de terminal.",
  edital: ["Windows 10 e Linux (SUSE SLES 15 SP2); organização e gerenciamento de arquivos, pastas e programas (BB)", "Windows (PRF)", "Conceitos de organização e gerenciamento de informações, arquivos, pastas e programas (Detran)"],
  porque: ["As bancas cobram atalhos e comportamento da lixeira com frequência.", "O BB pede Linux expressamente: comandos de terminal e permissões entram na prova."],
  conteudo: [
    { h: "Conceitos" },
    { lista: ["Sistema operacional gerencia hardware, memória, processos e arquivos e oferece a interface ao usuário.", "Arquivo tem nome e extensão (.docx, .xlsx, .pdf, .exe, .zip, .jpg); a extensão indica o programa associado.", "Pasta (diretório) organiza arquivos em hierarquia; o caminho absoluto começa na raiz (C:\\ no Windows, / no Linux).", "Atalho (.lnk) aponta para o arquivo; excluir o atalho não exclui o original."] },
    { h: "Windows 10: atalhos mais cobrados" },
    { tabela: { cab: ["Atalho", "Ação"], linhas: [
      ["Win + E", "Abre o Explorador de Arquivos"],
      ["Win + D", "Mostra a área de trabalho"],
      ["Win + L", "Bloqueia o computador"],
      ["Win + V", "Histórico da área de transferência"],
      ["Win + Shift + S", "Captura de parte da tela"],
      ["Ctrl + Shift + Esc", "Gerenciador de Tarefas"],
      ["Alt + Tab", "Alterna entre janelas abertas"],
      ["Ctrl + C / X / V / Z", "Copiar / recortar / colar / desfazer"],
      ["F2", "Renomear o item selecionado"],
      ["Delete / Shift + Delete", "Enviar para a lixeira / excluir permanentemente"]] } },
    { h: "Lixeira" },
    { lista: ["Arquivos excluídos do disco local vão para a lixeira e podem ser restaurados.", "Shift + Delete exclui sem passar pela lixeira.", "Itens apagados de pendrive, cartão de memória ou unidade de rede não vão para a lixeira do computador.", "Arquivos maiores que o espaço configurado para a lixeira são excluídos direto, com aviso."] },
    { h: "Copiar e mover arrastando" },
    { p: "No Windows, arrastar um arquivo para outra pasta da mesma unidade move; para outra unidade, copia. Com Ctrl pressionado, sempre copia; com Shift, sempre move; com Alt, cria atalho." },
    { h: "Linux" },
    { lista: ["É multiusuário, multitarefa e diferencia maiúsculas de minúsculas (Arquivo.txt ≠ arquivo.txt).", "Raiz única '/'. Pastas: /home (usuários), /etc (configurações), /bin e /usr/bin (programas), /var (logs e dados variáveis), /tmp (temporários), /root (pasta do administrador), /dev (dispositivos).", "Arquivos ocultos começam com ponto (.bashrc).", "O superusuário é o root; o comando sudo executa um comando com privilégio de administrador.", "No SUSE, o gerenciador de pacotes de linha de comando é o zypper e a ferramenta de administração gráfica é o YaST."] },
    { tabela: { cab: ["Comando", "Função"], linhas: [
      ["pwd", "Mostra a pasta atual"], ["ls / ls -la", "Lista arquivos (com ocultos e detalhes)"], ["cd", "Muda de pasta (cd .. sobe um nível)"],
      ["mkdir / rmdir", "Cria / remove pasta vazia"], ["cp / mv / rm", "Copia / move ou renomeia / remove"], ["cat / less", "Exibe conteúdo de arquivo"],
      ["grep", "Procura texto em arquivos"], ["chmod", "Altera permissões"], ["chown", "Altera o dono"], ["ps / top / kill", "Lista e encerra processos"]] } },
    { h: "Permissões no Linux" },
    { p: "Cada arquivo tem permissões de leitura (r = 4), escrita (w = 2) e execução (x = 1) para dono, grupo e outros. 'chmod 754 arq' dá rwx ao dono (7), r-x ao grupo (5) e r-- aos outros (4). Na listagem, '-rwxr-xr--' mostra isso; o primeiro caractere indica o tipo (- arquivo, d diretório, l link)." },
    { fonte: "Documentação Microsoft Windows 10; documentação SUSE Linux Enterprise Server 15." }
  ],
  checklist: ["Sei os atalhos de Windows mais cobrados", "Sei o comportamento da lixeira e do Shift + Delete", "Sei quando arrastar copia ou move", "Conheço a estrutura de pastas do Linux", "Sei os comandos básicos do terminal", "Interpreto permissões e o comando chmod"],
  questoes: [
    { tipo: "mc", enunciado: "No Windows 10, o atalho que bloqueia a sessão do usuário é:", opcoes: ["Win + D", "Win + E", "Win + L", "Ctrl + Alt + Tab", "Alt + F4"], correta: 2, explicacao: "Win + L bloqueia. Win + D mostra a área de trabalho e Win + E abre o Explorador." },
    { tipo: "mc", enunciado: "Um arquivo apagado de um pendrive no Windows:", opcoes: ["vai para a lixeira do computador", "vai para a lixeira do pendrive", "não vai para a lixeira", "fica oculto na mesma pasta", "só pode ser apagado com Shift + Delete"], correta: 2, explicacao: "Mídias removíveis não usam a lixeira do Windows." },
    { tipo: "mc", enunciado: "No Linux, o comando que mostra o diretório de trabalho atual é:", opcoes: ["ls", "cd", "pwd", "dir", "cat"], correta: 2, explicacao: "pwd (print working directory)." },
    { tipo: "mc", enunciado: "Após 'chmod 640 relatorio.txt', o grupo do arquivo terá permissão de:", opcoes: ["leitura e escrita", "somente leitura", "leitura e execução", "nenhuma", "leitura, escrita e execução"], correta: 1, explicacao: "6 dono (rw-), 4 grupo (r--), 0 outros (---)." },
    { tipo: "mc", enunciado: "No Windows, arrastar um arquivo para uma pasta em outra unidade de disco, sem teclas auxiliares:", opcoes: ["move o arquivo", "copia o arquivo", "cria um atalho", "exclui o arquivo original", "abre o arquivo"], correta: 1, explicacao: "Entre unidades diferentes, o padrão é copiar." },
    { tipo: "mc", enunciado: "No SUSE Linux Enterprise Server, o gerenciador de pacotes de linha de comando é o:", opcoes: ["apt", "yum", "zypper", "pacman", "brew"], correta: 2, explicacao: "SUSE usa zypper (e o YaST como ferramenta de administração)." },
    { tipo: "ce", enunciado: "No Linux, os nomes 'Relatorio.txt' e 'relatorio.txt' identificam o mesmo arquivo.", certo: false, explicacao: "O Linux diferencia maiúsculas de minúsculas." },
    { tipo: "ce", enunciado: "Excluir o atalho de um programa na área de trabalho do Windows remove o programa do computador.", certo: false, explicacao: "O atalho só aponta para o programa." },
    { tipo: "ce", enunciado: "No Linux, arquivos cujo nome começa com ponto são ocultos por padrão na listagem simples do comando ls.", certo: true, explicacao: "Use ls -a para exibi-los." },
    { tipo: "ce", enunciado: "A combinação Shift + Delete, no Windows, exclui o item selecionado sem enviá-lo para a lixeira.", certo: true, explicacao: "Exclusão permanente, com confirmação." }
  ]
},

INF2: {
  disciplina: "Informática", titulo: "Word, Excel e PowerPoint (Office 365)",
  objetivo: "Usar os recursos de edição de texto, planilha e apresentação mais cobrados, com foco em fórmulas e funções do Excel.",
  edital: ["Edição de textos, planilhas e apresentações: Word, Excel e PowerPoint, versão O365 (BB)"],
  porque: ["O Excel é o programa do Office mais cobrado pela Cesgranrio: referências, funções e mensagens de erro.", "Atalhos do Word em português aparecem com frequência e são diferentes dos atalhos em inglês."],
  conteudo: [
    { h: "Word: atalhos (Office em português)" },
    { tabela: { cab: ["Atalho", "Ação"], linhas: [
      ["Ctrl + N / I / S", "Negrito / itálico / sublinhado"],
      ["Ctrl + B", "Salvar"], ["Ctrl + A", "Abrir"], ["Ctrl + O", "Novo documento"], ["Ctrl + T", "Selecionar tudo"],
      ["Ctrl + E / Q / G / J", "Centralizar / alinhar à esquerda / à direita / justificar"],
      ["Ctrl + L / Ctrl + U", "Localizar / substituir"], ["Ctrl + P", "Imprimir"], ["Ctrl + K", "Inserir hiperlink"], ["Ctrl + Enter", "Quebra de página"], ["F7", "Revisão ortográfica"]] } },
    { lista: ["Quebra de seção permite orientação (retrato/paisagem), margens e cabeçalhos diferentes no mesmo documento.", "Estilos de título alimentam o sumário automático.", "Controlar alterações (guia Revisão) registra edições para aceitar ou rejeitar.", "Mala direta une um documento modelo a uma lista de dados."] },
    { h: "Excel: referências" },
    { tabela: { cab: ["Tipo", "Exemplo", "Ao copiar a fórmula"], linhas: [
      ["Relativa", "A1", "Linha e coluna mudam"],
      ["Absoluta", "$A$1", "Nada muda"],
      ["Mista", "$A1 ou A$1", "Muda só a parte sem $"],
      ["Outra planilha", "Plan2!A1", "Referência à aba Plan2"],
      ["Intervalo", "A1:A10", "Todas as células de A1 a A10"]] } },
    { ex: "Em C1 está =A1*$B$1. Copiando para C3, vira =A3*$B$1. A tecla F4 alterna entre os tipos de referência." },
    { h: "Funções mais cobradas" },
    { tabela: { cab: ["Função", "O que faz", "Exemplo"], linhas: [
      ["SOMA, MÉDIA, MÁXIMO, MÍNIMO", "Agregações básicas", "=SOMA(A1:A10)"],
      ["CONT.NÚM / CONT.VALORES / CONTAR.VAZIO", "Conta células numéricas / não vazias / vazias", "=CONT.VALORES(A:A)"],
      ["CONT.SE / SOMASE", "Conta / soma com critério", "=CONT.SE(B2:B50;\">7\")"],
      ["SE", "Teste lógico", "=SE(B2>=7;\"Aprovado\";\"Revisar\")"],
      ["E / OU", "Combinam testes", "=SE(E(B2>=7;C2>=7);\"Ok\";\"Não\")"],
      ["PROCV", "Busca vertical na 1ª coluna da tabela", "=PROCV(A2;Tabela;3;FALSO)"],
      ["PROCX (365)", "Busca em qualquer direção", "=PROCX(A2;Col_busca;Col_retorno)"],
      ["ARRED", "Arredonda", "=ARRED(3,456;2) → 3,46"],
      ["HOJE / AGORA", "Data atual / data e hora atuais", "=HOJE()"],
      ["CONCAT ou &", "Junta textos", "=A1&\" \"&B1"]] } },
    { h: "Mensagens de erro" },
    { tabela: { cab: ["Erro", "Causa"], linhas: [
      ["#DIV/0!", "Divisão por zero"], ["#N/D", "Valor não encontrado (comum no PROCV)"], ["#REF!", "Referência inválida (célula excluída)"],
      ["#NOME?", "Nome de função ou intervalo não reconhecido"], ["#VALOR!", "Tipo de dado errado na operação"], ["######", "Coluna estreita para exibir o número"]] } },
    { lista: ["Toda fórmula começa com '=' (também aceita '+' ou '−').", "Ordem das operações: parênteses, potência (^), multiplicação/divisão, soma/subtração, concatenação (&), comparação.", "Alça de preenchimento continua sequências (1, 2, 3…; jan, fev…) e copia fórmulas ajustando referências.", "Filtro mostra só as linhas que atendem a um critério; classificar reordena.", "Tabela dinâmica resume grandes volumes por categorias; formatação condicional muda a aparência conforme o valor."] },
    { h: "PowerPoint" },
    { lista: ["F5 inicia a apresentação do primeiro slide; Shift + F5, do slide atual.", "Modos de exibição: Normal, Classificação de Slides, Anotações, Modo de Leitura e Apresentação de Slides.", "Slide Mestre define o padrão visual de todos os slides.", "Transição é o efeito entre slides; animação é o efeito sobre um objeto dentro do slide.", "Ocultar slide faz com que ele não apareça na apresentação, mas continue no arquivo."] },
    { fonte: "Suporte Microsoft (atalhos do Office em português e funções do Excel)." }
  ],
  checklist: ["Sei os atalhos do Word em português", "Sei usar quebra de seção, estilos e controle de alterações", "Diferencio referências relativas, absolutas e mistas", "Uso SE, CONT.SE, SOMASE e PROCV", "Reconheço as mensagens de erro do Excel", "Diferencio transição de animação no PowerPoint"],
  questoes: [
    { tipo: "mc", enunciado: "Na célula C1 do Excel está a fórmula =A1*$B$1. Copiada para C3, ela se torna:", opcoes: ["=A1*$B$1", "=A3*$B$3", "=A3*$B$1", "=C3*$B$1", "=A3*B3"], correta: 2, explicacao: "A1 é relativa (vira A3); $B$1 é absoluta (não muda)." },
    { tipo: "mc", enunciado: "No Word em português, o atalho Ctrl + B executa:", opcoes: ["negrito", "salvar", "abrir", "buscar", "selecionar tudo"], correta: 1, explicacao: "No Office em português, Ctrl + B salva; negrito é Ctrl + N." },
    { tipo: "mc", enunciado: "A fórmula =SE(B2>=7;\"Aprovado\";\"Revisar\"), com B2 = 6,5, retorna:", opcoes: ["Aprovado", "Revisar", "FALSO", "#VALOR!", "6,5"], correta: 1, explicacao: "6,5 não é ≥ 7: retorna o valor-se-falso." },
    { tipo: "mc", enunciado: "O erro #N/D no Excel normalmente indica que:", opcoes: ["houve divisão por zero", "a referência foi excluída", "o valor procurado não foi encontrado", "a coluna está estreita", "o nome da função está errado"], correta: 2, explicacao: "#N/D = não disponível, típico do PROCV sem correspondência." },
    { tipo: "mc", enunciado: "Para contar quantas células do intervalo B2:B50 têm valor maior que 7, usa-se:", opcoes: ["=CONT.NÚM(B2:B50)", "=CONT.SE(B2:B50;\">7\")", "=SOMASE(B2:B50;\">7\")", "=CONT.VALORES(B2:B50)", "=SE(B2:B50>7)"], correta: 1, explicacao: "CONT.SE conta células que atendem ao critério." },
    { tipo: "mc", enunciado: "No PowerPoint, o atalho que inicia a apresentação a partir do slide atual é:", opcoes: ["F5", "Shift + F5", "Ctrl + F5", "F7", "Alt + F5"], correta: 1, explicacao: "F5 começa do primeiro slide; Shift + F5, do atual." },
    { tipo: "ce", enunciado: "No Excel, o resultado de =2+3*2^2 é 20.", certo: false, explicacao: "Potência primeiro: 2^2 = 4; depois 3*4 = 12; depois 2 + 12 = 14." },
    { tipo: "ce", enunciado: "No Word, a quebra de seção permite que páginas de um mesmo documento tenham orientações diferentes.", certo: true, explicacao: "Cada seção pode ter orientação, margens e cabeçalhos próprios." },
    { tipo: "ce", enunciado: "No PowerPoint, transição é o efeito aplicado a um objeto dentro do slide, como um título que surge girando.", certo: false, explicacao: "Isso é animação. Transição é o efeito na passagem entre slides." },
    { tipo: "ce", enunciado: "Na função PROCV, o argumento FALSO no último parâmetro indica busca por correspondência exata.", certo: true, explicacao: "FALSO (ou 0) = exata; VERDADEIRO = aproximada." }
  ]
},

INF3: {
  disciplina: "Informática", titulo: "Redes, internet, navegadores e correio eletrônico",
  objetivo: "Entender redes e protocolos, usar navegadores e mecanismos de busca e diferenciar recursos de e-mail, grupos, fóruns, wikis e redes sociais.",
  edital: ["Redes de computadores: conceitos, ferramentas, aplicativos e procedimentos de internet e intranet; navegadores Edge e Firefox; correio eletrônico, grupos, fóruns e wikis; redes sociais (BB)", "Internet, intranet, navegadores, correio eletrônico, redes sociais (PRF)", "Aplicativos de internet e intranet; navegadores; sítios de busca (Detran)"],
  porque: ["Protocolos e portas, navegação anônima e diferença entre CC e CCO são cobrados nas três bancas.", "Intranet × internet é pegadinha clássica: a intranet usa os mesmos protocolos da internet."],
  conteudo: [
    { h: "Tipos de rede" },
    { lista: ["PAN: alcance pessoal (Bluetooth). LAN: rede local (escritório, casa). MAN: metropolitana. WAN: longa distância (a internet é a maior WAN).", "Internet: rede pública mundial, baseada na pilha TCP/IP.", "Intranet: rede privada de uma organização que usa as mesmas tecnologias da internet (HTTP, navegador, TCP/IP). Pode ser acessada de fora por VPN.", "Extranet: parte da intranet aberta a parceiros externos autorizados (fornecedores, clientes)."] },
    { h: "Protocolos e portas" },
    { tabela: { cab: ["Protocolo", "Função", "Porta padrão"], linhas: [
      ["HTTP / HTTPS", "Páginas web / páginas web com criptografia (TLS)", "80 / 443"],
      ["FTP", "Transferência de arquivos", "20 e 21"],
      ["SMTP", "Envio de e-mail", "25 (587 para envio autenticado)"],
      ["POP3", "Recebimento de e-mail, em geral baixando e removendo do servidor", "110"],
      ["IMAP", "Acesso ao e-mail mantendo as mensagens sincronizadas no servidor", "143"],
      ["DNS", "Traduz nomes (gov.br) em endereços IP", "53"],
      ["DHCP", "Distribui endereços IP automaticamente", "67/68"],
      ["SSH / Telnet", "Acesso remoto com / sem criptografia", "22 / 23"]] } },
    { p: "TCP é orientado à conexão e garante a entrega em ordem; UDP não garante entrega, mas é mais rápido (streaming, DNS, jogos). IPv4 tem 32 bits (ex.: 192.168.0.1); IPv6 tem 128 bits, em hexadecimal." },
    { p: "URL é o endereço de um recurso: https://www.gov.br/prf/pt-br → protocolo (https), domínio (www.gov.br) e caminho (/prf/pt-br)." },
    { h: "Navegadores (Edge, Firefox, Chrome)" },
    { tabela: { cab: ["Recurso", "Detalhe"], linhas: [
      ["Navegação anônima / privada", "Não grava histórico, cookies e dados de formulário no computador ao fechar. Não esconde a navegação do provedor, da empresa ou do site. Edge: InPrivate (Ctrl + Shift + N); Firefox: janela privativa (Ctrl + Shift + P); Chrome: anônima (Ctrl + Shift + N)."],
      ["Cookies", "Pequenos arquivos que o site grava para lembrar login, preferências e rastrear."],
      ["Cache", "Cópia local de páginas e imagens para carregar mais rápido."],
      ["Atalhos comuns", "Ctrl + T nova aba; Ctrl + Shift + T reabre aba fechada; Ctrl + H histórico; Ctrl + J downloads; Ctrl + D favoritar; F5 atualizar; Ctrl + F localizar na página."],
      ["Cadeado na barra", "Indica conexão HTTPS com certificado válido; não garante que o site seja honesto."]] } },
    { h: "Busca na web (operadores)" },
    { lista: ["\"frase exata\" entre aspas.", "palavra -outra exclui resultados com 'outra'.", "site:gov.br limita a um domínio.", "filetype:pdf limita o tipo de arquivo.", "OR (em maiúsculas) busca um termo ou outro.", "* funciona como curinga dentro de frases."] },
    { h: "Correio eletrônico" },
    { lista: ["Para: destinatários principais. Cc (com cópia): recebem cópia e todos veem. Cco (cópia oculta): recebem cópia sem que os demais saibam.", "Responder vai só ao remetente; Responder a todos inclui os demais destinatários (não os de Cco).", "Encaminhar envia a mensagem, com anexos, para outra pessoa.", "Webmail acessa pelo navegador; cliente de e-mail (Outlook, Thunderbird) usa POP3/IMAP e SMTP."] },
    { h: "Grupos, fóruns, wikis e redes sociais" },
    { lista: ["Grupo de discussão (lista de e-mail): mensagens enviadas a todos os inscritos.", "Fórum: discussões organizadas por tópicos, com histórico público na web.", "Wiki: páginas editadas colaborativamente, com histórico de versões (ex.: Wikipédia).", "Redes sociais (LinkedIn, Instagram, Facebook, X/Twitter, YouTube, WhatsApp, Telegram): exigem cuidado com exposição de dados e golpes de engenharia social."] },
    { fonte: "RFCs dos protocolos citados (IETF); documentação dos navegadores Microsoft Edge e Mozilla Firefox." }
  ],
  checklist: ["Diferencio internet, intranet e extranet", "Sei a função e a porta dos protocolos principais", "Diferencio POP3 de IMAP e TCP de UDP", "Sei o que a navegação anônima protege e o que não protege", "Uso operadores de busca", "Diferencio Cc e Cco"],
  questoes: [
    { tipo: "mc", enunciado: "O protocolo que permite acessar as mensagens mantendo-as sincronizadas no servidor, a partir de vários dispositivos, é o:", opcoes: ["SMTP", "POP3", "IMAP", "FTP", "DHCP"], correta: 2, explicacao: "IMAP sincroniza; POP3 tende a baixar e remover; SMTP envia." },
    { tipo: "mc", enunciado: "Uma intranet:", opcoes: ["usa protocolos diferentes dos da internet", "é uma rede privada que usa as mesmas tecnologias da internet", "não pode ser acessada por navegador", "é sinônimo de internet discada", "só existe em redes sem fio"], correta: 1, explicacao: "Intranet é privada, mas usa TCP/IP, HTTP e navegadores." },
    { tipo: "mc", enunciado: "Para que um destinatário receba a mensagem sem que os demais saibam, ele deve ser colocado no campo:", opcoes: ["Para", "Cc", "Cco", "Assunto", "Responder a"], correta: 2, explicacao: "Cco (cópia carbono oculta)." },
    { tipo: "mc", enunciado: "Para buscar apenas arquivos PDF no domínio gov.br que contenham a expressão exata 'código de trânsito', usa-se:", opcoes: ["código de trânsito pdf gov.br", "\"código de trânsito\" site:gov.br filetype:pdf", "código OR trânsito site:pdf", "-\"código de trânsito\" filetype:gov.br", "site:\"código de trânsito\" pdf"], correta: 1, explicacao: "Aspas para frase exata, site: para o domínio e filetype: para o tipo." },
    { tipo: "mc", enunciado: "O protocolo responsável por converter nomes de domínio em endereços IP é o:", opcoes: ["HTTP", "DNS", "DHCP", "SMTP", "SSH"], correta: 1, explicacao: "DNS resolve nomes em IPs." },
    { tipo: "mc", enunciado: "No Microsoft Edge, a navegação InPrivate:", opcoes: ["impede que o provedor de internet veja os sites acessados", "torna o computador invisível na rede", "não guarda histórico e cookies da sessão no computador depois que a janela é fechada", "bloqueia todos os vírus", "criptografa os arquivos baixados"], correta: 2, explicacao: "Ela só evita gravar dados locais da sessão." },
    { tipo: "ce", enunciado: "O protocolo HTTPS usa, por padrão, a porta 443 e criptografa a comunicação entre navegador e servidor.", certo: true, explicacao: "HTTPS = HTTP sobre TLS, porta 443." },
    { tipo: "ce", enunciado: "Uma extranet é a parte da intranet disponibilizada a usuários externos autorizados, como fornecedores.", certo: true, explicacao: "Definição de extranet." },
    { tipo: "ce", enunciado: "O protocolo UDP garante a entrega dos pacotes na ordem correta, por isso é usado em transferências de arquivos críticos.", certo: false, explicacao: "Quem garante entrega e ordem é o TCP." },
    { tipo: "ce", enunciado: "O cadeado exibido na barra de endereços garante que o site é legítimo e seguro contra golpes.", certo: false, explicacao: "Indica só conexão criptografada; sites falsos também podem ter HTTPS." }
  ]
},

INF4: {
  disciplina: "Informática", titulo: "Segurança da informação",
  objetivo: "Conhecer os princípios de segurança, os tipos de malware e de ataque e as proteções: antivírus, firewall, criptografia, assinatura digital e backup.",
  edital: ["Segurança da informação: fundamentos, conceitos e mecanismos; proteção de estações: controle de USB, hardening, antimalware e firewall pessoal (BB)", "Segurança: vírus, worms, phishing, antivírus, firewall, VPN (PRF)", "Procedimentos de segurança; antivírus, firewall e antispyware; backup (Detran)"],
  porque: ["É o tema de informática mais cobrado nas três bancas: diferença entre vírus e worm, função do firewall e tipos de backup aparecem em quase toda prova.", "No BB, segurança cibernética também cai em Conhecimentos Bancários."],
  conteudo: [
    { h: "Princípios" },
    { tabela: { cab: ["Princípio", "Garante que…", "Ameaça típica"], linhas: [
      ["Confidencialidade", "só pessoas autorizadas acessam a informação", "vazamento, espionagem"],
      ["Integridade", "a informação não foi alterada indevidamente", "adulteração"],
      ["Disponibilidade", "a informação está acessível quando necessária", "ataque DDoS, falha de hardware"],
      ["Autenticidade", "a origem é quem diz ser", "falsificação de identidade"],
      ["Não repúdio (irretratabilidade)", "o autor não pode negar a autoria", "negação de envio"]] } },
    { h: "Malware" },
    { tabela: { cab: ["Tipo", "Como age"], linhas: [
      ["Vírus", "Se anexa a arquivos ou programas e precisa ser executado para se propagar"],
      ["Worm", "Se propaga sozinho pela rede, explorando vulnerabilidades, sem precisar de hospedeiro"],
      ["Cavalo de Troia (trojan)", "Parece um programa útil, mas executa funções maliciosas escondidas"],
      ["Ransomware", "Criptografa os dados e exige resgate"],
      ["Spyware", "Coleta informações do usuário; keylogger grava teclas, screenlogger grava a tela"],
      ["Adware", "Exibe propaganda indesejada"],
      ["Backdoor", "Abre acesso remoto escondido ao invasor"],
      ["Rootkit", "Esconde a presença do invasor e de outros malwares no sistema"],
      ["Bot / botnet", "Computador controlado remotamente, em rede de máquinas zumbis, usada em ataques DDoS e spam"]] } },
    { h: "Ataques e golpes" },
    { lista: ["Phishing: mensagem ou site falso que se passa por instituição para roubar dados. Variações por SMS (smishing) e voz (vishing).", "Pharming: envenenamento de DNS que leva a um site falso mesmo digitando o endereço correto.", "Engenharia social: manipulação da pessoa, não da máquina.", "DoS / DDoS: sobrecarga de um serviço para torná-lo indisponível (ataca a disponibilidade).", "Força bruta: tentativa sistemática de senhas."] },
    { h: "Proteções" },
    { lista: ["Antivírus / antimalware: detecta e remove códigos maliciosos por assinatura e comportamento.", "Firewall: filtra o tráfego de rede por regras, bloqueando conexões não autorizadas. Não remove vírus de arquivos.", "Antispyware: foca em programas espiões.", "IDS detecta intrusões; IPS detecta e bloqueia.", "VPN: túnel criptografado sobre a internet, para acesso remoto seguro à rede da organização.", "Hardening: reduzir a superfície de ataque (desativar serviços desnecessários, atualizar, restringir permissões).", "Controle de dispositivos USB: bloquear ou restringir pendrives para evitar infecção e vazamento.", "Autenticação multifator: combina algo que você sabe (senha), tem (token, celular) e é (biometria)."] },
    { h: "Criptografia, assinatura e certificado" },
    { lista: ["Criptografia simétrica: a mesma chave cifra e decifra (rápida; problema é distribuir a chave). Ex.: AES.", "Assimétrica: par de chaves. O que é cifrado com a pública só abre com a privada (garante confidencialidade). Ex.: RSA.", "Assinatura digital: o autor assina com a chave privada e qualquer um confere com a pública. Garante autenticidade, integridade e não repúdio; sozinha não garante confidencialidade.", "Hash: resumo de tamanho fixo; qualquer alteração no arquivo muda o hash (verifica integridade).", "Certificado digital: documento eletrônico emitido por autoridade certificadora que vincula uma chave pública a uma pessoa ou site (no Brasil, ICP-Brasil)."] },
    { h: "Backup" },
    { tabela: { cab: ["Tipo", "Copia", "Restauração"], linhas: [
      ["Completo (normal)", "Todos os arquivos selecionados", "Só o último completo"],
      ["Incremental", "O que mudou desde o último backup de qualquer tipo", "Último completo + todos os incrementais"],
      ["Diferencial", "O que mudou desde o último completo", "Último completo + último diferencial"]] } },
    { dica: "Regra 3-2-1: três cópias dos dados, em dois tipos de mídia, com uma fora do local. Backup na mesma máquina não protege contra ransomware." },
    { fonte: "Cartilha de Segurança para Internet (CERT.br); Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil)." }
  ],
  checklist: ["Sei os cinco princípios e o que ameaça cada um", "Diferencio vírus, worm, trojan, ransomware e spyware", "Diferencio phishing de pharming", "Sei o que o firewall faz e o que não faz", "Sei o que a assinatura digital garante", "Diferencio backup completo, incremental e diferencial"],
  questoes: [
    { tipo: "mc", enunciado: "O malware que se propaga automaticamente pela rede, explorando vulnerabilidades, sem precisar se anexar a outro arquivo, é o:", opcoes: ["vírus", "worm", "cavalo de Troia", "adware", "keylogger"], correta: 1, explicacao: "Worm se autorreplica pela rede; vírus precisa de hospedeiro e execução." },
    { tipo: "mc", enunciado: "A assinatura digital garante:", opcoes: ["confidencialidade e disponibilidade", "autenticidade, integridade e não repúdio", "apenas confidencialidade", "disponibilidade e integridade", "anonimato do autor"], correta: 1, explicacao: "Assinatura digital não cifra o conteúdo, então não garante confidencialidade." },
    { tipo: "mc", enunciado: "No esquema com backup completo no domingo e backups diários de segunda a sexta, a restauração na sexta exige o completo e todos os backups da semana. Os backups diários são do tipo:", opcoes: ["diferencial", "incremental", "completo", "espelho", "cópia"], correta: 1, explicacao: "Incremental copia só o que mudou desde o último backup, por isso todos são necessários na restauração." },
    { tipo: "mc", enunciado: "O ataque que altera a resolução de nomes (DNS) para levar o usuário a um site falso, mesmo digitando o endereço correto, é o:", opcoes: ["phishing", "pharming", "DDoS", "spoofing de e-mail", "força bruta"], correta: 1, explicacao: "Pharming envenena o DNS." },
    { tipo: "mc", enunciado: "O programa que grava as teclas digitadas pelo usuário para capturar senhas é o:", opcoes: ["screenlogger", "keylogger", "adware", "rootkit", "worm"], correta: 1, explicacao: "Keylogger registra o teclado; screenlogger, a tela." },
    { tipo: "mc", enunciado: "Um ataque de negação de serviço distribuído (DDoS) atinge principalmente o princípio da:", opcoes: ["confidencialidade", "integridade", "disponibilidade", "autenticidade", "irretratabilidade"], correta: 2, explicacao: "O objetivo é deixar o serviço indisponível." },
    { tipo: "ce", enunciado: "O firewall é capaz de remover vírus de arquivos já infectados no computador.", certo: false, explicacao: "Firewall filtra tráfego; remover vírus é função do antivírus." },
    { tipo: "ce", enunciado: "Na criptografia assimétrica, uma mensagem cifrada com a chave pública do destinatário só pode ser decifrada com a chave privada dele.", certo: true, explicacao: "É assim que se garante a confidencialidade." },
    { tipo: "ce", enunciado: "O ransomware criptografa os dados da vítima e exige pagamento para liberá-los.", certo: true, explicacao: "Definição de ransomware." },
    { tipo: "ce", enunciado: "No backup diferencial, cada cópia contém as alterações feitas desde o último backup completo.", certo: true, explicacao: "Por isso a restauração usa o completo e o último diferencial." }
  ]
},

INF5: {
  disciplina: "Informática", titulo: "Nuvem, transformação digital, dados e inteligência artificial",
  objetivo: "Conhecer computação em nuvem, IoT, big data, inteligência artificial, sistemas de apoio à decisão e fundamentos de análise de dados.",
  edital: ["Visão geral sobre sistemas de suporte à decisão e inteligência de negócio; fundamentos sobre análise de dados (BB)", "Computação em nuvem; transformação digital; internet das coisas; big data; inteligência artificial (PRF)"],
  porque: ["São temas recentes que entraram nos editais e costumam ser cobrados por conceitos.", "Na PRF, aparecem ligados ao uso de tecnologia na fiscalização (câmeras, sensores, análise de dados)."],
  conteudo: [
    { h: "Computação em nuvem" },
    { p: "Uso de recursos computacionais (servidores, armazenamento, programas) pela internet, sob demanda, pagando pelo uso, com elasticidade (aumenta e reduz conforme a necessidade)." },
    { tabela: { cab: ["Modelo de serviço", "O que o cliente recebe", "Exemplos"], linhas: [
      ["IaaS (infraestrutura)", "Máquinas virtuais, rede e armazenamento; o cliente cuida do sistema e dos programas", "Máquinas virtuais em provedores de nuvem"],
      ["PaaS (plataforma)", "Ambiente pronto para desenvolver e publicar aplicações", "Plataformas de hospedagem de aplicações e bancos gerenciados"],
      ["SaaS (software)", "Programa pronto, acessado pelo navegador", "Webmail, Microsoft 365, Google Drive"]] } },
    { p: "Modelos de implantação: nuvem pública (compartilhada, de um provedor), privada (exclusiva de uma organização), híbrida (combinação das duas) e comunitária (compartilhada por organizações com interesses comuns)." },
    { h: "Transformação digital e IoT" },
    { lista: ["Transformação digital: usar tecnologia para mudar processos, produtos e a relação com o cidadão ou cliente (serviços pelo celular, documentos digitais, assinatura eletrônica).", "Internet das coisas (IoT): objetos com sensores conectados à internet que coletam e trocam dados (câmeras de leitura de placas, sensores de tráfego, rastreadores de carga)."] },
    { h: "Big data" },
    { p: "Conjuntos de dados grandes e variados demais para ferramentas tradicionais. Costuma ser descrito pelos Vs: volume (quantidade), velocidade (geração e processamento rápidos), variedade (estruturados, semiestruturados e não estruturados), veracidade (confiabilidade) e valor (utilidade para a decisão)." },
    { h: "Inteligência artificial" },
    { lista: ["IA: sistemas que executam tarefas que exigiriam inteligência humana (reconhecer imagens, entender texto, decidir).", "Aprendizado de máquina: o sistema aprende padrões a partir de dados, em vez de seguir regras programadas uma a uma.", "Supervisionado (dados com resposta conhecida: classificar placas, prever valores), não supervisionado (agrupar dados sem rótulo) e por reforço (aprende por tentativa e recompensa).", "Aprendizado profundo (deep learning): redes neurais com muitas camadas, usadas em visão computacional e linguagem.", "IA generativa: cria textos, imagens e áudio a partir de exemplos."] },
    { h: "Apoio à decisão e inteligência de negócio (BI)" },
    { lista: ["Sistemas transacionais (OLTP) registram as operações do dia a dia.", "Data warehouse: repositório que integra dados de várias fontes, organizado por assunto, para análise histórica.", "ETL: extrair, transformar e carregar dados no data warehouse.", "OLAP: análise multidimensional (drill-down detalha, roll-up resume, slice/dice recorta).", "Data mining: descoberta de padrões em grandes bases.", "Dashboards: painéis com indicadores para acompanhamento."] },
    { h: "Tipos de análise de dados" },
    { tabela: { cab: ["Análise", "Pergunta"], linhas: [
      ["Descritiva", "O que aconteceu?"], ["Diagnóstica", "Por que aconteceu?"], ["Preditiva", "O que deve acontecer?"], ["Prescritiva", "O que devemos fazer?"]] } },
    { fonte: "Definições de computação em nuvem do NIST (SP 800-145); conteúdo programático dos editais BB 2022 e PRF 2021." }
  ],
  checklist: ["Diferencio IaaS, PaaS e SaaS", "Diferencio nuvem pública, privada e híbrida", "Explico IoT e os Vs do big data", "Diferencio aprendizado supervisionado, não supervisionado e por reforço", "Sei o que são data warehouse, ETL, OLAP e data mining", "Diferencio análise descritiva, diagnóstica, preditiva e prescritiva"],
  questoes: [
    { tipo: "mc", enunciado: "Um serviço de e-mail acessado pelo navegador, sem instalação e sem que o usuário gerencie servidores, é exemplo de:", opcoes: ["IaaS", "PaaS", "SaaS", "nuvem privada", "OLAP"], correta: 2, explicacao: "Software pronto entregue pela internet: SaaS." },
    { tipo: "mc", enunciado: "Sensores e câmeras em rodovias que enviam dados de tráfego pela internet são exemplo de:", opcoes: ["big data", "internet das coisas", "data warehouse", "IaaS", "ETL"], correta: 1, explicacao: "Objetos com sensores conectados: IoT." },
    { tipo: "mc", enunciado: "O processo que extrai dados de várias fontes, trata-os e os carrega num data warehouse é chamado de:", opcoes: ["OLTP", "ETL", "drill-down", "data mining", "SaaS"], correta: 1, explicacao: "ETL = extract, transform, load." },
    { tipo: "mc", enunciado: "Um modelo que aprende a classificar placas de veículos a partir de milhares de imagens já identificadas usa aprendizado:", opcoes: ["não supervisionado", "supervisionado", "por reforço", "descritivo", "transacional"], correta: 1, explicacao: "Dados com resposta conhecida (rótulos): supervisionado." },
    { tipo: "mc", enunciado: "A análise que responde 'o que deve acontecer' com base em dados históricos é a:", opcoes: ["descritiva", "diagnóstica", "preditiva", "prescritiva", "transacional"], correta: 2, explicacao: "Preditiva estima o futuro; prescritiva recomenda a ação." },
    { tipo: "mc", enunciado: "Qual característica do big data se refere à diversidade de formatos, como textos, imagens e registros de sensores?", opcoes: ["volume", "velocidade", "variedade", "veracidade", "valor"], correta: 2, explicacao: "Variedade = tipos e formatos diferentes de dados." },
    { tipo: "ce", enunciado: "A nuvem híbrida combina recursos de nuvem pública e de nuvem privada.", certo: true, explicacao: "Definição de nuvem híbrida." },
    { tipo: "ce", enunciado: "No aprendizado não supervisionado, o modelo é treinado com exemplos que já trazem a resposta correta.", certo: false, explicacao: "Isso é supervisionado; o não supervisionado trabalha sem rótulos, por exemplo agrupando." },
    { tipo: "ce", enunciado: "Na análise OLAP, a operação drill-down permite passar de um nível resumido para um nível mais detalhado dos dados.", certo: true, explicacao: "Drill-down detalha; roll-up resume." },
    { tipo: "ce", enunciado: "Elasticidade, na computação em nuvem, é a capacidade de aumentar ou reduzir recursos conforme a demanda.", certo: true, explicacao: "Característica essencial da nuvem." }
  ]
},

INF6: {
  disciplina: "Informática", titulo: "Educação a distância, multimídia e trabalho remoto",
  objetivo: "Conhecer conceitos de EaD, formatos multimídia e ferramentas de produtividade e colaboração a distância.",
  edital: ["Conceitos de educação a distância; tecnologias e ferramentas multimídia, de reprodução de áudio e vídeo; ferramentas de produtividade e trabalho a distância: Microsoft Teams, Cisco Webex, Google Hangout, Google Drive e Skype (BB)"],
  porque: ["São itens específicos do edital do BB, cobrados por conceito e por funcionalidade das ferramentas."],
  conteudo: [
    { h: "Educação a distância" },
    { lista: ["Síncrona: professor e alunos ao mesmo tempo (aula ao vivo, webconferência).", "Assíncrona: cada um no seu tempo (videoaulas gravadas, fóruns, materiais).", "AVA ou LMS (ambiente virtual de aprendizagem): plataforma que reúne conteúdo, atividades, notas e comunicação. Exemplo: Moodle.", "Ensino híbrido (blended): combina presencial e a distância.", "Microaprendizagem: conteúdos curtos e objetivos, consumidos em poucos minutos."] },
    { h: "Multimídia" },
    { tabela: { cab: ["Tipo", "Formatos comuns", "Observação"], linhas: [
      ["Áudio", "MP3, AAC, WAV, FLAC", "WAV e FLAC sem perda; MP3 e AAC comprimem com perda"],
      ["Vídeo", "MP4, AVI, MKV, MOV", "O contêiner (MP4) guarda áudio e vídeo codificados por codecs (H.264, H.265)"],
      ["Imagem", "JPG, PNG, GIF, SVG", "JPG com perda; PNG sem perda e com transparência; SVG vetorial"]] } },
    { p: "Streaming transmite áudio e vídeo enquanto são reproduzidos, sem precisar baixar o arquivo inteiro. Codec é o algoritmo que comprime e descomprime a mídia." },
    { h: "Ferramentas de colaboração" },
    { tabela: { cab: ["Ferramenta", "Uso principal"], linhas: [
      ["Microsoft Teams", "Chat, equipes e canais, reuniões, chamadas e arquivos integrados ao Microsoft 365"],
      ["Cisco Webex", "Reuniões e webinars por vídeo"],
      ["Google Hangouts / Meet / Chat", "Mensagens e videochamadas do Google (o Hangouts foi substituído por Google Chat e Meet)"],
      ["Google Drive", "Armazenamento em nuvem e edição colaborativa (Documentos, Planilhas, Apresentações)"],
      ["Skype", "Chamadas de voz e vídeo; a Microsoft encerrou o serviço em 2025 e orientou a migração para o Teams"]] } },
    { lista: ["Compartilhamento em nuvem: definir se a pessoa pode ver, comentar ou editar.", "Histórico de versões permite recuperar versões anteriores de um arquivo colaborativo.", "Edição simultânea: várias pessoas editam o mesmo arquivo ao mesmo tempo."] },
    { fonte: "Documentação Microsoft Teams, Google Workspace e Cisco Webex; conteúdo programático do edital BB 2022." }
  ],
  checklist: ["Diferencio EaD síncrona e assíncrona", "Sei o que é AVA/LMS", "Diferencio formatos com e sem perda", "Sei o que é codec e streaming", "Sei a função de Teams, Webex, Drive e Meet"],
  questoes: [
    { tipo: "mc", enunciado: "Uma aula gravada que o aluno assiste quando quiser é exemplo de atividade:", opcoes: ["síncrona", "assíncrona", "presencial", "híbrida obrigatória", "em tempo real"], correta: 1, explicacao: "Assíncrona: cada um no seu tempo." },
    { tipo: "mc", enunciado: "Qual formato de imagem é vetorial?", opcoes: ["JPG", "PNG", "GIF", "SVG", "BMP"], correta: 3, explicacao: "SVG descreve a imagem por vetores; os outros são mapas de pixels." },
    { tipo: "mc", enunciado: "O algoritmo que comprime e descomprime áudio ou vídeo é chamado de:", opcoes: ["contêiner", "codec", "streaming", "plug-in", "driver"], correta: 1, explicacao: "Codec = codificador/decodificador." },
    { tipo: "mc", enunciado: "A plataforma que reúne conteúdos, atividades, notas e comunicação de um curso a distância é o:", opcoes: ["SGBD", "AVA", "ERP", "CRM", "DNS"], correta: 1, explicacao: "Ambiente virtual de aprendizagem (ex.: Moodle)." },
    { tipo: "mc", enunciado: "Qual ferramenta é principalmente de armazenamento em nuvem e edição colaborativa de arquivos?", opcoes: ["Cisco Webex", "Google Drive", "Skype", "Telnet", "Outlook offline"], correta: 1, explicacao: "Google Drive armazena e permite editar documentos em conjunto." },
    { tipo: "mc", enunciado: "Assinale o formato de áudio sem perda de qualidade.", opcoes: ["MP3", "AAC", "FLAC", "OGG com compressão alta", "WMA de baixa taxa"], correta: 2, explicacao: "FLAC comprime sem perda." },
    { tipo: "ce", enunciado: "Streaming permite reproduzir vídeo enquanto ele é transmitido, sem baixar o arquivo completo antes.", certo: true, explicacao: "Definição de streaming." },
    { tipo: "ce", enunciado: "O formato JPG comprime imagens sem nenhuma perda de qualidade.", certo: false, explicacao: "JPG usa compressão com perda." },
    { tipo: "ce", enunciado: "No Microsoft Teams, é possível organizar conversas e arquivos em equipes e canais.", certo: true, explicacao: "Estrutura básica do Teams." },
    { tipo: "ce", enunciado: "O ensino híbrido combina momentos presenciais e a distância.", certo: true, explicacao: "Definição de blended learning." }
  ]
}
});
