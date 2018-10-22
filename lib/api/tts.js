/**
 * Módulo TTS
 * @param {object} httpClient 
 */
module.exports = function Tts(httpClient) {

  const client = httpClient

  const ROTA_TTS = '/tts'

  /**
   * Envia um TTS (text-to-speach) para um número destino
   * @param {string} numero_destino
   * @param {string} mensagem
   * @param {object} opcoes
   * @return {Promise}
   */
  this.enviar = function (numero_destino, mensagem, opcoes) {

    const data = {
      numero_destino,
      mensagem
    }

    return client.post(ROTA_TTS, Object.assign(data, opcoes))
  }

  /**
   * Busca um tts pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  this.buscar = function (id) {
    return client.get(`${ROTA_TTS}/${id}`)
  }

  /**
   * Relatório de mensagens de Tts
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  this.relatorio = function (data_inicio, data_fim) {
    return client.get(`${ROTA_TTS}/relatorio`, {
      params: {
        data_inicio,
        data_fim
      }
    })
  } 
}