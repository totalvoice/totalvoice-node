import { AxiosInstance } from 'axios'
import { Response } from '../totalvoice'

interface RamalObject {
  id: number
  nome: string
  ramal: string
  login: string
  prioridade: string
  qtd_ligacao_atendida: string
  ultima_chamada: string
  em_ligacao: boolean
  status: string
  em_pausa: boolean
  razao_pausa: string
  bina: any
  tempo_status: string
}

interface FilaObject {
  id: number
  nome: string
  chamadas: number
  completado: number
  cancelado: number
  tempo_falado: string
  tempo_espera: string
  ramais: RamalObject[]
}

export = Fila
/**
 * Módulo FILA
 * @param {object} httpClient
 */
declare function Fila(httpClient: AxiosInstance): void
declare class Fila {
  /**
   * Módulo FILA
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Lista as filas da sua Conta
   * @return {Promise}
   */
  listar: () => Promise<any>
  /**
   * Cria uma nova fila
   * @param {string} nome
   * @param {string} estrategia_ring
   * @param {object} timeout_ring
   * @return {Promise}
   */
  enviar: (
    nome: string,
    estrategia_ring: string,
    timeout_ring?: number
  ) => Promise<Response<{ id: FilaObject['id'] }>>
  /**
   * Adiciona um ramal na fila
   * @param {string} id
   * @param {string} ramal_id
   * @return {Promise}
   */
  addRamal: (id: string, ramal_id: string) => Promise<Response<{ id: FilaObject['id'] }>>
  /**
   * Busca uma fila pelo seu id
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string) => Promise<Response<FilaObject>>
  /**
   * Busca um ramal da fila pelo seu id
   * @param {int} id
   * @return {Promise}
   */
  buscarRamalFila: (id: string, ramal_id: string) => Promise<Response<FilaObject>>
  /**
   * Atualiza uma fila
   * @param {int} id
   * @param {object} data
   * @return {Promise}
   */
  atualizarFila: (
    id: string,
    data: {
      estrategia_ring?: 'Distribuidor' | 'DistribuidorParalelo' | 'Multiplo'
      timeout_ring?: string
    }
  ) => Promise<any>
  /**
   * Remove um Ramal da fila
   * @param {int} id
   * @return {Promise}
   */
  excluirRamalFila: (id: string, ramal_id: string) => Promise<Response<null>>
}
