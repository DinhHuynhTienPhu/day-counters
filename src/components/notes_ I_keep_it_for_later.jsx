import { useState } from 'react';

const apiurl = 'https://simple-server-4et5.onrender.com/notes';

export default function Notes() {

    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState('');
    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [needToLoad, setNeedToLoad] = useState(true);
    const [shouldShowSubmitButton, setShouldShowSubmitButton] = useState(true);


    const handleSubmit = async () => {
        console.log('submitting note');
        setShouldShowSubmitButton(false);

        const IP = await fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(data => data.ip);
        
        console.log(IP);
        console.log("notes", notes)

        let today = new Date().toDateString();
        let countNoteThisPersonGaveToday = 0;

        for (let i = 0; i < notes.length; i++) {
            if (notes[i].IP === IP && notes[i].date.includes(today)) {
                countNoteThisPersonGaveToday++;
            }
        }

        if (countNoteThisPersonGaveToday >= 3) {
            alert('You can only give 3 notes per day');
            setShouldShowSubmitButton(true);
            return;
        }


        
        const newNote = {
            date: new Date().toDateString(),
            IP: IP,
            content: note,
            username: username,
            id:new Date().toISOString()
        };


        let notes2 = notes;
        notes2 = notes2.concat(newNote);
        setNotes(notes2);

        console.log(notes2);

        //then clear the input
        setNote('');
        setUsername('');
        setShouldShowSubmitButton(true);

        //save to jsonbin
        await fetch(apiurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify({ notes: notes2 })
        }); 
        

    }

    

    const load = (() => {
        if (needToLoad === false) {
            return;
        }
        setNeedToLoad(false);

        //eslint-disable-next-line
        console.log('fetching notes');

        fetch(apiurl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            }
        }).then(response => response.json()).then((data) => {
            console.log(data);
            setNotes(data.notes);
            setLoaded(true);
        }).catch((error) => {
        }
        );
    });

    load();

    //notes.json look like this
    // {
    //     "notes": [
    //         {
    //             "date": "",
    //             "IP": "",
    //             "content": "This is the content of note 1",
    //             "username": ""
    //         }
    //     ]
    // }

    return (
        loaded === false ? <div>Loading...</div> :
        <div className="Notes" style={{ padding: '20px' }}>
            <h1>Notes</h1>
                <b>NOTE:</b> <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    required

                    style={
                        {
                            width: '60%',
                            height: '200px'
                        }}
                />
                <br />
                <b>FROM:</b> <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                {shouldShowSubmitButton ?
                <button onClick={
                    (e) => {
                        handleSubmit(e);
                    }
                } type="submit">Submit</button>: <>Submitting...</>
                }
            <div>
                {notes.map((item) => {
                    return (
                        <div style={{
                            border: '1px solid black',
                            padding: '10px',
                            margin: '10px'
                        
                        }} key={item.username+""+item.id}>
                            <p>Note: {item.content}</p>
                            <p>Date: {item.date}</p>
                            <p>From : {item.username}</p>
                        </div>
                    );
                })}
            </div>
            <br />
            <a href="/">Back Home</a>
        </div>
    );
}
