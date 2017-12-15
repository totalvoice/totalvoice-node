/**
 * Módulo Perfil
 * @param {object} httpClient
 */
module.exports = function Perfil(httpClient) {

  const client = httpClient

  const ROTA_CONTA = '/conta'
  const ROTA_WEBHOOK = '/webhook'
  const ROTA_SALDO = '/saldo'

  /**
   * Consulta saldo atual
   * @return {Promise}
   */
  this.consultaSaldo = function () {
    return client.get(ROTA_SALDO)
  }

  /**
   * Consulta os dados da minha Conta
   * @return {Promise}
   */
  this.minhaConta = function () {
    return client.get(ROTA_CONTA)
  }

  /**
   * Atualiza os dados da minha conta
   * @param {object} $data
   * @return {Promise}
   */
  this.atualizaDadosConta = function (data) {
    return client.put(ROTA_CONTA, data)
  }

  /**
   * Gera um relatório com as recargas efetuadas
   * @return {Promise}
   */
  this.relatorioRecarga = function () {
    return client.get(`${ROTA_CONTA}/recargas`)
  }

  /**
   * Gera uma URL para recarga de créditos
   * @param {string} url_retorno
   * @return {Promise}
   */
  this.urlRecarga = function (url_retorno) {
    return client.get(`${ROTA_CONTA}/urlrecarga`, {
      params: {
        url_retorno
      }
    })
  }

  /**
   * Retorna a lista de webhooks configurados para esta conta
   * @return {Promise}
   */
  this.webhooks = function () {
    return client.get(ROTA_WEBHOOK)
  }

  /**
   * Apaga um webhook
   * @param {string} nome
   * @return {Promise}
   */
  this.excluirWebhook = function (nome) {
    return client.delete(`${ROTA_CONTA}/${nome}`)
  }

  /**
   * Cadastra ou atualiza um webhook
   * @param {string} nome
   * @param {string} url
   * @return {Promise}
   */
  this.salvaWebhook = function (nome, url) {
    return client.put(`${ROTA_CONTA}/${nome}`, {
      url
    })
  }
}
