import axios from 'axios'

const setAuthorizationToken = (token: string | boolean) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common.Authorization
  }
}

export { setAuthorizationToken }
