import { AxiosInstance } from 'axios'
import { Response } from '../totalvoice'

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
  enviar: (
    numero_destino: string,
    nome_produto: string,
    tamanho?: number,
    tts?: boolean
  ) => Promise<Response<{ id: string }>>
  buscar: (id: string, pin: string) => Promise<Response<{ resultado: 'valido' | 'invalido' }>>
}
