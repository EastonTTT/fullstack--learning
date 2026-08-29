import type { ListProps } from "../types";
const List = (prop: ListProps) => {
    const { valList } = prop;
    return (
        <div>
            <p>VALUE LIST:</p>
            { valList.map(val => 
                <p key={val.id}>
                    id: {val.id}, content: {val.content}
                </p> 
            )}
        </div>
    )
}

export default List