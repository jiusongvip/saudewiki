import type { ContentSection } from '../types';

/**
 * Prose that belongs to a list page rather than to a single entry.
 *
 * A list page has two jobs: put every item in front of the reader, and explain
 * how the list is built. The first job is the cards, and it is already done from
 * data. This file is the second: the text that tells a reader what a verbete
 * answers, how the groups are drawn, which signs cut a reading short, and where
 * else the same encyclopedia can be entered.
 *
 * Three rules keep these paragraphs honest.
 *
 * 1. Nothing here states a medical fact that the entries do not already state
 *    with their own source. A red flag in `sinais-de-alerta` is copied from the
 *    verbete it comes from, so the list page cannot disagree with the page it
 *    links to.
 * 2. A definition belongs to a group, not to a page. `categories` is written
 *    once per `categorySlug` and shown on the disease list, on the article list
 *    and on the topic page that carries the same slug — which is why the same
 *    explanation never exists in three wordings.
 * 3. Links are internal paths in their root form (`/doencas/dengue/`), turned
 *    into anchors by `lib/prose.ts` and prefixed for the locale by `lib/i18n.ts`.
 *    No outbound link can be written here: that is what `references` on each
 *    entry is for.
 */

/** The list pages that carry their own guide prose. */
export type GuidePage = 'diseases' | 'articles' | 'regions';

