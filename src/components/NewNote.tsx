
import AddNote from '../controller/AddNote';
import classes from './NewNote.module.css';

const NewNote = ({ setChange }: { setChange: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AddNote(e.currentTarget.note.value);
        setChange(prevState => !prevState);

    }
    return (
        <>
            <form className={classes['new-note-wrapper']} onSubmit={handleSubmit}>
                <h3>New Note</h3>
                <textarea className={classes['new-note-texterea']} id="note" />
                <button className={classes['new-note-button']} typeof='submit' >double_arrow</button>
            </form>
        </>
    )
}

export default NewNote