/**
 * Módulo Status
 * @param {object} httpClient
 */
module.exports = function Status(httpClient) {

  const client = httpClient

  const ROTA_STATUS = '/status'

  /**
   * Verifica o status da API
   * @return {Promise}
   */
  this.verificar = function () {
    return client.get(ROTA_STATUS)
  }

  /**
   * Consulta o status de um serviço
   * @param {string} nome
   * @return {Promise}
   */
  this.consultar = function (nome) {
    return client.get(`${ROTA_STATUS}/${nome}`)
  }
}
