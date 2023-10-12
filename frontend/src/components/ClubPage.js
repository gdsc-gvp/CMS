import {Outlet} from "react-router-dom";
import ClubMenu from "./ClubMenu";

function ClubPage() {

    return (
        <div className="flex pt-[100px]">
            <ClubMenu/>
            <Outlet/>
        </div>
    );
}

export default ClubPage;