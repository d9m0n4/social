import { LinkItem } from './types';

export const additionallyMenuList: LinkItem[] = [
  {
    label: 'Клубы',
    path: '/clubs',
    children: [
      { label: 'Подросток', path: '/clubs/podrostok' },
      { label: 'Содружество', path: '/clubs/sodruzhestvo' },
      { label: 'Мастерок', path: '/clubs/masterok' },
      { label: 'Мозайка', path: '/clubs/mozaika' },
      { label: 'Камелия', path: '/clubs/kamelia' },
      { label: 'Серебряные росы', path: '/clubs/serebryanye-rosy' },
      { label: 'Источник', path: '/clubs/istochnik' },
      { label: 'Вдохновение', path: '/clubs/vdokhnovenie' },
      { label: 'Пилатес', path: '/clubs/pilates' },
      { label: 'Рукодельница', path: '/clubs/rukodelnitsa' },
      { label: 'Кружок "Ровесник"', path: '/clubs/rovesnik' },
      { label: 'Социальный проект "Путешествие по родному краю"', path: '/clubs/travel' },
    ],
  },
  {
    label: 'Сведения об образовательной деятельности',
    path: '/education-info',
    children: [
      { label: 'Основные сведения', path: '/education-info/main' },
      {
        label: 'Структура и органы управления образовательной организацией',
        path: '/education-info/structure',
      },
      { label: 'Документы', path: '/education-info/documents' },
      { label: 'Образование', path: '/education-info/education' },
      {
        label: 'Руководство. Педагогический (научно-педагогический) состав',
        path: '/education-info/teaching-staff',
      },
      {
        label: 'Материально-техническое обеспечение и оснащенность образовательного процесса',
        path: '/education-info/material-support',
      },
      {
        label: 'Финансово-хозяйственная деятельность',
        path: '/education-info/financial-activities',
      },
    ],
  },
  {
    label: 'Инновационная деятельность',
    path: '/innovation',
    children: [],
  },
  {
    label: 'Служба ранней помощи',
    path: '/early-help',
    children: [
      {
        label: 'Документы, регламентирующие деятельность службы ранней помощи',
        path: '/early-help/documents',
      },
      { label: 'Информационные материалы', path: '/early-help/information-materials' },
    ],
  },
  {
    label: 'Противодействие коррупции',
    path: '/anti-corruption',
    children: [
      {
        label: 'Нормативные правовые акты в сфере противодействия коррупции',
        path: '/anti-corruption/regulatory-acts',
      },
      { label: 'Методические материалы', path: '/anti-corruption/methodical-materials' },
      {
        label: 'Противодействие коррупции в КОГАУСО Межрайонный КЦСОН в Яранском районе',
        path: '/anti-corruption/local',
      },
    ],
  },
  {
    label: 'Памятки',
    path: '/pamphlets',
    children: [
      { label: 'Пожарная безопасность', path: '/pamphlets/fire-safety' },
      { label: 'Терроризм', path: '/pamphlets/terrorism' },
      { label: 'ГО и ЧС', path: '/pamphlets/emergency-situations' },
      { label: 'Безопасность на воде', path: '/pamphlets/water-safety' },
    ],
  },
  {
    label: 'Оценка условий труда',
    path: '/work-evaluation',
    children: [
      {
        label: 'Сводная ведомость результатов проведения специальной оценки труда',
        path: '/work-evaluation/summary',
      },
      {
        label: 'Перечень рекомендуемых мероприятий по улучшению условий труда',
        path: '/work-evaluation/recommendations',
      },
    ],
  },
];
