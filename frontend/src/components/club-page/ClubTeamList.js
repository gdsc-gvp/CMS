import { useEffect, useState } from "react";
import ClubTeamMember from "./ClubTeamMember";
import { useParams } from "react-router-dom";
import { getTeamByClubIdApi } from "../../services/apis/public/clubApis.public";

function ClubTeamList() {
  const { clubId } = useParams();
  const [clubTeamList, setClubTeamList] = useState([]);

  useEffect(() => {
    fetchTeamData();
  }, []);

  async function fetchTeamData() {
    const response = await getTeamByClubIdApi({ id: clubId });

    if (response.data) setClubTeamList(response.data);
  }

  if (clubTeamList.length === 0) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-wrap bg-white rounded-lg m-4 justify-around p-6 w-9/12">
      {clubTeamList.map((memeber) => (
        <ClubTeamMember key={memeber.roleId} name={memeber.studentName} role={memeber.roleName} id={memeber.roleId} memeberImage={memeber.profilePic}/>
      ))}
    </div>
  );
}

export default ClubTeamList;
