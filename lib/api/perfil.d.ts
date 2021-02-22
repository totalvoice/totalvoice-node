import { AxiosInstance } from 'axios'
import { ContaObject, WebhookObject } from './conta'
import { RelatorioResponse, Response } from '../totalvoice'

interface AtualizarConta {
  nome?: string
  login?: string
  senha?: string
  cpf_cnpj?: string
  telefone?: string
  preco_fixo?: string
  preco_cel?: string
  preco_ramal?: string
  email_financeiro?: string
  nome_fantasia?: string
}

interface RecargaObject {
  id: number
  credito: number
  data: string
  descricao: string
}

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
  consultaSaldo: () => Promise<Response<{ saldo: number }>>
  /**
   * Consulta os dados da minha Conta
   * @return {Promise}
   */
  minhaConta: () => Promise<Response<ContaObject>>
  /**
   * Atualiza os dados da minha conta
   * @param {object} $data
   * @return {Promise}
   */
  atualizaDadosConta: (data: AtualizarConta) => Promise<any>
  /**
   * Gera um relatório com as recargas efetuadas
   * @return {Promise}
   */
  relatorioRecarga: () => Promise<RelatorioResponse<RecargaObject>>
  /**
   * Gera uma URL para recarga de créditos
   * @param {string} url_retorno
   * @return {Promise}
   */
  urlRecarga: (url_retorno: string) => Promise<Response<{ url: string }>>
  /**
   * Retorna a lista de webhooks configurados para esta conta
   * @return {Promise}
   */
  webhooks: () => Promise<Response<{ webhooks: WebhookObject[] }>>
  /**
   * Apaga um webhook
   * @param {string} nome
   * @return {Promise}
   */
  excluirWebhook: (nome: string) => Promise<Response<null>>
  /**
   * Cadastra ou atualiza um webhook
   * @param {string} nome
   * @param {string} url
   * @return {Promise}
   */
  salvaWebhook: (nome: string, url: string) => Promise<Response<null>>
}
