import { AxiosInstance } from 'axios'

export = Chamada
/**
 * Módulo Chamada
 * @param {object} httpClient
 */
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
  ligar: (numero_origem: string, numero_destino: string, opcoes?: object) => Promise<any>
  /**
   * Encerra uma chamada ativa
   * @param {int} id
   * @return {Promise}
   */
  encerrar: (id: any) => Promise<any>
  /**
   * Busca uma chamada pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: any) => Promise<any>
  /**
   * Download do áudio de uma chamada gravada
   * @param {int} id
   * @return {Promise}
   */
  downloadGravacao: (id: any) => Promise<any>
  /**
   * Relatório de mensagens de Chamadas
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<any>
  /**
   * (Beta) Escuta uma chamada ativa
   * @param {int} id
   * @param {string} numero
   * @param {int} modo
   * @return {Promise}
   */
  escutar: (id: any, numero: string, modo: any) => Promise<any>
  /**
   * (Beta) Faz uma transferência da chamada atual
   * @param {int} id
   * @param {string} numero
   * @param {string} perna
   * @return {Promise}
   */
  transferir: (id: any, numero: string, perna: string) => Promise<any>
  /**
   * Avalia uma Chamada com nota de 1 a 5
   * @param {int} id
   * @param {string} nota
   * @param {string} comentario
   * @return {Promise}
   */
  avaliar: (id: any, nota: string, comentario: string) => Promise<any>
}
