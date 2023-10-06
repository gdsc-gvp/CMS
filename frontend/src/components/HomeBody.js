import EventPostList from "./EventPostList";
import ClubList from "./ClubList";

function HomeBody() {
    return (
        <main className="flex">
            <ClubList/>
            <EventPostList/>
        </main>
    );
}

export default HomeBody;