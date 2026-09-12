import type { Val } from '../pages/valList/types'
import { get, post, put, deleteRequest } from './client'

export async function getValList() {
  return get('/test')
}

export async function updateValList(data: Val) {
  return post('/test', data)
}

export async function toggleImportance(id: number, important: boolean) {
  return put(`/test/toggleImportance/${id}`, { important })
}

export async function deleteNote(id: number) {
  return deleteRequest(`/test/${id}`)
}

export async function updateNote(id: number, content: string) {
  return put(`/test/${id}`, { content })
}
