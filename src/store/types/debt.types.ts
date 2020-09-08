// Action Types
export enum DebtTypes {
  GET_DEBT = 'GET_DEBT',
  GET_DEBTS = 'GET_DEBTS',
  CREATE_DEBT = 'CREATE_DEBT',
  UPDATE_DEBT = 'UPDATE_DEBT',
  DELETE_DEBT = 'DELETE_DEBT',
}

interface GetDebt {
  type: typeof DebtTypes.GET_DEBT
  payload: DebtModel
}

interface GetDebts {
  type: typeof DebtTypes.GET_DEBTS
  payload: DebtModel[]
}

interface CreateDebt {
  type: typeof DebtTypes.CREATE_DEBT,
  payload: DebtModel
}

interface UpdateDebt {
  type: typeof DebtTypes.UPDATE_DEBT,
  payload: DebtModel
}

interface DeleteDebt {
  type: typeof DebtTypes.DELETE_DEBT,
  payload: {}
}

export type DebtActionsTypes = GetDebt | GetDebts | CreateDebt | UpdateDebt | DeleteDebt

// Data Types
export interface DebtModel {
  _id?: string
  reason: string
  value: number
  clientId: string
  bankerId: string
  paid?: boolean
}

// State Types
export interface DebtState {
  readonly debt: DebtModel
  readonly debts: DebtModel[]
}
