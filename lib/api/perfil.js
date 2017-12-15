module.exports = function Perfil(httpClient) {

  const client = httpClient

  const ROTA_CONTA = '/conta'

  const ROTA_WEBHOOK = '/webhook'

  const ROTA_SALDO = '/saldo'

  this.consultaSaldo = function () {
    return client.get(ROTA_SALDO)
  }

  this.minhaConta = function () {
    return client.get(ROTA_CONTA)
  }

  this.atualizaDadosConta = function (data) {
    return client.put(ROTA_CONTA, data)
  }

  this.relatorioRecarga = function () {
    return client.get(`${ROTA_CONTA}/recargas`)
  }

  this.urlRecarga = function (url_retorno) {
    return client.get(`${ROTA_CONTA}/urlrecarga`, {
      params: {
        url_retorno
      }
    })
  }

  this.webhooks = function () {
    return client.get(ROTA_WEBHOOK)
  }

  this.excluirWebhook = function (nome) {
    return client.delete(`${ROTA_CONTA}/${nome}`)
  }

  this.salvaWebhook = function (nome, url) {
    return client.put(`${ROTA_CONTA}/${nome}`, {
      url
    })
  }
}
