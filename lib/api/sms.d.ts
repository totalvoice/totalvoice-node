import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

interface SMSObject {
  id: number
  numero_destino: string
  data_criacao: string
  mensagem: string
  preco: number
  status: 'enviada' | 'erro' | 'entregue' | 'aguardando'
  data_status: string
  resposta_usuario: boolean
  tags: string
  respostas: {
    id: number
    sms_id: number
    resposta: string
    data_resposta: string
  }
}

export = Sms
/**
 * Módulo SMS
 * @param {object} httpClient
 */
declare function Sms(httpClient: AxiosInstance): void
declare class Sms {
  /**
   * Módulo SMS
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Envia um sms para um número destino
   * @param {string} numero_destino
   * @param {string} mensagem
   * @param {bool} resposta_usuario
   * @param {bool} multi_sms
   * @param {string} data_criacao
   * @return {Promise}
   */
  enviar: (
    numero_destino: string,
    mensagem: string,
    resposta_usuario?: boolean,
    multi_sms?: boolean,
    data_criacao?: string
  ) => Promise<Response<{ id: number }>>
  /**
   * Busca um sms pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string) => Promise<Response<SMSObject>>
  /**
   * Relatório de mensagens de Sms
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioResponse<SMSObject>>
}
