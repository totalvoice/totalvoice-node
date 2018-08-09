/**
 * Módulo Composto
 * @param {object} httpClient
 */
module.exports = function Composto(httpClient) {

  const client = httpClient

  const ROTA_COMPOSTO = '/composto'

  /**
   * Envia um composto para um número destino
   * @param {string} numero_destino
   * @param {array} dados
   * @param {string} bina
   * @param {string} tags
   * @param {boolean} gravar_audio
   * @return {Promise}
   */
  this.enviar = function (numero_destino, dados, bina, tags, gravar_audio) {
    return client.post(ROTA_COMPOSTO, {
      numero_destino,
      dados,
      bina,
      tags,
      gravar_audio
    })
  }

  /**
   * Busca um composto pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  this.buscar = function (id) {
    return client.get(`${ROTA_COMPOSTO}/${id}`)
  }

  /**
   * Relatório de mensagens de Composto
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  this.relatorio = function (data_inicio, data_fim) {
    return client.get(`${ROTA_COMPOSTO}/relatorio`, {
      params: {
        data_inicio,
        data_fim
      }
    })
  }
}
