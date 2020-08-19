// Action Types
export enum DebtTypes {
  GET_DEBT = 'GET_DEBT',
  GET_DEBTS = 'GET_DEBTS',
}

interface GetDebt {
  type: typeof DebtTypes.GET_DEBT
  payload: DebtModel
}

interface GetDebts {
  type: typeof DebtTypes.GET_DEBTS
  payload: DebtModel[]
}

export type DebtActionsTypes = GetDebt | GetDebts

// Data Types
export interface DebtModel {
  reason: string
  value: number
  clientId: string
  bankerId: string
}

// State Types
export interface DebtState {
  readonly debt: DebtModel
  readonly debts: DebtModel[]
}
