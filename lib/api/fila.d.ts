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
declare function Fila(httpClient: AxiosInstance): void
declare class Fila {
  constructor(httpClient: AxiosInstance)
  listar: () => Promise<any>
  enviar: (
    nome: string,
    estrategia_ring: string,
    timeout_ring?: number
  ) => Promise<Response<{ id: FilaObject['id'] }>>
  addRamal: (id: string, ramal_id: string) => Promise<Response<{ id: FilaObject['id'] }>>
  buscar: (id: string) => Promise<Response<FilaObject>>
  buscarRamalFila: (id: string, ramal_id: string) => Promise<Response<FilaObject>>
  atualizarFila: (
    id: string,
    data: {
      estrategia_ring?: 'Distribuidor' | 'DistribuidorParalelo' | 'Multiplo'
      timeout_ring?: string
    }
  ) => Promise<any>
  excluirRamalFila: (id: string, ramal_id: string) => Promise<Response<null>>
}
