export const GetNotes = () => {
    return fetch(import.meta.env.VITE_NOTE_URL).then((res => { return res.json() }))
}