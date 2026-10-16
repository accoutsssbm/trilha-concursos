/* Matemática, Raciocínio Lógico, Estatística e Geometria — comum às trilhas */
window.MODULOS = Object.assign(window.MODULOS || {}, {
MAT1: {
  disciplina: "Matemática e Raciocínio Lógico", titulo: "Conjuntos numéricos, operações e medidas",
  objetivo: "Operar com naturais, inteiros, racionais e reais, usar MMC e MDC, resolver problemas de conjuntos e converter unidades de medida.",
  edital: ["Números inteiros, racionais e reais (BB)", "Noções de conjuntos; sistema legal de medidas (BB)", "Operações, conjuntos numéricos e operações com conjuntos; sistemas de medidas (Detran)", "Teoria dos conjuntos; medidas (PRF)"],
  porque: ["É a base de todo o resto: porcentagem, juros, estatística e geometria dependem de operar bem com frações e decimais.", "Problemas de conjuntos com diagrama de Venn aparecem com frequência em Detran e PRF."],
  conteudo: [
    { h: "Os conjuntos numéricos" },
    { tabela: { cab: ["Conjunto", "Elementos", "Observações"], linhas: [
      ["Naturais (ℕ)", "0, 1, 2, 3, …", "Fechado para soma e multiplicação"],
      ["Inteiros (ℤ)", "…, −2, −1, 0, 1, 2, …", "Inclui os negativos; ℕ ⊂ ℤ"],
      ["Racionais (ℚ)", "Toda fração a/b com b ≠ 0", "Decimais finitos e dízimas periódicas: 0,25 = 1/4; 0,333… = 1/3"],
      ["Irracionais (𝕀)", "Decimais infinitos não periódicos", "√2, √3, π, e"],
      ["Reais (ℝ)", "Racionais e irracionais juntos", "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ e 𝕀 ⊂ ℝ"]] } },
    { p: "Para transformar dízima periódica em fração: 0,777… = 7/9; 0,1212… = 12/99; 1,333… = 1 + 3/9 = 4/3. Regra: o período vai no numerador e, no denominador, tantos 9 quantos forem os algarismos do período." },
    { h: "Operações, sinais e prioridade" },
    { lista: ["Ordem: parênteses, colchetes e chaves; depois potências e raízes; depois multiplicação e divisão; por último soma e subtração, da esquerda para a direita.", "Sinais na multiplicação e divisão: sinais iguais dão positivo; diferentes, negativo.", "Frações: soma com denominador comum (use o MMC); multiplicação: numerador × numerador e denominador × denominador; divisão: multiplica pela inversa.", "Potências: a^m · a^n = a^(m+n); a^m ÷ a^n = a^(m−n); (a^m)^n = a^(m·n); a^0 = 1 (a ≠ 0); a^(−n) = 1/a^n."] },
    { h: "MMC e MDC" },
    { p: "MMC (mínimo múltiplo comum) resolve problemas de coincidência: eventos que se repetem em ciclos diferentes e voltam a acontecer juntos. MDC (máximo divisor comum) resolve problemas de divisão em partes iguais do maior tamanho possível." },
    { ex: "Duas viaturas fazem rondas: uma passa no posto a cada 12 min e outra a cada 18 min. Se passaram juntas às 8h, voltam a passar juntas depois de MMC(12, 18) = 36 min, às 8h36." },
    { ex: "Há 24 coletes e 36 capacetes para dividir em kits iguais, com o maior número de itens por kit e sem sobras: MDC(24, 36) = 12 kits, cada um com 2 coletes e 3 capacetes." },
    { h: "Operações com conjuntos" },
    { tabela: { cab: ["Operação", "Notação", "Significado"], linhas: [
      ["União", "A ∪ B", "Elementos que estão em A ou em B (ou em ambos)"],
      ["Interseção", "A ∩ B", "Elementos que estão em A e em B"],
      ["Diferença", "A − B", "Elementos de A que não estão em B"],
      ["Complementar", "A' ou Aᶜ", "O que falta em A para completar o universo"],
      ["Número de elementos da união", "n(A ∪ B)", "n(A) + n(B) − n(A ∩ B)"]] } },
    { formula: "n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)" },
    { dica: "Em problemas com diagrama de Venn, comece sempre pela interseção de todos os conjuntos e vá preenchendo de dentro para fora. Quem não está em nenhum conjunto fica fora dos círculos." },
    { h: "Sistema legal de medidas" },
    { tabela: { cab: ["Grandeza", "Conversões essenciais"], linhas: [
      ["Comprimento", "1 km = 1.000 m; 1 m = 100 cm = 1.000 mm"],
      ["Área", "1 m² = 10.000 cm²; 1 km² = 1.000.000 m²; 1 hectare = 10.000 m²"],
      ["Volume", "1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL"],
      ["Massa", "1 t = 1.000 kg; 1 kg = 1.000 g"],
      ["Tempo", "1 h = 60 min = 3.600 s; 0,25 h = 15 min; 0,1 h = 6 min"],
      ["Velocidade", "km/h ÷ 3,6 = m/s; m/s × 3,6 = km/h (90 km/h = 25 m/s)"]] } },
    { alerta: "Em área, cada degrau da escala vale 100 (m² → dm² → cm²); em volume, vale 1.000. O erro mais comum é converter área como se fosse comprimento." },
    { fonte: "Conteúdo programático dos editais BB 2022, PRF 2021 e Detran-PA 2018; Sistema Internacional de Unidades (Inmetro)." }
  ],
  checklist: ["Classifico números nos conjuntos ℕ, ℤ, ℚ, 𝕀 e ℝ", "Transformo dízima periódica em fração", "Uso MMC para coincidência e MDC para divisão em partes iguais", "Resolvo problemas de união e interseção com diagrama", "Converto comprimento, área, volume, tempo e velocidade"],
  questoes: [
    { tipo: "mc", enunciado: "Qual dos números abaixo é racional?", opcoes: ["√2", "π", "0,333…", "√3", "o número e"], correta: 2, explicacao: "0,333… é dízima periódica = 1/3. Os demais são irracionais." },
    { tipo: "mc", enunciado: "Sendo A = {1, 2, 3, 4} e B = {3, 4, 5}, o número de elementos de A ∪ B é:", opcoes: ["3", "4", "5", "6", "7"], correta: 2, explicacao: "A ∪ B = {1, 2, 3, 4, 5}: 5 elementos. Pela fórmula: 4 + 3 − 2 = 5." },
    { tipo: "mc", enunciado: "Numa pesquisa com 100 motoristas, 60 usam o aplicativo A, 50 usam o B e 20 usam os dois. Quantos não usam nenhum dos dois?", opcoes: ["10", "20", "30", "0", "40"], correta: 0, explicacao: "n(A ∪ B) = 60 + 50 − 20 = 90. Não usam nenhum: 100 − 90 = 10." },
    { tipo: "mc", enunciado: "Um reservatório tem a forma de um bloco de 2 m × 1 m × 0,5 m. Sua capacidade, em litros, é:", opcoes: ["100 L", "500 L", "1.000 L", "2.000 L", "10.000 L"], correta: 2, explicacao: "Volume = 2 × 1 × 0,5 = 1 m³ = 1.000 L." },
    { tipo: "mc", enunciado: "Dois ônibus saem do terminal juntos às 8h. Um retorna a cada 12 minutos e o outro a cada 18 minutos. Eles voltarão a sair juntos às:", opcoes: ["8h30", "8h36", "9h00", "8h54", "9h12"], correta: 1, explicacao: "MMC(12, 18) = 36 minutos → 8h36." },
    { tipo: "mc", enunciado: "Um veículo a 90 km/h percorre, em cada segundo, aproximadamente:", opcoes: ["9 m", "15 m", "25 m", "32,4 m", "50 m"], correta: 2, explicacao: "90 ÷ 3,6 = 25 m/s." },
    { tipo: "ce", enunciado: "Todo número natural é também um número inteiro.", certo: true, explicacao: "ℕ ⊂ ℤ." },
    { tipo: "ce", enunciado: "O número √16 é irracional.", certo: false, explicacao: "√16 = 4, que é natural." },
    { tipo: "ce", enunciado: "Um quarto de hora corresponde a 0,25 h, ou seja, 15 minutos.", certo: true, explicacao: "0,25 × 60 = 15 min." },
    { tipo: "ce", enunciado: "O máximo divisor comum de 24 e 36 é 12.", certo: true, explicacao: "24 = 2³·3 e 36 = 2²·3² → MDC = 2²·3 = 12." }
  ]
},

MAT2: {
  disciplina: "Matemática e Raciocínio Lógico", titulo: "Razão, proporção, regra de três e porcentagem",
  objetivo: "Resolver problemas de proporcionalidade direta e inversa, regra de três simples e composta, divisão proporcional e variações percentuais sucessivas.",
  edital: ["Razões e proporções; divisão proporcional; regras de três simples e compostas; porcentagens (BB, Detran)", "Razão, proporção, regra de três e porcentagem (PRF)"],
  porque: ["Porcentagem é o tema de matemática que mais aparece em concurso e é pré-requisito de Matemática Financeira no BB.", "Regra de três composta é armadilha clássica: errar o sentido de uma grandeza muda a resposta."],
  conteudo: [
    { h: "Razão e proporção" },
    { p: "Razão é a comparação de duas grandezas por divisão: a/b. Proporção é a igualdade entre duas razões: a/b = c/d. Propriedade fundamental: o produto dos meios é igual ao produto dos extremos (a·d = b·c)." },
    { lista: ["Escala é uma razão: distância no desenho ÷ distância real, na mesma unidade.", "Velocidade média: distância ÷ tempo. Densidade: massa ÷ volume.", "Grandezas diretamente proporcionais: a razão entre elas é constante (dobrou uma, dobra a outra).", "Grandezas inversamente proporcionais: o produto é constante (dobrou uma, a outra cai pela metade)."] },
    { h: "Regra de três simples" },
    { p: "Monte a tabela com as grandezas em colunas, coloque setas e verifique o sentido. Se as grandezas são diretas, multiplique cruzado; se inversas, inverta uma das razões antes." },
    { ex: "6 agentes concluem a vistoria em 8 dias. Quantos dias levam 4 agentes? Mais agentes, menos dias: inversa. 6 × 8 = 4 × x → x = 12 dias." },
    { h: "Regra de três composta" },
    { p: "Isole a grandeza que você procura. Compare cada uma das outras com ela, sempre mantendo as demais fixas, e decida se é direta ou inversa. A incógnita é igual ao valor conhecido dela multiplicado pelas razões (invertidas quando inversas)." },
    { formula: "5 máquinas, 8 h/dia → 20 dias\n8 máquinas, 10 h/dia → x dias\n\nMais máquinas → menos dias (inversa)\nMais horas por dia → menos dias (inversa)\nx = 20 × (5/8) × (8/10) = 10 dias" },
    { h: "Divisão proporcional" },
    { p: "Diretamente proporcional: divida o total pela soma das partes e multiplique cada parte. Inversamente proporcional: use os inversos das partes (1/a, 1/b, 1/c) e faça a divisão direta com eles." },
    { ex: "R$ 900 divididos em partes diretamente proporcionais a 2, 3 e 4: constante = 900 ÷ 9 = 100 → R$ 200, R$ 300 e R$ 400." },
    { h: "Porcentagem" },
    { tabela: { cab: ["Situação", "Fator multiplicador", "Exemplo"], linhas: [
      ["Aumento de p%", "1 + p/100", "Aumento de 15%: × 1,15"],
      ["Desconto de p%", "1 − p/100", "Desconto de 12%: × 0,88"],
      ["Aumentos/descontos sucessivos", "Multiplique os fatores", "+20% e depois −20%: 1,2 × 0,8 = 0,96 → queda de 4%"],
      ["Quanto % A é de B", "A ÷ B × 100", "30 de 120 = 25%"],
      ["Variação percentual", "(novo − antigo) ÷ antigo × 100", "De 80 para 100: +25%"]] } },
    { alerta: "Porcentagens sucessivas não se somam. Um aumento de 50% seguido de redução de 50% resulta em 1,5 × 0,5 = 0,75: queda de 25%, não volta ao original." },
    { dica: "Para achar o valor original depois de um aumento, divida pelo fator: um preço que, com 25% de aumento, ficou R$ 150 era 150 ÷ 1,25 = R$ 120." },
    { fonte: "Conteúdo programático dos editais BB 2022, PRF 2021 e Detran-PA 2018." }
  ],
  checklist: ["Diferencio grandezas diretas e inversas", "Resolvo regra de três simples e composta", "Faço divisão diretamente e inversamente proporcional", "Uso fator multiplicador para aumentos e descontos", "Calculo variações sucessivas sem somar porcentagens"],
  questoes: [
    { tipo: "mc", enunciado: "Um produto sofre aumento de 20% e, em seguida, desconto de 20%. Em relação ao preço inicial, o preço final:", opcoes: ["volta ao preço original", "fica 4% menor", "fica 4% maior", "fica 2% menor", "fica 40% menor"], correta: 1, explicacao: "1,2 × 0,8 = 0,96: 4% abaixo do original." },
    { tipo: "mc", enunciado: "Seis agentes concluem uma operação em 8 dias. Com o mesmo ritmo, 4 agentes concluiriam a mesma operação em:", opcoes: ["5 dias", "6 dias", "10 dias", "12 dias", "16 dias"], correta: 3, explicacao: "Grandezas inversas: 6 × 8 = 4 × x → x = 12." },
    { tipo: "mc", enunciado: "Cinco máquinas, trabalhando 8 horas por dia, fazem um serviço em 20 dias. Oito máquinas iguais, trabalhando 10 horas por dia, fariam o mesmo serviço em:", opcoes: ["10 dias", "12 dias", "16 dias", "8 dias", "25 dias"], correta: 0, explicacao: "x = 20 × (5/8) × (8/10) = 10 dias." },
    { tipo: "mc", enunciado: "R$ 900,00 foram divididos em partes diretamente proporcionais a 2, 3 e 4. A maior parte é:", opcoes: ["R$ 300,00", "R$ 360,00", "R$ 400,00", "R$ 450,00", "R$ 500,00"], correta: 2, explicacao: "900 ÷ 9 = 100; a maior parte é 4 × 100 = 400." },
    { tipo: "mc", enunciado: "Um produto de R$ 250,00 teve desconto de 12%. O preço com desconto é:", opcoes: ["R$ 238,00", "R$ 230,00", "R$ 225,00", "R$ 220,00", "R$ 212,00"], correta: 3, explicacao: "250 × 0,88 = 220." },
    { tipo: "mc", enunciado: "Após um aumento de 25%, uma tarifa passou a custar R$ 150,00. O valor antes do aumento era:", opcoes: ["R$ 112,50", "R$ 120,00", "R$ 125,00", "R$ 130,00", "R$ 187,50"], correta: 1, explicacao: "150 ÷ 1,25 = 120." },
    { tipo: "ce", enunciado: "Se duas grandezas são inversamente proporcionais, o produto entre seus valores correspondentes é constante.", certo: true, explicacao: "É a definição de proporcionalidade inversa." },
    { tipo: "ce", enunciado: "Um valor que sofre aumento de 50% e depois redução de 50% volta ao valor original.", certo: false, explicacao: "1,5 × 0,5 = 0,75: fica 25% menor." },
    { tipo: "ce", enunciado: "Se 30% de um número é 60, esse número é 200.", certo: true, explicacao: "0,3x = 60 → x = 200." },
    { tipo: "ce", enunciado: "Para percorrer uma distância fixa, a velocidade média e o tempo gasto são grandezas diretamente proporcionais.", certo: false, explicacao: "Com distância fixa, maior velocidade implica menor tempo: grandezas inversas." }
  ]
},

MAT3: {
  disciplina: "Matemática e Raciocínio Lógico", titulo: "Equações, sistemas e funções",
  objetivo: "Resolver equações e inequações de 1º e 2º grau e sistemas, e interpretar funções afim, quadrática, exponencial e logarítmica.",
  edital: ["Relações e funções; funções polinomiais, exponenciais e logarítmicas (BB)", "Equações e sistemas; funções afim, quadrática, exponencial e logarítmica (PRF)", "Equações e inequações (Detran)"],
  porque: ["Montar a equação a partir do enunciado é a habilidade cobrada: a conta costuma ser simples.", "Função afim descreve tarifas (fixo + variável) e a exponencial descreve juros compostos: as duas reaparecem em Matemática Financeira."],
  conteudo: [
    { h: "Equações e inequações de 1º grau" },
    { p: "Isole a incógnita fazendo a mesma operação dos dois lados. Na inequação, vale o mesmo, com uma regra a mais: ao multiplicar ou dividir por número negativo, o sinal da desigualdade se inverte." },
    { ex: "−2x + 6 > 0 → −2x > −6 → x < 3 (dividiu por −2 e inverteu)." },
    { h: "Sistemas de equações" },
    { lista: ["Substituição: isole uma incógnita numa equação e substitua na outra.", "Adição: some ou subtraia as equações para eliminar uma incógnita.", "Exemplo: x + y = 10 e x − y = 4 → somando: 2x = 14 → x = 7 e y = 3."] },
    { h: "Equação do 2º grau: ax² + bx + c = 0" },
    { formula: "Δ = b² − 4ac\nx = (−b ± √Δ) / 2a\nSoma das raízes = −b/a     Produto das raízes = c/a" },
    { lista: ["Δ > 0: duas raízes reais diferentes.", "Δ = 0: uma raiz real (dupla).", "Δ < 0: nenhuma raiz real."] },
    { h: "Função afim: f(x) = ax + b" },
    { p: "O gráfico é uma reta. 'a' é a taxa de variação (inclinação): a > 0 crescente, a < 0 decrescente. 'b' é o valor inicial, onde a reta corta o eixo y. A raiz é x = −b/a." },
    { ex: "Uma locadora cobra R$ 80 fixos e R$ 0,50 por km: C(x) = 0,5x + 80. Com R$ 150, roda-se (150 − 80) ÷ 0,5 = 140 km." },
    { h: "Função quadrática: f(x) = ax² + bx + c" },
    { p: "O gráfico é uma parábola, com concavidade para cima se a > 0 (tem mínimo) e para baixo se a < 0 (tem máximo). O vértice dá o ponto de máximo ou mínimo." },
    { formula: "xᵥ = −b / 2a        yᵥ = −Δ / 4a  (ou f(xᵥ))" },
    { ex: "f(x) = −x² + 4x + 1: xᵥ = −4 ÷ (−2) = 2; f(2) = −4 + 8 + 1 = 5. Valor máximo: 5." },
    { h: "Função exponencial: f(x) = aˣ (a > 0, a ≠ 1)" },
    { p: "Cresce se a > 1 e decresce se 0 < a < 1. Nunca é negativa nem zero. Para resolver equação exponencial, escreva os dois lados na mesma base e iguale os expoentes: 2^(x+1) = 32 = 2⁵ → x = 4." },
    { h: "Logaritmo" },
    { formula: "log_b a = x  ⇔  bˣ = a     (a > 0, b > 0, b ≠ 1)\nlog(a·c) = log a + log c\nlog(a/c) = log a − log c\nlog(aⁿ) = n · log a\nMudança de base: log_b a = log a / log b" },
    { p: "Logaritmo é o expoente. log₂ 8 = 3 porque 2³ = 8; log 1000 = 3 porque 10³ = 1000; log 0,01 = −2. A função logarítmica é a inversa da exponencial." },
    { alerta: "log(a·b) é a SOMA dos logaritmos, não o produto. E log(a + b) não tem simplificação." },
    { fonte: "Conteúdo programático dos editais BB 2022, PRF 2021 e Detran-PA 2018." }
  ],
  checklist: ["Resolvo equações e inequações de 1º grau, invertendo o sinal quando preciso", "Resolvo sistemas por substituição e adição", "Uso Bhaskara, soma e produto das raízes", "Interpreto os coeficientes da função afim", "Calculo o vértice da parábola", "Resolvo equações exponenciais e aplico as propriedades do logaritmo"],
  questoes: [
    { tipo: "mc", enunciado: "Uma locadora cobra R$ 80,00 fixos mais R$ 0,50 por quilômetro rodado. Com R$ 150,00, o cliente pode rodar:", opcoes: ["70 km", "140 km", "160 km", "230 km", "300 km"], correta: 1, explicacao: "0,5x + 80 = 150 → x = 140." },
    { tipo: "mc", enunciado: "Se x + y = 10 e x − y = 4, o valor de x · y é:", opcoes: ["12", "16", "21", "24", "30"], correta: 2, explicacao: "x = 7 e y = 3 → x·y = 21." },
    { tipo: "mc", enunciado: "O produto das raízes da equação x² − 5x + 6 = 0 é:", opcoes: ["5", "6", "−6", "−5", "1"], correta: 1, explicacao: "Produto = c/a = 6 (raízes 2 e 3)." },
    { tipo: "mc", enunciado: "O valor máximo da função f(x) = −x² + 4x + 1 é:", opcoes: ["1", "2", "4", "5", "9"], correta: 3, explicacao: "xᵥ = 2; f(2) = 5." },
    { tipo: "mc", enunciado: "A solução da equação 2^(x+1) = 32 é:", opcoes: ["5", "3", "6", "4", "16"], correta: 3, explicacao: "32 = 2⁵ → x + 1 = 5 → x = 4." },
    { tipo: "mc", enunciado: "O valor de log₂ 8 + log 1000 é:", opcoes: ["9", "4", "6", "11", "5"], correta: 2, explicacao: "log₂ 8 = 3 e log 1000 = 3: total 6." },
    { tipo: "ce", enunciado: "A solução da inequação −2x + 6 > 0 é x < 3.", certo: true, explicacao: "Ao dividir por −2, inverte-se o sinal: x < 3." },
    { tipo: "ce", enunciado: "A função f(x) = 3x − 2 é decrescente.", certo: false, explicacao: "Coeficiente angular 3 > 0: crescente." },
    { tipo: "ce", enunciado: "Se o discriminante de uma equação do 2º grau é negativo, a equação não tem raízes reais.", certo: true, explicacao: "Δ < 0: não há raiz real." },
    { tipo: "ce", enunciado: "Para quaisquer a e b positivos, log(a·b) = log a · log b.", certo: false, explicacao: "log(a·b) = log a + log b." }
  ]
},

MAT4: {
  disciplina: "Matemática", titulo: "Matrizes, determinantes e sistemas lineares",
  objetivo: "Operar com matrizes, calcular determinantes de ordem 2 e 3 e classificar sistemas lineares.",
  edital: ["Matrizes; determinantes; sistemas lineares (BB)"],
  porque: ["Está expressamente no edital do BB e a Cesgranrio costuma cobrar propriedades de determinantes e classificação de sistemas.", "No BB Tecnologia, matrizes são a base de bibliotecas como NumPy."],
  conteudo: [
    { h: "Matrizes" },
    { p: "Matriz m × n tem m linhas e n colunas. O elemento aᵢⱼ está na linha i e coluna j. Tipos: quadrada (m = n), identidade (1 na diagonal principal e 0 fora), nula, diagonal, triangular, transposta (Aᵀ troca linhas por colunas)." },
    { lista: ["Soma e subtração: só entre matrizes de mesma ordem, elemento a elemento.", "Multiplicação por número: multiplica cada elemento.", "Produto A·B: só existe se o número de colunas de A for igual ao de linhas de B. Se A é m × n e B é n × p, AB é m × p. Cada elemento é a soma dos produtos linha de A × coluna de B.", "O produto de matrizes não é comutativo: em geral AB ≠ BA.", "Inversa A⁻¹: A·A⁻¹ = I. Só existe se det A ≠ 0."] },
    { h: "Determinantes" },
    { formula: "Ordem 2:  |a b|\n          |c d|  = ad − bc\n\nOrdem 3 (Sarrus): repita as duas primeiras colunas,\nsome os produtos das diagonais descendentes\ne subtraia os das ascendentes." },
    { ex: "|1 2 0; 0 1 3; 2 0 1|: diagonais descendentes 1·1·1 + 2·3·2 + 0·0·0 = 13; ascendentes 0·1·2 + 1·3·0 + 2·0·1 = 0. Determinante = 13." },
    { h: "Propriedades que a banca cobra" },
    { lista: ["Fila (linha ou coluna) de zeros, ou duas filas iguais ou proporcionais: determinante = 0.", "Trocar duas filas de lugar troca o sinal do determinante.", "Multiplicar uma fila por k multiplica o determinante por k.", "det(k·A) = kⁿ · det A, em que n é a ordem da matriz.", "det(A·B) = det A · det B; det(Aᵀ) = det A; det(A⁻¹) = 1/det A."] },
    { h: "Sistemas lineares" },
    { tabela: { cab: ["Classificação", "Soluções", "Sinal"], linhas: [
      ["Possível e determinado (SPD)", "Uma única solução", "det da matriz dos coeficientes ≠ 0"],
      ["Possível e indeterminado (SPI)", "Infinitas soluções", "det = 0 e equações compatíveis (uma é múltipla da outra)"],
      ["Impossível (SI)", "Nenhuma solução", "det = 0 e equações contraditórias (retas paralelas)"]] } },
    { p: "Regra de Cramer: num SPD, cada incógnita é igual ao determinante obtido trocando a coluna dela pela coluna dos termos independentes, dividido pelo determinante principal. Sistema homogêneo (todos os termos independentes iguais a zero) sempre tem a solução trivial (0, 0, …)." },
    { fonte: "Conteúdo programático do edital BB 2022." }
  ],
  checklist: ["Sei quando o produto de matrizes existe e qual a ordem do resultado", "Calculo determinantes de ordem 2 e 3", "Aplico as propriedades dos determinantes", "Classifico um sistema como SPD, SPI ou SI", "Sei usar a regra de Cramer"],
  questoes: [
    { tipo: "mc", enunciado: "O determinante da matriz [2 3; 1 4] é:", opcoes: ["11", "5", "−5", "8", "3"], correta: 1, explicacao: "2·4 − 3·1 = 5." },
    { tipo: "mc", enunciado: "Se A é uma matriz 2 × 3 e B é 3 × 4, a matriz A·B:", opcoes: ["não existe", "é 3 × 3", "é 4 × 2", "é 2 × 4", "é 2 × 3"], correta: 3, explicacao: "Colunas de A (3) = linhas de B (3): AB é 2 × 4." },
    { tipo: "mc", enunciado: "Sendo A = [1 2; 3 4], o elemento da 2ª linha e 1ª coluna da transposta de A é:", opcoes: ["1", "2", "3", "4", "0"], correta: 1, explicacao: "Aᵀ = [1 3; 2 4]: o elemento (2,1) é 2." },
    { tipo: "mc", enunciado: "O determinante da matriz [1 2 0; 0 1 3; 2 0 1] é:", opcoes: ["13", "11", "−11", "7", "1"], correta: 0, explicacao: "Por Sarrus: 1 + 12 + 0 − (0 + 0 + 0) = 13." },
    { tipo: "mc", enunciado: "O sistema x + y = 2 e 2x + 2y = 5 é:", opcoes: ["possível e determinado", "possível e indeterminado", "impossível", "homogêneo", "satisfeito por x = 1 e y = 1"], correta: 2, explicacao: "A segunda equação equivale a x + y = 2,5, que contradiz a primeira: impossível." },
    { tipo: "mc", enunciado: "Se A é uma matriz de ordem 3 com det A = 4, então det(2A) é:", opcoes: ["8", "16", "32", "64", "12"], correta: 2, explicacao: "det(kA) = kⁿ det A = 2³ × 4 = 32." },
    { tipo: "ce", enunciado: "Uma matriz quadrada que tem duas linhas iguais tem determinante igual a zero.", certo: true, explicacao: "Propriedade das filas iguais." },
    { tipo: "ce", enunciado: "Para quaisquer matrizes quadradas A e B de mesma ordem, A·B = B·A.", certo: false, explicacao: "O produto de matrizes não é comutativo em geral." },
    { tipo: "ce", enunciado: "Todo sistema linear homogêneo admite pelo menos a solução trivial.", certo: true, explicacao: "Todas as incógnitas iguais a zero satisfazem o sistema." },
    { tipo: "ce", enunciado: "Se o determinante da matriz dos coeficientes de um sistema linear quadrado é diferente de zero, o sistema é possível e determinado.", certo: true, explicacao: "Condição da regra de Cramer." }
  ]
},

MAT5: {
  disciplina: "Matemática e Raciocínio Lógico", titulo: "Sequências, PA e PG",
  objetivo: "Achar a lei de formação de sequências, calcular termos e somas de progressões aritméticas e geométricas.",
  edital: ["Sequências; progressões aritméticas e geométricas (BB)", "Sequências e progressões (PRF)"],
  porque: ["PA e PG aparecem em problemas de crescimento e de juros: juros simples formam PA e juros compostos formam PG.", "Sequências lógicas são cobradas como raciocínio sem fórmula."],
  conteudo: [
    { h: "Sequências" },
    { p: "Sequência é uma lista ordenada com uma lei de formação. Procure diferenças constantes (PA), razões constantes (PG), somas dos anteriores (Fibonacci: 1, 1, 2, 3, 5, 8, 13…), alternância de padrões ou operações que se repetem." },
    { h: "Progressão aritmética (PA)" },
    { formula: "Termo geral:  aₙ = a₁ + (n − 1)·r\nSoma:        Sₙ = (a₁ + aₙ)·n / 2\nTermo médio: b = (a + c) / 2" },
    { ex: "Na PA 3, 7, 11, …, r = 4 e a₂₀ = 3 + 19 × 4 = 79. A soma 1 + 2 + … + 100 = (1 + 100) × 100 ÷ 2 = 5.050." },
    { h: "Progressão geométrica (PG)" },
    { formula: "Termo geral:     aₙ = a₁ · qⁿ⁻¹\nSoma finita:     Sₙ = a₁ · (qⁿ − 1) / (q − 1)\nSoma infinita:   S = a₁ / (1 − q),  só se |q| < 1\nTermo médio:     b² = a · c" },
    { ex: "PG 2, 6, 18, …: q = 3 e a₆ = 2 × 3⁵ = 486. A soma 10 + 5 + 2,5 + … = 10 ÷ (1 − 1/2) = 20." },
    { lista: ["PG com q > 1 e a₁ > 0: crescente.", "0 < q < 1: decrescente.", "q < 0: alternante (os sinais trocam).", "q = 1: constante."] },
    { dica: "Para três termos em PA, use x − r, x, x + r; em PG, use x/q, x, x·q. Isso simplifica a soma e o produto." },
    { fonte: "Conteúdo programático dos editais BB 2022 e PRF 2021." }
  ],
  checklist: ["Encontro a lei de formação de sequências simples", "Uso termo geral e soma da PA", "Uso termo geral e soma da PG", "Sei quando existe a soma infinita da PG", "Reconheço PG crescente, decrescente e alternante"],
  questoes: [
    { tipo: "mc", enunciado: "O 20º termo da PA (3, 7, 11, …) é:", opcoes: ["83", "76", "79", "80", "75"], correta: 2, explicacao: "a₂₀ = 3 + 19 × 4 = 79." },
    { tipo: "mc", enunciado: "A soma dos 100 primeiros números naturais positivos é:", opcoes: ["5.000", "5.050", "5.100", "10.100", "4.950"], correta: 1, explicacao: "(1 + 100) × 100 ÷ 2 = 5.050." },
    { tipo: "mc", enunciado: "O 6º termo da PG (2, 6, 18, …) é:", opcoes: ["162", "486", "1.458", "243", "729"], correta: 1, explicacao: "2 × 3⁵ = 486." },
    { tipo: "mc", enunciado: "A soma dos infinitos termos da PG (10; 5; 2,5; …) é:", opcoes: ["15", "25", "20", "30", "não existe"], correta: 2, explicacao: "q = 1/2 → S = 10 ÷ 0,5 = 20." },
    { tipo: "mc", enunciado: "Qual o próximo termo da sequência 1, 1, 2, 3, 5, 8, …?", opcoes: ["11", "12", "15", "16", "13"], correta: 4, explicacao: "Cada termo é a soma dos dois anteriores: 5 + 8 = 13." },
    { tipo: "mc", enunciado: "A soma dos múltiplos de 5 de 5 a 50 (inclusive) é:", opcoes: ["250", "275", "300", "550", "225"], correta: 1, explicacao: "São 10 termos: (5 + 50) × 10 ÷ 2 = 275." },
    { tipo: "ce", enunciado: "Em uma PA, cada termo, a partir do segundo, é a média aritmética entre o anterior e o seguinte.", certo: true, explicacao: "Propriedade do termo médio." },
    { tipo: "ce", enunciado: "Em uma PG de razão negativa, os termos alternam de sinal.", certo: true, explicacao: "Multiplicar por número negativo troca o sinal a cada termo." },
    { tipo: "ce", enunciado: "A soma dos infinitos termos de uma PG existe para qualquer razão q com |q| ≥ 1.", certo: false, explicacao: "Só existe para |q| < 1." },
    { tipo: "ce", enunciado: "O termo geral de uma PA é aₙ = a₁ + (n − 1)·r.", certo: true, explicacao: "Fórmula do termo geral." }
  ]
},

MAT6: {
  disciplina: "Matemática e Raciocínio Lógico", titulo: "Análise combinatória",
  objetivo: "Contar possibilidades com o princípio multiplicativo, permutações, arranjos e combinações, decidindo quando a ordem importa.",
  edital: ["Problemas de contagem (BB)", "Contagem (PRF)", "Princípios de contagem; arranjos e permutações; combinações (Detran)"],
  porque: ["A pergunta-chave é sempre a mesma: a ordem muda o resultado? Isso decide entre arranjo e combinação.", "Contagem é pré-requisito de probabilidade."],
  conteudo: [
    { h: "Princípio fundamental da contagem" },
    { p: "Se uma decisão tem m possibilidades e outra, independente, tem n, as duas juntas têm m × n possibilidades. Vale para quantas etapas houver." },
    { ex: "3 camisas, 4 calças e 2 pares de sapatos: 3 × 4 × 2 = 24 combinações de roupa. Senhas de 4 dígitos distintos: 10 × 9 × 8 × 7 = 5.040." },
    { h: "Fatorial" },
    { p: "n! = n × (n − 1) × … × 1. Por definição, 0! = 1 e 1! = 1. Simplifique antes de multiplicar: 10!/8! = 10 × 9 = 90." },
    { h: "Permutação, arranjo e combinação" },
    { tabela: { cab: ["Tipo", "Quando usar", "Fórmula"], linhas: [
      ["Permutação simples", "Ordenar todos os n elementos", "Pₙ = n!"],
      ["Permutação com repetição", "Ordenar n elementos com repetições (a, b, …)", "n! / (a! · b! · …)"],
      ["Permutação circular", "Pessoas ao redor de uma mesa", "(n − 1)!"],
      ["Arranjo", "Escolher p de n e a ordem importa", "A(n, p) = n! / (n − p)!"],
      ["Combinação", "Escolher p de n e a ordem não importa", "C(n, p) = n! / [p! · (n − p)!]"]] } },
    { ex: "Anagramas de PROVA (5 letras distintas): 5! = 120. Anagramas de BANANA (3 A, 2 N): 6!/(3!·2!) = 60. Pódio com 10 atletas: A(10, 3) = 720. Comissão de 3 pessoas entre 8: C(8, 3) = 56." },
    { dica: "Teste da ordem: troque a ordem de dois escolhidos. Se virou outra coisa (outro pódio, outra senha), é arranjo. Se continua a mesma coisa (mesma comissão, mesmo grupo), é combinação." },
    { p: "Propriedade útil: C(n, p) = C(n, n − p). Escolher 3 de 10 para ir é o mesmo que escolher 7 de 10 para ficar." },
    { fonte: "Conteúdo programático dos editais BB 2022, PRF 2021 e Detran-PA 2018." }
  ],
  checklist: ["Aplico o princípio multiplicativo", "Simplifico fatoriais", "Calculo permutações simples, com repetição e circulares", "Uso o teste da ordem para escolher entre arranjo e combinação", "Calculo arranjos e combinações"],
  questoes: [
    { tipo: "mc", enunciado: "Quantas senhas de 4 algarismos distintos podem ser formadas com os dígitos de 0 a 9?", opcoes: ["10.000", "5.040", "210", "24", "6.561"], correta: 1, explicacao: "10 × 9 × 8 × 7 = 5.040 (a ordem importa)." },
    { tipo: "mc", enunciado: "Quantos anagramas tem a palavra PROVA?", opcoes: ["24", "60", "120", "720", "25"], correta: 2, explicacao: "5 letras distintas: 5! = 120." },
    { tipo: "mc", enunciado: "De quantas maneiras se pode formar uma comissão de 3 pessoas escolhidas entre 8?", opcoes: ["336", "24", "512", "56", "28"], correta: 3, explicacao: "Ordem não importa: C(8, 3) = 56." },
    { tipo: "mc", enunciado: "Quantos anagramas tem a palavra BANANA?", opcoes: ["720", "120", "60", "20", "360"], correta: 2, explicacao: "6!/(3!·2!) = 720 ÷ 12 = 60." },
    { tipo: "mc", enunciado: "Dez atletas disputam uma prova com premiação para 1º, 2º e 3º lugares. O número de pódios possíveis é:", opcoes: ["120", "720", "1.000", "30", "210"], correta: 1, explicacao: "Ordem importa: A(10, 3) = 10 × 9 × 8 = 720." },
    { tipo: "mc", enunciado: "Uma pessoa tem 3 camisas, 4 calças e 2 pares de sapatos. Quantas formas diferentes de se vestir ela tem?", opcoes: ["9", "12", "18", "24", "48"], correta: 3, explicacao: "3 × 4 × 2 = 24." },
    { tipo: "ce", enunciado: "Na combinação simples, a ordem dos elementos escolhidos altera o agrupamento.", certo: false, explicacao: "Na combinação a ordem não importa; no arranjo, importa." },
    { tipo: "ce", enunciado: "Para quaisquer n e p com 0 ≤ p ≤ n, C(n, p) = C(n, n − p).", certo: true, explicacao: "Escolher p para entrar equivale a escolher n − p para ficar de fora." },
    { tipo: "ce", enunciado: "Por definição, 0! = 1.", certo: true, explicacao: "Convenção que mantém as fórmulas válidas." },
    { tipo: "ce", enunciado: "Cinco pessoas podem ser organizadas em fila de 120 maneiras diferentes.", certo: true, explicacao: "5! = 120." }
  ]
},

LOG1: {
  disciplina: "Matemática e Raciocínio Lógico", titulo: "Lógica proposicional",
  objetivo: "Reconhecer proposições, montar tabelas-verdade, aplicar equivalências e negações e negar frases com quantificadores.",
  edital: ["Lógica proposicional (BB)", "Compreensão de estruturas lógicas (Detran)", "Raciocínio lógico (PRF)"],
  porque: ["O Cebraspe e a Cesgranrio cobram muito negação da condicional e equivalência contrapositiva.", "Negação de 'todo' e 'nenhum' é erro clássico de candidato."],
  conteudo: [
    { h: "Proposição" },
    { p: "Proposição é uma frase declarativa que pode ser julgada como verdadeira ou falsa, e só uma delas. Não são proposições: perguntas, ordens, exclamações, frases sem verbo e sentenças abertas ('x + 2 = 5', 'Ele é policial' sem saber quem é 'ele')." },
    { h: "Conectivos e tabela-verdade" },
    { tabela: { cab: ["Conectivo", "Símbolo", "Leitura", "É falsa quando"], linhas: [
      ["Negação", "¬p ou ~p", "não p", "p é verdadeira"],
      ["Conjunção", "p ∧ q", "p e q", "pelo menos uma é falsa (só é V se ambas V)"],
      ["Disjunção inclusiva", "p ∨ q", "p ou q", "ambas são falsas"],
      ["Disjunção exclusiva", "p ⊻ q", "ou p ou q", "ambas têm o mesmo valor"],
      ["Condicional", "p → q", "se p, então q", "p é V e q é F (Vera Fischer = falso)"],
      ["Bicondicional", "p ↔ q", "p se e somente se q", "os valores são diferentes"]] } },
    { p: "Número de linhas da tabela-verdade: 2ⁿ, em que n é o número de proposições simples diferentes. Com 3 proposições, 8 linhas; com 4, 16." },
    { p: "Tautologia é a proposição composta sempre verdadeira (ex.: p ∨ ¬p). Contradição é sempre falsa (ex.: p ∧ ¬p). Contingência é a que pode ser V ou F." },
    { h: "Equivalências mais cobradas" },
    { formula: "p → q  ≡  ¬q → ¬p      (contrapositiva)\np → q  ≡  ¬p ∨ q\np ↔ q  ≡  (p → q) ∧ (q → p)\n¬(p ∧ q)  ≡  ¬p ∨ ¬q   (De Morgan)\n¬(p ∨ q)  ≡  ¬p ∧ ¬q   (De Morgan)\n¬(p → q)  ≡  p ∧ ¬q" },
    { ex: "'Se bebeu, não dirige' equivale a 'Se dirige, não bebeu' (contrapositiva) e a 'Não bebeu ou não dirige'. A negação é 'Bebeu e dirige'." },
    { alerta: "A recíproca (q → p) e a inversa (¬p → ¬q) NÃO são equivalentes à condicional. 'Se chove, a pista molha' não garante 'Se a pista molha, choveu'." },
    { h: "Quantificadores e suas negações" },
    { tabela: { cab: ["Proposição", "Negação"], linhas: [
      ["Todo A é B", "Algum A não é B (existe A que não é B)"],
      ["Algum A é B", "Nenhum A é B"],
      ["Nenhum A é B", "Algum A é B"],
      ["Algum A não é B", "Todo A é B"]] } },
    { dica: "A negação de 'Todos os agentes são concursados' NÃO é 'Nenhum agente é concursado'. Basta um contraexemplo: 'Algum agente não é concursado'." },
    { fonte: "Conteúdo programático dos editais BB 2022, Detran-PA 2018 e PRF 2021." }
  ],
  checklist: ["Sei o que é e o que não é proposição", "Sei quando cada conectivo é falso", "Calculo o número de linhas da tabela-verdade", "Aplico contrapositiva e De Morgan", "Nego a condicional (p ∧ ¬q)", "Nego frases com todo, algum e nenhum"],
  questoes: [
    { tipo: "mc", enunciado: "A negação de 'Se chove, então a pista fica molhada' é:", opcoes: ["Se não chove, a pista não fica molhada.", "Chove e a pista não fica molhada.", "Não chove e a pista fica molhada.", "Se a pista fica molhada, então chove.", "Não chove ou a pista não fica molhada."], correta: 1, explicacao: "¬(p → q) ≡ p ∧ ¬q." },
    { tipo: "mc", enunciado: "Uma proposição equivalente a 'Se o condutor bebeu, então não dirige' é:", opcoes: ["Se o condutor não bebeu, então dirige.", "Se o condutor dirige, então não bebeu.", "O condutor bebeu e dirige.", "Se o condutor não dirige, então bebeu.", "O condutor bebeu ou dirige."], correta: 1, explicacao: "Contrapositiva de p → ¬q: q → ¬p." },
    { tipo: "mc", enunciado: "A negação de 'Todos os agentes são concursados' é:", opcoes: ["Nenhum agente é concursado.", "Todos os agentes não são concursados.", "Algum agente não é concursado.", "Algum agente é concursado.", "Nenhum concursado é agente."], correta: 2, explicacao: "Negação de 'todo A é B': 'algum A não é B'." },
    { tipo: "mc", enunciado: "A proposição condicional p → q é falsa quando:", opcoes: ["p e q são falsas", "p é falsa e q é verdadeira", "p é verdadeira e q é falsa", "p e q são verdadeiras", "nunca é falsa"], correta: 2, explicacao: "Só é falsa com antecedente V e consequente F." },
    { tipo: "mc", enunciado: "A negação de 'João estuda e Maria trabalha' é:", opcoes: ["João não estuda e Maria não trabalha.", "João não estuda ou Maria não trabalha.", "Se João estuda, Maria trabalha.", "João estuda ou Maria trabalha.", "João não estuda se Maria não trabalha."], correta: 1, explicacao: "De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q." },
    { tipo: "mc", enunciado: "Qual proposição é uma tautologia?", opcoes: ["p ∧ ¬p", "p → ¬p", "p ∨ ¬p", "p ↔ ¬p", "p ∧ q"], correta: 2, explicacao: "p ∨ ¬p é sempre verdadeira." },
    { tipo: "ce", enunciado: "A frase 'Feche a porta do veículo!' é uma proposição.", certo: false, explicacao: "Ordem não pode ser julgada como V ou F." },
    { tipo: "ce", enunciado: "A proposição 'p → q' é equivalente a '¬p ∨ q'.", certo: true, explicacao: "Equivalência clássica da condicional." },
    { tipo: "ce", enunciado: "A negação de 'Nenhum condutor foi multado' é 'Todos os condutores foram multados'.", certo: false, explicacao: "A negação é 'Algum condutor foi multado'." },
    { tipo: "ce", enunciado: "Uma proposição composta por 4 proposições simples distintas tem tabela-verdade com 16 linhas.", certo: true, explicacao: "2⁴ = 16." }
  ]
},

LOG2: {
  disciplina: "Matemática e Raciocínio Lógico", titulo: "Argumentação, analogias e diagramas lógicos",
  objetivo: "Julgar a validade de argumentos, resolver silogismos com diagramas e reconhecer analogias e falácias.",
  edital: ["Lógica de argumentação: analogias, inferências, deduções e conclusões (Detran)", "Diagramas lógicos (Detran)"],
  porque: ["Questões de 'qual conclusão é necessariamente verdadeira' se resolvem rápido com desenho.", "Separar validade de verdade evita a armadilha mais comum dessas questões."],
  conteudo: [
    { h: "Argumento, validade e verdade" },
    { p: "Argumento é um conjunto de premissas que leva a uma conclusão. Ele é válido quando, se todas as premissas forem verdadeiras, a conclusão for obrigatoriamente verdadeira. A validade depende da forma, não do conteúdo: um argumento pode ser válido com premissas falsas, e inválido com conclusão verdadeira." },
    { h: "Formas válidas" },
    { tabela: { cab: ["Nome", "Forma", "Exemplo"], linhas: [
      ["Modus ponens", "p → q; p; logo q", "Se chove, a pista molha. Choveu. Logo, a pista molhou."],
      ["Modus tollens", "p → q; ¬q; logo ¬p", "Se chove, a pista molha. A pista não molhou. Logo, não choveu."],
      ["Silogismo hipotético", "p → q; q → r; logo p → r", "Se bebe, perde reflexo; se perde reflexo, se acidenta. Logo, se bebe, se acidenta."],
      ["Silogismo disjuntivo", "p ∨ q; ¬p; logo q", "Vai de carro ou de ônibus. Não vai de carro. Logo, vai de ônibus."]] } },
    { h: "Falácias formais" },
    { lista: ["Afirmação do consequente: p → q; q; logo p. Inválido. 'Se chove, a pista molha. A pista molhou. Logo choveu' (pode ter sido um caminhão-pipa).", "Negação do antecedente: p → q; ¬p; logo ¬q. Inválido. 'Se chove, a pista molha. Não choveu. Logo a pista não molhou.'"] },
    { h: "Diagramas lógicos (silogismos categóricos)" },
    { lista: ["Todo A é B: o círculo A fica dentro do B.", "Nenhum A é B: círculos separados.", "Algum A é B: círculos com interseção, com pelo menos um elemento nela.", "Algum A não é B: há elemento de A fora de B."] },
    { p: "Para testar uma conclusão, desenhe as premissas e tente montar um desenho em que todas sejam verdadeiras e a conclusão seja falsa. Se conseguir, a conclusão não é necessária." },
    { ex: "Todos os policiais são servidores. Alguns servidores são professores. Conclusão 'Alguns policiais são professores'? Não é necessária: dá para desenhar os professores na parte dos servidores que não é policial." },
    { ex: "Todos os A são B. Nenhum B é C. Conclusão necessária: nenhum A é C, porque A está inteiro dentro de B, e B não toca C." },
    { h: "Analogias" },
    { p: "Analogia é uma relação que se repete: 'pé está para sapato assim como mão está para luva' (o objeto que veste a parte do corpo). Identifique a relação do primeiro par (parte/todo, causa/efeito, instrumento/função, profissional/ferramenta) e procure o par com a mesma relação." },
    { fonte: "Conteúdo programático do edital Detran-PA 2018." }
  ],
  checklist: ["Diferencio argumento válido de conclusão verdadeira", "Reconheço modus ponens e modus tollens", "Reconheço as falácias do consequente e do antecedente", "Resolvo silogismos com diagramas", "Identifico a relação em analogias"],
  questoes: [
    { tipo: "mc", enunciado: "Considere: 'Se chove, a pista fica molhada. A pista não está molhada.' Conclui-se corretamente que:", opcoes: ["choveu", "não choveu", "a pista vai molhar", "pode ter chovido", "nada se conclui"], correta: 1, explicacao: "Modus tollens: p → q e ¬q permitem concluir ¬p." },
    { tipo: "mc", enunciado: "Todos os A são B e nenhum B é C. Logo, necessariamente:", opcoes: ["Algum A é C.", "Todo C é A.", "Nenhum A é C.", "Algum B é A e C.", "Todo B é A."], correta: 2, explicacao: "A está dentro de B, que não toca C." },
    { tipo: "mc", enunciado: "Pé está para sapato assim como mão está para:", opcoes: ["dedo", "luva", "braço", "anel", "unha"], correta: 1, explicacao: "Relação: peça que veste a parte do corpo." },
    { tipo: "mc", enunciado: "O argumento 'Se o motorista bebeu, foi autuado. Ele foi autuado. Logo, bebeu' é:", opcoes: ["válido, por modus ponens", "válido, por modus tollens", "inválido, por afirmação do consequente", "inválido, por negação do antecedente", "válido, por silogismo disjuntivo"], correta: 2, explicacao: "Afirmar o consequente não garante o antecedente: ele pode ter sido autuado por outro motivo." },
    { tipo: "mc", enunciado: "Algum policial é atleta. Todo atleta é disciplinado. Logo:", opcoes: ["Todo policial é disciplinado.", "Algum policial é disciplinado.", "Nenhum policial é disciplinado.", "Todo disciplinado é atleta.", "Algum atleta não é policial."], correta: 1, explicacao: "O policial que é atleta está dentro de 'disciplinado'." },
    { tipo: "mc", enunciado: "'Ou ele vai de carro ou vai de ônibus. Ele não vai de carro.' Conclui-se que:", opcoes: ["vai de ônibus", "não vai de ônibus", "vai a pé", "pode ir de carro", "nada se conclui"], correta: 0, explicacao: "Silogismo disjuntivo." },
    { tipo: "ce", enunciado: "Um argumento válido pode ter conclusão falsa, desde que pelo menos uma das premissas seja falsa.", certo: true, explicacao: "Validade garante só que premissas verdadeiras levam a conclusão verdadeira." },
    { tipo: "ce", enunciado: "Se todas as premissas de um argumento são verdadeiras e a conclusão também é verdadeira, o argumento é necessariamente válido.", certo: false, explicacao: "A conclusão pode ser verdadeira por acaso, sem decorrer das premissas." },
    { tipo: "ce", enunciado: "Das premissas 'Todo policial é servidor' e 'Algum servidor é professor', conclui-se necessariamente que algum policial é professor.", certo: false, explicacao: "Os professores podem estar só na parte dos servidores que não é policial." },
    { tipo: "ce", enunciado: "A forma 'Se p, então q; não p; logo, não q' é um argumento inválido.", certo: true, explicacao: "Falácia da negação do antecedente." }
  ]
},

EST1: {
  disciplina: "Estatística", titulo: "Estatística descritiva",
  objetivo: "Ler tabelas e gráficos e calcular medidas de posição (média, mediana, moda, quartis) e de dispersão (amplitude, variância, desvio padrão, coeficiente de variação).",
  edital: ["Representação tabular e gráfica; medidas de tendência central e de dispersão (BB Tecnologia)", "Estatística (PRF)"],
  porque: ["No BB Tecnologia, Probabilidade e Estatística vale 7,5 pontos e é o terceiro critério de desempate.", "Na PRF, a banca cobra leitura de gráficos e médias em itens do Bloco I."],
  conteudo: [
    { h: "Tipos de variável e gráficos" },
    { lista: ["Qualitativa nominal (cor, marca), qualitativa ordinal (escolaridade), quantitativa discreta (número de multas), quantitativa contínua (velocidade, peso).", "Gráfico de barras e de setores: variáveis qualitativas.", "Histograma: quantitativa contínua agrupada em classes; as barras se tocam.", "Gráfico de linhas: evolução no tempo.", "Boxplot: mostra mínimo, Q1, mediana, Q3 e máximo; útil para ver assimetria e valores atípicos."] },
    { h: "Medidas de tendência central" },
    { tabela: { cab: ["Medida", "Como calcular", "Observação"], linhas: [
      ["Média aritmética", "Soma dos valores ÷ quantidade", "Sensível a valores extremos"],
      ["Média ponderada", "Σ(valor × peso) ÷ Σpesos", "Notas com pesos diferentes"],
      ["Mediana", "Valor central dos dados ordenados; se a quantidade é par, média dos dois centrais", "Resistente a valores extremos"],
      ["Moda", "Valor mais frequente", "Pode haver mais de uma ou nenhuma"]] } },
    { ex: "Dados 2, 4, 4, 5, 7, 8: média = 30 ÷ 6 = 5; mediana = (4 + 5) ÷ 2 = 4,5; moda = 4." },
    { h: "Medidas de posição: quartis" },
    { p: "Q1 deixa 25% dos dados abaixo, Q2 é a mediana e Q3 deixa 75% abaixo. A amplitude interquartil (AIQ) é Q3 − Q1 e mede a dispersão dos 50% centrais. Valores abaixo de Q1 − 1,5·AIQ ou acima de Q3 + 1,5·AIQ costumam ser tratados como atípicos (outliers) no boxplot." },
    { h: "Medidas de dispersão" },
    { formula: "Amplitude = máximo − mínimo\nVariância populacional  σ² = Σ(xᵢ − μ)² / N\nVariância amostral      s² = Σ(xᵢ − x̄)² / (n − 1)\nDesvio padrão = √variância\nCoeficiente de variação CV = desvio padrão ÷ média" },
    { ex: "Dados 2, 4, 4, 4, 5, 5, 7, 9: média 5; desvios ao quadrado 9, 1, 1, 1, 0, 0, 4, 16 = 32; variância populacional 32 ÷ 8 = 4; desvio padrão 2; CV = 2 ÷ 5 = 40%." },
    { h: "O que acontece com as medidas" },
    { tabela: { cab: ["Transformação nos dados", "Média, mediana, moda", "Desvio padrão", "Variância"], linhas: [
      ["Somar uma constante k", "Somam k", "Não muda", "Não muda"],
      ["Multiplicar por k", "Multiplicam por k", "Multiplica por |k|", "Multiplica por k²"]] } },
    { alerta: "A variância fica na unidade ao quadrado (km²/h², por exemplo). Por isso o desvio padrão, na mesma unidade dos dados, é a medida usada para interpretar." },
    { fonte: "Conteúdo programático dos editais BB 2022 (Agente de Tecnologia) e PRF 2021." }
  ],
  checklist: ["Classifico variáveis e escolho o gráfico adequado", "Calculo média, média ponderada, mediana e moda", "Sei o que são quartis e AIQ", "Calculo variância, desvio padrão e CV", "Sei o efeito de somar ou multiplicar constantes"],
  questoes: [
    { tipo: "mc", enunciado: "A média aritmética de 3, 5, 7, 9 e 11 é:", opcoes: ["5", "6", "7", "8", "9"], correta: 2, explicacao: "35 ÷ 5 = 7." },
    { tipo: "mc", enunciado: "A mediana do conjunto 8, 2, 5, 10, 3, 7 é:", opcoes: ["5", "5,5", "6", "7", "7,5"], correta: 2, explicacao: "Ordenado: 2, 3, 5, 7, 8, 10 → (5 + 7) ÷ 2 = 6." },
    { tipo: "mc", enunciado: "A moda do conjunto 1, 2, 2, 3, 3, 3, 4 é:", opcoes: ["1", "2", "3", "4", "2,57"], correta: 2, explicacao: "3 aparece três vezes." },
    { tipo: "mc", enunciado: "O desvio padrão populacional do conjunto 2, 4, 4, 4, 5, 5, 7, 9 é:", opcoes: ["1", "2", "4", "5", "√5"], correta: 1, explicacao: "Média 5, variância 32 ÷ 8 = 4, desvio padrão 2." },
    { tipo: "mc", enunciado: "Uma amostra tem média 50 e desvio padrão 10. O coeficiente de variação é:", opcoes: ["5%", "10%", "20%", "40%", "50%"], correta: 2, explicacao: "10 ÷ 50 = 0,2 = 20%." },
    { tipo: "mc", enunciado: "Se somarmos 3 a todos os valores de um conjunto de dados:", opcoes: ["a média e o desvio padrão aumentam 3", "a média aumenta 3 e o desvio padrão não muda", "a média não muda e o desvio padrão aumenta 3", "a variância aumenta 9", "a mediana não muda"], correta: 1, explicacao: "Somar constante desloca as medidas de posição e não altera a dispersão." },
    { tipo: "ce", enunciado: "Multiplicar todos os dados por 2 multiplica o desvio padrão por 2 e a variância por 4.", certo: true, explicacao: "Desvio por |k|; variância por k²." },
    { tipo: "ce", enunciado: "A mediana é mais afetada por valores extremos do que a média.", certo: false, explicacao: "A mediana é resistente a valores extremos; a média não." },
    { tipo: "ce", enunciado: "A amplitude total é a diferença entre o maior e o menor valor do conjunto.", certo: true, explicacao: "Definição de amplitude." },
    { tipo: "ce", enunciado: "A variância é expressa na mesma unidade de medida dos dados originais.", certo: false, explicacao: "A variância fica na unidade ao quadrado; o desvio padrão é que fica na mesma unidade." }
  ]
},

EST2: {
  disciplina: "Estatística", titulo: "Probabilidade",
  objetivo: "Calcular probabilidades de eventos simples, uniões, interseções, probabilidade condicional e aplicar o Teorema de Bayes.",
  edital: ["Probabilidade condicional; Teorema de Bayes (BB Tecnologia)", "Probabilidade (PRF)", "Princípios de contagem e probabilidade (Detran)"],
  porque: ["Bayes é cobrado no BB Tecnologia e explica, por exemplo, por que um teste com resultado positivo pode ter baixa chance de acerto quando o evento é raro.", "Na PRF e no Detran, a probabilidade vem junto com contagem."],
  conteudo: [
    { h: "Conceitos" },
    { lista: ["Espaço amostral (Ω): todos os resultados possíveis.", "Evento: subconjunto do espaço amostral.", "Probabilidade clássica (resultados igualmente prováveis): P(A) = casos favoráveis ÷ casos possíveis.", "0 ≤ P(A) ≤ 1; P(Ω) = 1; P(evento impossível) = 0.", "Complementar: P(não A) = 1 − P(A)."] },
    { h: "União e interseção" },
    { formula: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)\nMutuamente exclusivos (não ocorrem juntos): P(A ∩ B) = 0\nIndependentes: P(A ∩ B) = P(A) · P(B)" },
    { ex: "Dois dados: P(soma 7) = 6 ÷ 36 = 1/6 (pares (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)). Três lançamentos de moeda, exatamente duas caras: 3 ÷ 8." },
    { h: "Probabilidade condicional" },
    { formula: "P(A | B) = P(A ∩ B) / P(B)     (probabilidade de A sabendo que B ocorreu)" },
    { ex: "Urna com 5 bolas vermelhas e 3 azuis, duas retiradas sem reposição. P(as duas vermelhas) = 5/8 × 4/7 = 20/56 = 5/14." },
    { h: "Teorema da probabilidade total e Teorema de Bayes" },
    { formula: "P(B) = P(B|A)·P(A) + P(B|não A)·P(não A)\n\nP(A|B) = P(B|A)·P(A) / P(B)" },
    { ex: "1% dos condutores abordados está alcoolizado. O teste dá positivo em 90% dos alcoolizados e, por erro, em 5% dos sóbrios. P(positivo) = 0,9 × 0,01 + 0,05 × 0,99 = 0,009 + 0,0495 = 0,0585. P(alcoolizado | positivo) = 0,009 ÷ 0,0585 ≈ 15%." },
    { dica: "Monte uma árvore de probabilidades: primeiro a divisão da população (A ou não A), depois o resultado do teste em cada ramo. Multiplique ao longo do ramo e some os ramos que levam ao mesmo resultado." },
    { alerta: "Eventos mutuamente exclusivos com probabilidade positiva NÃO são independentes: se um ocorre, o outro passa a ter probabilidade zero." },
    { fonte: "Conteúdo programático dos editais BB 2022 (Agente de Tecnologia), PRF 2021 e Detran-PA 2018." }
  ],
  checklist: ["Calculo probabilidade clássica e complementar", "Uso a fórmula da união", "Diferencio eventos independentes de mutuamente exclusivos", "Calculo probabilidade condicional", "Resolvo problemas de Bayes com árvore"],
  questoes: [
    { tipo: "mc", enunciado: "Lançando-se dois dados honestos, a probabilidade de a soma ser 7 é:", opcoes: ["1/12", "1/9", "1/6", "7/36", "1/3"], correta: 2, explicacao: "6 casos favoráveis em 36: 1/6." },
    { tipo: "mc", enunciado: "Lançando-se uma moeda três vezes, a probabilidade de sair exatamente duas caras é:", opcoes: ["1/8", "1/4", "3/8", "1/2", "2/3"], correta: 2, explicacao: "KKC, KCK, CKK: 3 casos em 8." },
    { tipo: "mc", enunciado: "Uma urna tem 5 bolas vermelhas e 3 azuis. Retirando-se duas, sem reposição, a probabilidade de ambas serem vermelhas é:", opcoes: ["25/64", "5/14", "5/8", "1/2", "10/28"], correta: 1, explicacao: "5/8 × 4/7 = 20/56 = 5/14." },
    { tipo: "mc", enunciado: "1% dos condutores abordados está alcoolizado. O teste acusa 90% dos alcoolizados e dá falso positivo em 5% dos sóbrios. Se o teste deu positivo, a probabilidade de o condutor estar alcoolizado é de aproximadamente:", opcoes: ["90%", "15%", "50%", "5%", "1%"], correta: 1, explicacao: "0,009 ÷ (0,009 + 0,0495) ≈ 0,154." },
    { tipo: "mc", enunciado: "Se P(A) = 0,5, P(B) = 0,4 e P(A ∩ B) = 0,2, então P(A ∪ B) é:", opcoes: ["0,9", "0,7", "0,2", "0,1", "0,6"], correta: 1, explicacao: "0,5 + 0,4 − 0,2 = 0,7." },
    { tipo: "mc", enunciado: "Ao sortear um número de 1 a 20, a probabilidade de ele ser múltiplo de 4 é:", opcoes: ["1/5", "1/4", "1/3", "1/2", "2/5"], correta: 1, explicacao: "4, 8, 12, 16, 20: 5 casos em 20 = 1/4." },
    { tipo: "ce", enunciado: "Se A e B são independentes, então P(A ∩ B) = P(A) · P(B).", certo: true, explicacao: "Definição de independência." },
    { tipo: "ce", enunciado: "Dois eventos mutuamente exclusivos, ambos com probabilidade positiva, são independentes.", certo: false, explicacao: "Se são exclusivos, P(A ∩ B) = 0 ≠ P(A)·P(B) > 0." },
    { tipo: "ce", enunciado: "Se a probabilidade de chover amanhã é 0,3, a probabilidade de não chover é 0,7.", certo: true, explicacao: "Evento complementar." },
    { tipo: "ce", enunciado: "A probabilidade de um evento pode ser maior que 1 quando há muitos casos favoráveis.", certo: false, explicacao: "Toda probabilidade está entre 0 e 1." }
  ]
},

EST3: {
  disciplina: "Probabilidade e Estatística", titulo: "Variáveis aleatórias, distribuições e inferência",
  objetivo: "Trabalhar com variáveis aleatórias, distribuições binomial e normal, covariância e correlação, amostragem e noções de inferência.",
  edital: ["Variáveis aleatórias e distribuição de probabilidade; população e amostra; variância e covariância; correlação linear simples; distribuição binomial e normal; amostragem e inferência (BB Tecnologia)"],
  porque: ["Completa os 10 itens de Probabilidade e Estatística do BB Tecnologia.", "É a base de análise de dados e aprendizado de máquina, que também caem em TI."],
  conteudo: [
    { h: "Variável aleatória" },
    { p: "Variável aleatória associa um número a cada resultado de um experimento. Discreta assume valores contáveis (número de multas); contínua, valores num intervalo (tempo de reação)." },
    { formula: "Esperança  E[X] = Σ xᵢ · P(xᵢ)\nVariância  Var(X) = E[X²] − (E[X])²\nE[aX + b] = a·E[X] + b      Var(aX + b) = a²·Var(X)" },
    { h: "Distribuição binomial" },
    { p: "Conta o número de sucessos em n tentativas independentes, cada uma com probabilidade p de sucesso." },
    { formula: "P(X = k) = C(n, k) · pᵏ · (1 − p)ⁿ⁻ᵏ\nE[X] = n·p      Var(X) = n·p·(1 − p)" },
    { ex: "Moeda honesta lançada 4 vezes: P(2 caras) = C(4, 2) × 0,5⁴ = 6/16 = 0,375. Com n = 20 e p = 0,3: média 6 e variância 4,2." },
    { h: "Distribuição normal" },
    { p: "Curva em forma de sino, simétrica em torno da média μ, com média = mediana = moda. A padronização z = (x − μ) / σ transforma qualquer normal na normal padrão (média 0, desvio 1)." },
    { lista: ["Cerca de 68% dos valores ficam entre μ − σ e μ + σ.", "Cerca de 95% entre μ − 2σ e μ + 2σ (exatamente 95% entre ±1,96σ).", "Cerca de 99,7% entre μ − 3σ e μ + 3σ."] },
    { h: "Covariância e correlação" },
    { formula: "Cov(X, Y) = E[XY] − E[X]·E[Y]\nr = Cov(X, Y) / (σx · σy),   com −1 ≤ r ≤ 1" },
    { lista: ["r próximo de 1: relação linear positiva forte; próximo de −1: negativa forte; próximo de 0: sem relação linear (pode haver relação não linear).", "Correlação não implica causalidade.", "Var(X + Y) = Var(X) + Var(Y) + 2·Cov(X, Y). Se X e Y são independentes, a covariância é zero."] },
    { h: "Amostragem e inferência" },
    { lista: ["População é o conjunto completo; amostra é a parte observada. Parâmetro descreve a população (μ, σ); estatística descreve a amostra (x̄, s).", "Amostragem aleatória simples: todos têm a mesma chance. Estratificada: divide em grupos e sorteia em cada um. Sistemática: sorteia o primeiro e segue um intervalo fixo. Por conglomerados: sorteia grupos inteiros.", "Erro padrão da média: σ / √n. Quanto maior a amostra, menor o erro.", "Intervalo de confiança: x̄ ± z · σ/√n. Mais confiança (99% em vez de 95%) deixa o intervalo mais largo.", "Teste de hipótese: H₀ (hipótese nula) × H₁. Erro tipo I: rejeitar H₀ verdadeira (probabilidade α, nível de significância). Erro tipo II: não rejeitar H₀ falsa."] },
    { fonte: "Conteúdo programático do edital BB 2022 (Agente de Tecnologia)." }
  ],
  checklist: ["Calculo esperança e variância de uma variável discreta", "Uso a fórmula da binomial, sua média e variância", "Interpreto a regra 68–95–99,7 e o escore z", "Calculo covariância e interpreto a correlação", "Diferencio os tipos de amostragem", "Sei o efeito do tamanho da amostra e do nível de confiança"],
  questoes: [
    { tipo: "mc", enunciado: "Uma moeda honesta é lançada 4 vezes. A probabilidade de saírem exatamente 2 caras é:", opcoes: ["0,25", "0,375", "0,5", "0,625", "0,0625"], correta: 1, explicacao: "C(4,2) × (1/2)⁴ = 6/16 = 0,375." },
    { tipo: "mc", enunciado: "Para X com distribuição binomial de parâmetros n = 20 e p = 0,3, a média e a variância são, respectivamente:", opcoes: ["6 e 4,2", "6 e 1,8", "14 e 4,2", "6 e 6", "0,3 e 0,21"], correta: 0, explicacao: "np = 6; np(1 − p) = 20 × 0,3 × 0,7 = 4,2." },
    { tipo: "mc", enunciado: "O tempo de atendimento segue distribuição normal com média 100 s e desvio padrão 15 s. A proporção aproximada de atendimentos entre 85 s e 115 s é:", opcoes: ["34%", "50%", "68%", "95%", "99,7%"], correta: 2, explicacao: "Intervalo μ ± 1σ: cerca de 68%." },
    { tipo: "mc", enunciado: "Na distribuição do item anterior, um atendimento de 130 s corresponde a um escore z igual a:", opcoes: ["1", "1,5", "2", "3", "30"], correta: 2, explicacao: "z = (130 − 100) ÷ 15 = 2." },
    { tipo: "mc", enunciado: "Se E[X] = 2, E[Y] = 3 e E[XY] = 8, a covariância entre X e Y é:", opcoes: ["2", "5", "6", "8", "−2"], correta: 0, explicacao: "8 − 2 × 3 = 2." },
    { tipo: "mc", enunciado: "Um coeficiente de correlação linear r = −0,9 indica:", opcoes: ["ausência de relação", "relação linear positiva fraca", "relação linear negativa forte", "que X causa a redução de Y", "erro de cálculo, pois r não pode ser negativo"], correta: 2, explicacao: "r próximo de −1: relação linear negativa forte. Correlação não prova causa." },
    { tipo: "ce", enunciado: "Uma correlação linear forte entre duas variáveis prova que uma é causa da outra.", certo: false, explicacao: "Correlação não implica causalidade." },
    { tipo: "ce", enunciado: "Mantidas as demais condições, aumentar o tamanho da amostra reduz o erro padrão da média.", certo: true, explicacao: "Erro padrão = σ/√n." },
    { tipo: "ce", enunciado: "Mantidas as demais condições, um intervalo de 99% de confiança é mais estreito que um de 95%.", certo: false, explicacao: "Mais confiança exige intervalo mais largo." },
    { tipo: "ce", enunciado: "O erro do tipo I consiste em rejeitar a hipótese nula quando ela é verdadeira.", certo: true, explicacao: "Definição de erro tipo I, com probabilidade α." }
  ]
},

GEO1: {
  disciplina: "Matemática e Raciocínio Lógico", titulo: "Geometria, escalas, áreas e volumes",
  objetivo: "Ler mapas e plantas em escala, aplicar o teorema de Pitágoras e calcular perímetros, áreas e volumes.",
  edital: ["Mapas e plantas; escalas; geometria espacial; medidas, áreas e volumes (PRF)", "Volumes (Detran)"],
  porque: ["A PRF cobra leitura de mapas rodoviários em escala e cálculos de área e volume de cargas.", "No Detran, volume aparece expressamente no edital."],
  conteudo: [
    { h: "Escala" },
    { formula: "Escala = distância no mapa / distância real   (mesma unidade)\nEscala 1:50.000 → 1 cm no mapa = 50.000 cm = 500 m reais" },
    { ex: "Num mapa de escala 1:50.000, duas cidades estão a 4 cm. Distância real = 4 × 50.000 = 200.000 cm = 2 km." },
    { alerta: "Escala de área: se a escala linear é 1:k, a de área é 1:k². Uma área de 1 cm² num mapa 1:1.000 equivale a 1.000.000 cm² = 100 m²." },
    { h: "Triângulos e Pitágoras" },
    { lista: ["Soma dos ângulos internos de um triângulo: 180°. De um polígono de n lados: (n − 2) × 180°.", "Pitágoras (triângulo retângulo): hipotenusa² = cateto² + cateto². Ternos úteis: 3-4-5, 6-8-10, 5-12-13.", "Semelhança: triângulos com ângulos iguais têm lados proporcionais. Usada para calcular alturas por sombra."] },
    { h: "Áreas" },
    { tabela: { cab: ["Figura", "Área", "Perímetro / observação"], linhas: [
      ["Quadrado de lado a", "a²", "4a; diagonal a√2"],
      ["Retângulo b × h", "b · h", "2(b + h)"],
      ["Triângulo", "b · h / 2", "Equilátero de lado a: a²√3 / 4"],
      ["Paralelogramo", "b · h", "—"],
      ["Trapézio", "(B + b) · h / 2", "—"],
      ["Losango", "D · d / 2", "Diagonais"],
      ["Círculo de raio r", "π · r²", "Comprimento 2πr"]] } },
    { h: "Volumes" },
    { tabela: { cab: ["Sólido", "Volume"], linhas: [
      ["Cubo de aresta a", "a³ (diagonal a√3)"],
      ["Paralelepípedo a × b × c", "a · b · c"],
      ["Prisma", "Área da base × altura"],
      ["Cilindro", "π · r² · h"],
      ["Pirâmide", "Área da base × altura ÷ 3"],
      ["Cone", "π · r² · h ÷ 3"],
      ["Esfera", "4/3 · π · r³ (área da superfície 4πr²)"]] } },
    { ex: "Tanque cilíndrico de raio 1 m e altura 2 m: V = 3,14 × 1² × 2 = 6,28 m³ = 6.280 L." },
    { dica: "Multiplicar as dimensões de um sólido por k multiplica a área por k² e o volume por k³. Dobrar a aresta do cubo multiplica o volume por 8." },
    { fonte: "Conteúdo programático dos editais PRF 2021 e Detran-PA 2018." }
  ],
  checklist: ["Converto distâncias em mapas com escala", "Sei a escala de área", "Aplico Pitágoras e semelhança", "Calculo áreas das figuras planas", "Calculo volumes de prisma, cilindro, pirâmide, cone e esfera", "Sei o efeito de ampliar as dimensões"],
  questoes: [
    { tipo: "mc", enunciado: "Num mapa de escala 1:50.000, dois postos estão a 4 cm um do outro. A distância real é:", opcoes: ["200 m", "2 km", "20 km", "4 km", "500 m"], correta: 1, explicacao: "4 × 50.000 = 200.000 cm = 2 km." },
    { tipo: "mc", enunciado: "A área de um terreno retangular de 12 m por 8 m é:", opcoes: ["40 m²", "80 m²", "96 m²", "100 m²", "192 m²"], correta: 2, explicacao: "12 × 8 = 96." },
    { tipo: "mc", enunciado: "Usando π = 3,14, a área de um círculo de raio 10 m é:", opcoes: ["31,4 m²", "62,8 m²", "100 m²", "314 m²", "628 m²"], correta: 3, explicacao: "3,14 × 100 = 314." },
    { tipo: "mc", enunciado: "Usando π = 3,14, a capacidade de um tanque cilíndrico com raio 1 m e altura 2 m é:", opcoes: ["628 L", "3.140 L", "6.280 L", "12.560 L", "2.000 L"], correta: 2, explicacao: "3,14 × 1 × 2 = 6,28 m³ = 6.280 L." },
    { tipo: "mc", enunciado: "Um triângulo retângulo tem catetos de 6 m e 8 m. A hipotenusa mede:", opcoes: ["7 m", "10 m", "12 m", "14 m", "48 m"], correta: 1, explicacao: "√(36 + 64) = 10." },
    { tipo: "mc", enunciado: "Se a aresta de um cubo dobra, seu volume fica multiplicado por:", opcoes: ["2", "4", "6", "8", "16"], correta: 3, explicacao: "Volume é proporcional ao cubo da aresta: 2³ = 8." },
    { tipo: "ce", enunciado: "A área de um triângulo é dada pela metade do produto da base pela altura.", certo: true, explicacao: "A = b·h/2." },
    { tipo: "ce", enunciado: "Um hectare corresponde a 1.000 m².", certo: false, explicacao: "1 ha = 10.000 m²." },
    { tipo: "ce", enunciado: "A diagonal de um cubo de aresta a mede a√3.", certo: true, explicacao: "Pitágoras aplicado duas vezes." },
    { tipo: "ce", enunciado: "A soma dos ângulos internos de um quadrilátero convexo é 360°.", certo: true, explicacao: "(4 − 2) × 180° = 360°." }
  ]
}
});
