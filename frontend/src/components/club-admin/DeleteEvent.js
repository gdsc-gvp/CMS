import { useContext } from 'react';
import {BASE_API_URL} from '../../utils/constant';
import AdminContext from '../../utils/context/AdminContext';
import { useNavigate } from 'react-router-dom';

function DeleteEvent(props) {
    const {id, clubId} = props;
    const {admin} = useContext(AdminContext);
    
    const navigate = useNavigate();
    
    async function deleteEvent() {
        try {
            const response = await fetch(BASE_API_URL + "/deletePost", {
                method: 'POST',
                body: JSON.stringify({clubId: clubId, postId: id}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `BEARER ${admin.accessToken}`
                }
            });

            const data = await response.json();
            navigate(0);
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <div className="my-3">
            <button className="px-4 py-1 rounded-lg bg-yellow-300" onClick={deleteEvent}>delete</button>
        </div>
    );
}

export default DeleteEvent;