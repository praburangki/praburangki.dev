export interface NavItem {
  text: string;
  link?: string;
  items?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Articles',
    link: '/articles',
  },
  {
    text: 'Portfolios',
    items: [
      {
        text: 'Websites',
        link: '/portfolios/websites',
      },
      {
        text: 'Talks',
        link: '/portfolios/talks',
      },
      {
        text: 'Standup Comedy',
        link: '/portfolios/standups',
      },
    ],
  },
  {
    text: 'Playground',
    link: '/playgrounds',
  },
];
