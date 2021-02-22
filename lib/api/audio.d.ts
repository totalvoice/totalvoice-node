import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

interface AudioObject {
  id: string
  numero_destino: string
  data_criacao: string
  tipo: string
  status: string
  duracao_segundos: string
  duracao: string
  duracao_cobrada_segundos: string
  duracao_cobrada: string
  duracao_falada_segundos: string
  duracao_falada: string
  preco: number
  url_audio: string
  resposta_usuario: boolean
  resposta: string
  motivo_desconexao: string
  url_gravacao: string
}
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
  ) => Promise<Response<{ id: string }>>
  /**
   * Busca um audio pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string) => Promise<Response<AudioObject>>
  /**
   * Relatório de mensagens de Audios
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioResponse<AudioObject>>
}
