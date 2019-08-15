/**
 * Módulo FILA
 * @param {object} httpClient 
 */
module.exports = function Fila(httpClient) {

    const client = httpClient

    const ROTA_FILA = '/fila'

  /**
   * Lista as filas da sua Conta
   * @return {Promise}
   */
  this.listar = function () {
    return client.get(`${ROTA_FILA}`)
  }

   /**
   * Cria uma nova fila
   * @param {string} nome
   * @param {string} estrategia_ring
   * @param {object} timeout_ring
   * @return {Promise}
   */
  this.enviar = function (nome, estrategia_ring, timeout_ring=null) {

    const data = {
        nome,
        estrategia_ring,
        timeout_ring
    }

    return client.post(ROTA_FILA, Object.assign(data, opcoes))
  }

   /**
   * Adiciona um ramal na fila
   * @param {string} id
   * @param {string} ramal_id
   * @return {Promise}
   */
  this.addRamal = function (id, ramal_id) {

    const data = {
        ramal_id
    }

    return client.post(ROTA_FILA, Object.assign(data, opcoes))
  }

   /**
   * Busca uma fila pelo seu id
   * @param {int} id
   * @return {Promise}
   */
  this.buscar = function (id) {
    return client.get(`${ROTA_FILA}/${id}`)
  }

   /**
   * Busca um ramal da fila pelo seu id
   * @param {int} id
   * @return {Promise}
   */
  this.buscarRamalFila = function (id, ramal_id) {
    return client.get(`${ROTA_FILA}/${id}/${ramal_id}`)
  }

   /**
   * Atualiza uma fila
   * @param {int} id
   * @param {object} data
   * @return {Promise}
   */
  this.atualizarFila = function (id, data) {
    return client.put(`${ROTA_FILA}/${id}`, data)
  }

    /**
   * Remove um Ramal da fila
   * @param {int} id
   * @return {Promise}
   */
  this.excluirRamalFila = function (id, ramal_id) {
    return client.delete(`${ROTA_RAMAL}/${id}/${ramal_id}`)
  }

}