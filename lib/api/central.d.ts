import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

interface CentralObject {
  id: number
  ramal: number
  login: string
  bina: string
  webphone_key: string
  ligacao_externa: boolean
  ligacao_celular: boolean
  gravar_audio: boolean
  bina_inteligente: boolean
}

interface URAData {
  timeout?: number
  timeout_fila?: number
  menu: string
  opcao: string
  acao: string
  coletar_dtmf?: string
  queue_fail_timeout?: string
  acao_dados: Partial<{
    url_audio: string
    mensagem: string
    numero_telefone: string
    fila_id: string
    url: string
    menu: string
    dinamico: string
    stt: string
    fim: any
  }>
}

interface URAObject {
  id: number
  nome: string
  dados?: Partial<URAData>
}

export = Central
/**
 * Módulo Central
 * @param {object} httpClient
 */
declare function Central(httpClient: AxiosInstance): void
declare class Central {
  /**
   * Módulo Central
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Cria um novo ramal
   * @param {object} data
   * @return {Promise}
   */
  criarRamal: (data: object) => Promise<Response<CentralObject>>
  /**
   * Remove um Ramal
   * @param {int} id
   * @return {Promise}
   */
  excluirRamal: (id: string) => Promise<Response<null>>
  /**
   * Busca uma Ramal pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscaRamal: (id: string) => Promise<Response<CentralObject>>
  /**
   * Atualiza um ramal
   * @param {int} id
   * @param {object} data
   * @return {Promise}
   */
  atualizarRamal: (id: string, data: Partial<CentralObject>) => Promise<Response<CentralObject>>
  /**
   * Relatório de mensagens de Ramal
   * @return {Promise}
   */
  relatorio: () => Promise<Response<any>>
  /**
   * Listar pausas do ramal
   * @param {int} id
   * @return {Promise}
   */
  relatorioPausas: (id: string) => Promise<Response<any>>
  /**
   * Listar pausas do ramal
   * @param {int} ramal
   * @return {Promise}
   */
  atualizarRamalFila: (id: string, data: any) => Promise<Response<any>>
  /**
   * Requisita a URL do webphone de um ramal
   * @param {array} data
   * @return {Promise}
   */
  webphone: (data: any[]) => Promise<any>
  /**
   * Cria uma nova URA
   * @param {string} nome
   * @param {array} dados
   * @return {Promise}
   */
  criarUra: (nome: string, dados: URAData[]) => Promise<Response<{ id: string }>>
  /**
   * Remove uma Ura
   * @param {int} id
   * @return {Promise}
   */
  excluirUra: (id: string) => Promise<Response<null>>
  /**
   * Busca uma Ura pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscaUra: (id: string) => Promise<Response<URAObject>>
  /**
   * Atualiza uma ura
   * @param {id} id
   * @param {string} nome
   * @param {array} dados
   * @return {Promise}
   */
  atualizarUra: (id: string, nome: string, dados: URAData[]) => Promise<Response<URAObject>>
  /**
   * Retorna a sua lista de URAs e suas estruturas
   * @return {Promise}
   */
  relatorioUra: () => Promise<RelatorioResponse<URAObject>>
}
