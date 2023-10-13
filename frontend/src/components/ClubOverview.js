import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminContext from "../utils/context/AdminContext";
import ClubOverViewUpdate from "./club-admin/ClubOverviewUpdate";

function ClubOverview() {
    const {clubId} = useParams();
    const [clubData, setClubData] = useState();
    const {admin} = useContext(AdminContext);

    useEffect(() => {
        fetchClubData();
    }, []);

    async function fetchClubData() {
        const response = await fetch("http://localhost:3000/api/getClub/" + clubId);
        const data = await response.json();
        setClubData(data);
    }

    if(!clubData) {
        return <div>loading....</div>
    }
    
    return (
        <div className="flex bg-white p-4 rounded-lg m-4 h-fit justify-between w-9/12">
            <div className="m-6 flex-1">
                <h1 className="font-bold text-3xl mb-4">{clubData.clubName}</h1>
                <p className="text-justify">{clubData.clubDescription}</p>
            </div>
            <div>
                <img className="w-[300px] rounded-full shadow-lg" src={require("../images/gdsc-logo.png")} alt="club-logo"></img>
            </div>
            {admin.clubId === clubId && <ClubOverViewUpdate/>}
        </div>
    );
}

export default ClubOverview;