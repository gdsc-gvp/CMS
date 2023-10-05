import EventPost from "./EventPost";
import EventPostList from "./EventPostList";
import ClubList from "./ClubList";

function Body() {
    return (
        <main className="flex">
            <ClubList/>
            <EventPostList/>
        </main>
    );
}

export default Body;