import { AxiosInstance } from 'axios'

export = Tts
/**
 * Módulo TTS
 * @param {object} httpClient
 */
declare function Tts(httpClient: AxiosInstance): void
declare class Tts {
  /**
   * Módulo TTS
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Envia um TTS (text-to-speach) para um número destino
   * @param {string} numero_destino
   * @param {string} mensagem
   * @param {object} opcoes
   * @return {Promise}
   */
  enviar: (numero_destino: string, mensagem: string, opcoes: object) => Promise<any>
  /**
   * Busca um tts pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: any) => Promise<any>
  /**
   * Relatório de mensagens de Tts
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<any>
  nome: (name: any) => any
}
