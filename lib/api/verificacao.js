/**
 * Módulo Verificacao
 * @param {object} httpClient
 */
module.exports = function Verificacao(httpClient) {

    const client = httpClient
  
    const ROTA_VERIFICACAO = '/verificacao'

    this.enviar = function (numero_destino, nome_produto, tamanho, tts) {
        return client.post(ROTA_VERIFICACAO, {
            numero_destino,
            nome_produto,
            tamanho,
            tts
        })
    }

    this.buscar = function (id, pin) {
        return client.get(`${ROTA_VERIFICACAO}`, { 
            params: {
                id,
                pin
            }
        })
    }
}
