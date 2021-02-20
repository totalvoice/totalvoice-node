import { AxiosInstance } from 'axios'

export = Audio
/**
 * Módulo Audio
 * @param {object} httpClient
 */
declare function Audio(httpClient: AxiosInstance): void
declare class Audio {
  /**
   * Módulo Audio
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Envia um audio para um número destino
   * @param {string} numero_destino
   * @param {string} url_audio
   * @param {bool} resposta_usuario
   * @param {string} bina
   * @param {bool} gravar_audio
   * @return {Promise}
   */
  enviar: (
    numero_destino: string,
    url_audio: string,
    resposta_usuario: any,
    bina: string,
    gravar_audio: boolean
  ) => Promise<any>
  /**
   * Busca um audio pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string | number) => Promise<any>
  /**
   * Relatório de mensagens de Audios
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<any>
}
