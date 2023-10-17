import { useContext } from "react";
import DeleteEvent from "./club-admin/DeleteEvent";
import AdminContext from "../utils/context/AdminContext";
import { useLocation } from "react-router-dom";

function ClubEventPost(props) {
    const {description, date, title, id} = props;

    const location = useLocation();
    const clubId = location.pathname.split('/')[2];
    const {admin} = useContext(AdminContext);

    return (
        <div className="flex m-4 p-2 bg-white rounded-lg cursor-pointer w-full">
            <div className="">
                <img src={require("../images/event-image.jpg")} className="w-[250px]"></img>
            </div>
            <div className="p-4">
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="mb-4">posted on {date}</p>
                <p className="whitespace-pre-wrap">{description.slice(0, 125) + "....."}</p>
                {admin.clubId === clubId && <DeleteEvent id={id} clubId={clubId} />}
            </div>
            
        </div>
    );
}

export default ClubEventPost;