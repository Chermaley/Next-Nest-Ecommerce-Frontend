export type Product = {
  id: number
  name: string
  description: string
  price: number
  image1: string
  image2: string
  image3: string
  comments: Comment[]
  rating: number
}

export type Comment = {
  id: number
  author: string
  text: string
  createdAt: string
  rating: number
}
