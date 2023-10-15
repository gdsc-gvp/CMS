import { useContext, useState } from "react";
import AdminContext from "../../utils/context/AdminContext";
import { useLocation, useNavigate } from "react-router-dom";

function AddEvent() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const clubId = location.pathname.split('/')[2];
    const {admin} = useContext(AdminContext);

    async function addPost(e) {
        e.preventDefault();
        
        const respone = await fetch('http://localhost:3000/api/postEvent', {
            method: 'POST',
            body: JSON.stringify({clubId: clubId, postMessage: description, postTitle: title, likeCount: 0}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `BEARER ${admin.accessToken}`
            }
        });

        const data = await respone.json();
        console.log(data);
        navigate(`/club/${clubId}/events`);
    }

    return (
        <div className="flex justify-center w-9/12 items-center">
            <form className="flex flex-col m-2 bg-white rounded-lg shadow-lg p-6 w-8/12" onSubmit={(e) => addPost(e)}>
                <input className="p-2 m-2 border-yellow-300 border-2" type="text" name="title" placeholder="Enter event title" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                <textarea className="p-2 m-2 border-yellow-300 border-2" name="description" placeholder="Enter event description" rows={10} onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                <input type="file" className="p-2 m-2"></input>
                <button type="submit" className="py-2 px-4 bg-yellow-300 w-fit rounded-lg m-4 font-bold text-xl">Add</button>
            </form>
        </div>
    );
}

export default AddEvent;