import axios from 'axios'

const debtApi = axios.create({ baseURL: 'http://localhost:3333/api/v1/debts' })

const bankerApi = axios.create({ baseURL: 'http://localhost:3333/api/v1/bankers' })

const clientApi = axios.create({ baseURL: 'http://localhost:3333/api/v1/clients' })

const userApi = axios.create({ baseURL: 'http://localhost:3333/api/v1/users' })

const authApi = axios.create({ baseURL: 'http://localhost:3333/api/v1/auth' })

export { debtApi, bankerApi, clientApi, userApi, authApi }
