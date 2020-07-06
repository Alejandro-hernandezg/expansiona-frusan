import { NbMenuItem } from '@nebular/theme';


export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages',
  },
  {
    title: 'Control de Gestión',
    group: true,
  },
  {
    title: 'Aplicaciones Fitosanitarias',
    icon: 'file-text-outline',
    expanded: false,
    children: [
      {
        title: 'Panel de Planificación',
        icon: 'clipboard-outline',
        link: '/pages',
      },
      {
        title: 'Orden de Aplicación',
        icon: 'layers-outline',
        link: '/pages',
      },
      {
        title: 'Orden de Almacen',
        icon: 'cube-outline',
        link: '/pages',
      },
      {
        title: 'Evaluación de la Aplicación',
        icon: 'file-text-outline',
        link: '/pages',
      },
    ]
  },
  {
    title: 'Mano de obra',
    icon: 'people-outline',
    link: '/pages',
  },
  {
    title: 'Riego',
    icon: 'droplet-outline',
    link: '/pages',
  },
  {
    title: 'Fertilización',
    icon: 'book-outline',
    link: '/pages',
  },
  {
    title: 'Evaluaciones de Campo',
    icon: 'car-outline',
    link: '/pages',
  },
  {
    title: 'Ejemplo',
    icon: 'arrow-circle-right-outline',
    link: '/pages/example',
  },
  {
    title: 'Mantenedores',
    icon: 'layers-outline',
    expanded: false,
    children: [
      {
        title: 'Parametros',
        icon: 'arrow-circle-right-outline',
        link: '/pages/maintainers/parameters',
      },
      {
        title: 'Campo',
        icon: 'arrow-circle-right-outline',
        link: '/pages/mantcampo',
      },
      {
        title: 'Producto',
        icon: 'arrow-circle-right-outline',
        link: '/pages/mantproducto',
      },
      {
        title: 'Recurso',
        icon: 'arrow-circle-right-outline',
        link: '/pages/mantrecurso',
      },
      {
        title: 'Sistema',
        icon: 'arrow-circle-right-outline',
        link: '/pages/mantsistema',
      },
    ]
  },
  {
    title: 'Mantenedores 2',
    icon: 'arrow-circle-right-outline',
    link: '/pages/mantenedores',
  },
];
