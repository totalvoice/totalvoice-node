import { AxiosInstance } from 'axios'

export = Bina
/**
 * Módulo Bina
 * @param {object} httpClient
 */
declare function Bina(httpClient: AxiosInstance): void
declare class Bina {
  /**
   * Módulo Bina
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Envia um número pra receber um código de validação
   * @param {string} telefone
   * @return {Promise}
   */
  enviar: (telefone: string) => Promise<any>
  /**
   * Verifica se o código é válido para o telefone
   * @param {string} codigo
   * @param {string} telefone
   * @return {Promise}
   */
  validar: (codigo: string, telefone: string) => Promise<any>
  /**
   * Remove o telefone cadastrado na sua Conta
   * @param {string} telefone
   * @return {Promise}
   */
  excluir: (telefone: string) => Promise<any>
  /**
   * @return {Promise}
   */
  relatorio: () => Promise<any>
}
