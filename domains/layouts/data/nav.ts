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
        text: 'Web Development',
        link: '/portfolios/web-development',
      },
      {
        text: 'Talks',
        link: '/portfolios/talks',
      },
      {
        text: 'Standup Comedy',
        link: '/portfolios/standup-comedy',
      },
    ],
  },
  {
    text: 'Projects',
    link: '/projects',
  },
];
