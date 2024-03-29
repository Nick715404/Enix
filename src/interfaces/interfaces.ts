export interface INavLink {
  label: string
  href: string
}

export interface IProduct {
  id: string
  title: string
  body: string
  rating: number
  link: string
  thumbnailPath: string
  type: string
  images?: null | string[]
}

export interface IFilterTags {
  id: number
  value: string
  label: string
}