import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

export interface WebhookObject {
  webhook: string
  url: string
}

export interface ContaObject {
  id: number
  nome: string
  login: string
  senha: string
  cpf_cnpj?: string
  saldo?: number
  telefone?: string
  access_token?: string
  preco_fixo?: string
  preco_cel?: string
  preco_ramal?: string
  email_financeiro?: string
  nome_fantasia?: string
  conta_ativa?: number
  valor_aviso_saldo_baixo?: string
  metodo_pagamento?: string
  fatura_atual?: number
}

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
  criar: (data: ContaObject) => Promise<Response<ContaObject>>
  /**
   * Leitura dos dados de uma conta criada
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string) => Promise<Response<ContaObject>>
  /**
   * Remove uma conta
   * @param {int} id
   * @return {Promise}
   */
  excluir: (id: string) => Promise<Response<null>>
  /**
   * Atualiza os dados de uma conta criada
   * @param {int} $id
   * @param {object} data
   * @return {Promise}
   */
  atualizar: (id: string, data: Partial<ContaObject>) => Promise<RelatorioResponse<ContaObject>>
  /**
   * Lista contas criadas por mim
   * @return {Promise}
   */
  relatorio: () => Promise<Response<ContaObject>>
  /**
   * Credita valor de bônus em uma conta filha
   * @param {int} id
   * @param {object} data
   * @return {Promise}
   */
  recargaBonus: (id: string, data: { valor: string }) => Promise<Response<null>>
  /**
   * Retorna a lista de webhooks default configurados para esta conta
   * @return {Promise}
   */
  webhooksDefault: () => Promise<Response<{ webhooks: WebhookObject[] }>>
  /**
   * Apaga um webhook
   * @param {string} nome
   * @return {Promise}
   */
  excluirWebhookDefault: (nome: string) => Promise<Response<null>>
  /**
   * Cadastra ou atualiza um webhook
   * @param {string} nome
   * @param {string} url
   * @return {Promise}
   */
  salvaWebhookDefault: (nome: string, url: string) => Promise<Response<null>>
}