export const listGuides: Record<GuidePage, ContentSection[]> = {
  diseases: [
    {
      id: 'anatomia-de-um-verbete',
      heading: 'Como cada página desta lista é escrita',
      paragraphs: [
        'Os verbetes seguem sempre a mesma ordem de blocos: o que é a doença, como ela se transmite, quais são os sintomas, quando procurar atendimento, como é feito o diagnóstico, o que pode ser confundido com ela, como se trata e como se previne. A regularidade tem um motivo prático: a forma de ler que você aprende no primeiro verbete serve para todos os outros.',
        'Nem todo bloco aparece em toda página. A [dengue](/doencas/dengue/) tem um capítulo inteiro sobre transmissão, porque o mosquito é o centro da história; a [hipertensão](/doencas/hipertensao/) trata de valores de referência e de acompanhamento continuado, e responde à pergunta «hipertensão é contagiosa?» apenas para encerrá-la. Um verbete não tem capítulo que a doença não pede.',
        'Os títulos são escritos como perguntas porque é assim que a dúvida chega. Ninguém abre uma página pesquisando «fisiopatologia»; abre pesquisando «quais são os sintomas», «como é feito o diagnóstico», «tem cura». O sumário no alto da página existe pela mesma razão: permite saber, sem rolar, se aquele verbete trata do que você procura.',
        'Cada página traz ainda as perguntas frequentes que mais chegam sobre aquele assunto, as fontes oficiais que sustentaram o texto e a data da última alteração. O estado editorial aparece junto de quem escreveu: todo texto passa pelo grupo de revisão do projeto antes de publicar, e quando um revisor assina pelo nome, esse nome aparece na página.',
      ],
      cta: { label: 'Como o Saudewiki verifica cada texto', href: '/politica-editorial/' },
    },
    {
      id: 'por-onde-comecar',
      heading: 'Por onde começar a ler',
      paragraphs: [
        'Se você já tem um nome, use a busca: ela procura pelo título, pelo resumo e pelos sinônimos que as pessoas usam na conversa de todo dia, como «dor de garganta», «diarreia» ou «derrame», sempre na língua da página em que você está.',
        'Se o que você tem é um lugar do corpo que incomoda, comece pelo [mapa das regiões do corpo](/por-regiao/), que agrupa os verbetes pela parte atingida, do cérebro às articulações. Uma doença que aparece em mais de um lugar está listada em cada um deles.',
        'Se o que você tem é uma situação, e não uma doença, os temas reúnem a leitura pelo ângulo: [prevenção](/temas/prevencao/), [doenças infecciosas](/temas/doencas-infecciosas/), [doenças crônicas](/temas/doencas-cronicas/), [saúde infantil](/temas/saude-infantil/).',
      ],
      bullets: [
        'Primeira vez no assunto: leia «o que é» e «sintomas» e deixe o resto para depois. O capítulo de tratamento só faz sentido com uma orientação profissional em mãos.',
        'Já tem o diagnóstico: vá direto a «como se trata» e «complicações», e depois procure o artigo que trata da rotina daquela condição.',
        'É prevenção, não doença: comece pelos artigos, que são escritos para caber na rotina de quem está bem.',
      ],
    },
    {
      id: 'sinais-de-alerta',
      heading: 'Sinais que não esperam o fim da leitura',
      paragraphs: [
        'Há quadros em que a página deve ficar aberta na mesa e a ligação ser feita antes. Os verbetes abaixo descrevem cada um desses sinais com suas fontes; a lista serve para reconhecer que é hora de procurar atendimento, não para decidir qual doença você tem.',
      ],
      bullets: [
        'Fraqueza ou dormência de um lado do corpo, boca torta, fala embolada ou perda súbita de visão: [infarto e AVC](/doencas/infarto-e-avc/). O tempo muda o tratamento, e o SAMU atende no 192.',
        'Aperto ou dor no peito que sobe para o pescoço, a mandíbula, as costas ou o braço: a mesma página, e o artigo [quais são os sinais do infarto](/artigos/infarto-quais-sao-os-sinais-e-o-que-fazer/).',
        'Febre que começa a ceder seguida de dor abdominal intensa, vômitos persistentes, sangramento, tontura ou urina muito menor: [dengue](/doencas/dengue/), fase crítica.',
        'Chiado no peito com dificuldade para falar frases completas, lábios azulados ou nenhuma resposta ao medicamento de alívio: [asma](/doencas/asma/).',
        'Diarreia com boca seca, olhos fundos, criança que chora sem lágrimas ou sonolência excessiva: [gastroenterite](/doencas/gastroenterite/).',
        'Tosse por três semanas ou mais, sobretudo com febre no fim da tarde, suor noturno e emagrecimento: [tuberculose](/doencas/tuberculose/). O exame é oferecido pelo sistema público.',
        'Situação de risco de exposição ao HIV: a profilaxia pós-exposição precisa começar em até 72 horas, contadas no artigo [o que fazer nas primeiras 72 horas](/artigos/hiv-o-que-fazer-nas-primeiras-72-horas/).',
      ],
    },
    {
      id: 'episodio-e-convivencia',
      heading: 'Doença de um episódio e doença de todo dia',
      paragraphs: [
        'Boa parte dos verbetes desta lista descreve um episódio: a pessoa adoece, procura atendimento, é tratada e melhora. Nesses, o que a página precisa entregar é o reconhecimento do quadro e a hora de ir ao serviço de saúde. A [dengue](/doencas/dengue/), a [malária](/doencas/malaria/) e a [gastroenterite](/doencas/gastroenterite/) pertencem a esse grupo, e é por isso que suas páginas abrem com fases e sinais.',
        'Outros descrevem uma condição que acompanha a vida: [diabetes](/doencas/diabetes/), [hipertensão](/doencas/hipertensao/), [asma](/doencas/asma/) e [DPOC](/doencas/dpoc/). Nesses, o texto mais útil não é o da crise, e sim o do controle: quais exames se repetem e com que intervalo, o que o medicamento faz todos os dias mesmo sem sintoma nenhum, e por que interromper o tratamento é o que costuma levar à complicação.',
        'A distinção não é cosmética. Em um episódio, atrasar faz mal; em uma condição crônica, é a descontinuidade que faz mal. As duas categorias desta lista, [doenças infecciosas](/temas/doencas-infecciosas/) e [doenças crônicas](/temas/doencas-cronicas/), organizam a leitura exatamente por esse eixo.',
      ],
    },
    {
      id: 'como-esta-lista-cresce',
      heading: 'Como esta lista cresce',
      paragraphs: [
        'Uma enciclopédia de saúde não é um texto corrido: ela avança por entrada. Cada verbete publicado soma-se à lista com suas fontes, suas datas e seu estado editorial, e os capítulos que faltam em uma doença não são escritos em outra página para compensar.',
        'A ordem dos cartões acima é a ordem editorial da enciclopédia, e não uma hierarquia de gravidade: doença nenhuma aqui está posicionada por ser mais ou menos séria. Para encontrar um nome específico, a busca chega antes que a rolagem da lista.',
        'A [página de contato](/contato/) é por onde os assuntos novos entram. O mapa mostra por onde a enciclopédia já passou, e cada sugestão enviada por ali é lida antes da rodada seguinte de escrita.',
      ],
      cta: { label: 'Sugerir um tema ao projeto', href: '/contato/' },
    },
  ],

  articles: [
    {
      id: 'o-que-um-artigo-responde',
      heading: 'O que um artigo responde',
      paragraphs: [
        'Um verbete descreve a doença inteira. Um artigo toma uma única dúvida e a segue até o fim: quanto tempo pode durar a dor nas articulações depois de uma chikungunya, o que se faz nas primeiras 72 horas após uma situação de risco de HIV, como medir a pressão em casa sem cometer os erros que mudam o número.',
        'A diferença de tamanho é proposital. A dúvida que chega no meio da noite é curta, e um texto de três mil palavras sobre a doença inteira não é a resposta dela. Todo artigo termina apontando para o verbete correspondente, onde o assunto é tratado por completo: a pergunta vem curta, a explicação longa fica a um clique.',
        'Por isso os artigos desta lista podem ser lidos fora de ordem. Nenhum deles depende de ter lido o anterior, e cada um carrega suas próprias fontes, sua data de revisão e o estado editorial do texto, exatamente como um verbete.',
      ],
      cta: { label: 'Abrir a enciclopédia de doenças', href: '/doencas/' },
    },
    {
      id: 'tres-perguntas',
      heading: 'As três perguntas que abrem quase tudo',
      paragraphs: [
        'Reconhecer: a maior parte dos artigos existe porque duas doenças parecidas chegam com o mesmo rosto. [Chikungunya e dengue: como diferenciar](/artigos/chikungunya-e-dengue-como-diferenciar/) compara os quadros lado a lado, [sintomas iniciais da dengue](/artigos/sintomas-iniciais-da-dengue/) descreve as primeiras horas, e [como reconhecer os sinais do AVC e agir rápido](/artigos/avc-como-reconhecer-os-sinais-e-agir-rapido/) trata do acidente vascular cerebral, em que o reconhecimento é o tratamento.',
        'Agir no tempo certo: alguns artigos têm relógio. [O que fazer nas primeiras 72 horas](/artigos/hiv-o-que-fazer-nas-primeiras-72-horas/) e [quando procurar atendimento em caso de suspeita de dengue](/artigos/quando-procurar-atendimento-em-caso-de-suspeita-de-dengue/) marcam prazos; [crise de asma: o que fazer enquanto espera o atendimento](/artigos/asma-crise-o-que-fazer-enquanto-espera-atendimento/) descreve o intervalo entre a ligação e a chegada do socorro.',
        'Sustentar o tratamento: o terceiro grupo não trata da emergência, e sim do dia. [Diabetes tipo 2: o que muda no dia a dia](/artigos/diabetes-tipo-2-o-que-muda-no-dia-a-dia/), [hipertensão: como medir a pressão em casa](/artigos/hipertensao-como-medir-a-pressao-em-casa/) e [DPOC e tabagismo: por que parar de fumar muda o quadro](/artigos/dpoc-e-tabagismo-por-que-parar-de-fumar-muda-o-quadro/) falam de rotina, hábito e acompanhamento, que é onde uma condição crônica se ganha ou se perde.',
      ],
    },
    {
      id: 'como-um-artigo-se-liga',
      heading: 'Como um artigo se liga às outras páginas',
      paragraphs: [
        'Cada artigo declara as doenças de que trata, e é por essa declaração que ele aparece. A página do artigo lista as doenças citadas; a lista de doenças mostra o artigo sob o verbete correspondente; e as páginas de região, que não listam artigos próprios, os deriva automaticamente das doenças que o artigo nomeia.',
        'Na prática, isso significa uma coisa para quem lê: seguir um artigo leva a três lugares diferentes, e todos eles falam do mesmo assunto. Se o artigo sobre [viagem para a Amazônia e malária](/artigos/malaria-como-se-prevenir-em-viagens-para-a-amazonia/) é o ponto de partida, o verbete da doença e o tema da prevenção estão a um clique dele.',
      ],
    },
    {
      id: 'leitura-por-situacao',
      heading: 'Três situações, três ordens de leitura',
      paragraphs: [
        'Febre súbita em uma área com dengue circulando: comece por [sintomas iniciais da dengue](/artigos/sintomas-iniciais-da-dengue/), siga para [quando procurar atendimento](/artigos/quando-procurar-atendimento-em-caso-de-suspeita-de-dengue/) e, se a dúvida for entre dengue e chikungunya, para [como diferenciar](/artigos/chikungunya-e-dengue-como-diferenciar/). O verbete completo fica no fim desse caminho, não no começo.',
        'Diagnóstico de diabetes acabado de chegar: leia o verbete primeiro, e depois [o que muda no dia a dia](/artigos/diabetes-tipo-2-o-que-muda-no-dia-a-dia/). A segunda leitura é a que transforma o diagnóstico em rotina; sem ela, o texto médico fica parado.',
        'Cuidado antes de adoecer: a sequência é [vacinação: o que é o calendário básico](/artigos/vacinacao-o-que-e-o-calendario-basico/), [hepatites virais: quais têm vacina](/artigos/hepatites-virais-quais-tem-vacina/) e [como se proteger em áreas com transmissão de zika](/artigos/zika-como-se-proteger-em-areas-com-transmissao/). Aqui o objetivo não é reconhecer um sintoma, e sim não chegar a ele.',
      ],
    },
  ],

  regions: [
    {
      id: 'da-queixa-a-regiao',
      heading: 'Da queixa à parte do corpo',
      paragraphs: [
        'Quem procura informação de saúde raramente começa pelo nome da doença. Começa pelo lugar: o peito que aperta, a junta que não passa, a vista que embaçou. A lista abaixo pega queixas comuns e aponta a região em que os verbetes correspondentes já estão reunidos.',
      ],
      bullets: [
        'Dor no peito, aperto, palpitação ou falta de ar aos esforços: [coração e vasos](/por-regiao/coracao-e-vasos/).',
        'Boca torta, fala embolada, fraqueza de um lado do corpo ou dor de cabeça súbita e muito intensa: [cérebro e nervos](/por-regiao/cerebro-e-nervos/).',
        'Visão embaçada, dor atrás dos olhos ou perda de visão de um lado: [olhos](/por-regiao/olhos/).',
        'Dor de garganta, dificuldade para engolir, ouvido dolorido ou nariz entupido que volta: [ouvidos, nariz e garganta](/por-regiao/ouvidos-nariz-e-garganta/).',
        'Tosse que dura semanas, chiado no peito ou falta de ar que piora à noite: [pulmões e vias aéreas](/por-regiao/pulmoes/).',
        'Dor abdominal, diarreia, vômito ou barriga inchada: [estômago e intestinos](/por-regiao/estomago-e-intestinos/).',
        'Sede excessiva, urina frequente, glicose alta no exame de rotina: [pâncreas e metabolismo](/por-regiao/pancreas-e-metabolismo/).',
        'Urina em pouca quantidade, inchaço nos pés, dor em cólica nas costas: [rins](/por-regiao/rins/).',
        'Manchas vermelhas, coceira, ferida que não fecha ou pele amarelada: [pele](/por-regiao/pele/).',
        'Junta inchada, rigidez pela manhã, dor que dura semanas depois de uma febre: [articulações e músculos](/por-regiao/articulacoes-e-musculos/).',
        'Cansaço, palidez, infecções que se repetem ou anemia no hemograma: [sangue e defesas](/por-regiao/sangue-e-defesas/).',
        'Exame de fígado alterado, hepatite em caso na família: [fígado](/por-regiao/figado/).',
      ],
    },
    {
      id: 'quando-a-regiao-nao-era-a-porta',
      heading: 'Se a região não era a porta certa',
      paragraphs: [
        'A divisão por partes do corpo resolve uma busca, mas não resolve todas. Uma doença que atinge o corpo inteiro, como o HIV ou a dengue, aparece sob mais de uma região por um motivo: cada verbete descreve as partes que a sua própria evolução atinge. Quem procura a doença pelo nome, e não pelo lugar, encontra a lista completa em [todas as doenças](/doencas/).',
        'Quem procura um tema, como vacinação ou prevenção em viagem, acha mais nos [temas de saúde](/temas/prevencao/), que organizam a leitura pelo ângulo da dúvida. E quem procura uma resposta pontual costuma achar primeiro um [artigo](/artigos/), que é justamente o formato feito para caber em uma pergunta só.',
      ],
    },
  ],
};

