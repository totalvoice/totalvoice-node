/**
 * Módulo Conta
 * @param {object} httpClient
 */
module.exports = function Conta(httpClient) {

  const client = httpClient

  const ROTA_CONTA = '/conta'
  const ROTA_WEBHOOK_DEFAULT = '/webhook-default'

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

  /**
   * Credita valor de bônus em uma conta filha
   * @param {int} id
   * @param {object} data
   * @return {Promise}
   */
  this.recargaBonus = function (id, data) {
    return client.post(`${ROTA_CONTA}/${id}/bonus`, data)
  }

  /**
   * Retorna a lista de webhooks default configurados para esta conta
   * @return {Promise}
   */
  this.webhooksDefault = function () {
    return client.get(`${ROTA_CONTA}${ROTA_WEBHOOK_DEFAULT}`)
  }

  /**
   * Apaga um webhook
   * @param {string} nome
   * @return {Promise}
   */
  this.excluirWebhookDefault = function (nome) {
    return client.delete(`${ROTA_CONTA}/${ROTA_WEBHOOK_DEFAULT}/${nome}`)
  }

  /**
   * Cadastra ou atualiza um webhook
   * @param {string} nome
   * @param {string} url
   * @return {Promise}
   */
  this.salvaWebhookDefault = function (nome, url) {
    return client.put(`${ROTA_CONTA}/${ROTA_WEBHOOK_DEFAULT}/${nome}`, {
      url
    })
  }
}
