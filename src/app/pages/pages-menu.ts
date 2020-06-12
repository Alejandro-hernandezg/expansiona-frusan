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
  }
];
