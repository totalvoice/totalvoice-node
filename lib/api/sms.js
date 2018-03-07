/**
 * Módulo SMS
 * @param {object} httpClient 
 */
module.exports = function Sms(httpClient) {

  const client = httpClient

  const ROTA_SMS = '/sms'

  /**
   * Envia um sms para um número destino
   * @param {string} numero_destino
   * @param {string} mensagem
   * @param {bool} resposta_usuario
   * @param {bool} multi_sms
   * @param {string} data_criacao
   * @return {Promise}
   */
  this.enviar = function (numero_destino, mensagem, resposta_usuario, multi_sms, data_criacao) {
    return client.post(ROTA_SMS, {
      numero_destino,
      mensagem,
      resposta_usuario,
      multi_sms,
      data_criacao
    })
  }

  /**
   * Busca um sms pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  this.buscar = function (id) {
    return client.get(`${ROTA_SMS}/${id}`)
  }

  /**
   * Relatório de mensagens de Sms
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  this.relatorio = function (data_inicio, data_fim) {
    return client.get(`${ROTA_SMS}/relatorio`, {
      params: {
        data_inicio,
        data_fim
      }
    })
  }
}
