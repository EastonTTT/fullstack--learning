interface RadioProps {
  toggleImportance: (important: boolean) => void
  important: boolean
}
const MyRadio = ({ toggleImportance, important }: RadioProps) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          checked={important === true}
          onChange={() => toggleImportance(true)}
        />
        yes
      </label>
      <label>
        <input
          type="radio"
          checked={important === false}
          onChange={() => toggleImportance(false)}
        />
        no
      </label>
    </div>
  )
}

export default MyRadio
