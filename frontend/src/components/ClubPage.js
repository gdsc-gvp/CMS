import {Outlet} from "react-router-dom";
import ClubMenu from "./ClubMenu";

function ClubPage() {

    return (
        <div className="flex">
            <ClubMenu/>
            <Outlet/>
        </div>
    );
}

export default ClubPage;