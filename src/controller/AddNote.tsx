

const AddNote = (content: string) => {

    fetch(import.meta.env.VITE_NOTE_URL, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            content: content
        })
    })
}


export default AddNote