export interface Product {
  _id?: any
  adminId?: any,
  title?: string,
  descrption?: string,
  price?: number,
  quantity?: number,
  images?: [any],
  color?: string,
  ratings?: any,
  totalRatings?: number,
  views?: number,
  Brand?: string,
  category?: string
  createdAt?: Date,
  updatedAt?: Date
}
