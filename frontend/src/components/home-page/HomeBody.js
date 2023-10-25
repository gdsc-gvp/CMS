import EventPostList from "./EventPostList";
import ClubList from "./ClubList";
import { useEffect, useState } from "react";

function HomeBody() {
    const [eventsList, setEventList] = useState([]);
    useEffect(() => {
       fetchData(); 
    }, []);

    async function fetchData() {
        const respone = await fetch("http://localhost:3000/api/getMain");
        const data = await respone.json();
        setEventList(data);
    }

    if(eventsList.length === 0) {
        return <div>loading...</div>
    }

    return (
        <main className="flex pt-[100px]">
            <ClubList list={eventsList.clubData}/>
            <EventPostList list={eventsList.postData} />
        </main>
    );
}

export default HomeBody;
