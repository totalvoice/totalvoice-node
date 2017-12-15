function Tts(httpClient) {

  const client = httpClient

  const ROTA_TTS = '/tts'

  this.enviar = function (numero_destino, mensagem, opcoes) {
    return client.post(ROTA_TTS, {
      numero_destino,
      mensagem,
      opcoes
    })
  }

  this.buscar = function (id) {
    return client.get(`${ROTA_TTS}/${id}`)
  }

  this.relatorio = function (data_inicio, data_fim) {
    return client.get(`${ROTA_TTS}/relatorio`, {
      params: {
        data_inicio,
        data_fim
      }
    })
  }
}

module.exports = Tts
