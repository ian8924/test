export interface User {
  name: string
  email: string
}

export type RoleLevel = 'ADMIN' | 'EDITOR' | 'USER' | 'CLIENT'

export type AccountStatus = 'ON' | 'OFF'

export interface Account {
  name: string
  email: string
  roleLevel: RoleLevel
  status: AccountStatus
}
