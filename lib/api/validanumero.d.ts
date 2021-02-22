import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

interface ValidaNumeroObject {
  id: number
  numero_destino: string
  data_criacao: string
  preco: number
  valido: boolean
  finalizado: boolean
}

export = ValidaNumero
/**
 * Módulo Valdida Numero
 * @param {object} httpClient
 */
declare function ValidaNumero(httpClient: AxiosInstance): void
declare class ValidaNumero {
  /**
   * Módulo Valdida Numero
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Envia um audio para um número destino
   * @param {string} numero_destino
   * @param {bool} gravar_audio
   * @param {string} bina
   * @param {int} max_tentativas
   * @return {Promise}
   */
  enviar: (
    numero_destino: string,
    gravar_audio?: boolean,
    bina?: string,
    max_tentativas?: number
  ) => Promise<Response<{ id: string }>>
  /**
   * Busca uma validação pelo ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string) => Promise<Response<ValidaNumeroObject>>
  /**
   * Relatório de validações de numeros
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (
    data_inicio: string,
    data_fim: string
  ) => Promise<RelatorioResponse<ValidaNumeroObject>>
}