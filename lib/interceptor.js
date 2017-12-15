module.exports = {
    defaultResolve (data) {
      return Promise.resolve(data.data)
    },
    defaultReject (error) {
      return Promise.reject({
        message: error.message,
        code: error.code,
        data: error.response.data
      })
    }
  }