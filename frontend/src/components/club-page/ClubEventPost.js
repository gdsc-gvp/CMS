import { useContext } from "react";
import DeleteEvent from "../club-admin/DeleteEvent";
import AdminContext from "../../utils/context/AdminContext";
import { useLocation, Link } from "react-router-dom";

function ClubEventPost(props) {
    const {description, date, title, id, postImage} = props;

    const location = useLocation();
    const clubId = location.pathname.split('/')[2];
    const {admin} = useContext(AdminContext);

    return (
        <div className="flex m-4 p-2 bg-white rounded-lg cursor-pointer w-full">
            <div className="">
                <img src={postImage} className="w-[250px]" alt="event photo"></img>
            </div>
            <div className="p-4">
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="mb-4">posted on {date}</p>
                <p className="whitespace-pre-wrap">{description.slice(0, 125) + "....."}</p>
                {admin?.clubId === clubId && 
                    <div>
                        <DeleteEvent id={id} clubId={clubId} />
                        <Link className="px-4 py-1 bg-yellow-300 rounded-lg" to={`/club/${clubId}/updatePost/${id}`} state={{clubId, postImage, title, description}}>update</Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default ClubEventPost;