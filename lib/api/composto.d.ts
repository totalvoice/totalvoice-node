import { AxiosInstance } from 'axios'
import { Response } from '../totalvoice'

interface CompostoObject {
  id: number
  numero_destino: string
  data_criacao: string
  data_inicio: string
  tipo: string
  status: string
  duracao_segundos: number
  duracao: number
  duracao_cobrada_segundos: number
  duracao_cobrada: number
  duracao_falada_segundos: number
  duracao_falada: number
  preco: number
  resposta_usuario: boolean
  resposta: string
  url_gravacao: string
  tags: string
  motivo_desconexao: string
}

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
  ) => Promise<Response<CompostoObject>>
  /**
   * Busca um composto pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string) => Promise<Response<CompostoObject>>
  /**
   * Relatório de mensagens de Composto
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioResponse<CompostoObject>>
}
