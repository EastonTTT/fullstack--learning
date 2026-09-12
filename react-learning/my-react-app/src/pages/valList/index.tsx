import { useEffect, useState, type ChangeEvent } from 'react'
import List from './components/list.tsx'
import type { Val } from './types.ts'
import { getValList, updateValList } from '../../request/api.ts'
import styles from './valList.module.css'
export const ValList = () => {
  const [valArr, setValArr] = useState<Val[]>([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    getValList().then((result: Val[]) => {
      if (result) {
        setValArr(result)
      }
    })
  }, [])

  const handleClick = async () => {
    try {
      const newValArr = await updateValList({ id: valArr.length, content: newNote })
      setValArr(newValArr)
      setNewNote('')
    } catch (error) {
      console.log(error)
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement, HTMLInputElement>): void {
    // console.log(`new note: ${event.target.value}`)
    setNewNote(event.target.value)
  }

  return (
    <div className={styles.container}>
      <List valList={valArr} />
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
