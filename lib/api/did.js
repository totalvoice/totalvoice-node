/**
 * Módulo DID
 * @param {object} httpClient
 */
module.exports = function Did(httpClient) {

  const client = httpClient

  const ROTA_DID = '/did'

  /**
   * Lista todos os dids pertencentes
   * @return {Promise}
   */
  this.listar = function () {
    return client.get(ROTA_DID)
  }

  /**
   * Remove um did
   * @param  {int} id
   * @return {Promise}
   */
  this.excluir = function (id) {
    return client.delete(`${ROTA_DID}/${id}`)
  }

  /**
   * Atualiza um did
   * @param {int} id
   * @param {string} ramal_id
   * @param {string} ura_id
   * @return {Promise}
   */
  this.atualizar = function (id, ramal_id, ura_id) {
    return client.put(`${ROTA_DID}/${id}`, {
      ramal_id,
      ura_id
    })
  }

  /**
   * Lista todos os dids disponiveis
   * @return {Promise}
   */
  this.listaEstoque = function () {
    return client.get(`${ROTA_DID}/estoque`)
  }

  /**
   * Adquire um novo did para sua conta
   * @param {int} id
   * @return {Promise}
   */
  this.adquirir = function (id) {
    return client.post(`${ROTA_DID}/estoque/${id}`, {})
  }

  /**
   * Busca uma chamada recebida pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  this.buscaChamadaRecebida = function (id) {
    return client.post(`${ROTA_DID}/estoque/${id}`, {})
  }

  /**
   * Relatório de chamadas DID
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  this.relatorio = function (data_inicio, data_fim) {
    return client.get(`${ROTA_DID}/relatorio`, {
      params: {
        data_inicio,
        data_fim
      }
    })
  }
};
