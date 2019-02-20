/**
 * Módulo Valdida Numero
 * @param {object} httpClient
 */
module.exports = function ValidaNumero(httpClient) {

    const client = httpClient
  
    const ROTA_VALIDA_NUMERO = '/valida_numero'
  
    /**
     * Envia um audio para um número destino
     * @param {string} numero_destino
     * @param {bool} gravar_audio
     * @param {string} bina
     * @param {int} max_tentativas
     * @return {Promise}
     */
    this.enviar = function (numero_destino, gravar_audio, bina, max_tentativas) {
      return client.post(ROTA_VALIDA_NUMERO, {
        numero_destino,
        gravar_audio,
        bina,
        max_tentativas
      })
    }
  
    /**
     * Busca uma validação pelo ID
     * @param {int} id
     * @return {Promise}
     */
    this.buscar = function (id) {
      return client.get(`${ROTA_VALIDA_NUMERO}/${id}`)
    }
  
    /**
     * Relatório de validações de numeros
     * @param {string} data_inicio
     * @param {string} data_fim
     * @return {Promise}
     */
    this.relatorio = function (data_inicio, data_fim) {
      return client.get(`${ROTA_VALIDA_NUMERO}/relatorio`, {
        params: {
          data_inicio,
          data_fim
        }
      })
    }
  }
  