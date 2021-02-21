import { AxiosInstance } from 'axios'

export = Composto
/**
 * Módulo Composto
 * @param {object} httpClient
 */
declare function Composto(httpClient: AxiosInstance): void
declare class Composto {
  /**
   * Módulo Composto
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Envia um composto para um número destino
   * @param {string} numero_destino
   * @param {array} dados
   * @param {string} bina
   * @param {string} tags
   * @param {boolean} gravar_audio
   * @return {Promise}
   */
  enviar: (
    numero_destino: string,
    dados: any[],
    bina: string,
    tags: string,
    gravar_audio: boolean
  ) => Promise<any>
  /**
   * Busca um composto pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string) => Promise<any>
  /**
   * Relatório de mensagens de Composto
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<any>
}
