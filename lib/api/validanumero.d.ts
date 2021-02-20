import { AxiosInstance } from 'axios'

export = ValidaNumero
/**
 * Módulo Valdida Numero
 * @param {object} httpClient
 */
declare function ValidaNumero(httpClient: AxiosInstance): void
declare class ValidaNumero {
  /**
   * Módulo Valdida Numero
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Envia um audio para um número destino
   * @param {string} numero_destino
   * @param {bool} gravar_audio
   * @param {string} bina
   * @param {int} max_tentativas
   * @return {Promise}
   */
  enviar: (
    numero_destino: string,
    gravar_audio: any,
    bina: string,
    max_tentativas: any
  ) => Promise<any>
  /**
   * Busca uma validação pelo ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: any) => Promise<any>
  /**
   * Relatório de validações de numeros
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<any>
}
