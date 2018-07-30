/**
 * Módulo Bina
 * @param {object} httpClient
 */
module.exports = function Bina(httpClient) {

    const client = httpClient
  
    const ROTA_BINA = '/bina'
  
    /**
     * Envia um número pra receber um código de validação
     * @param {string} telefone
     * @return {Promise}
     */
    this.enviar = function (telefone) {
      return client.post(ROTA_BINA, {telefone});
    }
  
    /**
     * Verifica se o código é válido para o telefone
     * @param {string} codigo
     * @param {string} telefone
     * @return {Promise}
     */
    this.validar = function (codigo, telefone) {
      return client.get(ROTA_BINA, {
          params: {
              codigo,
              telefone
          }
      });
    }

    /**
     * Remove o telefone cadastrado na sua Conta
     * @param {string} telefone
     * @return {Promise}
     */
    this.excluir = function (telefone) {
      return client.delete(`${ROTA_BINA}/${telefone}`);
    }
  
    /**
     * @return {Promise}
     */
    this.relatorio = function () {
      return client.get(`${ROTA_BINA}/relatorio`);
    }
  }
  