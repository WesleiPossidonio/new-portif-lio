
import ImageThSolocoes from '@/assets/thsolucoes.png'
import ImageDraJessica from '@/assets/DraJessica.png'
import ImageSmfCorretora from '@/assets/SmfCorretora.png'
import ImageTornoCampos from '@/assets/TornoCampos.png'
import ImageEscolaCBO from '@/assets/EscolaCBO.png'
import ImageDraEmely from '@/assets/draEnely.png'
import ImageEmam from '@/assets/Emam.png'
import ImageGaspar from '@/assets/GasparTransportes.png'

import ImageDialogThSolucao from '@/assets/ImgDialogThSoluções.png'
import ImageDialogDraEmely from '@/assets/ImgDialogDraEmely.png'
import ImageDialogDraJessica from '@/assets/ImgDialogDraJessica.png'
import ImageDialogTornoCampos from '@/assets/ImgDialogTornoCampos.png'
import ImageDialogEmam from '@/assets/ImgDialogEmam.png'
import ImageDialogGaspar from '@/assets/ImgDialogGaspart.png'
import ImageDialogSMFCorretora from '@/assets/ImgDialogSMF.png'
import ImageDialogCBO from '@/assets/ImgDialogCBO.png'

interface skilsProps {
  HTML?: 'HTML',
  Bootstrap?: 'Bootstrap',
  JavaScript?: 'JavaScript',
  TypeScript?: 'TypeScript',
  TailwindCss?: 'TailwindCss',
  React?: 'React Js',
  Node?: 'Node Js',
  Css?: 'css',
  StyledComponents?: 'Styled-components',
  Figma?: 'Figma',
  PHP?: 'PHP'
}


export interface ListProps {
  id: number
  img: string
  name: string
  skils: skilsProps
  typeServices: string
  imgDialog: string,
  text: {
    textOne: string
    textTwo?: string
  }
  linkPage: string
}


