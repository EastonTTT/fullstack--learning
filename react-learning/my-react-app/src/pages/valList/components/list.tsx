import type { ListProps } from '../types'
const List = (prop: ListProps) => {
  const { valList, onDeleteNote, onToggleImportance, onUpdateNote } = prop
  return (
    <div>
      <p>VALUE LIST:</p>
      {valList.map((val) => (
        <p key={val.id}>
          id: {val.id}, content: {val.content}, important: {val.important ? 'yes' : 'no'}
          <button onClick={() => onToggleImportance(val.id, !val.important)}>
            toggle importance
          </button>
          <button onClick={() => onDeleteNote(val.id)}>delete note</button>
          {/* <button onClick={() => onUpdateNote(val.id)}>update note</button> */}
        </p>
      ))}
    </div>
  )
}

export default List
