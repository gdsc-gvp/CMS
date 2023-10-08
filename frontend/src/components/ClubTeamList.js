import { useEffect, useState } from "react";
import ClubTeamMember from "./ClubTeamMember";
import {useParams} from "react-router-dom";

function ClubTeamList() {
    const {clubId} = useParams();
    const [clubTeamList, setClubTeamList] = useState([]);

    // useEffect(() => {
    //     fetchTeamData();
    // }, []);

    // async function fetchTeamData() {
    //     const response = await fetch("http://localhost:3000/api/getTeam/" + clubId);
    //     const data = await response.json();
    //     console.log(data);
    //     setClubTeamList(data);
    // }

    // if(clubTeamList.length === 0) {
    //     return <div>loading...</div>
    // }

    return (
        <div className="flex flex-wrap bg-white rounded-lg m-4 justify-around p-6">
            {/* {clubTeamList.map((memeber) => 
                <ClubTeamMember />
            )} */}
            <ClubTeamMember/>
            <ClubTeamMember/>
            <ClubTeamMember/>
            <ClubTeamMember/>
            <ClubTeamMember/>
            <ClubTeamMember/>
        </div>
    );
}

export default ClubTeamList;