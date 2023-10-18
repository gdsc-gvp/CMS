import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {BASE_API_URL} from '../../utils/constant';
import useAdmin from "../../utils/useAdmin";

function UpdateOverview() {
    const [clubName, setClubName] = useState('');
    const [description, setDescription] = useState();

    const location = useLocation();
    const clubId = location.pathname.split('/')[2];
    const navigate = useNavigate();
    const {admin} = useAdmin();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch(BASE_API_URL + "/getClub/" + clubId);
        const data = await response.json();
        setDescription(data.clubDescription);
        setClubName(data.clubName);
    }

    async function updateOverview() {
        const response = await fetch(BASE_API_URL + "/updateClub", {
            method: 'POST',
            body: JSON.stringify({clubId: clubId, newClubName: clubName, newClubDescription: description}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `BEARER ${admin.accessToken}`
            }
        });
        const data = await response.json();
        navigate(-1);
    }

    if(!description) {
        return <div>loading....</div>
    }

    return (
        <div className="p-2 m-4 flex justify-center items-center w-9/12">
           <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col w-9/12">
                <h1 className="font-bold text-3xl m-2">{clubName}</h1>
                <label className="mx-2">description:</label>
                <textarea value={description} rows={8} onChange={(e) => setDescription(e.target.value)} className="border-yellow-300 border-2 m-2 p-2"/>
                <input className="m-2" type="file"></input>
                <div className="m-2">
                    <button type="submit" className="px-4 py-2 bg-yellow-300 rounded-lg m-2" onClick={updateOverview}>save</button>
                    <button type="cancel" className="px-4 py-2 bg-yellow-300 rounded-lg m-2" onClick={() => navigate(-1)}>cancle</button>
                </div>
           </div>
        </div>
    );
}

export default UpdateOverview;