import { AxiosInstance } from 'axios'
import { Response } from '../totalvoice'

interface DidObject {
  id: number
  cidade: string
  estado: string
  numero: string
}

interface RelatorioDid extends Response<RelatorioDid> {
  total: number
  posicao: number
  limite: string
  relatorio: DidObject[]
}

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
  listar: () => Promise<Response<{ dids: DidObject[] }>>
  /**
   * Remove um did
   * @param  {int} id
   * @return {Promise}
   */
  excluir: (id: string) => Promise<Response<null>>
  /**
   * Atualiza um did
   * @param {int} id
   * @param {string} ramal_id
   * @param {string} ura_id
   * @return {Promise}
   */
  atualizar: (id: string, ramal_id?: string, ura_id?: string) => Promise<Response<null>>
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
  adquirir: (id: string) => Promise<any>
  /**
   * Busca uma chamada recebida pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscaChamadaRecebida: (id: string) => Promise<any>
  /**
   * Relatório de chamadas DID
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioDid>
}
