import type { StaticPage } from '../types';

/**
 * Long-form institutional copy, in the source language.
 *
 * These four pages used to hold their prose inside the templates. They are
 * content now: one record per page, rendered by a generic view, with a
 * `zh-Hant` twin addressed by the same slug.
 *
 * `{mission}` in `sobre` is substituted at render time from the locale catalog.
 * The site's identity sentence is defined once per language, so the about page,
 * the home page and the social preview cannot disagree about what the project
 * claims to be.
 */
export const staticPages: StaticPage[] = [
  {
    slug: 'sobre',
    title: 'Sobre o projeto',
    metaTitle: 'Sobre o projeto: como o conteúdo é produzido',
    description:
      'O que é o Saudewiki, para quem ele existe, como o conteúdo é produzido e quais são os limites do que ele se propõe a fazer.',
    h1: 'Sobre o projeto',
    sections: [
      {
        id: 'o-que-e',
        heading: 'O que é o Saudewiki',
        paragraphs: [
          '{mission} O objetivo é organizar informação de saúde já publicada por fontes oficiais em um formato que qualquer pessoa consiga ler, entender e continuar navegando.',
          'O site se organiza em três partes que se conectam: a enciclopédia de doenças, os artigos que respondem a dúvidas específicas e os temas que agrupam tudo o que existe sobre uma área da saúde. A quarta porta de entrada é o [mapa do corpo](/por-regiao/), que reúne as doenças pela região do corpo onde elas se manifestam.',
        ],
      },
      {
        id: 'o-que-nao-e',
        heading: 'O que este site não é',
        bullets: [
          'Não é um serviço de diagnóstico. Nenhuma página diz o que você tem.',
          'Não é consulta médica, telemedicina ou agendamento de atendimento.',
          'Não é um diretório de hospitais, clínicas ou profissionais.',
          'Não substitui a avaliação de um profissional de saúde.',
        ],
      },
      {
        id: 'limites-atuais',
        heading: 'Limites atuais, declarados abertamente',
        paragraphs: [
          'Nenhum texto do site passou por revisão médica formal, e nenhuma página afirma o contrário. Todo conteúdo publicado é marcado como material de demonstração, para que a informação seja conferida na fonte oficial antes de qualquer decisão sobre saúde.',
          'Quem escreve são estudantes de medicina, de forma voluntária e sem remuneração. Isso não é revisão médica: nenhum texto passou por um corpo formal de revisores, e nenhuma página afirma o contrário. Também não existe, hoje, parceria institucional com faculdades de medicina, sociedades de especialidade ou órgãos oficiais. Quando isso existir, será dito aqui com nome e data.',
        ],
      },
      {
        id: 'como-trabalhamos',
        heading: 'Como o conteúdo é produzido',
        paragraphs: [
          'Cada página parte de documentos públicos de instituições como o Ministério da Saúde, a Fiocruz e a Organização Mundial da Saúde. As afirmações relevantes apontam para o documento específico que as sustenta, não para a página inicial da instituição.',
          'Os princípios completos de edição e revisão estão na [política editorial](/politica-editorial/).',
        ],
      },
      {
        id: 'contato',
        heading: 'Falar com o projeto',
        paragraphs: [
          'Correções, sugestões de pauta e pedidos de remoção de conteúdo podem ser enviados pela [página de contato](/contato/).',
        ],
      },
    ],
  },
  {
    slug: 'politica-editorial',
    title: 'Política editorial',
    metaTitle: 'Política editorial: fontes, autoria e correções',
    description:
      'Como o conteúdo médico do Saudewiki é escrito, referenciado, revisado e corrigido, e o que cada estado editorial significa.',
    h1: 'Política editorial',
    intro:
      'Estas são as regras que o projeto segue para decidir o que publicar, como referenciar e como corrigir.',
    cardsAfter: 'estados',
    cards: [
      {
        title: 'Rascunho',
        description:
          'Texto em escrita ou ainda sem fontes. Não é construído no site: não aparece em listas, não pode ser linkado e não entra no sitemap.',
      },
      {
        title: 'Em revisão médica',
        description:
          'Texto escrito e com fontes indicadas, mas ainda sem revisão por profissional habilitado. É publicado com aviso visível na própria página.',
      },
      {
        title: 'Revisado',
        description:
          'Passou por revisão de um profissional identificado. O nome do revisor aparece na página, junto da data.',
      },
      {
        title: 'Publicado',
        description: 'Revisado e liberado para circulação pública como conteúdo estável.',
      },
    ],
    sections: [
      {
        id: 'fontes',
        heading: 'Fontes aceitas',
        paragraphs: [
          'O conteúdo parte prioritariamente de documentos públicos de instituições de saúde reconhecidas, como o Ministério da Saúde, a Fiocruz e a Organização Mundial da Saúde. Fontes comerciais, blogs pessoais e material promocional não são usados como base de afirmação médica.',
          'Cada afirmação relevante aponta para o documento específico que a sustenta. Referências genéricas, como a página inicial de uma instituição, não contam como fonte.',
        ],
      },
      {
        id: 'autoria',
        heading: 'Autoria e revisão',
        paragraphs: [
          'Toda página informa quem escreveu, qual é o estado editorial do texto e quando foi atualizado. Quando não há revisor médico identificado, a página diz explicitamente que a revisão não foi realizada.',
          'Não criamos revisores, credenciais ou parcerias institucionais que não existam. Se um dia houver revisão por profissional habilitado, o nome e a data constarão na própria página.',
        ],
      },
      {
        id: 'estados',
        heading: 'Estados editoriais',
      },
      {
        id: 'linguagem',
        heading: 'Linguagem e limites',
        bullets: [
          'Textos escritos para o público geral, sem jargão desnecessário.',
          'Sem promessas de cura, resultado ou prazo.',
          'Sem estatísticas sem fonte verificável.',
          'Sem depoimentos, avaliações ou fotos de pessoas apresentadas como pacientes.',
        ],
      },
      {
        id: 'correcoes',
        heading: 'Correções',
        paragraphs: [
          'Qualquer pessoa pode reportar um erro pela [página de contato](/contato/). Correções de conteúdo médico são avaliadas antes de qualquer alteração e, quando aplicadas, a data de atualização da página é alterada.',
        ],
      },
    ],
  },
  {
    slug: 'aviso-medico',
    title: 'Aviso médico',
    metaTitle: 'Aviso médico: não é orientação médica',
    description:
      'Nada aqui é orientação médica. Veja o que não fazer com o conteúdo do Saudewiki, quando procurar atendimento e até onde vai a responsabilidade do projeto.',
    h1: 'Aviso médico',
    intro:
      'Este aviso diz o que fazer e o que não fazer com o que você lê aqui, e até onde vai a responsabilidade do projeto. Ele não repete a descrição do site: isso está na [página sobre o projeto](/sobre/).',
    notice: {
      title: 'Em caso de emergência, não use este site',
      body: 'Ligue para o SAMU pelo 192 ou vá até o serviço de saúde mais próximo. Para orientações gerais do Ministério da Saúde, o Disque Saúde atende pelo 136.',
    },
    sections: [
      {
        id: 'nao-e-aviso-medico',
        heading: 'Este conteúdo não é orientação médica',
        paragraphs: [
          'Nada nesta página ou nas outras constitui consulta, diagnóstico, prescrição ou plano de tratamento. O texto foi escrito para um leitor genérico, não para o seu caso, e não substitui a avaliação de um profissional habilitado nem o atendimento presencial.',
        ],
      },
      {
        id: 'o-que-nao-fazer',
        heading: 'O que não fazer com este conteúdo',
        bullets: [
          'Não use as páginas para se autodiagnosticar nem para descartar uma hipótese de doença.',
          'Não comece, não altere a dose e não interrompa um medicamento por conta própria.',
          'Não adie uma consulta ou um exame já indicado porque a leitura pareceu tranquilizadora.',
          'Não use o site no lugar de uma consulta já agendada.',
          'Não use o conteúdo para orientar o tratamento de outra pessoa.',
        ],
      },
      {
        id: 'medicamentos',
        heading: 'Medicamentos exigem prescrição',
        paragraphs: [
          'As páginas de doenças citam classes de medicamentos de forma geral, para explicar como a doença costuma ser tratada. Citar não é recomendar, e nada aqui é indicação de uso.',
          'Todo medicamento tem efeitos adversos e interações. Escolha, dose e duração dependem do seu peso, dos seus exames e de outros remédios que você já toma. Só quem prescreve pode decidir isso.',
        ],
      },
      {
        id: 'alto-risco',
        heading: 'Doenças graves e situações de risco',
        paragraphs: [
          'Algumas páginas tratam de quadros em que a demora custa caro, como dengue grave, infarto, AVC, HIV e tuberculose. O texto descreve a doença em geral; ele não sabe nada sobre o seu caso.',
          'Reconhecer em si mesmo os sinais descritos não confirma nem descarta nada. Quem pode examinar você é um profissional de saúde, e é a ele que a decisão cabe.',
        ],
      },
      {
        id: 'emergencia',
        heading: 'Sinais que pedem atendimento imediato',
        paragraphs: [
          'Estes sinais não devem ser avaliados por leitura: procure atendimento na hora, sem passar pelo site antes.',
        ],
        bullets: [
          'Falta de ar ou dor no peito.',
          'Desmaio ou perda de consciência.',
          'Sangramento que não para.',
          'Confusão mental ou pensamentos de se ferir.',
        ],
      },
      {
        id: 'fontes-e-tempo',
        heading: 'Fontes e defasagem',
        paragraphs: [
          'O conteúdo é organizado a partir de documentos públicos de instituições como o Ministério da Saúde, a Fiocruz e a Organização Mundial da Saúde. Ainda assim, a medicina muda e a política pública também: uma página correta na data da publicação pode ficar desatualizada depois.',
          'Antes de agir com base em algo que você leu aqui, confirme no canal oficial: o site do Ministério da Saúde, a unidade de saúde mais próxima ou o Disque Saúde, pelo 136.',
        ],
      },
      {
        id: 'sem-garantias',
        heading: 'Nenhuma garantia, expressa ou implícita',
        paragraphs: [
          'Não garantimos, de forma expressa nem implícita, que o conteúdo seja exato, completo, atual ou adequado a uma finalidade específica.',
          'O site é oferecido no estado em que se encontra. O acesso pode ser interrompido, e páginas podem ser alteradas ou removidas sem aviso.',
        ],
      },
      {
        id: 'responsabilidade',
        heading: 'Limitação de responsabilidade',
        paragraphs: [
          'Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso, da confiança depositada ou da impossibilidade de uso deste site, nem por decisões de saúde tomadas a partir do que está publicado aqui.',
          'Aplicar qualquer informação ao próprio caso é decisão de quem lê. Nada neste aviso afasta direitos previstos na legislação brasileira, inclusive os da Lei Geral de Proteção de Dados (LGPD).',
        ],
      },
      {
        id: 'outras-paginas',
        heading: 'Onde está o resto',
        paragraphs: [
          'Quem escreve o site, o que ele declara não ser e quais são os limites atuais do projeto estão na [página sobre o projeto](/sobre/). Como o conteúdo é escrito, referenciado e corrigido está na [política editorial](/politica-editorial/). Este aviso não repete nenhum dos dois.',
        ],
      },
      {
        id: 'contato',
        heading: 'Encontrou um erro neste aviso?',
        paragraphs: [
          'Escreva pela [página de contato](/contato/). Correções de texto legal são avaliadas como qualquer outra correção de conteúdo.',
        ],
      },
    ],
    updatedAt: '2026-10-15',
  },
  {
    slug: 'politica-de-privacidade',
    title: 'Política de privacidade',
    metaTitle: 'Política de privacidade: dados e direitos',
    description:
      'Quais dados o Saudewiki coleta, para que servem e como pedir a eliminação deles, nos termos da LGPD.',
    h1: 'Política de privacidade',
    sections: [
      {
        id: 'dados-coletados',
        heading: 'Quais dados são coletados hoje',
        paragraphs: [
          'O Saudewiki não exige cadastro e não possui login. A navegação pelas páginas de doenças, artigos e temas não envia dados pessoais ao projeto.',
          'O site ainda não utiliza ferramentas de análise de audiência, publicidade ou rastreamento de terceiros. Se isso mudar, esta seção será atualizada antes da mudança entrar no ar, informando quais ferramentas são usadas e com que finalidade.',
        ],
      },
      {
        id: 'buscas',
        heading: 'Buscas no site',
        paragraphs: [
          'A busca interna funciona inteiramente no seu navegador. O termo pesquisado é processado localmente e não é enviado nem armazenado em servidor do projeto.',
        ],
      },
      {
        id: 'links-externos',
        heading: 'Links para sites de terceiros',
        paragraphs: [
          'As páginas citam documentos oficiais e levam para sites como gov.br, portal.fiocruz.br e who.int. Ao seguir esses links, você passa a estar sujeito às políticas de privacidade desses sites, que não controlamos.',
        ],
      },
      {
        id: 'contato-e-direitos',
        heading: 'Contato e direitos do titular',
        paragraphs: [
          'Se você enviar uma mensagem pela [página de contato](/contato/), os dados que você incluir serão usados apenas para responder à solicitação. Você pode pedir a exclusão dessas mensagens a qualquer momento pelo mesmo canal.',
          'Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode solicitar confirmação de tratamento, correção, anonimização ou eliminação de dados pessoais que eventualmente tenham sido coletados.',
        ],
      },
      {
        id: 'alteracoes',
        heading: 'Alterações nesta política',
        paragraphs: [
          'Quando houver mudança relevante, a data de atualização abaixo será alterada e a natureza da mudança será descrita nesta página.',
        ],
      },
    ],
    updatedAt: '2026-10-13',
  },
  {
    slug: 'contato',
    mailto: true,
    title: 'Contato',
    metaTitle: 'Contato: erros, pautas e direitos do titular',
    description:
      'Fale com o Saudewiki para reportar um erro de conteúdo, sugerir uma pauta ou exercer seus direitos de privacidade.',
    h1: 'Contato',
    intro:
      'Este canal é para correções de conteúdo, sugestões de pauta e questões de privacidade. Ele não é um canal de atendimento médico: não envie sintomas esperando orientação individual.',
    cards: [
      {
        icon: 'tabler:alert-triangle',
        title: 'Reportar um erro de conteúdo',
        description:
          'Informe o endereço da página e o trecho que parece incorreto, de preferência com a fonte que sustenta a correção.',
      },
      {
        icon: 'tabler:bulb',
        title: 'Sugerir uma pauta',
        description:
          'Doença, sintoma ou dúvida de saúde que você gostaria de ver explicada no site.',
      },
      {
        icon: 'tabler:shield-lock',
        title: 'Privacidade e direitos do titular',
        description: 'Solicitações de acesso, correção ou exclusão de dados, nos termos da LGPD.',
      },
    ],
    sections: [
      {
        id: 'como-reportar',
        heading: 'Como reportar um erro de conteúdo',
        paragraphs: ['Para que a correção seja avaliada mais rápido, inclua:'],
        bullets: [
          'O endereço (URL) da página',
          'O trecho exato que parece incorreto',
          'A fonte pública que sustenta a correção, quando houver',
        ],
      },
    ],
    outro:
      'Em caso de sintomas ou dúvida sobre a própria saúde, procure uma unidade de saúde ou um serviço de atendimento oficial. Este site não presta orientação individual.',
  },
];
