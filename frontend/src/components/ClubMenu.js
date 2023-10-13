import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AdminContext from "../utils/context/AdminContext";

function ClubMenu() {
    const {clubId} = useParams();
    
    const {admin, setAdmin} = useContext(AdminContext);
    
    return (
        <div className="bg-white w-2/12 flex flex-col m-4 rounded-lg py-8 h-fit flex-initial">
            <Link className="bg-white shadow-lg py-4 px-6 m-4 rounded-lg font-bold hover:bg-yellow-50 text-center" to={"/club/" + clubId}><button>Overview</button></Link>
            <Link className="bg-white shadow-lg py-4 px-6 m-4 rounded-lg font-bold hover:bg-yellow-50 text-center" to={`/club/${clubId}/team`}><button>Team</button></Link>
            <Link className="bg-white shadow-lg py-4 px-6 m-4 rounded-lg font-bold hover:bg-yellow-50 text-center" to={`/club/${clubId}/events`}><button>Events</button></Link>
            {admin === clubId ? <Link className="bg-white shadow-lg py-4 px-6 m-4 rounded-lg font-bold hover:bg-yellow-50 text-center"><button onClick={() => setAdmin(false)}>Logout</button></Link> : 
                <Link className="bg-white shadow-lg py-4 px-6 m-4 rounded-lg font-bold hover:bg-yellow-50 text-center" to={`/club/${clubId}/login`}><button>Login as Admin</button></Link> 
            }   
        </div>
    );
}

export default ClubMenu;