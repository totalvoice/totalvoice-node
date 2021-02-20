import { AxiosInstance } from 'axios'

export = Conferencia
/**
 * Módulo Conferencia
 * @param {object} httpClient
 */
declare function Conferencia(httpClient: AxiosInstance): void
declare class Conferencia {
  /**
   * Módulo Conferencia
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Cria uma conferência
   * @return {Promise}
   */
  criar: () => Promise<any>
  /**
   * Busca uma conferência pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: any) => Promise<any>
  /**
   * Adiciona na conferência
   * @param {int} id
   * @param {string} numero
   * @param {string} bina
   * @param {bool} gravar_audio
   * @return {Promise}
   */
  addNumero: (id: any, numero: string, bina: string, gravar_audio: any) => Promise<any>
  /**
   * Remove uma conferência ativa
   * @param  {int} id
   * @return {Promise}
   */
  excluir: (id: any) => Promise<any>
}
