import type { ImageSourcePropType } from 'react-native';

export const archiveCategories = [
  'Cartazes históricos',
  'Panfletos',
  'Fotografias documentais',
] as const;

export type ArchiveCategory = (typeof archiveCategories)[number];

export type ArchiveItem = {
  id: string;
  category: ArchiveCategory;
  title: string;
  period: string;
  description: string;
  historicalContext: string;
  imageSource: ImageSourcePropType;
  imageAlt: string;
  imageNotice: string;
  sourceName: string;
  sourceUrl: string;
  rights: string;
};

const localImages = {
  injurySupport: require('../../assets/images/apoio-apos-lesao.png') as ImageSourcePropType,
  physiotherapyCare: require('../../assets/images/fisioterapia-comunitaria.png') as ImageSourcePropType,
  collectiveRecovery: require('../../assets/images/recuperacao-coletiva.png') as ImageSourcePropType,
  reportsAndDocumentation: require('../../assets/images/laudos-e-documentacao.png') as ImageSourcePropType,
};

const localImageNotice =
  'Ilustração temática local criada para esta atividade; não é o documento histórico original.';

export const archiveItems: ArchiveItem[] = [
  {
    id: 'chicago-womens-labor-history',
    category: 'Cartazes históricos',
    title: 'Chicago women’s labor history',
    period: '1965',
    description:
      'Cartaz da coleção Yanker da Library of Congress sobre a história do trabalho das mulheres em Chicago.',
    historicalContext:
      'O registro é catalogado pela Library of Congress com assuntos ligados a sindicatos, participação política e mulheres. Ele integra um acervo de cartazes, não uma reconstrução contemporânea.',
    imageSource: localImages.injurySupport,
    imageAlt: 'Ilustração de apoio a uma pessoa com o braço enfaixado durante uma mobilização.',
    imageNotice: localImageNotice,
    sourceName: 'Library of Congress — Yanker Poster Collection',
    sourceUrl: 'https://www.loc.gov/item/2016651746/',
    rights: 'Library of Congress: sem restrições conhecidas de publicação.',
  },
  {
    id: 'proletarians-unite',
    category: 'Cartazes históricos',
    title: 'Proletarians have nothing to lose but their chains',
    period: '1965',
    description:
      'Cartaz associado ao Socialist Labor Party, preservado na Yanker Poster Collection.',
    historicalContext:
      'A peça usa a frase “workingmen of all countries, unite!” e é catalogada pela Library of Congress com os temas socialismo e classe trabalhadora.',
    imageSource: localImages.collectiveRecovery,
    imageAlt: 'Ilustração de recuperação coletiva em uma oficina comunitária de cartazes.',
    imageNotice: localImageNotice,
    sourceName: 'Library of Congress — Yanker Poster Collection',
    sourceUrl: 'https://www.loc.gov/item/2016651706/',
    rights: 'Library of Congress: sem restrições conhecidas de publicação.',
  },
  {
    id: 'woman-suffrage-program',
    category: 'Panfletos',
    title: 'Official program — Woman suffrage procession',
    period: '3 de março de 1913',
    description:
      'Programa oficial da procissão pelo sufrágio feminino realizada em Washington, D.C.',
    historicalContext:
      'O documento registra a organização de uma manifestação pública pelo direito de voto das mulheres, realizada na véspera da posse presidencial de 1913.',
    imageSource: localImages.reportsAndDocumentation,
    imageAlt: 'Ilustração de laudos, fotografias e documentos organizados em uma mesa de arquivo.',
    imageNotice: localImageNotice,
    sourceName: 'Library of Congress — Prints and Photographs Division',
    sourceUrl: 'https://www.loc.gov/item/94507639/',
    rights: 'Library of Congress: sem restrições conhecidas de publicação.',
  },
  {
    id: 'march-on-washington-plans',
    category: 'Panfletos',
    title: 'Final plans for the March on Washington for Jobs and Freedom',
    period: '1963',
    description:
      'Folheto de planejamento final para a Marcha sobre Washington por Trabalho e Liberdade.',
    historicalContext:
      'A Library of Congress cataloga o documento como um folheto de 11 páginas publicado em Nova York pelo March on Washington, em 1963.',
    imageSource: localImages.reportsAndDocumentation,
    imageAlt: 'Ilustração de laudos, fotografias e documentos organizados em uma mesa de arquivo.',
    imageNotice: localImageNotice,
    sourceName: 'Library of Congress — Civil Rights History Project',
    sourceUrl: 'https://www.loc.gov/item/2014645600/',
    rights: 'Library of Congress: sem restrições conhecidas de publicação.',
  },
  {
    id: 'suffrage-procession-photo',
    category: 'Fotografias documentais',
    title: 'Woman suffrage procession, Washington, D.C.',
    period: '3 de março de 1913',
    description:
      'Fotografia da procissão pelo sufrágio feminino em Washington, D.C.',
    historicalContext:
      'A imagem registra uma mobilização pública pela extensão do direito de voto às mulheres nos Estados Unidos.',
    imageSource: localImages.physiotherapyCare,
    imageAlt: 'Ilustração de fisioterapia e cuidado comunitário após uma mobilização.',
    imageNotice: localImageNotice,
    sourceName: 'Library of Congress — Prints and Photographs Division',
    sourceUrl: 'https://www.loc.gov/item/2013648100/',
    rights: 'Library of Congress: sem restrições conhecidas de publicação.',
  },
  {
    id: 'civil-rights-march-photo',
    category: 'Fotografias documentais',
    title: 'Civil rights march on Washington, D.C.',
    period: '28 de agosto de 1963',
    description:
      'Fotografia da Marcha sobre Washington por Trabalho e Liberdade, em 1963.',
    historicalContext:
      'A fotografia faz parte de um registro documental da mobilização pelos direitos civis em Washington, D.C.; o título e a data seguem a catalogação da Library of Congress.',
    imageSource: localImages.collectiveRecovery,
    imageAlt: 'Ilustração de recuperação coletiva em uma oficina comunitária de cartazes.',
    imageNotice: localImageNotice,
    sourceName: 'Library of Congress — Prints and Photographs Division',
    sourceUrl: 'https://www.loc.gov/item/2013648832/',
    rights: 'Library of Congress: sem restrições conhecidas de publicação.',
  },
];

export function itemsForCategory(category?: string) {
  return category ? archiveItems.filter((item) => item.category === category) : archiveItems;
}

export function findArchiveItem(id: string) {
  return archiveItems.find((item) => item.id === id);
}
