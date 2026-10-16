/* PRF, Bloco I: Física e Geopolítica */
window.MODULOS = Object.assign(window.MODULOS || {}, {
FIS1: {
  disciplina: "Física", titulo: "Cinemática e leis de Newton aplicadas ao trânsito",
  objetivo: "Resolver problemas de movimento uniforme e variado, distância de parada, curvas e forças, com os números típicos de ocorrências de trânsito.",
  edital: ["Cinemática escalar e vetorial; movimento retilíneo uniforme e uniformemente variado; queda livre; movimento circular", "Leis de Newton e aplicações; força de atrito; plano inclinado"],
  porque: ["A Física da PRF é contextualizada: frenagem, distância de parada, velocidade em curva, colisões.", "As contas são simples se você domina três fórmulas e a conversão de km/h para m/s."],
  conteudo: [
    { h: "Conversão de unidades" },
    { formula: "km/h ÷ 3,6 = m/s      m/s × 3,6 = km/h" },
    { ex: "72 km/h = 20 m/s; 90 km/h = 25 m/s; 108 km/h = 30 m/s; 36 km/h = 10 m/s." },
    { h: "Movimento uniforme (MRU)" },
    { formula: "s = s₀ + v·t" },
    { p: "Velocidade constante e aceleração nula. Velocidade média = deslocamento total ÷ tempo total (não é a média das velocidades)." },
    { ex: "Um carro percorre 60 km a 60 km/h e mais 60 km a 120 km/h. Tempo total = 1 h + 0,5 h = 1,5 h. Velocidade média = 120 ÷ 1,5 = 80 km/h, e não 90 km/h." },
    { h: "Movimento uniformemente variado (MRUV)" },
    { formula: "v = v₀ + a·t      s = s₀ + v₀·t + a·t²/2      v² = v₀² + 2·a·Δs (Torricelli)" },
    { dica: "Se o problema não dá o tempo, use Torricelli." },
    { h: "Distância de parada" },
    { formula: "d_parada = d_reação + d_frenagem = v·t_reação + v²/(2·a)" },
    { lista: ["Durante o tempo de reação o veículo segue em velocidade constante.", "A distância de frenagem é proporcional ao quadrado da velocidade: dobrar a velocidade quadruplica a frenagem.", "Se a desaceleração vem só do atrito dos pneus, a = μ·g e d_frenagem = v²/(2·μ·g)."] },
    { ex: "Carro a 20 m/s, tempo de reação de 1 s e desaceleração de 5 m/s². Reação: 20 m. Frenagem: 400 ÷ 10 = 40 m. Parada: 60 m." },
    { h: "Queda livre e lançamentos" },
    { p: "Na queda livre (g ≈ 10 m/s²), v = g·t e h = g·t²/2. No lançamento horizontal, o movimento horizontal é uniforme e o vertical é queda livre: o tempo de queda depende apenas da altura." },
    { h: "Movimento circular" },
    { formula: "v = ω·R      a_centrípeta = v²/R      F_centrípeta = m·v²/R" },
    { p: "Em curva plana, quem fornece a força centrípeta é o atrito lateral dos pneus. A velocidade máxima sem derrapar é v = √(μ·g·R): depende do atrito e do raio, não da massa do veículo." },
    { h: "Leis de Newton" },
    { lista: ["1ª (inércia): um corpo mantém seu estado de repouso ou de movimento retilíneo uniforme se a resultante das forças for nula. Por isso o passageiro sem cinto é projetado para a frente na frenagem.", "2ª (princípio fundamental): F_resultante = m·a.", "3ª (ação e reação): forças de mesma intensidade e direção, sentidos opostos, aplicadas em corpos diferentes; por isso não se anulam.", "Peso: P = m·g. Normal: perpendicular à superfície. Atrito: F_at = μ·N (estático máximo ou cinético).", "Plano inclinado de ângulo θ: componente do peso ao longo do plano P·sen θ; perpendicular P·cos θ."] },
    { fonte: "Conteúdo de Física do edital PRF 2021; Halliday, Resnick e Walker, Fundamentos de Física, vol. 1." }
  ],
  checklist: ["Converto km/h e m/s sem calculadora", "Calculo velocidade média corretamente", "Uso as três equações do MRUV e sei quando usar Torricelli", "Calculo distância de parada com reação e frenagem", "Calculo velocidade máxima em curva plana", "Aplico as três leis de Newton e a força de atrito"],
  questoes: [
    { tipo: "ce", enunciado: "Uma velocidade de 72 km/h corresponde a 20 m/s.", certo: true, explicacao: "72 ÷ 3,6 = 20." },
    { tipo: "ce", enunciado: "Um veículo a 20 m/s que freia com desaceleração constante de 5 m/s² percorre 40 m até parar.", certo: true, explicacao: "v²/(2a) = 400/10 = 40 m." },
    { tipo: "ce", enunciado: "Se a velocidade de um veículo dobra, mantida a desaceleração, a distância de frenagem também dobra.", certo: false, explicacao: "Proporcional a v²: quadruplica." },
    { tipo: "mc", enunciado: "Um motorista a 20 m/s tem tempo de reação de 1 s e o carro desacelera a 5 m/s². A distância total de parada é:", opcoes: ["20 m", "40 m", "50 m", "60 m", "80 m"], correta: 3, explicacao: "20 m de reação + 40 m de frenagem." },
    { tipo: "mc", enunciado: "Um carro parte do repouso com aceleração constante de 2 m/s². Após 5 s, sua velocidade e o deslocamento são:", opcoes: ["10 m/s e 25 m", "10 m/s e 50 m", "5 m/s e 25 m", "20 m/s e 25 m", "10 m/s e 10 m"], correta: 0, explicacao: "v = 2·5 = 10; s = 2·25/2 = 25." },
    { tipo: "ce", enunciado: "O fato de o passageiro sem cinto ser projetado para a frente numa frenagem brusca é explicado pela primeira lei de Newton.", certo: true, explicacao: "Inércia." },
    { tipo: "ce", enunciado: "As forças de ação e reação se anulam porque têm mesma intensidade e sentidos opostos.", certo: false, explicacao: "Atuam em corpos diferentes; não se anulam." },
    { tipo: "ce", enunciado: "Numa curva plana de raio 50 m, com coeficiente de atrito 0,5 e g = 10 m/s², a velocidade máxima sem derrapar é inferior a 60 km/h.", certo: true, explicacao: "v = √(0,5·10·50) = √250 ≈ 15,8 m/s ≈ 57 km/h." },
    { tipo: "ce", enunciado: "A velocidade máxima de um veículo em curva plana, sem derrapar, depende da massa do veículo.", certo: false, explicacao: "v = √(μgR): a massa se cancela." },
    { tipo: "mc", enunciado: "Um objeto cai, a partir do repouso, de 20 m de altura (g = 10 m/s², sem resistência do ar). O tempo de queda e a velocidade ao tocar o solo são:", opcoes: ["1 s e 10 m/s", "2 s e 20 m/s", "2 s e 40 m/s", "4 s e 20 m/s", "√2 s e 20 m/s"], correta: 1, explicacao: "20 = 5t² → t = 2 s; v = 10·2 = 20 m/s." }
  ]
},

FIS2: {
  disciplina: "Física", titulo: "Trabalho, energia, impulso e colisões",
  objetivo: "Aplicar energia cinética, potência, impulso e conservação da quantidade de movimento à análise de sinistros de trânsito.",
  edital: ["Trabalho, potência e energia; conservação da energia mecânica", "Impulso; quantidade de movimento; conservação da quantidade de movimento; colisões"],
  porque: ["Perícia e levantamento de sinistros usam exatamente estes conceitos: energia dissipada, velocidade antes do impacto, força média no impacto."],
  conteudo: [
    { h: "Trabalho e potência" },
    { formula: "W = F·d·cos θ      P = W/Δt = F·v" },
    { lista: ["Força perpendicular ao deslocamento não realiza trabalho (ex.: peso num deslocamento horizontal, normal).", "Unidades: joule (J) para trabalho e energia; watt (W) para potência. 1 cv ≈ 735,5 W; 1 hp ≈ 745,7 W.", "Rendimento = potência útil ÷ potência total."] },
    { h: "Energia" },
    { formula: "E_c = m·v²/2      E_p gravitacional = m·g·h      E_p elástica = k·x²/2" },
    { lista: ["Teorema da energia cinética: o trabalho da força resultante é igual à variação da energia cinética.", "Sem forças dissipativas, a energia mecânica (cinética + potencial) se conserva.", "Na frenagem, a energia cinética é dissipada em calor pelo atrito. Como E_c depende de v², dobrar a velocidade quadruplica a energia a dissipar."] },
    { ex: "Carro de 1.000 kg a 20 m/s: E_c = 1.000 × 400 ÷ 2 = 200.000 J = 200 kJ. A 40 m/s: 800 kJ." },
    { h: "Quantidade de movimento e impulso" },
    { formula: "Q = m·v      I = F·Δt = ΔQ" },
    { lista: ["Quantidade de movimento e impulso são grandezas vetoriais.", "Para a mesma variação de Q, aumentar o tempo de contato diminui a força média. É o princípio do airbag, do cinto que se estica um pouco, da zona de deformação programada e das barreiras de contenção."] },
    { ex: "Carro de 1.000 kg a 20 m/s para em 0,1 s: ΔQ = 20.000 kg·m/s; força média = 20.000 ÷ 0,1 = 200.000 N." },
    { h: "Colisões" },
    { p: "Em colisões, as forças internas predominam e a quantidade de movimento total do sistema se conserva (sistema isolado): m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'." },
    { tabela: { cab: ["Tipo", "Coeficiente de restituição", "Energia cinética"], linhas: [["Elástica", "e = 1", "Conserva"], ["Parcialmente elástica", "0 < e < 1", "Perde parte"], ["Perfeitamente inelástica", "e = 0 (corpos seguem juntos)", "Maior perda possível"]] } },
    { ex: "Carro de 1.000 kg a 20 m/s atinge outro de 1.000 kg parado e seguem juntos: 20.000 = 2.000·v → v = 10 m/s. Energia antes: 200 kJ; depois: 2.000 × 100 ÷ 2 = 100 kJ. Metade foi dissipada." },
    { fonte: "Conteúdo de Física do edital PRF 2021; Halliday, Resnick e Walker, Fundamentos de Física, vol. 1." }
  ],
  checklist: ["Sei quando uma força não realiza trabalho", "Calculo energia cinética e potencial", "Uso conservação da energia em quedas e rampas", "Calculo impulso e força média de impacto", "Explico o airbag pelo impulso", "Resolvo colisão perfeitamente inelástica e calculo a energia dissipada"],
  questoes: [
    { tipo: "ce", enunciado: "Um carro de 1.000 kg a 20 m/s possui energia cinética de 200 kJ.", certo: true, explicacao: "1.000 × 400 ÷ 2 = 200.000 J." },
    { tipo: "ce", enunciado: "Dobrando a velocidade de um veículo, sua energia cinética dobra.", certo: false, explicacao: "Quadruplica." },
    { tipo: "mc", enunciado: "Um carro de 1.000 kg a 20 m/s é parado em 0,1 s. A força média no impacto é:", opcoes: ["2.000 N", "20.000 N", "200.000 N", "2.000.000 N", "200 N"], correta: 2, explicacao: "F = ΔQ/Δt = 20.000/0,1." },
    { tipo: "ce", enunciado: "O airbag reduz a força sobre o ocupante porque aumenta o tempo de variação da quantidade de movimento.", certo: true, explicacao: "Mesmo impulso em mais tempo, menor força média." },
    { tipo: "mc", enunciado: "Um carro de 1.000 kg a 20 m/s colide com outro de 1.000 kg parado e ambos seguem juntos. A velocidade logo após a colisão é:", opcoes: ["5 m/s", "10 m/s", "15 m/s", "20 m/s", "0 m/s"], correta: 1, explicacao: "Conservação de Q: 20.000 = 2.000·v." },
    { tipo: "ce", enunciado: "Na colisão perfeitamente inelástica, a energia cinética total do sistema se conserva.", certo: false, explicacao: "Há a maior perda possível de energia cinética; conserva-se a quantidade de movimento." },
    { tipo: "ce", enunciado: "Um caminhão que desenvolve força de tração de 2.000 N a 25 m/s, em velocidade constante, opera com potência de 50 kW.", certo: true, explicacao: "P = F·v = 50.000 W." },
    { tipo: "ce", enunciado: "Desprezando a resistência do ar, um corpo que cai de 5 m de altura a partir do repouso chega ao solo a 10 m/s (g = 10 m/s²).", certo: true, explicacao: "v = √(2gh) = √100." },
    { tipo: "ce", enunciado: "O trabalho realizado pelo peso de um veículo que se desloca em pista horizontal é nulo.", certo: true, explicacao: "Peso perpendicular ao deslocamento." },
    { tipo: "ce", enunciado: "Em uma colisão elástica, o coeficiente de restituição é igual a 1.", certo: true, explicacao: "Conserva energia cinética." }
  ]
},

GEOP1: {
  disciplina: "Geopolítica", titulo: "Brasil: território, população e transportes",
  objetivo: "Compreender a formação territorial, a regionalização, a dinâmica populacional e a matriz de transportes do Brasil.",
  edital: ["O Brasil político: nação e território; organização do Estado", "Regionalização do território; população; urbanização", "Transportes e integração nacional"],
  porque: ["A PRF atua sobre a malha rodoviária federal, eixo da integração nacional e do escoamento da produção.", "Itens de Geopolítica misturam conceitos com dados do IBGE: leia sempre o dado mais recente."],
  conteudo: [
    { h: "Território e organização" },
    { lista: ["Brasil: república federativa com 26 estados, o Distrito Federal e municípios, todos autônomos.", "O território foi consolidado por tratados (Tordesilhas, 1494; Madri, 1750, com o princípio do uti possidetis; Petrópolis, 1903, com a incorporação do Acre) e pela ação diplomática do Barão do Rio Branco.", "Faixa de fronteira: faixa interna de até 150 km de largura ao longo das fronteiras terrestres, considerada fundamental para a defesa do território (CF, art. 20, § 2º).", "O Brasil faz fronteira com todos os países da América do Sul, exceto Chile e Equador."] },
    { h: "Regionalização" },
    { tabela: { cab: ["Proposta", "Divisão", "Critério"], linhas: [
      ["IBGE (oficial)", "Norte, Nordeste, Centro-Oeste, Sudeste e Sul", "Respeita os limites estaduais; usada para estatísticas e planejamento"],
      ["Complexos regionais (Pedro Geiger, 1967)", "Amazônia, Nordeste e Centro-Sul", "Critérios econômicos e históricos; não respeita limites estaduais"],
      ["Quatro Brasis (Milton Santos e María Laura Silveira)", "Região Concentrada, Nordeste, Centro-Oeste e Amazônia", "Grau de difusão do meio técnico-científico-informacional"]] } },
    { h: "População" },
    { lista: ["O Censo 2022 do IBGE contou cerca de 203 milhões de habitantes, com crescimento anual médio bem menor que nas décadas anteriores.", "Transição demográfica: queda da natalidade e da mortalidade, aumento da expectativa de vida e envelhecimento da população.", "Urbanização acelerada a partir de 1950, ligada à industrialização e ao êxodo rural. Hoje a grande maioria da população vive em áreas urbanas.", "Metropolização e, mais recentemente, crescimento das cidades médias e desconcentração industrial para o interior."] },
    { h: "Transportes e integração" },
    { lista: ["A matriz de transportes de carga brasileira é fortemente concentrada no modal rodoviário, o que encarece o frete em longas distâncias e aumenta acidentes e emissões.", "A opção rodoviarista ganhou força a partir dos anos 1950, com a indústria automobilística e a construção de Brasília e de rodovias de integração.", "Ferrovias e hidrovias são mais eficientes para grandes volumes e longas distâncias (grãos, minérios), mas a rede é pequena para o tamanho do país.", "Corredores de exportação ligam áreas produtoras (Centro-Oeste, Matopiba) aos portos; a saída pelo Arco Norte cresceu com rodovias como a BR-163 e portos fluviais na Amazônia.", "Rodovias federais: nomenclatura BR-0xx (radiais, partem de Brasília), BR-1xx (longitudinais), BR-2xx (transversais), BR-3xx (diagonais) e BR-4xx (de ligação)."] },
    { fonte: "IBGE, Censo Demográfico 2022; CF, art. 20, § 2º; DNIT, nomenclatura das rodovias federais." }
  ],
  checklist: ["Sei os tratados de formação territorial", "Sei a faixa de fronteira e os países sem fronteira com o Brasil", "Diferencio as três regionalizações", "Explico a transição demográfica e a urbanização", "Explico a concentração no modal rodoviário", "Sei a nomenclatura das BRs"],
  questoes: [
    { tipo: "ce", enunciado: "O Brasil faz fronteira com todos os países sul-americanos, com exceção do Chile e do Equador.", certo: true, explicacao: "Fato geográfico." },
    { tipo: "ce", enunciado: "A faixa de fronteira tem até 150 km de largura ao longo das fronteiras terrestres.", certo: true, explicacao: "CF, art. 20, § 2º." },
    { tipo: "ce", enunciado: "A regionalização em complexos regionais respeita os limites dos estados.", certo: false, explicacao: "Não respeita; a do IBGE sim." },
    { tipo: "ce", enunciado: "As rodovias federais com numeração iniciada por 1 são longitudinais.", certo: true, explicacao: "BR-1xx: norte-sul." },
    { tipo: "ce", enunciado: "As rodovias radiais (BR-0xx) partem de Brasília.", certo: true, explicacao: "Nomenclatura do DNIT." },
    { tipo: "ce", enunciado: "Para longas distâncias e grandes volumes, o modal rodoviário é, em geral, mais eficiente que o ferroviário e o hidroviário.", certo: false, explicacao: "Ferrovias e hidrovias têm menor custo por tonelada-quilômetro." },
    { tipo: "ce", enunciado: "A transição demográfica brasileira caracteriza-se por queda da natalidade e envelhecimento da população.", certo: true, explicacao: "Tendência confirmada pelo Censo 2022." },
    { tipo: "ce", enunciado: "O Tratado de Petrópolis incorporou o Acre ao território brasileiro.", certo: true, explicacao: "1903, com a Bolívia." },
    { tipo: "ce", enunciado: "Na proposta dos quatro Brasis, a Região Concentrada corresponde ao Nordeste.", certo: false, explicacao: "Região Concentrada: Sudeste e Sul, onde o meio técnico-científico-informacional é mais denso." },
    { tipo: "mc", enunciado: "A rodovia BR-364 é, pela nomenclatura do DNIT, uma rodovia:", opcoes: ["radial", "longitudinal", "transversal", "diagonal", "de ligação"], correta: 3, explicacao: "Iniciada por 3: diagonal." }
  ]
},

GEOP2: {
  disciplina: "Geopolítica", titulo: "Globalização, blocos e fronteiras",
  objetivo: "Entender a ordem mundial atual, os blocos econômicos de que o Brasil participa e os desafios de segurança nas fronteiras.",
  edital: ["Globalização; ordem mundial; blocos econômicos", "O Brasil no mundo; integração regional", "Fronteiras, Amazônia e crimes transnacionais"],
  porque: ["As rodovias federais são rotas de tráfico de drogas, armas, contrabando e descaminho que entram pelas fronteiras.", "A banca usa temas de atualidade geopolítica: confira as notícias do ano da prova."],
  conteudo: [
    { h: "Globalização e ordem mundial" },
    { lista: ["Globalização: intensificação dos fluxos de mercadorias, capitais, informações e pessoas, apoiada nas tecnologias de transporte e comunicação.", "Após a Guerra Fria (fim da URSS, 1991), houve breve hegemonia dos EUA e, depois, uma ordem multipolar, com a ascensão da China e de potências regionais.", "Efeitos contraditórios: integração produtiva e cadeias globais de valor, mas também desigualdade, fragmentação e retorno de protecionismos."] },
    { h: "Blocos e fóruns" },
    { tabela: { cab: ["Bloco ou fórum", "Composição e características"], linhas: [
      ["Mercosul", "Criado pelo Tratado de Assunção (1991) por Brasil, Argentina, Paraguai e Uruguai. Venezuela está suspensa desde 2016. A Bolívia aderiu como membro pleno em 2024 e cumpre prazo de incorporação das normas. É união aduaneira imperfeita, com Tarifa Externa Comum."],
      ["União Europeia", "Maior grau de integração: mercado comum e união econômica e monetária (euro em parte dos membros)."],
      ["BRICS", "Brasil, Rússia, Índia, China e África do Sul, ampliado a partir de 2024 com novos membros (entre eles Egito, Etiópia, Irã, Emirados Árabes Unidos e, em 2025, Indonésia). É fórum de cooperação, não bloco comercial."],
      ["G20", "Maiores economias do mundo, mais União Europeia e União Africana. O Brasil presidiu o grupo em 2024."]] } },
    { nota: "A conclusão das negociações do acordo Mercosul–União Europeia foi anunciada em dezembro de 2024. A situação da assinatura e da ratificação muda com o tempo: confira antes da prova." },
    { h: "Etapas de integração econômica" },
    { p: "Zona de livre comércio (redução de tarifas entre membros) → união aduaneira (tarifa externa comum) → mercado comum (livre circulação de fatores: pessoas, capitais e serviços) → união econômica e monetária (moeda e políticas comuns)." },
    { h: "Fronteiras e segurança" },
    { lista: ["O Brasil tem extensa fronteira terrestre, grande parte em áreas de floresta e baixa densidade populacional, o que dificulta a fiscalização.", "Vizinhos que são grandes produtores de cocaína (Bolívia, Peru, Colômbia) e de maconha (Paraguai) fazem do Brasil rota de trânsito e mercado consumidor.", "As drogas, armas, cigarros e eletrônicos contrabandeados seguem por rodovias federais rumo aos grandes centros e portos, o que explica as grandes apreensões da PRF em eixos como BR-163, BR-277, BR-364 e BR-116.", "Amazônia: desafios de soberania, garimpo ilegal, desmatamento, biopirataria e presença de facções criminosas. Iniciativas como o Programa de Proteção Integrada de Fronteiras e a cooperação com países vizinhos tentam integrar órgãos federais, estaduais e Forças Armadas."] },
    { fonte: "Tratado de Assunção (1991); comunicados oficiais do Mercosul e do BRICS; Ministério das Relações Exteriores." }
  ],
  checklist: ["Sei definir globalização e ordem multipolar", "Sei composição e tipo de integração do Mercosul", "Sei as etapas de integração econômica", "Sei o que é o BRICS e sua ampliação", "Explico a relação entre fronteiras e crimes nas rodovias", "Conferi as atualidades geopolíticas do ano"],
  questoes: [
    { tipo: "ce", enunciado: "O Mercosul foi criado pelo Tratado de Assunção, em 1991.", certo: true, explicacao: "Brasil, Argentina, Paraguai e Uruguai." },
    { tipo: "ce", enunciado: "A Venezuela é membro pleno do Mercosul em plenos direitos desde 2016.", certo: false, explicacao: "Está suspensa desde 2016." },
    { tipo: "ce", enunciado: "A união aduaneira caracteriza-se pela adoção de uma tarifa externa comum entre os membros.", certo: true, explicacao: "Etapa posterior à zona de livre comércio." },
    { tipo: "ce", enunciado: "O mercado comum acrescenta à união aduaneira a livre circulação de fatores de produção, como pessoas e capitais.", certo: true, explicacao: "Ex.: União Europeia." },
    { tipo: "ce", enunciado: "O BRICS é um bloco econômico com tarifa externa comum.", certo: false, explicacao: "É fórum de cooperação, sem TEC." },
    { tipo: "ce", enunciado: "A posição do Brasil, vizinho de grandes produtores de cocaína, faz do país rota de trânsito de drogas para outros mercados.", certo: true, explicacao: "Contexto geopolítico das fronteiras." },
    { tipo: "ce", enunciado: "A ordem mundial pós-Guerra Fria permaneceu estritamente bipolar.", certo: false, explicacao: "A bipolaridade terminou com o fim da URSS." },
    { tipo: "ce", enunciado: "O G20 inclui, além de países, a União Europeia e a União Africana.", certo: true, explicacao: "A União Africana passou a membro em 2023." },
    { tipo: "ce", enunciado: "A globalização reduziu a importância das tecnologias de transporte e comunicação.", certo: false, explicacao: "Ela se apoia nelas." },
    { tipo: "mc", enunciado: "A etapa de integração econômica com moeda única e políticas econômicas comuns é:", opcoes: ["zona de livre comércio", "união aduaneira", "mercado comum", "união econômica e monetária", "área preferencial de comércio"], correta: 3, explicacao: "União econômica e monetária." }
  ]
}
});
