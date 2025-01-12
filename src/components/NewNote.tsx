
import AddNote from '../controller/AddNote';

const NewNote = ({ setChange }: { setChange: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AddNote(e.currentTarget.note.value);
        setChange(prevState => !prevState);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Заголовок</label>
                <input type="text" id="title" />
                <label htmlFor="note">Заметка</label>
                <textarea id="note" />
                <button type='submit'>Добавить</button>
            </form>
        </>
    )
}

export default NewNote