import { useContext } from "react";
import AdminContext from "../../utils/context/AdminContext";
import { BASE_API_URL } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

function DeleteTeamMember(props) {
    const {roleId, clubId} = props;
    const {admin} = useContext(AdminContext);
    const navigate = useNavigate();

    async function deleteMember() {
        try {
            const response = await fetch(BASE_API_URL + "/deleteRole", {
                method: 'POST',
                body: JSON.stringify({roleId: roleId, clubId: clubId}),
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
        <div>
            <button className="px-4 py-1 bg-yellow-300 rounded-lg" onClick={deleteMember}>delete</button>
        </div>
    );
}

export default DeleteTeamMember;