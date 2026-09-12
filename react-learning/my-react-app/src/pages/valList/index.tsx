import { useEffect, useState, type ChangeEvent } from 'react'
import List from './components/list.tsx'
import type { Val } from './types.ts'
import {
  deleteNote,
  getValList,
  toggleImportance,
  updateNote,
  updateValList,
} from '../../request/api.ts'
import styles from './valList.module.css'
export const ValList = () => {
  const [valArr, setValArr] = useState<Val[]>([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    getValList().then((result: Val[]) => {
      if (result) {
        setValArr(result)
      } else {
        console.log('empty list.')
      }
    })
  }, [])

  const handleClick = async () => {
    try {
      const newValArr = await updateValList({
        id: valArr.length,
        content: newNote,
        important: false,
      })
      setValArr(newValArr)
      setNewNote('')
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>): void => {
    setNewNote(event.target.value)
  }
  // delete note
  const onDeleteNote = async (id: number): Promise<void> => {
    try {
      const newValArr = await deleteNote(id)
      setValArr(newValArr)
    } catch (error) {
      console.log(error)
    }
  }
  //toggle importance
  const onToggleImportance = async (id: number, important: boolean): Promise<void> => {
    try {
      const newValArr = await toggleImportance(id, important)
      console.log(newValArr)
      setValArr(newValArr)
    } catch (error) {
      console.log(error)
    }
  }
  //update note
  const onUpdateNote = async (id: number, content: string): Promise<void> => {
    try {
      const newValArr = await updateNote(id, content)
      setValArr(newValArr)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <List
        valList={valArr}
        onDeleteNote={onDeleteNote}
        onToggleImportance={onToggleImportance}
        onUpdateNote={onUpdateNote}
      />
      <input
        type="text"
        value={newNote}
        onChange={handleInputChange}
        placeholder="please type here.."
      />
      <button onClick={handleClick}>add a new content</button>
    </div>
  )
}
