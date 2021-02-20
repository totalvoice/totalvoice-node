import { AxiosInstance } from 'axios'

export = Conta
/**
 * Módulo Conta
 * @param {object} httpClient
 */
declare function Conta(httpClient: AxiosInstance): void
declare class Conta {
  /**
   * Módulo Conta
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Cria uma nova conta na plataforma
   * @param {object} data
   * @return {Promise}
   */
  criar: (data: object) => Promise<any>
  /**
   * Leitura dos dados de uma conta criada
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: any) => Promise<any>
  /**
   * Remove uma conta
   * @param {int} id
   * @return {Promise}
   */
  excluir: (id: any) => Promise<any>
  /**
   * Atualiza os dados de uma conta criada
   * @param {int} $id
   * @param {object} data
   * @return {Promise}
   */
  atualizar: (id: any, data: object) => Promise<any>
  /**
   * Lista contas criadas por mim
   * @return {Promise}
   */
  relatorio: () => Promise<any>
  /**
   * Credita valor de bônus em uma conta filha
   * @param {int} id
   * @param {object} data
   * @return {Promise}
   */
  recargaBonus: (id: any, data: object) => Promise<any>
  /**
   * Retorna a lista de webhooks default configurados para esta conta
   * @return {Promise}
   */
  webhooksDefault: () => Promise<any>
  /**
   * Apaga um webhook
   * @param {string} nome
   * @return {Promise}
   */
  excluirWebhookDefault: (nome: string) => Promise<any>
  /**
   * Cadastra ou atualiza um webhook
   * @param {string} nome
   * @param {string} url
   * @return {Promise}
   */
  salvaWebhookDefault: (nome: string, url: string) => Promise<any>
}
