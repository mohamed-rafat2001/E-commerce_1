export interface Blog {
  _id?: any
  title?: string,
  descrption?: string,
  category?: string,
  likes?: [any],
  unLikes?: [any],
  likesNumber?: number,
  unLikesNumber?: number,
  image?: any,
  author?: string,
  numViews?: number
}
