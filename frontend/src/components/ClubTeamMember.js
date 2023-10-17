import { useContext } from "react";
import { useLocation } from "react-router-dom";
import AdminContext from "../utils/context/AdminContext";
import DeleteTeamMember from "./club-admin/DeleteTeamMember";

function ClubTeamMember(props) {
    const {name, role, id} = props;
    const location = useLocation();
    const clubId = location.pathname.split('/')[2];
    const {admin} = useContext(AdminContext);

    return (
        <div className="flex flex-col items-center mb-8 mx-4 w-3/12">
            <img className="w-[150px] rounded-full shadow-xl" src={require("../images/gdsc-logo.png")}></img>
            <h3 className="font-bold text-2xl">{name}</h3>
            <h5 className="text-xl">{role}</h5>
            {admin.clubId === clubId && <DeleteTeamMember roleId={id} clubId={clubId}/>}
        </div>
    );
}

export default ClubTeamMember;