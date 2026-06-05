export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: "Jathin Sreenivas",
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Open Source',
    path: '/opensource',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Writing',
    path: '/writing',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
