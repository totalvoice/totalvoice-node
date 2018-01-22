/**
 * Módulo Conferencia
 * @param {object} httpClient
 */
module.exports = function Conferencia(httpClient) {

  const client = httpClient

  const ROTA_CONFERENCIA = '/conferencia'

  /**
   * Cria uma conferência
   * @return {Promise}
   */
  this.criar = function () {
    return client.post(ROTA_CONFERENCIA, {})
  }

  /**
   * Busca uma conferência pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  this.buscar = function (id) {
    return client.get(`${ROTA_CONFERENCIA}/${id}`)
  }

  /**
   * Adiciona na conferência
   * @param {int} id
   * @param {string} numero
   * @param {string} bina
   * @param {bool} gravar_audio
   * @return {Promise}
   */
  this.addNumero = function (id, numero, bina, gravar_audio) {
    return client.post(`${ROTA_CONFERENCIA}/${id}`, {
      numero,
      bina,
      gravar_audio
    })
  }

  /**
   * Remove uma conferência ativa
   * @param  {int} id
   * @return {Promise}
   */
  this.excluir = function (id) {
    return client.delete(`${ROTA_CONFERENCIA}/${id}`)
  }
}
