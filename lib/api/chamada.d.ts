import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

export = Chamada
/**
 * Módulo Chamada
 * @param {object} httpClient
 */
interface DestinoObject {
  data_inicio: string
  numero: string
  tipo: 'ramal' | 'movel' | 'fixo'
  status: 'atendida' | 'sem resposta' | 'ocupado' | 'congestionado' | 'falha' | 'cancelada' | string
  duracao_segundos: number
  duracao: number
  duracao_cobrada_segundos: number
  duracao_cobrada: number
  duracao_falada_segundos: number
  duracao_falada: number
  preco: number
  motivo_desconexao: string
}

export interface ChamadaObject {
  id: string
  data_criacao: string
  ativa: boolean
  url_gravacao: string
  cliente_id: string
  conta_id: string
  ramal_id_origem: string
  tags: string
  detecta_caixa: string
  status_geral: string
  origem: DestinoObject
  destino: DestinoObject
}

declare function Chamada(httpClient: AxiosInstance): void
declare class Chamada {
  /**
   * Módulo Chamada
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Realiza uma chamada telefônica entre dois números: A e B
   * @param {string} numero_origem
   * @param {string} numero_destino
   * @param {object} opcoes
   * @return {Promise}
   */
  ligar: (
    numero_origem: string,
    numero_destino: string,
    opcoes?: {
      data_criacao?: string
      gravar_audio?: boolean
      bina_origem?: string
      bina_destino?: string
      tags?: any
    }
  ) => Promise<Response<{ id: string }>>
  /**
   * Encerra uma chamada ativa
   * @param {int} id
   * @return {Promise}
   */
  encerrar: (id: string) => Promise<Response<null>>
  /**
   * Busca uma chamada pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string) => Promise<Response<ChamadaObject>>
  /**
   * Download do áudio de uma chamada gravada
   * @param {int} id
   * @return {Promise}
   */
  downloadGravacao: (id: string) => Promise<any>
  /**
   * Relatório de mensagens de Chamadas
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioResponse<ChamadaObject>>
  /**
   * (Beta) Escuta uma chamada ativa
   * @param {int} id
   * @param {string} numero
   * @param {int} modo
   * @return {Promise}
   */
  escutar: (id: string, numero: string, modo: any) => Promise<Response<any>>
  /**
   * (Beta) Faz uma transferência da chamada atual
   * @param {int} id
   * @param {string} numero
   * @param {string} perna
   * @return {Promise}
   */
  transferir: (id: string, numero: string, perna: string) => Promise<Response<any>>
  /**
   * Avalia uma Chamada com nota de 1 a 5
   * @param {int} id
   * @param {string} nota
   * @param {string} comentario
   * @return {Promise}
   */
  avaliar: (id: string, nota: string, comentario: string) => Promise<Response<any>>
}
