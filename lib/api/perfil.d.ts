import { AxiosInstance } from 'axios'

export = Perfil
/**
 * Módulo Perfil
 * @param {object} httpClient
 */
declare function Perfil(httpClient: AxiosInstance): void
declare class Perfil {
  /**
   * Módulo Perfil
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Consulta saldo atual
   * @return {Promise}
   */
  consultaSaldo: () => Promise<any>
  /**
   * Consulta os dados da minha Conta
   * @return {Promise}
   */
  minhaConta: () => Promise<any>
  /**
   * Atualiza os dados da minha conta
   * @param {object} $data
   * @return {Promise}
   */
  atualizaDadosConta: (data: any) => Promise<any>
  /**
   * Gera um relatório com as recargas efetuadas
   * @return {Promise}
   */
  relatorioRecarga: () => Promise<any>
  /**
   * Gera uma URL para recarga de créditos
   * @param {string} url_retorno
   * @return {Promise}
   */
  urlRecarga: (url_retorno: string) => Promise<any>
  /**
   * Retorna a lista de webhooks configurados para esta conta
   * @return {Promise}
   */
  webhooks: () => Promise<any>
  /**
   * Apaga um webhook
   * @param {string} nome
   * @return {Promise}
   */
  excluirWebhook: (nome: string) => Promise<any>
  /**
   * Cadastra ou atualiza um webhook
   * @param {string} nome
   * @param {string} url
   * @return {Promise}
   */
  salvaWebhook: (nome: string, url: string) => Promise<any>
}
