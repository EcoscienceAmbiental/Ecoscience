
  const respostas = [
    {
      temas: [
        "calculadora de carbono", "o que é a calculadora de carbono", "como funciona a calculadora", "pra que serve a calculadora de carbono",
        "como saber minha pegada", "como medir meu carbono", "como calcular carbono", "como calcular minha pegada de carbono",
        "ferramenta de carbono", "medir carbono", "carbono semanal", "calculadora"
      ],
      resposta: "Nossa calculadora de carbono faz perguntas simples sobre seu dia a dia e calcula sua pegada de carbono semanal. Assim, você descobre onde pode melhorar e reduzir seu impacto ambiental 🌍📊 Quer testar?"
    },
    {
      temas: [
        "diminuir a pegada de carbono", "diminuir o carbono", "reduzir o carbono", "como reduzir o carbono", "redução de carbono",
        "formas de reduzir carbono", "reduzir emissões", "reduzir co2", "reduzir emissão de carbono"
      ],
      resposta: "Para reduzir suas emissões de carbono, use transporte público ou bicicleta, evite desperdício de energia, consuma menos carne, recicle e escolha produtos sustentáveis. Pequenas ações geram grandes impactos 🌱🚲💡"
    },
    {
      temas: ["pegada de carbono", "o que é pegada de carbono", "carbon footprint", "minha pegada de carbono", "impacto ambiental pessoal"],
      resposta: "Pegada de carbono é a quantidade de gases do efeito estufa que uma pessoa, empresa ou atividade emite na atmosfera. Isso inclui transporte, alimentação, energia, consumo... Quanto menor a pegada, menor o impacto no clima 🌍💨"
    },
    {
      temas: ["como melhorar minha emissão de carbono", "reduzir emissão de carbono", "emissão de carbono"],
      resposta: "Para melhorar sua emissão de carbono, considere as seguintes ações: use transporte público ou caronas, opte por veículos elétricos, minimize o uso de energia em casa com aparelhos eficientes, plante árvores e prefira fontes de energia renováveis. Essas mudanças ajudam a reduzir sua pegada de carbono e contribuem para um futuro mais sustentável."
    },
    {
      temas: ["meio ambiente", "preservação ambiental", "sustentabilidade"],
      resposta: "A preservação ambiental envolve ações que buscam proteger os recursos naturais, garantindo que eles sejam utilizados de forma consciente e sustentável para as futuras gerações."
    },
    {
      temas: ["poluição", "poluição do ar", "poluição da água", "poluição do solo"],
      resposta: "A poluição é a introdução de substâncias nocivas ao meio ambiente, afetando o ar, a água e o solo. As principais causas incluem emissão de gases poluentes, despejo inadequado de resíduos e o uso excessivo de produtos químicos."
    },
    {
      temas: ["reciclagem", "gestão de resíduos", "economia circular"],
      resposta: "A reciclagem é o processo de reuso de materiais para reduzir o desperdício e preservar recursos naturais. A economia circular vai além, focando em eliminar o conceito de 'lixo' e promover um ciclo contínuo de reutilização."
    },
    {
      temas: ["biodiversidade", "fauna e flora", "conservação da biodiversidade"],
      resposta: "A biodiversidade refere-se à variedade de vida no planeta, incluindo animais, plantas e ecossistemas. A conservação da biodiversidade é essencial para o equilíbrio ecológico e o bem-estar humano."
    },
    {
      temas: ["desmatamento", "desmatamento ilegal", "preservação florestal"],
      resposta: "O desmatamento é a remoção de florestas para dar lugar a outras atividades humanas. O desmatamento ilegal é uma prática prejudicial que acelera a perda de habitats naturais e contribui para as mudanças climáticas."
    },
    {
      temas: ["recursos hídricos", "crise da água", "uso sustentável da água"],
      resposta: "Os recursos hídricos são essenciais para a vida e para as atividades humanas. A crise da água ocorre quando há escassez ou poluição das fontes de água, exigindo um uso mais eficiente e sustentável desse recurso."
    },
    {
      temas: ["energia renovável", "energias alternativas", "energia solar", "energia eólica"],
      resposta: "As energias renováveis, como solar, eólica e hidrelétrica, são fontes de energia limpa que não emitem gases poluentes. Elas são fundamentais para reduzir a dependência de combustíveis fósseis e mitigar as mudanças climáticas."
    },
    {
      temas: ["mudanças climáticas", "aquecimento global", "efeito estufa"],
      resposta: "As mudanças climáticas são alterações nos padrões climáticos globais, causadas principalmente pelo aumento das emissões de gases de efeito estufa, como o dióxido de carbono, que intensificam o aquecimento global."
    },
    {
      temas: ["sustentabilidade no consumo", "consumo consciente", "economia verde"],
      resposta: "O consumo consciente envolve escolher produtos que têm menor impacto ambiental, seja por sua produção, transporte ou descarte. A economia verde busca criar um modelo econômico sustentável, que promova a proteção ambiental enquanto cria valor econômico."
    },
    {
      temas: ["mobilidade urbana", "transporte sustentável", "transporte público", "carros elétricos"],
      resposta: "A mobilidade urbana sustentável busca reduzir a poluição e os congestionamentos por meio de opções de transporte mais limpas, como transporte público eficiente e veículos elétricos."
    },
    {
      temas: ["agricultura sustentável", "agroecologia", "práticas agrícolas sustentáveis"],
      resposta: "A agricultura sustentável se baseia em práticas que respeitam o meio ambiente, como o uso reduzido de pesticidas, a preservação da biodiversidade e o manejo adequado dos recursos naturais."
    },
    {
      temas: ["energia limpa", "futuro da energia", "tecnologia verde"],
      resposta: "A energia limpa é aquela que não prejudica o meio ambiente, como a solar, eólica e biomassa. Essas fontes de energia renováveis são o futuro, pois oferecem alternativas sustentáveis para a geração de eletricidade."
    },
    {
      temas: ["cidades sustentáveis", "urbanização", "arquitetura sustentável"],
      resposta: "Cidades sustentáveis são aquelas que minimizam seu impacto ambiental, promovendo soluções como edifícios verdes, transporte sustentável e eficiência energética, criando ambientes urbanos mais saudáveis e habitáveis."
    },
    {
      temas: ["alimentação sustentável", "dietas saudáveis", "redução do desperdício de alimentos"],
      resposta: "A alimentação sustentável se baseia em escolhas alimentares que respeitam o meio ambiente, como consumir produtos locais e sazonais, reduzir o desperdício de alimentos e optar por dietas com menor impacto ambiental."
    },
    {
      temas: ["política ambiental", "leis ambientais", "governança ambiental"],
      resposta: "A política ambiental é o conjunto de ações e leis criadas para proteger o meio ambiente. A governança ambiental envolve a implementação eficaz dessas políticas, garantindo a participação da sociedade e o cumprimento das normas."
    },
    {
      temas: ["economia circular", "redução de resíduos", "reuso de materiais"],
      resposta: "A economia circular visa manter os recursos em uso pelo maior tempo possível, reduzindo o desperdício. Isso inclui o reuso de materiais e produtos, e o design de produtos com menor impacto ambiental."
    },
    {
      temas: ["carbono", "dióxido de carbono", "co2"],
      resposta: "O carbono é um elemento químico encontrado em diversos compostos, como o dióxido de carbono (CO2), que é um dos principais gases de efeito estufa. A emissão excessiva de CO2 é uma das principais causas das mudanças climáticas."
    },
    {
      temas: ["energia", "economizar energia", "luz", "eletricidade", "conta de luz", "energia solar"],
      resposta: "Para economizar energia, desligue aparelhos quando não estiver usando, use lâmpadas LED e aproveite a luz natural."
    },
    {
      temas: ["água", "economizar água", "falta de água", "água potável", "água limpa"],
      resposta: "Feche a torneira enquanto escova os dentes, conserte vazamentos e reutilize a água sempre que possível."
    },
    {
      temas: ["reciclagem", "reciclar", "lixo", "separar lixo", "lixo reciclável"],
      resposta: "Recicle separando papel, plástico, vidro e metal. Nunca misture lixo orgânico com reciclável."
    },
    {
      temas: ["transporte", "carro", "ônibus", "bicicleta", "mobilidade urbana"],
      resposta: "Prefira transporte coletivo, bicicleta ou caminhada. Menos carros = menos poluição."
    },
    {
      temas: ["plantas", "floresta", "árvore", "verde", "reflorestamento"],
      resposta: "Plantar árvores ajuda a absorver CO2 e melhorar a qualidade do ar. Preserve áreas verdes sempre que possível."
    },
    {
      temas: ["aquecimento global", "mudanças climáticas", "clima"],
      resposta: "O aquecimento global é causado pelo excesso de gases como CO2. Reduzir consumo e preservar florestas ajuda a combater."
    },
    {
      temas: ["desmatamento", "corte ilegal", "florestas", "árvores derrubadas"],
      resposta: "O desmatamento causa perda de biodiversidade e desequilíbrios climáticos. Apoie a preservação e reflorestamento."
    },
    {
      temas: ["biodiversidade", "animais", "espécies", "extinção"],
      resposta: "A biodiversidade mantém o equilíbrio dos ecossistemas. Proteger espécies e seus habitats é essencial."
    },
    {
      temas: ["resíduos", "lixo eletrônico", "descartar corretamente", "pilhas", "baterias"],
      resposta: "Resíduos perigosos, como eletrônicos, devem ser descartados em pontos de coleta específicos para evitar contaminação."
    },
    {
      temas: ["economia circular", "consumo consciente", "reutilizar", "reuso"],
      resposta: "Consuma de forma consciente, priorize produtos reutilizáveis e apoie práticas de economia circular."
    },
    {
      temas: ["energias renováveis", "solar", "eólica", "energia limpa"],
      resposta: "Energia solar e eólica são limpas e renováveis. Invista e apoie fontes de energia sustentáveis."
    },
    {
      temas: ["modo de vida sustentável", "rotina sustentável", "sustentabilidade no dia a dia"],
      resposta: "Adotar um estilo de vida sustentável é fazer escolhas que respeitam o meio ambiente, como reduzir o consumo, reciclar e economizar recursos."
    },
    {
      temas: ["poluição do ar", "fumos", "ar poluído"],
      resposta: "A poluição do ar causa doenças respiratórias e agrava o aquecimento global. Use transportes menos poluentes e cobre ações governamentais."
    },
    {
      temas: ["poluição da água", "rios poluídos", "esgoto", "água contaminada"],
      resposta: "Evite descartar lixo ou produtos químicos nos ralos e rios. A poluição da água compromete todo o ecossistema aquático."
    },
    {
      temas: ["microplásticos", "plástico nos oceanos", "plásticos"],
      resposta: "Microplásticos afetam a vida marinha e chegam até nosso organismo. Reduza o uso de plásticos descartáveis."
    },
    {
      temas: ["moda sustentável", "roupas ecológicas", "fast fashion"],
      resposta: "Prefira roupas feitas de materiais sustentáveis e compre de marcas conscientes. Menos consumo, mais impacto positivo!"
    },
    {
      temas: ["turismo ecológico", "viagem sustentável", "ecoturismo"],
      resposta: "Turismo ecológico valoriza a natureza e respeita comunidades locais. Viajar com consciência faz toda a diferença 🌍"
    },
    {
      temas: ["mobilidade urbana", "cidade sustentável", "trânsito", "bicicleta elétrica"],
      resposta: "Cidades sustentáveis priorizam mobilidade ativa e coletiva, como ciclovias e transporte público eficiente."
    },
    {
      temas: ["agricultura sustentável", "agroecologia", "pesticidas", "agro"],
      resposta: "A agricultura sustentável protege o solo, a água e a saúde. Prefira alimentos orgânicos e locais."
    },
    {
      temas: ["olá", "oi", "bom dia", "boa tarde", "boa noite", "e aí", "tudo bem", "salve"],
      resposta: "Olá! Tudo bem por aí? Se quiser saber algo sobre meio ambiente, estou aqui pra ajudar 🌱"
    },
    {
      temas: ["obrigado", "valeu", "agradecido", "agradeço", "obg", "vlw"],
      resposta: "De nada! Sempre que precisar, é só chamar 😊"
    },
    {
      temas: ["tchau", "até mais", "falou", "adeus", "fui"],
      resposta: "Até mais! Cuide bem da natureza por aí 🌍✨"
    },
    {
      temas: ["quem é você", "o que você faz", "qual sua função"],
      resposta: "Sou um chatbot que ajuda com dúvidas sobre o meio ambiente! Pode perguntar sobre energia, água, reciclagem e muito mais 🍃"
    },
    {
      temas: ["me ajuda", "pode me ajudar", "ajuda", "como faço"],
      resposta: "Claro! Me diga o que você quer saber sobre meio ambiente e sustentabilidade 🌿"
    },
    {
      temas: [
        "o que é o projeto", "sobre o projeto", "o que é o ecoscience", "qual é o propósito", "qual a missão", "do que se trata o site",
        "pra que serve esse site", "qual o objetivo do ecoscience", "explica o ecoscience", "me fala do projeto", "ecoscience"
      ],
      resposta: "O EcoScience é um projeto dedicado à conscientização ambiental. Aqui você encontra dicas, informações e orientações para viver de forma mais sustentável e reduzir sua pegada de carbono 🌱🌍"
    }
  ];

  function sugerir(texto) {
    document.getElementById("userInput").value = texto;
    sendMessage();
  }

  function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const userText = input.value.trim();
    if (!userText) return;

    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = userText;
    chatBox.appendChild(userMsg);

    const lowerText = userText.toLowerCase();

    let respostaEncontrada = `
      <p>Não entendi o que você escreveu, escreva com mais clareza 🤖🌱</p>
      <p>Você pode tentar perguntar algo assim:</p>
      <div class="sugestoes">
        <button onclick="sugerir('Como calcular minha pegada de carbono?')">Como calcular minha pegada de carbono?</button>
        <button onclick="sugerir('Como economizar água e energia?')">Como economizar água e energia?</button>
        <button onclick="sugerir('O que é biodiversidade?')">O que é biodiversidade?</button>
        <button onclick="sugerir('Como reduzir o uso de plástico?')">Como reduzir o uso de plástico?</button>
        <button onclick="sugerir('O que é agricultura sustentável?')">O que é agricultura sustentável?</button>
      </div>
    `;

    for (let item of respostas) {
      if (item.temas.some(tema => lowerText.includes(tema))) {
        respostaEncontrada = item.resposta;
        break;
      }
    }

    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    botMsg.innerHTML = respostaEncontrada;
    chatBox.appendChild(botMsg);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  document.getElementById("sendButton").addEventListener("click", sendMessage);
  document.getElementById("userInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

