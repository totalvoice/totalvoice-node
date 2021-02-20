import { AxiosInstance } from 'axios'

export = Did
/**
 * Módulo DID
 * @param {object} httpClient
 */
declare function Did(httpClient: AxiosInstance): void
declare class Did {
  /**
   * Módulo DID
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Lista todos os dids pertencentes
   * @return {Promise}
   */
  listar: () => Promise<any>
  /**
   * Remove um did
   * @param  {int} id
   * @return {Promise}
   */
  excluir: (id: any) => Promise<any>
  /**
   * Atualiza um did
   * @param {int} id
   * @param {string} ramal_id
   * @param {string} ura_id
   * @return {Promise}
   */
  atualizar: (id: any, ramal_id: string, ura_id: string) => Promise<any>
  /**
   * Lista todos os dids disponiveis
   * @return {Promise}
   */
  listaEstoque: () => Promise<any>
  /**
   * Adquire um novo did para sua conta
   * @param {int} id
   * @return {Promise}
   */
  adquirir: (id: any) => Promise<any>
  /**
   * Busca uma chamada recebida pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscaChamadaRecebida: (id: any) => Promise<any>
  /**
   * Relatório de chamadas DID
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<any>
}
