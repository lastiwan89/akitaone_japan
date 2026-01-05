type Links = {
  id: number
  title: string
  href: string
}

type Person = {
  id: number
  src: string
  occupation: string
}

export const NAVLINKS: Links[] = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },

  {
    id: 2,
    title: 'Destination',
    href: '/destination',
  },

  {
    id: 3,
    title: 'Work',
    href: '/work',
  },

  {
    id: 4,
    title: 'Blog',
    href: '/blog',
  },

  {
    id: 5,
    title: 'About Us',
    href: '/about',
  },

  {
    id: 6,
    title: 'Contact',
    href: '/contact',
  },
]

export const Director: Person[] = [
  {
    id: 1,
    src: '/DANIEL-CEO-AKITAONEJAPAN.jpg',
    occupation: 'CEO',
  },
  {
    id: 2,
    src: '/TIKA-DIRECTOR-FINANCIAL-AKITAONEJAPAN.jpg',
    occupation: 'DIRECTOR FINANCIAL',
  },
  {
    id: 3,
    src: '/NAKAJIMA-HATSUO-DIRECTOR-OPERATIONAL-AKITAONEJAPAN.jpg',
    occupation: 'DIRECTOR OPERATIONAL',
  },
]