export const ListServices: ListProps[] = [
  {
    id: 1,
    imgDialog: ImageDialogThSolucao,
    img: ImageThSolocoes,
    name: 'Th Soluções',
    skils: {
      Bootstrap: 'Bootstrap',
      HTML: 'HTML',
      JavaScript: 'JavaScript',
      PHP: 'PHP'
    },
    text: {
      textOne: 'A TH Soluções nasceu com o propósito de entregar qualidade, inovação e confiança em cada projeto. Com uma equipe experiente e comprometida, oferece soluções personalizadas que atendem às necessidades específicas de cada cliente.',
      textTwo: 'Com foco em resultados eficientes e parcerias duradouras, atua em diversos setores com profissionalismo e excelência. Projeto desenvolvido em Parceria coma a Cliard Tech'
    },
    linkPage: 'https://th-solu-es-stti.vercel.app/',
    typeServices: 'Landing'
  },

  {
    id: 2,
    imgDialog: ImageDialogDraEmely,
    img: ImageDraEmely,
    name: 'Adv Emely Fontes',
    skils: {
      React: 'React Js',
      Node: 'Node Js',
      JavaScript: 'JavaScript',
      TypeScript: 'TypeScript',
      TailwindCss: 'TailwindCss'
    },
    text: {
      textOne: 'A Dra. Emely Fontes é advogada com mais de 12 anos de experiência, especializada em soluções jurídicas extrajudiciais ágeis e personalizadas.',
      textTwo: 'Reconhecida pela eficiência e integridade, atua com foco em simplificar processos legais e oferecer resultados práticos para pessoas e empresas, sempre com assertividade e empatia.'
    },
    linkPage: 'https://emelyfontesadv.com.br/',
    typeServices: 'Landing'
  },

  {
    id: 3,
    imgDialog: ImageDialogSMFCorretora,
    img: ImageSmfCorretora,
    name: 'SMF Coreetora',
    skils: {
      Bootstrap: 'Bootstrap',
      HTML: 'HTML',
      Css: 'css',
      JavaScript: 'JavaScript'
    },
    text: {
      textOne: 'A SMF Corretora de Seguros oferece uma ampla gama de seguros, consórcios, planos de saúde e soluções financeiras para todo o Brasil.',
      textTwo: 'Com uma equipe experiente e parcerias com as melhores instituições do país, garante segurança, confiabilidade e atendimento personalizado para cada cliente.'
    },
    linkPage: 'https://smfcorretora.com.br/',
    typeServices: 'Constitucional'
  },

  {
    id: 4,
    imgDialog: ImageDialogEmam,
    img: ImageEmam,
    name: 'Ecsola de Musica Emam',
    skils: {
      Bootstrap: 'Bootstrap',
      HTML: 'HTML',
      JavaScript: 'JavaScript'
    },
    text: {
      textOne: 'Escola de Musica Emam é uma instituição dedicada ao ensino de música, oferecendo cursos e aulas personalizadas para todos os níveis'
    },
    linkPage: 'https://www.emam.com.br/',
    typeServices: 'Constitucional'
  },

  {
    id: 5,
    imgDialog: ImageDialogTornoCampos,
    img: ImageTornoCampos,
    name: 'Tornocampos',
    skils: {
      React: 'React Js',
      TypeScript: 'TypeScript',
      StyledComponents: 'Styled-components'
    },
    text: {
      textOne: 'A Petro Tools Offshore / Tornocampos atua desde 2003 nos segmentos de Usinagem e Caldeiraria, com sede em Campos dos Goytacazes/RJ e filial em Macaé/RJ.',
      textTwo: 'Com equipe técnica altamente qualificada, oferece atendimento personalizado e soluções ágeis, focadas na eficiência e na busca constante pelas melhores alternativas para seus clientes. Projeto desenvolvido em Parceria coma a Cliard Tech',
    },
    linkPage: 'https://tornocampos.com.br/',
    typeServices: 'Constitucional'
  },

  {
    id: 6,
    imgDialog: ImageDialogCBO,
    img: ImageEscolaCBO,
    name: 'Escola CBO',
    skils: {
      Bootstrap: 'Bootstrap',
      HTML: 'HTML',
      JavaScript: 'JavaScript',
      PHP: 'PHP'
    },
    text: {
      textOne: 'A Escola CBO oferece excelência em educação da Educação Infantil ao Pré-Vestibular, com foco em resultados, inovação e formação humanizada.',
      textTwo: 'Com um ambiente acolhedor, estrutura moderna e metodologia diferenciada, prepara os alunos para os desafios acadêmicos e profissionais, promovendo aprendizado de qualidade e conquistas nos vestibulares. Fiz parte do time de desenvolviemento do site junto com a empresa I3group.'
    },
    linkPage: 'https://www.colegiocbo.com.br/site/',
    typeServices: 'Landing'
  },

  {
    id: 7,
    imgDialog: ImageDialogDraJessica,
    img: ImageDraJessica,
    name: 'Dra Jessica Braga',
    skils: {
      React: 'React Js',
      TypeScript: 'TypeScript',
      StyledComponents: 'Styled-components',
    },
    text: {
      textOne: 'Formada pela Estácio de Sá, com especialização em Terapia Cognitivo-Comportamental pela PUC/RS, e capacitação em Psico-Oncologia e Neurociência, oferece um suporte psicológico atualizado e focado no bem-estar emocional.'
    },
    linkPage: 'https://landing-page-dra-jessica-braga.vercel.app/',
    typeServices: 'Landing'
  },

  {
    id: 8,
    imgDialog: ImageDialogGaspar,
    img: ImageGaspar,
    name: 'Gaspar Transportes',
    skils: {
      React: 'React Js',
      TypeScript: 'TypeScript',
      StyledComponents: 'Styled-components',
    },
    text: {
      textOne: 'Projeto desenvolvido em Parceria coma a Cliard Tech'
    },
    linkPage: 'https://gaspartransportes.com.br/',
    typeServices: 'Landing'
  },
]