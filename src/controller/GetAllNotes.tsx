
import { useEffect, useState } from "react";
import { Note } from "../model/NoteInterface";

export const GetAllNotes = () => {

    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ status: false, message: "" });

    const fetchNotes = () => {
        setLoading(true);
        fetch(import.meta.env.VITE_NOTE_URL).then((res => { return res.json() }))
            .then(data => {
                setNotes(data);
                setLoading(false);
            })
            .catch(() => {
                setError({ status: true, message: "Fetching data error" });
                setLoading(false);
            })

        return { notes, loading, error }

    }

    useEffect(() => {
        fetchNotes()
    }, [])


}

