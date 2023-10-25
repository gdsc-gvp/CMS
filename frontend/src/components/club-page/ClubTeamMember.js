import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AdminContext from "../../utils/context/AdminContext";
import DeleteTeamMember from "../club-admin/DeleteTeamMember";

function ClubTeamMember(props) {
    const {name, role, id, memberImage} = props;
    const location = useLocation();
    const clubId = location.pathname.split('/')[2];
    const {admin} = useContext(AdminContext);

    return (
        <div className="flex flex-col items-center mb-8 mx-4 w-3/12">
            <img className="w-[150px] rounded-full shadow-xl h-[150px]" src={memberImage || require("../../images/default-profile.png")} alt="member profile pic"></img>
            <h3 className="font-bold text-2xl">{name}</h3>
            <h5 className="text-xl">{role}</h5>
            {admin?.clubId === clubId && 
                <div className="flex gap-2 my-2">
                    <Link  to={`/club/${clubId}/updateMember/${id}`} state={{clubId, name, role, memberImage}}>
                        <button className="px-4 py-1 rounded-lg bg-yellow-300">update</button>
                    </Link>
                    <DeleteTeamMember roleId={id} clubId={clubId}/>
                </div>
            }
        </div>
    );
}

export default ClubTeamMember;