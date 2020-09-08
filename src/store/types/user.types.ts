// Actions Types


// Data Types
export interface UserModel{
  _id?: string
  firstName: string
  lastName?: string
  email: string
  password: string
  gender: string
  birth: string
  address: UserAddress
}

interface UserAddress {
  street: string
  number?: number
  complement?: string
  district: string
  city: string
  state: string
  country: string
}


// State Types
export interface UserState {
  readonly user: UserModel
  readonly users: UserModel[]
}