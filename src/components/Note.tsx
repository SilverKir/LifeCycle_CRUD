
import { Note } from '../model/NoteInterface'

export const Notes = (props: Note) => {

    return (
        <div key={props.id}>{props.content}</div>
    )
}


export default Notes
