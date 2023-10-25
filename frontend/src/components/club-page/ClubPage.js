import {Outlet} from "react-router-dom";
import ClubMenu from "./ClubMenu";
import AdminProvider from "../../utils/context/AdminProvider";

function ClubPage() {

    return (
        <AdminProvider>
            <div className="flex pt-[100px]">
                <ClubMenu/>
                <Outlet/>
            </div>
        </AdminProvider>
    );
}

export default ClubPage;