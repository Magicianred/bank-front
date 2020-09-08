import axios from 'axios'

const debtApi = axios.create({ baseURL: 'http://localhost:3333/api/v1/debts' })

const bankerApi = axios.create({ baseURL: 'http://localhost:3333/api/v1/bankers'})

export { debtApi, bankerApi }
