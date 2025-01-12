import React, { useEffect, useState } from 'react'
import { GetNotes } from '../controller/GetNotes'
import NewNote from './NewNote'
import { Notes } from './Note'
import { Note } from '../model/NoteInterface'

export const NotesList = () => {

    const [notes, setNotes] = useState<Note[]>([]);
    const [onChange, setOnChange] = useState(false);

    useEffect(() => {
        GetNotes().then(data => setNotes(data));
    }, [onChange])

    // const { notes, loading, error } = GetAllNotes();

    // if (loading) {
    //     return <div>Загрузка...</div>
    // }

    // if (error.status) {
    //     return <div style={{ color: "red" }
    //     }> {error.message}</div >
    // }

    return (
        <>
            <div>
                {notes.map(note => <Notes key={note.id} {...note} />)}
            </div>

            <NewNote setChange={setOnChange} />
        </>

    )
}

export default NotesList