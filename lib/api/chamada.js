/**
 * Módulo Chamada
 * @param {object} httpClient
 */
module.exports = function Chamada(httpClient) {
    
    const client = httpClient
  
    const ROTA_CHAMADA = '/chamada'
  
    /**
     * Realiza uma chamada telefônica entre dois números: A e B
     * @param {string} numero_origem
     * @param {string} numero_destino
     * @param {object} opcoes
     * @return {Promise}
     */
    this.ligar = function (numero_origem, numero_destino, opcoes = {}) {
      return client.post(ROTA_CHAMADA, {
        numero_origem,
        numero_destino,
        ...opcoes
      })
    }

    /**
     * Encerra uma chamada ativa
     * @param {int} id
     * @return {Promise}
     */
    this.encerrar = function (id) {
      return client.delete(`${ROTA_CHAMADA}/${id}`)
    }
  
    /**
     * Busca uma chamada pelo seu ID
     * @param {int} id
     * @return {Promise}
     */
    this.buscar = function (id) {
      return client.get(`${ROTA_CHAMADA}/${id}`)
    }
  
    /**
     * Download do áudio de uma chamada gravada
     * @param {int} id
     * @return {Promise}
     */
    this.downloadGravacao = function (id) {
      return client.get(`${ROTA_CHAMADA}/${id}/gravacao`)
    }
  
    /**
     * Relatório de mensagens de Chamadas
     * @param {string} data_inicio
     * @param {string} data_fim
     * @return {Promise}
     */
    this.relatorio = function (data_inicio, data_fim) {
      return client.get(`${ROTA_CHAMADA}/relatorio`, {
        params: {
          data_inicio,
          data_fim
        }
      })
    }
  
    /**
     * (Beta) Escuta uma chamada ativa
     * @param {int} id
     * @param {string} numero
     * @param {int} modo
     * @return {Promise}
     */
    this.escutar = function (id, numero, modo) {
      return client.post(`${ROTA_CHAMADA}/${id}/escuta`, {
        numero,
        modo
      })
    }
  
    /**
     * (Beta) Faz uma transferência da chamada atual
     * @param {int} id
     * @param {string} numero
     * @param {string} perna
     * @return {Promise}
     */
    this.transferir = function (id, numero, perna) {
      return client.post(`${ROTA_CHAMADA}/${id}/transfer`, {
        numero,
        perna
      })
    }
  
    /**
     * Avalia uma Chamada com nota de 1 a 5
     * @param {int} id
     * @param {string} nota
     * @param {string} comentario
     * @return {Promise}
     */
    this.avaliar = function (id, nota, comentario) {
      return client.post(`${ROTA_CHAMADA}/${id}/transfer`, {
        nota, 
        comentario
      })
    } 
}
   
