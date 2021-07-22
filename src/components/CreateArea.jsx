import React, { useState }  from 'react';
import { MdAdd } from "react-icons/md";

function CreateArea({ submitButton, onAdd}) {
    const [isExpanded, setExpended] = useState(false);

    const [note,setNote] = useState({
        title:"",
        content:"",
    });

    function handleChange(e){
        const {name, value} = e.target;
        setNote(preValue => {
            return{
                ...preValue,
                [name]: value,
            };
        });
    }

    function submitButton(event){
        onAdd(note);
        setNote({
            title:"",
            content:"",
        });
        setExpended(false);
        event.preventDefault();
        //console.log(i);
    }

    function handleExpended(){
        setExpended(true);
    }

    return (
        <div>
            <form>
                {isExpanded && (
                <input 
                    value={note.title}
                    type="text" 
                    placeholder="Title" 
                    name="title"
                    onChange={handleChange}/>
                )}
                <p>
                <textarea
                    value={note.content}
                    onClick={handleExpended}
                    name="content"
                    placeholder="Take a note..."
                    onChange={handleChange}
                    rows={isExpanded ? 3: 1}
                ></textarea>
                </p>
                <button onClick={submitButton} > <MdAdd/> </button>
            </form>
            
        </div>
    )
}

export default CreateArea;
