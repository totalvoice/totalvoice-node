import { AxiosInstance } from 'axios'
import { Response } from '../totalvoice'

interface ChamadaConferenciaObject {
  id: number
  conferencia_id: number
  url_gravacao: string
  numero: number
  data_criacao: string
  cli: number
  duracao: string
  duracao_cobrada: string
  status: string
  preco: number
  data_inicio: string
}

interface ConferenciaObject {
  id: number
  data_criacao: string
  data_termino: string
  chamadas: ChamadaConferenciaObject[]
}

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
  criar: () => Promise<Response<ConferenciaObject>>
  /**
   * Busca uma conferência pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string) => Promise<Response<ConferenciaObject>>
  /**
   * Adiciona na conferência
   * @param {int} id
   * @param {string} numero
   * @param {string} bina
   * @param {bool} gravar_audio
   * @return {Promise}
   */
  addNumero: (id: string, numero: string, bina: string, gravar_audio: any) => Promise<any>
  /**
   * Remove uma conferência ativa
   * @param  {int} id
   * @return {Promise}
   */
  excluir: (id: string) => Promise<any>
}
