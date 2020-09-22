import axios from 'axios'

const debtApi = axios.create({ baseURL: `${process.env.BASE_URL}/debts` })

const bankerApi = axios.create({ baseURL: `${process.env.BASE_URL}/bankers` })

const clientApi = axios.create({ baseURL: `${process.env.BASE_URL}/clients` })

const userApi = axios.create({ baseURL: `${process.env.BASE_URL}/users` })

const authApi = axios.create({ baseURL: `${process.env.BASE_URL}/users` })

export { debtApi, bankerApi, clientApi, userApi, authApi }
