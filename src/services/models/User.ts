export type User = {
  id: string
  email: string
  roles: any[]
}

export type Role = {
  id: number
  value: RoleValue
}

export enum RoleValue {
  ADMIN = 'ADMIN',
  CONSULT = 'CONSULT',
}
