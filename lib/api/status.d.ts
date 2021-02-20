import { AxiosInstance } from 'axios'

export = Status
/**
 * Módulo Status
 * @param {object} httpClient
 */
declare function Status(httpClient: AxiosInstance): void
declare class Status {
  /**
   * Módulo Status
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Verifica o status da API
   * @return {Promise}
   */
  verificar: () => Promise<any>
  /**
   * Consulta o status de um serviço
   * @param {string} nome
   * @return {Promise}
   */
  consultar: (nome: string) => Promise<any>
}
