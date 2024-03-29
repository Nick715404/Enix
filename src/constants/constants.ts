import { INavLink } from "../interfaces/interfaces"

export const navLinks: INavLink[] = [
  {
    label: 'Каталог',
    href: '/catalog',
  },
  {
    label: 'О нас',
    href: '/about',
  },
  {
    label: 'Контакты',
    href: '/contacts',
  },
]

export const filterTags = [
  {
    id: 0,
    value: 'all',
    label: 'Все',
  },
  {
    id: 1,
    value: 'tops',
    label: 'ТОпы',
  },
  {
    id: 2,
    value: 'leggins',
    label: 'Леггинсы',
  },
  {
    id: 3,
    value: 'longslives',
    label: 'лонгсливы',
  },
  {
    id: 4,
    value: 'costumes',
    label: 'Костюмы',
  },
  {
    id: 5,
    value: 'termosuite',
    label: 'Термобелье',
  },
]