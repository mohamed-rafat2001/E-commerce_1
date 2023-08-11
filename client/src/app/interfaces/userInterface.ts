export interface User {
  _id?: any
  firstName?: string,
  lastName?: string,
  email?: string,
  address?: string,
  password?: string,
  passwordResetToken?: string,
  role?: string,
  Block?: boolean,
  cart?: any,
  wishList?: [any]
}
