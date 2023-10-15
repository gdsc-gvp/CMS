import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AdminContext from "../../utils/context/AdminContext";

function AdminMenu() {
    const {clubId} = useParams();
    const {setAdmin} = useContext(AdminContext);
    return (
        <div className="flex flex-col">
            <Link className="bg-white shadow-lg py-4 px-6 m-4 rounded-lg font-bold hover:bg-yellow-50 text-center"><button onClick={() => setAdmin(false)}>Logout</button></Link>
            <Link className="bg-white shadow-lg py-4 px-6 m-4 rounded-lg font-bold hover:bg-yellow-50 text-center" to={`/club/${clubId}/addTeamMember`}>Add team member</Link>
            <Link className="bg-white shadow-lg py-4 px-6 m-4 rounded-lg font-bold hover:bg-yellow-50 text-center" to={`/club/${clubId}/addEvent`}>Add Event</Link>
        </div>
    );
}

export default AdminMenu;