export type Blog = {
  id: string
  title: string
  category: Category[]
  content: string
  createdAt: string
  eyecatch: any
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

export type Category = {
  createdAt: string
  id: string
  name: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}

export type Eyecatch = {
  url: string
  width: number
  height: number
}
