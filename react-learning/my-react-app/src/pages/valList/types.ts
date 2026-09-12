export interface ListProps {
  valList: Val[]
  onToggleImportance: (id: number, important: boolean) => void
  onDeleteNote: (id: number) => void
  onUpdateNote: (id: number, content: string) => void
}

export interface Val {
  id: number
  content: string | null
  important: boolean
}
