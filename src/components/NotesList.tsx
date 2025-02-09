import { useEffect, useState } from 'react'
import { GetNotes } from '../controller/GetNotes'
import NewNote from './NewNote'
import { Notes } from './Note'
import { Note } from '../model/NoteInterface'
import classes from './NotesList.module.css'

export const NotesList = () => {

    const [notes, setNotes] = useState<Note[]>([]);
    const [onChange, setOnChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ status: false, message: "" });

    useEffect(() => {
        setLoading(true);
        GetNotes().then(data => {
            setNotes(data);
            setLoading(false);
        }).catch(() => {
            setError({ status: true, message: "Fetching data error" });
            setLoading(false);
        });
    }, [onChange])

    if (loading) {
        return <div>Загрузка...</div>
    }

    if (error.status) {
        return <div style={{ color: "red" }
        }> {error.message}</div >
    }

    return (
        <>
            <div className={classes['header']}>
                <h1>Notes</h1>
                <button className={classes['update-button']} onClick={() => setOnChange(prevState => !prevState)}>sync</button>
            </div >
            <div className={classes['notes-list']}>
                {notes.map(note =>
                    <Notes key={note.id} {...note} setChange={setOnChange} />
                )}
            </div>
            <NewNote setChange={setOnChange} />
        </>

    )
}

export default NotesList