/**
 * Módulo Central
 * @param {object} httpClient
 */
module.exports = function Central(httpClient) {

  const client = httpClient  

  const ROTA_RAMAL = '/ramal'
  const ROTA_FILA = '/fila'
  const ROTA_URA = '/ura'
  const ROTA_WEBPHONE = '/webphone'

  /**
   * Cria um novo ramal
   * @param {object} data
   * @return {Promise}
   */
  this.criarRamal = function (data) {
    return client.post(ROTA_RAMAL, data)
  }

  /**
   * Remove um Ramal
   * @param {int} id
   * @return {Promise}
   */
  this.excluirRamal = function (id) {
    return client.delete(`${ROTA_RAMAL}/${id}`)
  }

  /**
   * Busca uma Ramal pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  this.buscaRamal = function (id) {
    return client.get(`${ROTA_RAMAL}/${id}`)
  }

  /**
   * Atualiza um ramal
   * @param {int} id
   * @param {object} data
   * @return {Promise}
   */
  this.atualizarRamal = function (id, data) {
    return client.put(`${ROTA_RAMAL}/${id}`, data)
  }

  /**
   * Relatório de mensagens de Ramal
   * @return {Promise}
   */
  this.relatorio = function () {
    return client.get(`${ROTA_RAMAL}/relatorio`)
  }

  /**
   * Listar pausas do ramal
   * @param {int} id
   * @return {Promise}
   */
  this.relatorioPausas = function (id) {
    return client.get(`${ROTA_RAMAL}/${id}/pausas`)
  }

  /**
   * Listar pausas do ramal
   * @param {int} ramal
   * @return {Promise}
   */
  this.atualizarRamalFila = function (id, data) {
    return client.put(`${ROTA_RAMAL}/${id}${ROTA_FILA}`, data)
  } 
 
  /**
   * Requisita a URL do webphone de um ramal
   * @param {array} data
   * @return {Promise}
   */
  this.webphone = function (data) {
    return client.get(ROTA_WEBPHONE, {
      params: data
    })
  }

  /**
   * Cria uma nova URA
   * @param {string} nome
   * @param {array} dados
   * @return {Promise}
   */
  this.criarUra = function (nome, dados) {
    return client.post(ROTA_URA, {
      nome,
      dados
    })
  }

  /**
   * Remove uma Ura
   * @param {int} id
   * @return {Promise}
   */
  this.excluirUra = function (id) {
    return client.delete(`${ROTA_URA}/${id}`)
  }

  /**
   * Busca uma Ura pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  this.buscaUra = function (id) {
    return client.get(`${ROTA_URA}/${id}`)
  }

  /**
   * Atualiza uma ura
   * @param {id} id
   * @param {string} nome
   * @param {array} dados
   * @return {Promise}
   */
  this.atualizarUra = function (id, nome, dados) {
    return client.put(`${ROTA_URA}/${id}`, {
      nome,
      dados
    })
  }

  /**
   * Retorna a sua lista de URAs e suas estruturas
   * @return {Promise}
   */
  this.relatorioUra = function () {
    return client.get(`${ROTA_URA}/relatorio`)
  }
}