/**
 * One definition per category, shared by every page that shows the group.
 *
 * The keys are `categorySlug` values already present in the content data, and
 * the same four slugs name the topics under `/temas/`. Writing the definition
 * here, once, is what lets the disease list, the article list and the topic page
 * describe a group identically without anyone copying a paragraph twice.
 */
export const categoryGuides: Record<string, ContentSection[]> = {
  'doencas-infecciosas': [
    {
      id: 'definicao-doencas-infecciosas',
      heading: 'O que é uma doença infecciosa',
      paragraphs: [
        'É a doença causada por um agente que entra no corpo de fora: vírus, bactéria, parasita ou fungo. Duas perguntas organizam quase tudo que se precisa saber sobre ela, e os verbetes deste grupo respondem às duas: como o agente entra, e o que quebra esse caminho.',
        'O modo de entrada muda o que se faz. Dengue, zika e chikungunya entram pela picada de um mosquito, por isso a base da prevenção está no criadouro e na pele; a [chikungunya](/doencas/chikungunya/) já tem vacina registrada no Brasil, aplicada hoje em municípios selecionados, o que não tirou do controle do mosquito o seu lugar principal. A [tuberculose](/doencas/tuberculose/) entra pelo ar, e por isso o que corta a transmissão é o diagnóstico rápido seguido do tratamento até o fim. [HIV](/doencas/hiv-aids/) e [hepatites](/doencas/hepatites-virais/) entram por sangue, relação sexual sem proteção e da gestante para o bebê, e têm medidas com prazo marcado. A [malária](/doencas/malaria/) segue o mosquito, mas com geografia: circula em área de mata e de rio, não no asfalto da capital.',
        'O que estes verbetes têm em comum é o tempo. Uma infecção pode passar de quadro leve a quadro grave em horas, e a linha que separa os dois costuma ser visível: no caso da dengue, ela aparece quando a febre começa a ceder, e não quando ela está no ponto mais alto.',
        'Quase todas as doenças deste grupo têm tratamento oferecido gratuitamente pelo sistema público brasileiro, e algumas têm cura declarada, como a tuberculose e a hepatite C. O texto de cada verbete diz qual é o tratamento e onde ele é entregue.',
      ],
    },
  ],
  'doencas-cronicas': [
    {
      id: 'definicao-doencas-cronicas',
      heading: 'O que é uma doença crônica',
      paragraphs: [
        'É a condição que permanece. Não se pega e não se passa adiante: a hipertensão, o diabetes, a asma e a DPOC acompanham a pessoa por anos, e o que decide o desfecho não é um episódio, é a continuidade do cuidado.',
        'Por isso o capítulo mais útil de um verbete crônico raramente é o dos sintomas. Hipertensão é o exemplo extremo: ela costuma não dar sinal nenhum até a complicação, e é justamente por isso que a medição periódica tem mais valor do que a descrição de uma crise que quase ninguém sente. No diabetes, o dado que importa é a glicose média ao longo das semanas, não a leitura de um dia.',
        'A segunda diferença está no que se monitora. Em uma infecção, o fim do tratamento encerra o caso; em uma condição crônica, o acompanhamento é o tratamento. Exames repetidos, dose ajustada, medicação tomada mesmo sem sintoma: é essa rotina que segura a complicação no olho, no rim, no pé, no coração e no cérebro, onde estas doenças terminam quando não controladas.',
        'O que reduz o risco é conhecido e está escrito nos verbetes deste grupo: menos sal e menos ultraprocessado, movimento regular, peso controlado, nada de fumo, e o tratamento do que já foi diagnosticado. Nada disso substitui a medicação indicada por quem acompanha o caso.',
      ],
    },
  ],
  prevencao: [
    {
      id: 'definicao-prevencao',
      heading: 'O que entra no grupo da prevenção',
      paragraphs: [
        'Prevenção é o que se faz antes de adoecer, e ela tem duas velocidades. Uma é a do hábito, que age em anos: parar de fumar, medir a pressão em casa, comer com menos sal, manter movimento. A outra é a do relógio, que age em horas: a profilaxia contra o HIV em até 72 horas depois de uma exposição, a vacina contra a hepatite B nas primeiras horas de vida, o soro de reidratação oral que começa no primeiro episódio de diarreia.',
        'Os textos deste grupo tratam das duas. A razão de separá-las é prática: as medidas de hábito funcionam porque são sustentáveis, e as medidas de prazo só funcionam porque são conhecidas antes de a situação aparecer. Ninguém decide o que fazer nas primeiras 72 horas no momento em que elas começam.',
        'Boa parte da prevenção no Brasil passa pelo Sistema Único de Saúde, e os textos deste grupo dizem onde cada medida é oferecida: vacina é rotina de unidade básica, sem agendamento e sem custo; o teste rápido para HIV e hepatites está disponível na rede pública; o tratamento da tuberculose e a profilaxia pós-exposição ao HIV têm endereço e tempo definidos.',
      ],
    },
  ],
  'saude-infantil': [
    {
      id: 'definicao-saude-infantil',
      heading: 'O que o grupo de saúde infantil cobre',
      paragraphs: [
        'Criança não é um adulto pequeno, e a informação que serve para uma não serve sempre para a outra. O que se observa em um bebê são sinais diferentes: na diarreia, o que conta é a boca seca, o choro sem lágrimas, os olhos fundos e a urina que aparece rara; na dengue, a criança pequena está entre os grupos com maior risco de complicação; e o calendário de vacinas tem idades precisas, que a rotina do adulto não tem.',
        'Este grupo reúne o que já está publicado sobre a infância na enciclopédia e aponta onde os verbetes tratam especificamente da criança: a [gastroenterite](/doencas/gastroenterite/), em que a desidratação evolui depressa; a [dengue](/doencas/dengue/), para a qual o bebê é grupo de risco de complicação; e a [tuberculose](/doencas/tuberculose/), em que a investigação de quem mora com a pessoa doente começa antes de qualquer sintoma aparecer.',
        'A vacinação de rotina é o texto mais consultado deste grupo, e com razão: o [calendário básico](/artigos/vacinacao-o-que-e-o-calendario-basico/) é uma das medidas preventivas de maior efeito coletivo oferecidas de graça no país.',
      ],
    },
  ],
  'saude-da-mulher': [
    {
      id: 'definicao-saude-da-mulher',
      heading: 'O que este tema cobre',
      paragraphs: [
        'Há saúde da mulher em vários verbetes desta enciclopédia, e este tema os reúne pelo ângulo, não pelo órgão: a gestação, o ciclo, a meia-idade e o que muda em cada fase.',
        'A gravidez atravessa a lista de doenças infecciosas de ponta a ponta. A [zika na gestação](/artigos/zika-na-gestacao-o-que-a-infeccao-pode-causar/) descreve o que a infecção pode causar ao bebê e por que a proteção contra a picada é diferente nessa fase; a [dengue](/doencas/dengue/) coloca a gestante e a mulher no pós-parto entre os grupos com maior risco de complicação; e a profilaxia da [infecção pelo HIV](/doencas/hiv-aids/) faz parte do pré-natal exatamente porque o prazo importa.',
        'Nas outras fases da vida, o que pesa é o acompanhamento continuado: a [hipertensão](/doencas/hipertensao/), principal porta de entrada do AVC, e o [diabetes](/doencas/diabetes/), cujo tipo gestacional o pré-natal rastreia. Os verbetes tratam dessas condições pelo que elas exigem de quem as acompanha por anos, e é por esse caminho que o tema da saúde da mulher se conecta ao resto da enciclopédia.',
        'Como usar este tema: as páginas abaixo reúnem os verbetes e os artigos que tratam da gestação, do ciclo e da meia-idade, cada um com as fontes oficiais que o sustentam.',
      ],
    },
  ],
};
