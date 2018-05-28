/**
 * Módulo Audio
 * @param {object} httpClient
 */
module.exports = function Audio(httpClient) {

  const client = httpClient

  const ROTA_AUDIO = '/audio'

  /**
   * Envia um audio para um número destino
   * @param {string} numero_destino
   * @param {string} url_audio
   * @param {bool} resposta_usuario
   * @param {string} bina
   * @param {bool} gravar_audio
   * @return {Promise}
   */
  this.enviar = function (numero_destino, url_audio, resposta_usuario, bina, gravar_audio) {
    return client.post(ROTA_AUDIO, {
      numero_destino,
      url_audio,
      resposta_usuario,
      bina,
      gravar_audio
    })
  }

  /**
   * Busca um audio pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  this.buscar = function (id) {
    return client.get(`${ROTA_AUDIO}/${id}`)
  }

  /**
   * Relatório de mensagens de Audios
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  this.relatorio = function (data_inicio, data_fim) {
    return client.get(`${ROTA_AUDIO}/relatorio`, {
      params: {
        data_inicio,
        data_fim
      }
    })
  }
}
