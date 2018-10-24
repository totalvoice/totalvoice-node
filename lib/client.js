const axios = require('axios')
const defaultResolve = require('./interceptor').defaultResolve
const defaultReject = require('./interceptor').defaultReject

/**
 * Módulo Client
 */
module.exports = function Client(baseURL, options, resolve = defaultResolve, reject = defaultReject) {
  const URL = baseURL || "https://api2.totalvoice.com.br";
  let params = Object.assign({
      baseURL: URL,
      timeout: 5000
  }, options);
  const instance = axios.create(params);
  instance.interceptors.response.use(resolve, reject);
  return instance
}