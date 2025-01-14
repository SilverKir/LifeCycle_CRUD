

import { DeleteNoteById } from '../controller/DeleteNoteById';
import classes from './Note.module.css';

type Props = {
    id: number;
    content: string
    setChange: (state: React.SetStateAction<boolean>) => void;
}
export const Notes = ({ id, content, setChange }: Props) => {

    const handleClick = () => {
        DeleteNoteById(id);
        console.log(id);
        setChange(prevState => !prevState);
    }

    return (
        <>
            <div className={classes['note-wrapper']}>
                <div className={classes['note-content']} key={id}>{content}</div>
                <button className={classes['note-button']} onClick={handleClick}>X</button>
            </div>
        </>
    )
}


export default Notes
