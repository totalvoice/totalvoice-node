const axios = require('axios')
const defaultResolve = require('./interceptor').defaultResolve
const defaultReject = require('./interceptor').defaultReject

/**
 * Módulo Client
 */
module.exports = function Client(token, baseURL, resolve = defaultResolve, reject = defaultReject) {
  const URL = baseURL || "https://api2.totalvoice.com.br";
  const instance = axios.create({
    baseURL: URL,
    timeout: 5000,
    headers: {
      'Access-Token': token,
      'Content-Type': 'application/json'
    }
  })
  instance.interceptors.response.use(resolve, reject)
  return instance
}