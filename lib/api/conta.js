/**
 * Módulo Conta
 * @param {object} httpClient
 */
module.exports = function Conta(httpClient) {

  const client = httpClient

  const ROTA_CONTA = '/conta'

  /**
   * Cria uma nova conta na plataforma
   * @param {object} data
   * @return {Promise}
   */
  this.criar = function (data) {
    return client.post(ROTA_CONTA, data)
  }

  /**
   * Leitura dos dados de uma conta criada
   * @param {int} id
   * @return {Promise}
   */
  this.buscar = function (id) {
    return client.get(`${ROTA_CONTA}/${id}`)
  }

  /**
   * Remove uma conta
   * @param {int} id
   * @return {Promise}
   */
  this.excluir = function (id) {
    return client.delete(`${ROTA_CONTA}/${id}`)
  }

  /**
   * Atualiza os dados de uma conta criada
   * @param {int} $id
   * @param {object} data
   * @return {Promise}
   */
  this.atualizar = function (id, data) {
    return client.put(`${ROTA_CONTA}/${id}`, data)
  }

  /**
   * Lista contas criadas por mim
   * @return {Promise}
   */
  this.relatorio = function () {
    return client.get(`${ROTA_CONTA}/relatorio`)
  }
}
