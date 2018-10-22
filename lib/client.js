const axios = require('axios')
const defaultResolve = require('./interceptor').defaultResolve
const defaultReject = require('./interceptor').defaultReject

/**
 * Módulo Client
 */
module.exports = function Client(baseURL, options, resolve = defaultResolve, reject = defaultReject) {
  const URL = baseURL || "https://api2.totalvoice.com.br";
  const instance = axios.create({
    baseURL: URL,
    timeout: 5000,
    ...options
  });
  instance.interceptors.response.use(resolve, reject);
  return instance
}