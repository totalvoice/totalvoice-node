import { AxiosInstance } from 'axios'

export = Verificacao
/**
 * Módulo Verificacao
 * @param {object} httpClient
 */
declare function Verificacao(httpClient: AxiosInstance): void
declare class Verificacao {
  /**
   * Módulo Verificacao
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  enviar: (numero_destino: any, nome_produto: any, tamanho: any, tts: any) => any
  buscar: (id: any, pin: any) => any
}
