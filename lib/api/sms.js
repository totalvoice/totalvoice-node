module.exports = function Sms(httpClient) {

  const client = httpClient

  const ROTA_SMS = '/sms'

  this.enviar = function (numero_destino, mensagem, opcoes) {
    return client.post(ROTA_SMS, {
      numero_destino,
      mensagem,
      opcoes
    })
  }

  this.buscar = function (id) {
    return client.get(`${ROTA_SMS}/${id}`)
  }

  this.relatorio = function (data_inicio, data_fim) {
    return client.get(`${ROTA_SMS}/relatorio`, {
      params: {
        data_inicio,
        data_fim
      }
    })
  }
}
