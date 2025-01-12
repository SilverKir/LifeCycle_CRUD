export const DeleteNoteById = (id: number) => {
    fetch(import.meta.env.VITE_NOTE_URL + "/" + id, {
        method: 'DELETE'
    })
    console.log(import.meta.env.VITE_NOTE_URL + "/:" + id)
}