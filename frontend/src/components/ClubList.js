import ClubCard from "./ClubCard";
import {Link} from "react-router-dom";

function ClubList(props) {
    const {list} = props;
    return (
        <div className="w-3/12 bg-white my-4 mx-4 rounded-lg h-fit">
            <h2 className="font-bold text-2xl py-2 text-center m-4">Clubs</h2>
            {list.map((club) => 
                <Link to={`club/${club._id}/`}><ClubCard name={club.clubName} id={club._id} key={club._id} clubImage={club.clubImage}/></Link>
            )}
        </div>
    );
}

export default ClubList;