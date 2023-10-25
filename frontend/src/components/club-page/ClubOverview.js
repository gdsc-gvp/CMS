import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminContext from "../../utils/context/AdminContext";
import { getClubByIdApi } from "../../services/apis/public/clubApis.public";

function ClubOverview() {
  const { clubId } = useParams();
  const [clubData, setClubData] = useState();
  const { admin } = useContext(AdminContext);

  useEffect(() => {
    fetchClubData();
  }, []);

  async function fetchClubData() {
    const response = await getClubByIdApi({ id: clubId });

    if (response.data) {
      setClubData(response.data);
    }
  }

  if (!clubData) {
    return <div>loading....</div>;
  }

  return (
    <div className="flex bg-white p-4 rounded-lg m-4 h-fit justify-between w-9/12">
      <div className="m-6 flex-1">
        <h1 className="font-bold text-3xl mb-4">{clubData.clubName}</h1>
        <p className="text-justify whitespace-pre-wrap">{clubData.clubDescription}</p>
      </div>
      <div>
        <img className="w-[300px] h-[300px] rounded-full shadow-lg" src={clubData.clubImage} alt="club-logo"></img>
        {admin?.clubId === clubId && (
          <Link to={`/club/${clubId}/updateOverview`}>
            <button className="m-2 px-4 py-2 rounded-lg bg-yellow-300">update</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ClubOverview;
